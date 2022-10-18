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
var _STAR_current_trace_STAR__orig_val__16770 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16771 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16771);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16874 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16874)){
var new_db_16875 = temp__5804__auto___16874;
var fexpr__16774_16876 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16774_16876.cljs$core$IFn$_invoke$arity$1 ? fexpr__16774_16876.cljs$core$IFn$_invoke$arity$1(new_db_16875) : fexpr__16774_16876.call(null,new_db_16875));
} else {
}

var seq__16776 = cljs.core.seq(effects_without_db);
var chunk__16777 = null;
var count__16778 = (0);
var i__16779 = (0);
while(true){
if((i__16779 < count__16778)){
var vec__16790 = chunk__16777.cljs$core$IIndexed$_nth$arity$2(null,i__16779);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16790,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16790,(1),null);
var temp__5802__auto___16877 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16877)){
var effect_fn_16878 = temp__5802__auto___16877;
(effect_fn_16878.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16878.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16878.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16879 = seq__16776;
var G__16880 = chunk__16777;
var G__16881 = count__16778;
var G__16882 = (i__16779 + (1));
seq__16776 = G__16879;
chunk__16777 = G__16880;
count__16778 = G__16881;
i__16779 = G__16882;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16776);
if(temp__5804__auto__){
var seq__16776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16776__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16776__$1);
var G__16883 = cljs.core.chunk_rest(seq__16776__$1);
var G__16884 = c__5565__auto__;
var G__16885 = cljs.core.count(c__5565__auto__);
var G__16886 = (0);
seq__16776 = G__16883;
chunk__16777 = G__16884;
count__16778 = G__16885;
i__16779 = G__16886;
continue;
} else {
var vec__16795 = cljs.core.first(seq__16776__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(1),null);
var temp__5802__auto___16887 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16887)){
var effect_fn_16888 = temp__5802__auto___16887;
(effect_fn_16888.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16888.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16888.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16889 = cljs.core.next(seq__16776__$1);
var G__16890 = null;
var G__16891 = (0);
var G__16892 = (0);
seq__16776 = G__16889;
chunk__16777 = G__16890;
count__16778 = G__16891;
i__16779 = G__16892;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__16501__auto___16893 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__16502__auto___16894 = (end__16501__auto___16893 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16502__auto___16894,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__16501__auto___16893);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16770);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16895 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16895)){
var new_db_16896 = temp__5804__auto___16895;
var fexpr__16799_16897 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16799_16897.cljs$core$IFn$_invoke$arity$1 ? fexpr__16799_16897.cljs$core$IFn$_invoke$arity$1(new_db_16896) : fexpr__16799_16897.call(null,new_db_16896));
} else {
}

var seq__16800 = cljs.core.seq(effects_without_db);
var chunk__16801 = null;
var count__16802 = (0);
var i__16803 = (0);
while(true){
if((i__16803 < count__16802)){
var vec__16811 = chunk__16801.cljs$core$IIndexed$_nth$arity$2(null,i__16803);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(1),null);
var temp__5802__auto___16898 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16898)){
var effect_fn_16899 = temp__5802__auto___16898;
(effect_fn_16899.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16899.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16899.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16900 = seq__16800;
var G__16901 = chunk__16801;
var G__16902 = count__16802;
var G__16903 = (i__16803 + (1));
seq__16800 = G__16900;
chunk__16801 = G__16901;
count__16802 = G__16902;
i__16803 = G__16903;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16800);
if(temp__5804__auto__){
var seq__16800__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16800__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16800__$1);
var G__16904 = cljs.core.chunk_rest(seq__16800__$1);
var G__16905 = c__5565__auto__;
var G__16906 = cljs.core.count(c__5565__auto__);
var G__16907 = (0);
seq__16800 = G__16904;
chunk__16801 = G__16905;
count__16802 = G__16906;
i__16803 = G__16907;
continue;
} else {
var vec__16814 = cljs.core.first(seq__16800__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(1),null);
var temp__5802__auto___16908 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16908)){
var effect_fn_16909 = temp__5802__auto___16908;
(effect_fn_16909.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16909.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16909.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16910 = cljs.core.next(seq__16800__$1);
var G__16911 = null;
var G__16912 = (0);
var G__16913 = (0);
seq__16800 = G__16910;
chunk__16801 = G__16911;
count__16802 = G__16912;
i__16803 = G__16913;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__16820){
var map__16821 = p__16820;
var map__16821__$1 = cljs.core.__destructure_map(map__16821);
var effect = map__16821__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16821__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16821__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__16825 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16826 = null;
var count__16827 = (0);
var i__16828 = (0);
while(true){
if((i__16828 < count__16827)){
var effect = chunk__16826.cljs$core$IIndexed$_nth$arity$2(null,i__16828);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16916 = seq__16825;
var G__16917 = chunk__16826;
var G__16918 = count__16827;
var G__16919 = (i__16828 + (1));
seq__16825 = G__16916;
chunk__16826 = G__16917;
count__16827 = G__16918;
i__16828 = G__16919;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16825);
if(temp__5804__auto__){
var seq__16825__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16825__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16825__$1);
var G__16920 = cljs.core.chunk_rest(seq__16825__$1);
var G__16921 = c__5565__auto__;
var G__16922 = cljs.core.count(c__5565__auto__);
var G__16923 = (0);
seq__16825 = G__16920;
chunk__16826 = G__16921;
count__16827 = G__16922;
i__16828 = G__16923;
continue;
} else {
var effect = cljs.core.first(seq__16825__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16924 = cljs.core.next(seq__16825__$1);
var G__16925 = null;
var G__16926 = (0);
var G__16927 = (0);
seq__16825 = G__16924;
chunk__16826 = G__16925;
count__16827 = G__16926;
i__16828 = G__16927;
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
var seq__16832 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16833 = null;
var count__16834 = (0);
var i__16835 = (0);
while(true){
if((i__16835 < count__16834)){
var vec__16854 = chunk__16833.cljs$core$IIndexed$_nth$arity$2(null,i__16835);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16854,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16928 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16928)){
var effect_fn_16929 = temp__5802__auto___16928;
(effect_fn_16929.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16929.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16929.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16930 = seq__16832;
var G__16931 = chunk__16833;
var G__16932 = count__16834;
var G__16933 = (i__16835 + (1));
seq__16832 = G__16930;
chunk__16833 = G__16931;
count__16834 = G__16932;
i__16835 = G__16933;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16832);
if(temp__5804__auto__){
var seq__16832__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16832__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16832__$1);
var G__16934 = cljs.core.chunk_rest(seq__16832__$1);
var G__16935 = c__5565__auto__;
var G__16936 = cljs.core.count(c__5565__auto__);
var G__16937 = (0);
seq__16832 = G__16934;
chunk__16833 = G__16935;
count__16834 = G__16936;
i__16835 = G__16937;
continue;
} else {
var vec__16859 = cljs.core.first(seq__16832__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16938 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16938)){
var effect_fn_16939 = temp__5802__auto___16938;
(effect_fn_16939.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16939.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16939.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16942 = cljs.core.next(seq__16832__$1);
var G__16943 = null;
var G__16944 = (0);
var G__16945 = (0);
seq__16832 = G__16942;
chunk__16833 = G__16943;
count__16834 = G__16944;
i__16835 = G__16945;
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
var seq__16864 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16865 = null;
var count__16866 = (0);
var i__16867 = (0);
while(true){
if((i__16867 < count__16866)){
var event = chunk__16865.cljs$core$IIndexed$_nth$arity$2(null,i__16867);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16946 = seq__16864;
var G__16947 = chunk__16865;
var G__16948 = count__16866;
var G__16949 = (i__16867 + (1));
seq__16864 = G__16946;
chunk__16865 = G__16947;
count__16866 = G__16948;
i__16867 = G__16949;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16864);
if(temp__5804__auto__){
var seq__16864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16864__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16864__$1);
var G__16950 = cljs.core.chunk_rest(seq__16864__$1);
var G__16951 = c__5565__auto__;
var G__16952 = cljs.core.count(c__5565__auto__);
var G__16953 = (0);
seq__16864 = G__16950;
chunk__16865 = G__16951;
count__16866 = G__16952;
i__16867 = G__16953;
continue;
} else {
var event = cljs.core.first(seq__16864__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16954 = cljs.core.next(seq__16864__$1);
var G__16955 = null;
var G__16956 = (0);
var G__16957 = (0);
seq__16864 = G__16954;
chunk__16865 = G__16955;
count__16866 = G__16956;
i__16867 = G__16957;
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
var seq__16870 = cljs.core.seq(value);
var chunk__16871 = null;
var count__16872 = (0);
var i__16873 = (0);
while(true){
if((i__16873 < count__16872)){
var event = chunk__16871.cljs$core$IIndexed$_nth$arity$2(null,i__16873);
clear_event(event);


var G__16958 = seq__16870;
var G__16959 = chunk__16871;
var G__16960 = count__16872;
var G__16961 = (i__16873 + (1));
seq__16870 = G__16958;
chunk__16871 = G__16959;
count__16872 = G__16960;
i__16873 = G__16961;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16870);
if(temp__5804__auto__){
var seq__16870__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16870__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16870__$1);
var G__16962 = cljs.core.chunk_rest(seq__16870__$1);
var G__16963 = c__5565__auto__;
var G__16964 = cljs.core.count(c__5565__auto__);
var G__16965 = (0);
seq__16870 = G__16962;
chunk__16871 = G__16963;
count__16872 = G__16964;
i__16873 = G__16965;
continue;
} else {
var event = cljs.core.first(seq__16870__$1);
clear_event(event);


var G__16966 = cljs.core.next(seq__16870__$1);
var G__16967 = null;
var G__16968 = (0);
var G__16969 = (0);
seq__16870 = G__16966;
chunk__16871 = G__16967;
count__16872 = G__16968;
i__16873 = G__16969;
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
