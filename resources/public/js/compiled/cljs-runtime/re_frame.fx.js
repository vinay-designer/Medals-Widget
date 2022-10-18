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
var _STAR_current_trace_STAR__orig_val__20143 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20144 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20144);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20229 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20229)){
var new_db_20230 = temp__5804__auto___20229;
var fexpr__20146_20231 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20146_20231.cljs$core$IFn$_invoke$arity$1 ? fexpr__20146_20231.cljs$core$IFn$_invoke$arity$1(new_db_20230) : fexpr__20146_20231.call(null,new_db_20230));
} else {
}

var seq__20149 = cljs.core.seq(effects_without_db);
var chunk__20151 = null;
var count__20152 = (0);
var i__20153 = (0);
while(true){
if((i__20153 < count__20152)){
var vec__20165 = chunk__20151.cljs$core$IIndexed$_nth$arity$2(null,i__20153);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20165,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20165,(1),null);
var temp__5802__auto___20232 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20232)){
var effect_fn_20233 = temp__5802__auto___20232;
(effect_fn_20233.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20233.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20233.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20234 = seq__20149;
var G__20235 = chunk__20151;
var G__20236 = count__20152;
var G__20237 = (i__20153 + (1));
seq__20149 = G__20234;
chunk__20151 = G__20235;
count__20152 = G__20236;
i__20153 = G__20237;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20149);
if(temp__5804__auto__){
var seq__20149__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20149__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20149__$1);
var G__20238 = cljs.core.chunk_rest(seq__20149__$1);
var G__20239 = c__5565__auto__;
var G__20240 = cljs.core.count(c__5565__auto__);
var G__20241 = (0);
seq__20149 = G__20238;
chunk__20151 = G__20239;
count__20152 = G__20240;
i__20153 = G__20241;
continue;
} else {
var vec__20170 = cljs.core.first(seq__20149__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20170,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20170,(1),null);
var temp__5802__auto___20242 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20242)){
var effect_fn_20243 = temp__5802__auto___20242;
(effect_fn_20243.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20243.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20243.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20244 = cljs.core.next(seq__20149__$1);
var G__20245 = null;
var G__20246 = (0);
var G__20247 = (0);
seq__20149 = G__20244;
chunk__20151 = G__20245;
count__20152 = G__20246;
i__20153 = G__20247;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19816__auto___20248 = re_frame.interop.now();
var duration__19817__auto___20249 = (end__19816__auto___20248 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19817__auto___20249,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19816__auto___20248);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20143);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20250 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20250)){
var new_db_20251 = temp__5804__auto___20250;
var fexpr__20175_20252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20175_20252.cljs$core$IFn$_invoke$arity$1 ? fexpr__20175_20252.cljs$core$IFn$_invoke$arity$1(new_db_20251) : fexpr__20175_20252.call(null,new_db_20251));
} else {
}

var seq__20176 = cljs.core.seq(effects_without_db);
var chunk__20177 = null;
var count__20178 = (0);
var i__20179 = (0);
while(true){
if((i__20179 < count__20178)){
var vec__20188 = chunk__20177.cljs$core$IIndexed$_nth$arity$2(null,i__20179);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(1),null);
var temp__5802__auto___20253 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20253)){
var effect_fn_20254 = temp__5802__auto___20253;
(effect_fn_20254.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20254.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20254.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20255 = seq__20176;
var G__20256 = chunk__20177;
var G__20257 = count__20178;
var G__20258 = (i__20179 + (1));
seq__20176 = G__20255;
chunk__20177 = G__20256;
count__20178 = G__20257;
i__20179 = G__20258;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20176);
if(temp__5804__auto__){
var seq__20176__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20176__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20176__$1);
var G__20263 = cljs.core.chunk_rest(seq__20176__$1);
var G__20264 = c__5565__auto__;
var G__20265 = cljs.core.count(c__5565__auto__);
var G__20266 = (0);
seq__20176 = G__20263;
chunk__20177 = G__20264;
count__20178 = G__20265;
i__20179 = G__20266;
continue;
} else {
var vec__20191 = cljs.core.first(seq__20176__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20191,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20191,(1),null);
var temp__5802__auto___20271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20271)){
var effect_fn_20276 = temp__5802__auto___20271;
(effect_fn_20276.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20276.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20276.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20277 = cljs.core.next(seq__20176__$1);
var G__20278 = null;
var G__20279 = (0);
var G__20280 = (0);
seq__20176 = G__20277;
chunk__20177 = G__20278;
count__20178 = G__20279;
i__20179 = G__20280;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20194){
var map__20195 = p__20194;
var map__20195__$1 = cljs.core.__destructure_map(map__20195);
var effect = map__20195__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20195__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20195__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__20196 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20197 = null;
var count__20198 = (0);
var i__20199 = (0);
while(true){
if((i__20199 < count__20198)){
var effect = chunk__20197.cljs$core$IIndexed$_nth$arity$2(null,i__20199);
re_frame.fx.dispatch_later(effect);


var G__20281 = seq__20196;
var G__20282 = chunk__20197;
var G__20283 = count__20198;
var G__20284 = (i__20199 + (1));
seq__20196 = G__20281;
chunk__20197 = G__20282;
count__20198 = G__20283;
i__20199 = G__20284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20196);
if(temp__5804__auto__){
var seq__20196__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20196__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20196__$1);
var G__20285 = cljs.core.chunk_rest(seq__20196__$1);
var G__20286 = c__5565__auto__;
var G__20287 = cljs.core.count(c__5565__auto__);
var G__20288 = (0);
seq__20196 = G__20285;
chunk__20197 = G__20286;
count__20198 = G__20287;
i__20199 = G__20288;
continue;
} else {
var effect = cljs.core.first(seq__20196__$1);
re_frame.fx.dispatch_later(effect);


var G__20289 = cljs.core.next(seq__20196__$1);
var G__20290 = null;
var G__20291 = (0);
var G__20292 = (0);
seq__20196 = G__20289;
chunk__20197 = G__20290;
count__20198 = G__20291;
i__20199 = G__20292;
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
var seq__20202 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20203 = null;
var count__20204 = (0);
var i__20205 = (0);
while(true){
if((i__20205 < count__20204)){
var vec__20214 = chunk__20203.cljs$core$IIndexed$_nth$arity$2(null,i__20205);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20214,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20214,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20293 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20293)){
var effect_fn_20297 = temp__5802__auto___20293;
(effect_fn_20297.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20297.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20297.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20298 = seq__20202;
var G__20299 = chunk__20203;
var G__20300 = count__20204;
var G__20301 = (i__20205 + (1));
seq__20202 = G__20298;
chunk__20203 = G__20299;
count__20204 = G__20300;
i__20205 = G__20301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20202);
if(temp__5804__auto__){
var seq__20202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20202__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20202__$1);
var G__20302 = cljs.core.chunk_rest(seq__20202__$1);
var G__20303 = c__5565__auto__;
var G__20304 = cljs.core.count(c__5565__auto__);
var G__20305 = (0);
seq__20202 = G__20302;
chunk__20203 = G__20303;
count__20204 = G__20304;
i__20205 = G__20305;
continue;
} else {
var vec__20218 = cljs.core.first(seq__20202__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20218,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20218,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20306 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20306)){
var effect_fn_20307 = temp__5802__auto___20306;
(effect_fn_20307.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20307.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20307.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20308 = cljs.core.next(seq__20202__$1);
var G__20309 = null;
var G__20310 = (0);
var G__20311 = (0);
seq__20202 = G__20308;
chunk__20203 = G__20309;
count__20204 = G__20310;
i__20205 = G__20311;
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
var seq__20221 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20222 = null;
var count__20223 = (0);
var i__20224 = (0);
while(true){
if((i__20224 < count__20223)){
var event = chunk__20222.cljs$core$IIndexed$_nth$arity$2(null,i__20224);
re_frame.router.dispatch(event);


var G__20315 = seq__20221;
var G__20316 = chunk__20222;
var G__20317 = count__20223;
var G__20318 = (i__20224 + (1));
seq__20221 = G__20315;
chunk__20222 = G__20316;
count__20223 = G__20317;
i__20224 = G__20318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20221);
if(temp__5804__auto__){
var seq__20221__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20221__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20221__$1);
var G__20319 = cljs.core.chunk_rest(seq__20221__$1);
var G__20320 = c__5565__auto__;
var G__20321 = cljs.core.count(c__5565__auto__);
var G__20322 = (0);
seq__20221 = G__20319;
chunk__20222 = G__20320;
count__20223 = G__20321;
i__20224 = G__20322;
continue;
} else {
var event = cljs.core.first(seq__20221__$1);
re_frame.router.dispatch(event);


var G__20323 = cljs.core.next(seq__20221__$1);
var G__20324 = null;
var G__20325 = (0);
var G__20326 = (0);
seq__20221 = G__20323;
chunk__20222 = G__20324;
count__20223 = G__20325;
i__20224 = G__20326;
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
var seq__20225 = cljs.core.seq(value);
var chunk__20226 = null;
var count__20227 = (0);
var i__20228 = (0);
while(true){
if((i__20228 < count__20227)){
var event = chunk__20226.cljs$core$IIndexed$_nth$arity$2(null,i__20228);
clear_event(event);


var G__20327 = seq__20225;
var G__20328 = chunk__20226;
var G__20329 = count__20227;
var G__20330 = (i__20228 + (1));
seq__20225 = G__20327;
chunk__20226 = G__20328;
count__20227 = G__20329;
i__20228 = G__20330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20225);
if(temp__5804__auto__){
var seq__20225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20225__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20225__$1);
var G__20331 = cljs.core.chunk_rest(seq__20225__$1);
var G__20332 = c__5565__auto__;
var G__20333 = cljs.core.count(c__5565__auto__);
var G__20334 = (0);
seq__20225 = G__20331;
chunk__20226 = G__20332;
count__20227 = G__20333;
i__20228 = G__20334;
continue;
} else {
var event = cljs.core.first(seq__20225__$1);
clear_event(event);


var G__20335 = cljs.core.next(seq__20225__$1);
var G__20336 = null;
var G__20337 = (0);
var G__20338 = (0);
seq__20225 = G__20335;
chunk__20226 = G__20336;
count__20227 = G__20337;
i__20228 = G__20338;
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
