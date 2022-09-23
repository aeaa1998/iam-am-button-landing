
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Program, web3 } from '@project-serum/anchor'
import idl from '../../keypair/solana.json'
import { useAnchorWallet } from 'solana-wallets-vue'
import { useWorkspace, getAccountMetaData } from '@/composables';
import { notify } from "@kyvg/vue3-notification";
import { ADD_CREATED_NFT, UPDATE_METADATA_MAPPED } from './types.js'
import { Metadata } from '@metaplex-foundation/mpl-token-metadata'
import { toMetaplexFileFromBrowser } from '@metaplex-foundation/js';


export default {
 setNftMetadata({ commit }, nft){
  //Update nft in state
  commit(UPDATE_METADATA_MAPPED, nft)
 },

 async getNftTransactions ({ commit, state }, nft) {
  let allSignatures = []
  const { connection } = useWorkspace();
  let mintAddress = nft.mint ? nft.mint.address : nft.mintAddress
  let signatures = await connection.getSignaturesForAddress(mintAddress)
  let lastFound = signatures[signatures.length - 1]
  allSignatures = [...signatures]

  while(signatures.length){
      signatures = await connection.getSignaturesForAddress(mintAddress, {
          before: lastFound.signature
      })
      if(signatures.length){
          allSignatures.push(...signatures)
          lastFound = signatures[signatures.length - 1]
      }
  }
  
  state.nftTransactionsMapped[mintAddress.toBase58()] = allSignatures
  
},
//The credentials are a list of nfts that serve to validate if the nft can bee created
async createNft({commit} , {title, description, image, ...metadataBody}){
    const { metaplex, normalWallet } = useWorkspace()
    
    const metafile = await toMetaplexFileFromBrowser(image)
    
    const {uri, metadata} = await metaplex.value.nfts().uploadMetadata({
      name: title,
      description: description,
      image: metafile,
      symbol: title,
      //Append the rest of the metadata
      ...metadataBody
    }).run()
    
    
    try {
      const {
        nft,
        mintAddress,
        metadataAddress,
        masterEditionAddress,
        tokenAddress,
      } = await metaplex.value
        .nfts()
        .create({
          uri,
          name: title,
          // No editions can be printed 
          // maxSupply: null,
          sellerFeeBasisPoints: 200,
          // isCollection: false,
          symbol: title
        })
        .run();

        notify({
          type: "success",
          title: "NFT CREADO 🎉.",
          text: `Se ha creado la credencial: ${title} con éxito`
       })
       return true
    } catch (error) {
      console.error(error)
        notify({
         type: "error",
         title: "Ocurrio un error al crear el nft por favor prueba nuevamente."
      })
      return false
    }

  },
async updateNft({ commit }, {metadata, nft}){
  const { metaplex, normalWallet } = useWorkspace()
  try {
    const { uri: newUri } = await metaplex.value
    .nfts()
    .uploadMetadata({
        ...nft.json,
        ...metadata
    })
    .run();
    await metaplex.value
    .nfts()
    .update({ 
        nftOrSft: nft,
        uri: newUri
    })
    .run();
     // Then the returned NFT should have the updated data.
    const updatedNft = await metaplex.value.nfts().refresh(nft).run();
    
    commit(UPDATE_METADATA_MAPPED, updatedNft)
    notify({
      type: "success",
      title: "NFT EDITADO 🎉.",
      text: `Se ha editado la credencial con éxito`
   }) 
   return updatedNft
  } catch (error) {
    notify({
      type: "error",
      title: "Ocurrio un error al editar el nft por favor prueba nuevamente."
   })
   return null
  }
},

async getNftFromCreator(store, loadMetadata = false) {
  const { connection, wallet, metaplex, identity } = useWorkspace()
  const { state }  = store
  const nfts = await metaplex.value.nfts().findAllByOwner({ owner : identity }).run()
  nfts.forEach((nft) => {
    if(nft.uri != "" && nft.uri != null){
      const key = nft.address.toBase58()
      state.nftsMapped[key] = nft
      if(!state.nftsAddresses.includes(key)){
        state.nftsAddresses.push(key)
      }
      if(loadMetadata) {
        //If it loads metadata  in the same action fire it
        (async function(metadata) {
          getAccountMetaData(metadata, store)
          store.dispatch("getNftTransactions", metadata)
        })(nft)
      }
    }
  })

  
 },

 async getCandyMachines(store, mintAddress = undefined){
  const { state, getters }  = store
  const { metaplex, wallet } = useWorkspace();
  if(!mintAddress || !(mintAddress in getters.candyMachinesMintMapped)){
    const candyMachines = await metaplex.value.candyMachines().findAllBy({ type: "wallet", publicKey: metaplex.value.identity().publicKey }).run();
    candyMachines.forEach((candyMachine) => {
      //Use the mint address
      //Alias the nft
      const key = candyMachine.address.toBase58()
      state.candyMachinesMapped[key] = candyMachine
      if(!state.candyMachinesAddresses.includes(key)){
        state.candyMachinesAddresses.push(key)
      }
    })
  }
 } 
}
 