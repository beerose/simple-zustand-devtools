!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom/client")):"function"==typeof define&&define.amd?define(["exports","react","react-dom/client"],t):(e=e||self,t(e["simple-zustand-devtools"]={},e.React,e.client))}(this,function(e,t,n){"use strict";var o="default"in t?t.default:t;e.mountStoreDevtool=function(e,c,u){const d={count:0},r=e=>{const n=t.useRef(d.count);return t.useEffect(()=>{n.current+=1,n.current===d.count+1&&(n.current-=1,c.setState(e))}),null};if(r.displayName=`((${e})) devtool`,!u){let t=document.getElementById(`simple-zustand-devtools-${e}`);t||(t=document.createElement("div"),t.id=`simple-zustand-devtools-${e}`),document.body.appendChild(t),u=t}const s=n.createRoot(u),i=e=>{e&&(s.render(o.createElement(r,Object.assign({},e))),d.count+=1)};i(c.getState()),c.subscribe(i)}});
//# sourceMappingURL=simple-zustand-devtools.umd.production.js.map