function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("eWCmQ");const a={form:document.querySelector(".form")},l={};let u=0;function f(t,o){(function(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))})(t,o).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}a.form.addEventListener("submit",(function(e){e.preventDefault(),function(e){new FormData(e.target).forEach(((e,t)=>{l[t]=Number(e)})),({delay:delay,step:step,amount:amount}=l)}(e),function({delay:e,step:t,amount:o}){if(u+=1,u>=o)return;let n=e;for(let e=1;e<=o;e+=1)n+=t,f(e,n)}({delay:delay,step:step,amount:amount}),a.form.reset()}));
//# sourceMappingURL=03-promises.0be5171f.js.map
