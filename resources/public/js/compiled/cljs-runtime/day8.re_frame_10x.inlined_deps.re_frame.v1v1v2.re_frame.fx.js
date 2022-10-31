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
var _STAR_current_trace_STAR__orig_val__16768 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16769 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16769);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16902 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16902)){
var new_db_16903 = temp__5804__auto___16902;
var fexpr__16773_16904 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16773_16904.cljs$core$IFn$_invoke$arity$1 ? fexpr__16773_16904.cljs$core$IFn$_invoke$arity$1(new_db_16903) : fexpr__16773_16904.call(null,new_db_16903));
} else {
}

var seq__16774 = cljs.core.seq(effects_without_db);
var chunk__16775 = null;
var count__16776 = (0);
var i__16777 = (0);
while(true){
if((i__16777 < count__16776)){
var vec__16794 = chunk__16775.cljs$core$IIndexed$_nth$arity$2(null,i__16777);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(1),null);
var temp__5802__auto___16907 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16907)){
var effect_fn_16908 = temp__5802__auto___16907;
(effect_fn_16908.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16908.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16908.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16909 = seq__16774;
var G__16910 = chunk__16775;
var G__16911 = count__16776;
var G__16912 = (i__16777 + (1));
seq__16774 = G__16909;
chunk__16775 = G__16910;
count__16776 = G__16911;
i__16777 = G__16912;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16774);
if(temp__5804__auto__){
var seq__16774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16774__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16774__$1);
var G__16914 = cljs.core.chunk_rest(seq__16774__$1);
var G__16915 = c__5565__auto__;
var G__16916 = cljs.core.count(c__5565__auto__);
var G__16917 = (0);
seq__16774 = G__16914;
chunk__16775 = G__16915;
count__16776 = G__16916;
i__16777 = G__16917;
continue;
} else {
var vec__16801 = cljs.core.first(seq__16774__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(1),null);
var temp__5802__auto___16918 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16918)){
var effect_fn_16919 = temp__5802__auto___16918;
(effect_fn_16919.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16919.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16919.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16920 = cljs.core.next(seq__16774__$1);
var G__16921 = null;
var G__16922 = (0);
var G__16923 = (0);
seq__16774 = G__16920;
chunk__16775 = G__16921;
count__16776 = G__16922;
i__16777 = G__16923;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__16514__auto___16924 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__16515__auto___16925 = (end__16514__auto___16924 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16515__auto___16925,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__16514__auto___16924);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16768);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16926 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16926)){
var new_db_16927 = temp__5804__auto___16926;
var fexpr__16808_16928 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16808_16928.cljs$core$IFn$_invoke$arity$1 ? fexpr__16808_16928.cljs$core$IFn$_invoke$arity$1(new_db_16927) : fexpr__16808_16928.call(null,new_db_16927));
} else {
}

var seq__16809 = cljs.core.seq(effects_without_db);
var chunk__16810 = null;
var count__16811 = (0);
var i__16812 = (0);
while(true){
if((i__16812 < count__16811)){
var vec__16824 = chunk__16810.cljs$core$IIndexed$_nth$arity$2(null,i__16812);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16824,(1),null);
var temp__5802__auto___16929 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16929)){
var effect_fn_16930 = temp__5802__auto___16929;
(effect_fn_16930.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16930.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16930.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16931 = seq__16809;
var G__16932 = chunk__16810;
var G__16933 = count__16811;
var G__16934 = (i__16812 + (1));
seq__16809 = G__16931;
chunk__16810 = G__16932;
count__16811 = G__16933;
i__16812 = G__16934;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16809);
if(temp__5804__auto__){
var seq__16809__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16809__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16809__$1);
var G__16937 = cljs.core.chunk_rest(seq__16809__$1);
var G__16938 = c__5565__auto__;
var G__16939 = cljs.core.count(c__5565__auto__);
var G__16940 = (0);
seq__16809 = G__16937;
chunk__16810 = G__16938;
count__16811 = G__16939;
i__16812 = G__16940;
continue;
} else {
var vec__16831 = cljs.core.first(seq__16809__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(1),null);
var temp__5802__auto___16941 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16941)){
var effect_fn_16942 = temp__5802__auto___16941;
(effect_fn_16942.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16942.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16942.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16943 = cljs.core.next(seq__16809__$1);
var G__16944 = null;
var G__16945 = (0);
var G__16946 = (0);
seq__16809 = G__16943;
chunk__16810 = G__16944;
count__16811 = G__16945;
i__16812 = G__16946;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__16836){
var map__16839 = p__16836;
var map__16839__$1 = cljs.core.__destructure_map(map__16839);
var effect = map__16839__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16839__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16839__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__16843 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16844 = null;
var count__16845 = (0);
var i__16846 = (0);
while(true){
if((i__16846 < count__16845)){
var effect = chunk__16844.cljs$core$IIndexed$_nth$arity$2(null,i__16846);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16947 = seq__16843;
var G__16948 = chunk__16844;
var G__16949 = count__16845;
var G__16950 = (i__16846 + (1));
seq__16843 = G__16947;
chunk__16844 = G__16948;
count__16845 = G__16949;
i__16846 = G__16950;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16843);
if(temp__5804__auto__){
var seq__16843__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16843__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16843__$1);
var G__16951 = cljs.core.chunk_rest(seq__16843__$1);
var G__16952 = c__5565__auto__;
var G__16953 = cljs.core.count(c__5565__auto__);
var G__16954 = (0);
seq__16843 = G__16951;
chunk__16844 = G__16952;
count__16845 = G__16953;
i__16846 = G__16954;
continue;
} else {
var effect = cljs.core.first(seq__16843__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16955 = cljs.core.next(seq__16843__$1);
var G__16956 = null;
var G__16957 = (0);
var G__16958 = (0);
seq__16843 = G__16955;
chunk__16844 = G__16956;
count__16845 = G__16957;
i__16846 = G__16958;
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
var seq__16852 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16853 = null;
var count__16854 = (0);
var i__16855 = (0);
while(true){
if((i__16855 < count__16854)){
var vec__16862 = chunk__16853.cljs$core$IIndexed$_nth$arity$2(null,i__16855);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16862,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16862,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16959 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16959)){
var effect_fn_16960 = temp__5802__auto___16959;
(effect_fn_16960.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16960.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16960.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16961 = seq__16852;
var G__16962 = chunk__16853;
var G__16963 = count__16854;
var G__16964 = (i__16855 + (1));
seq__16852 = G__16961;
chunk__16853 = G__16962;
count__16854 = G__16963;
i__16855 = G__16964;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16852);
if(temp__5804__auto__){
var seq__16852__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16852__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16852__$1);
var G__16965 = cljs.core.chunk_rest(seq__16852__$1);
var G__16966 = c__5565__auto__;
var G__16967 = cljs.core.count(c__5565__auto__);
var G__16968 = (0);
seq__16852 = G__16965;
chunk__16853 = G__16966;
count__16854 = G__16967;
i__16855 = G__16968;
continue;
} else {
var vec__16866 = cljs.core.first(seq__16852__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16969 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16969)){
var effect_fn_16970 = temp__5802__auto___16969;
(effect_fn_16970.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16970.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16970.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16971 = cljs.core.next(seq__16852__$1);
var G__16972 = null;
var G__16973 = (0);
var G__16974 = (0);
seq__16852 = G__16971;
chunk__16853 = G__16972;
count__16854 = G__16973;
i__16855 = G__16974;
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
var seq__16876 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16877 = null;
var count__16878 = (0);
var i__16879 = (0);
while(true){
if((i__16879 < count__16878)){
var event = chunk__16877.cljs$core$IIndexed$_nth$arity$2(null,i__16879);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16975 = seq__16876;
var G__16976 = chunk__16877;
var G__16977 = count__16878;
var G__16978 = (i__16879 + (1));
seq__16876 = G__16975;
chunk__16877 = G__16976;
count__16878 = G__16977;
i__16879 = G__16978;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16876);
if(temp__5804__auto__){
var seq__16876__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16876__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16876__$1);
var G__16979 = cljs.core.chunk_rest(seq__16876__$1);
var G__16980 = c__5565__auto__;
var G__16981 = cljs.core.count(c__5565__auto__);
var G__16982 = (0);
seq__16876 = G__16979;
chunk__16877 = G__16980;
count__16878 = G__16981;
i__16879 = G__16982;
continue;
} else {
var event = cljs.core.first(seq__16876__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16983 = cljs.core.next(seq__16876__$1);
var G__16984 = null;
var G__16985 = (0);
var G__16986 = (0);
seq__16876 = G__16983;
chunk__16877 = G__16984;
count__16878 = G__16985;
i__16879 = G__16986;
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
var seq__16882 = cljs.core.seq(value);
var chunk__16883 = null;
var count__16884 = (0);
var i__16885 = (0);
while(true){
if((i__16885 < count__16884)){
var event = chunk__16883.cljs$core$IIndexed$_nth$arity$2(null,i__16885);
clear_event(event);


var G__16987 = seq__16882;
var G__16988 = chunk__16883;
var G__16989 = count__16884;
var G__16990 = (i__16885 + (1));
seq__16882 = G__16987;
chunk__16883 = G__16988;
count__16884 = G__16989;
i__16885 = G__16990;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16882);
if(temp__5804__auto__){
var seq__16882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16882__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16882__$1);
var G__16991 = cljs.core.chunk_rest(seq__16882__$1);
var G__16992 = c__5565__auto__;
var G__16993 = cljs.core.count(c__5565__auto__);
var G__16994 = (0);
seq__16882 = G__16991;
chunk__16883 = G__16992;
count__16884 = G__16993;
i__16885 = G__16994;
continue;
} else {
var event = cljs.core.first(seq__16882__$1);
clear_event(event);


var G__16996 = cljs.core.next(seq__16882__$1);
var G__16997 = null;
var G__16998 = (0);
var G__16999 = (0);
seq__16882 = G__16996;
chunk__16883 = G__16997;
count__16884 = G__16998;
i__16885 = G__16999;
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
