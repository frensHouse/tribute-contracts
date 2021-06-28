(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5094],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(d,".").concat(h)]||c[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7718:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],s={id:"distribute-adapter",title:"Distribute"},d={unversionedId:"contracts/adapters/distribution/distribute-adapter",id:"contracts/adapters/distribution/distribute-adapter",isDocsHomePage:!1,title:"Distribute",description:"The Distribute Adapter provides features in which the DAO members can receive funds from the DAO for any given reason. A good example of that is when the members collectively agree to payout dividends to one or all member of the DAO, when that happens they can submit a proposal for voting, and if the proposal pass the amount is distributed equally to the members.",source:"@site/docs/contracts/adapters/distribution/Distribute.md",sourceDirName:"contracts/adapters/distribution",slug:"/contracts/adapters/distribution/distribute-adapter",permalink:"/docs/contracts/adapters/distribution/distribute-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/distribution/Distribute.md",version:"current",frontMatter:{id:"distribute-adapter",title:"Distribute"},sidebar:"docs",previous:{title:"Managing",permalink:"/docs/contracts/adapters/configuration/managing-adapter"},next:{title:"Financing",permalink:"/docs/contracts/adapters/funding/financing-adapter"}},l=[{value:"Workflow",id:"workflow",children:[]},{value:"Access Flags",id:"access-flags",children:[{value:"DAORegistry",id:"daoregistry",children:[]},{value:"BankExtension",id:"bankextension",children:[]}]},{value:"Dependencies",id:"dependencies",children:[{value:"DaoRegistry",id:"daoregistry-1",children:[]},{value:"Bank",id:"bank",children:[]},{value:"Voting",id:"voting",children:[]},{value:"FairShareHelper",id:"fairsharehelper",children:[]}]},{value:"Structs",id:"structs",children:[{value:"Distribution",id:"distribution",children:[]},{value:"DistributionStatus",id:"distributionstatus",children:[]}]},{value:"Storage",id:"storage",children:[{value:"distributions",id:"distributions",children:[]},{value:"ongoingDistributions",id:"ongoingdistributions",children:[]}]},{value:"Functions",id:"functions",children:[{value:"receive",id:"receive",children:[]},{value:"submitProposal",id:"submitproposal",children:[]},{value:"processProposal",id:"processproposal",children:[]},{value:"distribute",id:"distribute",children:[]},{value:"_submitProposal",id:"_submitproposal",children:[]},{value:"_distributeOne",id:"_distributeone",children:[]},{value:"_distributeAll",id:"_distributeall",children:[]}]},{value:"Events",id:"events",children:[{value:"Distributed",id:"distributed",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Distribute Adapter provides features in which the DAO members can receive funds from the DAO for any given reason. A good example of that is when the members collectively agree to payout dividends to one or all member of the DAO, when that happens they can submit a proposal for voting, and if the proposal pass the amount is distributed equally to the members."),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"The token distribution starts when a member submits a proposal to distribute a certain amount of a token for one or all members of the DAO. It is important to mention that the distribution can only happen for 1 member or for all, there is no way to distribute the tokens for a subset of the DAO members."),(0,a.kt)("p",null,"Once the distribution proposal gets created, it is open for voting, and sponsored by the message sender. The adapter tracks all the distributions that have been executed already by each DAO, and also tracks the current distributions that is in progress - this is done to ensure the distributions are executed sequentially per DAO."),(0,a.kt)("p",null,"Once the distribution proposal has passed, the other members have to start the actual distribution process (function ",(0,a.kt)("inlineCode",{parentName:"p"},"processProposal"),"). In this process the member indicated in the proposal or each member of the DAO will receive, based on the current number of holding units, a token amount in the internal bank account, so it can be withdraw later on. This process does not changes the number of units of the members, it just uses it to calculate the fair amount to distribute for each member. After that, the distribution proposal gets updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"Completed"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The member needs to have at least 1 unit to be able to receive funds from a distribution proposal."))),(0,a.kt)("h2",{id:"access-flags"},"Access Flags"),(0,a.kt)("h3",{id:"daoregistry"},"DAORegistry"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SUBMIT_PROPOSAL"))),(0,a.kt)("h3",{id:"bankextension"},"BankExtension"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INTERNAL_TRANSFER"))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"daoregistry-1"},"DaoRegistry"),(0,a.kt)("h3",{id:"bank"},"Bank"),(0,a.kt)("h3",{id:"voting"},"Voting"),(0,a.kt)("h3",{id:"fairsharehelper"},"FairShareHelper"),(0,a.kt)("h2",{id:"structs"},"Structs"),(0,a.kt)("h3",{id:"distribution"},"Distribution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"token"),": The distribution token in which the members should receive the funds. Must be supported by the DAO."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amount"),": The amount to distribute."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status"),": The distribution status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unitHolderAddr"),": The member address that should receive the funds, if 0x0, the funds will be distributed to all members of the DAO."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"currentIndex"),": Current iteration index to control the cached for-loop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blockNumber"),": The block number in which the proposal has been created.")),(0,a.kt)("h3",{id:"distributionstatus"},"DistributionStatus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status"),": The distribution status (",(0,a.kt)("inlineCode",{parentName:"li"},"Not Started"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"In Progress"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Done"),").")),(0,a.kt)("h2",{id:"storage"},"Storage"),(0,a.kt)("h3",{id:"distributions"},"distributions"),(0,a.kt)("p",null,"Keeps track of all the distributions executed per DAO."),(0,a.kt)("h3",{id:"ongoingdistributions"},"ongoingDistributions"),(0,a.kt)("p",null,"Keeps track of the latest ongoing distribution proposal per DAO to ensure only 1 proposal can be processed at a time."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"receive"},"receive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice default fallback function to prevent from sending ether to the contract.\n     */\n    receive() external payable\n")),(0,a.kt)("h3",{id:"submitproposal"},"submitProposal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates a distribution proposal for one or all members of the DAO, opens it for voting, and sponsors it.\n     * @dev Only tokens that are allowed by the Bank are accepted.\n     * @dev If the unitHolderAddr is 0x0, then the funds will be distributed to all members of the DAO.\n     * @dev Proposal ids can not be reused.\n     * @dev The amount must be greater than zero.\n     * @param dao The dao address.\n     * @param proposalId The distribution proposal id.\n     * @param unitHolderAddr The member address that should receive the funds, if 0x0, the funds will be distributed to all members of the DAO.\n     * @param token The distribution token in which the members should receive the funds. Must be supported by the DAO.\n     * @param amount The amount to distribute.\n     * @param data Additional information related to the distribution proposal.\n     */\n    function submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address unitHolderAddr,\n        address token,\n        int256 amount,\n        bytes calldata data\n    ) external\n\n")),(0,a.kt)("h3",{id:"processproposal"},"processProposal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Process the distribution proposal, calculates the fair amount of funds to distribute to the members based on the units holdings.\n     * @dev A distribution proposal must be in progress.\n     * @dev Only one proposal per DAO can be executed at time.\n     * @dev Only active members can receive funds.\n     * @dev Only proposals that passed the voting can be set to In Progress status.\n     * @param dao The dao address.\n     * @param proposalId The distribution proposal id.\n     */\n    function processProposal(DaoRegistry dao, bytes32 proposalId)\n        external\n\n")),(0,a.kt)("h3",{id:"distribute"},"distribute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"     /**\n     * @notice Transfers the funds from the Guild account to the member's internal accounts.\n     * @notice The amount of funds is caculated using the historical number of units of each member.\n     * @dev A distribution proposal must be in progress.\n     * @dev Only proposals that have passed the voting can be completed.\n     * @dev Only active members can receive funds.\n     * @param dao The dao address.\n     * @param toIndex The index to control the cached for-loop.\n     */\n    function distribute(DaoRegistry dao, uint256 toIndex) external override\n\n")),(0,a.kt)("h3",{id:"_submitproposal"},"_","submitProposal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates the proposal, starts the voting process and sponsors the proposal.\n     * @dev If the unit holder address was provided in the params, the unit holder must have enough units to receive the funds.\n     */\n    function _submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address unitHolderAddr,\n        address token,\n        uint256 amount,\n        bytes calldata data,\n        address submittedBy\n    ) internal onlyMember2(dao, submittedBy)\n")),(0,a.kt)("h3",{id:"_distributeone"},"_","distributeOne"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Updates the holder account with the amount based on the token parameter.\n     * @notice It is an internal transfer only that happens in the Bank extension.\n     */\n    function _distributeOne(\n        BankExtension bank,\n        address unitHolderAddr,\n        uint256 blockNumber,\n        address token,\n        uint256 amount\n    ) internal\n")),(0,a.kt)("h3",{id:"_distributeall"},"_","distributeAll"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Updates all the holder accounts with the amount based on the token parameter.\n     * @notice It is an internal transfer only that happens in the Bank extension.\n     */\n    function _distributeAll(\n        DaoRegistry dao,\n        BankExtension bank,\n        uint256 currentIndex,\n        uint256 maxIndex,\n        uint256 blockNumber,\n        address token,\n        uint256 amount\n    ) internal\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"distributed"},"Distributed"),(0,a.kt)("p",null,"When the distribution process is completed the ",(0,a.kt)("inlineCode",{parentName:"p"},"Distributed")," event is emitted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"token"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"amount"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"unitHolder")," parameters. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"unitHolder")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0"),", the amount was distributed to ",(0,a.kt)("strong",{parentName:"p"},"all")," members of the DAO, otherwise it was distributed to the unit holder only."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event Distributed(address token, uint256 amount, address unitHolder);"))))}p.isMDXComponent=!0}}]);