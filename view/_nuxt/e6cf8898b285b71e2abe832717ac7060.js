ace.define("ace/mode/toml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,l=function(){var e=this.createKeywordMapper({"constant.language.boolean":"true|false"},"identifier");this.$rules={start:[{token:"comment.toml",regex:/#.*$/},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:["variable.keygroup.toml"],regex:"(?:^\\s*)(\\[\\[([^\\]]+)\\]\\])"},{token:["variable.keygroup.toml"],regex:"(?:^\\s*)(\\[([^\\]]+)\\])"},{token:e,regex:"[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b"},{token:"support.date.toml",regex:"\\d{4}-\\d{2}-\\d{2}(T)\\d{2}:\\d{2}:\\d{2}(Z)"},{token:"constant.numeric.toml",regex:"-?\\d+(\\.?\\d+)?"}],qqstring:[{token:"string",regex:"\\\\$",next:"qqstring"},{token:"constant.language.escape",regex:'\\\\[0tnr"\\\\]'},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}]}};n.inherits(l,r),t.TomlHighlightRules=l})),ace.define("ace/mode/folding/ini",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,o){"use strict";var n=e("../../lib/oop"),r=e("../../range").Range,l=e("./fold_mode").FoldMode,d=t.FoldMode=function(){};n.inherits(d,l),function(){this.foldingStartMarker=/^\s*\[([^\])]*)]\s*(?:$|[;#])/,this.getFoldWidgetRange=function(e,t,o){var n=this.foldingStartMarker,line=e.getLine(o),l=line.match(n);if(l){for(var d=l[1]+".",c=line.length,h=e.getLength(),m=o,f=o;++o<h;)if(line=e.getLine(o),!/^\s*$/.test(line)){if((l=line.match(n))&&0!==l[1].lastIndexOf(d,0))break;f=o}if(f>m){var x=e.getLine(f).length;return new r(m,c,f,x)}}}}.call(d.prototype)})),ace.define("ace/mode/toml",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/toml_highlight_rules","ace/mode/folding/ini"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,l=e("./toml_highlight_rules").TomlHighlightRules,d=e("./folding/ini").FoldMode,c=function(){this.HighlightRules=l,this.foldingRules=new d,this.$behaviour=this.$defaultBehaviour};n.inherits(c,r),function(){this.lineCommentStart="#",this.$id="ace/mode/toml"}.call(c.prototype),t.Mode=c})),ace.require(["ace/mode/toml"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));