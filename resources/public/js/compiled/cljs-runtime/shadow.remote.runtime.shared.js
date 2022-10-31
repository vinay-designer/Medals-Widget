goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31262,res){
var map__31263 = p__31262;
var map__31263__$1 = cljs.core.__destructure_map(map__31263);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31263__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31263__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31264 = res;
var G__31264__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31264,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31264);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31264__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31264__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31266 = arguments.length;
switch (G__31266) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31268,msg,handlers,timeout_after_ms){
var map__31269 = p__31268;
var map__31269__$1 = cljs.core.__destructure_map(map__31269);
var runtime = map__31269__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31269__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31352 = arguments.length;
var i__5767__auto___31353 = (0);
while(true){
if((i__5767__auto___31353 < len__5766__auto___31352)){
args__5772__auto__.push((arguments[i__5767__auto___31353]));

var G__31354 = (i__5767__auto___31353 + (1));
i__5767__auto___31353 = G__31354;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31273,ev,args){
var map__31274 = p__31273;
var map__31274__$1 = cljs.core.__destructure_map(map__31274);
var runtime = map__31274__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31274__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31275 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31278 = null;
var count__31279 = (0);
var i__31280 = (0);
while(true){
if((i__31280 < count__31279)){
var ext = chunk__31278.cljs$core$IIndexed$_nth$arity$2(null,i__31280);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31355 = seq__31275;
var G__31356 = chunk__31278;
var G__31357 = count__31279;
var G__31358 = (i__31280 + (1));
seq__31275 = G__31355;
chunk__31278 = G__31356;
count__31279 = G__31357;
i__31280 = G__31358;
continue;
} else {
var G__31359 = seq__31275;
var G__31360 = chunk__31278;
var G__31361 = count__31279;
var G__31362 = (i__31280 + (1));
seq__31275 = G__31359;
chunk__31278 = G__31360;
count__31279 = G__31361;
i__31280 = G__31362;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31275);
if(temp__5804__auto__){
var seq__31275__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31275__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31275__$1);
var G__31363 = cljs.core.chunk_rest(seq__31275__$1);
var G__31364 = c__5565__auto__;
var G__31365 = cljs.core.count(c__5565__auto__);
var G__31366 = (0);
seq__31275 = G__31363;
chunk__31278 = G__31364;
count__31279 = G__31365;
i__31280 = G__31366;
continue;
} else {
var ext = cljs.core.first(seq__31275__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31367 = cljs.core.next(seq__31275__$1);
var G__31368 = null;
var G__31369 = (0);
var G__31370 = (0);
seq__31275 = G__31367;
chunk__31278 = G__31368;
count__31279 = G__31369;
i__31280 = G__31370;
continue;
} else {
var G__31371 = cljs.core.next(seq__31275__$1);
var G__31372 = null;
var G__31373 = (0);
var G__31374 = (0);
seq__31275 = G__31371;
chunk__31278 = G__31372;
count__31279 = G__31373;
i__31280 = G__31374;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31270){
var G__31271 = cljs.core.first(seq31270);
var seq31270__$1 = cljs.core.next(seq31270);
var G__31272 = cljs.core.first(seq31270__$1);
var seq31270__$2 = cljs.core.next(seq31270__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31271,G__31272,seq31270__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31283,p__31284){
var map__31285 = p__31283;
var map__31285__$1 = cljs.core.__destructure_map(map__31285);
var runtime = map__31285__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31286 = p__31284;
var map__31286__$1 = cljs.core.__destructure_map(map__31286);
var msg = map__31286__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31286__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31287 = cljs.core.deref(state_ref);
var map__31287__$1 = cljs.core.__destructure_map(map__31287);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31287__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31288){
var map__31289 = p__31288;
var map__31289__$1 = cljs.core.__destructure_map(map__31289);
var runtime = map__31289__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31289__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31290,msg){
var map__31291 = p__31290;
var map__31291__$1 = cljs.core.__destructure_map(map__31291);
var runtime = map__31291__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31291__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31292,key,p__31293){
var map__31294 = p__31292;
var map__31294__$1 = cljs.core.__destructure_map(map__31294);
var state = map__31294__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31294__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31295 = p__31293;
var map__31295__$1 = cljs.core.__destructure_map(map__31295);
var spec = map__31295__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31295__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31296,key,spec){
var map__31297 = p__31296;
var map__31297__$1 = cljs.core.__destructure_map(map__31297);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31298_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31298_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31299_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31299_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31300_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31300_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31301_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31301_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31302_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31302_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31303,key){
var map__31305 = p__31303;
var map__31305__$1 = cljs.core.__destructure_map(map__31305);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31311,msg){
var map__31312 = p__31311;
var map__31312__$1 = cljs.core.__destructure_map(map__31312);
var runtime = map__31312__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31312__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31313,p__31314){
var map__31315 = p__31313;
var map__31315__$1 = cljs.core.__destructure_map(map__31315);
var runtime = map__31315__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31315__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31316 = p__31314;
var map__31316__$1 = cljs.core.__destructure_map(map__31316);
var msg = map__31316__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31316__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31316__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31317 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31319 = null;
var count__31320 = (0);
var i__31321 = (0);
while(true){
if((i__31321 < count__31320)){
var map__31341 = chunk__31319.cljs$core$IIndexed$_nth$arity$2(null,i__31321);
var map__31341__$1 = cljs.core.__destructure_map(map__31341);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31341__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31382 = seq__31317;
var G__31383 = chunk__31319;
var G__31384 = count__31320;
var G__31385 = (i__31321 + (1));
seq__31317 = G__31382;
chunk__31319 = G__31383;
count__31320 = G__31384;
i__31321 = G__31385;
continue;
} else {
var G__31387 = seq__31317;
var G__31388 = chunk__31319;
var G__31389 = count__31320;
var G__31390 = (i__31321 + (1));
seq__31317 = G__31387;
chunk__31319 = G__31388;
count__31320 = G__31389;
i__31321 = G__31390;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31317);
if(temp__5804__auto__){
var seq__31317__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31317__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31317__$1);
var G__31392 = cljs.core.chunk_rest(seq__31317__$1);
var G__31393 = c__5565__auto__;
var G__31394 = cljs.core.count(c__5565__auto__);
var G__31395 = (0);
seq__31317 = G__31392;
chunk__31319 = G__31393;
count__31320 = G__31394;
i__31321 = G__31395;
continue;
} else {
var map__31346 = cljs.core.first(seq__31317__$1);
var map__31346__$1 = cljs.core.__destructure_map(map__31346);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31346__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31396 = cljs.core.next(seq__31317__$1);
var G__31397 = null;
var G__31398 = (0);
var G__31399 = (0);
seq__31317 = G__31396;
chunk__31319 = G__31397;
count__31320 = G__31398;
i__31321 = G__31399;
continue;
} else {
var G__31400 = cljs.core.next(seq__31317__$1);
var G__31401 = null;
var G__31402 = (0);
var G__31403 = (0);
seq__31317 = G__31400;
chunk__31319 = G__31401;
count__31320 = G__31402;
i__31321 = G__31403;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
