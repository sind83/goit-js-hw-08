function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};var r,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,y=function(){return s.Date.now()};function g(e,t,n){var r,o,i,a,u,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function h(e){return f=e,u=setTimeout(w,t),l?g(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-f>=i}function w(){var e=y();if(S(e))return j(e);u=setTimeout(w,function(e){var n=t-(e-c);return s?v(n,i-(e-f)):n}(e))}function j(e){return u=void 0,d&&r?g(e):(r=o=void 0,a)}function O(){var e=y(),n=S(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return h(c);if(s)return u=setTimeout(w,t),g(c)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=c=o=u=void 0},O.flush=function(){return void 0===u?a:j(y())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):i.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const h=document.querySelector("form.feedback-form"),S=h.querySelector('input[name="email"]'),w=h.querySelector('textarea[name="message"]'),j=h.querySelector('button[type="submit"]');window.addEventListener("load",(()=>{const e=n("feedback-form-state");try{S.value=e.mail,w.value=e.message}catch(e){}})),h.addEventListener("input",e(r)((()=>{((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("feedback-form-state",{mail:S.value,message:w.value})}),500)),j.addEventListener("click",(e=>{e.preventDefault();const t=n("feedback-form-state");console.log(t.mail," : ",t.message),S.value="",w.value="",(e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state")}));
//# sourceMappingURL=03-feedback.4605d61d.js.map