goog.provide('rewrite_clj.zip.move');
/**
 * Move right to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__23686 = zloc;
var G__23686__$1 = (((G__23686 == null))?null:clojure.zip.right(G__23686));
if((G__23686__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__23686__$1);
}
});
/**
 * Move left to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__23687 = zloc;
var G__23687__$1 = (((G__23687 == null))?null:clojure.zip.left(G__23687));
if((G__23687__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__23687__$1);
}
});
/**
 * Move down to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__23688 = zloc;
var G__23688__$1 = (((G__23688 == null))?null:clojure.zip.down(G__23688));
if((G__23688__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__23688__$1);
}
});
/**
 * Move up to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__23689 = zloc;
var G__23689__$1 = (((G__23689 == null))?null:clojure.zip.up(G__23689));
if((G__23689__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__23689__$1);
}
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__5043__auto__ = (function (){var G__23690 = zloc;
var G__23690__$1 = (((G__23690 == null))?null:clojure.zip.next(G__23690));
if((G__23690__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.next,G__23690__$1);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475),true);
}
} else {
return null;
}
});
/**
 * Check whether the given node is at the end of the depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__5043__auto__ = cljs.core.not(zloc);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = clojure.zip.end_QMARK_(zloc);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(zloc));
}
}
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.right(zloc)) == null);
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left(clojure.zip.left(zloc)) == null);
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__23691 = zloc;
var G__23691__$1 = (((G__23691 == null))?null:clojure.zip.prev(G__23691));
if((G__23691__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.prev,G__23691__$1);
}
});
/**
 * Move to the leftmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__23692 = zloc;
var G__23692__$1 = (((G__23692 == null))?null:clojure.zip.leftmost(G__23692));
if((G__23692__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__23692__$1);
}
});
/**
 * Move to the rightmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__23693 = zloc;
var G__23693__$1 = (((G__23693 == null))?null:clojure.zip.rightmost(G__23693));
if((G__23693__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__23693__$1);
}
});

//# sourceMappingURL=rewrite_clj.zip.move.js.map
