(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-758e9cca"],{"5ed7":function(t,e,s){},"89e4":function(t,e,s){"use strict";var a=s("5ed7"),r=s.n(a);r.a},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-success is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("div",{staticClass:"box"},[s("h1",[t._v("Ventanilla Digital")]),t._m(0),s("form",[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.enrollment,expression:"user.enrollment"}],staticClass:"input",attrs:{type:"text",placeholder:"Matrícula",autofocus:""},domProps:{value:t.user.enrollment},on:{input:function(e){e.target.composing||t.$set(t.user,"enrollment",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Contraseña"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})])]),t._m(1),s("button",{staticClass:"button is-block is-info is-large is-fullwidth",on:{click:t.submit}},[t._v(" Iniciar sesión "),s("i",{staticClass:"fa fa-sign-in",attrs:{"aria-hidden":"true"}})])])]),s("p",{staticClass:"has-text-black"},[t._v(" ¿Ya tienes cuenta? · "),s("router-link",{attrs:{tag:"a",to:"/register"}},[t._v("Registrarse")]),s("br"),t._v("¿Olvidaste tu contraseña? · "),s("a",{attrs:{href:"../"}},[t._v("Recuperar contraseña")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("figure",{staticClass:"avatar"},[s("img",{attrs:{src:"https://www.itmerida.mx/imagenes/tec.png",width:"125px",alt:"Logo"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox"}}),t._v(" Recuérdame ")])])}],i=(s("96cf"),s("1da1")),n={created:function(){this.$store.state.isLogued&&this.$router.push("/home")},data:function(){return{user:{enrollment:"",password:""}}},methods:{submit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("login",t.user);case 2:t.$router.push("/home");case 3:case"end":return e.stop()}}),e)})))()}}},o=n,c=(s("89e4"),s("2877")),l=Object(c["a"])(o,a,r,!1,null,"32f84e9e",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-758e9cca.372b373f.js.map