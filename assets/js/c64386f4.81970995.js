"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[909],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2307:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"relayer-api",title:"Relayer API",sidebar_position:4},s=void 0,c={unversionedId:"tools/relayer-api",id:"tools/relayer-api",isDocsHomePage:!1,title:"Relayer API",description:"Create Universal Profile",source:"@site/docs/tools/relayer-api.md",sourceDirName:"tools",slug:"/tools/relayer-api",permalink:"/tools/relayer-api",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/relayer-api.md",version:"current",sidebarPosition:4,frontMatter:{id:"relayer-api",title:"Relayer API",sidebar_position:4},sidebar:"toolsSidebar",previous:{title:"Getting Started",permalink:"/tools/lsp-factoryjs/getting-started"},next:{title:"ERC725 Tools",permalink:"/tools/erc725-tools"}},p=[{value:"Create Universal Profile",id:"create-universal-profile",children:[{value:"Payload",id:"payload",children:[]},{value:"Response",id:"response",children:[]}]},{value:"Smart contracts",id:"smart-contracts",children:[]}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-universal-profile"},"Create Universal Profile"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("a",{parentName:"p",href:"/standards/universal-profile"},"Universal Profile")," with a key manager and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-1-UniversalReceiver.md"},"LSP-1 UniversalReceiver Delegate")," contract:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-POST-green",alt:"post"})," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://relayer.lukso.network/create-profile")),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ownerAddress": "0xAF3Bf2FFb025098B79CADdfBdD113B3681817744",\n    "salt": "0xAd5b8C240097b7c9F8A8151C13F897B1093703C8a6b80bde39837c769f4c1079",\n    "profileJsonUrl": "ipfs://XXXX"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ownerAddress"),": the public key you control. This key will be granted an executor role in the key manager."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"salt"),": some random 32 bytes to determine the address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"profileJsonUrl"),": (optional) the ",(0,o.kt)("a",{parentName:"li",href:"/standards/universal-profile"},"LSP3Profile")," JSON file, http(s) doesn't work yet.")),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0xb6c076B6D368df8C54ab26b39467c113fBEFFc95",\n    "ownerAddress": "0xAF3Bf2FFb025098B79CADdfBdD113B3681817744",\n    "keyManagerAddress": "0x44dcC53994F1dFBa7c3f6f73E7c4E02B9F1817de",\n    "universalDelegateAddress": "0xBF32C2E62d2C239f8F3ea2d5E03dfAeE11bBab7E"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address"),": address of the deployed Universal Profile contract. You can view this profile on ",(0,o.kt)("inlineCode",{parentName:"li"},"https://universalprofile.cloud/{address}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ownerAddress"),": same as above, the public key you control."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keyManagerAddress"),": address of the deployed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/universalprofile-smart-contracts/blob/legacy-contracts/contracts/KeyManager/SimpleKeyManager.sol"},"SimpleKeyManager")," smart contract. This key manager smart contract has ownership on the Universal Profile smart contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"universalDelegateAddress"),": address of the deployed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/universalprofile-smart-contracts/blob/legacy-contracts/contracts/UniversalReceiver/UniversalReceiverAddressStore.sol"},"UniversalReceiverAddressStore")," delegate smart contract.")),(0,o.kt)("h2",{id:"smart-contracts"},"Smart contracts"),(0,o.kt)("p",null,"The source code of the deployed smart contracts is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/universalprofile-smart-contracts/tree/legacy-contracts"},"universalprofile-smart-contracts")," repository. The relayer currently deploys the legacy smart contracts. The relayer and this documentation will be updated once the new Universal Profile smart contracts are available."))}u.isMDXComponent=!0}}]);