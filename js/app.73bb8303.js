(function(t){function e(e){for(var a,r,c=e[0],o=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-1d2b3ec2":"a1244032","chunk-2d22d746":"024f1f85","chunk-75322c28":"6c45347c","chunk-758e9cca":"372b373f"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-1d2b3ec2":1,"chunk-75322c28":1,"chunk-758e9cca":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1d2b3ec2":"39655347","chunk-2d22d746":"31d6cfe0","chunk-75322c28":"c8116691","chunk-758e9cca":"09c46519"}[t]+".css",i=o.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/digital-window/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2612:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));n("d3b7");var a=n("bc3a"),r=n.n(a),i=r.a.create({baseURL:"http://localhost:8000/api/v1",mode:"cors",credentials:"same-origin",timeout:2e4});i.interceptors.response.use((function(t){return t.data}),(function(t){return console.log(t.response.data),Promise.reject(t.response.data)}));var s=i;function c(t){return s({url:"/token/",method:"POST",data:t})}function o(t){return s({url:"/accounts/register/",method:"POST",data:t})}},"452c":function(t,e,n){},"47d9":function(t,e,n){t.exports=n.p+"img/estudiante.cd4f0a1d.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},i=[],s={created:function(){this.$store.dispatch("verifyToken")}},c=s,o=(n("5c0b"),n("b0a0"),n("2877")),u=Object(o["a"])(c,r,i,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f"));n("bb51");a["a"].use(d["a"]);var f=[{path:"/",name:"Default",component:function(){return n.e("chunk-1d2b3ec2").then(n.bind(null,"7b3d"))},redirect:"/home",children:[{path:"/home",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-758e9cca").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-75322c28").then(n.bind(null,"73cf"))}}],m=new d["a"]({routes:f}),p=m,v=(n("96cf"),n("1da1")),h=n("2f62"),g=n("a78e"),b=n.n(g),C=n("04e1"),_=n.n(C),y="Access-Token";function k(){return b.a.get(y)}function w(t){return b.a.set(y,t)}function x(t){return _()(t)}var E=n("2612");a["a"].use(h["a"]);var S=new h["a"].Store({state:{isLogued:!1},mutations:{SET_LOGIN:function(t,e){t.isLogued=e}},actions:{login:function(t,e){var n=t.commit;return new Promise(function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(a,r){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(E["a"])(e);case 2:i=t.sent,console.log(i),w(i.access),n("SET_LOGIN",!0),a(i);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},verifyToken:function(t){var e=t.commit;return new Promise(function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n,a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=k(),r=x(r),console.log(r),r&&e("SET_LOGIN",!0),n(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}},modules:{}}),O=n("289d");a["a"].use(O["a"]),a["a"].config.productionTip=!1,new a["a"]({router:p,store:S,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"8c7c":function(t,e,n){},"9c0c":function(t,e,n){},"9f40":function(t,e,n){t.exports=n.p+"img/seguimiento.ae8f45fb.jpg"},b0a0:function(t,e,n){"use strict";var a=n("452c"),r=n.n(a);r.a},b622e:function(t,e,n){"use strict";var a=n("8c7c"),r=n.n(a);r.a},ba10:function(t,e,n){t.exports=n.p+"img/Studying-pana.7eb4ee07.svg"},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._m(1),n("div",{staticClass:"container carousel"},[n("b-carousel",{attrs:{"indicator-inside":!1},scopedSlots:t._u([{key:"indicators",fn:function(e){return[n("span",{staticClass:"al image"},[n("img",{attrs:{src:t.getImgUrl(e.i),title:e.i}})])]}}])},t._l(6,(function(e,a){return n("b-carousel-item",{key:a},[n("span",{staticClass:"image"},[n("img",{attrs:{src:t.getImgUrl(a)}})])])})),1)],1),n("section",{staticClass:"section",attrs:{id:"about"}},[t._m(2),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column"},[n("div",{staticClass:"card box cta"},[t._m(3),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4 text"},[t._v("Constancia de estudios")]),n("p",{staticClass:"hide"},[t._v("La constancia de estudios es un documento que válida tu participación como estudiante en la institución, es requerida en trámites como becas.")]),n("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[n("strong",[t._v("Solicitar")])])],1)])])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"card box cta"},[t._m(4),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v("Horario")]),n("p",{staticClass:"hide"},[t._v("El horario es una herramienta que te ayudará a organizarte para tus clases, además de que es muy útil para presentar como evidencia a quién lo solicite.")]),n("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[n("strong",[t._v("Solicitar")])])],1)])])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"card box cta"},[t._m(5),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v("Seguimiento académico")]),n("p",{staticClass:"hide"},[t._v("El seguimiento escolar es un documento que te ayudará a ver tu historial académico, es útil para ver tu progreso escolar.")]),n("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[n("strong",[t._v("Solicitar")])])],1)])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-default is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column is-5"},[a("figure",{staticClass:"is-4by3"},[a("img",{attrs:{src:n("ba10"),alt:"Description"}})])]),a("div",{staticClass:"column is-6 is-offset-1"},[a("h1",{staticClass:"title is-2"},[t._v("Servicios Escolares")]),a("h2",{staticClass:"subtitle is-4"},[t._v("Instituto Tecnológico de Mérida")]),a("br"),a("p",{staticClass:"has-text-centered"},[t._v(" Bienvenido a la "),a("b",[t._v("#VentanillaDigitalITM")])]),a("br"),a("p",[a("b",[t._v("Ventanilla Digital ITM")]),t._v(" es un manera de realizar tus trámites escolares, de una manera "),a("b",[t._v("sencilla, rápida y remota")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box cta"},[n("p",{staticClass:"has-text-centered"},[n("span",{staticClass:"tag is-primary"},[t._v("Ventanilla Digital")]),t._v(" Una iniciativa especial para la solución de problemas generados por el coronavirus Covid-19 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-text-centered"},[n("h2",{staticClass:"title"},[t._v("Trámites")]),n("p",[t._v("Selecciona el trámite que deseas realizar")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image img"},[a("img",{attrs:{src:n("47d9"),alt:"Placeholder image"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:n("f544"),alt:"Placeholder image"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:n("9f40"),alt:"Placeholder image"}})])])}],i={methods:{getImgUrl:function(t){return"https://picsum.photos/id/43".concat(t,"/1230/500")}}},s=i,c=(n("b622e"),n("2877")),o=Object(c["a"])(s,a,r,!1,null,"4b8fc090",null);e["default"]=o.exports},f544:function(t,e,n){t.exports=n.p+"img/horario.45a9cc88.jpg"}});
//# sourceMappingURL=app.73bb8303.js.map