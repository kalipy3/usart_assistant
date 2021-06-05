(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{687:function(e,t,n){var r=n(367);e.exports=function(e){return r(e,5)}},896:function(e,t,n){"use strict";n.r(t);n(33),n(158),n(56),n(93),n(27);var r,o,m,c,l=n(687),d=n.n(l),v=n(667),h=n(45),f=n(252),$=n(3),_=n(114),y=n(115),M=(n(57),n(34),n(128),n(30),n(358)),I=n(113),w=n(116),D=function(){function e(t){Object(_.a)(this,e),this.teamID=t,this.members$=new M.a([]),this.teamMemberAdded$=null,this.teamMemberUpdated$=null,this.teamMemberRemoved$=null,this.teamID&&this.initialize()}var t,n;return Object(y.a)(e,[{key:"changeTeamID",value:function(e){this.members$.next([]),this.teamID=e,this.teamID&&this.initialize()}},{key:"unsubscribeSubscriptions",value:function(){var e,t,n;null===(e=this.teamMemberAdded$)||void 0===e||e.unsubscribe(),null===(t=this.teamMemberRemoved$)||void 0===t||t.unsubscribe(),null===(n=this.teamMemberUpdated$)||void 0===n||n.unsubscribe()}},{key:"initialize",value:(n=Object($.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadTeamMembers();case 2:this.registerSubscriptions();case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"loadTeamMembers",value:(t=Object($.a)(regeneratorRuntime.mark((function e(){var t,cursor,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],cursor=null;case 2:return e.next=5,w.a.query({query:Object(I.a)(r||(r=Object(f.a)(["\n          query GetTeamMembers($teamID: String!, $cursor: String) {\n            team(teamID: $teamID) {\n              members(cursor: $cursor) {\n                membershipID\n                user {\n                  uid\n                  email\n                }\n                role\n              }\n            }\n          }\n        "]))),variables:{teamID:this.teamID,cursor:cursor}});case 5:if(n=e.sent,t.push.apply(t,Object(h.a)(n.data.team.members)),0!==n.data.team.members.length){e.next=12;break}return e.abrupt("break",15);case 12:cursor=n.data.team.members[n.data.team.members.length-1].membershipID;case 13:e.next=2;break;case 15:this.members$.next(t);case 16:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"registerSubscriptions",value:function(){var e=this;this.teamMemberAdded$=w.a.subscribe({query:Object(I.a)(o||(o=Object(f.a)(["\n          subscription TeamMemberAdded($teamID: String!) {\n            teamMemberAdded(teamID: $teamID) {\n              user {\n                uid\n                email\n              }\n              role\n            }\n          }\n        "]))),variables:{teamID:this.teamID}}).subscribe((function(t){var data=t.data;e.members$.next([].concat(Object(h.a)(e.members$.value),[data.teamMemberAdded]))})),this.teamMemberRemoved$=w.a.subscribe({query:Object(I.a)(m||(m=Object(f.a)(["\n          subscription TeamMemberRemoved($teamID: String!) {\n            teamMemberRemoved(teamID: $teamID)\n          }\n        "]))),variables:{teamID:this.teamID}}).subscribe((function(t){var data=t.data;e.members$.next(e.members$.value.filter((function(e){return e.user.uid!==data.teamMemberRemoved})))})),this.teamMemberUpdated$=w.a.subscribe({query:Object(I.a)(c||(c=Object(f.a)(["\n          subscription TeamMemberUpdated($teamID: String!) {\n            teamMemberUpdated(teamID: $teamID) {\n              user {\n                uid\n                email\n              }\n              role\n            }\n          }\n        "]))),variables:{teamID:this.teamID}}).subscribe((function(t){var data=t.data,n=d()(e.members$.value).find((function(e){return e.user.uid===data.teamMemberUpdated.user.uid}));n&&Object.assign(n,data.teamMemberUpdated)}))}}]),e}(),k={props:{show:Boolean,editingTeam:{type:Object,default:function(){}},editingteamID:{type:String,default:null}},data:function(){return{rename:null,doneButton:'<i class="material-icons">done</i>',members:[],newMembers:[],membersAdapter:new D(null)}},computed:{editingTeamCopy:function(){return this.editingTeam},name:{get:function(){return this.editingTeam.name},set:function(e){this.rename=e}}},watch:{editingteamID:function(e){this.membersAdapter.changeTeamID(e)}},mounted:function(){var e=this;this.membersAdapter.members$.subscribe((function(t){e.members=d()(t)}))},methods:{updateRole:function(e,t){this.members[e].role=t},addTeamMember:function(){this.newMembers.push({key:"",value:""})},removeExistingTeamMember:function(e){var t=this;v.n(this.$apollo,e,this.editingteamID).then((function(){t.$toast.success(t.$t("user_removed"),{icon:"done"}),t.hideModal()})).catch((function(e){t.$toast.error(t.$t("error_occurred"),{icon:"done"}),console.error(e)}))},removeTeamMember:function(e){this.newMembers.splice(e,1)},validateEmail:function(e){return!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)},saveTeam:function(){var e=this;if(null!==this.$data.rename&&this.$data.rename.replace(/\s/g,"").length<6)this.$toast.error(this.$t("string_length_insufficient"),{icon:"error"});else{this.$data.newMembers.forEach((function(element){e.validateEmail(element.key)||e.$toast.error(e.$t("invalid_emailID_format"),{icon:"error"})})),this.$data.newMembers.forEach((function(element){v.a(e.$apollo,element.value,element.key,e.editingteamID).then((function(){e.$toast.success(e.$t("team_saved"),{icon:"done"}),e.hideModal()})).catch((function(t){e.$toast.error(e.$t("error_occurred"),{icon:"done"}),console.error(t)}))}));var t=!0;if(this.members.forEach((function(element){v.u(e.$apollo,element.user.uid,element.role,e.editingteamID).then((function(){t&&(e.$toast.success(e.$t("role_updated"),{icon:"done"}),t=!1),e.hideModal()})).catch((function(n){t&&(e.$toast.error(e.$t("error_occurred"),{icon:"done"}),t=!1),console.error(n)}))})),null!==this.$data.rename){var n=this.name===this.$data.rename?this.name:this.$data.rename;if(!/\S/.test(n))return this.$toast.error(this.$t("team_name_empty"),{icon:"error"});this.name!==this.rename&&v.p(this.$apollo,n,this.editingteamID).then((function(){e.$toast.success(e.$t("team_saved"),{icon:"done"}),e.hideModal()})).catch((function(t){e.$toast.error(e.$t("error_occurred"),{icon:"done"}),console.error(t)}))}this.hideModal(),this.newMembers=[]}},hideModal:function(){this.rename=null,this.$emit("hide-modal")}}},C=n(16),component=Object(C.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{on:{close:e.hideModal}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("ul",[n("li",[n("div",{staticClass:"row-wrapper"},[n("h3",{staticClass:"title"},[e._v(e._s(e.$t("edit_team")))]),e._v(" "),n("div",[n("button",{staticClass:"icon",on:{click:e.hideModal}},[n("i",{staticClass:"material-icons"},[e._v("close")])])])])])])]),e._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:e.editingTeam.name},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveTeam(t)},input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),n("ul",[n("li",[n("div",{staticClass:"row-wrapper"},[n("label",{attrs:{for:"memberList"}},[e._v(e._s(e.$t("team_member_list")))]),e._v(" "),n("div")])])]),e._v(" "),e._l(e.members,(function(t,r){return n("ul",{key:"new-"+r,staticClass:"\n        border-b border-dashed\n        divide-y\n        md:divide-x\n        border-brdColor\n        divide-dashed divide-brdColor\n        md:divide-y-0\n      ",class:{"border-t":0==r}},[n("li",[n("input",{attrs:{placeholder:e.$t("email"),name:"param"+r,readonly:""},domProps:{value:t.user.email}})]),e._v(" "),n("li",[n("span",{staticClass:"select-wrapper"},[n("v-popover",[n("input",{attrs:{placeholder:e.$t("permissions"),name:"value"+r,readonly:""},domProps:{value:"string"==typeof t.role?t.role:JSON.stringify(t.role)}}),e._v(" "),n("template",{slot:"popover"},[n("div",[n("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.updateRole(r,"OWNER")}}},[e._v("\n                  OWNER\n                ")])]),e._v(" "),n("div",[n("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.updateRole(r,"EDITOR")}}},[e._v("\n                  EDITOR\n                ")])]),e._v(" "),n("div",[n("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.updateRole(r,"VIEWER")}}},[e._v("\n                  VIEWER\n                ")])])])],2)],1)]),e._v(" "),n("div",[n("li",[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:e.$t("delete"),expression:"$t('delete')",modifiers:{bottom:!0}}],staticClass:"icon",attrs:{id:"member"},on:{click:function(n){return e.removeExistingTeamMember(t.user.uid)}}},[n("i",{staticClass:"material-icons"},[e._v("delete")])])])])])})),e._v(" "),e._l(e.newMembers,(function(t,r){return n("ul",{key:r,staticClass:"\n        border-b border-dashed\n        divide-y\n        md:divide-x\n        border-brdColor\n        divide-dashed divide-brdColor\n        md:divide-y-0\n      "},[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"member.key"}],attrs:{placeholder:e.$t("email"),name:"param"+r,autofocus:""},domProps:{value:t.key},on:{input:function(n){n.target.composing||e.$set(t,"key",n.target.value)}}})]),e._v(" "),n("li",[n("span",{staticClass:"select-wrapper"},[n("v-popover",[n("input",{attrs:{placeholder:e.$t("permissions"),name:"value"+r,readonly:""},domProps:{value:"string"==typeof t.value?t.value:JSON.stringify(t.value)}}),e._v(" "),n("template",{slot:"popover"},[n("div",[n("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){t.value="OWNER"}}},[e._v("\n                  OWNER\n                ")])]),e._v(" "),n("div",[n("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){t.value="EDITOR"}}},[e._v("\n                  EDITOR\n                ")])]),e._v(" "),n("div",[n("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){t.value="VIEWER"}}},[e._v("\n                  VIEWER\n                ")])])])],2)],1)]),e._v(" "),n("div",[n("li",[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:e.$t("delete"),expression:"$t('delete')",modifiers:{bottom:!0}}],staticClass:"icon",attrs:{id:"member"},on:{click:function(t){return e.removeTeamMember(r)}}},[n("i",{staticClass:"material-icons"},[e._v("delete")])])])])])})),e._v(" "),n("ul",[n("li",[n("button",{staticClass:"icon",on:{click:e.addTeamMember}},[n("i",{staticClass:"material-icons"},[e._v("add")]),e._v(" "),n("span",[e._v(e._s(e.$t("add_new")))])])])])],2),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"row-wrapper"},[n("span"),e._v(" "),n("span",[n("button",{staticClass:"icon",on:{click:e.hideModal}},[e._v("\n          "+e._s(e.$t("cancel"))+"\n        ")]),e._v(" "),n("button",{staticClass:"icon primary",on:{click:e.saveTeam}},[e._v("\n          "+e._s(e.$t("save"))+"\n        ")])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartModal:n(192).default})}}]);