goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32320 = arguments.length;
var i__5767__auto___32321 = (0);
while(true){
if((i__5767__auto___32321 < len__5766__auto___32320)){
args__5772__auto__.push((arguments[i__5767__auto___32321]));

var G__32322 = (i__5767__auto___32321 + (1));
i__5767__auto___32321 = G__32322;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq31854){
var G__31855 = cljs.core.first(seq31854);
var seq31854__$1 = cljs.core.next(seq31854);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31855,seq31854__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__31856 = cljs.core.seq(sources);
var chunk__31857 = null;
var count__31858 = (0);
var i__31859 = (0);
while(true){
if((i__31859 < count__31858)){
var map__31870 = chunk__31857.cljs$core$IIndexed$_nth$arity$2(null,i__31859);
var map__31870__$1 = cljs.core.__destructure_map(map__31870);
var src = map__31870__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31870__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31870__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31870__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31870__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31872){var e_32326 = e31872;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32326);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32326.message)].join('')));
}

var G__32327 = seq__31856;
var G__32328 = chunk__31857;
var G__32329 = count__31858;
var G__32330 = (i__31859 + (1));
seq__31856 = G__32327;
chunk__31857 = G__32328;
count__31858 = G__32329;
i__31859 = G__32330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31856);
if(temp__5804__auto__){
var seq__31856__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31856__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31856__$1);
var G__32331 = cljs.core.chunk_rest(seq__31856__$1);
var G__32332 = c__5565__auto__;
var G__32333 = cljs.core.count(c__5565__auto__);
var G__32334 = (0);
seq__31856 = G__32331;
chunk__31857 = G__32332;
count__31858 = G__32333;
i__31859 = G__32334;
continue;
} else {
var map__31873 = cljs.core.first(seq__31856__$1);
var map__31873__$1 = cljs.core.__destructure_map(map__31873);
var src = map__31873__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31874){var e_32335 = e31874;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32335);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32335.message)].join('')));
}

var G__32336 = cljs.core.next(seq__31856__$1);
var G__32337 = null;
var G__32338 = (0);
var G__32339 = (0);
seq__31856 = G__32336;
chunk__31857 = G__32337;
count__31858 = G__32338;
i__31859 = G__32339;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__31875 = cljs.core.seq(js_requires);
var chunk__31876 = null;
var count__31877 = (0);
var i__31878 = (0);
while(true){
if((i__31878 < count__31877)){
var js_ns = chunk__31876.cljs$core$IIndexed$_nth$arity$2(null,i__31878);
var require_str_32340 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32340);


var G__32341 = seq__31875;
var G__32342 = chunk__31876;
var G__32343 = count__31877;
var G__32344 = (i__31878 + (1));
seq__31875 = G__32341;
chunk__31876 = G__32342;
count__31877 = G__32343;
i__31878 = G__32344;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31875);
if(temp__5804__auto__){
var seq__31875__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31875__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31875__$1);
var G__32345 = cljs.core.chunk_rest(seq__31875__$1);
var G__32346 = c__5565__auto__;
var G__32347 = cljs.core.count(c__5565__auto__);
var G__32348 = (0);
seq__31875 = G__32345;
chunk__31876 = G__32346;
count__31877 = G__32347;
i__31878 = G__32348;
continue;
} else {
var js_ns = cljs.core.first(seq__31875__$1);
var require_str_32349 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32349);


var G__32350 = cljs.core.next(seq__31875__$1);
var G__32351 = null;
var G__32352 = (0);
var G__32353 = (0);
seq__31875 = G__32350;
chunk__31876 = G__32351;
count__31877 = G__32352;
i__31878 = G__32353;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__31881){
var map__31882 = p__31881;
var map__31882__$1 = cljs.core.__destructure_map(map__31882);
var msg = map__31882__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31882__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31882__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31883(s__31884){
return (new cljs.core.LazySeq(null,(function (){
var s__31884__$1 = s__31884;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31884__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__31891 = cljs.core.first(xs__6360__auto__);
var map__31891__$1 = cljs.core.__destructure_map(map__31891);
var src = map__31891__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31891__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__31884__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31882,map__31882__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31883_$_iter__31885(s__31886){
return (new cljs.core.LazySeq(null,((function (s__31884__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31882,map__31882__$1,msg,info,reload_info){
return (function (){
var s__31886__$1 = s__31886;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31886__$1);
if(temp__5804__auto____$1){
var s__31886__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31886__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__31886__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__31888 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__31887 = (0);
while(true){
if((i__31887 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__31887);
cljs.core.chunk_append(b__31888,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32356 = (i__31887 + (1));
i__31887 = G__32356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31888),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31883_$_iter__31885(cljs.core.chunk_rest(s__31886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31888),null);
}
} else {
var warning = cljs.core.first(s__31886__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31883_$_iter__31885(cljs.core.rest(s__31886__$2)));
}
} else {
return null;
}
break;
}
});})(s__31884__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31882,map__31882__$1,msg,info,reload_info))
,null,null));
});})(s__31884__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31882,map__31882__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31883(cljs.core.rest(s__31884__$1)));
} else {
var G__32358 = cljs.core.rest(s__31884__$1);
s__31884__$1 = G__32358;
continue;
}
} else {
var G__32359 = cljs.core.rest(s__31884__$1);
s__31884__$1 = G__32359;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__31892_32360 = cljs.core.seq(warnings);
var chunk__31893_32361 = null;
var count__31894_32362 = (0);
var i__31895_32363 = (0);
while(true){
if((i__31895_32363 < count__31894_32362)){
var map__31898_32364 = chunk__31893_32361.cljs$core$IIndexed$_nth$arity$2(null,i__31895_32363);
var map__31898_32365__$1 = cljs.core.__destructure_map(map__31898_32364);
var w_32366 = map__31898_32365__$1;
var msg_32367__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32365__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32365__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32365__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32365__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32370)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32368),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32369),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32367__$1)].join(''));


var G__32373 = seq__31892_32360;
var G__32374 = chunk__31893_32361;
var G__32375 = count__31894_32362;
var G__32376 = (i__31895_32363 + (1));
seq__31892_32360 = G__32373;
chunk__31893_32361 = G__32374;
count__31894_32362 = G__32375;
i__31895_32363 = G__32376;
continue;
} else {
var temp__5804__auto___32377 = cljs.core.seq(seq__31892_32360);
if(temp__5804__auto___32377){
var seq__31892_32378__$1 = temp__5804__auto___32377;
if(cljs.core.chunked_seq_QMARK_(seq__31892_32378__$1)){
var c__5565__auto___32379 = cljs.core.chunk_first(seq__31892_32378__$1);
var G__32380 = cljs.core.chunk_rest(seq__31892_32378__$1);
var G__32381 = c__5565__auto___32379;
var G__32382 = cljs.core.count(c__5565__auto___32379);
var G__32383 = (0);
seq__31892_32360 = G__32380;
chunk__31893_32361 = G__32381;
count__31894_32362 = G__32382;
i__31895_32363 = G__32383;
continue;
} else {
var map__31899_32384 = cljs.core.first(seq__31892_32378__$1);
var map__31899_32385__$1 = cljs.core.__destructure_map(map__31899_32384);
var w_32386 = map__31899_32385__$1;
var msg_32387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32385__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32385__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32390)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32388),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32389),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32387__$1)].join(''));


var G__32391 = cljs.core.next(seq__31892_32378__$1);
var G__32392 = null;
var G__32393 = (0);
var G__32394 = (0);
seq__31892_32360 = G__32391;
chunk__31893_32361 = G__32392;
count__31894_32362 = G__32393;
i__31895_32363 = G__32394;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__31880_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__31880_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__31910){
var map__31911 = p__31910;
var map__31911__$1 = cljs.core.__destructure_map(map__31911);
var msg = map__31911__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__31912 = cljs.core.seq(updates);
var chunk__31914 = null;
var count__31915 = (0);
var i__31916 = (0);
while(true){
if((i__31916 < count__31915)){
var path = chunk__31914.cljs$core$IIndexed$_nth$arity$2(null,i__31916);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32099_32397 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32103_32398 = null;
var count__32104_32399 = (0);
var i__32105_32400 = (0);
while(true){
if((i__32105_32400 < count__32104_32399)){
var node_32401 = chunk__32103_32398.cljs$core$IIndexed$_nth$arity$2(null,i__32105_32400);
if(cljs.core.not(node_32401.shadow$old)){
var path_match_32404 = shadow.cljs.devtools.client.browser.match_paths(node_32401.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32404)){
var new_link_32407 = (function (){var G__32144 = node_32401.cloneNode(true);
G__32144.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32404),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32144;
})();
(node_32401.shadow$old = true);

(new_link_32407.onload = ((function (seq__32099_32397,chunk__32103_32398,count__32104_32399,i__32105_32400,seq__31912,chunk__31914,count__31915,i__31916,new_link_32407,path_match_32404,node_32401,path,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32145_32408 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32147_32409 = null;
var count__32148_32410 = (0);
var i__32149_32411 = (0);
while(true){
if((i__32149_32411 < count__32148_32410)){
var map__32158_32413 = chunk__32147_32409.cljs$core$IIndexed$_nth$arity$2(null,i__32149_32411);
var map__32158_32414__$1 = cljs.core.__destructure_map(map__32158_32413);
var task_32415 = map__32158_32414__$1;
var fn_str_32416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32158_32414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32158_32414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32418 = goog.getObjectByName(fn_str_32416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32417)].join(''));

(fn_obj_32418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32418.cljs$core$IFn$_invoke$arity$2(path,new_link_32407) : fn_obj_32418.call(null,path,new_link_32407));


var G__32419 = seq__32145_32408;
var G__32420 = chunk__32147_32409;
var G__32421 = count__32148_32410;
var G__32422 = (i__32149_32411 + (1));
seq__32145_32408 = G__32419;
chunk__32147_32409 = G__32420;
count__32148_32410 = G__32421;
i__32149_32411 = G__32422;
continue;
} else {
var temp__5804__auto___32423 = cljs.core.seq(seq__32145_32408);
if(temp__5804__auto___32423){
var seq__32145_32424__$1 = temp__5804__auto___32423;
if(cljs.core.chunked_seq_QMARK_(seq__32145_32424__$1)){
var c__5565__auto___32425 = cljs.core.chunk_first(seq__32145_32424__$1);
var G__32426 = cljs.core.chunk_rest(seq__32145_32424__$1);
var G__32427 = c__5565__auto___32425;
var G__32428 = cljs.core.count(c__5565__auto___32425);
var G__32429 = (0);
seq__32145_32408 = G__32426;
chunk__32147_32409 = G__32427;
count__32148_32410 = G__32428;
i__32149_32411 = G__32429;
continue;
} else {
var map__32160_32430 = cljs.core.first(seq__32145_32424__$1);
var map__32160_32431__$1 = cljs.core.__destructure_map(map__32160_32430);
var task_32432 = map__32160_32431__$1;
var fn_str_32433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32160_32431__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32160_32431__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32435 = goog.getObjectByName(fn_str_32433,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32434)].join(''));

(fn_obj_32435.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32435.cljs$core$IFn$_invoke$arity$2(path,new_link_32407) : fn_obj_32435.call(null,path,new_link_32407));


var G__32437 = cljs.core.next(seq__32145_32424__$1);
var G__32438 = null;
var G__32439 = (0);
var G__32440 = (0);
seq__32145_32408 = G__32437;
chunk__32147_32409 = G__32438;
count__32148_32410 = G__32439;
i__32149_32411 = G__32440;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32401);
});})(seq__32099_32397,chunk__32103_32398,count__32104_32399,i__32105_32400,seq__31912,chunk__31914,count__31915,i__31916,new_link_32407,path_match_32404,node_32401,path,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32404], 0));

goog.dom.insertSiblingAfter(new_link_32407,node_32401);


var G__32441 = seq__32099_32397;
var G__32442 = chunk__32103_32398;
var G__32443 = count__32104_32399;
var G__32444 = (i__32105_32400 + (1));
seq__32099_32397 = G__32441;
chunk__32103_32398 = G__32442;
count__32104_32399 = G__32443;
i__32105_32400 = G__32444;
continue;
} else {
var G__32445 = seq__32099_32397;
var G__32446 = chunk__32103_32398;
var G__32447 = count__32104_32399;
var G__32448 = (i__32105_32400 + (1));
seq__32099_32397 = G__32445;
chunk__32103_32398 = G__32446;
count__32104_32399 = G__32447;
i__32105_32400 = G__32448;
continue;
}
} else {
var G__32449 = seq__32099_32397;
var G__32450 = chunk__32103_32398;
var G__32451 = count__32104_32399;
var G__32452 = (i__32105_32400 + (1));
seq__32099_32397 = G__32449;
chunk__32103_32398 = G__32450;
count__32104_32399 = G__32451;
i__32105_32400 = G__32452;
continue;
}
} else {
var temp__5804__auto___32453 = cljs.core.seq(seq__32099_32397);
if(temp__5804__auto___32453){
var seq__32099_32454__$1 = temp__5804__auto___32453;
if(cljs.core.chunked_seq_QMARK_(seq__32099_32454__$1)){
var c__5565__auto___32456 = cljs.core.chunk_first(seq__32099_32454__$1);
var G__32457 = cljs.core.chunk_rest(seq__32099_32454__$1);
var G__32458 = c__5565__auto___32456;
var G__32459 = cljs.core.count(c__5565__auto___32456);
var G__32460 = (0);
seq__32099_32397 = G__32457;
chunk__32103_32398 = G__32458;
count__32104_32399 = G__32459;
i__32105_32400 = G__32460;
continue;
} else {
var node_32464 = cljs.core.first(seq__32099_32454__$1);
if(cljs.core.not(node_32464.shadow$old)){
var path_match_32465 = shadow.cljs.devtools.client.browser.match_paths(node_32464.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32465)){
var new_link_32466 = (function (){var G__32163 = node_32464.cloneNode(true);
G__32163.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32465),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32163;
})();
(node_32464.shadow$old = true);

(new_link_32466.onload = ((function (seq__32099_32397,chunk__32103_32398,count__32104_32399,i__32105_32400,seq__31912,chunk__31914,count__31915,i__31916,new_link_32466,path_match_32465,node_32464,seq__32099_32454__$1,temp__5804__auto___32453,path,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32166_32468 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32168_32469 = null;
var count__32169_32470 = (0);
var i__32170_32471 = (0);
while(true){
if((i__32170_32471 < count__32169_32470)){
var map__32175_32473 = chunk__32168_32469.cljs$core$IIndexed$_nth$arity$2(null,i__32170_32471);
var map__32175_32474__$1 = cljs.core.__destructure_map(map__32175_32473);
var task_32475 = map__32175_32474__$1;
var fn_str_32476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32175_32474__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32175_32474__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32479 = goog.getObjectByName(fn_str_32476,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32477)].join(''));

(fn_obj_32479.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32479.cljs$core$IFn$_invoke$arity$2(path,new_link_32466) : fn_obj_32479.call(null,path,new_link_32466));


var G__32480 = seq__32166_32468;
var G__32481 = chunk__32168_32469;
var G__32482 = count__32169_32470;
var G__32483 = (i__32170_32471 + (1));
seq__32166_32468 = G__32480;
chunk__32168_32469 = G__32481;
count__32169_32470 = G__32482;
i__32170_32471 = G__32483;
continue;
} else {
var temp__5804__auto___32484__$1 = cljs.core.seq(seq__32166_32468);
if(temp__5804__auto___32484__$1){
var seq__32166_32485__$1 = temp__5804__auto___32484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32166_32485__$1)){
var c__5565__auto___32486 = cljs.core.chunk_first(seq__32166_32485__$1);
var G__32487 = cljs.core.chunk_rest(seq__32166_32485__$1);
var G__32488 = c__5565__auto___32486;
var G__32489 = cljs.core.count(c__5565__auto___32486);
var G__32490 = (0);
seq__32166_32468 = G__32487;
chunk__32168_32469 = G__32488;
count__32169_32470 = G__32489;
i__32170_32471 = G__32490;
continue;
} else {
var map__32178_32491 = cljs.core.first(seq__32166_32485__$1);
var map__32178_32492__$1 = cljs.core.__destructure_map(map__32178_32491);
var task_32493 = map__32178_32492__$1;
var fn_str_32494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32178_32492__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32178_32492__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32496 = goog.getObjectByName(fn_str_32494,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32495)].join(''));

(fn_obj_32496.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32496.cljs$core$IFn$_invoke$arity$2(path,new_link_32466) : fn_obj_32496.call(null,path,new_link_32466));


var G__32497 = cljs.core.next(seq__32166_32485__$1);
var G__32498 = null;
var G__32499 = (0);
var G__32500 = (0);
seq__32166_32468 = G__32497;
chunk__32168_32469 = G__32498;
count__32169_32470 = G__32499;
i__32170_32471 = G__32500;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32464);
});})(seq__32099_32397,chunk__32103_32398,count__32104_32399,i__32105_32400,seq__31912,chunk__31914,count__31915,i__31916,new_link_32466,path_match_32465,node_32464,seq__32099_32454__$1,temp__5804__auto___32453,path,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32465], 0));

goog.dom.insertSiblingAfter(new_link_32466,node_32464);


var G__32501 = cljs.core.next(seq__32099_32454__$1);
var G__32502 = null;
var G__32503 = (0);
var G__32504 = (0);
seq__32099_32397 = G__32501;
chunk__32103_32398 = G__32502;
count__32104_32399 = G__32503;
i__32105_32400 = G__32504;
continue;
} else {
var G__32505 = cljs.core.next(seq__32099_32454__$1);
var G__32506 = null;
var G__32507 = (0);
var G__32508 = (0);
seq__32099_32397 = G__32505;
chunk__32103_32398 = G__32506;
count__32104_32399 = G__32507;
i__32105_32400 = G__32508;
continue;
}
} else {
var G__32509 = cljs.core.next(seq__32099_32454__$1);
var G__32510 = null;
var G__32511 = (0);
var G__32512 = (0);
seq__32099_32397 = G__32509;
chunk__32103_32398 = G__32510;
count__32104_32399 = G__32511;
i__32105_32400 = G__32512;
continue;
}
}
} else {
}
}
break;
}


var G__32513 = seq__31912;
var G__32514 = chunk__31914;
var G__32515 = count__31915;
var G__32516 = (i__31916 + (1));
seq__31912 = G__32513;
chunk__31914 = G__32514;
count__31915 = G__32515;
i__31916 = G__32516;
continue;
} else {
var G__32517 = seq__31912;
var G__32518 = chunk__31914;
var G__32519 = count__31915;
var G__32520 = (i__31916 + (1));
seq__31912 = G__32517;
chunk__31914 = G__32518;
count__31915 = G__32519;
i__31916 = G__32520;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31912);
if(temp__5804__auto__){
var seq__31912__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31912__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31912__$1);
var G__32521 = cljs.core.chunk_rest(seq__31912__$1);
var G__32522 = c__5565__auto__;
var G__32523 = cljs.core.count(c__5565__auto__);
var G__32524 = (0);
seq__31912 = G__32521;
chunk__31914 = G__32522;
count__31915 = G__32523;
i__31916 = G__32524;
continue;
} else {
var path = cljs.core.first(seq__31912__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32179_32525 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32183_32526 = null;
var count__32184_32527 = (0);
var i__32185_32528 = (0);
while(true){
if((i__32185_32528 < count__32184_32527)){
var node_32529 = chunk__32183_32526.cljs$core$IIndexed$_nth$arity$2(null,i__32185_32528);
if(cljs.core.not(node_32529.shadow$old)){
var path_match_32530 = shadow.cljs.devtools.client.browser.match_paths(node_32529.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32530)){
var new_link_32531 = (function (){var G__32234 = node_32529.cloneNode(true);
G__32234.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32530),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32234;
})();
(node_32529.shadow$old = true);

(new_link_32531.onload = ((function (seq__32179_32525,chunk__32183_32526,count__32184_32527,i__32185_32528,seq__31912,chunk__31914,count__31915,i__31916,new_link_32531,path_match_32530,node_32529,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32235_32532 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32237_32533 = null;
var count__32238_32534 = (0);
var i__32239_32535 = (0);
while(true){
if((i__32239_32535 < count__32238_32534)){
var map__32256_32536 = chunk__32237_32533.cljs$core$IIndexed$_nth$arity$2(null,i__32239_32535);
var map__32256_32537__$1 = cljs.core.__destructure_map(map__32256_32536);
var task_32538 = map__32256_32537__$1;
var fn_str_32539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32256_32537__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32256_32537__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32541 = goog.getObjectByName(fn_str_32539,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32540)].join(''));

(fn_obj_32541.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32541.cljs$core$IFn$_invoke$arity$2(path,new_link_32531) : fn_obj_32541.call(null,path,new_link_32531));


var G__32542 = seq__32235_32532;
var G__32543 = chunk__32237_32533;
var G__32544 = count__32238_32534;
var G__32545 = (i__32239_32535 + (1));
seq__32235_32532 = G__32542;
chunk__32237_32533 = G__32543;
count__32238_32534 = G__32544;
i__32239_32535 = G__32545;
continue;
} else {
var temp__5804__auto___32546__$1 = cljs.core.seq(seq__32235_32532);
if(temp__5804__auto___32546__$1){
var seq__32235_32547__$1 = temp__5804__auto___32546__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32235_32547__$1)){
var c__5565__auto___32548 = cljs.core.chunk_first(seq__32235_32547__$1);
var G__32549 = cljs.core.chunk_rest(seq__32235_32547__$1);
var G__32550 = c__5565__auto___32548;
var G__32551 = cljs.core.count(c__5565__auto___32548);
var G__32552 = (0);
seq__32235_32532 = G__32549;
chunk__32237_32533 = G__32550;
count__32238_32534 = G__32551;
i__32239_32535 = G__32552;
continue;
} else {
var map__32266_32553 = cljs.core.first(seq__32235_32547__$1);
var map__32266_32554__$1 = cljs.core.__destructure_map(map__32266_32553);
var task_32555 = map__32266_32554__$1;
var fn_str_32556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32266_32554__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32266_32554__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32558 = goog.getObjectByName(fn_str_32556,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32557)].join(''));

(fn_obj_32558.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32558.cljs$core$IFn$_invoke$arity$2(path,new_link_32531) : fn_obj_32558.call(null,path,new_link_32531));


var G__32559 = cljs.core.next(seq__32235_32547__$1);
var G__32560 = null;
var G__32561 = (0);
var G__32562 = (0);
seq__32235_32532 = G__32559;
chunk__32237_32533 = G__32560;
count__32238_32534 = G__32561;
i__32239_32535 = G__32562;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32529);
});})(seq__32179_32525,chunk__32183_32526,count__32184_32527,i__32185_32528,seq__31912,chunk__31914,count__31915,i__31916,new_link_32531,path_match_32530,node_32529,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32530], 0));

goog.dom.insertSiblingAfter(new_link_32531,node_32529);


var G__32563 = seq__32179_32525;
var G__32564 = chunk__32183_32526;
var G__32565 = count__32184_32527;
var G__32566 = (i__32185_32528 + (1));
seq__32179_32525 = G__32563;
chunk__32183_32526 = G__32564;
count__32184_32527 = G__32565;
i__32185_32528 = G__32566;
continue;
} else {
var G__32567 = seq__32179_32525;
var G__32568 = chunk__32183_32526;
var G__32569 = count__32184_32527;
var G__32570 = (i__32185_32528 + (1));
seq__32179_32525 = G__32567;
chunk__32183_32526 = G__32568;
count__32184_32527 = G__32569;
i__32185_32528 = G__32570;
continue;
}
} else {
var G__32571 = seq__32179_32525;
var G__32572 = chunk__32183_32526;
var G__32573 = count__32184_32527;
var G__32574 = (i__32185_32528 + (1));
seq__32179_32525 = G__32571;
chunk__32183_32526 = G__32572;
count__32184_32527 = G__32573;
i__32185_32528 = G__32574;
continue;
}
} else {
var temp__5804__auto___32575__$1 = cljs.core.seq(seq__32179_32525);
if(temp__5804__auto___32575__$1){
var seq__32179_32576__$1 = temp__5804__auto___32575__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32179_32576__$1)){
var c__5565__auto___32577 = cljs.core.chunk_first(seq__32179_32576__$1);
var G__32578 = cljs.core.chunk_rest(seq__32179_32576__$1);
var G__32579 = c__5565__auto___32577;
var G__32580 = cljs.core.count(c__5565__auto___32577);
var G__32581 = (0);
seq__32179_32525 = G__32578;
chunk__32183_32526 = G__32579;
count__32184_32527 = G__32580;
i__32185_32528 = G__32581;
continue;
} else {
var node_32582 = cljs.core.first(seq__32179_32576__$1);
if(cljs.core.not(node_32582.shadow$old)){
var path_match_32583 = shadow.cljs.devtools.client.browser.match_paths(node_32582.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32583)){
var new_link_32584 = (function (){var G__32270 = node_32582.cloneNode(true);
G__32270.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32583),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32270;
})();
(node_32582.shadow$old = true);

(new_link_32584.onload = ((function (seq__32179_32525,chunk__32183_32526,count__32184_32527,i__32185_32528,seq__31912,chunk__31914,count__31915,i__31916,new_link_32584,path_match_32583,node_32582,seq__32179_32576__$1,temp__5804__auto___32575__$1,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32272_32585 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32274_32586 = null;
var count__32275_32587 = (0);
var i__32276_32588 = (0);
while(true){
if((i__32276_32588 < count__32275_32587)){
var map__32280_32589 = chunk__32274_32586.cljs$core$IIndexed$_nth$arity$2(null,i__32276_32588);
var map__32280_32590__$1 = cljs.core.__destructure_map(map__32280_32589);
var task_32591 = map__32280_32590__$1;
var fn_str_32592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32280_32590__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32280_32590__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32597 = goog.getObjectByName(fn_str_32592,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32593)].join(''));

(fn_obj_32597.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32597.cljs$core$IFn$_invoke$arity$2(path,new_link_32584) : fn_obj_32597.call(null,path,new_link_32584));


var G__32598 = seq__32272_32585;
var G__32599 = chunk__32274_32586;
var G__32600 = count__32275_32587;
var G__32601 = (i__32276_32588 + (1));
seq__32272_32585 = G__32598;
chunk__32274_32586 = G__32599;
count__32275_32587 = G__32600;
i__32276_32588 = G__32601;
continue;
} else {
var temp__5804__auto___32602__$2 = cljs.core.seq(seq__32272_32585);
if(temp__5804__auto___32602__$2){
var seq__32272_32603__$1 = temp__5804__auto___32602__$2;
if(cljs.core.chunked_seq_QMARK_(seq__32272_32603__$1)){
var c__5565__auto___32604 = cljs.core.chunk_first(seq__32272_32603__$1);
var G__32605 = cljs.core.chunk_rest(seq__32272_32603__$1);
var G__32606 = c__5565__auto___32604;
var G__32607 = cljs.core.count(c__5565__auto___32604);
var G__32608 = (0);
seq__32272_32585 = G__32605;
chunk__32274_32586 = G__32606;
count__32275_32587 = G__32607;
i__32276_32588 = G__32608;
continue;
} else {
var map__32281_32609 = cljs.core.first(seq__32272_32603__$1);
var map__32281_32610__$1 = cljs.core.__destructure_map(map__32281_32609);
var task_32611 = map__32281_32610__$1;
var fn_str_32612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32281_32610__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32281_32610__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32614 = goog.getObjectByName(fn_str_32612,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32613)].join(''));

(fn_obj_32614.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32614.cljs$core$IFn$_invoke$arity$2(path,new_link_32584) : fn_obj_32614.call(null,path,new_link_32584));


var G__32615 = cljs.core.next(seq__32272_32603__$1);
var G__32616 = null;
var G__32617 = (0);
var G__32618 = (0);
seq__32272_32585 = G__32615;
chunk__32274_32586 = G__32616;
count__32275_32587 = G__32617;
i__32276_32588 = G__32618;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32582);
});})(seq__32179_32525,chunk__32183_32526,count__32184_32527,i__32185_32528,seq__31912,chunk__31914,count__31915,i__31916,new_link_32584,path_match_32583,node_32582,seq__32179_32576__$1,temp__5804__auto___32575__$1,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32583], 0));

goog.dom.insertSiblingAfter(new_link_32584,node_32582);


var G__32619 = cljs.core.next(seq__32179_32576__$1);
var G__32620 = null;
var G__32621 = (0);
var G__32622 = (0);
seq__32179_32525 = G__32619;
chunk__32183_32526 = G__32620;
count__32184_32527 = G__32621;
i__32185_32528 = G__32622;
continue;
} else {
var G__32623 = cljs.core.next(seq__32179_32576__$1);
var G__32624 = null;
var G__32625 = (0);
var G__32626 = (0);
seq__32179_32525 = G__32623;
chunk__32183_32526 = G__32624;
count__32184_32527 = G__32625;
i__32185_32528 = G__32626;
continue;
}
} else {
var G__32627 = cljs.core.next(seq__32179_32576__$1);
var G__32628 = null;
var G__32629 = (0);
var G__32630 = (0);
seq__32179_32525 = G__32627;
chunk__32183_32526 = G__32628;
count__32184_32527 = G__32629;
i__32185_32528 = G__32630;
continue;
}
}
} else {
}
}
break;
}


var G__32631 = cljs.core.next(seq__31912__$1);
var G__32632 = null;
var G__32633 = (0);
var G__32634 = (0);
seq__31912 = G__32631;
chunk__31914 = G__32632;
count__31915 = G__32633;
i__31916 = G__32634;
continue;
} else {
var G__32635 = cljs.core.next(seq__31912__$1);
var G__32636 = null;
var G__32637 = (0);
var G__32638 = (0);
seq__31912 = G__32635;
chunk__31914 = G__32636;
count__31915 = G__32637;
i__31916 = G__32638;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__32282){
var map__32283 = p__32282;
var map__32283__$1 = cljs.core.__destructure_map(map__32283);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32283__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__32288){
var map__32289 = p__32288;
var map__32289__$1 = cljs.core.__destructure_map(map__32289);
var _ = map__32289__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32289__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__32291,done,error){
var map__32292 = p__32291;
var map__32292__$1 = cljs.core.__destructure_map(map__32292);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32292__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__32293,done,error){
var map__32294 = p__32293;
var map__32294__$1 = cljs.core.__destructure_map(map__32294);
var msg = map__32294__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32295){
var map__32298 = p__32295;
var map__32298__$1 = cljs.core.__destructure_map(map__32298);
var src = map__32298__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32298__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__32302 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__32302) : done.call(null,G__32302));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__32303){
var map__32304 = p__32303;
var map__32304__$1 = cljs.core.__destructure_map(map__32304);
var msg__$1 = map__32304__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32304__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e32305){var ex = e32305;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__32306){
var map__32308 = p__32306;
var map__32308__$1 = cljs.core.__destructure_map(map__32308);
var env = map__32308__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32308__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__32316){
var map__32317 = p__32316;
var map__32317__$1 = cljs.core.__destructure_map(map__32317);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__32318){
var map__32319 = p__32318;
var map__32319__$1 = cljs.core.__destructure_map(map__32319);
var svc = map__32319__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32319__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
