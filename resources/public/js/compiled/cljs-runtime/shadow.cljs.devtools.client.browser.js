goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32308 = arguments.length;
var i__5767__auto___32309 = (0);
while(true){
if((i__5767__auto___32309 < len__5766__auto___32308)){
args__5772__auto__.push((arguments[i__5767__auto___32309]));

var G__32310 = (i__5767__auto___32309 + (1));
i__5767__auto___32309 = G__32310;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq31869){
var G__31870 = cljs.core.first(seq31869);
var seq31869__$1 = cljs.core.next(seq31869);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31870,seq31869__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__31872 = cljs.core.seq(sources);
var chunk__31873 = null;
var count__31874 = (0);
var i__31875 = (0);
while(true){
if((i__31875 < count__31874)){
var map__31884 = chunk__31873.cljs$core$IIndexed$_nth$arity$2(null,i__31875);
var map__31884__$1 = cljs.core.__destructure_map(map__31884);
var src = map__31884__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31884__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31884__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31884__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31884__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31886){var e_32314 = e31886;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32314);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32314.message)].join('')));
}

var G__32315 = seq__31872;
var G__32316 = chunk__31873;
var G__32317 = count__31874;
var G__32318 = (i__31875 + (1));
seq__31872 = G__32315;
chunk__31873 = G__32316;
count__31874 = G__32317;
i__31875 = G__32318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31872);
if(temp__5804__auto__){
var seq__31872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31872__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31872__$1);
var G__32320 = cljs.core.chunk_rest(seq__31872__$1);
var G__32321 = c__5565__auto__;
var G__32322 = cljs.core.count(c__5565__auto__);
var G__32323 = (0);
seq__31872 = G__32320;
chunk__31873 = G__32321;
count__31874 = G__32322;
i__31875 = G__32323;
continue;
} else {
var map__31887 = cljs.core.first(seq__31872__$1);
var map__31887__$1 = cljs.core.__destructure_map(map__31887);
var src = map__31887__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31887__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31888){var e_32325 = e31888;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32325);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32325.message)].join('')));
}

var G__32326 = cljs.core.next(seq__31872__$1);
var G__32327 = null;
var G__32328 = (0);
var G__32329 = (0);
seq__31872 = G__32326;
chunk__31873 = G__32327;
count__31874 = G__32328;
i__31875 = G__32329;
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
var seq__31889 = cljs.core.seq(js_requires);
var chunk__31890 = null;
var count__31891 = (0);
var i__31892 = (0);
while(true){
if((i__31892 < count__31891)){
var js_ns = chunk__31890.cljs$core$IIndexed$_nth$arity$2(null,i__31892);
var require_str_32331 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32331);


var G__32332 = seq__31889;
var G__32333 = chunk__31890;
var G__32334 = count__31891;
var G__32335 = (i__31892 + (1));
seq__31889 = G__32332;
chunk__31890 = G__32333;
count__31891 = G__32334;
i__31892 = G__32335;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31889);
if(temp__5804__auto__){
var seq__31889__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31889__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31889__$1);
var G__32336 = cljs.core.chunk_rest(seq__31889__$1);
var G__32337 = c__5565__auto__;
var G__32338 = cljs.core.count(c__5565__auto__);
var G__32339 = (0);
seq__31889 = G__32336;
chunk__31890 = G__32337;
count__31891 = G__32338;
i__31892 = G__32339;
continue;
} else {
var js_ns = cljs.core.first(seq__31889__$1);
var require_str_32341 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32341);


var G__32342 = cljs.core.next(seq__31889__$1);
var G__32343 = null;
var G__32344 = (0);
var G__32345 = (0);
seq__31889 = G__32342;
chunk__31890 = G__32343;
count__31891 = G__32344;
i__31892 = G__32345;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__31896){
var map__31897 = p__31896;
var map__31897__$1 = cljs.core.__destructure_map(map__31897);
var msg = map__31897__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31897__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31897__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31898(s__31899){
return (new cljs.core.LazySeq(null,(function (){
var s__31899__$1 = s__31899;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31899__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__31904 = cljs.core.first(xs__6360__auto__);
var map__31904__$1 = cljs.core.__destructure_map(map__31904);
var src = map__31904__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__31899__$1,map__31904,map__31904__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31897,map__31897__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31898_$_iter__31900(s__31901){
return (new cljs.core.LazySeq(null,((function (s__31899__$1,map__31904,map__31904__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31897,map__31897__$1,msg,info,reload_info){
return (function (){
var s__31901__$1 = s__31901;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31901__$1);
if(temp__5804__auto____$1){
var s__31901__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31901__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__31901__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__31903 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__31902 = (0);
while(true){
if((i__31902 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__31902);
cljs.core.chunk_append(b__31903,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32346 = (i__31902 + (1));
i__31902 = G__32346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31903),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31898_$_iter__31900(cljs.core.chunk_rest(s__31901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31903),null);
}
} else {
var warning = cljs.core.first(s__31901__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31898_$_iter__31900(cljs.core.rest(s__31901__$2)));
}
} else {
return null;
}
break;
}
});})(s__31899__$1,map__31904,map__31904__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31897,map__31897__$1,msg,info,reload_info))
,null,null));
});})(s__31899__$1,map__31904,map__31904__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31897,map__31897__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31898(cljs.core.rest(s__31899__$1)));
} else {
var G__32347 = cljs.core.rest(s__31899__$1);
s__31899__$1 = G__32347;
continue;
}
} else {
var G__32348 = cljs.core.rest(s__31899__$1);
s__31899__$1 = G__32348;
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
var seq__31905_32349 = cljs.core.seq(warnings);
var chunk__31906_32350 = null;
var count__31907_32351 = (0);
var i__31908_32352 = (0);
while(true){
if((i__31908_32352 < count__31907_32351)){
var map__31911_32353 = chunk__31906_32350.cljs$core$IIndexed$_nth$arity$2(null,i__31908_32352);
var map__31911_32354__$1 = cljs.core.__destructure_map(map__31911_32353);
var w_32355 = map__31911_32354__$1;
var msg_32356__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911_32354__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911_32354__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911_32354__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31911_32354__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32359)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32357),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32358),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32356__$1)].join(''));


var G__32360 = seq__31905_32349;
var G__32361 = chunk__31906_32350;
var G__32362 = count__31907_32351;
var G__32363 = (i__31908_32352 + (1));
seq__31905_32349 = G__32360;
chunk__31906_32350 = G__32361;
count__31907_32351 = G__32362;
i__31908_32352 = G__32363;
continue;
} else {
var temp__5804__auto___32364 = cljs.core.seq(seq__31905_32349);
if(temp__5804__auto___32364){
var seq__31905_32365__$1 = temp__5804__auto___32364;
if(cljs.core.chunked_seq_QMARK_(seq__31905_32365__$1)){
var c__5565__auto___32366 = cljs.core.chunk_first(seq__31905_32365__$1);
var G__32367 = cljs.core.chunk_rest(seq__31905_32365__$1);
var G__32368 = c__5565__auto___32366;
var G__32369 = cljs.core.count(c__5565__auto___32366);
var G__32370 = (0);
seq__31905_32349 = G__32367;
chunk__31906_32350 = G__32368;
count__31907_32351 = G__32369;
i__31908_32352 = G__32370;
continue;
} else {
var map__31912_32371 = cljs.core.first(seq__31905_32365__$1);
var map__31912_32372__$1 = cljs.core.__destructure_map(map__31912_32371);
var w_32373 = map__31912_32372__$1;
var msg_32374__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31912_32372__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31912_32372__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31912_32372__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31912_32372__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32377)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32375),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32376),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32374__$1)].join(''));


var G__32378 = cljs.core.next(seq__31905_32365__$1);
var G__32379 = null;
var G__32380 = (0);
var G__32381 = (0);
seq__31905_32349 = G__32378;
chunk__31906_32350 = G__32379;
count__31907_32351 = G__32380;
i__31908_32352 = G__32381;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__31895_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__31895_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__31913){
var map__31914 = p__31913;
var map__31914__$1 = cljs.core.__destructure_map(map__31914);
var msg = map__31914__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31914__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31914__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__31915 = cljs.core.seq(updates);
var chunk__31917 = null;
var count__31918 = (0);
var i__31919 = (0);
while(true){
if((i__31919 < count__31918)){
var path = chunk__31917.cljs$core$IIndexed$_nth$arity$2(null,i__31919);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32065_32382 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32069_32383 = null;
var count__32070_32384 = (0);
var i__32071_32385 = (0);
while(true){
if((i__32071_32385 < count__32070_32384)){
var node_32386 = chunk__32069_32383.cljs$core$IIndexed$_nth$arity$2(null,i__32071_32385);
if(cljs.core.not(node_32386.shadow$old)){
var path_match_32387 = shadow.cljs.devtools.client.browser.match_paths(node_32386.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32387)){
var new_link_32388 = (function (){var G__32100 = node_32386.cloneNode(true);
G__32100.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32387),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32100;
})();
(node_32386.shadow$old = true);

(new_link_32388.onload = ((function (seq__32065_32382,chunk__32069_32383,count__32070_32384,i__32071_32385,seq__31915,chunk__31917,count__31918,i__31919,new_link_32388,path_match_32387,node_32386,path,map__31914,map__31914__$1,msg,updates,reload_info){
return (function (e){
var seq__32101_32389 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32103_32390 = null;
var count__32104_32391 = (0);
var i__32105_32392 = (0);
while(true){
if((i__32105_32392 < count__32104_32391)){
var map__32118_32393 = chunk__32103_32390.cljs$core$IIndexed$_nth$arity$2(null,i__32105_32392);
var map__32118_32394__$1 = cljs.core.__destructure_map(map__32118_32393);
var task_32395 = map__32118_32394__$1;
var fn_str_32396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32118_32394__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32118_32394__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32398 = goog.getObjectByName(fn_str_32396,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32397)].join(''));

(fn_obj_32398.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32398.cljs$core$IFn$_invoke$arity$2(path,new_link_32388) : fn_obj_32398.call(null,path,new_link_32388));


var G__32399 = seq__32101_32389;
var G__32400 = chunk__32103_32390;
var G__32401 = count__32104_32391;
var G__32402 = (i__32105_32392 + (1));
seq__32101_32389 = G__32399;
chunk__32103_32390 = G__32400;
count__32104_32391 = G__32401;
i__32105_32392 = G__32402;
continue;
} else {
var temp__5804__auto___32403 = cljs.core.seq(seq__32101_32389);
if(temp__5804__auto___32403){
var seq__32101_32404__$1 = temp__5804__auto___32403;
if(cljs.core.chunked_seq_QMARK_(seq__32101_32404__$1)){
var c__5565__auto___32406 = cljs.core.chunk_first(seq__32101_32404__$1);
var G__32407 = cljs.core.chunk_rest(seq__32101_32404__$1);
var G__32408 = c__5565__auto___32406;
var G__32409 = cljs.core.count(c__5565__auto___32406);
var G__32410 = (0);
seq__32101_32389 = G__32407;
chunk__32103_32390 = G__32408;
count__32104_32391 = G__32409;
i__32105_32392 = G__32410;
continue;
} else {
var map__32132_32411 = cljs.core.first(seq__32101_32404__$1);
var map__32132_32412__$1 = cljs.core.__destructure_map(map__32132_32411);
var task_32413 = map__32132_32412__$1;
var fn_str_32414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32132_32412__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32132_32412__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32416 = goog.getObjectByName(fn_str_32414,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32415)].join(''));

(fn_obj_32416.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32416.cljs$core$IFn$_invoke$arity$2(path,new_link_32388) : fn_obj_32416.call(null,path,new_link_32388));


var G__32417 = cljs.core.next(seq__32101_32404__$1);
var G__32418 = null;
var G__32419 = (0);
var G__32420 = (0);
seq__32101_32389 = G__32417;
chunk__32103_32390 = G__32418;
count__32104_32391 = G__32419;
i__32105_32392 = G__32420;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32386);
});})(seq__32065_32382,chunk__32069_32383,count__32070_32384,i__32071_32385,seq__31915,chunk__31917,count__31918,i__31919,new_link_32388,path_match_32387,node_32386,path,map__31914,map__31914__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32387], 0));

goog.dom.insertSiblingAfter(new_link_32388,node_32386);


var G__32424 = seq__32065_32382;
var G__32425 = chunk__32069_32383;
var G__32426 = count__32070_32384;
var G__32427 = (i__32071_32385 + (1));
seq__32065_32382 = G__32424;
chunk__32069_32383 = G__32425;
count__32070_32384 = G__32426;
i__32071_32385 = G__32427;
continue;
} else {
var G__32428 = seq__32065_32382;
var G__32429 = chunk__32069_32383;
var G__32430 = count__32070_32384;
var G__32431 = (i__32071_32385 + (1));
seq__32065_32382 = G__32428;
chunk__32069_32383 = G__32429;
count__32070_32384 = G__32430;
i__32071_32385 = G__32431;
continue;
}
} else {
var G__32432 = seq__32065_32382;
var G__32433 = chunk__32069_32383;
var G__32434 = count__32070_32384;
var G__32435 = (i__32071_32385 + (1));
seq__32065_32382 = G__32432;
chunk__32069_32383 = G__32433;
count__32070_32384 = G__32434;
i__32071_32385 = G__32435;
continue;
}
} else {
var temp__5804__auto___32436 = cljs.core.seq(seq__32065_32382);
if(temp__5804__auto___32436){
var seq__32065_32437__$1 = temp__5804__auto___32436;
if(cljs.core.chunked_seq_QMARK_(seq__32065_32437__$1)){
var c__5565__auto___32438 = cljs.core.chunk_first(seq__32065_32437__$1);
var G__32439 = cljs.core.chunk_rest(seq__32065_32437__$1);
var G__32440 = c__5565__auto___32438;
var G__32441 = cljs.core.count(c__5565__auto___32438);
var G__32442 = (0);
seq__32065_32382 = G__32439;
chunk__32069_32383 = G__32440;
count__32070_32384 = G__32441;
i__32071_32385 = G__32442;
continue;
} else {
var node_32443 = cljs.core.first(seq__32065_32437__$1);
if(cljs.core.not(node_32443.shadow$old)){
var path_match_32444 = shadow.cljs.devtools.client.browser.match_paths(node_32443.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32444)){
var new_link_32445 = (function (){var G__32137 = node_32443.cloneNode(true);
G__32137.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32444),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32137;
})();
(node_32443.shadow$old = true);

(new_link_32445.onload = ((function (seq__32065_32382,chunk__32069_32383,count__32070_32384,i__32071_32385,seq__31915,chunk__31917,count__31918,i__31919,new_link_32445,path_match_32444,node_32443,seq__32065_32437__$1,temp__5804__auto___32436,path,map__31914,map__31914__$1,msg,updates,reload_info){
return (function (e){
var seq__32140_32446 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32142_32447 = null;
var count__32143_32448 = (0);
var i__32144_32449 = (0);
while(true){
if((i__32144_32449 < count__32143_32448)){
var map__32156_32450 = chunk__32142_32447.cljs$core$IIndexed$_nth$arity$2(null,i__32144_32449);
var map__32156_32451__$1 = cljs.core.__destructure_map(map__32156_32450);
var task_32452 = map__32156_32451__$1;
var fn_str_32453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32156_32451__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32156_32451__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32455 = goog.getObjectByName(fn_str_32453,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32454)].join(''));

(fn_obj_32455.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32455.cljs$core$IFn$_invoke$arity$2(path,new_link_32445) : fn_obj_32455.call(null,path,new_link_32445));


var G__32456 = seq__32140_32446;
var G__32457 = chunk__32142_32447;
var G__32458 = count__32143_32448;
var G__32459 = (i__32144_32449 + (1));
seq__32140_32446 = G__32456;
chunk__32142_32447 = G__32457;
count__32143_32448 = G__32458;
i__32144_32449 = G__32459;
continue;
} else {
var temp__5804__auto___32460__$1 = cljs.core.seq(seq__32140_32446);
if(temp__5804__auto___32460__$1){
var seq__32140_32461__$1 = temp__5804__auto___32460__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32140_32461__$1)){
var c__5565__auto___32462 = cljs.core.chunk_first(seq__32140_32461__$1);
var G__32463 = cljs.core.chunk_rest(seq__32140_32461__$1);
var G__32464 = c__5565__auto___32462;
var G__32465 = cljs.core.count(c__5565__auto___32462);
var G__32466 = (0);
seq__32140_32446 = G__32463;
chunk__32142_32447 = G__32464;
count__32143_32448 = G__32465;
i__32144_32449 = G__32466;
continue;
} else {
var map__32161_32467 = cljs.core.first(seq__32140_32461__$1);
var map__32161_32468__$1 = cljs.core.__destructure_map(map__32161_32467);
var task_32469 = map__32161_32468__$1;
var fn_str_32470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32161_32468__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32161_32468__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32472 = goog.getObjectByName(fn_str_32470,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32471)].join(''));

(fn_obj_32472.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32472.cljs$core$IFn$_invoke$arity$2(path,new_link_32445) : fn_obj_32472.call(null,path,new_link_32445));


var G__32473 = cljs.core.next(seq__32140_32461__$1);
var G__32474 = null;
var G__32475 = (0);
var G__32476 = (0);
seq__32140_32446 = G__32473;
chunk__32142_32447 = G__32474;
count__32143_32448 = G__32475;
i__32144_32449 = G__32476;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32443);
});})(seq__32065_32382,chunk__32069_32383,count__32070_32384,i__32071_32385,seq__31915,chunk__31917,count__31918,i__31919,new_link_32445,path_match_32444,node_32443,seq__32065_32437__$1,temp__5804__auto___32436,path,map__31914,map__31914__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32444], 0));

goog.dom.insertSiblingAfter(new_link_32445,node_32443);


var G__32477 = cljs.core.next(seq__32065_32437__$1);
var G__32478 = null;
var G__32479 = (0);
var G__32480 = (0);
seq__32065_32382 = G__32477;
chunk__32069_32383 = G__32478;
count__32070_32384 = G__32479;
i__32071_32385 = G__32480;
continue;
} else {
var G__32481 = cljs.core.next(seq__32065_32437__$1);
var G__32482 = null;
var G__32483 = (0);
var G__32484 = (0);
seq__32065_32382 = G__32481;
chunk__32069_32383 = G__32482;
count__32070_32384 = G__32483;
i__32071_32385 = G__32484;
continue;
}
} else {
var G__32486 = cljs.core.next(seq__32065_32437__$1);
var G__32487 = null;
var G__32488 = (0);
var G__32489 = (0);
seq__32065_32382 = G__32486;
chunk__32069_32383 = G__32487;
count__32070_32384 = G__32488;
i__32071_32385 = G__32489;
continue;
}
}
} else {
}
}
break;
}


var G__32490 = seq__31915;
var G__32491 = chunk__31917;
var G__32492 = count__31918;
var G__32493 = (i__31919 + (1));
seq__31915 = G__32490;
chunk__31917 = G__32491;
count__31918 = G__32492;
i__31919 = G__32493;
continue;
} else {
var G__32494 = seq__31915;
var G__32495 = chunk__31917;
var G__32496 = count__31918;
var G__32497 = (i__31919 + (1));
seq__31915 = G__32494;
chunk__31917 = G__32495;
count__31918 = G__32496;
i__31919 = G__32497;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31915);
if(temp__5804__auto__){
var seq__31915__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31915__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31915__$1);
var G__32498 = cljs.core.chunk_rest(seq__31915__$1);
var G__32499 = c__5565__auto__;
var G__32500 = cljs.core.count(c__5565__auto__);
var G__32501 = (0);
seq__31915 = G__32498;
chunk__31917 = G__32499;
count__31918 = G__32500;
i__31919 = G__32501;
continue;
} else {
var path = cljs.core.first(seq__31915__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32166_32502 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32170_32503 = null;
var count__32171_32504 = (0);
var i__32172_32505 = (0);
while(true){
if((i__32172_32505 < count__32171_32504)){
var node_32506 = chunk__32170_32503.cljs$core$IIndexed$_nth$arity$2(null,i__32172_32505);
if(cljs.core.not(node_32506.shadow$old)){
var path_match_32507 = shadow.cljs.devtools.client.browser.match_paths(node_32506.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32507)){
var new_link_32508 = (function (){var G__32219 = node_32506.cloneNode(true);
G__32219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32507),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32219;
})();
(node_32506.shadow$old = true);

(new_link_32508.onload = ((function (seq__32166_32502,chunk__32170_32503,count__32171_32504,i__32172_32505,seq__31915,chunk__31917,count__31918,i__31919,new_link_32508,path_match_32507,node_32506,path,seq__31915__$1,temp__5804__auto__,map__31914,map__31914__$1,msg,updates,reload_info){
return (function (e){
var seq__32222_32509 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32224_32510 = null;
var count__32225_32511 = (0);
var i__32226_32512 = (0);
while(true){
if((i__32226_32512 < count__32225_32511)){
var map__32237_32513 = chunk__32224_32510.cljs$core$IIndexed$_nth$arity$2(null,i__32226_32512);
var map__32237_32514__$1 = cljs.core.__destructure_map(map__32237_32513);
var task_32515 = map__32237_32514__$1;
var fn_str_32516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32237_32514__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32237_32514__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32518 = goog.getObjectByName(fn_str_32516,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32517)].join(''));

(fn_obj_32518.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32518.cljs$core$IFn$_invoke$arity$2(path,new_link_32508) : fn_obj_32518.call(null,path,new_link_32508));


var G__32519 = seq__32222_32509;
var G__32520 = chunk__32224_32510;
var G__32521 = count__32225_32511;
var G__32522 = (i__32226_32512 + (1));
seq__32222_32509 = G__32519;
chunk__32224_32510 = G__32520;
count__32225_32511 = G__32521;
i__32226_32512 = G__32522;
continue;
} else {
var temp__5804__auto___32523__$1 = cljs.core.seq(seq__32222_32509);
if(temp__5804__auto___32523__$1){
var seq__32222_32524__$1 = temp__5804__auto___32523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32222_32524__$1)){
var c__5565__auto___32525 = cljs.core.chunk_first(seq__32222_32524__$1);
var G__32526 = cljs.core.chunk_rest(seq__32222_32524__$1);
var G__32527 = c__5565__auto___32525;
var G__32528 = cljs.core.count(c__5565__auto___32525);
var G__32529 = (0);
seq__32222_32509 = G__32526;
chunk__32224_32510 = G__32527;
count__32225_32511 = G__32528;
i__32226_32512 = G__32529;
continue;
} else {
var map__32239_32530 = cljs.core.first(seq__32222_32524__$1);
var map__32239_32531__$1 = cljs.core.__destructure_map(map__32239_32530);
var task_32532 = map__32239_32531__$1;
var fn_str_32533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32239_32531__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32239_32531__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32535 = goog.getObjectByName(fn_str_32533,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32534)].join(''));

(fn_obj_32535.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32535.cljs$core$IFn$_invoke$arity$2(path,new_link_32508) : fn_obj_32535.call(null,path,new_link_32508));


var G__32536 = cljs.core.next(seq__32222_32524__$1);
var G__32537 = null;
var G__32538 = (0);
var G__32539 = (0);
seq__32222_32509 = G__32536;
chunk__32224_32510 = G__32537;
count__32225_32511 = G__32538;
i__32226_32512 = G__32539;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32506);
});})(seq__32166_32502,chunk__32170_32503,count__32171_32504,i__32172_32505,seq__31915,chunk__31917,count__31918,i__31919,new_link_32508,path_match_32507,node_32506,path,seq__31915__$1,temp__5804__auto__,map__31914,map__31914__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32507], 0));

goog.dom.insertSiblingAfter(new_link_32508,node_32506);


var G__32540 = seq__32166_32502;
var G__32541 = chunk__32170_32503;
var G__32542 = count__32171_32504;
var G__32543 = (i__32172_32505 + (1));
seq__32166_32502 = G__32540;
chunk__32170_32503 = G__32541;
count__32171_32504 = G__32542;
i__32172_32505 = G__32543;
continue;
} else {
var G__32544 = seq__32166_32502;
var G__32545 = chunk__32170_32503;
var G__32546 = count__32171_32504;
var G__32547 = (i__32172_32505 + (1));
seq__32166_32502 = G__32544;
chunk__32170_32503 = G__32545;
count__32171_32504 = G__32546;
i__32172_32505 = G__32547;
continue;
}
} else {
var G__32548 = seq__32166_32502;
var G__32549 = chunk__32170_32503;
var G__32550 = count__32171_32504;
var G__32551 = (i__32172_32505 + (1));
seq__32166_32502 = G__32548;
chunk__32170_32503 = G__32549;
count__32171_32504 = G__32550;
i__32172_32505 = G__32551;
continue;
}
} else {
var temp__5804__auto___32552__$1 = cljs.core.seq(seq__32166_32502);
if(temp__5804__auto___32552__$1){
var seq__32166_32553__$1 = temp__5804__auto___32552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32166_32553__$1)){
var c__5565__auto___32554 = cljs.core.chunk_first(seq__32166_32553__$1);
var G__32555 = cljs.core.chunk_rest(seq__32166_32553__$1);
var G__32556 = c__5565__auto___32554;
var G__32557 = cljs.core.count(c__5565__auto___32554);
var G__32558 = (0);
seq__32166_32502 = G__32555;
chunk__32170_32503 = G__32556;
count__32171_32504 = G__32557;
i__32172_32505 = G__32558;
continue;
} else {
var node_32559 = cljs.core.first(seq__32166_32553__$1);
if(cljs.core.not(node_32559.shadow$old)){
var path_match_32563 = shadow.cljs.devtools.client.browser.match_paths(node_32559.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32563)){
var new_link_32565 = (function (){var G__32247 = node_32559.cloneNode(true);
G__32247.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32563),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32247;
})();
(node_32559.shadow$old = true);

(new_link_32565.onload = ((function (seq__32166_32502,chunk__32170_32503,count__32171_32504,i__32172_32505,seq__31915,chunk__31917,count__31918,i__31919,new_link_32565,path_match_32563,node_32559,seq__32166_32553__$1,temp__5804__auto___32552__$1,path,seq__31915__$1,temp__5804__auto__,map__31914,map__31914__$1,msg,updates,reload_info){
return (function (e){
var seq__32251_32566 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32253_32567 = null;
var count__32254_32568 = (0);
var i__32255_32569 = (0);
while(true){
if((i__32255_32569 < count__32254_32568)){
var map__32262_32571 = chunk__32253_32567.cljs$core$IIndexed$_nth$arity$2(null,i__32255_32569);
var map__32262_32572__$1 = cljs.core.__destructure_map(map__32262_32571);
var task_32573 = map__32262_32572__$1;
var fn_str_32574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32262_32572__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32262_32572__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32576 = goog.getObjectByName(fn_str_32574,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32575)].join(''));

(fn_obj_32576.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32576.cljs$core$IFn$_invoke$arity$2(path,new_link_32565) : fn_obj_32576.call(null,path,new_link_32565));


var G__32577 = seq__32251_32566;
var G__32578 = chunk__32253_32567;
var G__32579 = count__32254_32568;
var G__32580 = (i__32255_32569 + (1));
seq__32251_32566 = G__32577;
chunk__32253_32567 = G__32578;
count__32254_32568 = G__32579;
i__32255_32569 = G__32580;
continue;
} else {
var temp__5804__auto___32581__$2 = cljs.core.seq(seq__32251_32566);
if(temp__5804__auto___32581__$2){
var seq__32251_32582__$1 = temp__5804__auto___32581__$2;
if(cljs.core.chunked_seq_QMARK_(seq__32251_32582__$1)){
var c__5565__auto___32583 = cljs.core.chunk_first(seq__32251_32582__$1);
var G__32584 = cljs.core.chunk_rest(seq__32251_32582__$1);
var G__32585 = c__5565__auto___32583;
var G__32586 = cljs.core.count(c__5565__auto___32583);
var G__32587 = (0);
seq__32251_32566 = G__32584;
chunk__32253_32567 = G__32585;
count__32254_32568 = G__32586;
i__32255_32569 = G__32587;
continue;
} else {
var map__32263_32588 = cljs.core.first(seq__32251_32582__$1);
var map__32263_32589__$1 = cljs.core.__destructure_map(map__32263_32588);
var task_32590 = map__32263_32589__$1;
var fn_str_32591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263_32589__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32263_32589__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32593 = goog.getObjectByName(fn_str_32591,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32592)].join(''));

(fn_obj_32593.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32593.cljs$core$IFn$_invoke$arity$2(path,new_link_32565) : fn_obj_32593.call(null,path,new_link_32565));


var G__32594 = cljs.core.next(seq__32251_32582__$1);
var G__32595 = null;
var G__32596 = (0);
var G__32597 = (0);
seq__32251_32566 = G__32594;
chunk__32253_32567 = G__32595;
count__32254_32568 = G__32596;
i__32255_32569 = G__32597;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32559);
});})(seq__32166_32502,chunk__32170_32503,count__32171_32504,i__32172_32505,seq__31915,chunk__31917,count__31918,i__31919,new_link_32565,path_match_32563,node_32559,seq__32166_32553__$1,temp__5804__auto___32552__$1,path,seq__31915__$1,temp__5804__auto__,map__31914,map__31914__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32563], 0));

goog.dom.insertSiblingAfter(new_link_32565,node_32559);


var G__32598 = cljs.core.next(seq__32166_32553__$1);
var G__32599 = null;
var G__32600 = (0);
var G__32601 = (0);
seq__32166_32502 = G__32598;
chunk__32170_32503 = G__32599;
count__32171_32504 = G__32600;
i__32172_32505 = G__32601;
continue;
} else {
var G__32602 = cljs.core.next(seq__32166_32553__$1);
var G__32603 = null;
var G__32604 = (0);
var G__32605 = (0);
seq__32166_32502 = G__32602;
chunk__32170_32503 = G__32603;
count__32171_32504 = G__32604;
i__32172_32505 = G__32605;
continue;
}
} else {
var G__32606 = cljs.core.next(seq__32166_32553__$1);
var G__32607 = null;
var G__32608 = (0);
var G__32609 = (0);
seq__32166_32502 = G__32606;
chunk__32170_32503 = G__32607;
count__32171_32504 = G__32608;
i__32172_32505 = G__32609;
continue;
}
}
} else {
}
}
break;
}


var G__32610 = cljs.core.next(seq__31915__$1);
var G__32611 = null;
var G__32612 = (0);
var G__32613 = (0);
seq__31915 = G__32610;
chunk__31917 = G__32611;
count__31918 = G__32612;
i__31919 = G__32613;
continue;
} else {
var G__32614 = cljs.core.next(seq__31915__$1);
var G__32615 = null;
var G__32616 = (0);
var G__32617 = (0);
seq__31915 = G__32614;
chunk__31917 = G__32615;
count__31918 = G__32616;
i__31919 = G__32617;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__32264){
var map__32265 = p__32264;
var map__32265__$1 = cljs.core.__destructure_map(map__32265);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32265__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__32270){
var map__32271 = p__32270;
var map__32271__$1 = cljs.core.__destructure_map(map__32271);
var _ = map__32271__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32271__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__32272,done,error){
var map__32274 = p__32272;
var map__32274__$1 = cljs.core.__destructure_map(map__32274);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32274__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__32275,done,error){
var map__32276 = p__32275;
var map__32276__$1 = cljs.core.__destructure_map(map__32276);
var msg = map__32276__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32277){
var map__32278 = p__32277;
var map__32278__$1 = cljs.core.__destructure_map(map__32278);
var src = map__32278__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32278__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__32279 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__32279) : done.call(null,G__32279));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__32282){
var map__32283 = p__32282;
var map__32283__$1 = cljs.core.__destructure_map(map__32283);
var msg__$1 = map__32283__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32283__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e32284){var ex = e32284;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__32285){
var map__32286 = p__32285;
var map__32286__$1 = cljs.core.__destructure_map(map__32286);
var env = map__32286__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32286__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__32292){
var map__32293 = p__32292;
var map__32293__$1 = cljs.core.__destructure_map(map__32293);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32293__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32293__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__32299){
var map__32300 = p__32299;
var map__32300__$1 = cljs.core.__destructure_map(map__32300);
var svc = map__32300__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32300__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
