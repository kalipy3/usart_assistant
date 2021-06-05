ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,c=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},c.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};o.inherits(c,r),c.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},c.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},c.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=c})),ace.define("ace/mode/scad_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=(e("../lib/lang"),e("./doc_comment_highlight_rules").DocCommentHighlightRules),c=e("./text_highlight_rules").TextHighlightRules,l=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"module|if|else|for","constant.language":"NULL"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},r.getStartRule("start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant",regex:"<[a-zA-Z0-9.]+>"},{token:"keyword",regex:"(?:use|include)"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]},this.embedRules(r,"doc-",[r.getEndRule("start")])};o.inherits(l,c),t.scadHighlightRules=l})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(line,input){return!!/^\s+$/.test(line)&&/^\s*\}/.test(input)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,c=e.findMatchingBracket({row:t,column:r});if(!c||c.row==t)return 0;var l=this.$getIndent(e.getLine(c.row));e.replace(new o(t,0,t,r-1),l)},this.$getIndent=function(line){return line.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,c=e("./fold_mode").FoldMode,l=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(l,c),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var line=e.getLine(n);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(line)?"start":o},this.getFoldWidgetRange=function(e,t,n,o){var r,line=e.getLine(n);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,n);if(r=line.match(this.foldingStartMarker)){var i=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,i);var c=e.getCommentFoldRange(n,i+r[0].length,1);return c&&!c.isMultiLine()&&(o?c=this.getSectionRange(e,n):"all"!=t&&(c=null)),c}if("markbegin"!==t&&(r=line.match(this.foldingStopMarker))){i=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,i):e.getCommentFoldRange(n,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),n=line.search(/\S/),o=t,c=line.length,l=t+=1,h=e.getLength();++t<h;){var d=(line=e.getLine(t)).search(/\S/);if(-1!==d){if(n>d)break;var m=this.getFoldWidgetRange(e,"all",t);if(m){if(m.start.row<=o)break;if(m.isMultiLine())t=m.end.row;else if(n==d)break}l=t}}return new r(o,c,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,line,t){for(var n=line.search(/\s*$/),o=e.getLength(),c=t,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,h=1;++t<o;){line=e.getLine(t);var d=l.exec(line);if(d&&(d[1]?h--:h++,!h))break}if(t>c)return new r(c,n,t,line.length)}}.call(l.prototype)})),ace.define("ace/mode/scad",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scad_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,c=e("./scad_highlight_rules").scadHighlightRules,l=e("./matching_brace_outdent").MatchingBraceOutdent,h=e("./behaviour/cstyle").CstyleBehaviour,d=e("./folding/cstyle").FoldMode,m=function(){this.HighlightRules=c,this.$outdent=new l,this.$behaviour=new h,this.foldingRules=new d};o.inherits(m,r),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,line,t){var n=this.$getIndent(line),o=this.getTokenizer().getLineTokens(line,e),r=o.tokens,c=o.state;if(r.length&&"comment"==r[r.length-1].type)return n;if("start"==e)(l=line.match(/^.*[\{\(\[]\s*$/))&&(n+=t);else if("doc-start"==e){if("start"==c)return"";var l;(l=line.match(/^\s*(\/?)\*/))&&(l[1]&&(n+=" "),n+="* ")}return n},this.checkOutdent=function(e,line,input){return this.$outdent.checkOutdent(line,input)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/scad"}.call(m.prototype),t.Mode=m})),ace.require(["ace/mode/scad"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));