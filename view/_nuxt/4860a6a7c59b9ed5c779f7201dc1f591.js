ace.define("ace/mode/asciidoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,l=function(){var e="[a-zA-Z¡-￿]+\\b";function t(e){return(/\w/.test(e)?"\\b":"(?:\\B|^)")+e+"[^"+e+"].*?"+e+"(?![\\w*])"}this.$rules={start:[{token:"empty",regex:/$/},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"literal",regex:/^-{4,}\s*$/,next:"literalBlock"},{token:"string",regex:/^\+{4,}\s*$/,next:"passthroughBlock"},{token:"keyword",regex:/^={4,}\s*$/},{token:"text",regex:/^\s*$/},{token:"empty",regex:"",next:"dissallowDelimitedBlock"}],dissallowDelimitedBlock:[{include:"paragraphEnd"},{token:"comment",regex:"^//.+$"},{token:"keyword",regex:"^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):"},{include:"listStart"},{token:"literal",regex:/^\s+.+$/,next:"indentedBlock"},{token:"empty",regex:"",next:"text"}],paragraphEnd:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"commentBlock"},{token:"tableBlock",regex:/^\s*[|!]=+\s*$/,next:"tableBlock"},{token:"keyword",regex:/^(?:--|''')\s*$/,next:"start"},{token:"option",regex:/^\[.*\]\s*$/,next:"start"},{token:"pageBreak",regex:/^>{3,}$/,next:"start"},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"titleUnderline",regex:/^(?:={2,}|-{2,}|~{2,}|\^{2,}|\+{2,})\s*$/,next:"start"},{token:"singleLineTitle",regex:/^={1,5}\s+\S.*$/,next:"start"},{token:"otherBlock",regex:/^(?:\*{2,}|_{2,})\s*$/,next:"start"},{token:"optionalTitle",regex:/^\.[^.\s].+$/,next:"start"}],listStart:[{token:"keyword",regex:/^\s*(?:\d+\.|[a-zA-Z]\.|[ixvmIXVM]+\)|\*{1,5}|-|\.{1,5})\s/,next:"listText"},{token:"meta.tag",regex:/^.+(?::{2,4}|;;)(?: |$)/,next:"listText"},{token:"support.function.list.callout",regex:/^(?:<\d+>|\d+>|>) /,next:"text"},{token:"keyword",regex:/^\+\s*$/,next:"start"}],text:[{token:["link","variable.language"],regex:/((?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+)(\[.*?\])/},{token:"link",regex:/(?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+/},{token:"link",regex:/\b[\w\.\/\-]+@[\w\.\/\-]+\b/},{include:"macros"},{include:"paragraphEnd"},{token:"literal",regex:/\+{3,}/,next:"smallPassthrough"},{token:"escape",regex:/\((?:C|TM|R)\)|\.{3}|->|<-|=>|<=|&#(?:\d+|x[a-fA-F\d]+);|(?: |^)--(?=\s+\S)/},{token:"escape",regex:/\\[_*'`+#]|\\{2}[_*'`+#]{2}/},{token:"keyword",regex:/\s\+$/},{token:"text",regex:e},{token:["keyword","string","keyword"],regex:/(<<[\w\d\-$]+,)(.*?)(>>|$)/},{token:"keyword",regex:/<<[\w\d\-$]+,?|>>/},{token:"constant.character",regex:/\({2,3}.*?\){2,3}/},{token:"keyword",regex:/\[\[.+?\]\]/},{token:"support",regex:/^\[{3}[\w\d =\-]+\]{3}/},{include:"quotes"},{token:"empty",regex:/^\s*$/,next:"start"}],listText:[{include:"listStart"},{include:"text"}],indentedBlock:[{token:"literal",regex:/^[\s\w].+$/,next:"indentedBlock"},{token:"literal",regex:"",next:"start"}],listingBlock:[{token:"literal",regex:/^\.{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],literalBlock:[{token:"literal",regex:/^-{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],passthroughBlock:[{token:"literal",regex:/^\+{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:e+"|\\d+"},{include:"macros"},{token:"literal",regex:"."}],smallPassthrough:[{token:"literal",regex:/[+]{3,}/,next:"dissallowDelimitedBlock"},{token:"literal",regex:/^\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:e+"|\\d+"},{include:"macros"}],commentBlock:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"doc.comment",regex:"^.*$"}],tableBlock:[{token:"tableBlock",regex:/^\s*\|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"innerTableBlock"},{token:"tableBlock",regex:/\|/},{include:"text",noEscape:!0}],innerTableBlock:[{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"tableBlock"},{token:"tableBlock",regex:/^\s*|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/!/}],macros:[{token:"macro",regex:/{[\w\-$]+}/},{token:["text","string","text","constant.character","text"],regex:/({)([\w\-$]+)(:)?(.+)?(})/},{token:["text","markup.list.macro","keyword","string"],regex:/(\w+)(footnote(?:ref)?::?)([^\s\[]+)?(\[.*?\])?/},{token:["markup.list.macro","keyword","string"],regex:/([a-zA-Z\-][\w\.\/\-]*::?)([^\s\[]+)(\[.*?\])?/},{token:["markup.list.macro","keyword"],regex:/([a-zA-Z\-][\w\.\/\-]+::?)(\[.*?\])/},{token:"keyword",regex:/^:.+?:(?= |$)/}],quotes:[{token:"string.italic",regex:/__[^_\s].*?__/},{token:"string.italic",regex:t("_")},{token:"keyword.bold",regex:/\*\*[^*\s].*?\*\*/},{token:"keyword.bold",regex:t("\\*")},{token:"literal",regex:t("\\+")},{token:"literal",regex:/\+\+[^+\s].*?\+\+/},{token:"literal",regex:/\$\$.+?\$\$/},{token:"literal",regex:t("`")},{token:"keyword",regex:t("^")},{token:"keyword",regex:t("~")},{token:"keyword",regex:/##?/},{token:"keyword",regex:/(?:\B|^)``|\b''/}]};var n={macro:"constant.character",tableBlock:"doc.comment",titleUnderline:"markup.heading",singleLineTitle:"markup.heading",pageBreak:"string",option:"string.regexp",otherBlock:"markup.list",literal:"support.function",optionalTitle:"constant.numeric",escape:"constant.language.escape",link:"markup.underline.list"};for(var o in this.$rules)for(var r=this.$rules[o],i=r.length;i--;){var l=r[i];if(l.include||"string"==typeof l){var c=[i,1].concat(this.$rules[l.include||l]);l.noEscape&&(c=c.filter((function(e){return!e.next}))),r.splice.apply(r,c)}else l.token in n&&(l.token=n[l.token])}};o.inherits(l,r),t.AsciidocHighlightRules=l})),ace.define("ace/mode/folding/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("./fold_mode").FoldMode,l=e("../../range").Range,c=t.FoldMode=function(){};o.inherits(c,r),function(){this.foldingStartMarker=/^(?:\|={10,}|[\.\/=\-~^+]{4,}\s*$|={1,5} )/,this.singleLineHeadingRe=/^={1,5}(?=\s+\S)/,this.getFoldWidget=function(e,t,n){var line=e.getLine(n);return this.foldingStartMarker.test(line)?"="==line[0]?this.singleLineHeadingRe.test(line)?"start":e.getLine(n-1).length!=e.getLine(n).length?"":"start":"dissallowDelimitedBlock"==e.bgTokenizer.getState(n)?"end":"start":""},this.getFoldWidgetRange=function(e,t,n){var line=e.getLine(n),o=line.length,r=e.getLength(),c=n,k=n;if(line.match(this.foldingStartMarker)){var d,x=["=","-","~","^","+"],h="markup.heading",m=this.singleLineHeadingRe;if($(n)==h){for(var f=B();++n<r;){if($(n)==h)if(B()<=f)break}if((k=d&&d.value.match(this.singleLineHeadingRe)?n-1:n-2)>c)for(;k>c&&(!$(k)||"["==d.value[0]);)k--;if(k>c){var w=e.getLine(k).length;return new l(c,o,k,w)}}else{if("dissallowDelimitedBlock"==e.bgTokenizer.getState(n)){for(;n-- >0&&-1!=e.bgTokenizer.getState(n).lastIndexOf("Block"););if((k=n+1)<c){w=e.getLine(n).length;return new l(k,5,c,o-5)}}else{for(;++n<r&&"dissallowDelimitedBlock"!=e.bgTokenizer.getState(n););if((k=n)>c){w=e.getLine(n).length;return new l(c,5,k,w-5)}}}}function $(t){return(d=e.getTokens(t)[0])&&d.type}function B(){var t=d.value.match(m);if(t)return t[0].length;var o=x.indexOf(d.value[0])+1;return 1==o&&e.getLine(n-1).length!=e.getLine(n).length?1/0:o}}}.call(c.prototype)})),ace.define("ace/mode/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/asciidoc_highlight_rules","ace/mode/folding/asciidoc"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,l=e("./asciidoc_highlight_rules").AsciidocHighlightRules,c=e("./folding/asciidoc").FoldMode,k=function(){this.HighlightRules=l,this.foldingRules=new c};o.inherits(k,r),function(){this.type="text",this.getNextLineIndent=function(e,line,t){if("listblock"==e){var n=/^((?:.+)?)([-+*][ ]+)/.exec(line);return n?new Array(n[1].length+1).join(" ")+n[2]:""}return this.$getIndent(line)},this.$id="ace/mode/asciidoc"}.call(k.prototype),t.Mode=k})),ace.require(["ace/mode/asciidoc"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));