goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__31633,p__31634){
var map__31635 = p__31633;
var map__31635__$1 = cljs.core.__destructure_map(map__31635);
var svc = map__31635__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31635__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31635__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31635__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__31636 = p__31634;
var map__31636__$1 = cljs.core.__destructure_map(map__31636);
var msg = map__31636__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31636__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__31642,p__31643){
var map__31645 = p__31642;
var map__31645__$1 = cljs.core.__destructure_map(map__31645);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31645__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__31646 = p__31643;
var map__31646__$1 = cljs.core.__destructure_map(map__31646);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31646__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__31650,p__31651){
var map__31652 = p__31650;
var map__31652__$1 = cljs.core.__destructure_map(map__31652);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31652__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31652__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__31653 = p__31651;
var map__31653__$1 = cljs.core.__destructure_map(map__31653);
var msg = map__31653__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31653__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__31656,tid){
var map__31657 = p__31656;
var map__31657__$1 = cljs.core.__destructure_map(map__31657);
var svc = map__31657__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31657__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__31667 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__31668 = null;
var count__31669 = (0);
var i__31670 = (0);
while(true){
if((i__31670 < count__31669)){
var vec__31677 = chunk__31668.cljs$core$IIndexed$_nth$arity$2(null,i__31670);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31677,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31677,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__31690 = seq__31667;
var G__31691 = chunk__31668;
var G__31692 = count__31669;
var G__31693 = (i__31670 + (1));
seq__31667 = G__31690;
chunk__31668 = G__31691;
count__31669 = G__31692;
i__31670 = G__31693;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31667);
if(temp__5804__auto__){
var seq__31667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31667__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31667__$1);
var G__31695 = cljs.core.chunk_rest(seq__31667__$1);
var G__31697 = c__5565__auto__;
var G__31698 = cljs.core.count(c__5565__auto__);
var G__31699 = (0);
seq__31667 = G__31695;
chunk__31668 = G__31697;
count__31669 = G__31698;
i__31670 = G__31699;
continue;
} else {
var vec__31682 = cljs.core.first(seq__31667__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31682,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31682,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__31700 = cljs.core.next(seq__31667__$1);
var G__31701 = null;
var G__31702 = (0);
var G__31703 = (0);
seq__31667 = G__31700;
chunk__31668 = G__31701;
count__31669 = G__31702;
i__31670 = G__31703;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__31658_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__31658_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__31659_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__31659_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__31660_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__31660_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__31661_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__31661_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__31685){
var map__31686 = p__31685;
var map__31686__$1 = cljs.core.__destructure_map(map__31686);
var svc = map__31686__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31686__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31686__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
