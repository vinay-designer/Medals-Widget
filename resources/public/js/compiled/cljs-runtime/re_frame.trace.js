goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__19849){
var map__19850 = p__19849;
var map__19850__$1 = cljs.core.__destructure_map(map__19850);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19850__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19850__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19850__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19850__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5043__auto__ = child_of;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__19851_19878 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19852_19879 = null;
var count__19853_19880 = (0);
var i__19854_19881 = (0);
while(true){
if((i__19854_19881 < count__19853_19880)){
var vec__19865_19882 = chunk__19852_19879.cljs$core$IIndexed$_nth$arity$2(null,i__19854_19881);
var k_19883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19865_19882,(0),null);
var cb_19884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19865_19882,(1),null);
try{var G__19869_19886 = cljs.core.deref(re_frame.trace.traces);
(cb_19884.cljs$core$IFn$_invoke$arity$1 ? cb_19884.cljs$core$IFn$_invoke$arity$1(G__19869_19886) : cb_19884.call(null,G__19869_19886));
}catch (e19868){var e_19887 = e19868;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19883,"while storing",cljs.core.deref(re_frame.trace.traces),e_19887], 0));
}

var G__19890 = seq__19851_19878;
var G__19891 = chunk__19852_19879;
var G__19892 = count__19853_19880;
var G__19893 = (i__19854_19881 + (1));
seq__19851_19878 = G__19890;
chunk__19852_19879 = G__19891;
count__19853_19880 = G__19892;
i__19854_19881 = G__19893;
continue;
} else {
var temp__5804__auto___19894 = cljs.core.seq(seq__19851_19878);
if(temp__5804__auto___19894){
var seq__19851_19895__$1 = temp__5804__auto___19894;
if(cljs.core.chunked_seq_QMARK_(seq__19851_19895__$1)){
var c__5565__auto___19896 = cljs.core.chunk_first(seq__19851_19895__$1);
var G__19897 = cljs.core.chunk_rest(seq__19851_19895__$1);
var G__19898 = c__5565__auto___19896;
var G__19899 = cljs.core.count(c__5565__auto___19896);
var G__19900 = (0);
seq__19851_19878 = G__19897;
chunk__19852_19879 = G__19898;
count__19853_19880 = G__19899;
i__19854_19881 = G__19900;
continue;
} else {
var vec__19870_19901 = cljs.core.first(seq__19851_19895__$1);
var k_19902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19870_19901,(0),null);
var cb_19903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19870_19901,(1),null);
try{var G__19874_19908 = cljs.core.deref(re_frame.trace.traces);
(cb_19903.cljs$core$IFn$_invoke$arity$1 ? cb_19903.cljs$core$IFn$_invoke$arity$1(G__19874_19908) : cb_19903.call(null,G__19874_19908));
}catch (e19873){var e_19909 = e19873;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19902,"while storing",cljs.core.deref(re_frame.trace.traces),e_19909], 0));
}

var G__19912 = cljs.core.next(seq__19851_19895__$1);
var G__19913 = null;
var G__19914 = (0);
var G__19915 = (0);
seq__19851_19878 = G__19912;
chunk__19852_19879 = G__19913;
count__19853_19880 = G__19914;
i__19854_19881 = G__19915;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
