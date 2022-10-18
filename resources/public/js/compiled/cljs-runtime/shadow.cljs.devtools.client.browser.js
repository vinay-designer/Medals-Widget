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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq31857){
var G__31858 = cljs.core.first(seq31857);
var seq31857__$1 = cljs.core.next(seq31857);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31858,seq31857__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__31863 = cljs.core.seq(sources);
var chunk__31864 = null;
var count__31865 = (0);
var i__31866 = (0);
while(true){
if((i__31866 < count__31865)){
var map__31872 = chunk__31864.cljs$core$IIndexed$_nth$arity$2(null,i__31866);
var map__31872__$1 = cljs.core.__destructure_map(map__31872);
var src = map__31872__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31872__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31872__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31872__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31872__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31873){var e_32323 = e31873;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32323);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32323.message)].join('')));
}

var G__32324 = seq__31863;
var G__32325 = chunk__31864;
var G__32326 = count__31865;
var G__32327 = (i__31866 + (1));
seq__31863 = G__32324;
chunk__31864 = G__32325;
count__31865 = G__32326;
i__31866 = G__32327;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31863);
if(temp__5804__auto__){
var seq__31863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31863__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31863__$1);
var G__32328 = cljs.core.chunk_rest(seq__31863__$1);
var G__32329 = c__5565__auto__;
var G__32330 = cljs.core.count(c__5565__auto__);
var G__32331 = (0);
seq__31863 = G__32328;
chunk__31864 = G__32329;
count__31865 = G__32330;
i__31866 = G__32331;
continue;
} else {
var map__31874 = cljs.core.first(seq__31863__$1);
var map__31874__$1 = cljs.core.__destructure_map(map__31874);
var src = map__31874__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31874__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31874__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31874__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31874__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31875){var e_32332 = e31875;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32332);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32332.message)].join('')));
}

var G__32333 = cljs.core.next(seq__31863__$1);
var G__32334 = null;
var G__32335 = (0);
var G__32336 = (0);
seq__31863 = G__32333;
chunk__31864 = G__32334;
count__31865 = G__32335;
i__31866 = G__32336;
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
var seq__31878 = cljs.core.seq(js_requires);
var chunk__31879 = null;
var count__31880 = (0);
var i__31881 = (0);
while(true){
if((i__31881 < count__31880)){
var js_ns = chunk__31879.cljs$core$IIndexed$_nth$arity$2(null,i__31881);
var require_str_32337 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32337);


var G__32338 = seq__31878;
var G__32339 = chunk__31879;
var G__32340 = count__31880;
var G__32341 = (i__31881 + (1));
seq__31878 = G__32338;
chunk__31879 = G__32339;
count__31880 = G__32340;
i__31881 = G__32341;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31878);
if(temp__5804__auto__){
var seq__31878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31878__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31878__$1);
var G__32342 = cljs.core.chunk_rest(seq__31878__$1);
var G__32343 = c__5565__auto__;
var G__32344 = cljs.core.count(c__5565__auto__);
var G__32345 = (0);
seq__31878 = G__32342;
chunk__31879 = G__32343;
count__31880 = G__32344;
i__31881 = G__32345;
continue;
} else {
var js_ns = cljs.core.first(seq__31878__$1);
var require_str_32346 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32346);


var G__32347 = cljs.core.next(seq__31878__$1);
var G__32348 = null;
var G__32349 = (0);
var G__32350 = (0);
seq__31878 = G__32347;
chunk__31879 = G__32348;
count__31880 = G__32349;
i__31881 = G__32350;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__31883){
var map__31884 = p__31883;
var map__31884__$1 = cljs.core.__destructure_map(map__31884);
var msg = map__31884__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31884__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31884__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31885(s__31886){
return (new cljs.core.LazySeq(null,(function (){
var s__31886__$1 = s__31886;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31886__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__31891 = cljs.core.first(xs__6360__auto__);
var map__31891__$1 = cljs.core.__destructure_map(map__31891);
var src = map__31891__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31891__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__31886__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31884,map__31884__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31885_$_iter__31887(s__31888){
return (new cljs.core.LazySeq(null,((function (s__31886__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31884,map__31884__$1,msg,info,reload_info){
return (function (){
var s__31888__$1 = s__31888;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31888__$1);
if(temp__5804__auto____$1){
var s__31888__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31888__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__31888__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__31890 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__31889 = (0);
while(true){
if((i__31889 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__31889);
cljs.core.chunk_append(b__31890,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32354 = (i__31889 + (1));
i__31889 = G__32354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31890),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31885_$_iter__31887(cljs.core.chunk_rest(s__31888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31890),null);
}
} else {
var warning = cljs.core.first(s__31888__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31885_$_iter__31887(cljs.core.rest(s__31888__$2)));
}
} else {
return null;
}
break;
}
});})(s__31886__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31884,map__31884__$1,msg,info,reload_info))
,null,null));
});})(s__31886__$1,map__31891,map__31891__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31884,map__31884__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31885(cljs.core.rest(s__31886__$1)));
} else {
var G__32355 = cljs.core.rest(s__31886__$1);
s__31886__$1 = G__32355;
continue;
}
} else {
var G__32356 = cljs.core.rest(s__31886__$1);
s__31886__$1 = G__32356;
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
var seq__31892_32357 = cljs.core.seq(warnings);
var chunk__31893_32358 = null;
var count__31894_32359 = (0);
var i__31895_32360 = (0);
while(true){
if((i__31895_32360 < count__31894_32359)){
var map__31898_32361 = chunk__31893_32358.cljs$core$IIndexed$_nth$arity$2(null,i__31895_32360);
var map__31898_32362__$1 = cljs.core.__destructure_map(map__31898_32361);
var w_32363 = map__31898_32362__$1;
var msg_32364__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32362__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32362__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32362__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32362__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32367)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32365),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32366),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32364__$1)].join(''));


var G__32368 = seq__31892_32357;
var G__32369 = chunk__31893_32358;
var G__32370 = count__31894_32359;
var G__32371 = (i__31895_32360 + (1));
seq__31892_32357 = G__32368;
chunk__31893_32358 = G__32369;
count__31894_32359 = G__32370;
i__31895_32360 = G__32371;
continue;
} else {
var temp__5804__auto___32372 = cljs.core.seq(seq__31892_32357);
if(temp__5804__auto___32372){
var seq__31892_32373__$1 = temp__5804__auto___32372;
if(cljs.core.chunked_seq_QMARK_(seq__31892_32373__$1)){
var c__5565__auto___32374 = cljs.core.chunk_first(seq__31892_32373__$1);
var G__32375 = cljs.core.chunk_rest(seq__31892_32373__$1);
var G__32376 = c__5565__auto___32374;
var G__32377 = cljs.core.count(c__5565__auto___32374);
var G__32378 = (0);
seq__31892_32357 = G__32375;
chunk__31893_32358 = G__32376;
count__31894_32359 = G__32377;
i__31895_32360 = G__32378;
continue;
} else {
var map__31899_32379 = cljs.core.first(seq__31892_32373__$1);
var map__31899_32380__$1 = cljs.core.__destructure_map(map__31899_32379);
var w_32381 = map__31899_32380__$1;
var msg_32382__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32380__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32380__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32380__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31899_32380__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32385)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32383),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32384),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32382__$1)].join(''));


var G__32386 = cljs.core.next(seq__31892_32373__$1);
var G__32387 = null;
var G__32388 = (0);
var G__32389 = (0);
seq__31892_32357 = G__32386;
chunk__31893_32358 = G__32387;
count__31894_32359 = G__32388;
i__31895_32360 = G__32389;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__31882_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__31882_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var seq__32059_32391 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32063_32392 = null;
var count__32064_32393 = (0);
var i__32065_32394 = (0);
while(true){
if((i__32065_32394 < count__32064_32393)){
var node_32395 = chunk__32063_32392.cljs$core$IIndexed$_nth$arity$2(null,i__32065_32394);
if(cljs.core.not(node_32395.shadow$old)){
var path_match_32396 = shadow.cljs.devtools.client.browser.match_paths(node_32395.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32396)){
var new_link_32397 = (function (){var G__32131 = node_32395.cloneNode(true);
G__32131.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32396),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32131;
})();
(node_32395.shadow$old = true);

(new_link_32397.onload = ((function (seq__32059_32391,chunk__32063_32392,count__32064_32393,i__32065_32394,seq__31912,chunk__31914,count__31915,i__31916,new_link_32397,path_match_32396,node_32395,path,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32133_32399 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32135_32400 = null;
var count__32136_32401 = (0);
var i__32137_32402 = (0);
while(true){
if((i__32137_32402 < count__32136_32401)){
var map__32142_32404 = chunk__32135_32400.cljs$core$IIndexed$_nth$arity$2(null,i__32137_32402);
var map__32142_32405__$1 = cljs.core.__destructure_map(map__32142_32404);
var task_32406 = map__32142_32405__$1;
var fn_str_32407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32142_32405__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32142_32405__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32409 = goog.getObjectByName(fn_str_32407,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32408)].join(''));

(fn_obj_32409.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32409.cljs$core$IFn$_invoke$arity$2(path,new_link_32397) : fn_obj_32409.call(null,path,new_link_32397));


var G__32410 = seq__32133_32399;
var G__32411 = chunk__32135_32400;
var G__32412 = count__32136_32401;
var G__32413 = (i__32137_32402 + (1));
seq__32133_32399 = G__32410;
chunk__32135_32400 = G__32411;
count__32136_32401 = G__32412;
i__32137_32402 = G__32413;
continue;
} else {
var temp__5804__auto___32414 = cljs.core.seq(seq__32133_32399);
if(temp__5804__auto___32414){
var seq__32133_32415__$1 = temp__5804__auto___32414;
if(cljs.core.chunked_seq_QMARK_(seq__32133_32415__$1)){
var c__5565__auto___32416 = cljs.core.chunk_first(seq__32133_32415__$1);
var G__32417 = cljs.core.chunk_rest(seq__32133_32415__$1);
var G__32418 = c__5565__auto___32416;
var G__32419 = cljs.core.count(c__5565__auto___32416);
var G__32420 = (0);
seq__32133_32399 = G__32417;
chunk__32135_32400 = G__32418;
count__32136_32401 = G__32419;
i__32137_32402 = G__32420;
continue;
} else {
var map__32144_32422 = cljs.core.first(seq__32133_32415__$1);
var map__32144_32423__$1 = cljs.core.__destructure_map(map__32144_32422);
var task_32424 = map__32144_32423__$1;
var fn_str_32425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32144_32423__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32144_32423__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32428 = goog.getObjectByName(fn_str_32425,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32426)].join(''));

(fn_obj_32428.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32428.cljs$core$IFn$_invoke$arity$2(path,new_link_32397) : fn_obj_32428.call(null,path,new_link_32397));


var G__32429 = cljs.core.next(seq__32133_32415__$1);
var G__32430 = null;
var G__32431 = (0);
var G__32432 = (0);
seq__32133_32399 = G__32429;
chunk__32135_32400 = G__32430;
count__32136_32401 = G__32431;
i__32137_32402 = G__32432;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32395);
});})(seq__32059_32391,chunk__32063_32392,count__32064_32393,i__32065_32394,seq__31912,chunk__31914,count__31915,i__31916,new_link_32397,path_match_32396,node_32395,path,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32396], 0));

goog.dom.insertSiblingAfter(new_link_32397,node_32395);


var G__32433 = seq__32059_32391;
var G__32434 = chunk__32063_32392;
var G__32435 = count__32064_32393;
var G__32436 = (i__32065_32394 + (1));
seq__32059_32391 = G__32433;
chunk__32063_32392 = G__32434;
count__32064_32393 = G__32435;
i__32065_32394 = G__32436;
continue;
} else {
var G__32437 = seq__32059_32391;
var G__32438 = chunk__32063_32392;
var G__32439 = count__32064_32393;
var G__32440 = (i__32065_32394 + (1));
seq__32059_32391 = G__32437;
chunk__32063_32392 = G__32438;
count__32064_32393 = G__32439;
i__32065_32394 = G__32440;
continue;
}
} else {
var G__32441 = seq__32059_32391;
var G__32442 = chunk__32063_32392;
var G__32443 = count__32064_32393;
var G__32444 = (i__32065_32394 + (1));
seq__32059_32391 = G__32441;
chunk__32063_32392 = G__32442;
count__32064_32393 = G__32443;
i__32065_32394 = G__32444;
continue;
}
} else {
var temp__5804__auto___32445 = cljs.core.seq(seq__32059_32391);
if(temp__5804__auto___32445){
var seq__32059_32446__$1 = temp__5804__auto___32445;
if(cljs.core.chunked_seq_QMARK_(seq__32059_32446__$1)){
var c__5565__auto___32447 = cljs.core.chunk_first(seq__32059_32446__$1);
var G__32448 = cljs.core.chunk_rest(seq__32059_32446__$1);
var G__32449 = c__5565__auto___32447;
var G__32450 = cljs.core.count(c__5565__auto___32447);
var G__32451 = (0);
seq__32059_32391 = G__32448;
chunk__32063_32392 = G__32449;
count__32064_32393 = G__32450;
i__32065_32394 = G__32451;
continue;
} else {
var node_32452 = cljs.core.first(seq__32059_32446__$1);
if(cljs.core.not(node_32452.shadow$old)){
var path_match_32453 = shadow.cljs.devtools.client.browser.match_paths(node_32452.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32453)){
var new_link_32454 = (function (){var G__32146 = node_32452.cloneNode(true);
G__32146.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32453),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32146;
})();
(node_32452.shadow$old = true);

(new_link_32454.onload = ((function (seq__32059_32391,chunk__32063_32392,count__32064_32393,i__32065_32394,seq__31912,chunk__31914,count__31915,i__31916,new_link_32454,path_match_32453,node_32452,seq__32059_32446__$1,temp__5804__auto___32445,path,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32148_32456 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32150_32457 = null;
var count__32151_32458 = (0);
var i__32152_32460 = (0);
while(true){
if((i__32152_32460 < count__32151_32458)){
var map__32160_32461 = chunk__32150_32457.cljs$core$IIndexed$_nth$arity$2(null,i__32152_32460);
var map__32160_32462__$1 = cljs.core.__destructure_map(map__32160_32461);
var task_32463 = map__32160_32462__$1;
var fn_str_32464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32160_32462__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32160_32462__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32466 = goog.getObjectByName(fn_str_32464,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32465)].join(''));

(fn_obj_32466.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32466.cljs$core$IFn$_invoke$arity$2(path,new_link_32454) : fn_obj_32466.call(null,path,new_link_32454));


var G__32467 = seq__32148_32456;
var G__32468 = chunk__32150_32457;
var G__32469 = count__32151_32458;
var G__32470 = (i__32152_32460 + (1));
seq__32148_32456 = G__32467;
chunk__32150_32457 = G__32468;
count__32151_32458 = G__32469;
i__32152_32460 = G__32470;
continue;
} else {
var temp__5804__auto___32471__$1 = cljs.core.seq(seq__32148_32456);
if(temp__5804__auto___32471__$1){
var seq__32148_32472__$1 = temp__5804__auto___32471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32148_32472__$1)){
var c__5565__auto___32473 = cljs.core.chunk_first(seq__32148_32472__$1);
var G__32474 = cljs.core.chunk_rest(seq__32148_32472__$1);
var G__32475 = c__5565__auto___32473;
var G__32476 = cljs.core.count(c__5565__auto___32473);
var G__32477 = (0);
seq__32148_32456 = G__32474;
chunk__32150_32457 = G__32475;
count__32151_32458 = G__32476;
i__32152_32460 = G__32477;
continue;
} else {
var map__32165_32478 = cljs.core.first(seq__32148_32472__$1);
var map__32165_32479__$1 = cljs.core.__destructure_map(map__32165_32478);
var task_32480 = map__32165_32479__$1;
var fn_str_32481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32165_32479__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32165_32479__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32483 = goog.getObjectByName(fn_str_32481,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32482)].join(''));

(fn_obj_32483.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32483.cljs$core$IFn$_invoke$arity$2(path,new_link_32454) : fn_obj_32483.call(null,path,new_link_32454));


var G__32484 = cljs.core.next(seq__32148_32472__$1);
var G__32485 = null;
var G__32486 = (0);
var G__32487 = (0);
seq__32148_32456 = G__32484;
chunk__32150_32457 = G__32485;
count__32151_32458 = G__32486;
i__32152_32460 = G__32487;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32452);
});})(seq__32059_32391,chunk__32063_32392,count__32064_32393,i__32065_32394,seq__31912,chunk__31914,count__31915,i__31916,new_link_32454,path_match_32453,node_32452,seq__32059_32446__$1,temp__5804__auto___32445,path,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32453], 0));

goog.dom.insertSiblingAfter(new_link_32454,node_32452);


var G__32488 = cljs.core.next(seq__32059_32446__$1);
var G__32489 = null;
var G__32490 = (0);
var G__32491 = (0);
seq__32059_32391 = G__32488;
chunk__32063_32392 = G__32489;
count__32064_32393 = G__32490;
i__32065_32394 = G__32491;
continue;
} else {
var G__32496 = cljs.core.next(seq__32059_32446__$1);
var G__32497 = null;
var G__32498 = (0);
var G__32499 = (0);
seq__32059_32391 = G__32496;
chunk__32063_32392 = G__32497;
count__32064_32393 = G__32498;
i__32065_32394 = G__32499;
continue;
}
} else {
var G__32500 = cljs.core.next(seq__32059_32446__$1);
var G__32501 = null;
var G__32502 = (0);
var G__32503 = (0);
seq__32059_32391 = G__32500;
chunk__32063_32392 = G__32501;
count__32064_32393 = G__32502;
i__32065_32394 = G__32503;
continue;
}
}
} else {
}
}
break;
}


var G__32504 = seq__31912;
var G__32505 = chunk__31914;
var G__32506 = count__31915;
var G__32507 = (i__31916 + (1));
seq__31912 = G__32504;
chunk__31914 = G__32505;
count__31915 = G__32506;
i__31916 = G__32507;
continue;
} else {
var G__32508 = seq__31912;
var G__32509 = chunk__31914;
var G__32510 = count__31915;
var G__32511 = (i__31916 + (1));
seq__31912 = G__32508;
chunk__31914 = G__32509;
count__31915 = G__32510;
i__31916 = G__32511;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31912);
if(temp__5804__auto__){
var seq__31912__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31912__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31912__$1);
var G__32513 = cljs.core.chunk_rest(seq__31912__$1);
var G__32514 = c__5565__auto__;
var G__32515 = cljs.core.count(c__5565__auto__);
var G__32516 = (0);
seq__31912 = G__32513;
chunk__31914 = G__32514;
count__31915 = G__32515;
i__31916 = G__32516;
continue;
} else {
var path = cljs.core.first(seq__31912__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32166_32517 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32170_32518 = null;
var count__32171_32519 = (0);
var i__32172_32520 = (0);
while(true){
if((i__32172_32520 < count__32171_32519)){
var node_32521 = chunk__32170_32518.cljs$core$IIndexed$_nth$arity$2(null,i__32172_32520);
if(cljs.core.not(node_32521.shadow$old)){
var path_match_32522 = shadow.cljs.devtools.client.browser.match_paths(node_32521.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32522)){
var new_link_32523 = (function (){var G__32211 = node_32521.cloneNode(true);
G__32211.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32522),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32211;
})();
(node_32521.shadow$old = true);

(new_link_32523.onload = ((function (seq__32166_32517,chunk__32170_32518,count__32171_32519,i__32172_32520,seq__31912,chunk__31914,count__31915,i__31916,new_link_32523,path_match_32522,node_32521,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32212_32524 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32214_32525 = null;
var count__32215_32526 = (0);
var i__32216_32527 = (0);
while(true){
if((i__32216_32527 < count__32215_32526)){
var map__32227_32528 = chunk__32214_32525.cljs$core$IIndexed$_nth$arity$2(null,i__32216_32527);
var map__32227_32529__$1 = cljs.core.__destructure_map(map__32227_32528);
var task_32530 = map__32227_32529__$1;
var fn_str_32531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32227_32529__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32227_32529__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32533 = goog.getObjectByName(fn_str_32531,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32532)].join(''));

(fn_obj_32533.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32533.cljs$core$IFn$_invoke$arity$2(path,new_link_32523) : fn_obj_32533.call(null,path,new_link_32523));


var G__32534 = seq__32212_32524;
var G__32535 = chunk__32214_32525;
var G__32536 = count__32215_32526;
var G__32537 = (i__32216_32527 + (1));
seq__32212_32524 = G__32534;
chunk__32214_32525 = G__32535;
count__32215_32526 = G__32536;
i__32216_32527 = G__32537;
continue;
} else {
var temp__5804__auto___32538__$1 = cljs.core.seq(seq__32212_32524);
if(temp__5804__auto___32538__$1){
var seq__32212_32539__$1 = temp__5804__auto___32538__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32212_32539__$1)){
var c__5565__auto___32541 = cljs.core.chunk_first(seq__32212_32539__$1);
var G__32542 = cljs.core.chunk_rest(seq__32212_32539__$1);
var G__32543 = c__5565__auto___32541;
var G__32544 = cljs.core.count(c__5565__auto___32541);
var G__32545 = (0);
seq__32212_32524 = G__32542;
chunk__32214_32525 = G__32543;
count__32215_32526 = G__32544;
i__32216_32527 = G__32545;
continue;
} else {
var map__32229_32546 = cljs.core.first(seq__32212_32539__$1);
var map__32229_32547__$1 = cljs.core.__destructure_map(map__32229_32546);
var task_32548 = map__32229_32547__$1;
var fn_str_32549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32229_32547__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32229_32547__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32551 = goog.getObjectByName(fn_str_32549,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32550)].join(''));

(fn_obj_32551.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32551.cljs$core$IFn$_invoke$arity$2(path,new_link_32523) : fn_obj_32551.call(null,path,new_link_32523));


var G__32552 = cljs.core.next(seq__32212_32539__$1);
var G__32553 = null;
var G__32554 = (0);
var G__32555 = (0);
seq__32212_32524 = G__32552;
chunk__32214_32525 = G__32553;
count__32215_32526 = G__32554;
i__32216_32527 = G__32555;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32521);
});})(seq__32166_32517,chunk__32170_32518,count__32171_32519,i__32172_32520,seq__31912,chunk__31914,count__31915,i__31916,new_link_32523,path_match_32522,node_32521,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32522], 0));

goog.dom.insertSiblingAfter(new_link_32523,node_32521);


var G__32556 = seq__32166_32517;
var G__32557 = chunk__32170_32518;
var G__32558 = count__32171_32519;
var G__32559 = (i__32172_32520 + (1));
seq__32166_32517 = G__32556;
chunk__32170_32518 = G__32557;
count__32171_32519 = G__32558;
i__32172_32520 = G__32559;
continue;
} else {
var G__32561 = seq__32166_32517;
var G__32562 = chunk__32170_32518;
var G__32563 = count__32171_32519;
var G__32564 = (i__32172_32520 + (1));
seq__32166_32517 = G__32561;
chunk__32170_32518 = G__32562;
count__32171_32519 = G__32563;
i__32172_32520 = G__32564;
continue;
}
} else {
var G__32565 = seq__32166_32517;
var G__32566 = chunk__32170_32518;
var G__32567 = count__32171_32519;
var G__32568 = (i__32172_32520 + (1));
seq__32166_32517 = G__32565;
chunk__32170_32518 = G__32566;
count__32171_32519 = G__32567;
i__32172_32520 = G__32568;
continue;
}
} else {
var temp__5804__auto___32569__$1 = cljs.core.seq(seq__32166_32517);
if(temp__5804__auto___32569__$1){
var seq__32166_32573__$1 = temp__5804__auto___32569__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32166_32573__$1)){
var c__5565__auto___32574 = cljs.core.chunk_first(seq__32166_32573__$1);
var G__32575 = cljs.core.chunk_rest(seq__32166_32573__$1);
var G__32576 = c__5565__auto___32574;
var G__32577 = cljs.core.count(c__5565__auto___32574);
var G__32578 = (0);
seq__32166_32517 = G__32575;
chunk__32170_32518 = G__32576;
count__32171_32519 = G__32577;
i__32172_32520 = G__32578;
continue;
} else {
var node_32579 = cljs.core.first(seq__32166_32573__$1);
if(cljs.core.not(node_32579.shadow$old)){
var path_match_32580 = shadow.cljs.devtools.client.browser.match_paths(node_32579.getAttribute("href"),path);
if(cljs.core.truth_(path_match_32580)){
var new_link_32581 = (function (){var G__32236 = node_32579.cloneNode(true);
G__32236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_32580),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32236;
})();
(node_32579.shadow$old = true);

(new_link_32581.onload = ((function (seq__32166_32517,chunk__32170_32518,count__32171_32519,i__32172_32520,seq__31912,chunk__31914,count__31915,i__31916,new_link_32581,path_match_32580,node_32579,seq__32166_32573__$1,temp__5804__auto___32569__$1,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info){
return (function (e){
var seq__32238_32582 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__32240_32583 = null;
var count__32241_32584 = (0);
var i__32242_32585 = (0);
while(true){
if((i__32242_32585 < count__32241_32584)){
var map__32253_32588 = chunk__32240_32583.cljs$core$IIndexed$_nth$arity$2(null,i__32242_32585);
var map__32253_32589__$1 = cljs.core.__destructure_map(map__32253_32588);
var task_32590 = map__32253_32589__$1;
var fn_str_32591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32253_32589__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32253_32589__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32593 = goog.getObjectByName(fn_str_32591,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32592)].join(''));

(fn_obj_32593.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32593.cljs$core$IFn$_invoke$arity$2(path,new_link_32581) : fn_obj_32593.call(null,path,new_link_32581));


var G__32594 = seq__32238_32582;
var G__32595 = chunk__32240_32583;
var G__32596 = count__32241_32584;
var G__32597 = (i__32242_32585 + (1));
seq__32238_32582 = G__32594;
chunk__32240_32583 = G__32595;
count__32241_32584 = G__32596;
i__32242_32585 = G__32597;
continue;
} else {
var temp__5804__auto___32598__$2 = cljs.core.seq(seq__32238_32582);
if(temp__5804__auto___32598__$2){
var seq__32238_32599__$1 = temp__5804__auto___32598__$2;
if(cljs.core.chunked_seq_QMARK_(seq__32238_32599__$1)){
var c__5565__auto___32600 = cljs.core.chunk_first(seq__32238_32599__$1);
var G__32602 = cljs.core.chunk_rest(seq__32238_32599__$1);
var G__32603 = c__5565__auto___32600;
var G__32604 = cljs.core.count(c__5565__auto___32600);
var G__32605 = (0);
seq__32238_32582 = G__32602;
chunk__32240_32583 = G__32603;
count__32241_32584 = G__32604;
i__32242_32585 = G__32605;
continue;
} else {
var map__32279_32606 = cljs.core.first(seq__32238_32599__$1);
var map__32279_32607__$1 = cljs.core.__destructure_map(map__32279_32606);
var task_32608 = map__32279_32607__$1;
var fn_str_32609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279_32607__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_32610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32279_32607__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_32611 = goog.getObjectByName(fn_str_32609,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_32610)].join(''));

(fn_obj_32611.cljs$core$IFn$_invoke$arity$2 ? fn_obj_32611.cljs$core$IFn$_invoke$arity$2(path,new_link_32581) : fn_obj_32611.call(null,path,new_link_32581));


var G__32612 = cljs.core.next(seq__32238_32599__$1);
var G__32613 = null;
var G__32614 = (0);
var G__32615 = (0);
seq__32238_32582 = G__32612;
chunk__32240_32583 = G__32613;
count__32241_32584 = G__32614;
i__32242_32585 = G__32615;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_32579);
});})(seq__32166_32517,chunk__32170_32518,count__32171_32519,i__32172_32520,seq__31912,chunk__31914,count__31915,i__31916,new_link_32581,path_match_32580,node_32579,seq__32166_32573__$1,temp__5804__auto___32569__$1,path,seq__31912__$1,temp__5804__auto__,map__31911,map__31911__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_32580], 0));

goog.dom.insertSiblingAfter(new_link_32581,node_32579);


var G__32616 = cljs.core.next(seq__32166_32573__$1);
var G__32617 = null;
var G__32618 = (0);
var G__32619 = (0);
seq__32166_32517 = G__32616;
chunk__32170_32518 = G__32617;
count__32171_32519 = G__32618;
i__32172_32520 = G__32619;
continue;
} else {
var G__32620 = cljs.core.next(seq__32166_32573__$1);
var G__32621 = null;
var G__32622 = (0);
var G__32623 = (0);
seq__32166_32517 = G__32620;
chunk__32170_32518 = G__32621;
count__32171_32519 = G__32622;
i__32172_32520 = G__32623;
continue;
}
} else {
var G__32624 = cljs.core.next(seq__32166_32573__$1);
var G__32625 = null;
var G__32626 = (0);
var G__32627 = (0);
seq__32166_32517 = G__32624;
chunk__32170_32518 = G__32625;
count__32171_32519 = G__32626;
i__32172_32520 = G__32627;
continue;
}
}
} else {
}
}
break;
}


var G__32628 = cljs.core.next(seq__31912__$1);
var G__32629 = null;
var G__32630 = (0);
var G__32631 = (0);
seq__31912 = G__32628;
chunk__31914 = G__32629;
count__31915 = G__32630;
i__31916 = G__32631;
continue;
} else {
var G__32632 = cljs.core.next(seq__31912__$1);
var G__32633 = null;
var G__32634 = (0);
var G__32635 = (0);
seq__31912 = G__32632;
chunk__31914 = G__32633;
count__31915 = G__32634;
i__31916 = G__32635;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__32284){
var map__32285 = p__32284;
var map__32285__$1 = cljs.core.__destructure_map(map__32285);
var _ = map__32285__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32285__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__32287,done,error){
var map__32288 = p__32287;
var map__32288__$1 = cljs.core.__destructure_map(map__32288);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32288__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__32292,done,error){
var map__32293 = p__32292;
var map__32293__$1 = cljs.core.__destructure_map(map__32293);
var msg = map__32293__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32293__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32293__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32293__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32294){
var map__32295 = p__32294;
var map__32295__$1 = cljs.core.__destructure_map(map__32295);
var src = map__32295__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32295__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__32296 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__32296) : done.call(null,G__32296));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__32297){
var map__32298 = p__32297;
var map__32298__$1 = cljs.core.__destructure_map(map__32298);
var msg__$1 = map__32298__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32298__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e32299){var ex = e32299;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__32300){
var map__32301 = p__32300;
var map__32301__$1 = cljs.core.__destructure_map(map__32301);
var env = map__32301__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32301__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__32308){
var map__32309 = p__32308;
var map__32309__$1 = cljs.core.__destructure_map(map__32309);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32309__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32309__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__32311){
var map__32312 = p__32311;
var map__32312__$1 = cljs.core.__destructure_map(map__32312);
var svc = map__32312__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32312__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
