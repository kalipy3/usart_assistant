(window.webpackJsonp=window.webpackJsonp||[]).push([[90,17],{586:function(t,e,o){var content=o(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("508630d1",content,!0,{sourceMap:!1})},587:function(t,e,o){"use strict";o.r(e);o(68),o(49);var r=o(2).a.extend({props:{label:{type:String,default:"Section"},noLegend:{type:Boolean,default:!1}},computed:{sectionString(){return"".concat(this.$route.path.replace(/\/+$/,""),"/").concat(this.label)}},methods:{collapse(){this.$store.commit("setCollapsedSection",this.sectionString)},isCollapsed(t){return this.$store.state.theme.collapsedSections.includes(this.sectionString)||!1}}}),n=(o(591),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{attrs:{id:t.label.toLowerCase()}},[t.noLegend?t._e():o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[o("span",[t._v(t._s(t.label))]),t._v(" "),o("i",{staticClass:"ml-2 align-middle material-icons"},[t._v("\n      "+t._s(t.isCollapsed(t.label)?"expand_more":"expand_less")+"\n    ")])]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.isCollapsed(t.label.toLowerCase())}},[t._t("default")],2)])}),[],!1,null,"1a2e43a3",null);e.default=component.exports},591:function(t,e,o){"use strict";o(586)},592:function(t,e,o){var r=o(41)((function(i){return i[1]}));r.push([t.i,"fieldset[data-v-1a2e43a3]{margin-top:1rem;margin-bottom:1rem;border-radius:0.5rem;background-color:var(--bg-dark-color);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;width:100%}fieldset legend[data-v-1a2e43a3]{padding-left:1rem;padding-right:1rem;color:var(--fg-color);font-weight:700;cursor:pointer;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}",""]),t.exports=r},660:function(t,e,o){var content=o(726);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("a1bb3ada",content,!0,{sourceMap:!1})},724:function(t,e,o){var content=o(793);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("1090b39a",content,!0,{sourceMap:!1})},725:function(t,e,o){"use strict";o(660)},726:function(t,e,o){var r=o(41)((function(i){return i[1]}));r.push([t.i,"ul[data-v-44549aac]{flex-direction:column}ul[data-v-44549aac],ul li[data-v-44549aac]{display:flex}ul li[data-v-44549aac]{padding-left:16px;border-left:1px solid var(--brd-color)}",""]),t.exports=r},753:function(t,e,o){"use strict";o.r(e);o(68);var r=o(595),n={props:{show:Boolean},data:()=>({name:null}),methods:{addNewTeam(){var t=this.name;this.name="",null!=t&&t.replace(/\s/g,"").length<6?this.$toast.error(this.$t("string_length_insufficient"),{icon:"error"}):(r.c(this.$apollo,t).then((()=>{this.hideModal()})).catch((e=>{console.error(e),this.name=t})),this.hideModal())},hideModal(){this.name=null,this.$emit("hide-modal")}}},l=o(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("SmartModal",{on:{close:t.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("ul",[o("li",[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("new_team")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])])])]),t._v(" "),o("div",{attrs:{slot:"body"},slot:"body"},[o("ul",[o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.$t("my_new_team")},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewTeam(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})])])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row-wrapper"},[o("span"),t._v(" "),o("span",[o("button",{staticClass:"icon",on:{click:t.hideModal}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")]),t._v(" "),o("button",{staticClass:"icon primary",on:{click:t.addNewTeam}},[t._v("\n          "+t._s(t.$t("save"))+"\n        ")])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartModal:o(150).default})},754:function(t,e,o){"use strict";o.r(e);var r=o(595),n={props:{team:{type:Object,default:()=>{}},teamID:{type:String,default:null}},methods:{deleteTeam(){confirm("Are you sure you want to remove this team?")&&r.f(this.$apollo,this.teamID).then((()=>{this.$toast.success(this.$t("new_team_created"),{icon:"done"})})).catch((t=>{this.$toast.error(this.$t("error_occurred"),{icon:"done"}),console.error(t)}))},exitTeam(){confirm("Are you sure you want to exit this team?")&&r.g(this.$apollo,this.teamID).then((()=>{this.$toast.success(this.$t("team_exited"),{icon:"done"})})).catch((t=>{this.$toast.error(this.$t("error_occurred"),{icon:"error"}),console.error(t)}))}}},l=(o(725),o(12)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row-wrapper"},[o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:"OWNER"===t.team.myRole?t.$t("edit"):"",expression:"team.myRole === 'OWNER' ? $t('edit') : ''",modifiers:{right:!0}}],staticClass:"icon",on:{click:function(e){"OWNER"===t.team.myRole&&t.$emit("edit-team")}}},[o("i",{staticClass:"material-icons"},[t._v("group")]),t._v(" "),o("span",[t._v(t._s(t.team.name))])])]),t._v(" "),o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),o("template",{slot:"popover"},["OWNER"===t.team.myRole?o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){return t.$emit("edit-team")}}},[o("i",{staticClass:"material-icons"},[t._v("create")]),t._v(" "),o("span",[t._v(t._s(t.$t("edit")))])])]):t._e(),t._v(" "),"OWNER"===t.team.myRole?o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:t.deleteTeam}},[o("i",{staticClass:"material-icons"},[t._v("delete")]),t._v(" "),o("span",[t._v(t._s(t.$t("delete")))])])]):t._e(),t._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{disabled:"OWNER"===t.team.myRole&&1==t.team.ownersCount},on:{click:t.exitTeam}},[o("i",{staticClass:"material-icons"},[t._v("remove")]),t._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:{content:"OWNER"===t.team.myRole&&1==t.team.ownersCount?t.$t("disable_exit"):""},expression:"{\n              content:\n                team.myRole === 'OWNER' && team.ownersCount == 1\n                  ? $t('disable_exit')\n                  : '',\n            }",modifiers:{left:!0}}]},[o("span",[t._v(t._s(t.$t("exit")))])])])])])],2)],1)}),[],!1,null,"44549aac",null);e.default=component.exports},792:function(t,e,o){"use strict";o(724)},793:function(t,e,o){var r=o(41)((function(i){return i[1]}));r.push([t.i,".virtual-list[data-v-6b416240]{max-height:calc(100vh - 241px)}ul[data-v-6b416240]{display:flex;flex-direction:column}",""]),t.exports=r},847:function(t,e,o){"use strict";o.r(e);var r,n,l=o(205),c=o(83),d=o(15),m={data:()=>({showModalAdd:!1,showModalEdit:!1,editingTeam:{},editingteamID:"",me:{},myTeams:[],fb:d.a}),apollo:{me:{query:Object(c.a)(r||(r=Object(l.a)(["\n        query GetMe {\n          me {\n            uid\n            eaInvited\n          }\n        }\n      "]))),pollInterval:1e5},myTeams:{query:Object(c.a)(n||(n=Object(l.a)(["\n        query GetMyTeams {\n          myTeams {\n            id\n            name\n            myRole\n            ownersCount\n            members {\n              user {\n                displayName\n                email\n                uid\n              }\n              role\n            }\n          }\n        }\n      "]))),pollInterval:1e4}},beforeDestroy(){document.removeEventListener("keydown",this._keyListener)},methods:{displayModalAdd(t){this.showModalAdd=t},displayModalEdit(t){this.showModalEdit=t,t||this.resetSelectedData()},editTeam(t,e){this.editingTeam=t,this.editingteamID=e,this.displayModalEdit(!0)},resetSelectedData(){this.$data.editingTeam=void 0,this.$data.editingteamID=void 0}}},v=(o(792),o(12)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("AppSection",{ref:"teams",staticClass:"green",attrs:{icon:"history",label:t.$t("teams"),"no-legend":""}},[o("div",{staticClass:"flex flex-col"},[o("label",[t._v(t._s(t.$t("teams")))]),t._v(" "),t.fb.currentUser?o("div"):o("div",[o("label",[t._v(t._s(t.$t("login_with")))]),t._v(" "),o("p",[o("FirebaseLogin")],1)])]),t._v(" "),o("TeamsAdd",{attrs:{show:t.showModalAdd},on:{"hide-modal":function(e){return t.displayModalAdd(!1)}}}),t._v(" "),o("TeamsEdit",{attrs:{team:t.myTeams[0],show:t.showModalEdit,"editing-team":t.editingTeam,"editingteam-i-d":t.editingteamID},on:{"hide-modal":function(e){return t.displayModalEdit(!1)}}}),t._v(" "),o("div",{staticClass:"row-wrapper"},[o("div",[o("button",{staticClass:"icon",on:{click:function(e){return t.displayModalAdd(!0)}}},[o("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" "),o("span",[t._v(t._s(t.$t("new")))])])])]),t._v(" "),t.$apollo.queries.myTeams.loading?o("p",{staticClass:"info"},[t._v("\n    "+t._s(t.$t("loading"))+"\n  ")]):t._e(),t._v(" "),0===t.myTeams.length?o("p",{staticClass:"info"},[o("i",{staticClass:"material-icons"},[t._v("help_outline")]),t._v(" "+t._s(t.$t("create_new_team"))+"\n  ")]):o("div",{staticClass:"virtual-list"},[o("ul",{staticClass:"flex-col"},t._l(t.myTeams,(function(e,r){return o("li",{key:"team-"+r},[o("TeamsTeam",{attrs:{"team-i-d":e.id,team:e},on:{"edit-team":function(o){return t.editTeam(e,e.id)}}})],1)})),0)])],1)}),[],!1,null,"6b416240",null);e.default=component.exports;installComponents(component,{FirebaseLogin:o(316).default,TeamsAdd:o(753).default,TeamsEdit:o(830).default,TeamsTeam:o(754).default,AppSection:o(587).default})}}]);