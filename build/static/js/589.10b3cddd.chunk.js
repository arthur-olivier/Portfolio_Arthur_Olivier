"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[589],{5589:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(2791),o=n(1523),i=n(6842),c=n(184),a=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,c.jsx)(a,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,c.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,c.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,c.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var f=d;function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=n(9611);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){if(t&&("object"===m(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}var j=n(4942),g=n(1413),x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=t.category,o=t.competency,i=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=(0,g.Z)((0,g.Z)({},a),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:a,children:(0,c.jsx)("span",{children:i})}),(0,c.jsx)("div",{className:"skillbar-bar",style:s}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};k.defaultProps={categories:[]};var w=k,O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,y.Z)(e,t)}(i,e);var t,n,r,o=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,g.Z)((0,g.Z)({},n),{},(0,j.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,g.Z)((0,g.Z)({},e),{},(0,j.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,c.jsx)(w,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,c.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Skills"})}),(0,c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);O.defaultProps={skills:[],categories:[]};var S=O,N=function(){return(0,c.jsxs)("div",{className:"references",children:[(0,c.jsx)("div",{className:"link-to",id:"references"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)(o.rU,{to:"/contact",children:(0,c.jsx)("h3",{children:"References are available upon request"})})})]})},P=[{school:"Oregon State University",degree:"Master Computer Sciences, Machine Learning / Web Devlopment / Mobile Devlopment Focus",link:"https://oregonstate.edu/",year:2023},{school:"CPE Lyon",degree:"Master Computer Sciences, Software Design and Big Data Focus",link:"https://www.cpe.fr",year:2023}],C=[{company:"Evotion",position:"Software Engineer Front End/Back End in Robotics and Interface Programming , Internship",link:"http://www.evotion.com",daterange:"Mai 2023 - July 2023",points:["Responsible for programming robots and computer interfaces on various devices such as computers and tablets","Manage projects","Creation of applications","Stay up-to-date with advancements in robotics and computer technology"]},{company:"Siemens Industry Software",position:"Software Engineering / Machine Learning Assistant , Internship",link:"https://www.siemens.com/fr/fr.html",daterange:"June 2022 - July 2021",points:["Contribution to the development of a Machine Learning tool","Creation of scripts for the preparation of data for the training of neural network","Utilized: Python"]}],E=n(907);var Z=n(181);var R,D=[{title:"Python",competency:4,category:["Tools"]},{title:"HTML",competency:4,category:["Web Development"]},{title:"CSS",competency:4,category:["Web Development"]},{title:"JavaScript",competency:4,category:["Web Development"]},{title:"React JS",competency:3,category:["Web Development"]},{title:"Android Studio",competency:3,category:["Mobile Development"]},{title:"PostgreSQL",competency:3,category:["Big data"]},{title:"C",competency:3,category:["Tools"]},{title:"C ++",competency:2,category:["Tools"]},{title:"Swift",competency:2,category:["Mobile Development"]},{title:"Git",competency:3,category:["Tools"]},{title:"Unix",competency:2,category:["Operation System"]}].map((function(e){return(0,g.Z)((0,g.Z)({},e),{},{category:e.category.sort()})})),M=["#6968b3","#37b1f5","#e47272","#cc7b94","#3896e2"],A=(R=new Set(D.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,E.Z)(e)}(R)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(R)||(0,Z.Z)(R)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:M[t]}})),T=["Education","Experience","Skills","References"],B=function(){return(0,c.jsx)(i.Z,{title:"Resume",description:"Arthur Olivier's Resume. Oregon State University.",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{"data-testid":"heading",children:(0,c.jsx)(o.rU,{to:"resume",children:"Resume"})}),(0,c.jsx)("div",{className:"link-container",children:T.map((function(e){return(0,c.jsx)("h4",{children:(0,c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,c.jsx)(l,{data:P}),(0,c.jsx)(f,{data:C}),(0,c.jsx)(S,{skills:D,categories:A}),(0,c.jsx)(N,{})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=589.10b3cddd.chunk.js.map