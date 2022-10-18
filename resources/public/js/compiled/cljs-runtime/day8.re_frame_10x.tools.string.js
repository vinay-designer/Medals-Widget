goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25699 = arguments.length;
var i__5767__auto___25700 = (0);
while(true){
if((i__5767__auto___25700 < len__5766__auto___25699)){
args__5772__auto__.push((arguments[i__5767__auto___25700]));

var G__25701 = (i__5767__auto___25700 + (1));
i__5767__auto___25700 = G__25701;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__25676){
var vec__25677 = p__25676;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25677,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5043__auto__ = plural;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq25665){
var G__25666 = cljs.core.first(seq25665);
var seq25665__$1 = cljs.core.next(seq25665);
var G__25667 = cljs.core.first(seq25665__$1);
var seq25665__$2 = cljs.core.next(seq25665__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25666,G__25667,seq25665__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25702 = arguments.length;
var i__5767__auto___25703 = (0);
while(true){
if((i__5767__auto___25703 < len__5766__auto___25702)){
args__5772__auto__.push((arguments[i__5767__auto___25703]));

var G__25704 = (i__5767__auto___25703 + (1));
i__5767__auto___25703 = G__25704;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__25691){
var vec__25692 = p__25691;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25692,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5043__auto__ = plural;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq25688){
var G__25689 = cljs.core.first(seq25688);
var seq25688__$1 = cljs.core.next(seq25688);
var G__25690 = cljs.core.first(seq25688__$1);
var seq25688__$2 = cljs.core.next(seq25688__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25689,G__25690,seq25688__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
