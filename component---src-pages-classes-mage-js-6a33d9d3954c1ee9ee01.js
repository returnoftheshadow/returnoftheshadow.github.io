webpackJsonp([43438005986801],{103:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(3),f=r(u),c=function(e){function t(){return l(this,t),a(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return f.default.createElement("div",null,this.props.skills.allMarkdownRemark.edges.map(function(e){var t=e.node;return f.default.createElement("div",{className:"col-lg-12",key:t.id},f.default.createElement("h3",null,t.frontmatter.title),f.default.createElement("dl",{className:"dl-horizontal"},f.default.createElement("dt",null,"Syntax"),f.default.createElement("dd",null,t.frontmatter.syntax),f.default.createElement("dt",null,"Group"),f.default.createElement("dd",null,t.frontmatter.group),f.default.createElement("dt",null,"Level"),f.default.createElement("dd",null,t.frontmatter.level),f.default.createElement("dt",null,"Minimum Mana"),f.default.createElement("dd",null,t.frontmatter.min_mana),f.default.createElement("dt",null,"Offensive"),f.default.createElement("dd",null,t.frontmatter.offensive)),f.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),f.default.createElement("hr",null))}))},t}(u.Component);t.default=c,e.exports=t.default},278:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=n(3),f=r(u),c=n(103),i=r(c),d=n(39),s=function(e){function t(){return l(this,t),a(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"col-lg-12"},f.default.createElement(d.PageHeader,null,"Mage")),f.default.createElement("div",{className:"col-lg-12"},f.default.createElement(i.default,{skills:this.props.data}))))},t}(u.Component);t.default=s;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-classes-mage-js-6a33d9d3954c1ee9ee01.js.map