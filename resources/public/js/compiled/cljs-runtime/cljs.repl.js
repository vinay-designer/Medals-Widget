goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31307){
var map__31308 = p__31307;
var map__31308__$1 = cljs.core.__destructure_map(map__31308);
var m = map__31308__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31308__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31308__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31309_31448 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31310_31449 = null;
var count__31311_31450 = (0);
var i__31312_31451 = (0);
while(true){
if((i__31312_31451 < count__31311_31450)){
var f_31452 = chunk__31310_31449.cljs$core$IIndexed$_nth$arity$2(null,i__31312_31451);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31452], 0));


var G__31453 = seq__31309_31448;
var G__31454 = chunk__31310_31449;
var G__31455 = count__31311_31450;
var G__31456 = (i__31312_31451 + (1));
seq__31309_31448 = G__31453;
chunk__31310_31449 = G__31454;
count__31311_31450 = G__31455;
i__31312_31451 = G__31456;
continue;
} else {
var temp__5804__auto___31458 = cljs.core.seq(seq__31309_31448);
if(temp__5804__auto___31458){
var seq__31309_31459__$1 = temp__5804__auto___31458;
if(cljs.core.chunked_seq_QMARK_(seq__31309_31459__$1)){
var c__5565__auto___31460 = cljs.core.chunk_first(seq__31309_31459__$1);
var G__31461 = cljs.core.chunk_rest(seq__31309_31459__$1);
var G__31462 = c__5565__auto___31460;
var G__31463 = cljs.core.count(c__5565__auto___31460);
var G__31464 = (0);
seq__31309_31448 = G__31461;
chunk__31310_31449 = G__31462;
count__31311_31450 = G__31463;
i__31312_31451 = G__31464;
continue;
} else {
var f_31465 = cljs.core.first(seq__31309_31459__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31465], 0));


var G__31466 = cljs.core.next(seq__31309_31459__$1);
var G__31467 = null;
var G__31468 = (0);
var G__31469 = (0);
seq__31309_31448 = G__31466;
chunk__31310_31449 = G__31467;
count__31311_31450 = G__31468;
i__31312_31451 = G__31469;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31470 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31470], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31470)))?cljs.core.second(arglists_31470):arglists_31470)], 0));
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
var seq__31314_31471 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31315_31472 = null;
var count__31316_31473 = (0);
var i__31317_31474 = (0);
while(true){
if((i__31317_31474 < count__31316_31473)){
var vec__31334_31476 = chunk__31315_31472.cljs$core$IIndexed$_nth$arity$2(null,i__31317_31474);
var name_31477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31334_31476,(0),null);
var map__31337_31478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31334_31476,(1),null);
var map__31337_31479__$1 = cljs.core.__destructure_map(map__31337_31478);
var doc_31480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31337_31479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31337_31479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31477], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31481], 0));

if(cljs.core.truth_(doc_31480)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31480], 0));
} else {
}


var G__31482 = seq__31314_31471;
var G__31483 = chunk__31315_31472;
var G__31484 = count__31316_31473;
var G__31485 = (i__31317_31474 + (1));
seq__31314_31471 = G__31482;
chunk__31315_31472 = G__31483;
count__31316_31473 = G__31484;
i__31317_31474 = G__31485;
continue;
} else {
var temp__5804__auto___31486 = cljs.core.seq(seq__31314_31471);
if(temp__5804__auto___31486){
var seq__31314_31487__$1 = temp__5804__auto___31486;
if(cljs.core.chunked_seq_QMARK_(seq__31314_31487__$1)){
var c__5565__auto___31488 = cljs.core.chunk_first(seq__31314_31487__$1);
var G__31490 = cljs.core.chunk_rest(seq__31314_31487__$1);
var G__31491 = c__5565__auto___31488;
var G__31492 = cljs.core.count(c__5565__auto___31488);
var G__31493 = (0);
seq__31314_31471 = G__31490;
chunk__31315_31472 = G__31491;
count__31316_31473 = G__31492;
i__31317_31474 = G__31493;
continue;
} else {
var vec__31354_31497 = cljs.core.first(seq__31314_31487__$1);
var name_31498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31354_31497,(0),null);
var map__31357_31499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31354_31497,(1),null);
var map__31357_31500__$1 = cljs.core.__destructure_map(map__31357_31499);
var doc_31501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357_31500__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357_31500__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31498], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31502], 0));

if(cljs.core.truth_(doc_31501)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31501], 0));
} else {
}


var G__31503 = cljs.core.next(seq__31314_31487__$1);
var G__31504 = null;
var G__31505 = (0);
var G__31506 = (0);
seq__31314_31471 = G__31503;
chunk__31315_31472 = G__31504;
count__31316_31473 = G__31505;
i__31317_31474 = G__31506;
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

var seq__31358 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31359 = null;
var count__31360 = (0);
var i__31361 = (0);
while(true){
if((i__31361 < count__31360)){
var role = chunk__31359.cljs$core$IIndexed$_nth$arity$2(null,i__31361);
var temp__5804__auto___31507__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31507__$1)){
var spec_31508 = temp__5804__auto___31507__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31508)], 0));
} else {
}


var G__31509 = seq__31358;
var G__31510 = chunk__31359;
var G__31511 = count__31360;
var G__31512 = (i__31361 + (1));
seq__31358 = G__31509;
chunk__31359 = G__31510;
count__31360 = G__31511;
i__31361 = G__31512;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__31358);
if(temp__5804__auto____$1){
var seq__31358__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31358__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31358__$1);
var G__31513 = cljs.core.chunk_rest(seq__31358__$1);
var G__31514 = c__5565__auto__;
var G__31515 = cljs.core.count(c__5565__auto__);
var G__31516 = (0);
seq__31358 = G__31513;
chunk__31359 = G__31514;
count__31360 = G__31515;
i__31361 = G__31516;
continue;
} else {
var role = cljs.core.first(seq__31358__$1);
var temp__5804__auto___31517__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31517__$2)){
var spec_31518 = temp__5804__auto___31517__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31518)], 0));
} else {
}


var G__31519 = cljs.core.next(seq__31358__$1);
var G__31520 = null;
var G__31521 = (0);
var G__31522 = (0);
seq__31358 = G__31519;
chunk__31359 = G__31520;
count__31360 = G__31521;
i__31361 = G__31522;
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
var map__31384 = datafied_throwable;
var map__31384__$1 = cljs.core.__destructure_map(map__31384);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31384__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31384__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31384__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31385 = cljs.core.last(via);
var map__31385__$1 = cljs.core.__destructure_map(map__31385);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31385__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31385__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31385__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31386 = data;
var map__31386__$1 = cljs.core.__destructure_map(map__31386);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31386__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31386__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31386__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31387 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31387__$1 = cljs.core.__destructure_map(map__31387);
var top_data = map__31387__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31387__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31388 = phase;
var G__31388__$1 = (((G__31388 instanceof cljs.core.Keyword))?G__31388.fqn:null);
switch (G__31388__$1) {
case "read-source":
var map__31389 = data;
var map__31389__$1 = cljs.core.__destructure_map(map__31389);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31389__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31389__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31390 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31390__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31390,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31390);
var G__31390__$2 = (cljs.core.truth_((function (){var fexpr__31391 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31391.cljs$core$IFn$_invoke$arity$1 ? fexpr__31391.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31391.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31390__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31390__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31390__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31390__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31392 = top_data;
var G__31392__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31392,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31392);
var G__31392__$2 = (cljs.core.truth_((function (){var fexpr__31393 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31393.cljs$core$IFn$_invoke$arity$1 ? fexpr__31393.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31393.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31392__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31392__$1);
var G__31392__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31392__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31392__$2);
var G__31392__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31392__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31392__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31392__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31392__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31394 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31394,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31394,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31394,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31394,(3),null);
var G__31397 = top_data;
var G__31397__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31397,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31397);
var G__31397__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31397__$1);
var G__31397__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31397__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31397__$2);
var G__31397__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31397__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31397__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31397__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31397__$4;
}

break;
case "execution":
var vec__31398 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31398,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31398,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31398,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31398,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31383_SHARP_){
var or__5043__auto__ = (p1__31383_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__31401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31401.cljs$core$IFn$_invoke$arity$1 ? fexpr__31401.cljs$core$IFn$_invoke$arity$1(p1__31383_SHARP_) : fexpr__31401.call(null,p1__31383_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__31402 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31402__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31402);
var G__31402__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31402__$1);
var G__31402__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31402__$2);
var G__31402__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31402__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31402__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31388__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31405){
var map__31406 = p__31405;
var map__31406__$1 = cljs.core.__destructure_map(map__31406);
var triage_data = map__31406__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31403_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31403_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31404_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31404_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
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
