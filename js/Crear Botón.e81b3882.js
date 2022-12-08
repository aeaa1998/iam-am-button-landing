"use strict";(self["webpackChunkiam_button_creator"]=self["webpackChunkiam_button_creator"]||[]).push([[516],{10981:(e,l,a)=>{a.r(l),a.d(l,{default:()=>pe});var t=a(66252),n=a(2262),i=a(3577);const s={__name:"Step",props:{text:{type:String},step:{type:[Number,String]},selected:{type:Boolean}},setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,i.C_)(["flex items-center gap-x-4 text-xl pb-3",{"border-b-2  border-pink-400/40":e.selected}])},[(0,t._)("div",{class:(0,i.C_)(["transition-colors rounded-full h-11 aspect-square flex items-center text-center font-bold text-white shadow place-content-center",{"bg-gradient-to-r from-pink-300/60 to-indigo-400/60":e.selected,"bg-gray-400":!e.selected}])},(0,i.zw)(e.step),3),(0,t.Uk)(" "+(0,i.zw)(e.text),1)],2))}},r=s,d=r,o=JSON.parse('[{"name":"I AM GT DEMO","address":"iB2MwzS8H5jm8gPvhzyrdDKPi8naL3U4ZQsQspnuXLy"}]');var c=a(12954),u=a(30756),p=a(59917);const m={key:0,class:"bg-primary-50/50 p-6 max-h-full overflow-y-auto rounded-lg"},f={class:"flex flex-col min-h-[65vh]"},v=(0,t._)("div",{class:"text-3xl text-primary-600 font-bold"},"Agregar credencial",-1),g=(0,t._)("p",null,"Selecciona primero la entidad dueña de la credencial y luego selecciona la credenciales (se pueden agregar más de una credencial a la vez)",-1),x={class:"py-6 grow"},b={class:"flex justify-end"},w=(0,t.Uk)(" Agregar "),_={__name:"AddCredentialModal",props:{isVisible:{type:Boolean},selected:{type:Array,default:[]}},emits:["update:isVisible","options:addedCredentials"],setup(e,{emit:l}){const a=e,i=(0,n.iH)(o),{selected:s}=(0,n.BK)(a),r=(0,t.f3)("nftsMappedByAddress",{}),{metaplex:d}=(0,u.cF)(),{values:_,meta:h,setFieldValue:y}=(0,c.cI)(),k=(0,t.Fl)((()=>a.isVisible)),C=(0,t.Fl)({get:()=>k.value,set:e=>l("update:isVisible",e)}),S=(0,t.Fl)((()=>{if(_.provider){const e=r.value[_.provider.address]??[];return e.filter((e=>!s.value.includes(e.address.toBase58())))}return[]})),F=async e=>{e.fetching=!0;const l=new p.nh(e.address),a=await d.nfts().findAllByOwner({owner:l}),t=await Promise.all(a.map((e=>d.nfts().load({metadata:e}))));r.value[e.address]=t.filter((e=>e.json&&"credential"==e.json.model&&e.uri.includes("nft-metadata-augus")&&null==e.collection)),e.fetching=!1};(0,t.YP)((()=>_.provider),(e=>{y("credentials",null),e&&!r.value[e.address].length&&F(e)}));const V=()=>{l("options:addedCredentials",_),C.value=!1};return(e,l)=>{const a=(0,t.up)("v-select"),s=(0,t.up)("v-primary-button"),r=(0,t.up)("modal");return(0,t.wg)(),(0,t.j4)(r,{modelValue:(0,n.SU)(C),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(C)?C.value=e:null),class:"w-full sm:w-5/6 md:w-4/5 max-h-full rounded-lg",classWrapper:"!max-h-full "},{default:(0,t.w5)((()=>[(0,n.SU)(C)?((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("div",f,[v,g,(0,t._)("div",x,[(0,t.Wm)(a,{name:"provider",label:"Nombre de la entidad que emite la credencial",placeholder:"Selecciona la entidad",rules:"required",options:i.value,reduce:e=>e,getOptionLabel:e=>e.name},null,8,["options","reduce","getOptionLabel"]),(0,t.Wm)(a,{name:"credentials",label:"Credenciales por agregar",placeholder:"Selecciona las credenciales",multiple:"",disabled:!(0,n.SU)(_).provider,rules:"required",options:(0,n.SU)(S),reduce:e=>e,getOptionLabel:e=>e.name,loading:(0,n.SU)(_).provider&&(0,n.SU)(_).provider.fetching},null,8,["disabled","options","reduce","getOptionLabel","loading"])]),(0,t._)("div",b,[(0,t.Wm)(s,{onClick:V,disabled:!(0,n.SU)(h).valid,class:"min-w-[180px]"},{default:(0,t.w5)((()=>[w])),_:1},8,["disabled"])])])])):(0,t.kq)("",!0)])),_:1},8,["modelValue"])}}},h=_,y=h,k=["src"],C={class:"text-2xl w-full text-center"},S={__name:"OutputOption",props:["name","image","selected"],setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,i.C_)(["rounded-lg px-20 py-4 cursor-pointer transition transform duration-200 hover:scale-110",{"shadow-xl shadow-primary-200/80":e.selected,shadow:!e.selected}])},[(0,t._)("img",{src:e.image,class:"w-28 rounded my-4"},null,8,k),(0,t._)("h4",C,(0,i.zw)(e.name),1)],2))}},F=S,V=F;var U=a(36432);const j=a.p+"img/vue.33a63526.png",q=a.p+"img/react.ccbf92ab.png",A={class:"pt-24 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"},W={class:"container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between"},B=(0,t._)("div",{class:"flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"},[(0,t._)("p",{class:"uppercase tracking-loose w-full"},"Crea tu botón"),(0,t._)("h1",{class:"my-4 text-5xl font-bold leading-tight"},"Sigue las instrucciones para poder crear tu botón")],-1),D=(0,t._)("div",{class:"relative bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"},[(0,t._)("svg",{viewBox:"0 0 1428 174",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,t._)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[(0,t._)("g",{transform:"translate(-2.000000, 44.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[(0,t._)("path",{d:"M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",opacity:"0.100000001"}),(0,t._)("path",{d:"M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",opacity:"0.100000001"}),(0,t._)("path",{d:"M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",id:"Path-4",opacity:"0.200000003"})]),(0,t._)("g",{transform:"translate(-4.000000, 76.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[(0,t._)("path",{d:"M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"})])])])],-1),L={class:"flex flex-wrap w-full container mx-auto px-3 pb-8 mt-8"},H={class:"w-full md:w-1/3 lg:w-1/4"},z={class:"w-full md:w-2/3 lg:w-3/4 md:pl-8"},O={class:"flex justify-between"},M=(0,t._)("h1",{class:"text-4xl text-pink-400"},"Credenciales",-1),Y={class:"flex items-center px-2"},I=(0,t._)("div",{class:"mr-3 hidden sm:block"},"Agregar credencial",-1),P=(0,t._)("hr",{class:"mt-3 dark:border-pink-300 border-t-2 rounded mb-8"},null,-1),K={key:0,class:"flex flex-col items-center"},Z=(0,t._)("div",{class:"text-xl font-semibold text-center mt-2"},"Aún no has agregado ni una credencial es necesario agregar al menos una credencial para poder proceder.",-1),$={class:"text-xl mb-4"},J={class:"flex overflow-x-auto gap-x-8"},N=(0,t._)("h1",{class:"w-full text-4xl text-pink-400"},"Formato de salida",-1),E=(0,t._)("hr",{class:"mt-3 dark:border-pink-300 border-t-2 rounded mb-8"},null,-1),Q=(0,t._)("p",null,"Selecciona el formato de salida que deseas para tu código",-1),G={class:"flex flex-wrap gap-12 mt-8"},R=(0,t._)("h1",{class:"w-full text-4xl text-pink-400"},"Preview",-1),T=(0,t._)("hr",{class:"mt-3 dark:border-pink-300 border-t-2 rounded mb-8"},null,-1),X=(0,t._)("p",null,"A continuación se te mostrara el resultado de tu configuración para verificar las credenciales seleccionadas.",-1),ee={class:"my-14"},le=(0,t._)("h2",{class:"w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"},"# Usando NPM",-1),ae={class:"my-14"},te=(0,t._)("h2",{class:"w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"},"# Usando Yarn",-1),ne={class:"my-14"},ie={class:"w-full my-2 text-3xl font-bold leading-tight text-left mb-8 text-pink-400"},se={class:"flex w-full justify-center items-center px-2"},re=(0,t._)("div",{class:"ml-3"},"Atras",-1),de={class:"flex w-full justify-center items-center px-2"},oe=(0,t._)("div",{class:"mr-3"},"Siguiente",-1),ce={__name:"CreateButton",setup(e){const l=(0,n.iH)(0),a=(0,n.iH)(null),s=o.reduce(((e,l)=>(e[l.address]=l,e)),{}),r=(0,n.iH)(o.reduce(((e,l)=>(e[l.address]=[],e)),{})),c=["Selecciona tus credenciales","Escoje tu formato","Preview"],u=(0,n.iH)(!1),p=(0,n.iH)(o.reduce(((e,l)=>(e[l.address]=[],e)),{})),m=(0,t.Fl)((()=>Object.keys(r.value).reduce(((e,l)=>(e.push(...r.value[l].map((e=>e.address.toBase58()))),e)),[]))),f=(0,t.Fl)((()=>0==l.value?m.value.length>0:1==l.value&&null!=a.value)),v=(0,t.Fl)((()=>Object.keys(r.value).filter((e=>r.value[e].length>0)))),g=(0,t.Fl)((()=>"vue"==a.value?"yarn add i-am-verifiable-button":`yarn add i-am-verifiable-button-${a.value}`)),x=(0,t.Fl)((()=>"vue"==a.value?"npm install -i  i-am-verifiable-button":`npm install -i i-am-verifiable-button-${a.value}`)),b=(0,t.Fl)((()=>m.value.map((e=>`"${e}"`)).join(", "))),w=(0,t.Fl)((()=>"vue"==a.value?`\n    <template>\n        <h1>Verificar que se tengan credenciales </h1>\n        <i-am-veritiable-button \n          v-bind:loading="isLoading"\n          :requisites="requisites"\n          @failed="onVerificationSucceded"\n          @succeded="onVerificationFailed"\n        >\n          Verify\n        </i-am-veritiable-button>\n    </template>\n    \n    //Setup code\n      import IAmVerifiableButton from 'i-am-verifiable-button-react';\n      import { ref } from 'vue'\n      const requisites = [${b.value}]\n      const isLoading = ref(false)\n        const onVerificationSucceded = () => {\n        alert('Verification succeded')\n      }\n\n      //It can recieve a error parameter e\n      const onVerificationFailed = () => {\n        alert('Verification failed')\n      }\n\n    `:`\n  import IAmVerifiableButton from 'i-am-verifiable-button';\n\n  const requisites = [${b.value}]\n  const onVerificationSucceded = () => {\n    alert('Verification succeded')\n  }\n\n  //It can recieve a error parameter e\n  const onVerificationFailed = () => {\n    alert('Verification failed')\n  }\n\n  const Demo = () => {\n    const [loading, setLoading] = useState(false);\n\n    return (\n      <div>\n        <h1>Verificar que se tengan credenciales </h1>\n        <IAmVerifiableButton \n        loading={loading}\n          setLoading={setLoading}\n          requisites={requisites}\n          onVerificationSucceded={onVerificationSucceded}\n          onVerificationFailed={onVerificationFailed}\n        >\n          Verify\n        </IAmVerifiableButton>\n      </Form>\n    );\n  };\n\n  export default Demo;\n  `));(0,t.JJ)("nftsMappedByAddress",p);const _=({provider:e,credentials:l})=>{r.value[e.address].push(...l)},h=()=>{l.value+=1};return(e,o)=>{const p=(0,t.up)("lottie-player"),b=(0,t.up)("font-awesome-icon"),k=(0,t.up)("v-primary-button"),C=(0,t.up)("highlightjs"),S=(0,t.up)("v-cancel-button");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)((0,n.SU)(y),{selected:(0,n.SU)(m),"is-visible":u.value,"onUpdate:is-visible":o[0]||(o[0]=e=>u.value=e),"onOptions:addedCredentials":_},null,8,["selected","is-visible"]),(0,t._)("div",A,[(0,t._)("div",W,[B,(0,t.Wm)(p,{src:"https://assets3.lottiefiles.com/packages/lf20_1aqc3umv.json",background:"transparent",speed:"1",class:"w-3/5 md:w-2/6 lg:w-1/6 aspect-square",loop:"",autoplay:""})])]),D,(0,t._)("div",L,[(0,t._)("div",H,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(c,((e,a)=>(0,t.Wm)(d,{class:"mb-4 last:mb-0",key:e,selected:l.value==a,text:e,step:a+1},null,8,["selected","text","step"]))),64))]),(0,t._)("div",z,[0==l.value?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("div",O,[M,(0,t.Wm)(k,{class:"rounded-full flex items-center",style:{"min-width":"40px",height:"40px"},onClick:o[1]||(o[1]=e=>u.value=!0)},{default:(0,t.w5)((()=>[(0,t._)("div",Y,[I,(0,t.Wm)(b,{icon:"fa-solid fa-plus"})])])),_:1})]),P,(0,n.SU)(m).length?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",K,[(0,t.Wm)(p,{class:"self-center mt-4",src:"https://assets4.lottiefiles.com/private_files/lf30_e3pteeho.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px"},loop:"",autoplay:""}),Z])),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(v),(e=>((0,t.wg)(),(0,t.iD)("div",{key:e},[(0,t._)("h3",$,"Credenciales de "+(0,i.zw)((0,n.SU)(s)[e].name),1),(0,t._)("div",J,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.value[e],(e=>((0,t.wg)(),(0,t.j4)(U.Z,{key:e.address.toBase58(),nft:e},null,8,["nft"])))),128))])])))),128))],64)):1==l.value?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[N,E,Q,(0,t._)("div",G,[(0,t.Wm)((0,n.SU)(V),{onClick:o[2]||(o[2]=e=>a.value="vue"),selected:"vue"==a.value,name:"VueJS",image:(0,n.SU)(j)},null,8,["selected","image"]),(0,t.Wm)((0,n.SU)(V),{onClick:o[3]||(o[3]=e=>a.value="react"),selected:"react"==a.value,name:"React",image:(0,n.SU)(q)},null,8,["selected","image"])])],64)):2==l.value?((0,t.wg)(),(0,t.iD)(t.HY,{key:2},[R,T,X,(0,t._)("p",null,"Antes de comenzar asegurate de tener instalado el componente de "+(0,i.zw)(a.value),1),(0,t._)("div",ee,[le,(0,t.Wm)(C,{language:"js",code:(0,n.SU)(x)},null,8,["code"])]),(0,t._)("div",ae,[te,(0,t.Wm)(C,{language:"javascript",code:(0,n.SU)(g)},null,8,["code"])]),(0,t._)("div",ne,[(0,t._)("h2",ie,"# Código para "+(0,i.zw)(a.value),1),(0,t.Wm)(C,{language:"javascript",code:(0,n.SU)(w)},null,8,["code"])])],64)):(0,t.kq)("",!0),(0,t._)("div",{class:(0,i.C_)(["flex mt-16",{"justify-between":l.value>0,"justify-end":0==l.value}])},[l.value>0?((0,t.wg)(),(0,t.j4)(S,{key:0,onClick:o[4]||(o[4]=e=>l.value=l.value-1),class:"rounded-full flex min-w-[180px]"},{default:(0,t.w5)((()=>[(0,t._)("div",se,[(0,t.Wm)(b,{icon:"fa-solid fa-chevron-left"}),re])])),_:1})):(0,t.kq)("",!0),2!=l.value?((0,t.wg)(),(0,t.j4)(k,{key:1,disabled:!(0,n.SU)(f),onClick:h,class:"rounded-full flex items-center min-w-[180px]"},{default:(0,t.w5)((()=>[(0,t._)("div",de,[oe,(0,t.Wm)(b,{icon:"fa-solid fa-chevron-right"})])])),_:1},8,["disabled"])):(0,t.kq)("",!0)],2)])])],64)}}},ue=ce,pe=ue}}]);
//# sourceMappingURL=Crear Botón.e81b3882.js.map