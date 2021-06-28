(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5431],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2056:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c=["components"],p={id:"deployment",title:"Deployment"},i={unversionedId:"subgraph/deployment",id:"subgraph/deployment",isDocsHomePage:!1,title:"Deployment",description:"Managing different network deployments for the contracts, is currently setup using a config file in config/subgraph-config.json, providing the network, start block, subgraph directory, github username, and contract address for the DaoFactory and optional adapters:",source:"@site/docs/subgraph/Deployment.md",sourceDirName:"subgraph",slug:"/subgraph/deployment",permalink:"/tribute-contracts/docs/subgraph/deployment",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/subgraph/Deployment.md",version:"current",frontMatter:{id:"deployment",title:"Deployment"},sidebar:"docs",previous:{title:"Development",permalink:"/tribute-contracts/docs/subgraph/setup/local-development"}},l=[],s={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managing different network deployments for the contracts, is currently setup using a config file in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/subgraph-config.json"),", providing the network, start block, subgraph directory, github username, and contract address for the DaoFactory and optional adapters:"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "network": "rinkeby",\n    "daoFactoryAddress": "0x10a14A1665DE72faeDb866Fc75c57036813E2Eb2",\n    "daoFactoryStartBlock": 6204221,\n    "couponOnboardingAddress": "0x20a14A1665DE72faeDb866Fc75c57036813E2Eb3",\n    "couponOnboardingStartBlock": 7204228,\n    "GITHUB_USERNAME": "openlawteam",\n    "SUBGRAPH_NAME": "tribute-dev"\n  },\n  {\n    "network": "mainnet",\n    "daoFactoryAddress": "0xac665be1e44cc4eec388e34c3899c271fee847f4",\n    "daoFactoryStartBlock": 8332211,\n    "GITHUB_USERNAME": "openlawteam",\n    "SUBGRAPH_NAME": "tribute-prod"\n  }\n]\n')),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," (create ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file if necessary):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GRAPH_ACCESS_TOKEN=...\n")),(0,a.kt)("p",null,"Then from the ",(0,a.kt)("inlineCode",{parentName:"p"},"subgraph")," directory, simply run the following command to deploy the subgraphs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx ts-node subgraph-deployer.ts\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/deploy-a-subgraph#redeploying-a-subgraph"},"here")," for more information"))}u.isMDXComponent=!0}}]);