ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,r){"use strict";var n=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:["keyword","lparen","variable.parameter","rparen","lparen","storage.type","rparen"],regex:"(\\\\(?:documentclass|usepackage|input))(?:(\\[)([^\\]]*)(\\]))?({)([^}]*)(})"},{token:["keyword","lparen","variable.parameter","rparen"],regex:"(\\\\(?:label|v?ref|cite(?:[^{]*)))(?:({)([^}]*)(}))?"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(verbatim)(})",next:"verbatim"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(lstlisting)(})",next:"lstlisting"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\(?:begin|end))({)([\\w*]*)(})"},{token:"storage.type",regex:/\\verb\b\*?/,next:[{token:["keyword.operator","string","keyword.operator"],regex:"(.)(.*?)(\\1|$)|",next:"start"}]},{token:"storage.type",regex:"\\\\[a-zA-Z]+"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"constant.character.escape",regex:"\\\\[^a-zA-Z]?"},{token:"string",regex:"\\${1,2}",next:"equation"}],equation:[{token:"comment",regex:"%.*$"},{token:"string",regex:"\\${1,2}",next:"start"},{token:"constant.character.escape",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"error",regex:"^\\s*$",next:"start"},{defaultToken:"string"}],verbatim:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(verbatim)(})",next:"start"},{defaultToken:"text"}],lstlisting:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(lstlisting)(})",next:"start"},{defaultToken:"text"}]},this.normalizeRules()};n.inherits(l,o),t.LatexHighlightRules=l})),ace.define("ace/mode/folding/latex",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],(function(e,t,r){"use strict";var n=e("../../lib/oop"),o=e("./fold_mode").FoldMode,l=e("../../range").Range,c=e("../../token_iterator").TokenIterator,d={"\\subparagraph":1,"\\paragraph":2,"\\subsubsubsection":3,"\\subsubsection":4,"\\subsection":5,"\\section":6,"\\chapter":7,"\\part":8,"\\begin":9,"\\end":10},h=t.FoldMode=function(){};n.inherits(h,o),function(){this.foldingStartMarker=/^\s*\\(begin)|\s*\\(part|chapter|(?:sub)*(?:section|paragraph))\b|{\s*$/,this.foldingStopMarker=/^\s*\\(end)\b|^\s*}/,this.getFoldWidgetRange=function(e,t,r){var n,line=e.doc.getLine(r);return(n=this.foldingStartMarker.exec(line))?n[1]?this.latexBlock(e,r,n[0].length-1):n[2]?this.latexSection(e,r,n[0].length-1):this.openingBracketBlock(e,"{",r,n.index):(n=this.foldingStopMarker.exec(line))?n[1]?this.latexBlock(e,r,n[0].length-1):this.closingBracketBlock(e,"}",r,n.index+n[0].length):void 0},this.latexBlock=function(e,t,r,n){var o={"\\begin":1,"\\end":-1},d=new c(e,t,r),h=d.getCurrentToken();if(h&&("storage.type"==h.type||"constant.character.escape"==h.type)){var x=o[h.value],k=function(){var e="lparen"==d.stepForward().type?d.stepForward().value:"";return-1===x&&(d.stepBackward(),e&&d.stepBackward()),e},f=[k()],m=-1===x?d.getCurrentTokenColumn():e.getLine(t).length,v=t;for(d.step=-1===x?d.stepBackward:d.stepForward;h=d.step();)if(h&&("storage.type"==h.type||"constant.character.escape"==h.type)){var y=o[h.value];if(y){var w=k();if(y===x)f.unshift(w);else if(f.shift()!==w||!f.length)break}}if(!f.length){if(1==x&&(d.stepBackward(),d.stepBackward()),n)return d.getCurrentTokenRange();t=d.getCurrentTokenRow();return-1===x?new l(t,e.getLine(t).length,v,m):new l(v,m,t,d.getCurrentTokenColumn())}}},this.latexSection=function(e,t,r){var n=new c(e,t,r),o=n.getCurrentToken();if(o&&"storage.type"==o.type){for(var h=d[o.value]||0,x=0,k=t;o=n.stepForward();)if("storage.type"===o.type){var f=d[o.value]||0;if(f>=9){if(x||(k=n.getCurrentTokenRow()-1),(x+=9==f?1:-1)<0)break}else if(f>=h)break}for(x||(k=n.getCurrentTokenRow()-1);k>t&&!/\S/.test(e.getLine(k));)k--;return new l(t,e.getLine(t).length,k,e.getLine(k).length)}}}.call(h.prototype)})),ace.define("ace/mode/latex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/latex_highlight_rules","ace/mode/behaviour/cstyle","ace/mode/folding/latex"],(function(e,t,r){"use strict";var n=e("../lib/oop"),o=e("./text").Mode,l=e("./latex_highlight_rules").LatexHighlightRules,c=e("./behaviour/cstyle").CstyleBehaviour,d=e("./folding/latex").FoldMode,h=function(){this.HighlightRules=l,this.foldingRules=new d,this.$behaviour=new c({braces:!0})};n.inherits(h,o),function(){this.type="text",this.lineCommentStart="%",this.$id="ace/mode/latex",this.getMatching=function(e,t,r){null==t&&(t=e.selection.lead),"object"==typeof t&&(r=t.column,t=t.row);var n=e.getTokenAt(t,r);if(n)return"\\begin"==n.value||"\\end"==n.value?this.foldingRules.latexBlock(e,t,r,!0):void 0}}.call(h.prototype),t.Mode=h})),ace.require(["ace/mode/latex"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));