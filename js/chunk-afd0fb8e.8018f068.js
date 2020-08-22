(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afd0fb8e"],{"2cfd":function(e,t,a){"use strict";var s=a("e314"),i=a.n(s);i.a},"73cf":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"container"},[a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-8 is-offset-2 register"},[a("div",{staticClass:"columns"},[e._m(0),a("div",{staticClass:"column right"},[e._m(1),a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("form",{on:{submit:!1}},[a("b-field",[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})],1),a("b-field",[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellido(s)"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})],1),a("b-field",{attrs:{type:"text",isValid:!1}},[a("BInputWithValidation",{attrs:{rules:"required|matricula",type:"text",placeholder:"Matricula"},model:{value:e.user.enrollment,callback:function(t){e.$set(e.user,"enrollment",t)},expression:"user.enrollment"}})],1),a("b-field",[a("BInputWithValidation",{attrs:{rules:"required|email|email-edu",type:"email",placeholder:"Correo institucional"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),a("b-field",[a("BInputWithValidation",{attrs:{rules:"required|length",type:"password",placeholder:"Contraseña","password-reveal":"",vid:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),a("b-field",[a("BInputWithValidation",{attrs:{rules:"required|confirmed:password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:e.user.password_confirm,callback:function(t){e.$set(e.user,"password_confirm",t)},expression:"user.password_confirm"}})],1),a("button",{staticClass:"button is-block is-primary is-fullwidth",class:{"is-loading":e.isLoading},on:{click:function(t){t.preventDefault(),e.signup,s(e.signup)}}},[e._v(" Registrarse ")]),a("br"),a("small",[a("em",[e._v("¿Ya tienes una cuenta?")]),a("router-link",{attrs:{tag:"a",to:"/login"}},[e._v(" Iniciar sesión")])],1)],1)]}}])})],1)])]),e._m(2)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column left is-hidden-touch"},[a("h1",{staticClass:"title is-1"},[e._v("Ventanilla Digital")]),a("h2",{staticClass:"subtitle colored is-4"},[e._v(" Trámites electronicos para el ITM. ")]),a("p",[e._v(" Esta es una plataforma para solicitar a distancia los trámites de control escolar y ayudar contra el "),a("b",[e._v("covid-19")]),e._v(". ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"has-text-centered"},[a("h1",{staticClass:"title is-4"},[e._v("Registrate ahora!")]),a("p",{staticClass:"description"},[e._v(" El usuario es necesario para acceder a los tramites en linea ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column is-8 is-offset-2"},[a("br"),a("nav",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-twitter"})]),e._v(" "),a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-facebook"})]),e._v(" "),a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-instagram"})]),e._v(" "),a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-github"})]),e._v(" "),a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-envelope"})])])]),a("div",{staticClass:"level-right"},[a("small",{staticClass:"level-item",staticStyle:{color:"var(--textLight)"}},[e._v(" © Instituto Tecnológico de Mérida. Todos los derechos reservados. ")])])])])}],r=(a("96cf"),a("1da1")),n=a("2612"),l=a("7bb1"),o=a("b8c4"),c=a("7802"),u=a("e0d5"),d={components:{ValidationObserver:l["a"],BSelectWithValidation:o["a"],BInputWithValidation:c["a"],BCheckboxesWithValidation:u["a"]},data:function(){return{user:{first_name:"",last_name:"",enrollment:"",email:"",password:"",password_confirm:""},isLoading:!1}},methods:{alertCustomError:function(){this.$buefy.dialog.alert({title:"Error",message:"Something's not good but I have a custom <b>icon</b> and <b>type</b>",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0})},signup:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,Object(n["d"])(e.user);case 4:return a=t.sent,console.log(a),e.$buefy.dialog.alert({title:"¡Ya casi!",message:"Por favor checa tu correo para confirmar tu cuenta",type:"is-success",hasIcon:!0,icon:"check-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0}),t.next=9,e.$router.push("/home");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.alertCustomError();case 14:return t.prev=14,e.isLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))()}}},f=d,p=(a("2cfd"),a("2877")),v=Object(p["a"])(f,s,i,!1,null,null,null);t["default"]=v.exports},7802:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.name||e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,i=t.valid;return[a("b-field",e._b({attrs:{type:{"is-danger":s[0],"is-success":i},message:s}},"b-field",e.$attrs,!1),[a("b-input",e._b({model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},"b-input",e.$attrs,!1))],1)]}}])})},i=[],r=a("7bb1"),n={components:{ValidationProvider:r["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""},value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},l=n,o=a("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=c.exports},b8c4:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors,i=t.valid;return[a("b-field",e._b({attrs:{type:{"is-danger":s[0],"is-success":i},message:s}},"b-field",e.$attrs,!1),[a("b-select",{attrs:{placeholder:"Select a subject"},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},[e._t("default")],2)],1)]}}],null,!0)})},i=[],r=a("7bb1"),n={components:{ValidationProvider:r["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""},value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},l=n,o=a("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=c.exports},e0d5:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{vid:e.vid,name:e.$attrs.label,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("div",{staticClass:"block"},[e._t("default"),a("p",{staticClass:"has-text-danger"},[e._v(e._s(s[0]))])],2)]}}],null,!0)})},i=[],r=a("7bb1"),n={components:{ValidationProvider:r["b"]},props:{vid:{type:String},rules:{type:[Object,String],default:""}}},l=n,o=a("2877"),c=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=c.exports},e314:function(e,t,a){}}]);
//# sourceMappingURL=chunk-afd0fb8e.8018f068.js.map