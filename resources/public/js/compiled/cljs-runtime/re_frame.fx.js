goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20130 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20131 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20131);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20271 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20271)){
var new_db_20272 = temp__5804__auto___20271;
var fexpr__20137_20273 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20137_20273.cljs$core$IFn$_invoke$arity$1 ? fexpr__20137_20273.cljs$core$IFn$_invoke$arity$1(new_db_20272) : fexpr__20137_20273.call(null,new_db_20272));
} else {
}

var seq__20139 = cljs.core.seq(effects_without_db);
var chunk__20140 = null;
var count__20141 = (0);
var i__20142 = (0);
while(true){
if((i__20142 < count__20141)){
var vec__20152 = chunk__20140.cljs$core$IIndexed$_nth$arity$2(null,i__20142);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(1),null);
var temp__5802__auto___20274 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20274)){
var effect_fn_20275 = temp__5802__auto___20274;
(effect_fn_20275.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20275.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20275.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20276 = seq__20139;
var G__20277 = chunk__20140;
var G__20278 = count__20141;
var G__20279 = (i__20142 + (1));
seq__20139 = G__20276;
chunk__20140 = G__20277;
count__20141 = G__20278;
i__20142 = G__20279;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20139);
if(temp__5804__auto__){
var seq__20139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20139__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20139__$1);
var G__20280 = cljs.core.chunk_rest(seq__20139__$1);
var G__20281 = c__5565__auto__;
var G__20282 = cljs.core.count(c__5565__auto__);
var G__20283 = (0);
seq__20139 = G__20280;
chunk__20140 = G__20281;
count__20141 = G__20282;
i__20142 = G__20283;
continue;
} else {
var vec__20156 = cljs.core.first(seq__20139__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(1),null);
var temp__5802__auto___20284 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20284)){
var effect_fn_20285 = temp__5802__auto___20284;
(effect_fn_20285.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20285.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20285.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20286 = cljs.core.next(seq__20139__$1);
var G__20287 = null;
var G__20288 = (0);
var G__20289 = (0);
seq__20139 = G__20286;
chunk__20140 = G__20287;
count__20141 = G__20288;
i__20142 = G__20289;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19829__auto___20290 = re_frame.interop.now();
var duration__19830__auto___20291 = (end__19829__auto___20290 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19830__auto___20291,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19829__auto___20290);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20130);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20292 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20292)){
var new_db_20293 = temp__5804__auto___20292;
var fexpr__20161_20294 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20161_20294.cljs$core$IFn$_invoke$arity$1 ? fexpr__20161_20294.cljs$core$IFn$_invoke$arity$1(new_db_20293) : fexpr__20161_20294.call(null,new_db_20293));
} else {
}

var seq__20162 = cljs.core.seq(effects_without_db);
var chunk__20163 = null;
var count__20164 = (0);
var i__20165 = (0);
while(true){
if((i__20165 < count__20164)){
var vec__20175 = chunk__20163.cljs$core$IIndexed$_nth$arity$2(null,i__20165);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(1),null);
var temp__5802__auto___20295 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20295)){
var effect_fn_20296 = temp__5802__auto___20295;
(effect_fn_20296.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20296.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20296.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20297 = seq__20162;
var G__20298 = chunk__20163;
var G__20299 = count__20164;
var G__20300 = (i__20165 + (1));
seq__20162 = G__20297;
chunk__20163 = G__20298;
count__20164 = G__20299;
i__20165 = G__20300;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20162);
if(temp__5804__auto__){
var seq__20162__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20162__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20162__$1);
var G__20301 = cljs.core.chunk_rest(seq__20162__$1);
var G__20302 = c__5565__auto__;
var G__20303 = cljs.core.count(c__5565__auto__);
var G__20304 = (0);
seq__20162 = G__20301;
chunk__20163 = G__20302;
count__20164 = G__20303;
i__20165 = G__20304;
continue;
} else {
var vec__20180 = cljs.core.first(seq__20162__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(1),null);
var temp__5802__auto___20305 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20305)){
var effect_fn_20306 = temp__5802__auto___20305;
(effect_fn_20306.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20306.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20306.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20307 = cljs.core.next(seq__20162__$1);
var G__20308 = null;
var G__20309 = (0);
var G__20310 = (0);
seq__20162 = G__20307;
chunk__20163 = G__20308;
count__20164 = G__20309;
i__20165 = G__20310;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20186){
var map__20187 = p__20186;
var map__20187__$1 = cljs.core.__destructure_map(map__20187);
var effect = map__20187__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20187__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20187__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20193 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20194 = null;
var count__20195 = (0);
var i__20196 = (0);
while(true){
if((i__20196 < count__20195)){
var effect = chunk__20194.cljs$core$IIndexed$_nth$arity$2(null,i__20196);
re_frame.fx.dispatch_later(effect);


var G__20311 = seq__20193;
var G__20312 = chunk__20194;
var G__20313 = count__20195;
var G__20314 = (i__20196 + (1));
seq__20193 = G__20311;
chunk__20194 = G__20312;
count__20195 = G__20313;
i__20196 = G__20314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20193);
if(temp__5804__auto__){
var seq__20193__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20193__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20193__$1);
var G__20315 = cljs.core.chunk_rest(seq__20193__$1);
var G__20316 = c__5565__auto__;
var G__20317 = cljs.core.count(c__5565__auto__);
var G__20318 = (0);
seq__20193 = G__20315;
chunk__20194 = G__20316;
count__20195 = G__20317;
i__20196 = G__20318;
continue;
} else {
var effect = cljs.core.first(seq__20193__$1);
re_frame.fx.dispatch_later(effect);


var G__20319 = cljs.core.next(seq__20193__$1);
var G__20320 = null;
var G__20321 = (0);
var G__20322 = (0);
seq__20193 = G__20319;
chunk__20194 = G__20320;
count__20195 = G__20321;
i__20196 = G__20322;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20206 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20207 = null;
var count__20208 = (0);
var i__20209 = (0);
while(true){
if((i__20209 < count__20208)){
var vec__20226 = chunk__20207.cljs$core$IIndexed$_nth$arity$2(null,i__20209);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20226,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20226,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20325 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20325)){
var effect_fn_20326 = temp__5802__auto___20325;
(effect_fn_20326.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20326.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20326.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20330 = seq__20206;
var G__20331 = chunk__20207;
var G__20332 = count__20208;
var G__20333 = (i__20209 + (1));
seq__20206 = G__20330;
chunk__20207 = G__20331;
count__20208 = G__20332;
i__20209 = G__20333;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20206);
if(temp__5804__auto__){
var seq__20206__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20206__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20206__$1);
var G__20334 = cljs.core.chunk_rest(seq__20206__$1);
var G__20335 = c__5565__auto__;
var G__20336 = cljs.core.count(c__5565__auto__);
var G__20337 = (0);
seq__20206 = G__20334;
chunk__20207 = G__20335;
count__20208 = G__20336;
i__20209 = G__20337;
continue;
} else {
var vec__20230 = cljs.core.first(seq__20206__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20230,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20230,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20338 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20338)){
var effect_fn_20339 = temp__5802__auto___20338;
(effect_fn_20339.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20339.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20339.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20340 = cljs.core.next(seq__20206__$1);
var G__20341 = null;
var G__20342 = (0);
var G__20343 = (0);
seq__20206 = G__20340;
chunk__20207 = G__20341;
count__20208 = G__20342;
i__20209 = G__20343;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20237 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20238 = null;
var count__20239 = (0);
var i__20240 = (0);
while(true){
if((i__20240 < count__20239)){
var event = chunk__20238.cljs$core$IIndexed$_nth$arity$2(null,i__20240);
re_frame.router.dispatch(event);


var G__20344 = seq__20237;
var G__20345 = chunk__20238;
var G__20346 = count__20239;
var G__20347 = (i__20240 + (1));
seq__20237 = G__20344;
chunk__20238 = G__20345;
count__20239 = G__20346;
i__20240 = G__20347;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20237);
if(temp__5804__auto__){
var seq__20237__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20237__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20237__$1);
var G__20348 = cljs.core.chunk_rest(seq__20237__$1);
var G__20349 = c__5565__auto__;
var G__20350 = cljs.core.count(c__5565__auto__);
var G__20351 = (0);
seq__20237 = G__20348;
chunk__20238 = G__20349;
count__20239 = G__20350;
i__20240 = G__20351;
continue;
} else {
var event = cljs.core.first(seq__20237__$1);
re_frame.router.dispatch(event);


var G__20352 = cljs.core.next(seq__20237__$1);
var G__20353 = null;
var G__20354 = (0);
var G__20355 = (0);
seq__20237 = G__20352;
chunk__20238 = G__20353;
count__20239 = G__20354;
i__20240 = G__20355;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20244 = cljs.core.seq(value);
var chunk__20245 = null;
var count__20246 = (0);
var i__20247 = (0);
while(true){
if((i__20247 < count__20246)){
var event = chunk__20245.cljs$core$IIndexed$_nth$arity$2(null,i__20247);
clear_event(event);


var G__20356 = seq__20244;
var G__20357 = chunk__20245;
var G__20358 = count__20246;
var G__20359 = (i__20247 + (1));
seq__20244 = G__20356;
chunk__20245 = G__20357;
count__20246 = G__20358;
i__20247 = G__20359;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20244);
if(temp__5804__auto__){
var seq__20244__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20244__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20244__$1);
var G__20360 = cljs.core.chunk_rest(seq__20244__$1);
var G__20361 = c__5565__auto__;
var G__20362 = cljs.core.count(c__5565__auto__);
var G__20363 = (0);
seq__20244 = G__20360;
chunk__20245 = G__20361;
count__20246 = G__20362;
i__20247 = G__20363;
continue;
} else {
var event = cljs.core.first(seq__20244__$1);
clear_event(event);


var G__20364 = cljs.core.next(seq__20244__$1);
var G__20365 = null;
var G__20366 = (0);
var G__20367 = (0);
seq__20244 = G__20364;
chunk__20245 = G__20365;
count__20246 = G__20366;
i__20247 = G__20367;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
