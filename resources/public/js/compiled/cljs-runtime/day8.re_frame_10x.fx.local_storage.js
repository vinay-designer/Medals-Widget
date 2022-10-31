goog.provide('day8.re_frame_10x.fx.local_storage');
goog.scope(function(){
  day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism = goog.module.get('goog.testing.storage.FakeMechanism');
});
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e20394){if((e20394 instanceof Error)){
var _ = e20394;
return (new day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism());
} else {
throw e20394;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
/**
 * Adds a unique prefix to local storage keys to ensure they don't collide with the host application
 */
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){
return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(var_args){
var G__20396 = arguments.length;
switch (G__20396) {
case 1:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e20398){if((e20398 instanceof Error)){
var _ = e20398;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e20398;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__20400 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__20401 = null;
var count__20402 = (0);
var i__20403 = (0);
while(true){
if((i__20403 < count__20402)){
var k = chunk__20401.cljs$core$IIndexed$_nth$arity$2(null,i__20403);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__20426 = seq__20400;
var G__20427 = chunk__20401;
var G__20428 = count__20402;
var G__20429 = (i__20403 + (1));
seq__20400 = G__20426;
chunk__20401 = G__20427;
count__20402 = G__20428;
i__20403 = G__20429;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20400);
if(temp__5804__auto__){
var seq__20400__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20400__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20400__$1);
var G__20431 = cljs.core.chunk_rest(seq__20400__$1);
var G__20432 = c__5565__auto__;
var G__20433 = cljs.core.count(c__5565__auto__);
var G__20434 = (0);
seq__20400 = G__20431;
chunk__20401 = G__20432;
count__20402 = G__20433;
i__20403 = G__20434;
continue;
} else {
var k = cljs.core.first(seq__20400__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__20435 = cljs.core.next(seq__20400__$1);
var G__20436 = null;
var G__20437 = (0);
var G__20438 = (0);
seq__20400 = G__20435;
chunk__20401 = G__20436;
count__20402 = G__20437;
i__20403 = G__20438;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__20411 = arguments.length;
switch (G__20411) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___20440 = arguments.length;
var i__5767__auto___20441 = (0);
while(true){
if((i__5767__auto___20441 < len__5766__auto___20440)){
args_arr__5791__auto__.push((arguments[i__5767__auto___20441]));

var G__20442 = (i__5767__auto___20441 + (1));
i__5767__auto___20441 = G__20442;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5792__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0)));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq20409){
var G__20410 = cljs.core.first(seq20409);
var seq20409__$1 = cljs.core.next(seq20409);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20410,seq20409__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__20418){
var map__20420 = p__20418;
var map__20420__$1 = cljs.core.__destructure_map(map__20420);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20420__$1,new cljs.core.Keyword(null,"or","or",235744169));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,or));
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
