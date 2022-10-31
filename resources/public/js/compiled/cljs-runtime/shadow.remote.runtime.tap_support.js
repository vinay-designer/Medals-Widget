goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__31646,p__31647){
var map__31648 = p__31646;
var map__31648__$1 = cljs.core.__destructure_map(map__31648);
var svc = map__31648__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31648__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31648__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31648__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__31649 = p__31647;
var map__31649__$1 = cljs.core.__destructure_map(map__31649);
var msg = map__31649__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31649__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31649__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31649__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31649__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__31659,p__31660){
var map__31661 = p__31659;
var map__31661__$1 = cljs.core.__destructure_map(map__31661);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31661__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__31662 = p__31660;
var map__31662__$1 = cljs.core.__destructure_map(map__31662);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31662__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__31665,p__31666){
var map__31667 = p__31665;
var map__31667__$1 = cljs.core.__destructure_map(map__31667);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31667__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__31668 = p__31666;
var map__31668__$1 = cljs.core.__destructure_map(map__31668);
var msg = map__31668__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31668__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__31673,tid){
var map__31674 = p__31673;
var map__31674__$1 = cljs.core.__destructure_map(map__31674);
var svc = map__31674__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31674__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__31684 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__31685 = null;
var count__31686 = (0);
var i__31687 = (0);
while(true){
if((i__31687 < count__31686)){
var vec__31698 = chunk__31685.cljs$core$IIndexed$_nth$arity$2(null,i__31687);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31698,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31698,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__31706 = seq__31684;
var G__31707 = chunk__31685;
var G__31708 = count__31686;
var G__31709 = (i__31687 + (1));
seq__31684 = G__31706;
chunk__31685 = G__31707;
count__31686 = G__31708;
i__31687 = G__31709;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31684);
if(temp__5804__auto__){
var seq__31684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31684__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31684__$1);
var G__31710 = cljs.core.chunk_rest(seq__31684__$1);
var G__31711 = c__5565__auto__;
var G__31712 = cljs.core.count(c__5565__auto__);
var G__31713 = (0);
seq__31684 = G__31710;
chunk__31685 = G__31711;
count__31686 = G__31712;
i__31687 = G__31713;
continue;
} else {
var vec__31701 = cljs.core.first(seq__31684__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31701,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31701,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__31714 = cljs.core.next(seq__31684__$1);
var G__31715 = null;
var G__31716 = (0);
var G__31717 = (0);
seq__31684 = G__31714;
chunk__31685 = G__31715;
count__31686 = G__31716;
i__31687 = G__31717;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__31676_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__31676_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__31677_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__31677_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__31678_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__31678_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__31679_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__31679_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__31704){
var map__31705 = p__31704;
var map__31705__$1 = cljs.core.__destructure_map(map__31705);
var svc = map__31705__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31705__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31705__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
