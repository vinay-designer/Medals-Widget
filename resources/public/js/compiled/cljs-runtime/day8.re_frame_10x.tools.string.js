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
var len__5766__auto___25784 = arguments.length;
var i__5767__auto___25785 = (0);
while(true){
if((i__5767__auto___25785 < len__5766__auto___25784)){
args__5772__auto__.push((arguments[i__5767__auto___25785]));

var G__25786 = (i__5767__auto___25785 + (1));
i__5767__auto___25785 = G__25786;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__25773){
var vec__25774 = p__25773;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25774,(0),null);
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
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq25770){
var G__25771 = cljs.core.first(seq25770);
var seq25770__$1 = cljs.core.next(seq25770);
var G__25772 = cljs.core.first(seq25770__$1);
var seq25770__$2 = cljs.core.next(seq25770__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25771,G__25772,seq25770__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25787 = arguments.length;
var i__5767__auto___25788 = (0);
while(true){
if((i__5767__auto___25788 < len__5766__auto___25787)){
args__5772__auto__.push((arguments[i__5767__auto___25788]));

var G__25789 = (i__5767__auto___25788 + (1));
i__5767__auto___25788 = G__25789;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__25780){
var vec__25781 = p__25780;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25781,(0),null);
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
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq25777){
var G__25778 = cljs.core.first(seq25777);
var seq25777__$1 = cljs.core.next(seq25777);
var G__25779 = cljs.core.first(seq25777__$1);
var seq25777__$2 = cljs.core.next(seq25777__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25778,G__25779,seq25777__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
