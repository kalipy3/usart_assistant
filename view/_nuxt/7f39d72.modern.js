(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{849:function(e,t,n){"use strict";n.r(t);var o={data:()=>({active:localStorage.getItem("THEME_COLOR")||"green",accentColors:["blue","green","teal","indigo","purple","orange","pink","red","yellow"]}),watch:{active(e){localStorage.setItem("THEME_COLOR",e)}},methods:{setActiveColor(e){document.documentElement.setAttribute("data-accent",e),this.active=e},capitalized:e=>"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}},c=n(12),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("label",[e._v(e._s(e.$t("color"))+":\n    "+e._s(e.capitalized(e.active)))]),e._v(" "),n("div",e._l(e.accentColors,(function(t,o){return n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.capitalized(t),expression:"capitalized(color)"}],key:"color-"+o,staticClass:"\n        inline-flex\n        items-center\n        justify-center\n        p-3\n        m-2\n        transition\n        duration-150\n        ease-in-out\n        bg-transparent\n        rounded-full\n        cursor-pointer\n        hover:shadow-none\n      ",class:["text-"+t+"-400",{"bg-actColor":t===e.active}],on:{click:function(n){return e.setActiveColor(t)}}},[n("i",{staticClass:"material-icons"},[e._v("lens")])])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);