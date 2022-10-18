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
var _STAR_current_trace_STAR__orig_val__20138 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20139 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20139);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20254 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20254)){
var new_db_20255 = temp__5804__auto___20254;
var fexpr__20143_20256 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20143_20256.cljs$core$IFn$_invoke$arity$1 ? fexpr__20143_20256.cljs$core$IFn$_invoke$arity$1(new_db_20255) : fexpr__20143_20256.call(null,new_db_20255));
} else {
}

var seq__20144 = cljs.core.seq(effects_without_db);
var chunk__20145 = null;
var count__20146 = (0);
var i__20147 = (0);
while(true){
if((i__20147 < count__20146)){
var vec__20157 = chunk__20145.cljs$core$IIndexed$_nth$arity$2(null,i__20147);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157,(1),null);
var temp__5802__auto___20257 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20257)){
var effect_fn_20258 = temp__5802__auto___20257;
(effect_fn_20258.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20258.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20258.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20259 = seq__20144;
var G__20260 = chunk__20145;
var G__20261 = count__20146;
var G__20262 = (i__20147 + (1));
seq__20144 = G__20259;
chunk__20145 = G__20260;
count__20146 = G__20261;
i__20147 = G__20262;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20144);
if(temp__5804__auto__){
var seq__20144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20144__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20144__$1);
var G__20263 = cljs.core.chunk_rest(seq__20144__$1);
var G__20264 = c__5565__auto__;
var G__20265 = cljs.core.count(c__5565__auto__);
var G__20266 = (0);
seq__20144 = G__20263;
chunk__20145 = G__20264;
count__20146 = G__20265;
i__20147 = G__20266;
continue;
} else {
var vec__20160 = cljs.core.first(seq__20144__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20160,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20160,(1),null);
var temp__5802__auto___20267 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20267)){
var effect_fn_20268 = temp__5802__auto___20267;
(effect_fn_20268.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20268.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20268.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20270 = cljs.core.next(seq__20144__$1);
var G__20271 = null;
var G__20272 = (0);
var G__20273 = (0);
seq__20144 = G__20270;
chunk__20145 = G__20271;
count__20146 = G__20272;
i__20147 = G__20273;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19816__auto___20276 = re_frame.interop.now();
var duration__19817__auto___20277 = (end__19816__auto___20276 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19817__auto___20277,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19816__auto___20276);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20138);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20278 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20278)){
var new_db_20279 = temp__5804__auto___20278;
var fexpr__20166_20280 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20166_20280.cljs$core$IFn$_invoke$arity$1 ? fexpr__20166_20280.cljs$core$IFn$_invoke$arity$1(new_db_20279) : fexpr__20166_20280.call(null,new_db_20279));
} else {
}

var seq__20168 = cljs.core.seq(effects_without_db);
var chunk__20169 = null;
var count__20170 = (0);
var i__20171 = (0);
while(true){
if((i__20171 < count__20170)){
var vec__20180 = chunk__20169.cljs$core$IIndexed$_nth$arity$2(null,i__20171);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(1),null);
var temp__5802__auto___20281 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20281)){
var effect_fn_20282 = temp__5802__auto___20281;
(effect_fn_20282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20283 = seq__20168;
var G__20284 = chunk__20169;
var G__20285 = count__20170;
var G__20286 = (i__20171 + (1));
seq__20168 = G__20283;
chunk__20169 = G__20284;
count__20170 = G__20285;
i__20171 = G__20286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20168);
if(temp__5804__auto__){
var seq__20168__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20168__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20168__$1);
var G__20287 = cljs.core.chunk_rest(seq__20168__$1);
var G__20288 = c__5565__auto__;
var G__20289 = cljs.core.count(c__5565__auto__);
var G__20290 = (0);
seq__20168 = G__20287;
chunk__20169 = G__20288;
count__20170 = G__20289;
i__20171 = G__20290;
continue;
} else {
var vec__20186 = cljs.core.first(seq__20168__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(1),null);
var temp__5802__auto___20291 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20291)){
var effect_fn_20292 = temp__5802__auto___20291;
(effect_fn_20292.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20292.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20292.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20293 = cljs.core.next(seq__20168__$1);
var G__20294 = null;
var G__20295 = (0);
var G__20296 = (0);
seq__20168 = G__20293;
chunk__20169 = G__20294;
count__20170 = G__20295;
i__20171 = G__20296;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20190){
var map__20191 = p__20190;
var map__20191__$1 = cljs.core.__destructure_map(map__20191);
var effect = map__20191__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20191__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20191__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__20195 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20196 = null;
var count__20197 = (0);
var i__20198 = (0);
while(true){
if((i__20198 < count__20197)){
var effect = chunk__20196.cljs$core$IIndexed$_nth$arity$2(null,i__20198);
re_frame.fx.dispatch_later(effect);


var G__20298 = seq__20195;
var G__20299 = chunk__20196;
var G__20300 = count__20197;
var G__20301 = (i__20198 + (1));
seq__20195 = G__20298;
chunk__20196 = G__20299;
count__20197 = G__20300;
i__20198 = G__20301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20195);
if(temp__5804__auto__){
var seq__20195__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20195__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20195__$1);
var G__20302 = cljs.core.chunk_rest(seq__20195__$1);
var G__20303 = c__5565__auto__;
var G__20304 = cljs.core.count(c__5565__auto__);
var G__20305 = (0);
seq__20195 = G__20302;
chunk__20196 = G__20303;
count__20197 = G__20304;
i__20198 = G__20305;
continue;
} else {
var effect = cljs.core.first(seq__20195__$1);
re_frame.fx.dispatch_later(effect);


var G__20306 = cljs.core.next(seq__20195__$1);
var G__20307 = null;
var G__20308 = (0);
var G__20309 = (0);
seq__20195 = G__20306;
chunk__20196 = G__20307;
count__20197 = G__20308;
i__20198 = G__20309;
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
var seq__20205 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20206 = null;
var count__20207 = (0);
var i__20208 = (0);
while(true){
if((i__20208 < count__20207)){
var vec__20221 = chunk__20206.cljs$core$IIndexed$_nth$arity$2(null,i__20208);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20310 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20310)){
var effect_fn_20311 = temp__5802__auto___20310;
(effect_fn_20311.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20311.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20311.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20312 = seq__20205;
var G__20313 = chunk__20206;
var G__20314 = count__20207;
var G__20315 = (i__20208 + (1));
seq__20205 = G__20312;
chunk__20206 = G__20313;
count__20207 = G__20314;
i__20208 = G__20315;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20205);
if(temp__5804__auto__){
var seq__20205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20205__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20205__$1);
var G__20316 = cljs.core.chunk_rest(seq__20205__$1);
var G__20317 = c__5565__auto__;
var G__20318 = cljs.core.count(c__5565__auto__);
var G__20319 = (0);
seq__20205 = G__20316;
chunk__20206 = G__20317;
count__20207 = G__20318;
i__20208 = G__20319;
continue;
} else {
var vec__20224 = cljs.core.first(seq__20205__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20320 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20320)){
var effect_fn_20321 = temp__5802__auto___20320;
(effect_fn_20321.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20321.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20321.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20322 = cljs.core.next(seq__20205__$1);
var G__20323 = null;
var G__20324 = (0);
var G__20325 = (0);
seq__20205 = G__20322;
chunk__20206 = G__20323;
count__20207 = G__20324;
i__20208 = G__20325;
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
var seq__20227 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20228 = null;
var count__20229 = (0);
var i__20230 = (0);
while(true){
if((i__20230 < count__20229)){
var event = chunk__20228.cljs$core$IIndexed$_nth$arity$2(null,i__20230);
re_frame.router.dispatch(event);


var G__20326 = seq__20227;
var G__20327 = chunk__20228;
var G__20328 = count__20229;
var G__20329 = (i__20230 + (1));
seq__20227 = G__20326;
chunk__20228 = G__20327;
count__20229 = G__20328;
i__20230 = G__20329;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20227);
if(temp__5804__auto__){
var seq__20227__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20227__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20227__$1);
var G__20330 = cljs.core.chunk_rest(seq__20227__$1);
var G__20331 = c__5565__auto__;
var G__20332 = cljs.core.count(c__5565__auto__);
var G__20333 = (0);
seq__20227 = G__20330;
chunk__20228 = G__20331;
count__20229 = G__20332;
i__20230 = G__20333;
continue;
} else {
var event = cljs.core.first(seq__20227__$1);
re_frame.router.dispatch(event);


var G__20334 = cljs.core.next(seq__20227__$1);
var G__20335 = null;
var G__20336 = (0);
var G__20337 = (0);
seq__20227 = G__20334;
chunk__20228 = G__20335;
count__20229 = G__20336;
i__20230 = G__20337;
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
var seq__20237 = cljs.core.seq(value);
var chunk__20238 = null;
var count__20239 = (0);
var i__20240 = (0);
while(true){
if((i__20240 < count__20239)){
var event = chunk__20238.cljs$core$IIndexed$_nth$arity$2(null,i__20240);
clear_event(event);


var G__20338 = seq__20237;
var G__20339 = chunk__20238;
var G__20340 = count__20239;
var G__20341 = (i__20240 + (1));
seq__20237 = G__20338;
chunk__20238 = G__20339;
count__20239 = G__20340;
i__20240 = G__20341;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20237);
if(temp__5804__auto__){
var seq__20237__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20237__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20237__$1);
var G__20342 = cljs.core.chunk_rest(seq__20237__$1);
var G__20343 = c__5565__auto__;
var G__20344 = cljs.core.count(c__5565__auto__);
var G__20345 = (0);
seq__20237 = G__20342;
chunk__20238 = G__20343;
count__20239 = G__20344;
i__20240 = G__20345;
continue;
} else {
var event = cljs.core.first(seq__20237__$1);
clear_event(event);


var G__20346 = cljs.core.next(seq__20237__$1);
var G__20347 = null;
var G__20348 = (0);
var G__20349 = (0);
seq__20237 = G__20346;
chunk__20238 = G__20347;
count__20239 = G__20348;
i__20240 = G__20349;
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
