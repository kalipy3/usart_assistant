(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{662:function(t,e,l){"use strict";l.r(e);l(94);var o=l(2),n=l(50),c=o.a.extend({props:{show:Boolean},data:()=>({name:null}),methods:{addNewCollection(){this.name?(Object(n.a)({name:this.name,folders:[],requests:[]}),this.hideModal()):this.$toast.info(this.$t("invalid_collection_name").toString())},hideModal(){this.name=null,this.$emit("hide-modal")}}}),d=l(12),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.show?l("SmartModal",{on:{close:t.hideModal}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("div",{staticClass:"row-wrapper"},[l("h3",{staticClass:"title"},[t._v(t._s(t.$t("new_collection")))]),t._v(" "),l("div",[l("button",{staticClass:"icon",on:{click:t.hideModal}},[l("i",{staticClass:"material-icons"},[t._v("close")])])])])]),t._v(" "),l("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[l("label",{attrs:{for:"selectLabel"}},[t._v(t._s(t.$t("label")))]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"selectLabel",type:"text",placeholder:t.$t("my_new_collection")},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewCollection(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("div",{staticClass:"row-wrapper"},[l("span"),t._v(" "),l("span",[l("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),l("button",{staticClass:"icon primary",on:{click:t.addNewCollection}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:l(150).default})}}]);