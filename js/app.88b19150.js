(function(e){function t(t){for(var n,i,c=t[0],o=t[1],l=t[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r={app:0},s=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-15c7672a":"c198fff6","chunk-2d0d79be":"3d9a496f","chunk-2d22d746":"50628ef6","chunk-4fd793d1":"cad63c26","chunk-590821f0":"42139337","chunk-aa7cc162":"790c1a96","chunk-b1c6f9e0":"612a3666"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-15c7672a":1,"chunk-4fd793d1":1,"chunk-590821f0":1,"chunk-aa7cc162":1,"chunk-b1c6f9e0":1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-15c7672a":"53ffc846","chunk-2d0d79be":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-4fd793d1":"0e95a939","chunk-590821f0":"8f602ac3","chunk-aa7cc162":"15733b6c","chunk-b1c6f9e0":"df6a942b"}[e]+".css",r=o.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[e],m.parentNode.removeChild(m),a(s)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/digital-window/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2612:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var n=a("be3b");function i(e){return Object(n["a"])({url:"/token/",public:!0,method:"POST",data:e})}function r(e){return Object(n["a"])({url:"/accounts/register/",public:!0,method:"POST",data:e})}function s(e){return Object(n["a"])({url:"/accounts/verify-registration/",public:!0,method:"POST",data:e})}function c(e){return Object(n["a"])({url:`/users/${e}/`,method:"GET"})}},4360:function(e,t,a){"use strict";var n=a("2b0e"),i=a("2f62"),r=a("57e0"),s=a("2612"),c=a("be3b");function o(e){return Object(c["a"])({url:`/students/${e}/`,method:"GET"})}n["a"].use(i["a"]);t["a"]=new i["a"].Store({state:{isLogued:!1,user:{},student:{enrollment:"e19080708",admission:3,CURP:"GAME910502HMCLRD00",NSS:"21079101680",career:"isc",specialty:"n/a"},schoolRequest:{type:"",status:"",description:"",photo:null,INE:null,student:"7e959f58-880f-4596-8fa5-7202d94ed8f4",user:null},isComponentModalActive:!1},mutations:{SET_LOGIN(e,t){e.isLogued=t},SET_USER(e,t){e.user=t},SET_STUDENT(e,t){e.student=t},SHOW_FORM(e,t){e.isComponentModalActive=t}},actions:{login({commit:e},t){return new Promise(async(a,n)=>{try{const n=await Object(s["c"])(t);Object(r["d"])(n.access),e("SET_LOGIN",!0),a(n)}catch(i){n(i)}})},logout(){return new Promise((e,t)=>{Object(r["c"])(),e()})},verifyToken({commit:e}){return new Promise(async(t,a)=>{let n=Object(r["b"])();if(n=Object(r["a"])(n),n)try{const a=await Object(s["b"])(n.id);console.log(a),e("SET_LOGIN",!0),e("SET_USER",a),t()}catch(i){a()}})},getStudent({commit:e,state:t}){return new Promise(async(a,n)=>{try{const n=await o(t.user.enrrollment);console.log(n),e("SET_STUDENT",n),a()}catch(i){n(i)}})}},modules:{}})},"452c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},r=[],s=(a("5c0b"),a("b0a0"),a("2877")),c={},o=Object(s["a"])(c,i,r,!1,null,null,null),l=o.exports,u=a("a18c"),d=a("4360"),m=a("289d"),f=a("5a17"),p=a("4c93"),v=a("7bb1");Object(v["c"])("required",{...p["required"],message:"Este campo es requerido"}),Object(v["c"])("email",{...p["email"],message:"Ingrese un email válido"}),Object(v["c"])("confirmed",{...p["confirmed"],message:"Las contraseñas no coinciden"}),Object(v["c"])("len",e=>e.length>=8||"La contraseña debe tener minimo 8 caracteres"),Object(v["c"])("email-edu",e=>!!/(E|e|le|LE)[0-9]+@((itmerida[.]edu[.]mx)|(merida[.]tecnm[.]mx))/.test(e)||"Este email no es institucional"),Object(v["c"])("matricula",e=>!!/(E|LE)[0-9]{8}/.test(e)||"La matrícula debe tener el formato E12345678");a("503e");var b=a("9483");Object(b["a"])("/digital-window/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=a("7802"),g=a("b8c4"),_=a("e0d5");Object.keys(p).forEach(e=>{Object(v["c"])(e,p[e])}),Object(v["d"])("es",f),n["a"].use(m["a"]),n["a"].component("ValidationObserver",v["a"]),n["a"].component("ValidationProvider",v["b"]),n["a"].component("BInputWithValidation",h["a"]),n["a"].component("BSelectWithValidation",g["a"]),n["a"].component("BCheckboxesWithValidation",_["a"]),n["a"].config.productionTip=!1,new n["a"]({router:u["a"],store:d["a"],render:e=>e(l)}).$mount("#app")},"57e0":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return d}));var n=a("a78e"),i=a.n(n),r=a("04e1"),s=a.n(r);const c="Access-Token";function o(){return i.a.get(c)}function l(e){return i.a.set(c,e)}function u(e){return i.a.remove(c)}function d(e){return s()(e)}},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"6c5a":function(e,t,a){"use strict";var n=a("c7d7"),i=a.n(n);i.a},7802:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[a("b-field",e._b({attrs:{type:{"is-danger":n[0],"is-success":i},message:n}},"b-field",e.$attrs,!1),[a("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))],1)]}}])})},i=[],r=a("7bb1"),s={components:{ValidationProvider:r["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""},value:{type:null}},data:()=>({innerValue:""}),watch:{innerValue(e){this.$emit("input",e)},value(e){this.innerValue=e}},created(){this.value&&(this.innerValue=this.value)}},c=s,o=a("2877"),l=Object(o["a"])(c,n,i,!1,null,null,null);t["a"]=l.exports},"9c0c":function(e,t,a){},a18c:function(e,t,a){"use strict";var n=a("2b0e"),i=a("8c4f"),r=(a("bb51"),a("4360")),s=a("57e0");n["a"].use(i["a"]);const c=[{path:"/",name:"Default",component:()=>a.e("chunk-aa7cc162").then(a.bind(null,"7b3d")),redirect:"/home",children:[{path:"/home",name:"Home",component:()=>Promise.resolve().then(a.bind(null,"bb51"))},{path:"/about",name:"About",component:()=>a.e("chunk-2d22d746").then(a.bind(null,"f820"))},{path:"/form",name:"Form",component:()=>a.e("chunk-590821f0").then(a.bind(null,"c109"))}]},{path:"/login",name:"Login",component:()=>a.e("chunk-4fd793d1").then(a.bind(null,"a55b"))},{path:"/register",name:"Register",component:()=>a.e("chunk-15c7672a").then(a.bind(null,"73cf"))},{path:"/verify-user",name:"EmailVerification",component:()=>a.e("chunk-2d0d79be").then(a.bind(null,"7818"))}],o=()=>new i["a"]({scrollBehavior:()=>({y:0}),routes:c}),l=o(),u=["Home","Login","EmailVerification","Register"];l.beforeEach(async(e,t,a)=>{const n=Object(s["b"])();if(n)if("/login"===e.path)a({path:"/"});else try{await r["a"].dispatch("verifyToken"),a()}catch(i){await r["a"].dispatch("logout"),a("/login?redirect="+e.path)}else-1!==u.indexOf(e.name)?a():a("/login?redirect="+e.path)}),t["a"]=l},b0a0:function(e,t,a){"use strict";var n=a("452c"),i=a.n(n);i.a},b8c4:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[a("b-field",e._b({attrs:{type:{"is-danger":n[0],"is-success":i},message:n}},"b-field",e.$attrs,!1),[a("b-select",{attrs:{placeholder:"Select a subject"},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2)],1)]}}],null,!0)})},i=[],r=a("7bb1"),s={components:{ValidationProvider:r["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""},value:{type:null}},data:()=>({innerValue:""}),watch:{innerValue(e){this.$emit("input",e)},value(e){this.innerValue=e}},created(){this.value&&(this.innerValue=this.value)}},c=s,o=a("2877"),l=Object(o["a"])(c,n,i,!1,null,null,null);t["a"]=l.exports},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._m(1),a("div",{staticClass:"container carousel"},[a("b-carousel",{attrs:{"indicator-inside":!1}},e._l(6,(function(t,n){return a("b-carousel-item",{key:n},[a("span",{staticClass:"image"},[a("img",{attrs:{src:e.getImgUrl(n)}})])])})),1)],1),a("section",{staticClass:"section",attrs:{id:"about"}},[e._m(2),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card box cta"},[e._m(3),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4 text"},[e._v("Constancia de estudios")]),a("p",{staticClass:"hide"},[e._v(" La constancia de estudios es un documento que válida tu participación como estudiante en la institución, es requerida en trámites como becas. ")]),a("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[a("strong",[e._v("Solicitar")])])],1)])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card box cta"},[e._m(4),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[e._v("Horario")]),a("p",{staticClass:"hide"},[e._v(" El horario es una herramienta que te ayudará a organizarte para tus clases, además de que es muy útil para presentar como evidencia a quién lo solicite. ")]),a("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[a("strong",[e._v("Solicitar")])])],1)])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card box cta"},[e._m(5),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[e._v("Seguimiento académico")]),a("p",{staticClass:"hide"},[e._v(" El seguimiento escolar es un documento que te ayudará a ver tu historial académico, es útil para ver tu progreso escolar. ")]),a("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[a("strong",[e._v("Solicitar")])])],1)])])])])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-default is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column is-5"},[a("figure",{staticClass:"is-4by3"},[a("img",{attrs:{src:"/digital-window/img/Studying-pana.svg",alt:"Description"}})])]),a("div",{staticClass:"column is-6 is-offset-1"},[a("h1",{staticClass:"title is-2"},[e._v("Servicios Escolares")]),a("h2",{staticClass:"subtitle is-4"},[e._v("Instituto Tecnológico de Mérida")]),a("br"),a("p",{staticClass:"has-text-centered"},[e._v(" Bienvenido a la "),a("b",[e._v("Ventanilla Digital ITM")]),e._v(" una manera de realizar tus trámites escolares, de una manera "),a("b",[e._v("sencilla, rápida y remota")])])])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box cta"},[a("p",{staticClass:"has-text-centered"},[a("span",{staticClass:"tag is-primary"},[e._v("Ventanilla Digital")]),e._v(" Una iniciativa especial para la solución de problemas generados por el coronavirus Covid-19 ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container has-text-centered"},[a("h2",{staticClass:"title"},[e._v("Trámites")]),a("p",[e._v("Selecciona el trámite que deseas realizar")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image img"},[a("img",{attrs:{src:"/digital-window/img/estudiante.jpg",alt:"Placeholder image"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:"/digital-window/img/horario.jpg",alt:"Placeholder image"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:"/digital-window/img/seguimiento.jpg",alt:"Placeholder image"}})])])}],r={methods:{getImgUrl(e){return`https://picsum.photos/id/43${e}/1230/500`}}},s=r,c=(a("6c5a"),a("2877")),o=Object(c["a"])(s,n,i,!1,null,"4ca792fa",null);t["default"]=o.exports},be3b:function(e,t,a){"use strict";var n=a("bc3a"),i=a.n(n),r=a("a18c"),s=a("57e0"),c=a("39ea");const o=i.a.create({baseURL:"https://digital-window.herokuapp.com/api/v1",mode:"cors",credentials:"same-origin",timeout:2e4});o.interceptors.request.use(e=>(e.public||(e.headers.Authorization="Bearer "+Object(s["b"])()),e)),o.interceptors.response.use(e=>e.data,async e=>(console.log(e.response),e.response||c["a"].confirm({title:"Algo salio mal :(",message:"El servicio <b>no esta disponible</b> en estos momentos. Revise su conexion a internet o intente más tarde",confirmText:"Ir al inicio",type:"is-warning",hasIcon:!0,ariaRole:"alertdialog",ariaModal:!0,onConfirm:()=>r["a"].push("/")}),Promise.reject(e.response.data))),t["a"]=o},c7d7:function(e,t,a){},e0d5:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("div",{staticClass:"block"},[e._t("default"),a("p",{staticClass:"has-text-danger"},[e._v(e._s(n[0]))])],2)]}}],null,!0)})},i=[],r=a("7bb1"),s={components:{ValidationProvider:r["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""}}},c=s,o=a("2877"),l=Object(o["a"])(c,n,i,!1,null,null,null);t["a"]=l.exports}});
//# sourceMappingURL=app.88b19150.js.map