goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19251__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19252__i = 0, G__19252__a = new Array(arguments.length -  0);
while (G__19252__i < G__19252__a.length) {G__19252__a[G__19252__i] = arguments[G__19252__i + 0]; ++G__19252__i;}
  args = new cljs.core.IndexedSeq(G__19252__a,0,null);
} 
return G__19251__delegate.call(this,args);};
G__19251.cljs$lang$maxFixedArity = 0;
G__19251.cljs$lang$applyTo = (function (arglist__19253){
var args = cljs.core.seq(arglist__19253);
return G__19251__delegate(args);
});
G__19251.cljs$core$IFn$_invoke$arity$variadic = G__19251__delegate;
return G__19251;
})()
);

(o.error = (function() { 
var G__19254__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19255__i = 0, G__19255__a = new Array(arguments.length -  0);
while (G__19255__i < G__19255__a.length) {G__19255__a[G__19255__i] = arguments[G__19255__i + 0]; ++G__19255__i;}
  args = new cljs.core.IndexedSeq(G__19255__a,0,null);
} 
return G__19254__delegate.call(this,args);};
G__19254.cljs$lang$maxFixedArity = 0;
G__19254.cljs$lang$applyTo = (function (arglist__19256){
var args = cljs.core.seq(arglist__19256);
return G__19254__delegate(args);
});
G__19254.cljs$core$IFn$_invoke$arity$variadic = G__19254__delegate;
return G__19254;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
