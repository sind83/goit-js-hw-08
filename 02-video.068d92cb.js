function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequire4c75;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequire4c75=r);var l=r("5uEKZ"),i=r("i5zXd"),a=r("9OeKo");const d=document.querySelector("iframe"),u=new(0,i.default)(d);try{const e=l.load("videoplayer-current-time");u.setCurrentTime(JSON.parse(e))}catch(e){console.log("Something goes wrong...",e),console.log("Can't load actual time...")}u.on("timeupdate",e(a)((()=>{u.getCurrentTime().then((e=>{console.log(e),l.save("videoplayer-current-time",e)})).catch((function(e){console.log("Something goes wrong...",e.name)})),u.getEnded().then((e=>{e&&(l.save("videoplayer-current-time",0),console.log("DONE..."))}))})),1e3);
//# sourceMappingURL=02-video.068d92cb.js.map