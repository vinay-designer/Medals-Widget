goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__34747){
var vec__34748 = p__34747;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__34753){
var map__34754 = p__34753;
var map__34754__$1 = cljs.core.__destructure_map(map__34754);
var request = map__34754__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34754__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34754__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__34751_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__34751_SHARP_));
}),(function (p1__34752_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__34752_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5802__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5802__auto__)){
var on_request = temp__5802__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__34757 = cljs.core.seq(seq_request_maps);
var chunk__34758 = null;
var count__34759 = (0);
var i__34760 = (0);
while(true){
if((i__34760 < count__34759)){
var request__$1 = chunk__34758.cljs$core$IIndexed$_nth$arity$2(null,i__34760);
var xhrio_34769 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_34769);


var G__34770 = seq__34757;
var G__34771 = chunk__34758;
var G__34772 = count__34759;
var G__34773 = (i__34760 + (1));
seq__34757 = G__34770;
chunk__34758 = G__34771;
count__34759 = G__34772;
i__34760 = G__34773;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34757);
if(temp__5804__auto__){
var seq__34757__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34757__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34757__$1);
var G__34774 = cljs.core.chunk_rest(seq__34757__$1);
var G__34775 = c__5565__auto__;
var G__34776 = cljs.core.count(c__5565__auto__);
var G__34777 = (0);
seq__34757 = G__34774;
chunk__34758 = G__34775;
count__34759 = G__34776;
i__34760 = G__34777;
continue;
} else {
var request__$1 = cljs.core.first(seq__34757__$1);
var xhrio_34778 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_34778);


var G__34779 = cljs.core.next(seq__34757__$1);
var G__34780 = null;
var G__34781 = (0);
var G__34782 = (0);
seq__34757 = G__34779;
chunk__34758 = G__34780;
count__34759 = G__34781;
i__34760 = G__34782;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
