(self.webpackChunkyunstyle_ui=self.webpackChunkyunstyle_ui||[]).push([[969],{71100:function(B,M,v){"use strict";var A=v(14570),l=v(67294),b=v(67915);function I(r,t){return k(r)||T(r,t)||E(r,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(r,t){if(r){if(typeof r=="string")return j(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(r,t)}}function j(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function T(r,t){var e=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],a=!0,u=!1,o,c;try{for(e=e.call(r);!(a=(o=e.next()).done)&&(n.push(o.value),!(t&&n.length===t));a=!0);}catch(d){u=!0,c=d}finally{try{!a&&e.return!=null&&e.return()}finally{if(u)throw c}}return n}}function k(r){if(Array.isArray(r))return r}var L={toString:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||t.type:"const"in t?"".concat(t.const):"oneOf"in t?this.oneOf(t):"unknown"},string:function(t){return t.type},number:function(t){return t.type},boolean:function(t){return t.type},any:function(t){return t.type},object:function(t){var e=this,n=[];return Object.entries(t.properties||{}).forEach(function(a){var u,o=I(a,2),c=o[0],d=o[1];n.push("".concat(c).concat((u=t.required)!==null&&u!==void 0&&u.includes(c)?"":"?",": ").concat(d.type==="object"?"object":e.toString(d)))}),n.length?"{ ".concat(n.join("; ")," }"):"{}"},array:function(t){if(t.items){var e=this.getValidClassName(t.items);return e?"".concat(e,"[]"):"".concat(this.toString(t.items),"[]")}return"any[]"},element:function(t){return"<".concat(t.componentName," />")},function:function(t){var e=this,n=t.signature,a="oneOf"in n?n.oneOf:[n];return a.map(function(u){return"".concat(u.isAsync?"async ":"","(").concat(u.arguments.map(function(o){return"".concat(o.key,": ").concat(e.toString(o))}).join(", "),") => ").concat(e.toString(u.returnType))}).join(" | ")},dom:function(t){return t.className||"DOM"},enum:function(t){return t.enum.map(function(e){return JSON.stringify(e)}).join(" | ")},oneOf:function(t){var e=this;return t.oneOf.map(function(n){return e.getValidClassName(n)||e.toString(n)}).join(" | ")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?t.className:null}},x=function(t){var e=(0,l.useState)(function(){return L.toString(t)}),n=I(e,2),a=n[0],u=n[1];return(0,l.useEffect)(function(){u(L.toString(t))},[t]),l.createElement("code",null,a)},P=function(t){var e,n=(0,A.eL)(),a=n.frontmatter,u=(0,A.cc)(),o=u.components,c=t.id||a.atomId,d=(0,A.YB)();if(!c)throw new Error("`id` properties if required for API component!");var p=o==null?void 0:o[c];return l.createElement("div",{className:"markdown"},l.createElement(b.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,d.formatMessage({id:"api.component.name"})),l.createElement("th",null,d.formatMessage({id:"api.component.description"})),l.createElement("th",null,d.formatMessage({id:"api.component.type"})),l.createElement("th",null,d.formatMessage({id:"api.component.default"})))),l.createElement("tbody",null,p&&(e=p.propsConfig)!==null&&e!==void 0&&e.properties?Object.entries(p.propsConfig.properties).map(function(i){var f,s=I(i,2),y=s[0],g=s[1];return l.createElement("tr",{key:y},l.createElement("td",null,y),l.createElement("td",null,g.description||"--"),l.createElement("td",null,l.createElement(x,g)),l.createElement("td",null,l.createElement("code",null,(f=p.propsConfig.required)!==null&&f!==void 0&&f.includes(y)?d.formatMessage({id:"api.component.required"}):JSON.stringify(g.default)||"--")))}):l.createElement("tr",null,l.createElement("td",{colSpan:4},d.formatMessage({id:"api.component.".concat(o?"not.found":"unavailable")},{id:c}))))))};M.Z=P},35532:function(B,M,v){"use strict";var A=v(67294);function l(){return l=Object.assign?Object.assign.bind():function(S){for(var E=1;E<arguments.length;E++){var j=arguments[E];for(var T in j)Object.prototype.hasOwnProperty.call(j,T)&&(S[T]=j[T])}return S},l.apply(this,arguments)}var b=function(E){return React.createElement("span",l({className:"dumi-default-badge"},E))},I=null},67915:function(B,M,v){"use strict";v.d(M,{Z:function(){return t}});var A=v(93096),l=v.n(A),b=v(67294),I=["children"];function S(e,n){return L(e)||k(e,n)||j(e,n)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(e,n){if(e){if(typeof e=="string")return T(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,n)}}function T(e,n){(n==null||n>e.length)&&(n=e.length);for(var a=0,u=new Array(n);a<n;a++)u[a]=e[a];return u}function k(e,n){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var u=[],o=!0,c=!1,d,p;try{for(a=a.call(e);!(o=(d=a.next()).done)&&(u.push(d.value),!(n&&u.length===n));o=!0);}catch(i){c=!0,p=i}finally{try{!o&&a.return!=null&&a.return()}finally{if(c)throw p}}return u}}function L(e){if(Array.isArray(e))return e}function x(e,n){if(e==null)return{};var a=P(e,n),u,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)u=c[o],!(n.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(e,u)&&(a[u]=e[u])}return a}function P(e,n){if(e==null)return{};var a={},u=Object.keys(e),o,c;for(c=0;c<u.length;c++)o=u[c],!(n.indexOf(o)>=0)&&(a[o]=e[o]);return a}var r=function(n){var a=n.children,u=x(n,I),o=(0,b.useRef)(null),c=(0,b.useState)(!1),d=S(c,2),p=d[0],i=d[1],f=(0,b.useState)(!1),s=S(f,2),y=s[0],g=s[1];return(0,b.useEffect)(function(){var h=o.current;if(h){var _=l()(function(){i(h.scrollLeft>0),g(h.scrollLeft<h.scrollWidth-h.offsetWidth)},100);return _(),h.addEventListener("scroll",_),window.addEventListener("resize",_),function(){h.removeEventListener("scroll",_),window.removeEventListener("resize",_)}}},[]),b.createElement("div",{className:"dumi-default-table"},b.createElement("div",{className:"dumi-default-table-content",ref:o,"data-left-folded":p||void 0,"data-right-folded":y||void 0},b.createElement("table",u,a)))},t=r},93096:function(B,M,v){var A="Expected a function",l=NaN,b="[object Symbol]",I=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,j=/^0o[0-7]+$/i,T=parseInt,k=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g,L=typeof self=="object"&&self&&self.Object===Object&&self,x=k||L||Function("return this")(),P=Object.prototype,r=P.toString,t=Math.max,e=Math.min,n=function(){return x.Date.now()};function a(i,f,s){var y,g,h,_,O,N,w=0,V=!1,W=!1,$=!0;if(typeof i!="function")throw new TypeError(A);f=p(f)||0,o(s)&&(V=!!s.leading,W="maxWait"in s,h=W?t(p(s.maxWait)||0,f):h,$="trailing"in s?!!s.trailing:$);function F(m){var C=y,R=g;return y=g=void 0,w=m,_=i.apply(R,C),_}function z(m){return w=m,O=setTimeout(D,f),V?F(m):_}function J(m){var C=m-N,R=m-w,Z=f-C;return W?e(Z,h-R):Z}function H(m){var C=m-N,R=m-w;return N===void 0||C>=f||C<0||W&&R>=h}function D(){var m=n();if(H(m))return K(m);O=setTimeout(D,J(m))}function K(m){return O=void 0,$&&y?F(m):(y=g=void 0,_)}function G(){O!==void 0&&clearTimeout(O),w=0,y=N=g=O=void 0}function X(){return O===void 0?_:K(n())}function U(){var m=n(),C=H(m);if(y=arguments,g=this,N=m,C){if(O===void 0)return z(N);if(W)return O=setTimeout(D,f),F(N)}return O===void 0&&(O=setTimeout(D,f)),_}return U.cancel=G,U.flush=X,U}function u(i,f,s){var y=!0,g=!0;if(typeof i!="function")throw new TypeError(A);return o(s)&&(y="leading"in s?!!s.leading:y,g="trailing"in s?!!s.trailing:g),a(i,f,{leading:y,maxWait:f,trailing:g})}function o(i){var f=typeof i;return!!i&&(f=="object"||f=="function")}function c(i){return!!i&&typeof i=="object"}function d(i){return typeof i=="symbol"||c(i)&&r.call(i)==b}function p(i){if(typeof i=="number")return i;if(d(i))return l;if(o(i)){var f=typeof i.valueOf=="function"?i.valueOf():i;i=o(f)?f+"":f}if(typeof i!="string")return i===0?i:+i;i=i.replace(I,"");var s=E.test(i);return s||j.test(i)?T(i.slice(2),s?2:8):S.test(i)?l:+i}B.exports=u}}]);
