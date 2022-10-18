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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__19836){
var map__19837 = p__19836;
var map__19837__$1 = cljs.core.__destructure_map(map__19837);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__19838_19865 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19839_19866 = null;
var count__19840_19867 = (0);
var i__19841_19868 = (0);
while(true){
if((i__19841_19868 < count__19840_19867)){
var vec__19852_19869 = chunk__19839_19866.cljs$core$IIndexed$_nth$arity$2(null,i__19841_19868);
var k_19870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19852_19869,(0),null);
var cb_19871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19852_19869,(1),null);
try{var G__19856_19872 = cljs.core.deref(re_frame.trace.traces);
(cb_19871.cljs$core$IFn$_invoke$arity$1 ? cb_19871.cljs$core$IFn$_invoke$arity$1(G__19856_19872) : cb_19871.call(null,G__19856_19872));
}catch (e19855){var e_19873 = e19855;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19870,"while storing",cljs.core.deref(re_frame.trace.traces),e_19873], 0));
}

var G__19874 = seq__19838_19865;
var G__19875 = chunk__19839_19866;
var G__19876 = count__19840_19867;
var G__19877 = (i__19841_19868 + (1));
seq__19838_19865 = G__19874;
chunk__19839_19866 = G__19875;
count__19840_19867 = G__19876;
i__19841_19868 = G__19877;
continue;
} else {
var temp__5804__auto___19878 = cljs.core.seq(seq__19838_19865);
if(temp__5804__auto___19878){
var seq__19838_19879__$1 = temp__5804__auto___19878;
if(cljs.core.chunked_seq_QMARK_(seq__19838_19879__$1)){
var c__5565__auto___19880 = cljs.core.chunk_first(seq__19838_19879__$1);
var G__19881 = cljs.core.chunk_rest(seq__19838_19879__$1);
var G__19882 = c__5565__auto___19880;
var G__19883 = cljs.core.count(c__5565__auto___19880);
var G__19884 = (0);
seq__19838_19865 = G__19881;
chunk__19839_19866 = G__19882;
count__19840_19867 = G__19883;
i__19841_19868 = G__19884;
continue;
} else {
var vec__19857_19885 = cljs.core.first(seq__19838_19879__$1);
var k_19886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19857_19885,(0),null);
var cb_19887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19857_19885,(1),null);
try{var G__19861_19888 = cljs.core.deref(re_frame.trace.traces);
(cb_19887.cljs$core$IFn$_invoke$arity$1 ? cb_19887.cljs$core$IFn$_invoke$arity$1(G__19861_19888) : cb_19887.call(null,G__19861_19888));
}catch (e19860){var e_19889 = e19860;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_19886,"while storing",cljs.core.deref(re_frame.trace.traces),e_19889], 0));
}

var G__19890 = cljs.core.next(seq__19838_19879__$1);
var G__19891 = null;
var G__19892 = (0);
var G__19893 = (0);
seq__19838_19865 = G__19890;
chunk__19839_19866 = G__19891;
count__19840_19867 = G__19892;
i__19841_19868 = G__19893;
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
