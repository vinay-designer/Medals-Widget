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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31170,res){
var map__31171 = p__31170;
var map__31171__$1 = cljs.core.__destructure_map(map__31171);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31171__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31171__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31172 = res;
var G__31172__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31172,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31172);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31172__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31172__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31176 = arguments.length;
switch (G__31176) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31177,msg,handlers,timeout_after_ms){
var map__31178 = p__31177;
var map__31178__$1 = cljs.core.__destructure_map(map__31178);
var runtime = map__31178__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31178__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31327 = arguments.length;
var i__5767__auto___31328 = (0);
while(true){
if((i__5767__auto___31328 < len__5766__auto___31327)){
args__5772__auto__.push((arguments[i__5767__auto___31328]));

var G__31329 = (i__5767__auto___31328 + (1));
i__5767__auto___31328 = G__31329;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31205,ev,args){
var map__31208 = p__31205;
var map__31208__$1 = cljs.core.__destructure_map(map__31208);
var runtime = map__31208__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31208__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31214 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31218 = null;
var count__31219 = (0);
var i__31220 = (0);
while(true){
if((i__31220 < count__31219)){
var ext = chunk__31218.cljs$core$IIndexed$_nth$arity$2(null,i__31220);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31330 = seq__31214;
var G__31331 = chunk__31218;
var G__31332 = count__31219;
var G__31333 = (i__31220 + (1));
seq__31214 = G__31330;
chunk__31218 = G__31331;
count__31219 = G__31332;
i__31220 = G__31333;
continue;
} else {
var G__31338 = seq__31214;
var G__31339 = chunk__31218;
var G__31340 = count__31219;
var G__31341 = (i__31220 + (1));
seq__31214 = G__31338;
chunk__31218 = G__31339;
count__31219 = G__31340;
i__31220 = G__31341;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31214);
if(temp__5804__auto__){
var seq__31214__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31214__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31214__$1);
var G__31342 = cljs.core.chunk_rest(seq__31214__$1);
var G__31343 = c__5565__auto__;
var G__31344 = cljs.core.count(c__5565__auto__);
var G__31345 = (0);
seq__31214 = G__31342;
chunk__31218 = G__31343;
count__31219 = G__31344;
i__31220 = G__31345;
continue;
} else {
var ext = cljs.core.first(seq__31214__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31346 = cljs.core.next(seq__31214__$1);
var G__31347 = null;
var G__31348 = (0);
var G__31349 = (0);
seq__31214 = G__31346;
chunk__31218 = G__31347;
count__31219 = G__31348;
i__31220 = G__31349;
continue;
} else {
var G__31350 = cljs.core.next(seq__31214__$1);
var G__31351 = null;
var G__31352 = (0);
var G__31353 = (0);
seq__31214 = G__31350;
chunk__31218 = G__31351;
count__31219 = G__31352;
i__31220 = G__31353;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31200){
var G__31201 = cljs.core.first(seq31200);
var seq31200__$1 = cljs.core.next(seq31200);
var G__31202 = cljs.core.first(seq31200__$1);
var seq31200__$2 = cljs.core.next(seq31200__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31201,G__31202,seq31200__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31256,p__31257){
var map__31258 = p__31256;
var map__31258__$1 = cljs.core.__destructure_map(map__31258);
var runtime = map__31258__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31258__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31259 = p__31257;
var map__31259__$1 = cljs.core.__destructure_map(map__31259);
var msg = map__31259__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31259__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31260 = cljs.core.deref(state_ref);
var map__31260__$1 = cljs.core.__destructure_map(map__31260);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31260__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31260__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31261){
var map__31262 = p__31261;
var map__31262__$1 = cljs.core.__destructure_map(map__31262);
var runtime = map__31262__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31262__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31271,msg){
var map__31272 = p__31271;
var map__31272__$1 = cljs.core.__destructure_map(map__31272);
var runtime = map__31272__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31278,key,p__31279){
var map__31280 = p__31278;
var map__31280__$1 = cljs.core.__destructure_map(map__31280);
var state = map__31280__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31280__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31281 = p__31279;
var map__31281__$1 = cljs.core.__destructure_map(map__31281);
var spec = map__31281__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31281__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31282,key,spec){
var map__31283 = p__31282;
var map__31283__$1 = cljs.core.__destructure_map(map__31283);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31283__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31284_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31284_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31285_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31285_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31286_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31286_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31287_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31287_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31288_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31288_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31289,key){
var map__31290 = p__31289;
var map__31290__$1 = cljs.core.__destructure_map(map__31290);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31291,msg){
var map__31292 = p__31291;
var map__31292__$1 = cljs.core.__destructure_map(map__31292);
var runtime = map__31292__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31292__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31293,p__31294){
var map__31295 = p__31293;
var map__31295__$1 = cljs.core.__destructure_map(map__31295);
var runtime = map__31295__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31295__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31296 = p__31294;
var map__31296__$1 = cljs.core.__destructure_map(map__31296);
var msg = map__31296__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31296__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31296__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__31297 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31299 = null;
var count__31300 = (0);
var i__31301 = (0);
while(true){
if((i__31301 < count__31300)){
var map__31305 = chunk__31299.cljs$core$IIndexed$_nth$arity$2(null,i__31301);
var map__31305__$1 = cljs.core.__destructure_map(map__31305);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31362 = seq__31297;
var G__31363 = chunk__31299;
var G__31364 = count__31300;
var G__31365 = (i__31301 + (1));
seq__31297 = G__31362;
chunk__31299 = G__31363;
count__31300 = G__31364;
i__31301 = G__31365;
continue;
} else {
var G__31366 = seq__31297;
var G__31367 = chunk__31299;
var G__31368 = count__31300;
var G__31369 = (i__31301 + (1));
seq__31297 = G__31366;
chunk__31299 = G__31367;
count__31300 = G__31368;
i__31301 = G__31369;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31297);
if(temp__5804__auto__){
var seq__31297__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31297__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31297__$1);
var G__31370 = cljs.core.chunk_rest(seq__31297__$1);
var G__31371 = c__5565__auto__;
var G__31372 = cljs.core.count(c__5565__auto__);
var G__31373 = (0);
seq__31297 = G__31370;
chunk__31299 = G__31371;
count__31300 = G__31372;
i__31301 = G__31373;
continue;
} else {
var map__31313 = cljs.core.first(seq__31297__$1);
var map__31313__$1 = cljs.core.__destructure_map(map__31313);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31313__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31374 = cljs.core.next(seq__31297__$1);
var G__31375 = null;
var G__31376 = (0);
var G__31377 = (0);
seq__31297 = G__31374;
chunk__31299 = G__31375;
count__31300 = G__31376;
i__31301 = G__31377;
continue;
} else {
var G__31378 = cljs.core.next(seq__31297__$1);
var G__31379 = null;
var G__31380 = (0);
var G__31381 = (0);
seq__31297 = G__31378;
chunk__31299 = G__31379;
count__31300 = G__31380;
i__31301 = G__31381;
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
