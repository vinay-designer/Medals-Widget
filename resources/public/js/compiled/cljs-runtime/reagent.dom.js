goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__21923 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21924 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21924);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__21925 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21926 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21926);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21925);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21923);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__21928 = arguments.length;
switch (G__21928) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__21929 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21929,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21929,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__21932_21951 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__21933_21952 = null;
var count__21934_21953 = (0);
var i__21935_21954 = (0);
while(true){
if((i__21935_21954 < count__21934_21953)){
var vec__21942_21955 = chunk__21933_21952.cljs$core$IIndexed$_nth$arity$2(null,i__21935_21954);
var container_21956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942_21955,(0),null);
var comp_21957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942_21955,(1),null);
reagent.dom.re_render_component(comp_21957,container_21956);


var G__21958 = seq__21932_21951;
var G__21959 = chunk__21933_21952;
var G__21960 = count__21934_21953;
var G__21961 = (i__21935_21954 + (1));
seq__21932_21951 = G__21958;
chunk__21933_21952 = G__21959;
count__21934_21953 = G__21960;
i__21935_21954 = G__21961;
continue;
} else {
var temp__5804__auto___21962 = cljs.core.seq(seq__21932_21951);
if(temp__5804__auto___21962){
var seq__21932_21963__$1 = temp__5804__auto___21962;
if(cljs.core.chunked_seq_QMARK_(seq__21932_21963__$1)){
var c__5565__auto___21964 = cljs.core.chunk_first(seq__21932_21963__$1);
var G__21965 = cljs.core.chunk_rest(seq__21932_21963__$1);
var G__21966 = c__5565__auto___21964;
var G__21967 = cljs.core.count(c__5565__auto___21964);
var G__21968 = (0);
seq__21932_21951 = G__21965;
chunk__21933_21952 = G__21966;
count__21934_21953 = G__21967;
i__21935_21954 = G__21968;
continue;
} else {
var vec__21945_21969 = cljs.core.first(seq__21932_21963__$1);
var container_21970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21945_21969,(0),null);
var comp_21971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21945_21969,(1),null);
reagent.dom.re_render_component(comp_21971,container_21970);


var G__21972 = cljs.core.next(seq__21932_21963__$1);
var G__21973 = null;
var G__21974 = (0);
var G__21975 = (0);
seq__21932_21951 = G__21972;
chunk__21933_21952 = G__21973;
count__21934_21953 = G__21974;
i__21935_21954 = G__21975;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
