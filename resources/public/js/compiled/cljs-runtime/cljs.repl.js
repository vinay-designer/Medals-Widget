goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31277){
var map__31278 = p__31277;
var map__31278__$1 = cljs.core.__destructure_map(map__31278);
var m = map__31278__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31278__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31278__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31285_31444 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31286_31445 = null;
var count__31287_31446 = (0);
var i__31288_31447 = (0);
while(true){
if((i__31288_31447 < count__31287_31446)){
var f_31448 = chunk__31286_31445.cljs$core$IIndexed$_nth$arity$2(null,i__31288_31447);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31448], 0));


var G__31449 = seq__31285_31444;
var G__31450 = chunk__31286_31445;
var G__31451 = count__31287_31446;
var G__31452 = (i__31288_31447 + (1));
seq__31285_31444 = G__31449;
chunk__31286_31445 = G__31450;
count__31287_31446 = G__31451;
i__31288_31447 = G__31452;
continue;
} else {
var temp__5804__auto___31453 = cljs.core.seq(seq__31285_31444);
if(temp__5804__auto___31453){
var seq__31285_31454__$1 = temp__5804__auto___31453;
if(cljs.core.chunked_seq_QMARK_(seq__31285_31454__$1)){
var c__5565__auto___31455 = cljs.core.chunk_first(seq__31285_31454__$1);
var G__31456 = cljs.core.chunk_rest(seq__31285_31454__$1);
var G__31457 = c__5565__auto___31455;
var G__31458 = cljs.core.count(c__5565__auto___31455);
var G__31459 = (0);
seq__31285_31444 = G__31456;
chunk__31286_31445 = G__31457;
count__31287_31446 = G__31458;
i__31288_31447 = G__31459;
continue;
} else {
var f_31460 = cljs.core.first(seq__31285_31454__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31460], 0));


var G__31461 = cljs.core.next(seq__31285_31454__$1);
var G__31462 = null;
var G__31463 = (0);
var G__31464 = (0);
seq__31285_31444 = G__31461;
chunk__31286_31445 = G__31462;
count__31287_31446 = G__31463;
i__31288_31447 = G__31464;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31465 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31465], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31465)))?cljs.core.second(arglists_31465):arglists_31465)], 0));
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
var seq__31304_31466 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31305_31467 = null;
var count__31306_31468 = (0);
var i__31307_31469 = (0);
while(true){
if((i__31307_31469 < count__31306_31468)){
var vec__31324_31470 = chunk__31305_31467.cljs$core$IIndexed$_nth$arity$2(null,i__31307_31469);
var name_31471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31324_31470,(0),null);
var map__31327_31472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31324_31470,(1),null);
var map__31327_31473__$1 = cljs.core.__destructure_map(map__31327_31472);
var doc_31474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31327_31473__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31327_31473__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31471], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31475], 0));

if(cljs.core.truth_(doc_31474)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31474], 0));
} else {
}


var G__31476 = seq__31304_31466;
var G__31477 = chunk__31305_31467;
var G__31478 = count__31306_31468;
var G__31479 = (i__31307_31469 + (1));
seq__31304_31466 = G__31476;
chunk__31305_31467 = G__31477;
count__31306_31468 = G__31478;
i__31307_31469 = G__31479;
continue;
} else {
var temp__5804__auto___31480 = cljs.core.seq(seq__31304_31466);
if(temp__5804__auto___31480){
var seq__31304_31481__$1 = temp__5804__auto___31480;
if(cljs.core.chunked_seq_QMARK_(seq__31304_31481__$1)){
var c__5565__auto___31482 = cljs.core.chunk_first(seq__31304_31481__$1);
var G__31483 = cljs.core.chunk_rest(seq__31304_31481__$1);
var G__31484 = c__5565__auto___31482;
var G__31485 = cljs.core.count(c__5565__auto___31482);
var G__31486 = (0);
seq__31304_31466 = G__31483;
chunk__31305_31467 = G__31484;
count__31306_31468 = G__31485;
i__31307_31469 = G__31486;
continue;
} else {
var vec__31328_31487 = cljs.core.first(seq__31304_31481__$1);
var name_31488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31328_31487,(0),null);
var map__31331_31489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31328_31487,(1),null);
var map__31331_31490__$1 = cljs.core.__destructure_map(map__31331_31489);
var doc_31491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31331_31490__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31331_31490__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31488], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31492], 0));

if(cljs.core.truth_(doc_31491)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31491], 0));
} else {
}


var G__31493 = cljs.core.next(seq__31304_31481__$1);
var G__31494 = null;
var G__31495 = (0);
var G__31496 = (0);
seq__31304_31466 = G__31493;
chunk__31305_31467 = G__31494;
count__31306_31468 = G__31495;
i__31307_31469 = G__31496;
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

var seq__31332 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31333 = null;
var count__31334 = (0);
var i__31335 = (0);
while(true){
if((i__31335 < count__31334)){
var role = chunk__31333.cljs$core$IIndexed$_nth$arity$2(null,i__31335);
var temp__5804__auto___31497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31497__$1)){
var spec_31498 = temp__5804__auto___31497__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31498)], 0));
} else {
}


var G__31499 = seq__31332;
var G__31500 = chunk__31333;
var G__31501 = count__31334;
var G__31502 = (i__31335 + (1));
seq__31332 = G__31499;
chunk__31333 = G__31500;
count__31334 = G__31501;
i__31335 = G__31502;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__31332);
if(temp__5804__auto____$1){
var seq__31332__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31332__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31332__$1);
var G__31507 = cljs.core.chunk_rest(seq__31332__$1);
var G__31508 = c__5565__auto__;
var G__31509 = cljs.core.count(c__5565__auto__);
var G__31510 = (0);
seq__31332 = G__31507;
chunk__31333 = G__31508;
count__31334 = G__31509;
i__31335 = G__31510;
continue;
} else {
var role = cljs.core.first(seq__31332__$1);
var temp__5804__auto___31511__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31511__$2)){
var spec_31512 = temp__5804__auto___31511__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31512)], 0));
} else {
}


var G__31519 = cljs.core.next(seq__31332__$1);
var G__31520 = null;
var G__31521 = (0);
var G__31522 = (0);
seq__31332 = G__31519;
chunk__31333 = G__31520;
count__31334 = G__31521;
i__31335 = G__31522;
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
var G__31523 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31524 = cljs.core.ex_cause(t);
via = G__31523;
t = G__31524;
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
var map__31364 = datafied_throwable;
var map__31364__$1 = cljs.core.__destructure_map(map__31364);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31364__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31364__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31364__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31365 = cljs.core.last(via);
var map__31365__$1 = cljs.core.__destructure_map(map__31365);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31365__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31365__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31365__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31366 = data;
var map__31366__$1 = cljs.core.__destructure_map(map__31366);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31366__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31366__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31366__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31367 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31367__$1 = cljs.core.__destructure_map(map__31367);
var top_data = map__31367__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31367__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31368 = phase;
var G__31368__$1 = (((G__31368 instanceof cljs.core.Keyword))?G__31368.fqn:null);
switch (G__31368__$1) {
case "read-source":
var map__31369 = data;
var map__31369__$1 = cljs.core.__destructure_map(map__31369);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31369__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31369__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31370 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31370__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31370,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31370);
var G__31370__$2 = (cljs.core.truth_((function (){var fexpr__31371 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31371.cljs$core$IFn$_invoke$arity$1 ? fexpr__31371.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31371.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31370__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31370__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31370__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31372 = top_data;
var G__31372__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31372,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31372);
var G__31372__$2 = (cljs.core.truth_((function (){var fexpr__31373 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31373.cljs$core$IFn$_invoke$arity$1 ? fexpr__31373.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31373.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31372__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31372__$1);
var G__31372__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31372__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31372__$2);
var G__31372__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31372__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31372__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31372__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31372__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31374 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(3),null);
var G__31377 = top_data;
var G__31377__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31377,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31377);
var G__31377__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31377__$1);
var G__31377__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31377__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31377__$2);
var G__31377__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31377__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31377__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31377__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31377__$4;
}

break;
case "execution":
var vec__31378 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31363_SHARP_){
var or__5043__auto__ = (p1__31363_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__31381 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31381.cljs$core$IFn$_invoke$arity$1 ? fexpr__31381.cljs$core$IFn$_invoke$arity$1(p1__31363_SHARP_) : fexpr__31381.call(null,p1__31363_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__31382 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31382__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31382,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31382);
var G__31382__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31382__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31382__$1);
var G__31382__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31382__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31382__$2);
var G__31382__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31382__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31382__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31382__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31382__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31368__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31397){
var map__31398 = p__31397;
var map__31398__$1 = cljs.core.__destructure_map(map__31398);
var triage_data = map__31398__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31398__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__31407 = phase;
var G__31407__$1 = (((G__31407 instanceof cljs.core.Keyword))?G__31407.fqn:null);
switch (G__31407__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31408 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31409 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31410 = loc;
var G__31411 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31412_31532 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31413_31533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31414_31534 = true;
var _STAR_print_fn_STAR__temp_val__31415_31535 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31414_31534);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31415_31535);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31383_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31383_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31413_31533);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31412_31532);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31408,G__31409,G__31410,G__31411) : format.call(null,G__31408,G__31409,G__31410,G__31411));

break;
case "macroexpansion":
var G__31416 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31417 = cause_type;
var G__31418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31419 = loc;
var G__31420 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31416,G__31417,G__31418,G__31419,G__31420) : format.call(null,G__31416,G__31417,G__31418,G__31419,G__31420));

break;
case "compile-syntax-check":
var G__31421 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31422 = cause_type;
var G__31423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31424 = loc;
var G__31425 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31421,G__31422,G__31423,G__31424,G__31425) : format.call(null,G__31421,G__31422,G__31423,G__31424,G__31425));

break;
case "compilation":
var G__31426 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31427 = cause_type;
var G__31428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31429 = loc;
var G__31430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31426,G__31427,G__31428,G__31429,G__31430) : format.call(null,G__31426,G__31427,G__31428,G__31429,G__31430));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31431 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31432 = symbol;
var G__31433 = loc;
var G__31434 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31435_31536 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31436_31537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31437_31538 = true;
var _STAR_print_fn_STAR__temp_val__31438_31539 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31437_31538);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31438_31539);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31384_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31384_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31436_31537);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31435_31536);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31431,G__31432,G__31433,G__31434) : format.call(null,G__31431,G__31432,G__31433,G__31434));
} else {
var G__31439 = "Execution error%s at %s(%s).\n%s\n";
var G__31440 = cause_type;
var G__31441 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31442 = loc;
var G__31443 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31439,G__31440,G__31441,G__31442,G__31443) : format.call(null,G__31439,G__31440,G__31441,G__31442,G__31443));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31407__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
