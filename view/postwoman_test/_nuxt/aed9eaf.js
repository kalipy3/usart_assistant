(window.webpackJsonp=window.webpackJsonp||[]).push([[67,19],{654:function(t,e,o){var content=o(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("508630d1",content,!0,{sourceMap:!1})},655:function(t,e,o){"use strict";o.r(e);o(57),o(56),o(93),o(65),o(77);var r=o(2).a.extend({props:{label:{type:String,default:"Section"},noLegend:{type:Boolean,default:!1}},computed:{sectionString:function(){return"".concat(this.$route.path.replace(/\/+$/,""),"/").concat(this.label)}},methods:{collapse:function(){this.$store.commit("setCollapsedSection",this.sectionString)},isCollapsed:function(t){return this.$store.state.theme.collapsedSections.includes(this.sectionString)||!1}}}),n=(o(660),o(16)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{attrs:{id:t.label.toLowerCase()}},[t.noLegend?t._e():o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[o("span",[t._v(t._s(t.label))]),t._v(" "),o("i",{staticClass:"ml-2 align-middle material-icons"},[t._v("\n      "+t._s(t.isCollapsed(t.label)?"expand_more":"expand_less")+"\n    ")])]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.isCollapsed(t.label.toLowerCase())}},[t._t("default")],2)])}),[],!1,null,"1a2e43a3",null);e.default=component.exports},660:function(t,e,o){"use strict";o(654)},661:function(t,e,o){var r=o(63)((function(i){return i[1]}));r.push([t.i,"fieldset[data-v-1a2e43a3]{margin-top:1rem;margin-bottom:1rem;border-radius:0.5rem;background-color:var(--bg-dark-color);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;width:100%}fieldset legend[data-v-1a2e43a3]{padding-left:1rem;padding-right:1rem;color:var(--fg-color);font-weight:700;cursor:pointer;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}",""]),t.exports=r},899:function(t,e,o){"use strict";o.r(e);var r={props:{params:{type:Array,default:function(){return[]}}},methods:{clearContent:function(t,e){this.$emit("clear-content",t,e)},removeRequestParam:function(t){this.$emit("remove-request-param",t)},addRequestParam:function(){this.$emit("add-request-param")}}},n=o(16),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppSection",{ref:"parameters",attrs:{label:"Parameters","no-legend":""}},[0!==t.params.length?o("ul",[o("li",[o("div",{staticClass:"row-wrapper"},[o("label",{attrs:{for:"paramList"}},[t._v(t._s(t.$t("parameter_list")))]),t._v(" "),o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("clear"),expression:"$t('clear')",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:function(e){return t.clearContent("parameters",e)}}},[o("i",{staticClass:"material-icons"},[t._v("clear_all")])])])])])]):t._e(),t._v(" "),t._l(t.params,(function(param,e){return o("ul",{key:e,staticClass:"\n      border-b border-dashed\n      divide-y\n      md:divide-x\n      border-brdColor\n      divide-dashed divide-brdColor\n      md:divide-y-0\n    ",class:{"border-t":0==e}},[o("li",[o("input",{attrs:{placeholder:t.$t("parameter_count",{count:e+1}),name:"param"+e,autofocus:""},domProps:{value:param.key},on:{change:function(o){return t.$store.commit("setKeyParams",{index:e,value:o.target.value})}}})]),t._v(" "),o("li",[o("input",{attrs:{placeholder:t.$t("value_count",{count:e+1}),name:"value"+e},domProps:{value:param.value},on:{change:function(o){return t.$store.commit("setValueParams",{index:e,value:o.target.value})}}})]),t._v(" "),o("li",[o("span",{staticClass:"select-wrapper"},[o("select",{attrs:{name:"type"+e},on:{change:function(o){return t.$store.commit("setTypeParams",{index:e,value:o.target.value})}}},[o("option",{attrs:{value:"query"},domProps:{selected:"query"===param.type}},[t._v("\n            "+t._s(t.$t("query"))+"\n          ")]),t._v(" "),o("option",{attrs:{value:"path"},domProps:{selected:"path"===param.type}},[t._v("\n            "+t._s(t.$t("path"))+"\n          ")])])])]),t._v(" "),o("div",[o("li",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:{content:param.hasOwnProperty("active")?param.active?t.$t("turn_off"):t.$t("turn_on"):t.$t("turn_off")},expression:"{\n            content: param.hasOwnProperty('active')\n              ? param.active\n                ? $t('turn_off')\n                : $t('turn_on')\n              : $t('turn_off'),\n          }",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:function(o){t.$store.commit("setActiveParams",{index:e,value:!!param.hasOwnProperty("active")&&!param.active})}}},[o("i",{staticClass:"material-icons"},[t._v("\n            "+t._s(param.hasOwnProperty("active")?param.active?"check_box":"check_box_outline_blank":"check_box")+"\n          ")])])])]),t._v(" "),o("div",[o("li",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("delete"),expression:"$t('delete')",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:function(o){return t.removeRequestParam(e)}}},[o("i",{staticClass:"material-icons"},[t._v("delete")])])])])])})),t._v(" "),o("ul",[o("li",[o("button",{staticClass:"icon",on:{click:t.addRequestParam}},[o("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" "),o("span",[t._v(t._s(t.$t("add_new")))])])])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSection:o(655).default})}}]);