(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1343:function(e,t,o){"use strict";o.r(t);var l={props:{collectionIndex:{type:Number,default:null},collection:{type:Object,default:()=>{}},doc:Boolean,isFiltered:Boolean,selected:Boolean,saveRequest:Boolean,collectionsType:{type:Object,default:()=>{}},picked:{type:Object,default:()=>{}}},data:()=>({showChildren:!1,dragging:!1,selectedFolder:{},confirmRemove:!1,prevCursor:"",cursor:"",pageNo:0}),computed:{isSelected(){return this.picked&&"teams-collection"===this.picked.pickedType&&this.picked.collectionID===this.collection.id}},methods:{editRequest(e){this.$emit("edit-request",e),this.$props.saveRequest&&this.$emit("select",{picked:{pickedType:"teams-collection",collectionID:this.collection.id}})},toggleShowChildren(){this.$props.saveRequest&&this.$emit("select",{picked:{pickedType:"teams-collection",collectionID:this.collection.id}}),this.$emit("expand-collection",this.collection.id),this.showChildren=!this.showChildren},removeCollection(){this.$emit("remove-collection",{collectionsType:this.collectionsType,collectionIndex:this.collectionIndex,collectionID:this.collection.id}),this.confirmRemove=!1},expandCollection(e){this.$emit("expand-collection",e)},removeRequest(e){var{collectionIndex:t,folderName:o,requestIndex:l}=e;this.$emit("remove-request",{collectionIndex:t,folderName:o,requestIndex:l})}}},c=o(12),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"transition duration-150 ease-in-out row-wrapper"},[o("button",{staticClass:"icon",on:{click:e.toggleShowChildren}},[o("i",{directives:[{name:"show",rawName:"v-show",value:!e.showChildren&&!e.isFiltered,expression:"!showChildren && !isFiltered"}],staticClass:"material-icons"},[e._v("arrow_right")]),e._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.showChildren||e.isFiltered,expression:"showChildren || isFiltered"}],staticClass:"material-icons"},[e._v("arrow_drop_down")]),e._v(" "),e.isSelected?o("i",{staticClass:"text-green-400 material-icons"},[e._v("check_circle")]):o("i",{staticClass:"material-icons"},[e._v("folder")]),e._v(" "),o("span",[e._v(e._s(e.collection.title))])]),e._v(" "),o("div",[e.doc&&!e.selected?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.$t("import"),expression:"$t('import')",modifiers:{left:!0}}],staticClass:"icon",on:{click:function(t){return e.$emit("select-collection")}}},[o("i",{staticClass:"material-icons"},[e._v("check_box_outline_blank")])]):e._e(),e._v(" "),e.doc&&e.selected?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.$t("delete"),expression:"$t('delete')",modifiers:{left:!0}}],staticClass:"icon",on:{click:function(t){return e.$emit("unselect-collection")}}},[o("i",{staticClass:"material-icons"},[e._v("check_box")])]):e._e(),e._v(" "),e.saveRequest?e._e():o("v-popover",["VIEWER"!==e.collectionsType.selectedTeam.myRole?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]):e._e(),e._v(" "),o("template",{slot:"popover"},[o("div",["VIEWER"!==e.collectionsType.selectedTeam.myRole?o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("add-folder",{folder:e.collection,path:""+e.collectionIndex})}}},[o("i",{staticClass:"material-icons"},[e._v("create_new_folder")]),e._v(" "),o("span",[e._v(e._s(e.$t("new_folder")))])]):e._e()]),e._v(" "),o("div",["VIEWER"!==e.collectionsType.selectedTeam.myRole?o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("edit-collection")}}},[o("i",{staticClass:"material-icons"},[e._v("create")]),e._v(" "),o("span",[e._v(e._s(e.$t("edit")))])]):e._e()]),e._v(" "),o("div",["VIEWER"!==e.collectionsType.selectedTeam.myRole?o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){e.confirmRemove=!0}}},[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" "),o("span",[e._v(e._s(e.$t("delete")))])]):e._e()])])],2)],1)]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showChildren||e.isFiltered,expression:"showChildren || isFiltered"}]},[o("ul",{staticClass:"flex-col"},e._l(e.collection.children,(function(t,l){return o("li",{key:t.title,staticClass:"ml-8 border-l border-brdColor"},[o("CollectionsTeamsFolder",{attrs:{folder:t,"folder-index":l,"folder-path":e.collectionIndex+"/"+l,"collection-index":e.collectionIndex,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,"is-filtered":e.isFiltered,picked:e.picked},on:{"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},select:function(t){return e.$emit("select",t)},"expand-collection":e.expandCollection,"remove-request":e.removeRequest}})],1)})),0),e._v(" "),o("ul",{staticClass:"flex-col"},e._l(e.collection.requests,(function(t,l){return o("li",{key:l,staticClass:"ml-8 border-l border-brdColor"},[o("CollectionsTeamsRequest",{attrs:{request:t.request,"collection-index":e.collectionIndex,"folder-index":-1,"folder-name":e.collection.name,"request-index":t.id,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,picked:e.picked},on:{"edit-request":function(t){return e.editRequest(t)},select:function(t){return e.$emit("select",t)},"remove-request":e.removeRequest}})],1)})),0),e._v(" "),o("ul",[null!=e.collection.children&&0!==e.collection.children.length||null!=e.collection.requests&&0!==e.collection.requests.length?e._e():o("li",{staticClass:"flex ml-8 border-l border-brdColor"},[o("p",{staticClass:"info"},[o("i",{staticClass:"material-icons"},[e._v("not_interested")]),e._v("\n          "+e._s(e.$t("collection_empty"))+"\n        ")])])])]),e._v(" "),o("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("are_you_sure_remove_collection")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeCollection}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CollectionsTeamsFolder:o(850).default,CollectionsTeamsRequest:o(794).default,SmartConfirmModal:o(588).default})}}]);