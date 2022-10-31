goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rule(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20710 = arguments.length;
var i__5767__auto___20711 = (0);
while(true){
if((i__5767__auto___20711 < len__5766__auto___20710)){
args__5772__auto__.push((arguments[i__5767__auto___20711]));

var G__20712 = (i__5767__auto___20711 + (1));
i__5767__auto___20711 = G__20712;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__20713__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__20713 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__20714__i = 0, G__20714__a = new Array(arguments.length -  0);
while (G__20714__i < G__20714__a.length) {G__20714__a[G__20714__i] = arguments[G__20714__i + 0]; ++G__20714__i;}
  children = new cljs.core.IndexedSeq(G__20714__a,0,null);
} 
return G__20713__delegate.call(this,children);};
G__20713.cljs$lang$maxFixedArity = 0;
G__20713.cljs$lang$applyTo = (function (arglist__20715){
var children = cljs.core.seq(arglist__20715);
return G__20713__delegate(children);
});
G__20713.cljs$core$IFn$_invoke$arity$variadic = G__20713__delegate;
return G__20713;
})()
;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq20675){
var G__20676 = cljs.core.first(seq20675);
var seq20675__$1 = cljs.core.next(seq20675);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20676,seq20675__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__20716__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__20716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20717__i = 0, G__20717__a = new Array(arguments.length -  0);
while (G__20717__i < G__20717__a.length) {G__20717__a[G__20717__i] = arguments[G__20717__i + 0]; ++G__20717__i;}
  args = new cljs.core.IndexedSeq(G__20717__a,0,null);
} 
return G__20716__delegate.call(this,args);};
G__20716.cljs$lang$maxFixedArity = 0;
G__20716.cljs$lang$applyTo = (function (arglist__20718){
var args = cljs.core.seq(arglist__20718);
return G__20716__delegate(args);
});
G__20716.cljs$core$IFn$_invoke$arity$variadic = G__20716__delegate;
return G__20716;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_font_face(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20719 = arguments.length;
var i__5767__auto___20720 = (0);
while(true){
if((i__5767__auto___20720 < len__5766__auto___20719)){
args__5772__auto__.push((arguments[i__5767__auto___20720]));

var G__20721 = (i__5767__auto___20720 + (1));
i__5767__auto___20720 = G__20721;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq20687){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20687));
}));

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_import(var_args){
var G__20693 = arguments.length;
switch (G__20693) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___20723 = arguments.length;
var i__5767__auto___20724 = (0);
while(true){
if((i__5767__auto___20724 < len__5766__auto___20723)){
args_arr__5791__auto__.push((arguments[i__5767__auto___20724]));

var G__20725 = (i__5767__auto___20724 + (1));
i__5767__auto___20724 = G__20725;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5792__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq20690){
var G__20692 = cljs.core.first(seq20690);
var seq20690__$1 = cljs.core.next(seq20690);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20692,seq20690__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_media(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20726 = arguments.length;
var i__5767__auto___20728 = (0);
while(true){
if((i__5767__auto___20728 < len__5766__auto___20726)){
args__5772__auto__.push((arguments[i__5767__auto___20728]));

var G__20729 = (i__5767__auto___20728 + (1));
i__5767__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq20704){
var G__20705 = cljs.core.first(seq20704);
var seq20704__$1 = cljs.core.next(seq20704);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20705,seq20704__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_supports(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20730 = arguments.length;
var i__5767__auto___20731 = (0);
while(true){
if((i__5767__auto___20731 < len__5766__auto___20730)){
args__5772__auto__.push((arguments[i__5767__auto___20731]));

var G__20732 = (i__5767__auto___20731 + (1));
i__5767__auto___20731 = G__20732;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq20706){
var G__20707 = cljs.core.first(seq20706);
var seq20706__$1 = cljs.core.next(seq20706);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20707,seq20706__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_keyframes(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20733 = arguments.length;
var i__5767__auto___20734 = (0);
while(true){
if((i__5767__auto___20734 < len__5766__auto___20733)){
args__5772__auto__.push((arguments[i__5767__auto___20734]));

var G__20735 = (i__5767__auto___20734 + (1));
i__5767__auto___20734 = G__20735;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq20708){
var G__20709 = cljs.core.first(seq20708);
var seq20708__$1 = cljs.core.next(seq20708);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20709,seq20708__$1);
}));

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.js.map
