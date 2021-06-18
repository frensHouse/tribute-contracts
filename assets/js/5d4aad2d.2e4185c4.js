(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1363:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"extensions",title:"Extensions"},c={unversionedId:"intro/design/extensions",id:"intro/design/extensions",isDocsHomePage:!1,title:"Extensions",description:"Extensions are conceived to isolate the complexity of state changes from the DaoRegistry Contract, and to simplify the core logic.",source:"@site/docs/intro/design/Extensions.md",sourceDirName:"intro/design",slug:"/intro/design/extensions",permalink:"/tribute-contracts/docs/intro/design/extensions",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/intro/design/Extensions.md",version:"current",frontMatter:{id:"extensions",title:"Extensions"},sidebar:"docs",previous:{title:"Core",permalink:"/tribute-contracts/docs/intro/design/core"},next:{title:"Adapters",permalink:"/tribute-contracts/docs/intro/design/adapters"}},p=[],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Extensions are conceived to isolate the complexity of state changes from the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/core/dao-registry"},"DaoRegistry Contract")),", and to simplify the core logic."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Essentially an Extension is similar to an Adapter, but the main difference is that it can be used by several adapters, and by the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/core/dao-registry"},"DaoRegistry Contract"))," - which end up enhancing the DAO capabilities and the state management without cluttering the DAO core contract."))),(0,o.kt)("p",null,"We currently have some extensions in place that can help you to launch your DAO:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/extensions/bank-extension"},"Bank")),": adds the banking capabilities to the DAO, and keeps track of the DAO accounts and internal token balances.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/extensions/nft-extension"},"NFT")),": adds to the DAO the capability of managing and curating a collection of standard NFTs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/extensions/erc20-extension"},"ERC20")),": adds to the DAO the capability of managing and transfer internal tokens between members and/or external accounts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/extensions/executor-extension"},"Executor")),": adds to the DAO the capability of executing delegated calls to other contracts, including contracts that are not part of the DAO, using the EVM instruction ",(0,o.kt)("inlineCode",{parentName:"p"},"delegatecall"),"."))),(0,o.kt)("p",null,"Each extension is tied to a particular DAO address. You can not share the exact same extension between different DAOs, otherwise you would be sharing your DAO state, hence other DAOs would be able to modify it. When we launch a new DAO, we deploy a new instance of each extension, by using the Clone Factory pattern, and then we associate that new instance address to your new DAO. With this approach we ensure that the DAO and Extensions states are consistent, and not shared."),(0,o.kt)("p",null,"On the other hand, the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/adapters"},"Adapters"))," may use the extensions to keep track of additional state changes in the DAO, for instance: updating the bank balance, onboarding new members using NFT tributes, etc."))}d.isMDXComponent=!0}}]);