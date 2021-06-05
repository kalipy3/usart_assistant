(window.webpackJsonp=window.webpackJsonp||[]).push([[34,82],{588:function(e,t,o){"use strict";o.r(t);var r={props:{show:Boolean,title:{type:String,default:null},yes:{type:String,default(){return this.$t("yes")}},no:{type:String,default(){return this.$t("no")}}},mounted(){this._keyListener=function(e){"Escape"===e.key&&(e.preventDefault(),this.hideModal())},document.addEventListener("keydown",this._keyListener.bind(this))},beforeDestroy(){document.removeEventListener("keydown",this._keyListener)},methods:{hideModal(){this.$emit("hide-modal")},resolve(){this.$emit("resolve")}}},n=o(12),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{on:{close:e.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[e._v(e._s(e.$t("confirm")))]),e._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:e.hideModal}},[o("i",{staticClass:"material-icons"},[e._v("close")])])])])]),e._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},[o("label",[e._v(e._s(e.title))])]),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),e._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:e.hideModal}},[e._v("\n          "+e._s(e.no)+"\n        ")]),e._v(" "),o("button",{staticClass:"icon primary",on:{click:e.resolve}},[e._v("\n          "+e._s(e.yes)+"\n        ")])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartModal:o(150).default})},608:function(e,t,o){"use strict";o.r(t);o(94);var r=o(2),n=o(50),l=r.a.extend({props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},request:{type:Object,default:()=>{}},folderPath:{type:String,default:null},requestIndex:{type:Number,default:null},doc:Boolean},data:()=>({dragging:!1,confirmRemove:!1}),computed:{isSelected(){return this.picked&&"gql-my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex}},methods:{pick(){this.$emit("select",{picked:{pickedType:"gql-my-request",folderPath:this.folderPath,requestIndex:this.requestIndex}})},selectRequest(){this.savingMode?this.pick():this.$store.commit("postwoman/selectGraphqlRequest",{request:this.request})},dragStart(e){var{dataTransfer:t}=e;this.dragging=!this.dragging,t.setData("folderPath",this.folderPath),t.setData("requestIndex",this.requestIndex)},removeRequest(){Object(n.s)(this.folderPath,this.requestIndex),this.$toast.error(this.$t("deleted").toString(),{icon:"delete"}),this.confirmRemove=!1}}}),d=o(12),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{class:["row-wrapper transition duration-150 ease-in-out",{"bg-bgDarkColor":e.dragging}],attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1}}},[o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.doc?"":e.$t("use_request"),expression:"!doc ? $t('use_request') : ''"}],staticClass:"icon",on:{click:function(t){e.doc||e.selectRequest()}}},[e.isSelected?o("i",{staticClass:"mx-3 text-green-400 material-icons"},[e._v("check_circle")]):o("i",{staticClass:"material-icons"},[e._v("description")]),e._v(" "),o("span",[e._v(e._s(e.request.name))])])]),e._v(" "),e.savingMode?e._e():o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("more"),expression:"$t('more')"}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("edit-request",{request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath})}}},[o("i",{staticClass:"material-icons"},[e._v("edit")]),e._v(" "),o("span",[e._v(e._s(e.$t("edit")))])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){e.confirmRemove=!0}}},[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" "),o("span",[e._v(e._s(e.$t("delete")))])])])])],2)],1),e._v(" "),o("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("are_you_sure_remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartConfirmModal:o(588).default})}}]);