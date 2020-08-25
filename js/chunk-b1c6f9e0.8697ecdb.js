(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1c6f9e0"],{"22d7":function(t,e,s){"use strict";var a=s("be87"),i=s.n(a);i.a},"714b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("a",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLogued,expression:"$store.state.isLogued"}],staticClass:"button is-floating is-primary",on:{click:function(e){return t.show_form(!0)}}},[s("b-icon",{attrs:{size:"is-small",icon:"border-all"}})],1),s("div",{staticClass:"modal",class:{"is-active":t.$store.state.isComponentModalActive}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Solicitud de documentos")]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.show_form(!1),t.activeStep=0}}})]),s("section",{staticClass:"modal-card-body"},[s("section",{staticClass:"container"},[s("b-steps",{scopedSlots:t._u([{key:"navigation",fn:function(e){e.previous;var a=e.next;return[s("div",{staticClass:"buttons"},[3==t.activeStep?s("b-button",{attrs:{type:"is-primary",size:"is-medium",expanded:""},on:{click:t.submit}},[t._v("¡Terminar y enviar!")]):0!==t.activeStep?s("b-button",{attrs:{type:"is-primary",disabled:a.disabled,size:"is-medium",expanded:""},on:{click:function(e){return e.preventDefault(),t.nextStep()}}},[t._v("Siguiente")]):t._e()],1)]}}]),model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("b-step-item",{attrs:{clickable:!1,label:"Trámite",icon:"file-document"}},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-12"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary",on:{click:function(e){return t.optionSelected(1,"CONSTANCIA")}}},[s("p",{staticClass:"title is-5"},[t._v("Constancia de estudios")]),s("p",{staticClass:"subtitle is-6"},[t._v(" Normal, con promedio, SITUR ")])]),s("article",{staticClass:"tile is-child notification is-primary",on:{click:function(e){return t.optionSelected(1,"HORARIO")}}},[s("p",{staticClass:"title is-5"},[t._v("Horario escolar")]),s("p",{staticClass:"subtitle is-6"},[t._v("Bottom tile")])])]),s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary",on:{click:function(e){return t.optionSelected(1,"IMSS")}}},[s("p",{staticClass:"title is-5"},[t._v("Alta/Baja IMSS")]),s("p",{staticClass:"subtitle is-6"},[t._v("Requiere NSS")])]),s("article",{staticClass:"tile is-child notification is-primary",on:{click:function(e){return t.optionSelected(1,"SEGUIMIENTO")}}},[s("p",{staticClass:"title is-5"},[t._v("Seguimiento académico")]),s("p",{staticClass:"subtitle is-6"},[t._v(" Aligned with the right tile ")])])])])])])]),s("b-step-item",{attrs:{clickable:!1,label:"Requisitos",icon:"file-document-edit"}},[s("article",{staticClass:"message"},["CONSTANCIA"==t.option?s("div",{staticClass:"message-body"},[t._v(" ¡Bien!, has seleccionado "),s("strong",[t._v("Constancia de estudios")]),t._v(" un documento muy útil para validar tu actividad estudiantil, ahora solo falta seleccionar el tipo, llenar unos cuantos datos estudiantiles, subir tu INE, foto infantil y "),s("b",[t._v("¡Listo!")]),t._v(" trámite realizado. ")]):t._e(),"IMSS"==t.option?s("div",{staticClass:"message-body"},[t._v(" ¡Hola!, esta es la sección para darte de "),s("strong",[t._v("Alta o Baja del IMSS")]),t._v(", ahora solo falta llenar unos cuantos datos para el trámite, presentar una fotografía de tu INE y "),s("b",[t._v("¡Listo!")]),t._v(" trámite realizado. ")]):t._e(),"HORARIO"==t.option?s("div",{staticClass:"message-body"},[t._v(" ¡Hey!, aquí podrás solicitar tu "),s("strong",[t._v("Horario")]),t._v(", una herramienta que te ayudará a organizarte para tus clases, además de que es muy útil para presentar como evidencia a quién lo solicite, solo necesitas darle al botón de "),s("b",[t._v("siguiente")]),t._v(", enviarnos tus datos, una fotografía de tu INE y "),s("b",[t._v("¡Listo!")]),t._v(" trámite realizado. ")]):t._e(),"SEGUIMIENTO"==t.option?s("div",{staticClass:"message-body"},[t._v(" ¡Sí!, así de fácil es solicitar un "),s("strong",[t._v("Seguimiento académico")]),t._v(", un documento muy útil para ver tu progreso escolar, solo dale a "),s("b",[t._v("siguiente")]),t._v(", completa tus datos faltantes, una foto de tu INE y "),s("b",[t._v("¡Listo!")]),t._v(" trámite realizado. ")]):t._e()]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12"},[s("div",[s("ValidationObserver",{ref:"form1"},["CONSTANCIA"==t.option?s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.valid;return[s("b-field",{attrs:{message:a,type:{"is-danger":a[0],"is-success":i},label:"Tipo de constancia"}},[s("b-select",{attrs:{size:"is-medium-small",expanded:"",placeholder:"Selecciona un tipo de constancia"},model:{value:t.schoolRequest.description,callback:function(e){t.$set(t.schoolRequest,"description",e)},expression:"schoolRequest.description"}},[s("option",{attrs:{value:"Normal"}},[t._v("Normal")]),s("option",{attrs:{value:"SITUR"}},[t._v("SITUR")]),s("option",{attrs:{value:"Promedio"}},[t._v("Promedio")])])],1)]}}],null,!1,235633861)}):t._e(),"IMSS"==t.option?s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.valid;return[s("b-field",{attrs:{message:a,type:{"is-danger":a[0],"is-success":i},label:"Tipo de solicitud"}},[s("b-select",{attrs:{size:"is-medium-small",expanded:"",placeholder:"Seleccione una opcion"},model:{value:t.schoolRequest.description,callback:function(e){t.$set(t.schoolRequest,"description",e)},expression:"schoolRequest.description"}},[s("option",{attrs:{value:"ALTA_IMSS"}},[t._v("Alta")]),s("option",{attrs:{value:"BAJA_IMSS"}},[t._v("Baja")])])],1)]}}],null,!1,210101046)}):t._e(),"IMSS"==t.option?[s("b-field",{attrs:{label:"NSS"}},[s("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"NSS"},model:{value:t.student.NSS,callback:function(e){t.$set(t.student,"NSS",e)},expression:"student.NSS"}})],1),"ALTA_IMSS"==t.schoolRequest.description?s("b-field",{attrs:{label:"CURP"}},[s("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"CURP"},model:{value:t.student.CURP,callback:function(e){t.$set(t.student,"CURP",e)},expression:"student.CURP"}})],1):t._e(),"ALTA_IMSS"==t.schoolRequest.description?s("a",{staticClass:"is-12",attrs:{href:"https://www.gob.mx/curp/",target:"_blank"}},[t._v("Consultar CURP")]):t._e()]:t._e()],2)],1)])])]),s("b-step-item",{attrs:{clickable:!1,label:"Datos",icon:"account"}},[s("ValidationObserver",{ref:"form2"},[s("b-field",{attrs:{label:"Nombre(s)"}},[s("BInputWithValidation",{attrs:{rules:"required",name:"name",type:"text",placeholder:"Nombre(s)"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),s("b-field",{attrs:{label:"Apellidos"}},[s("BInputWithValidation",{attrs:{rules:"required",name:"lastname",type:"text",placeholder:"Apellidos"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1),s("b-field",{attrs:{label:"Matrícula"}},[s("BInputWithValidation",{attrs:{rules:"required|matricula",type:"text",placeholder:"Matrícula"},model:{value:t.student.enrollment,callback:function(e){t.$set(t.student,"enrollment",e)},expression:"student.enrollment"}})],1),s("b-field",{attrs:{label:"Carrera"}},[s("BSelectWithValidation",{attrs:{rules:"required",size:"is-small-medium",placeholder:"Selecciona tu carrera"},model:{value:t.student.career,callback:function(e){t.$set(t.student,"career",e)},expression:"student.career"}},[s("option",{attrs:{value:"IGE"}},[t._v("Ingeniería en Gestión Empresarial")]),s("option",{attrs:{value:"IA"}},[t._v("Ingeniería Ambiental")]),s("option",{attrs:{value:"IBQ"}},[t._v("Ingeniería Bioquímica")]),s("option",{attrs:{value:"IBM"}},[t._v("Ingeniería Biomédica")]),s("option",{attrs:{value:"IQ"}},[t._v("Ingeniería Química")]),s("option",{attrs:{value:"IELE"}},[t._v("Ingeniería Eléctrica")]),s("option",{attrs:{value:"IELC"}},[t._v("Ingeniería Electrónica")]),s("option",{attrs:{value:"IM"}},[t._v("Ingeniería Mecánica")]),s("option",{attrs:{value:"IC"}},[t._v("Ingeniería Civil")]),s("option",{attrs:{value:"II"}},[t._v("Ingeniería Industrial")]),s("option",{attrs:{value:"ISC"}},[t._v("Ingeniería en Sistemas Computacionales")]),s("option",{attrs:{value:"LA"}},[t._v("Licenciatura en Administración")])])],1),s("b-field",{attrs:{label:"Ingreso"}},[s("BInputWithValidation",{attrs:{rules:"required",placeholder:"Selecciona tu ingreso",size:"is-small-medium",type:"number",min:"1",max:"12",expanded:""},model:{value:t.student.admission,callback:function(e){t.$set(t.student,"admission",e)},expression:"student.admission"}})],1)],1)],1),s("b-step-item",{attrs:{clickable:!1,label:"Archivos",icon:"cloud-upload"}},[s("ValidationObserver",{ref:"form3"},[[s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;e.valid;return[s("label",{staticClass:"label"},[t._v("INE")]),s("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.schoolRequest.INE}},[s("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:t.schoolRequest.INE,callback:function(e){t.$set(t.schoolRequest,"INE",e)},expression:"schoolRequest.INE"}},[s("span",{staticClass:"file-cta"},[s("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),s("span",{staticClass:"file-label"},[t._v("Click to upload")])],1),t.schoolRequest.INE?s("span",{staticClass:"file-name"},[t._v(" "+t._s(t.schoolRequest.INE.name)+" ")]):t._e()])],1),t._v(" "+t._s(a[0])+" ")]}}])}),s("br"),"CONSTANCIA"==t.option?[s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;e.valid;return[s("label",{staticClass:"label"},[t._v("Foto infantil")]),s("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.schoolRequest.photo}},[s("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:t.schoolRequest.photo,callback:function(e){t.$set(t.schoolRequest,"photo",e)},expression:"schoolRequest.photo"}},[s("span",{staticClass:"file-cta"},[s("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),s("span",{staticClass:"file-label"},[t._v("Click to upload")])],1),t.schoolRequest.photo?s("span",{staticClass:"file-name"},[t._v(" "+t._s(t.schoolRequest.photo.name)+" ")]):t._e()])],1),t._v(" "+t._s(a[0])+" ")]}}],null,!1,4056502150)})]:t._e()]],2)],1)],1)],1)])])])])},i=[],o=s("2f62"),l=s("2612"),n={async mounted(){this.activeStep=0;await this.$store.dispatch("getStudent")},data(){return{file:null,activeStep:0,option:"",tramite:""}},computed:{...Object(o["b"])(["user","student","schoolRequest"])},methods:{show_form(t){this.$store.commit("SHOW_FORM",t)},optionSelected(t,e){this.activeStep=t,this.option=e,this.$store.commit("SET_TYPE",e)},async nextStep(){let t;switch(this.activeStep){case 1:if(t=await this.$refs.form1.validate(),!t)return;this.$refs.form1.$nextTick(()=>this.activeStep+=1);break;case 2:if(t=await this.$refs.form2.validate(),!t)return;this.$refs.form1.$nextTick(()=>this.activeStep+=1);break;default:break}},async submit(){let t=await this.$refs.form3.validate();t&&this.$buefy.dialog.confirm({title:"Revisa que los datos sean correctos",message:"Trámite solicitado: "+this.option,cancelText:"Cancelar",confirmText:"Enviar",type:"is-info",hasIcon:!0,iconPack:"fa",onConfirm:async()=>{const t=await Object(l["h"])(this.user.id,this.student),e=new FormData;for(var s in this.$store.commit("SET_STUDENT",t),console.log(t),this.schoolRequest)e.append(s,this.schoolRequest[s]);const a=await Object(l["g"])(this.user.id,e);console.log(a),this.$buefy.toast.open({message:"¡Solicitud enviada correctamente!",type:"is-success"}),this.$store.commit("CLEAR_REQ"),this.show_form(!1),this.activeStep=0}})}}},r=n,c=(s("22d7"),s("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=u.exports},be87:function(t,e,s){}}]);
//# sourceMappingURL=chunk-b1c6f9e0.8697ecdb.js.map