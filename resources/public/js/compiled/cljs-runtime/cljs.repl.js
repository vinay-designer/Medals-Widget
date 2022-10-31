goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31304){
var map__31306 = p__31304;
var map__31306__$1 = cljs.core.__destructure_map(map__31306);
var m = map__31306__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31306__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31307_31457 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31308_31458 = null;
var count__31309_31459 = (0);
var i__31310_31460 = (0);
while(true){
if((i__31310_31460 < count__31309_31459)){
var f_31461 = chunk__31308_31458.cljs$core$IIndexed$_nth$arity$2(null,i__31310_31460);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31461], 0));


var G__31466 = seq__31307_31457;
var G__31467 = chunk__31308_31458;
var G__31468 = count__31309_31459;
var G__31469 = (i__31310_31460 + (1));
seq__31307_31457 = G__31466;
chunk__31308_31458 = G__31467;
count__31309_31459 = G__31468;
i__31310_31460 = G__31469;
continue;
} else {
var temp__5804__auto___31470 = cljs.core.seq(seq__31307_31457);
if(temp__5804__auto___31470){
var seq__31307_31472__$1 = temp__5804__auto___31470;
if(cljs.core.chunked_seq_QMARK_(seq__31307_31472__$1)){
var c__5565__auto___31473 = cljs.core.chunk_first(seq__31307_31472__$1);
var G__31474 = cljs.core.chunk_rest(seq__31307_31472__$1);
var G__31475 = c__5565__auto___31473;
var G__31476 = cljs.core.count(c__5565__auto___31473);
var G__31477 = (0);
seq__31307_31457 = G__31474;
chunk__31308_31458 = G__31475;
count__31309_31459 = G__31476;
i__31310_31460 = G__31477;
continue;
} else {
var f_31478 = cljs.core.first(seq__31307_31472__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31478], 0));


var G__31479 = cljs.core.next(seq__31307_31472__$1);
var G__31480 = null;
var G__31481 = (0);
var G__31482 = (0);
seq__31307_31457 = G__31479;
chunk__31308_31458 = G__31480;
count__31309_31459 = G__31481;
i__31310_31460 = G__31482;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31483 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31483], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31483)))?cljs.core.second(arglists_31483):arglists_31483)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31325_31484 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31326_31485 = null;
var count__31327_31486 = (0);
var i__31328_31487 = (0);
while(true){
if((i__31328_31487 < count__31327_31486)){
var vec__31337_31488 = chunk__31326_31485.cljs$core$IIndexed$_nth$arity$2(null,i__31328_31487);
var name_31489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31337_31488,(0),null);
var map__31340_31490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31337_31488,(1),null);
var map__31340_31491__$1 = cljs.core.__destructure_map(map__31340_31490);
var doc_31492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31340_31491__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31340_31491__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31489], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31493], 0));

if(cljs.core.truth_(doc_31492)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31492], 0));
} else {
}


var G__31495 = seq__31325_31484;
var G__31496 = chunk__31326_31485;
var G__31497 = count__31327_31486;
var G__31498 = (i__31328_31487 + (1));
seq__31325_31484 = G__31495;
chunk__31326_31485 = G__31496;
count__31327_31486 = G__31497;
i__31328_31487 = G__31498;
continue;
} else {
var temp__5804__auto___31499 = cljs.core.seq(seq__31325_31484);
if(temp__5804__auto___31499){
var seq__31325_31500__$1 = temp__5804__auto___31499;
if(cljs.core.chunked_seq_QMARK_(seq__31325_31500__$1)){
var c__5565__auto___31501 = cljs.core.chunk_first(seq__31325_31500__$1);
var G__31502 = cljs.core.chunk_rest(seq__31325_31500__$1);
var G__31503 = c__5565__auto___31501;
var G__31504 = cljs.core.count(c__5565__auto___31501);
var G__31505 = (0);
seq__31325_31484 = G__31502;
chunk__31326_31485 = G__31503;
count__31327_31486 = G__31504;
i__31328_31487 = G__31505;
continue;
} else {
var vec__31342_31506 = cljs.core.first(seq__31325_31500__$1);
var name_31507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342_31506,(0),null);
var map__31345_31508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342_31506,(1),null);
var map__31345_31509__$1 = cljs.core.__destructure_map(map__31345_31508);
var doc_31510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31345_31509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31345_31509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31507], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31511], 0));

if(cljs.core.truth_(doc_31510)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31510], 0));
} else {
}


var G__31516 = cljs.core.next(seq__31325_31500__$1);
var G__31517 = null;
var G__31518 = (0);
var G__31519 = (0);
seq__31325_31484 = G__31516;
chunk__31326_31485 = G__31517;
count__31327_31486 = G__31518;
i__31328_31487 = G__31519;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31347 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31348 = null;
var count__31349 = (0);
var i__31350 = (0);
while(true){
if((i__31350 < count__31349)){
var role = chunk__31348.cljs$core$IIndexed$_nth$arity$2(null,i__31350);
var temp__5804__auto___31520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31520__$1)){
var spec_31521 = temp__5804__auto___31520__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31521)], 0));
} else {
}


var G__31522 = seq__31347;
var G__31523 = chunk__31348;
var G__31524 = count__31349;
var G__31525 = (i__31350 + (1));
seq__31347 = G__31522;
chunk__31348 = G__31523;
count__31349 = G__31524;
i__31350 = G__31525;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__31347);
if(temp__5804__auto____$1){
var seq__31347__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31347__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31347__$1);
var G__31526 = cljs.core.chunk_rest(seq__31347__$1);
var G__31527 = c__5565__auto__;
var G__31528 = cljs.core.count(c__5565__auto__);
var G__31529 = (0);
seq__31347 = G__31526;
chunk__31348 = G__31527;
count__31349 = G__31528;
i__31350 = G__31529;
continue;
} else {
var role = cljs.core.first(seq__31347__$1);
var temp__5804__auto___31530__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31530__$2)){
var spec_31531 = temp__5804__auto___31530__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31531)], 0));
} else {
}


var G__31532 = cljs.core.next(seq__31347__$1);
var G__31533 = null;
var G__31534 = (0);
var G__31535 = (0);
seq__31347 = G__31532;
chunk__31348 = G__31533;
count__31349 = G__31534;
i__31350 = G__31535;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31536 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31537 = cljs.core.ex_cause(t);
via = G__31536;
t = G__31537;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31377 = datafied_throwable;
var map__31377__$1 = cljs.core.__destructure_map(map__31377);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31377__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31377__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31378 = cljs.core.last(via);
var map__31378__$1 = cljs.core.__destructure_map(map__31378);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31378__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31378__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31379 = data;
var map__31379__$1 = cljs.core.__destructure_map(map__31379);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31379__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31379__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31379__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31380 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31380__$1 = cljs.core.__destructure_map(map__31380);
var top_data = map__31380__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31380__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31381 = phase;
var G__31381__$1 = (((G__31381 instanceof cljs.core.Keyword))?G__31381.fqn:null);
switch (G__31381__$1) {
case "read-source":
var map__31386 = data;
var map__31386__$1 = cljs.core.__destructure_map(map__31386);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31386__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31386__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31391 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31391__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31391,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31391);
var G__31391__$2 = (cljs.core.truth_((function (){var fexpr__31404 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31404.cljs$core$IFn$_invoke$arity$1 ? fexpr__31404.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31404.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31391__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31391__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31391__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31405 = top_data;
var G__31405__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31405,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31405);
var G__31405__$2 = (cljs.core.truth_((function (){var fexpr__31406 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31406.cljs$core$IFn$_invoke$arity$1 ? fexpr__31406.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31406.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31405__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31405__$1);
var G__31405__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31405__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31405__$2);
var G__31405__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31405__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31405__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31405__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31405__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31407 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31407,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31407,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31407,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31407,(3),null);
var G__31410 = top_data;
var G__31410__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31410,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31410);
var G__31410__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31410__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31410__$1);
var G__31410__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31410__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31410__$2);
var G__31410__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31410__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31410__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31410__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31410__$4;
}

break;
case "execution":
var vec__31411 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31411,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31411,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31411,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31411,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31376_SHARP_){
var or__5043__auto__ = (p1__31376_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__31414 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31414.cljs$core$IFn$_invoke$arity$1 ? fexpr__31414.cljs$core$IFn$_invoke$arity$1(p1__31376_SHARP_) : fexpr__31414.call(null,p1__31376_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__31415 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31415__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31415,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31415);
var G__31415__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31415__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31415__$1);
var G__31415__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31415__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31415__$2);
var G__31415__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31415__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31415__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31415__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31415__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31381__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31418){
var map__31419 = p__31418;
var map__31419__$1 = cljs.core.__destructure_map(map__31419);
var triage_data = map__31419__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31420 = phase;
var G__31420__$1 = (((G__31420 instanceof cljs.core.Keyword))?G__31420.fqn:null);
switch (G__31420__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31421 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31422 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31423 = loc;
var G__31424 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31425_31544 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31426_31545 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31427_31546 = true;
var _STAR_print_fn_STAR__temp_val__31428_31547 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31427_31546);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31428_31547);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31416_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31426_31545);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31425_31544);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31421,G__31422,G__31423,G__31424) : format.call(null,G__31421,G__31422,G__31423,G__31424));

break;
case "macroexpansion":
var G__31429 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31430 = cause_type;
var G__31431 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31432 = loc;
var G__31433 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31429,G__31430,G__31431,G__31432,G__31433) : format.call(null,G__31429,G__31430,G__31431,G__31432,G__31433));

break;
case "compile-syntax-check":
var G__31434 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31435 = cause_type;
var G__31436 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31437 = loc;
var G__31438 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31434,G__31435,G__31436,G__31437,G__31438) : format.call(null,G__31434,G__31435,G__31436,G__31437,G__31438));

break;
case "compilation":
var G__31439 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31440 = cause_type;
var G__31441 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31442 = loc;
var G__31443 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31439,G__31440,G__31441,G__31442,G__31443) : format.call(null,G__31439,G__31440,G__31441,G__31442,G__31443));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31444 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31445 = symbol;
var G__31446 = loc;
var G__31447 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31448_31549 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31449_31550 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31450_31551 = true;
var _STAR_print_fn_STAR__temp_val__31451_31552 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31450_31551);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31451_31552);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31417_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31417_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31449_31550);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31448_31549);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31444,G__31445,G__31446,G__31447) : format.call(null,G__31444,G__31445,G__31446,G__31447));
} else {
var G__31452 = "Execution error%s at %s(%s).\n%s\n";
var G__31453 = cause_type;
var G__31454 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31455 = loc;
var G__31456 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31452,G__31453,G__31454,G__31455,G__31456) : format.call(null,G__31452,G__31453,G__31454,G__31455,G__31456));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31420__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
