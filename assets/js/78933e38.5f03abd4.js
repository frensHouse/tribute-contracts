(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2914],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6201:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={id:"adapters",title:"Adapters"},d={unversionedId:"intro/design/adapters",id:"intro/design/adapters",isDocsHomePage:!1,title:"Adapters",description:"Once a DAO is created using the core contracts, and extensions, it can be extended and modified with different adapters. Adapters make it easy to assemble a DAO like lego blocks, by adding to a DAO narrowly-defined, tested, and extensible smart contracts created for specific purposes. Adapters and extensions make DAOs more modular, upgradeable, and also enable us to work together to build robust DAO tooling. They can be added to a TributeDAO via a DAO vote process, or during the DAO deployment phase.",source:"@site/docs/intro/design/Adapters.md",sourceDirName:"intro/design",slug:"/intro/design/adapters",permalink:"/tribute-contracts/docs/intro/design/adapters",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/intro/design/Adapters.md",version:"current",frontMatter:{id:"adapters",title:"Adapters"},sidebar:"docs",previous:{title:"Extensions",permalink:"/tribute-contracts/docs/intro/design/extensions"},next:{title:"Access Control",permalink:"/tribute-contracts/docs/intro/design/access-control"}},l=[{value:"Existing adapters",id:"existing-adapters",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Distribution",id:"distribution",children:[]},{value:"Exiting",id:"exiting",children:[]},{value:"Funding",id:"funding",children:[]},{value:"Onboarding",id:"onboarding",children:[]},{value:"Voting",id:"voting",children:[]}]},{value:"Creating an adapter",id:"creating-an-adapter",children:[]}],p={toc:l};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once a DAO is created using the core contracts, and extensions, it can be extended and modified with different adapters. Adapters make it easy to assemble a DAO like lego blocks, by adding to a DAO narrowly-defined, tested, and extensible smart contracts created for specific purposes. Adapters and extensions make DAOs more modular, upgradeable, and also enable us to work together to build robust DAO tooling. They can be added to a TributeDAO via a DAO vote process, or during the DAO deployment phase."),(0,o.kt)("p",null,"An adapter can be defined as Proposal or Generic type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Proposal"),": updates the DAO state based on a proposal, and the proposal needs to pass, otherwise the DAO state changes are not applied, e.g: ",(0,o.kt)("a",{parentName:"li",href:"/docs/adapters/exiting/guild-kick-adapter"},"GuildKick.sol"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Generic"),": updates the DAO state without a proposal process, e.g: ",(0,o.kt)("a",{parentName:"li",href:"/docs/adapters/distribution/withdraw-adapter"},"Withdraw.sol"),".")),(0,o.kt)("h2",{id:"existing-adapters"},"Existing adapters"),(0,o.kt)("p",null,"TributeDAO Framework provides several types of Adapters that can be used in your DAO. Most of these adapters make it feature compatible with Moloch v2."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Adapters do not keep track of the state of the DAO. It might use its own storage to control state, but ideally any DAO state change must be propagated to the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/core/dao-registry"},"DAORegistry Core Contract")),"."))),(0,o.kt)("p",null,"The range of potential adapters will expand over time and likely will include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Streams" to manage a DAO\'s treasury in a more agile way;'),(0,o.kt)("li",{parentName:"ul"},"Alternative voting structures to layer to improve DAO governance, including quadratic voting, one-member-one-vote voting;"),(0,o.kt)("li",{parentName:"ul"},"Swaps of one token for another;"),(0,o.kt)("li",{parentName:"ul"},"Streaming payments;"),(0,o.kt)("li",{parentName:"ul"},"DAO-to-DAO voting;"),(0,o.kt)("li",{parentName:"ul"},"Creating a liquidity pool for a DAO's native asset;"),(0,o.kt)("li",{parentName:"ul"},"Staking or depositing assets into existing DeFi projects (like Aave, Compound, or Lido).")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Adapters just execute smart contract logic that changes the state of the DAO by calling the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/core/dao-registry"},"DAORegistry Core Contract")),". They also can compose complex calls that interact with External World, other Adapters or even Extensions, to pull/push additional information."))),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Adapters that allow the members, individuals, and the DAO owner to perform any sort of configuration in the DAO. Usually the configurations are parameters that can be used by other Adapters, Extensions, and Core Contract. Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/configuration/configuration-adapter"},"Configuration")),": manages storing and retrieving per-DAO settings required by shared adapters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/configuration/managing-adapter"},"Managing")),": enhances the DAO capabilities by adding/updating the DAO Adapters through a voting process.")),(0,o.kt)("h3",{id:"distribution"},"Distribution"),(0,o.kt)("p",null,"Adapters that allow members to distribute/withdraw funds from the DAO Bank. Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/distribution/distribute-adapter"},"Distribute")),": allows the members to distribute funds to one or all members of the DAO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/distribution/withdraw-adapter"},"Withdraw")),": allows the members to withdraw their funds from the DAO bank.")),(0,o.kt)("h3",{id:"exiting"},"Exiting"),(0,o.kt)("p",null,"Adapters that allow members to exit the DAO individually or collectively kick a bad actor. Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/exiting/guild-kick-adapter"},"GuildKick")),": gives the members the freedom to choose which individuals or organizations should really be part of the DAO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/exiting/rage-quit-adapter"},"Ragequit")),": gives the members the freedom to choose when it is the best time to exit the DAO for any given reason.")),(0,o.kt)("h3",{id:"funding"},"Funding"),(0,o.kt)("p",null,"Adapters that allow any individuals/members to request funds from the DAO Bank to fund external projects through a proposal process. Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/funding/financing-adapter"},"Financing")),": allows individuals and/or organizations to request funds to finance their projects, and the members of the DAO have the power to vote and decide which projects should be funded.")),(0,o.kt)("h3",{id:"onboarding"},"Onboarding"),(0,o.kt)("p",null,"Adapters that allow new individuals to join the DAO by providing some sort of tribute. Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/onboarding/onboarding-adapter"},"ETH/ERC20 Onboarding")),": triggers the process of minting internal tokens in exchange of a specific token at a fixed price."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/onboarding/coupon-onboarding-adapter"},"Coupon Onboarding")),": triggers the process of minting internal tokens in exchange of a specific token at a fixed price."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/onboarding/tribute-adapter"},"Tribute")),": allows potential and existing DAO members to contribute any amount of ERC-20 tokens to the DAO in exchange for any amount of DAO internal tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/onboarding/tribute-nft-adapter"},"TributeNFT")),": allows potential DAO members to contribute a registered ERC-721 asset to the DAO in exchange for any amount of DAO units.")),(0,o.kt)("h3",{id:"voting"},"Voting"),(0,o.kt)("p",null,"Adapters that allow different types governance systems within the DAO. Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/voting/batch-voting-adapter"},"Batch Voting")),": adds the simple on chain voting governance process to the DAO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters/voting/basic-voting-adapter"},"Basic Voting")),": adds the simple on chain voting governance process to the DAO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"docs/adapters/voting/offchain-voting-adapter"},"OffchainVoting")),": adds the offchain voting governance process to the DAO to support gasless voting.")),(0,o.kt)("h2",{id:"creating-an-adapter"},"Creating an adapter"),(0,o.kt)("p",null,"Creating an adapter is straight forward and should save developers engineering time. Each adapter needs to be configured with the ",(0,o.kt)("a",{parentName:"p",href:"#access-control-layer"},"Access Flags")," in order to access the ",(0,o.kt)("a",{parentName:"p",href:"#core-contracts"},"Core Contracts"),", and/or ",(0,o.kt)("a",{parentName:"p",href:"#extensions"},"Extensions"),". Otherwise the Adapter will not able to pull/push information to/from the DAO."),(0,o.kt)("p",null,"Please note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The adapter must follow the rules defined by the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openlawteam/tribute-contracts/blob/master/docs/adapters/Template.md"},"Template Adapter"),"."),(0,o.kt)("li",{parentName:"ul"},"If you want to contribute and create an Adapter, please checkout this: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openlawteam/tribute-contracts/blob/master/docs/adapters/HowToCreate.md"},"How to create an Adapter"),".")))}c.isMDXComponent=!0}}]);