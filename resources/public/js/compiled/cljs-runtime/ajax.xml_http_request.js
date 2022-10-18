goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__32744 = e.target.readyState;
var fexpr__32743 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__32743.cljs$core$IFn$_invoke$arity$1 ? fexpr__32743.cljs$core$IFn$_invoke$arity$1(G__32744) : fexpr__32743.call(null,G__32744));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32752,handler){
var map__32753 = p__32752;
var map__32753__$1 = cljs.core.__destructure_map(map__32753);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32753__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32753__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__32750_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__32750_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___32773 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___32773)){
var response_type_32774 = temp__5804__auto___32773;
(this$__$1.responseType = cljs.core.name(response_type_32774));
} else {
}

var seq__32757_32775 = cljs.core.seq(headers);
var chunk__32758_32776 = null;
var count__32759_32777 = (0);
var i__32760_32778 = (0);
while(true){
if((i__32760_32778 < count__32759_32777)){
var vec__32767_32779 = chunk__32758_32776.cljs$core$IIndexed$_nth$arity$2(null,i__32760_32778);
var k_32780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767_32779,(0),null);
var v_32781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767_32779,(1),null);
this$__$1.setRequestHeader(k_32780,v_32781);


var G__32782 = seq__32757_32775;
var G__32783 = chunk__32758_32776;
var G__32784 = count__32759_32777;
var G__32785 = (i__32760_32778 + (1));
seq__32757_32775 = G__32782;
chunk__32758_32776 = G__32783;
count__32759_32777 = G__32784;
i__32760_32778 = G__32785;
continue;
} else {
var temp__5804__auto___32786 = cljs.core.seq(seq__32757_32775);
if(temp__5804__auto___32786){
var seq__32757_32787__$1 = temp__5804__auto___32786;
if(cljs.core.chunked_seq_QMARK_(seq__32757_32787__$1)){
var c__5565__auto___32788 = cljs.core.chunk_first(seq__32757_32787__$1);
var G__32789 = cljs.core.chunk_rest(seq__32757_32787__$1);
var G__32790 = c__5565__auto___32788;
var G__32791 = cljs.core.count(c__5565__auto___32788);
var G__32792 = (0);
seq__32757_32775 = G__32789;
chunk__32758_32776 = G__32790;
count__32759_32777 = G__32791;
i__32760_32778 = G__32792;
continue;
} else {
var vec__32770_32793 = cljs.core.first(seq__32757_32787__$1);
var k_32794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32770_32793,(0),null);
var v_32795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32770_32793,(1),null);
this$__$1.setRequestHeader(k_32794,v_32795);


var G__32796 = cljs.core.next(seq__32757_32787__$1);
var G__32797 = null;
var G__32798 = (0);
var G__32799 = (0);
seq__32757_32775 = G__32796;
chunk__32758_32776 = G__32797;
count__32759_32777 = G__32798;
i__32760_32778 = G__32799;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5043__auto__ = body;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
