ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,c=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},c.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};r.inherits(c,o),c.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},c.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},c.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=c})),ace.define("ace/mode/csharp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,c=e("./text_highlight_rules").TextHighlightRules,l=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"abstract|async|await|event|new|struct|as|explicit|null|switch|base|extern|object|this|bool|false|operator|throw|break|finally|out|true|byte|fixed|override|try|case|float|params|typeof|catch|for|private|uint|char|foreach|protected|ulong|checked|goto|public|unchecked|class|if|readonly|unsafe|const|implicit|ref|ushort|continue|in|return|using|decimal|int|sbyte|virtual|default|interface|sealed|volatile|delegate|internal|partial|short|void|do|is|sizeof|while|double|lock|stackalloc|else|long|static|enum|namespace|string|var|dynamic","constant.language":"null|true|false"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:/'(?:.|\\(:?u[\da-fA-F]+|x[\da-fA-F]+|[tbrf'"n]))?'/},{token:"string",start:'"',end:'"|$',next:[{token:"constant.language.escape",regex:/\\(:?u[\da-fA-F]+|x[\da-fA-F]+|[tbrf'"n])/},{token:"invalid",regex:/\\./}]},{token:"string",start:'@"',end:'"',next:[{token:"constant.language.escape",regex:'""'}]},{token:"string",start:/\$"/,end:'"|$',next:[{token:"constant.language.escape",regex:/\\(:?$)|{{/},{token:"constant.language.escape",regex:/\\(:?u[\da-fA-F]+|x[\da-fA-F]+|[tbrf'"n])/},{token:"invalid",regex:/\\./}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"keyword",regex:"^\\s*#(if|else|elif|endif|define|undef|warning|error|line|region|endregion|pragma)"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.embedRules(o,"doc-",[o.getEndRule("start")]),this.normalizeRules()};r.inherits(l,c),t.CSharpHighlightRules=l})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var r=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(line,input){return!!/^\s+$/.test(line)&&/^\s*\}/.test(input)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,c=e.findMatchingBracket({row:t,column:o});if(!c||c.row==t)return 0;var l=this.$getIndent(e.getLine(c.row));e.replace(new r(t,0,t,o-1),l)},this.$getIndent=function(line){return line.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("../../range").Range,c=e("./fold_mode").FoldMode,l=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(l,c),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var line=e.getLine(n);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(line)?"start":r},this.getFoldWidgetRange=function(e,t,n,r){var o,line=e.getLine(n);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,n);if(o=line.match(this.foldingStartMarker)){var i=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,i);var c=e.getCommentFoldRange(n,i+o[0].length,1);return c&&!c.isMultiLine()&&(r?c=this.getSectionRange(e,n):"all"!=t&&(c=null)),c}if("markbegin"!==t&&(o=line.match(this.foldingStopMarker))){i=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,i):e.getCommentFoldRange(n,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),n=line.search(/\S/),r=t,c=line.length,l=t+=1,h=e.getLength();++t<h;){var d=(line=e.getLine(t)).search(/\S/);if(-1!==d){if(n>d)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=r)break;if(f.isMultiLine())t=f.end.row;else if(n==d)break}l=t}}return new o(r,c,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,line,t){for(var n=line.search(/\s*$/),r=e.getLength(),c=t,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,h=1;++t<r;){line=e.getLine(t);var d=l.exec(line);if(d&&(d[1]?h--:h++,!h))break}if(t>c)return new o(c,n,t,line.length)}}.call(l.prototype)})),ace.define("ace/mode/folding/csharp",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("../../range").Range,c=e("./cstyle").FoldMode,l=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(l,c),function(){this.usingRe=/^\s*using \S/,this.getFoldWidgetRangeBase=this.getFoldWidgetRange,this.getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=this.getFoldWidgetBase(e,t,n);if(!r){var line=e.getLine(n);if(/^\s*#region\b/.test(line))return"start";var o=this.usingRe;if(o.test(line)){var c=e.getLine(n-1),l=e.getLine(n+1);if(!o.test(c)&&o.test(l))return"start"}}return r},this.getFoldWidgetRange=function(e,t,n){var r=this.getFoldWidgetRangeBase(e,t,n);if(r)return r;var line=e.getLine(n);return this.usingRe.test(line)?this.getUsingStatementBlock(e,line,n):/^\s*#region\b/.test(line)?this.getRegionBlock(e,line,n):void 0},this.getUsingStatementBlock=function(e,line,t){for(var n=line.match(this.usingRe)[0].length-1,r=e.getLength(),c=t,l=t;++t<r;)if(line=e.getLine(t),!/^\s*$/.test(line)){if(!this.usingRe.test(line))break;l=t}if(l>c){var h=e.getLine(l).length;return new o(c,n,l,h)}},this.getRegionBlock=function(e,line,t){for(var n=line.search(/\s*$/),r=e.getLength(),c=t,l=/^\s*#(end)?region\b/,h=1;++t<r;){line=e.getLine(t);var d=l.exec(line);if(d&&(d[1]?h--:h++,!h))break}if(t>c)return new o(c,n,t,line.length)}}.call(l.prototype)})),ace.define("ace/mode/csharp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/csharp_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/csharp"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text").Mode,c=e("./csharp_highlight_rules").CSharpHighlightRules,l=e("./matching_brace_outdent").MatchingBraceOutdent,h=e("./behaviour/cstyle").CstyleBehaviour,d=e("./folding/csharp").FoldMode,f=function(){this.HighlightRules=c,this.$outdent=new l,this.$behaviour=new h,this.foldingRules=new d};r.inherits(f,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,line,t){var n=this.$getIndent(line),r=this.getTokenizer().getLineTokens(line,e).tokens;if(r.length&&"comment"==r[r.length-1].type)return n;"start"==e&&(line.match(/^.*[\{\(\[]\s*$/)&&(n+=t));return n},this.checkOutdent=function(e,line,input){return this.$outdent.checkOutdent(line,input)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){return null},this.$id="ace/mode/csharp"}.call(f.prototype),t.Mode=f})),ace.require(["ace/mode/csharp"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));