ace.define("ace/mode/lua_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,l=function(){var e=this.createKeywordMapper({keyword:"break|do|else|elseif|end|for|function|if|in|local|repeat|return|then|until|while|or|and|not","support.function":"string|xpcall|package|tostring|print|os|unpack|require|getfenv|setmetatable|next|assert|tonumber|io|rawequal|collectgarbage|getmetatable|module|rawset|math|debug|pcall|table|newproxy|type|coroutine|_G|select|gcinfo|pairs|rawget|loadstring|ipairs|_VERSION|dofile|setfenv|load|error|loadfile|sub|upper|len|gfind|rep|find|match|char|dump|gmatch|reverse|byte|format|gsub|lower|preload|loadlib|loaded|loaders|cpath|config|path|seeall|exit|setlocale|date|getenv|difftime|remove|time|clock|tmpname|rename|execute|lines|write|close|flush|open|output|type|read|stderr|stdin|input|stdout|popen|tmpfile|log|max|acos|huge|ldexp|pi|cos|tanh|pow|deg|tan|cosh|sinh|random|randomseed|frexp|ceil|floor|rad|abs|sqrt|modf|asin|min|mod|fmod|log10|atan2|exp|sin|atan|getupvalue|debug|sethook|getmetatable|gethook|setmetatable|setlocal|traceback|setfenv|getinfo|setupvalue|getlocal|getregistry|getfenv|setn|insert|getn|foreachi|maxn|foreach|concat|sort|remove|resume|yield|status|wrap|create|running|__add|__sub|__mod|__unm|__concat|__lt|__index|__call|__gc|__metatable|__mul|__div|__pow|__len|__eq|__le|__newindex|__tostring|__mode|__tonumber","keyword.deprecated":"setn|foreach|foreachi|gcinfo|log10|maxn","constant.library":"string|package|os|io|math|debug|table|coroutine","constant.language":"true|false|nil|_G|_VERSION","variable.language":"self"},"identifier");this.$rules={start:[{stateName:"bracketedComment",onMatch:function(e,t,n){return n.unshift(this.next,e.length-2,t),"comment"},regex:/\-\-\[=*\[/,next:[{onMatch:function(e,t,n){return e.length==n[1]?(n.shift(),n.shift(),this.next=n.shift()):this.next="","comment"},regex:/\]=*\]/,next:"start"},{defaultToken:"comment"}]},{token:"comment",regex:"\\-\\-.*$"},{stateName:"bracketedString",onMatch:function(e,t,n){return n.unshift(this.next,e.length,t),"string.start"},regex:/\[=*\[/,next:[{onMatch:function(e,t,n){return e.length==n[1]?(n.shift(),n.shift(),this.next=n.shift()):this.next="","string.end"},regex:/\]=*\]/,next:"start"},{defaultToken:"string"}]},{token:"string",regex:'"(?:[^\\\\]|\\\\.)*?"'},{token:"string",regex:"'(?:[^\\\\]|\\\\.)*?'"},{token:"constant.numeric",regex:"(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))"},{token:"constant.numeric",regex:"(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[xX][\\dA-Fa-f]+))\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\/|%|\\#|\\^|~|<|>|<=|=>|==|~=|=|\\:|\\.\\.\\.|\\.\\."},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:"text",regex:"\\s+|\\w+"}]},this.normalizeRules()};r.inherits(l,o),t.LuaHighlightRules=l})),ace.define("ace/mode/folding/lua",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],(function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("./fold_mode").FoldMode,l=e("../../range").Range,d=e("../../token_iterator").TokenIterator,c=t.FoldMode=function(){};r.inherits(c,o),function(){this.foldingStartMarker=/\b(function|then|do|repeat)\b|{\s*$|(\[=*\[)/,this.foldingStopMarker=/\bend\b|^\s*}|\]=*\]/,this.getFoldWidget=function(e,t,n){var line=e.getLine(n),r=this.foldingStartMarker.test(line),o=this.foldingStopMarker.test(line);if(r&&!o){var l;if("then"==(l=line.match(this.foldingStartMarker))[1]&&/\belseif\b/.test(line))return;if(l[1]){if("keyword"===e.getTokenAt(n,l.index+1).type)return"start"}else{if(!l[2])return"start";if("bracketedComment"==(d=e.bgTokenizer.getState(n)||"")[0]||"bracketedString"==d[0])return"start"}}if("markbeginend"!=t||!o||r&&o)return"";if("end"===(l=line.match(this.foldingStopMarker))[0]){if("keyword"===e.getTokenAt(n,l.index+1).type)return"end"}else{if("]"!==l[0][0])return"end";var d;if("bracketedComment"==(d=e.bgTokenizer.getState(n-1)||"")[0]||"bracketedString"==d[0])return"end"}},this.getFoldWidgetRange=function(e,t,n){var r,line=e.doc.getLine(n);return(r=this.foldingStartMarker.exec(line))?r[1]?this.luaBlock(e,n,r.index+1):r[2]?e.getCommentFoldRange(n,r.index+1):this.openingBracketBlock(e,"{",n,r.index):(r=this.foldingStopMarker.exec(line))?"end"===r[0]&&"keyword"===e.getTokenAt(n,r.index+1).type?this.luaBlock(e,n,r.index+1):"]"===r[0][0]?e.getCommentFoldRange(n,r.index+1):this.closingBracketBlock(e,"}",n,r.index+r[0].length):void 0},this.luaBlock=function(e,t,n,r){var o=new d(e,t,n),c={function:1,do:1,then:1,elseif:-1,end:-1,repeat:1,until:-1},h=o.getCurrentToken();if(h&&"keyword"==h.type){var f=h.value,m=[f],k=c[f];if(k){var _=-1===k?o.getCurrentTokenColumn():e.getLine(t).length,x=t;for(o.step=-1===k?o.stepBackward:o.stepForward;h=o.step();)if("keyword"===h.type){var v=k*c[h.value];if(v>0)m.unshift(h.value);else if(v<=0){if(m.shift(),!m.length&&"elseif"!=h.value)break;0===v&&m.unshift(h.value)}}if(!h)return null;if(r)return o.getCurrentTokenRange();t=o.getCurrentTokenRow();return-1===k?new l(t,e.getLine(t).length,x,_):new l(x,_,t,o.getCurrentTokenColumn())}}}}.call(c.prototype)})),ace.define("ace/mode/lua",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lua_highlight_rules","ace/mode/folding/lua","ace/range","ace/worker/worker_client"],(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text").Mode,l=e("./lua_highlight_rules").LuaHighlightRules,d=e("./folding/lua").FoldMode,c=e("../range").Range,h=e("../worker/worker_client").WorkerClient,f=function(){this.HighlightRules=l,this.foldingRules=new d,this.$behaviour=this.$defaultBehaviour};r.inherits(f,o),function(){this.lineCommentStart="--",this.blockComment={start:"--[",end:"]--"};var e={function:1,then:1,do:1,else:1,elseif:1,repeat:1,end:-1,until:-1},t=["else","elseif","end","until"];this.getNextLineIndent=function(t,line,n){var r=this.$getIndent(line),o=0,l=this.getTokenizer().getLineTokens(line,t).tokens;return"start"==t&&(o=function(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];"keyword"==r.type?r.value in e&&(n+=e[r.value]):"paren.lparen"==r.type?n+=r.value.length:"paren.rparen"==r.type&&(n-=r.value.length)}return n<0?-1:n>0?1:0}(l)),o>0?r+n:o<0&&r.substr(r.length-n.length)==n&&!this.checkOutdent(t,line,"\n")?r.substr(0,r.length-n.length):r},this.checkOutdent=function(e,line,input){if("\n"!=input&&"\r"!=input&&"\r\n"!=input)return!1;if(line.match(/^\s*[\)\}\]]$/))return!0;var n=this.getTokenizer().getLineTokens(line.trim(),e).tokens;return!(!n||!n.length)&&("keyword"==n[0].type&&-1!=t.indexOf(n[0].value))},this.getMatching=function(t,n,r){if(null==n){var o=t.selection.lead;r=o.column,n=o.row}var l=t.getTokenAt(n,r);if(l&&l.value in e)return this.foldingRules.luaBlock(t,n,r,!0)},this.autoOutdent=function(e,t,n){var r=t.getLine(n).match(/^\s*/)[0].length;if(r&&n){var o=this.getMatching(t,n,r+1);if(o&&o.start.row!=n){var l=this.$getIndent(t.getLine(o.start.row));l.length!=r&&(t.replace(new c(n,0,n,r),l),t.outdentRows(new c(n+1,0,n+1,0)))}}},this.createWorker=function(e){var t=new h(["ace"],"ace/mode/lua_worker","Worker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/lua",this.snippetFileId="ace/snippets/lua"}.call(f.prototype),t.Mode=f})),ace.require(["ace/mode/lua"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));