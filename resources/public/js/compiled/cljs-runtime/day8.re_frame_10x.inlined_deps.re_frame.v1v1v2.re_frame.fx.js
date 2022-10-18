goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16773 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16774 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16774);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16862 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16862)){
var new_db_16863 = temp__5804__auto___16862;
var fexpr__16775_16864 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16775_16864.cljs$core$IFn$_invoke$arity$1 ? fexpr__16775_16864.cljs$core$IFn$_invoke$arity$1(new_db_16863) : fexpr__16775_16864.call(null,new_db_16863));
} else {
}

var seq__16776 = cljs.core.seq(effects_without_db);
var chunk__16777 = null;
var count__16778 = (0);
var i__16779 = (0);
while(true){
if((i__16779 < count__16778)){
var vec__16789 = chunk__16777.cljs$core$IIndexed$_nth$arity$2(null,i__16779);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16789,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16789,(1),null);
var temp__5802__auto___16865 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16865)){
var effect_fn_16866 = temp__5802__auto___16865;
(effect_fn_16866.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16866.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16866.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16867 = seq__16776;
var G__16868 = chunk__16777;
var G__16869 = count__16778;
var G__16870 = (i__16779 + (1));
seq__16776 = G__16867;
chunk__16777 = G__16868;
count__16778 = G__16869;
i__16779 = G__16870;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16776);
if(temp__5804__auto__){
var seq__16776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16776__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16776__$1);
var G__16871 = cljs.core.chunk_rest(seq__16776__$1);
var G__16872 = c__5565__auto__;
var G__16873 = cljs.core.count(c__5565__auto__);
var G__16874 = (0);
seq__16776 = G__16871;
chunk__16777 = G__16872;
count__16778 = G__16873;
i__16779 = G__16874;
continue;
} else {
var vec__16794 = cljs.core.first(seq__16776__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(1),null);
var temp__5802__auto___16875 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16875)){
var effect_fn_16876 = temp__5802__auto___16875;
(effect_fn_16876.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16876.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16876.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16877 = cljs.core.next(seq__16776__$1);
var G__16878 = null;
var G__16879 = (0);
var G__16880 = (0);
seq__16776 = G__16877;
chunk__16777 = G__16878;
count__16778 = G__16879;
i__16779 = G__16880;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__16495__auto___16881 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__16496__auto___16882 = (end__16495__auto___16881 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16496__auto___16882,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__16495__auto___16881);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16773);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16883 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16883)){
var new_db_16884 = temp__5804__auto___16883;
var fexpr__16798_16885 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16798_16885.cljs$core$IFn$_invoke$arity$1 ? fexpr__16798_16885.cljs$core$IFn$_invoke$arity$1(new_db_16884) : fexpr__16798_16885.call(null,new_db_16884));
} else {
}

var seq__16799 = cljs.core.seq(effects_without_db);
var chunk__16800 = null;
var count__16801 = (0);
var i__16802 = (0);
while(true){
if((i__16802 < count__16801)){
var vec__16810 = chunk__16800.cljs$core$IIndexed$_nth$arity$2(null,i__16802);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16810,(1),null);
var temp__5802__auto___16889 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16889)){
var effect_fn_16890 = temp__5802__auto___16889;
(effect_fn_16890.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16890.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16890.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16891 = seq__16799;
var G__16892 = chunk__16800;
var G__16893 = count__16801;
var G__16894 = (i__16802 + (1));
seq__16799 = G__16891;
chunk__16800 = G__16892;
count__16801 = G__16893;
i__16802 = G__16894;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16799);
if(temp__5804__auto__){
var seq__16799__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16799__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16799__$1);
var G__16895 = cljs.core.chunk_rest(seq__16799__$1);
var G__16896 = c__5565__auto__;
var G__16897 = cljs.core.count(c__5565__auto__);
var G__16898 = (0);
seq__16799 = G__16895;
chunk__16800 = G__16896;
count__16801 = G__16897;
i__16802 = G__16898;
continue;
} else {
var vec__16813 = cljs.core.first(seq__16799__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813,(1),null);
var temp__5802__auto___16899 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16899)){
var effect_fn_16900 = temp__5802__auto___16899;
(effect_fn_16900.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16900.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16900.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16901 = cljs.core.next(seq__16799__$1);
var G__16902 = null;
var G__16903 = (0);
var G__16904 = (0);
seq__16799 = G__16901;
chunk__16800 = G__16902;
count__16801 = G__16903;
i__16802 = G__16904;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__16816){
var map__16817 = p__16816;
var map__16817__$1 = cljs.core.__destructure_map(map__16817);
var effect = map__16817__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16817__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16817__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__16819 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16820 = null;
var count__16821 = (0);
var i__16822 = (0);
while(true){
if((i__16822 < count__16821)){
var effect = chunk__16820.cljs$core$IIndexed$_nth$arity$2(null,i__16822);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16908 = seq__16819;
var G__16909 = chunk__16820;
var G__16910 = count__16821;
var G__16911 = (i__16822 + (1));
seq__16819 = G__16908;
chunk__16820 = G__16909;
count__16821 = G__16910;
i__16822 = G__16911;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16819);
if(temp__5804__auto__){
var seq__16819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16819__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16819__$1);
var G__16912 = cljs.core.chunk_rest(seq__16819__$1);
var G__16913 = c__5565__auto__;
var G__16914 = cljs.core.count(c__5565__auto__);
var G__16915 = (0);
seq__16819 = G__16912;
chunk__16820 = G__16913;
count__16821 = G__16914;
i__16822 = G__16915;
continue;
} else {
var effect = cljs.core.first(seq__16819__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16916 = cljs.core.next(seq__16819__$1);
var G__16917 = null;
var G__16918 = (0);
var G__16919 = (0);
seq__16819 = G__16916;
chunk__16820 = G__16917;
count__16821 = G__16918;
i__16822 = G__16919;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16826 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16827 = null;
var count__16828 = (0);
var i__16829 = (0);
while(true){
if((i__16829 < count__16828)){
var vec__16840 = chunk__16827.cljs$core$IIndexed$_nth$arity$2(null,i__16829);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16920 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16920)){
var effect_fn_16921 = temp__5802__auto___16920;
(effect_fn_16921.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16921.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16921.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16922 = seq__16826;
var G__16923 = chunk__16827;
var G__16924 = count__16828;
var G__16925 = (i__16829 + (1));
seq__16826 = G__16922;
chunk__16827 = G__16923;
count__16828 = G__16924;
i__16829 = G__16925;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16826);
if(temp__5804__auto__){
var seq__16826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16826__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16826__$1);
var G__16926 = cljs.core.chunk_rest(seq__16826__$1);
var G__16927 = c__5565__auto__;
var G__16928 = cljs.core.count(c__5565__auto__);
var G__16929 = (0);
seq__16826 = G__16926;
chunk__16827 = G__16927;
count__16828 = G__16928;
i__16829 = G__16929;
continue;
} else {
var vec__16843 = cljs.core.first(seq__16826__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16930 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16930)){
var effect_fn_16931 = temp__5802__auto___16930;
(effect_fn_16931.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16931.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16931.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16932 = cljs.core.next(seq__16826__$1);
var G__16933 = null;
var G__16934 = (0);
var G__16935 = (0);
seq__16826 = G__16932;
chunk__16827 = G__16933;
count__16828 = G__16934;
i__16829 = G__16935;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16846 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16847 = null;
var count__16848 = (0);
var i__16849 = (0);
while(true){
if((i__16849 < count__16848)){
var event = chunk__16847.cljs$core$IIndexed$_nth$arity$2(null,i__16849);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16936 = seq__16846;
var G__16937 = chunk__16847;
var G__16938 = count__16848;
var G__16939 = (i__16849 + (1));
seq__16846 = G__16936;
chunk__16847 = G__16937;
count__16848 = G__16938;
i__16849 = G__16939;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16846);
if(temp__5804__auto__){
var seq__16846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16846__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16846__$1);
var G__16940 = cljs.core.chunk_rest(seq__16846__$1);
var G__16941 = c__5565__auto__;
var G__16942 = cljs.core.count(c__5565__auto__);
var G__16943 = (0);
seq__16846 = G__16940;
chunk__16847 = G__16941;
count__16848 = G__16942;
i__16849 = G__16943;
continue;
} else {
var event = cljs.core.first(seq__16846__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16944 = cljs.core.next(seq__16846__$1);
var G__16945 = null;
var G__16946 = (0);
var G__16947 = (0);
seq__16846 = G__16944;
chunk__16847 = G__16945;
count__16848 = G__16946;
i__16849 = G__16947;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16858 = cljs.core.seq(value);
var chunk__16859 = null;
var count__16860 = (0);
var i__16861 = (0);
while(true){
if((i__16861 < count__16860)){
var event = chunk__16859.cljs$core$IIndexed$_nth$arity$2(null,i__16861);
clear_event(event);


var G__16948 = seq__16858;
var G__16949 = chunk__16859;
var G__16950 = count__16860;
var G__16951 = (i__16861 + (1));
seq__16858 = G__16948;
chunk__16859 = G__16949;
count__16860 = G__16950;
i__16861 = G__16951;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16858);
if(temp__5804__auto__){
var seq__16858__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16858__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16858__$1);
var G__16952 = cljs.core.chunk_rest(seq__16858__$1);
var G__16953 = c__5565__auto__;
var G__16954 = cljs.core.count(c__5565__auto__);
var G__16955 = (0);
seq__16858 = G__16952;
chunk__16859 = G__16953;
count__16860 = G__16954;
i__16861 = G__16955;
continue;
} else {
var event = cljs.core.first(seq__16858__$1);
clear_event(event);


var G__16956 = cljs.core.next(seq__16858__$1);
var G__16957 = null;
var G__16958 = (0);
var G__16959 = (0);
seq__16858 = G__16956;
chunk__16859 = G__16957;
count__16860 = G__16958;
i__16861 = G__16959;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
