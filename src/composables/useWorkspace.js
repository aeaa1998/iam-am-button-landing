import { Connection, clusterApiUrl, PublicKey, Keypair } from '@solana/web3.js';
import { AnchorProvider, Program } from '@project-serum/anchor'
import idl from '../keypair/solana.json'
import { useAnchorWallet, useWallet } from 'solana-wallets-vue'
import { computed } from 'vue';
import { keypairIdentity, Metaplex, walletAdapterIdentity } from '@metaplex-foundation/js';
import keyPairIdent from '../keypair/keypair.json'
import allowedKeyPairs from '../keypair/allowedKeyPairs.json'


const programID = new PublicKey(idl.metadata.address)
let workspace = null

export const useWorkspace = () => workspace

export const initWorkspace = () => {
    const tempArraySecret = Object.values(keyPairIdent._keypair.secretKey);
    const secret = new Uint8Array(tempArraySecret)
        
    const keyPair = Keypair.fromSecretKey(secret);
    const wallet = useAnchorWallet()
    const {wallet: normalWallet} = useWallet()
    const options = AnchorProvider.defaultOptions();
    // const connection = new Connection(clusterApiUrl('devnet'), options.commitment)
    const connection = new Connection(clusterApiUrl('devnet'))
    const provider = computed(() => new AnchorProvider(connection, wallet.value, options))
    const program = computed(() => new Program(idl, programID, provider.value))
    const metaplex =  Metaplex.make(connection)
        
    
    const isValidWallet = computed(() => wallet.value && allowedKeyPairs.includes(wallet.value.publicKey.toBase58()))

    workspace = {
        wallet,
        connection,
        provider,
        program,
        metaplex: metaplex,
        normalWallet,
        identity: keyPair.publicKey,
        isValidWallet
    }
}