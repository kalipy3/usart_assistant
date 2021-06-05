(window.webpackJsonp=window.webpackJsonp||[]).push([[59,19,60,61],{654:function(t,e,r){var content=r(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("508630d1",content,!0,{sourceMap:!1})},655:function(t,e,r){"use strict";r.r(e);r(57),r(56),r(93),r(65),r(77);var o=r(2).a.extend({props:{label:{type:String,default:"Section"},noLegend:{type:Boolean,default:!1}},computed:{sectionString:function(){return"".concat(this.$route.path.replace(/\/+$/,""),"/").concat(this.label)}},methods:{collapse:function(){this.$store.commit("setCollapsedSection",this.sectionString)},isCollapsed:function(t){return this.$store.state.theme.collapsedSections.includes(this.sectionString)||!1}}}),n=(r(660),r(16)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{attrs:{id:t.label.toLowerCase()}},[t.noLegend?t._e():r("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[r("span",[t._v(t._s(t.label))]),t._v(" "),r("i",{staticClass:"ml-2 align-middle material-icons"},[t._v("\n      "+t._s(t.isCollapsed(t.label)?"expand_more":"expand_less")+"\n    ")])]),t._v(" "),r("div",{staticClass:"collapsible",class:{hidden:t.isCollapsed(t.label.toLowerCase())}},[t._t("default")],2)])}),[],!1,null,"1a2e43a3",null);e.default=component.exports},660:function(t,e,r){"use strict";r(654)},661:function(t,e,r){var o=r(63)((function(i){return i[1]}));o.push([t.i,"fieldset[data-v-1a2e43a3]{margin-top:1rem;margin-bottom:1rem;border-radius:0.5rem;background-color:var(--bg-dark-color);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;width:100%}fieldset legend[data-v-1a2e43a3]{padding-left:1rem;padding-right:1rem;color:var(--fg-color);font-weight:700;cursor:pointer;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}",""]),t.exports=o},690:function(t,e,r){"use strict";e.a=function(t){return t>=100&&t<200?{name:"informational",className:"info-response"}:t>=200&&t<300?{name:"successful",className:"success-response"}:t>=300&&t<400?{name:"redirection",className:"redir-response"}:t>=400&&t<500?{name:"client error",className:"cl-error-response"}:t>=500&&t<600?{name:"server error",className:"sv-error-response"}:{name:"unknown",className:"missing-data-response"}}},692:function(t,e,r){var content=r(742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("32073a86",content,!0,{sourceMap:!1})},693:function(t,e,r){var content=r(744);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("651a8014",content,!0,{sourceMap:!1})},723:function(t,e,r){var content=r(779);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("1878190a",content,!0,{sourceMap:!1})},741:function(t,e,r){"use strict";r(692)},742:function(t,e,r){var o=r(63)((function(i){return i[1]}));o.push([t.i,".stared[data-v-06703ffd]{color:#f8e81c!important}.fade-enter-active[data-v-06703ffd],.fade-leave-active[data-v-06703ffd]{transition:all .2s}.fade-enter[data-v-06703ffd],.fade-leave-to[data-v-06703ffd]{opacity:0}",""]),t.exports=o},743:function(t,e,r){"use strict";r(693)},744:function(t,e,r){var o=r(63)((function(i){return i[1]}));o.push([t.i,".stared[data-v-32cf887c]{color:#f8e81c!important}.fade-enter-active[data-v-32cf887c],.fade-leave-active[data-v-32cf887c]{transition:all .2s}.fade-enter[data-v-32cf887c],.fade-leave-to[data-v-32cf887c]{opacity:0}",""]),t.exports=o},762:function(t,e,r){"use strict";r.r(e);var o=r(690),n={props:{entry:{type:Object,default:function(){}},showMore:Boolean},data:function(){return{expand:!1}},computed:{entryStatus:function(){return Object(o.a)(this.entry.status)||{className:""}}}},l=(r(741),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"show-on-large-screen"},[r("span",{staticClass:"p-2 m-2 truncate",class:t.entryStatus.className,style:{"--status-code":t.entry.status}},[t._v("\n      "+t._s(t.entry.method+"   •   "+t.entry.status)+"\n    ")]),t._v(" "),r("li",[r("input",{staticClass:"bg-transparent",attrs:{"aria-label":t.$t("token_req_name"),type:"text",readonly:"",placeholder:t.$t("empty_req_name")},domProps:{value:t.entry.name}})]),t._v(" "),r("span",[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.entry.star?t.$t("remove_star"):t.$t("add_star")},expression:"{\n          content: !entry.star ? $t('add_star') : $t('remove_star'),\n        }"}],staticClass:"icon",class:{stared:t.entry.star},attrs:{"data-testid":"star_button"},on:{click:function(e){return t.$emit("toggle-star")}}},[r("i",{staticClass:"material-icons"},[t._v("\n          "+t._s(t.entry.star?"star":"star_border")+"\n        ")])])]),t._v(" "),r("v-popover",[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("options"),expression:"$t('options')"}],staticClass:"tooltip-target icon"},[r("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),r("template",{slot:"popover"},[r("div",[r("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{"data-testid":"restore_history_entry","aria-label":t.$t("edit")},on:{click:function(e){return t.$emit("use-entry")}}},[r("i",{staticClass:"material-icons"},[t._v("restore")]),t._v(" "),r("span",[t._v(t._s(t.$t("restore")))])])]),t._v(" "),r("div",[r("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{"data-testid":"delete_history_entry","aria-label":t.$t("delete")},on:{click:function(e){return t.$emit("delete-entry")}}},[r("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" "),r("span",[t._v(t._s(t.$t("delete")))])])])])],2)],1),t._v(" "),r("div",{staticClass:"show-on-large-screen"},[r("li",[r("input",{staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("url"),type:"text",readonly:"",placeholder:t.$t("no_url")},domProps:{value:""+t.entry.url+t.entry.path}})])]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.showMore?r("div",{staticClass:"show-on-large-screen"},[r("li",[r("input",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.entry.date,expression:"entry.date"}],staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("time"),type:"text",readonly:""},domProps:{value:t.entry.time}})]),t._v(" "),r("li",[r("input",{staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("duration"),type:"text",readonly:"",placeholder:t.$t("no_duration")},domProps:{value:"Duration: "+t.entry.duration+"ms"}})])]):t._e()])],1)}),[],!1,null,"06703ffd",null);e.default=component.exports},763:function(t,e,r){"use strict";r.r(e);r(56),r(101),r(57),r(47);var o={props:{entry:{type:Object,default:function(){}},showMore:Boolean},data:function(){return{expand:!1}},computed:{query:function(){return this.expand?this.entry.query.split("\n"):this.entry.query.split("\n").slice(0,2).concat(["..."])}}},n=(r(743),r(16)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"show-on-large-screen"},[r("li",[r("input",{staticClass:"bg-transparent",attrs:{"data-testid":"'url'","aria-label":t.$t("url"),type:"text",readonly:"",placeholder:t.$t("empty_req_name")},domProps:{value:t.entry.url}})]),t._v(" "),r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.entry.star?t.$t("remove_star"):t.$t("add_star")},expression:"{\n        content: !entry.star ? $t('add_star') : $t('remove_star'),\n      }"}],staticClass:"icon",class:{stared:t.entry.star},attrs:{"data-testid":"star_button"},on:{click:function(e){return t.$emit("toggle-star")}}},[r("i",{staticClass:"material-icons"},[t._v("\n        "+t._s(t.entry.star?"star":"star_border")+"\n      ")])]),t._v(" "),r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.expand?t.$t("hide_more"):t.$t("show_more")},expression:"{\n        content: expand ? $t('hide_more') : $t('show_more'),\n      }"}],staticClass:"icon",attrs:{"data-testid":"query_expand"},on:{click:function(e){t.expand=!t.expand}}},[r("i",{staticClass:"material-icons"},[t._v("\n        "+t._s(t.expand?"unfold_less":"unfold_more")+"\n      ")])]),t._v(" "),r("v-popover",[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("options"),expression:"$t('options')"}],staticClass:"tooltip-target icon",attrs:{"data-testid":"options"}},[r("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),r("template",{slot:"popover"},[r("div",[r("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{"data-testid":"restore_history_entry","aria-label":t.$t("restore")},on:{click:function(e){return t.$emit("use-entry")}}},[r("i",{staticClass:"material-icons"},[t._v("restore")]),t._v(" "),r("span",[t._v(t._s(t.$t("restore")))])])]),t._v(" "),r("div",[r("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{"data-testid":"delete_history_entry","aria-label":t.$t("delete")},on:{click:function(e){return t.$emit("delete-entry")}}},[r("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" "),r("span",[t._v(t._s(t.$t("delete")))])])])])],2)],1),t._v(" "),r("div",{staticClass:"show-on-large-screen"},[r("li",{attrs:{"data-testid":"'query'"}},t._l(t.query,(function(line,e){return r("input",{key:"line-"+e,staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("query"),type:"text",readonly:""},domProps:{value:""+line}})})),0)]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.showMore?r("div",{staticClass:"show-on-large-screen"},[r("li",[r("input",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.entry.date,expression:"entry.date"}],staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("time"),type:"text",readonly:""},domProps:{value:t.entry.time}})]),t._v(" "),r("li",[r("input",{staticClass:"pt-0 mt-0 text-sm bg-transparent text-fgLightColor",attrs:{"aria-label":t.$t("duration"),type:"text",readonly:"",placeholder:t.$t("no_duration")},domProps:{value:"Duration: "+t.entry.duration+"ms"}})])]):t._e()])],1)}),[],!1,null,"32cf887c",null);e.default=component.exports},778:function(t,e,r){"use strict";r(723)},779:function(t,e,r){var o=r(63)((function(i){return i[1]}));o.push([t.i,".virtual-list[data-v-2b057d9b]{max-height:calc(100vh - 270px)}.virtual-list [readonly][data-v-2b057d9b]{cursor:default}ol[data-v-2b057d9b],ul[data-v-2b057d9b]{flex-direction:column}@media(max-width:720px){.virtual-list.filled[data-v-2b057d9b]{min-height:320px}.labels[data-v-2b057d9b]{display:none}}",""]),t.exports=o},813:function(t,e,r){"use strict";r.r(e);r(34),r(38),r(17),r(124),r(65),r(77);var o=r(71),n={props:{page:{type:String,default:null}},data:function(){return{filterText:"",showFilter:!1,isClearingHistory:!1,showMore:!1}},subscriptions:function(){return{history:"rest"===this.page?o.j:o.h}},computed:{filteredHistory:function(){var t=this;return this.history.filter((function(e){var r=t.filterText.toLowerCase();return Object.keys(e).some((function(t){var o=e[t];return(o="string"!=typeof o?o.toString():o).toLowerCase().includes(r)}))}))}},methods:{clearHistory:function(){"rest"===this.page?Object(o.e)():Object(o.d)(),this.isClearingHistory=!1,this.$toast.error(this.$t("history_deleted"),{icon:"delete"})},useHistory:function(t){this.$emit("useHistory",t)},deleteHistory:function(t){"rest"===this.page?Object(o.g)(t):Object(o.f)(t),this.$toast.error(this.$t("deleted"),{icon:"delete"})},enableHistoryClearing:function(){this.history&&this.history.length&&(this.isClearingHistory=!0)},disableHistoryClearing:function(){this.isClearingHistory=!1},toggleCollapse:function(){this.showMore=!this.showMore},toggleStar:function(t){"rest"===this.page?Object(o.o)(t):Object(o.n)(t)}}},l=(r(778),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppSection",{ref:"history",attrs:{icon:"history",label:t.$t("history"),"no-legend":""}},[r("div",{staticClass:"show-on-large-screen"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"rounded-t-lg",attrs:{"aria-label":"Search",type:"search",placeholder:t.$t("search")},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"divide-y virtual-list divide-dashed divide-brdColor",class:{filled:t.filteredHistory.length}},t._l(t.filteredHistory,(function(e,o){return r("ul",{key:"entry-"+o},["rest"==t.page?r("HistoryRestCard",{attrs:{id:o,entry:e,"show-more":t.showMore},on:{"toggle-star":function(r){return t.toggleStar(e)},"delete-entry":function(r){return t.deleteHistory(e)},"use-entry":function(r){return t.useHistory(e)}}}):t._e(),t._v(" "),"graphql"==t.page?r("HistoryGraphqlCard",{attrs:{entry:e,"show-more":t.showMore},on:{"toggle-star":function(r){return t.toggleStar(e)},"delete-entry":function(r){return t.deleteHistory(e)},"use-entry":function(r){return t.useHistory(e)}}}):t._e()],1)})),0),t._v(" "),r("p",{staticClass:"info",class:{hidden:0!=t.filteredHistory.length||0===t.history.length}},[t._v("\n    "+t._s(t.$t("nothing_found"))+' "'+t._s(t.filterText)+'"\n  ')]),t._v(" "),0===t.history.length?r("p",{staticClass:"info"},[r("i",{staticClass:"material-icons"},[t._v("schedule")]),t._v(" "+t._s(t.$t("history_empty"))+"\n  ")]):t._e(),t._v(" "),0!==t.history.length?r("div",{staticClass:"rounded-b-lg bg-bgDarkColor"},[t.isClearingHistory?r("div",{staticClass:"row-wrapper"},[r("p",{staticClass:"info"},[r("i",{staticClass:"material-icons"},[t._v("help_outline")]),t._v(" "+t._s(t.$t("are_you_sure"))+"\n      ")]),t._v(" "),r("div",[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("yes"),expression:"$t('yes')"}],staticClass:"icon",attrs:{"data-testid":"confirm_clear_history"},on:{click:t.clearHistory}},[r("i",{staticClass:"material-icons"},[t._v("done")])]),t._v(" "),r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("no"),expression:"$t('no')"}],staticClass:"icon",attrs:{"data-testid":"reject_clear_history"},on:{click:t.disableHistoryClearing}},[r("i",{staticClass:"material-icons"},[t._v("close")])])])]):r("div",{staticClass:"row-wrapper"},[r("button",{staticClass:"icon",attrs:{"data-testid":"clear_history",disabled:0===t.history.length},on:{click:t.enableHistoryClearing}},[r("i",{staticClass:"material-icons"},[t._v("clear_all")]),t._v(" "),r("span",[t._v(t._s(t.$t("clear_all")))])]),t._v(" "),r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.showMore?t.$t("hide_more"):t.$t("show_more")},expression:"{ content: !showMore ? $t('show_more') : $t('hide_more') }"}],staticClass:"icon",on:{click:function(e){return t.toggleCollapse()}}},[r("i",{staticClass:"material-icons"},[t._v("\n          "+t._s(t.showMore?"unfold_less":"unfold_more")+"\n        ")])])])]):t._e()])}),[],!1,null,"2b057d9b",null);e.default=component.exports;installComponents(component,{HistoryRestCard:r(762).default,HistoryGraphqlCard:r(763).default,AppSection:r(655).default})}}]);