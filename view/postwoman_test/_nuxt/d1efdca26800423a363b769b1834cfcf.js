ace.define("ace/mode/pascal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,l=function(){var e=this.createKeywordMapper({"keyword.control":"absolute|abstract|all|and|and_then|array|as|asm|attribute|begin|bindable|case|class|const|constructor|destructor|div|do|do|else|end|except|export|exports|external|far|file|finalization|finally|for|forward|goto|if|implementation|import|in|inherited|initialization|interface|interrupt|is|label|library|mod|module|name|near|nil|not|object|of|only|operator|or|or_else|otherwise|packed|pow|private|program|property|protected|public|published|qualified|record|repeat|resident|restricted|segment|set|shl|shr|then|to|try|type|unit|until|uses|value|var|view|virtual|while|with|xor"},"identifier",!0);this.$rules={start:[{caseInsensitive:!0,token:["variable","text","storage.type.prototype","entity.name.function.prototype"],regex:"\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?(?=(?:\\(.*?\\))?;\\s*(?:attribute|forward|external))"},{caseInsensitive:!0,token:["variable","text","storage.type.function","entity.name.function"],regex:"\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?"},{caseInsensitive:!0,token:e,regex:/\b[a-z_]+\b/},{token:"constant.numeric",regex:"\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"punctuation.definition.comment",regex:"--.*$"},{token:"punctuation.definition.comment",regex:"//.*$"},{token:"punctuation.definition.comment",regex:"\\(\\*",push:[{token:"punctuation.definition.comment",regex:"\\*\\)",next:"pop"},{defaultToken:"comment.block.one"}]},{token:"punctuation.definition.comment",regex:"\\{",push:[{token:"punctuation.definition.comment",regex:"\\}",next:"pop"},{defaultToken:"comment.block.two"}]},{token:"punctuation.definition.string.begin",regex:'"',push:[{token:"constant.character.escape",regex:"\\\\."},{token:"punctuation.definition.string.end",regex:'"',next:"pop"},{defaultToken:"string.quoted.double"}]},{token:"punctuation.definition.string.begin",regex:"'",push:[{token:"constant.character.escape.apostrophe",regex:"''"},{token:"punctuation.definition.string.end",regex:"'",next:"pop"},{defaultToken:"string.quoted.single"}]},{token:"keyword.operator",regex:"[+\\-;,/*%]|:=|="}]},this.normalizeRules()};n.inherits(l,r),t.PascalHighlightRules=l})),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,o){"use strict";var n=e("../../lib/oop"),r=e("./fold_mode").FoldMode,l=e("../../range").Range,c=t.FoldMode=function(){};n.inherits(c,r),function(){this.getFoldWidgetRange=function(e,t,o){var n=this.indentationBlock(e,o);if(n)return n;var r=/\S/,line=e.getLine(o),c=line.search(r);if(-1!=c&&"#"==line[c]){for(var d=line.length,f=e.getLength(),h=o,m=o;++o<f;){var x=(line=e.getLine(o)).search(r);if(-1!=x){if("#"!=line[x])break;m=o}}if(m>h){var k=e.getLine(m).length;return new l(h,d,m,k)}}},this.getFoldWidget=function(e,t,o){var line=e.getLine(o),n=line.search(/\S/),r=e.getLine(o+1),l=e.getLine(o-1),c=l.search(/\S/),d=r.search(/\S/);if(-1==n)return e.foldWidgets[o-1]=-1!=c&&c<d?"start":"","";if(-1==c){if(n==d&&"#"==line[n]&&"#"==r[n])return e.foldWidgets[o-1]="",e.foldWidgets[o+1]="","start"}else if(c==n&&"#"==line[n]&&"#"==l[n]&&-1==e.getLine(o-2).search(/\S/))return e.foldWidgets[o-1]="start",e.foldWidgets[o+1]="","";return e.foldWidgets[o-1]=-1!=c&&c<n?"start":"",n<d?"start":""}}.call(c.prototype)})),ace.define("ace/mode/pascal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pascal_highlight_rules","ace/mode/folding/coffee"],(function(e,t,o){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,l=e("./pascal_highlight_rules").PascalHighlightRules,c=e("./folding/coffee").FoldMode,d=function(){this.HighlightRules=l,this.foldingRules=new c,this.$behaviour=this.$defaultBehaviour};n.inherits(d,r),function(){this.lineCommentStart=["--","//"],this.blockComment=[{start:"(*",end:"*)"},{start:"{",end:"}"}],this.$id="ace/mode/pascal"}.call(d.prototype),t.Mode=d})),ace.require(["ace/mode/pascal"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));