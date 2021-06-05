(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{825:function(e,t,n){(function(t){var n;n=function(){return function(e){var data,t=e.localStorage||(data={},{setItem:function(e,t){data[e]=t},getItem:function(e){return data[e]},removeItem:function(e){delete data[e]}}),n=1,o=2,r=3,c=4,h=5,d=6,l=7,f=8,_=9,v=10,m=11,y=12,I=13,w=14,E=function(e,t){for(var n in e)if(e.hasOwnProperty(n)){if(!t.hasOwnProperty(n)){var o="Unknown property, "+n+". Valid properties are:";for(var r in t)t.hasOwnProperty(r)&&(o=o+" "+r);throw new Error(o)}if(typeof e[n]!==t[n])throw new Error(N(A.INVALID_TYPE,[typeof e[n],n]))}},M=function(e,t){return function(){return e.apply(t,arguments)}},A={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key={0} value={1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},T={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},N=function(e,t){var text=e.text;if(t)for(var n,o,i=0;i<t.length;i++)if(n="{"+i+"}",(o=text.indexOf(n))>0){var r=text.substring(0,o),c=text.substring(o+n.length);text=r+t[i]+c}return text},O=[0,6,77,81,73,115,100,112,3],S=[0,4,77,81,84,84,4],C=function(e,t){for(var n in this.type=e,t)t.hasOwnProperty(n)&&(this[n]=t[n])};function R(input,e){var t,n=e,f=input[e],v=f>>4,y=f&=15;e+=1;var I=0,w=1;do{if(e==input.length)return[null,n];I+=(127&(t=input[e++]))*w,w*=128}while(0!=(128&t));var E=e+I;if(E>input.length)return[null,n];var M=new C(v);switch(v){case o:1&input[e++]&&(M.sessionPresent=!0),M.returnCode=input[e++];break;case r:var A=y>>1&3,T=L(input,e),N=V(input,e+=2,T);e+=T,A>0&&(M.messageIdentifier=L(input,e),e+=2);var O=new Q(input.subarray(e,E));1==(1&y)&&(O.retained=!0),8==(8&y)&&(O.duplicate=!0),O.qos=A,O.destinationName=N,M.payloadMessage=O;break;case c:case h:case d:case l:case m:M.messageIdentifier=L(input,e);break;case _:M.messageIdentifier=L(input,e),e+=2,M.returnCode=input.subarray(e,E)}return[M,E]}function k(input,e,t){return e[t++]=input>>8,e[t++]=input%256,t}function D(input,e,t,n){return P(input,t,n=k(e,t,n)),n+e}function L(e,t){return 256*e[t]+e[t+1]}function U(input){for(var output=0,i=0;i<input.length;i++){var e=input.charCodeAt(i);e>2047?(55296<=e&&e<=56319&&(i++,output++),output+=3):e>127?output+=2:output++}return output}function P(input,output,e){for(var t=e,i=0;i<input.length;i++){var n=input.charCodeAt(i);if(55296<=n&&n<=56319){var o=input.charCodeAt(++i);if(isNaN(o))throw new Error(N(A.MALFORMED_UNICODE,[n,o]));n=o-56320+(n-55296<<10)+65536}n<=127?output[t++]=n:n<=2047?(output[t++]=n>>6&31|192,output[t++]=63&n|128):n<=65535?(output[t++]=n>>12&15|224,output[t++]=n>>6&63|128,output[t++]=63&n|128):(output[t++]=n>>18&7|240,output[t++]=n>>12&63|128,output[t++]=n>>6&63|128,output[t++]=63&n|128)}return output}function V(input,e,t){for(var n,output="",o=e;o<e+t;){var r=input[o++];if(r<128)n=r;else{var c=input[o++]-128;if(c<0)throw new Error(N(A.MALFORMED_UTF,[r.toString(16),c.toString(16),""]));if(r<224)n=64*(r-192)+c;else{var h=input[o++]-128;if(h<0)throw new Error(N(A.MALFORMED_UTF,[r.toString(16),c.toString(16),h.toString(16)]));if(r<240)n=4096*(r-224)+64*c+h;else{var d=input[o++]-128;if(d<0)throw new Error(N(A.MALFORMED_UTF,[r.toString(16),c.toString(16),h.toString(16),d.toString(16)]));if(!(r<248))throw new Error(N(A.MALFORMED_UTF,[r.toString(16),c.toString(16),h.toString(16),d.toString(16)]));n=262144*(r-240)+4096*c+64*h+d}}}n>65535&&(n-=65536,output+=String.fromCharCode(55296+(n>>10)),n=56320+(1023&n)),output+=String.fromCharCode(n)}return output}C.prototype.encode=function(){var e,t=(15&this.type)<<4,o=0,c=[],h=0;switch(void 0!==this.messageIdentifier&&(o+=2),this.type){case n:switch(this.mqttVersion){case 3:o+=O.length+3;break;case 4:o+=S.length+3}o+=U(this.clientId)+2,void 0!==this.willMessage&&(o+=U(this.willMessage.destinationName)+2,(e=this.willMessage.payloadBytes)instanceof Uint8Array||(e=new Uint8Array(l)),o+=e.byteLength+2),void 0!==this.userName&&(o+=U(this.userName)+2),void 0!==this.password&&(o+=U(this.password)+2);break;case f:t|=2;for(var i=0;i<this.topics.length;i++)c[i]=U(this.topics[i]),o+=c[i]+2;o+=this.requestedQos.length;break;case v:for(t|=2,i=0;i<this.topics.length;i++)c[i]=U(this.topics[i]),o+=c[i]+2;break;case d:t|=2;break;case r:this.payloadMessage.duplicate&&(t|=8),t=t|=this.payloadMessage.qos<<1,this.payloadMessage.retained&&(t|=1),o+=(h=U(this.payloadMessage.destinationName))+2;var l=this.payloadMessage.payloadBytes;o+=l.byteLength,l instanceof ArrayBuffer?l=new Uint8Array(l):l instanceof Uint8Array||(l=new Uint8Array(l.buffer))}var _=function(e){var output=new Array(1),t=0;do{var n=e%128;(e>>=7)>0&&(n|=128),output[t++]=n}while(e>0&&t<4);return output}(o),m=_.length+1,y=new ArrayBuffer(o+m),I=new Uint8Array(y);if(I[0]=t,I.set(_,1),this.type==r)m=D(this.payloadMessage.destinationName,h,I,m);else if(this.type==n){switch(this.mqttVersion){case 3:I.set(O,m),m+=O.length;break;case 4:I.set(S,m),m+=S.length}var w=0;this.cleanSession&&(w=2),void 0!==this.willMessage&&(w|=4,w|=this.willMessage.qos<<3,this.willMessage.retained&&(w|=32)),void 0!==this.userName&&(w|=128),void 0!==this.password&&(w|=64),I[m++]=w,m=k(this.keepAliveInterval,I,m)}switch(void 0!==this.messageIdentifier&&(m=k(this.messageIdentifier,I,m)),this.type){case n:m=D(this.clientId,U(this.clientId),I,m),void 0!==this.willMessage&&(m=D(this.willMessage.destinationName,U(this.willMessage.destinationName),I,m),m=k(e.byteLength,I,m),I.set(e,m),m+=e.byteLength),void 0!==this.userName&&(m=D(this.userName,U(this.userName),I,m)),void 0!==this.password&&(m=D(this.password,U(this.password),I,m));break;case r:I.set(l,m);break;case f:for(i=0;i<this.topics.length;i++)m=D(this.topics[i],c[i],I,m),I[m++]=this.requestedQos[i];break;case v:for(i=0;i<this.topics.length;i++)m=D(this.topics[i],c[i],I,m)}return y};var x=function(e,t){this._client=e,this._keepAliveInterval=1e3*t,this.isReset=!1;var n=new C(y).encode(),o=function(e){return function(){return r.apply(e)}},r=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),this._client.socket.send(n),this.timeout=setTimeout(o(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(A.PING_TIMEOUT.code,N(A.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0,clearTimeout(this.timeout),this._keepAliveInterval>0&&(this.timeout=setTimeout(o(this),this._keepAliveInterval))},this.cancel=function(){clearTimeout(this.timeout)}},B=function(e,t,n,o){t||(t=30),this.timeout=setTimeout(function(e,t,n){return function(){return e.apply(t,n)}}(n,e,o),1e3*t),this.cancel=function(){clearTimeout(this.timeout)}},F=function(n,o,r,path,c){if(!("WebSocket"in e)||null===e.WebSocket)throw new Error(N(A.UNSUPPORTED,["WebSocket"]));if(!("ArrayBuffer"in e)||null===e.ArrayBuffer)throw new Error(N(A.UNSUPPORTED,["ArrayBuffer"]));for(var h in this._trace("Paho.Client",n,o,r,path,c),this.host=o,this.port=r,this.path=path,this.uri=n,this.clientId=c,this._wsuri=null,this._localKey=o+":"+r+("/mqtt"!=path?":"+path:"")+":"+c+":",this._msg_queue=[],this._buffered_msg_queue=[],this._sentMessages={},this._receivedMessages={},this._notify_msg_sent={},this._message_identifier=1,this._sequence=0,t)0!==h.indexOf("Sent:"+this._localKey)&&0!==h.indexOf("Received:"+this._localKey)||this.restore(h)};F.prototype.host=null,F.prototype.port=null,F.prototype.path=null,F.prototype.uri=null,F.prototype.clientId=null,F.prototype.socket=null,F.prototype.connected=!1,F.prototype.maxMessageIdentifier=65536,F.prototype.connectOptions=null,F.prototype.hostIndex=null,F.prototype.onConnected=null,F.prototype.onConnectionLost=null,F.prototype.onMessageDelivered=null,F.prototype.onMessageArrived=null,F.prototype.traceFunction=null,F.prototype._msg_queue=null,F.prototype._buffered_msg_queue=null,F.prototype._connectTimeout=null,F.prototype.sendPinger=null,F.prototype.receivePinger=null,F.prototype._reconnectInterval=1,F.prototype._reconnecting=!1,F.prototype._reconnectTimeout=null,F.prototype.disconnectedPublishing=!1,F.prototype.disconnectedBufferSize=5e3,F.prototype.receiveBuffer=null,F.prototype._traceBuffer=null,F.prototype._MAX_TRACE_ENTRIES=100,F.prototype.connect=function(e){var t=this._traceMask(e,"password");if(this._trace("Client.connect",t,this.socket,this.connected),this.connected)throw new Error(N(A.INVALID_STATE,["already connected"]));if(this.socket)throw new Error(N(A.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),this.connectOptions=e,this._reconnectInterval=1,this._reconnecting=!1,e.uris?(this.hostIndex=0,this._doConnect(e.uris[0])):this._doConnect(this.uri)},F.prototype.subscribe=function(filter,e){if(this._trace("Client.subscribe",filter,e),!this.connected)throw new Error(N(A.INVALID_STATE,["not connected"]));var t=new C(f);t.topics=filter.constructor===Array?filter:[filter],void 0===e.qos&&(e.qos=0),t.requestedQos=[];for(var i=0;i<t.topics.length;i++)t.requestedQos[i]=e.qos;e.onSuccess&&(t.onSuccess=function(t){e.onSuccess({invocationContext:e.invocationContext,grantedQos:t})}),e.onFailure&&(t.onFailure=function(t){e.onFailure({invocationContext:e.invocationContext,errorCode:t,errorMessage:N(t)})}),e.timeout&&(t.timeOut=new B(this,e.timeout,e.onFailure,[{invocationContext:e.invocationContext,errorCode:A.SUBSCRIBE_TIMEOUT.code,errorMessage:N(A.SUBSCRIBE_TIMEOUT)}])),this._requires_ack(t),this._schedule_message(t)},F.prototype.unsubscribe=function(filter,e){if(this._trace("Client.unsubscribe",filter,e),!this.connected)throw new Error(N(A.INVALID_STATE,["not connected"]));var t=new C(v);t.topics=filter.constructor===Array?filter:[filter],e.onSuccess&&(t.callback=function(){e.onSuccess({invocationContext:e.invocationContext})}),e.timeout&&(t.timeOut=new B(this,e.timeout,e.onFailure,[{invocationContext:e.invocationContext,errorCode:A.UNSUBSCRIBE_TIMEOUT.code,errorMessage:N(A.UNSUBSCRIBE_TIMEOUT)}])),this._requires_ack(t),this._schedule_message(t)},F.prototype.send=function(e){this._trace("Client.send",e);var t=new C(r);if(t.payloadMessage=e,this.connected)e.qos>0?this._requires_ack(t):this.onMessageDelivered&&(this._notify_msg_sent[t]=this.onMessageDelivered(t.payloadMessage)),this._schedule_message(t);else{if(!this._reconnecting||!this.disconnectedPublishing)throw new Error(N(A.INVALID_STATE,["not connected"]));if(Object.keys(this._sentMessages).length+this._buffered_msg_queue.length>this.disconnectedBufferSize)throw new Error(N(A.BUFFER_FULL,[this.disconnectedBufferSize]));e.qos>0?this._requires_ack(t):(t.sequence=++this._sequence,this._buffered_msg_queue.unshift(t))}},F.prototype.disconnect=function(){if(this._trace("Client.disconnect"),this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),!this.socket)throw new Error(N(A.INVALID_STATE,["not connecting or connected"]));var e=new C(w);this._notify_msg_sent[e]=M(this._disconnected,this),this._schedule_message(e)},F.prototype.getTraceLog=function(){if(null!==this._traceBuffer){for(var e in this._trace("Client.getTraceLog",new Date),this._trace("Client.getTraceLog in flight messages",this._sentMessages.length),this._sentMessages)this._trace("_sentMessages ",e,this._sentMessages[e]);for(var e in this._receivedMessages)this._trace("_receivedMessages ",e,this._receivedMessages[e]);return this._traceBuffer}},F.prototype.startTrace=function(){null===this._traceBuffer&&(this._traceBuffer=[]),this._trace("Client.startTrace",new Date,"@VERSION@-@BUILDLEVEL@")},F.prototype.stopTrace=function(){delete this._traceBuffer},F.prototype._doConnect=function(e){if(this.connectOptions.useSSL){var t=e.split(":");t[0]="wss",e=t.join(":")}this._wsuri=e,this.connected=!1,this.connectOptions.mqttVersion<4?this.socket=new WebSocket(e,["mqttv3.1"]):this.socket=new WebSocket(e,["mqtt"]),this.socket.binaryType="arraybuffer",this.socket.onopen=M(this._on_socket_open,this),this.socket.onmessage=M(this._on_socket_message,this),this.socket.onerror=M(this._on_socket_error,this),this.socket.onclose=M(this._on_socket_close,this),this.sendPinger=new x(this,this.connectOptions.keepAliveInterval),this.receivePinger=new x(this,this.connectOptions.keepAliveInterval),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._connectTimeout=new B(this,this.connectOptions.timeout,this._disconnected,[A.CONNECT_TIMEOUT.code,N(A.CONNECT_TIMEOUT)])},F.prototype._schedule_message=function(e){this._msg_queue.unshift(e),this.connected&&this._process_queue()},F.prototype.store=function(e,n){var o={type:n.type,messageIdentifier:n.messageIdentifier,version:1};switch(n.type){case r:n.pubRecReceived&&(o.pubRecReceived=!0),o.payloadMessage={};for(var c="",h=n.payloadMessage.payloadBytes,i=0;i<h.length;i++)h[i]<=15?c=c+"0"+h[i].toString(16):c+=h[i].toString(16);o.payloadMessage.payloadHex=c,o.payloadMessage.qos=n.payloadMessage.qos,o.payloadMessage.destinationName=n.payloadMessage.destinationName,n.payloadMessage.duplicate&&(o.payloadMessage.duplicate=!0),n.payloadMessage.retained&&(o.payloadMessage.retained=!0),0===e.indexOf("Sent:")&&(void 0===n.sequence&&(n.sequence=++this._sequence),o.sequence=n.sequence);break;default:throw Error(N(A.INVALID_STORED_DATA,[e+this._localKey+n.messageIdentifier,o]))}t.setItem(e+this._localKey+n.messageIdentifier,JSON.stringify(o))},F.prototype.restore=function(e){var n=t.getItem(e),o=JSON.parse(n),c=new C(o.type,o);switch(o.type){case r:for(var h=o.payloadMessage.payloadHex,d=new ArrayBuffer(h.length/2),l=new Uint8Array(d),i=0;h.length>=2;){var f=parseInt(h.substring(0,2),16);h=h.substring(2,h.length),l[i++]=f}var _=new Q(l);_.qos=o.payloadMessage.qos,_.destinationName=o.payloadMessage.destinationName,o.payloadMessage.duplicate&&(_.duplicate=!0),o.payloadMessage.retained&&(_.retained=!0),c.payloadMessage=_;break;default:throw Error(N(A.INVALID_STORED_DATA,[e,n]))}0===e.indexOf("Sent:"+this._localKey)?(c.payloadMessage.duplicate=!0,this._sentMessages[c.messageIdentifier]=c):0===e.indexOf("Received:"+this._localKey)&&(this._receivedMessages[c.messageIdentifier]=c)},F.prototype._process_queue=function(){for(var e=null;e=this._msg_queue.pop();)this._socket_send(e),this._notify_msg_sent[e]&&(this._notify_msg_sent[e](),delete this._notify_msg_sent[e])},F.prototype._requires_ack=function(e){var t=Object.keys(this._sentMessages).length;if(t>this.maxMessageIdentifier)throw Error("Too many messages:"+t);for(;void 0!==this._sentMessages[this._message_identifier];)this._message_identifier++;e.messageIdentifier=this._message_identifier,this._sentMessages[e.messageIdentifier]=e,e.type===r&&this.store("Sent:",e),this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)},F.prototype._on_socket_open=function(){var e=new C(n,this.connectOptions);e.clientId=this.clientId,this._socket_send(e)},F.prototype._on_socket_message=function(e){this._trace("Client._on_socket_message",e.data);for(var t=this._deframeMessages(e.data),i=0;i<t.length;i+=1)this._handleMessage(t[i])},F.prototype._deframeMessages=function(data){var e=new Uint8Array(data),t=[];if(this.receiveBuffer){var n=new Uint8Array(this.receiveBuffer.length+e.length);n.set(this.receiveBuffer),n.set(e,this.receiveBuffer.length),e=n,delete this.receiveBuffer}try{for(var o=0;o<e.length;){var r=R(e,o),c=r[0];if(o=r[1],null===c)break;t.push(c)}o<e.length&&(this.receiveBuffer=e.subarray(o))}catch(e){var h="undefined"==e.hasOwnProperty("stack")?e.stack.toString():"No Error Stack Available";return void this._disconnected(A.INTERNAL_ERROR.code,N(A.INTERNAL_ERROR,[e.message,h]))}return t},F.prototype._handleMessage=function(e){this._trace("Client._handleMessage",e);try{switch(e.type){case o:if(this._connectTimeout.cancel(),this._reconnectTimeout&&this._reconnectTimeout.cancel(),this.connectOptions.cleanSession){for(var n in this._sentMessages){var f=this._sentMessages[n];t.removeItem("Sent:"+this._localKey+f.messageIdentifier)}for(var n in this._sentMessages={},this._receivedMessages){var v=this._receivedMessages[n];t.removeItem("Received:"+this._localKey+v.messageIdentifier)}this._receivedMessages={}}if(0!==e.returnCode){this._disconnected(A.CONNACK_RETURNCODE.code,N(A.CONNACK_RETURNCODE,[e.returnCode,T[e.returnCode]]));break}this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);var y=[];for(var E in this._sentMessages)this._sentMessages.hasOwnProperty(E)&&y.push(this._sentMessages[E]);if(this._buffered_msg_queue.length>0)for(var M=null;M=this._buffered_msg_queue.pop();)y.push(M),this.onMessageDelivered&&(this._notify_msg_sent[M]=this.onMessageDelivered(M.payloadMessage));y=y.sort((function(a,b){return a.sequence-b.sequence}));for(var i=0,O=y.length;i<O;i++)if((f=y[i]).type==r&&f.pubRecReceived){var S=new C(d,{messageIdentifier:f.messageIdentifier});this._schedule_message(S)}else this._schedule_message(f);this.connectOptions.onSuccess&&this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});var R=!1;this._reconnecting&&(R=!0,this._reconnectInterval=1,this._reconnecting=!1),this._connected(R,this._wsuri),this._process_queue();break;case r:this._receivePublish(e);break;case c:(f=this._sentMessages[e.messageIdentifier])&&(delete this._sentMessages[e.messageIdentifier],t.removeItem("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(f.payloadMessage));break;case h:(f=this._sentMessages[e.messageIdentifier])&&(f.pubRecReceived=!0,S=new C(d,{messageIdentifier:e.messageIdentifier}),this.store("Sent:",f),this._schedule_message(S));break;case d:v=this._receivedMessages[e.messageIdentifier],t.removeItem("Received:"+this._localKey+e.messageIdentifier),v&&(this._receiveMessage(v),delete this._receivedMessages[e.messageIdentifier]);var k=new C(l,{messageIdentifier:e.messageIdentifier});this._schedule_message(k);break;case l:f=this._sentMessages[e.messageIdentifier],delete this._sentMessages[e.messageIdentifier],t.removeItem("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(f.payloadMessage);break;case _:(f=this._sentMessages[e.messageIdentifier])&&(f.timeOut&&f.timeOut.cancel(),128===e.returnCode[0]?f.onFailure&&f.onFailure(e.returnCode):f.onSuccess&&f.onSuccess(e.returnCode),delete this._sentMessages[e.messageIdentifier]);break;case m:(f=this._sentMessages[e.messageIdentifier])&&(f.timeOut&&f.timeOut.cancel(),f.callback&&f.callback(),delete this._sentMessages[e.messageIdentifier]);break;case I:this.sendPinger.reset();break;case w:this._disconnected(A.INVALID_MQTT_MESSAGE_TYPE.code,N(A.INVALID_MQTT_MESSAGE_TYPE,[e.type]));break;default:this._disconnected(A.INVALID_MQTT_MESSAGE_TYPE.code,N(A.INVALID_MQTT_MESSAGE_TYPE,[e.type]))}}catch(e){var D="undefined"==e.hasOwnProperty("stack")?e.stack.toString():"No Error Stack Available";return void this._disconnected(A.INTERNAL_ERROR.code,N(A.INTERNAL_ERROR,[e.message,D]))}},F.prototype._on_socket_error=function(e){this._reconnecting||this._disconnected(A.SOCKET_ERROR.code,N(A.SOCKET_ERROR,[e.data]))},F.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(A.SOCKET_CLOSE.code,N(A.SOCKET_CLOSE))},F.prototype._socket_send=function(e){if(1==e.type){var t=this._traceMask(e,"password");this._trace("Client._socket_send",t)}else this._trace("Client._socket_send",e);this.socket.send(e.encode()),this.sendPinger.reset()},F.prototype._receivePublish=function(e){switch(e.payloadMessage.qos){case"undefined":case 0:this._receiveMessage(e);break;case 1:var t=new C(c,{messageIdentifier:e.messageIdentifier});this._schedule_message(t),this._receiveMessage(e);break;case 2:this._receivedMessages[e.messageIdentifier]=e,this.store("Received:",e);var n=new C(h,{messageIdentifier:e.messageIdentifier});this._schedule_message(n);break;default:throw Error("Invaild qos="+e.payloadMessage.qos)}},F.prototype._receiveMessage=function(e){this.onMessageArrived&&this.onMessageArrived(e.payloadMessage)},F.prototype._connected=function(e,t){this.onConnected&&this.onConnected(e,t)},F.prototype._reconnect=function(){this._trace("Client._reconnect"),this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),this._reconnectInterval<128&&(this._reconnectInterval=2*this._reconnectInterval),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))},F.prototype._disconnected=function(e,t){if(this._trace("Client._disconnected",e,t),void 0!==e&&this._reconnecting)this._reconnectTimeout=new B(this,this._reconnectInterval,this._reconnect);else if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,1===this.socket.readyState&&this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);else if(void 0===e&&(e=A.OK.code,t=N(A.OK)),this.connected){if(this.connected=!1,this.onConnectionLost&&this.onConnectionLost({errorCode:e,errorMessage:t,reconnect:this.connectOptions.reconnect,uri:this._wsuri}),e!==A.OK.code&&this.connectOptions.reconnect)return this._reconnectInterval=1,void this._reconnect()}else 4===this.connectOptions.mqttVersion&&!1===this.connectOptions.mqttVersionExplicit?(this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri)):this.connectOptions.onFailure&&this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:e,errorMessage:t})},F.prototype._trace=function(){if(this.traceFunction){var e=Array.prototype.slice.call(arguments);for(var i in e)void 0!==e[i]&&e.splice(i,1,JSON.stringify(e[i]));var t=e.join("");this.traceFunction({severity:"Debug",message:t})}if(null!==this._traceBuffer){i=0;for(var n=arguments.length;i<n;i++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),0===i||void 0===arguments[i]?this._traceBuffer.push(arguments[i]):this._traceBuffer.push("  "+JSON.stringify(arguments[i]))}},F.prototype._traceMask=function(e,t){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=o==t?"******":e[o]);return n};var Q=function(e){var t,n;if(!("string"==typeof e||e instanceof ArrayBuffer||ArrayBuffer.isView(e)&&!(e instanceof DataView)))throw N(A.INVALID_ARGUMENT,[e,"newPayload"]);t=e;var o=0,r=!1,c=!1;Object.defineProperties(this,{payloadString:{enumerable:!0,get:function(){return"string"==typeof t?t:V(t,0,t.length)}},payloadBytes:{enumerable:!0,get:function(){if("string"==typeof t){var e=new ArrayBuffer(U(t)),n=new Uint8Array(e);return P(t,n,0),n}return t}},destinationName:{enumerable:!0,get:function(){return n},set:function(e){if("string"!=typeof e)throw new Error(N(A.INVALID_ARGUMENT,[e,"newDestinationName"]));n=e}},qos:{enumerable:!0,get:function(){return o},set:function(e){if(0!==e&&1!==e&&2!==e)throw new Error("Invalid argument:"+e);o=e}},retained:{enumerable:!0,get:function(){return r},set:function(e){if("boolean"!=typeof e)throw new Error(N(A.INVALID_ARGUMENT,[e,"newRetained"]));r=e}},topic:{enumerable:!0,get:function(){return n},set:function(e){n=e}},duplicate:{enumerable:!0,get:function(){return c},set:function(e){c=e}}})};return{Client:function(e,t,path,n){var o;if("string"!=typeof e)throw new Error(N(A.INVALID_TYPE,[typeof e,"host"]));if(2==arguments.length){n=t;var r=(o=e).match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(!r)throw new Error(N(A.INVALID_ARGUMENT,[e,"host"]));e=r[4]||r[2],t=parseInt(r[7]),path=r[8]}else{if(3==arguments.length&&(n=path,path="/mqtt"),"number"!=typeof t||t<0)throw new Error(N(A.INVALID_TYPE,[typeof t,"port"]));if("string"!=typeof path)throw new Error(N(A.INVALID_TYPE,[typeof path,"path"]));var c=-1!==e.indexOf(":")&&"["!==e.slice(0,1)&&"]"!==e.slice(-1);o="ws://"+(c?"["+e+"]":e)+":"+t+path}for(var h=0,i=0;i<n.length;i++){var d=n.charCodeAt(i);55296<=d&&d<=56319&&i++,h++}if("string"!=typeof n||h>65535)throw new Error(N(A.INVALID_ARGUMENT,[n,"clientId"]));var l=new F(o,e,t,path,n);Object.defineProperties(this,{host:{get:function(){return e},set:function(){throw new Error(N(A.UNSUPPORTED_OPERATION))}},port:{get:function(){return t},set:function(){throw new Error(N(A.UNSUPPORTED_OPERATION))}},path:{get:function(){return path},set:function(){throw new Error(N(A.UNSUPPORTED_OPERATION))}},uri:{get:function(){return o},set:function(){throw new Error(N(A.UNSUPPORTED_OPERATION))}},clientId:{get:function(){return l.clientId},set:function(){throw new Error(N(A.UNSUPPORTED_OPERATION))}},onConnected:{get:function(){return l.onConnected},set:function(e){if("function"!=typeof e)throw new Error(N(A.INVALID_TYPE,[typeof e,"onConnected"]));l.onConnected=e}},disconnectedPublishing:{get:function(){return l.disconnectedPublishing},set:function(e){l.disconnectedPublishing=e}},disconnectedBufferSize:{get:function(){return l.disconnectedBufferSize},set:function(e){l.disconnectedBufferSize=e}},onConnectionLost:{get:function(){return l.onConnectionLost},set:function(e){if("function"!=typeof e)throw new Error(N(A.INVALID_TYPE,[typeof e,"onConnectionLost"]));l.onConnectionLost=e}},onMessageDelivered:{get:function(){return l.onMessageDelivered},set:function(e){if("function"!=typeof e)throw new Error(N(A.INVALID_TYPE,[typeof e,"onMessageDelivered"]));l.onMessageDelivered=e}},onMessageArrived:{get:function(){return l.onMessageArrived},set:function(e){if("function"!=typeof e)throw new Error(N(A.INVALID_TYPE,[typeof e,"onMessageArrived"]));l.onMessageArrived=e}},trace:{get:function(){return l.traceFunction},set:function(e){if("function"!=typeof e)throw new Error(N(A.INVALID_TYPE,[typeof e,"onTrace"]));l.traceFunction=e}}}),this.connect=function(e){if(E(e=e||{},{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"}),void 0===e.keepAliveInterval&&(e.keepAliveInterval=60),e.mqttVersion>4||e.mqttVersion<3)throw new Error(N(A.INVALID_ARGUMENT,[e.mqttVersion,"connectOptions.mqttVersion"]));if(void 0===e.mqttVersion?(e.mqttVersionExplicit=!1,e.mqttVersion=4):e.mqttVersionExplicit=!0,void 0!==e.password&&void 0===e.userName)throw new Error(N(A.INVALID_ARGUMENT,[e.password,"connectOptions.password"]));if(e.willMessage){if(!(e.willMessage instanceof Q))throw new Error(N(A.INVALID_TYPE,[e.willMessage,"connectOptions.willMessage"]));if(e.willMessage.stringPayload=null,void 0===e.willMessage.destinationName)throw new Error(N(A.INVALID_TYPE,[typeof e.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if(void 0===e.cleanSession&&(e.cleanSession=!0),e.hosts){if(!(e.hosts instanceof Array))throw new Error(N(A.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));if(e.hosts.length<1)throw new Error(N(A.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));for(var t=!1,i=0;i<e.hosts.length;i++){if("string"!=typeof e.hosts[i])throw new Error(N(A.INVALID_TYPE,[typeof e.hosts[i],"connectOptions.hosts["+i+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(e.hosts[i])){if(0===i)t=!0;else if(!t)throw new Error(N(A.INVALID_ARGUMENT,[e.hosts[i],"connectOptions.hosts["+i+"]"]))}else if(t)throw new Error(N(A.INVALID_ARGUMENT,[e.hosts[i],"connectOptions.hosts["+i+"]"]))}if(t)e.uris=e.hosts;else{if(!e.ports)throw new Error(N(A.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(!(e.ports instanceof Array))throw new Error(N(A.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(e.hosts.length!==e.ports.length)throw new Error(N(A.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));for(e.uris=[],i=0;i<e.hosts.length;i++){if("number"!=typeof e.ports[i]||e.ports[i]<0)throw new Error(N(A.INVALID_TYPE,[typeof e.ports[i],"connectOptions.ports["+i+"]"]));var n=e.hosts[i],r=e.ports[i],c=-1!==n.indexOf(":");o="ws://"+(c?"["+n+"]":n)+":"+r+path,e.uris.push(o)}}}l.connect(e)},this.subscribe=function(filter,e){if("string"!=typeof filter&&filter.constructor!==Array)throw new Error("Invalid argument:"+filter);if(E(e=e||{},{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),e.timeout&&!e.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if(void 0!==e.qos&&0!==e.qos&&1!==e.qos&&2!==e.qos)throw new Error(N(A.INVALID_ARGUMENT,[e.qos,"subscribeOptions.qos"]));l.subscribe(filter,e)},this.unsubscribe=function(filter,e){if("string"!=typeof filter&&filter.constructor!==Array)throw new Error("Invalid argument:"+filter);if(E(e=e||{},{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),e.timeout&&!e.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");l.unsubscribe(filter,e)},this.send=function(e,t,n,o){var r;if(0===arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(e instanceof Q)&&"string"!=typeof e)throw new Error("Invalid argument:"+typeof e);if(void 0===(r=e).destinationName)throw new Error(N(A.INVALID_ARGUMENT,[r.destinationName,"Message.destinationName"]));l.send(r)}else(r=new Q(t)).destinationName=e,arguments.length>=3&&(r.qos=n),arguments.length>=4&&(r.retained=o),l.send(r)},this.publish=function(e,t,n,o){var r;if(0===arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(e instanceof Q)&&"string"!=typeof e)throw new Error("Invalid argument:"+typeof e);if(void 0===(r=e).destinationName)throw new Error(N(A.INVALID_ARGUMENT,[r.destinationName,"Message.destinationName"]));l.send(r)}else(r=new Q(t)).destinationName=e,arguments.length>=3&&(r.qos=n),arguments.length>=4&&(r.retained=o),l.send(r)},this.disconnect=function(){l.disconnect()},this.getTraceLog=function(){return l.getTraceLog()},this.startTrace=function(){l.startTrace()},this.stopTrace=function(){l.stopTrace()},this.isConnected=function(){return l.connected}},Message:Q}}(void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},e.exports=n()}).call(this,n(27))}}]);