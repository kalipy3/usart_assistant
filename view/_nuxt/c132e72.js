(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{668:function(e,t,o){var r=o(9),n=o(362).values;r({target:"Object",stat:!0},{values:function(e){return n(e)}})},679:function(e,t,o){"use strict";var r=o(9),n=o(72),l=o(196),c=o(197),m=o(19),d=o(24),f=m("replace"),v=RegExp.prototype;r({target:"String",proto:!0},{replaceAll:function e(t,o){var r,m,h,_,template,y,w,C,$=n(this);if(null!=t){if((r=l(t))&&!~String(n("flags"in v?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(m=t[f]))return m.call(t,$,o);if(d&&r)return String($).replace(t,o)}if(h=String($),""===(_=String(t)))return e.call(h,/(?:)/g,o);if(template=h.split(_),"function"!=typeof o)return template.join(String(o));for(w=(y=template[0]).length,C=1;C<template.length;C++)y+=String(o(_,w,h)),w+=_.length+template[C].length,y+=template[C];return y}})},770:function(e,t,o){"use strict";o.r(t);o(47),o(66),o(28),o(67),o(68);var r=o(23),n=o(3),l=(o(56),o(101),o(668),o(38),o(65),o(77),o(679),o(93),o(17),o(35),o(29),o(360),o(33),o(155),o(30),o(18)),c=o(667),m=o(78);function d(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,n=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw n}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var v={props:{show:Boolean,collectionsType:{type:Object,default:function(){}}},data:function(){return{showJsonCode:!1,mode:"import_export",mySelectedCollectionID:void 0,collectionJson:"",fb:l.a}},subscriptions:function(){return{myCollections:m.x}},methods:{createCollectionGist:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$post("https://api.github.com/gists",{files:{"hoppscotch-collections.json":{content:e.getJSONCollection()}}},{headers:{Authorization:"token ".concat(l.a.currentUser.accessToken),Accept:"application/vnd.github.v3+json"}}).then((function(t){e.$toast.success(e.$t("gist_created"),{icon:"done"}),window.open(t.html_url)})).catch((function(t){e.$toast.error(e.$t("something_went_wrong"),{icon:"error"}),console.log(t)}));case 2:case"end":return t.stop()}}),t)})))()},readCollectionGist:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=prompt(e.$t("enter_gist_url"))){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$axios.$get("https://api.github.com/gists/".concat(o.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}}).then((function(t){var o=t.files,r=JSON.parse(Object.values(o)[0].content);Object(m.B)(r),e.fileImported()})).catch((function(t){e.failedImport(),console.log(t)}));case 5:case"end":return t.stop()}}),t)})))()},hideModal:function(){this.mode="import_export",this.mySelectedCollectionID=void 0,this.$emit("hide-modal")},openDialogChooseFileToReplaceWith:function(){this.$refs.inputChooseFileToReplaceWith.click()},openDialogChooseFileToImportFrom:function(){this.$refs.inputChooseFileToImportFrom.click()},replaceWithJSON:function(){var e=this,t=new FileReader;t.onload=function(t){var content=t.target.result,o=JSON.parse(content);if(o[0]){var n=Object.keys(o[0]),l=Object(r.a)(n,3);l[0],l[1],l[2]}else o.info&&o.info.schema.includes("v2.1.0")?o=[e.parsePostmanCollection(o)]:e.failedImport();"team-collections"===e.collectionsType.type?c.q(e.$apollo,o,e.collectionsType.selectedTeam.id).then((function(t){t?e.fileImported():e.failedImport()})).catch((function(t){console.log(t),e.failedImport()})):(Object(m.B)(o),e.fileImported())},t.readAsText(this.$refs.inputChooseFileToReplaceWith.files[0]),this.$refs.inputChooseFileToReplaceWith.value=""},importFromJSON:function(){var e=this,t=new FileReader;t.onload=function(t){var content=t.target.result,o=JSON.parse(content);if(o[0]){var n=Object.keys(o[0]),l=Object(r.a)(n,3);l[0],l[1],l[2]}else{if(!o.info||!o.info.schema.includes("v2.1.0"))return void e.failedImport();o=JSON.parse(content.replaceAll(/{{([a-z]+)}}/gi,"<<$1>>")),o=[e.parsePostmanCollection(o)]}"team-collections"===e.collectionsType.type?c.k(e.$apollo,o,e.collectionsType.selectedTeam.id).then((function(t){t?(e.$emit("update-team-collections"),e.fileImported()):e.failedImport()})).catch((function(t){console.log(t),e.failedImport()})):(Object(m.f)(o),e.fileImported())},t.readAsText(this.$refs.inputChooseFileToImportFrom.files[0]),this.$refs.inputChooseFileToImportFrom.value=""},importFromMyCollections:function(){var e=this;c.l(this.$apollo,this.mySelectedCollectionID,this.collectionsType.selectedTeam.id).then((function(t){t?(e.fileImported(),e.$emit("update-team-collections")):e.failedImport()})).catch((function(t){console.log(t),e.failedImport()}))},getJSONCollection:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("my-collections"!==e.collectionsType.type){t.next=4;break}e.collectionJson=JSON.stringify(e.myCollections,null,2),t.next=7;break;case 4:return t.next=6,c.h(e.$apollo,e.collectionsType.selectedTeam.id);case 6:e.collectionJson=t.sent;case 7:return t.abrupt("return",e.collectionJson);case 8:case"end":return t.stop()}}),t)})))()},exportJSON:function(){var text=this.collectionJson;text=text.replace(/\n/g,"\r\n");var e=new Blob([text],{type:"text/json"}),t=document.createElement("a");t.download="hoppscotch-collection.json",t.href=window.URL.createObjectURL(e),t.target="_blank",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),this.$toast.success(this.$t("download_started"),{icon:"done"})},fileImported:function(){this.$toast.info(this.$t("file_imported"),{icon:"folder_shared"})},failedImport:function(){this.$toast.error(this.$t("import_failed"),{icon:"error"})},parsePostmanCollection:function(e){var t=e.info,o=e.name,r=e.item,n={name:"",folders:[],requests:[]};if(n.name=t?t.name:o,r&&r.length>0){var l,c=d(r);try{for(c.s();!(l=c.n()).done;){var m=l.value;m.request?Object.prototype.hasOwnProperty.call(n,"folders")?(n.name=t?t.name:o,n.requests.push(this.parsePostmanRequest(m))):(n.name=o||"",n.requests.push(this.parsePostmanRequest(m))):this.hasFolder(m)?n.folders.push(this.parsePostmanCollection(m)):n.requests.push(this.parsePostmanRequest(m))}}catch(e){c.e(e)}finally{c.f()}}return n},parsePostmanRequest:function(e){var t=e.name,o=e.request,r={url:"",path:"",method:"",auth:"",httpUser:"",httpPassword:"",passwordFieldType:"password",bearerToken:"",headers:[],params:[],bodyParams:[],rawParams:"",rawInput:!1,contentType:"",requestType:"",name:""};if(r.name=t,o.url){var n=o.url.raw.match(/^(.+:\/\/[^/]+|{[^/]+})(\/[^?]+|).*$/);n&&(r.url=n[1],r.path=n[2]?n[2]:"")}r.method=o.method;var l=o.auth?o.auth:"",c=l?l.type:"";"basic"===c?(r.auth="Basic Auth",r.httpUser="username"===l.basic[0].key?l.basic[0].value:l.basic[1].value,r.httpPassword="password"===l.basic[0].key?l.basic[0].value:l.basic[1].value):"oauth2"===c?(r.auth="OAuth 2.0",r.bearerToken="accessToken"===l.oauth2[0].key?l.oauth2[0].value:l.oauth2[1].value):"bearer"===c&&(r.auth="Bearer Token",r.bearerToken=l.bearer[0].value);var m=o.header;if(m){r.headers=m;var f,v=d(r.headers);try{for(v.s();!(f=v.n()).done;){var header=f.value;delete header.name,delete header.type}}catch(e){v.e(e)}finally{v.f()}}if(o.url){var h=o.url.query;if(h){r.params=h;var _,y=d(r.params);try{for(y.s();!(_=y.n()).done;){delete _.value.disabled}}catch(e){y.e(e)}finally{y.f()}}}if(o.body)if("urlencoded"===o.body.mode){var w=o.body.urlencoded;r.bodyParams=w||[];var C,$=d(r.bodyParams);try{for($.s();!(C=$.n()).done;){delete C.value.type}}catch(e){$.e(e)}finally{$.f()}}else"raw"===o.body.mode&&(r.rawInput=!0,r.rawParams=o.body.raw);return r},hasFolder:function(e){return Object.prototype.hasOwnProperty.call(e,"item")}}},h=o(16),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("SmartModal",{on:{close:e.hideModal}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"row-wrapper"},[o("h3",{staticClass:"title"},[e._v(e._s(e.$t("import_export"))+" "+e._s(e.$t("collections")))]),e._v(" "),o("div",["import_export"!=e.mode?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Back",expression:"'Back'",modifiers:{left:!0}}],staticClass:"tooltip-target icon",on:{click:function(t){e.mode="import_export"}}},[o("i",{staticClass:"material-icons"},[e._v("arrow_back")])]):e._e(),e._v(" "),"import_export"==e.mode&&"my-collections"==e.collectionsType.type?o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.$t("more"),expression:"$t('more')",modifiers:{left:!0}}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:e.readCollectionGist}},[o("i",{staticClass:"material-icons"},[e._v("assignment_returned")]),e._v(" "),o("span",[e._v(e._s(e.$t("import_from_gist")))])])]),e._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:{content:e.fb.currentUser?"github.com"!==e.fb.currentUser.provider?e.$t("login_with_github_to")+e.$t("create_secret_gist"):null:e.$t("login_with_github_to")+e.$t("create_secret_gist")},expression:"{\n                content: !fb.currentUser\n                  ? $t('login_with_github_to') + $t('create_secret_gist')\n                  : fb.currentUser.provider !== 'github.com'\n                  ? $t('login_with_github_to') + $t('create_secret_gist')\n                  : null,\n              }",modifiers:{bottom:!0}}]},[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{disabled:!e.fb.currentUser||"github.com"!==e.fb.currentUser.provider},on:{click:e.createCollectionGist}},[o("i",{staticClass:"material-icons"},[e._v("assignment_turned_in")]),e._v(" "),o("span",[e._v(e._s(e.$t("create_secret_gist")))])])])])],2):e._e(),e._v(" "),o("button",{staticClass:"icon",on:{click:e.hideModal}},[o("i",{staticClass:"material-icons"},[e._v("close")])])],1)])]),e._v(" "),o("div",{staticClass:"flex flex-col",attrs:{slot:"body"},slot:"body"},["import_export"==e.mode?o("div",{staticClass:"flex flex-col items-start p-2"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("replace_current"),expression:"$t('replace_current')"}],staticClass:"icon",on:{click:e.openDialogChooseFileToReplaceWith}},[o("i",{staticClass:"material-icons"},[e._v("create_new_folder")]),e._v(" "),o("span",[e._v(e._s(e.$t("replace_json")))]),e._v(" "),o("input",{ref:"inputChooseFileToReplaceWith",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:e.replaceWithJSON}})]),e._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("preserve_current"),expression:"$t('preserve_current')"}],staticClass:"icon",on:{click:e.openDialogChooseFileToImportFrom}},[o("i",{staticClass:"material-icons"},[e._v("folder_special")]),e._v(" "),o("span",[e._v(e._s(e.$t("import_json")))]),e._v(" "),o("input",{ref:"inputChooseFileToImportFrom",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:e.importFromJSON}})]),e._v(" "),"team-collections"==e.collectionsType.type?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("replace_current"),expression:"$t('replace_current')"}],staticClass:"icon",on:{click:function(t){e.mode="import_from_my_collections"}}},[o("i",{staticClass:"material-icons"},[e._v("folder_special")]),e._v(" "),o("span",[e._v(e._s("Import from My Collections"))])]):e._e(),e._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("show_code"),expression:"$t('show_code')"}],staticClass:"icon",on:{click:function(){e.mode="export_as_json",e.getJSONCollection()}}},[o("i",{staticClass:"material-icons"},[e._v("folder_special")]),e._v(" "),o("span",[e._v(e._s("Export As JSON"))])])]):e._e(),e._v(" "),"import_from_my_collections"==e.mode?o("div",[o("span",{staticClass:"select-wrapper"},[o("select",{attrs:{type:"text",autofocus:""},on:{change:function(t){e.mySelectedCollectionID=t.target.value}}},[o("option",{key:void 0,attrs:{hidden:"",disabled:"",selected:""},domProps:{value:void 0}},[e._v("\n            Select Collection\n          ")]),e._v(" "),e._l(e.myCollections,(function(t,r){return o("option",{key:r,domProps:{value:r}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))],2)]),e._v(" "),o("button",{staticClass:"m-2 icon primary",attrs:{disabled:null==e.mySelectedCollectionID},on:{click:e.importFromMyCollections}},[e._v("\n        "+e._s(e.$t("import"))+"\n      ")])]):e._e(),e._v(" "),"export_as_json"==e.mode?o("div",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.collectionJson,expression:"collectionJson"}],attrs:{rows:"8",readonly:""},domProps:{value:e.collectionJson},on:{input:function(t){t.target.composing||(e.collectionJson=t.target.value)}}}),e._v(" "),o("div",{staticClass:"row-wrapper"},[o("span",{staticClass:"m-2"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("download_file"),expression:"$t('download_file')"}],staticClass:"icon primary",on:{click:e.exportJSON}},[e._v("\n            "+e._s(e.$t("export"))+"\n          ")])])])]):e._e()])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SmartModal:o(192).default})}}]);