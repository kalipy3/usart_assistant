ace.define("ace/mode/jssm_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,m=function(){this.$rules={start:[{token:"punctuation.definition.comment.mn",regex:/\/\*/,push:[{token:"punctuation.definition.comment.mn",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.jssm"}],comment:"block comment"},{token:"comment.line.jssm",regex:/\/\//,push:[{token:"comment.line.jssm",regex:/$/,next:"pop"},{defaultToken:"comment.line.jssm"}],comment:"block comment"},{token:"entity.name.function",regex:/\${/,push:[{token:"entity.name.function",regex:/}/,next:"pop"},{defaultToken:"keyword.other"}],comment:"js outcalls"},{token:"constant.numeric",regex:/[0-9]*\.[0-9]*\.[0-9]*/,comment:"semver"},{token:"constant.language.jssmLanguage",regex:/graph_layout\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/machine_name\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/machine_version\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/jssm_version\s*:/,comment:"jssm language tokens"},{token:"keyword.control.transition.jssmArrow.legal_legal",regex:/<->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_none",regex:/<-/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_legal",regex:/->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_main",regex:/<=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_main",regex:/=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_none",regex:/<=/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_forced",regex:/<~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_forced",regex:/~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_none",regex:/<~/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_main",regex:/<-=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_legal",regex:/<=->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_forced",regex:/<-~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_legal",regex:/<~->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_forced",regex:/<=~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_main",regex:/<~=>/,comment:"transitions"},{token:"constant.numeric.jssmProbability",regex:/[0-9]+%/,comment:"edge probability annotation"},{token:"constant.character.jssmAction",regex:/\'[^']*\'/,comment:"action annotation"},{token:"entity.name.tag.jssmLabel.doublequoted",regex:/\"[^"]*\"/,comment:"jssm label annotation"},{token:"entity.name.tag.jssmLabel.atom",regex:/[a-zA-Z0-9_.+&()#@!?,]/,comment:"jssm label annotation"}]},this.normalizeRules()};m.metaData={fileTypes:["jssm","jssm_state"],name:"JSSM",scopeName:"source.jssm"},o.inherits(m,r),t.JSSMHighlightRules=m})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,m=e("./fold_mode").FoldMode,l=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(l,m),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var line=e.getLine(n);if(this.singleLineBlockCommentRe.test(line)&&!this.startRegionRe.test(line)&&!this.tripleStarBlockCommentRe.test(line))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(line)?"start":o},this.getFoldWidgetRange=function(e,t,n,o){var r,line=e.getLine(n);if(this.startRegionRe.test(line))return this.getCommentRegionBlock(e,line,n);if(r=line.match(this.foldingStartMarker)){var i=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,i);var m=e.getCommentFoldRange(n,i+r[0].length,1);return m&&!m.isMultiLine()&&(o?m=this.getSectionRange(e,n):"all"!=t&&(m=null)),m}if("markbegin"!==t&&(r=line.match(this.foldingStopMarker))){i=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,i):e.getCommentFoldRange(n,i,-1)}},this.getSectionRange=function(e,t){for(var line=e.getLine(t),n=line.search(/\S/),o=t,m=line.length,l=t+=1,c=e.getLength();++t<c;){var d=(line=e.getLine(t)).search(/\S/);if(-1!==d){if(n>d)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=o)break;if(h.isMultiLine())t=h.end.row;else if(n==d)break}l=t}}return new r(o,m,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,line,t){for(var n=line.search(/\s*$/),o=e.getLength(),m=t,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++t<o;){line=e.getLine(t);var d=l.exec(line);if(d&&(d[1]?c--:c++,!c))break}if(t>m)return new r(m,n,t,line.length)}}.call(l.prototype)})),ace.define("ace/mode/jssm",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/jssm_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,m=e("./jssm_highlight_rules").JSSMHighlightRules,l=e("./folding/cstyle").FoldMode,c=function(){this.HighlightRules=m,this.foldingRules=new l};o.inherits(c,r),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/jssm"}.call(c.prototype),t.Mode=c})),ace.require(["ace/mode/jssm"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));