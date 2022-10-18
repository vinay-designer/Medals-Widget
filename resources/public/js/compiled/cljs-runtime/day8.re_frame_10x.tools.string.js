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
var len__5766__auto___25766 = arguments.length;
var i__5767__auto___25767 = (0);
while(true){
if((i__5767__auto___25767 < len__5766__auto___25766)){
args__5772__auto__.push((arguments[i__5767__auto___25767]));

var G__25768 = (i__5767__auto___25767 + (1));
i__5767__auto___25767 = G__25768;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__25694){
var vec__25695 = p__25694;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25695,(0),null);
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
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq25691){
var G__25692 = cljs.core.first(seq25691);
var seq25691__$1 = cljs.core.next(seq25691);
var G__25693 = cljs.core.first(seq25691__$1);
var seq25691__$2 = cljs.core.next(seq25691__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25692,G__25693,seq25691__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25775 = arguments.length;
var i__5767__auto___25776 = (0);
while(true){
if((i__5767__auto___25776 < len__5766__auto___25775)){
args__5772__auto__.push((arguments[i__5767__auto___25776]));

var G__25777 = (i__5767__auto___25776 + (1));
i__5767__auto___25776 = G__25777;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__25701){
var vec__25702 = p__25701;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25702,(0),null);
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
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq25698){
var G__25699 = cljs.core.first(seq25698);
var seq25698__$1 = cljs.core.next(seq25698);
var G__25700 = cljs.core.first(seq25698__$1);
var seq25698__$2 = cljs.core.next(seq25698__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25699,G__25700,seq25698__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
