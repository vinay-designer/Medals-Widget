goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30175 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_30175(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30176 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_30176(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29475 = coll;
var G__29476 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29475,G__29476) : shadow.dom.lazy_native_coll_seq.call(null,G__29475,G__29476));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__29486 = arguments.length;
switch (G__29486) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__29490 = arguments.length;
switch (G__29490) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__29498 = arguments.length;
switch (G__29498) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__29509 = arguments.length;
switch (G__29509) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__29517 = arguments.length;
switch (G__29517) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__29530 = arguments.length;
switch (G__29530) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e29537){if((e29537 instanceof Object)){
var e = e29537;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29537;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__29549 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29550 = null;
var count__29551 = (0);
var i__29552 = (0);
while(true){
if((i__29552 < count__29551)){
var el = chunk__29550.cljs$core$IIndexed$_nth$arity$2(null,i__29552);
var handler_30188__$1 = ((function (seq__29549,chunk__29550,count__29551,i__29552,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29549,chunk__29550,count__29551,i__29552,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30188__$1);


var G__30189 = seq__29549;
var G__30190 = chunk__29550;
var G__30191 = count__29551;
var G__30192 = (i__29552 + (1));
seq__29549 = G__30189;
chunk__29550 = G__30190;
count__29551 = G__30191;
i__29552 = G__30192;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29549);
if(temp__5804__auto__){
var seq__29549__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29549__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29549__$1);
var G__30193 = cljs.core.chunk_rest(seq__29549__$1);
var G__30194 = c__5565__auto__;
var G__30195 = cljs.core.count(c__5565__auto__);
var G__30196 = (0);
seq__29549 = G__30193;
chunk__29550 = G__30194;
count__29551 = G__30195;
i__29552 = G__30196;
continue;
} else {
var el = cljs.core.first(seq__29549__$1);
var handler_30197__$1 = ((function (seq__29549,chunk__29550,count__29551,i__29552,el,seq__29549__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29549,chunk__29550,count__29551,i__29552,el,seq__29549__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30197__$1);


var G__30198 = cljs.core.next(seq__29549__$1);
var G__30199 = null;
var G__30200 = (0);
var G__30201 = (0);
seq__29549 = G__30198;
chunk__29550 = G__30199;
count__29551 = G__30200;
i__29552 = G__30201;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__29567 = arguments.length;
switch (G__29567) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__29580 = cljs.core.seq(events);
var chunk__29581 = null;
var count__29582 = (0);
var i__29583 = (0);
while(true){
if((i__29583 < count__29582)){
var vec__29596 = chunk__29581.cljs$core$IIndexed$_nth$arity$2(null,i__29583);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29596,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30204 = seq__29580;
var G__30205 = chunk__29581;
var G__30206 = count__29582;
var G__30207 = (i__29583 + (1));
seq__29580 = G__30204;
chunk__29581 = G__30205;
count__29582 = G__30206;
i__29583 = G__30207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29580);
if(temp__5804__auto__){
var seq__29580__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29580__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29580__$1);
var G__30209 = cljs.core.chunk_rest(seq__29580__$1);
var G__30210 = c__5565__auto__;
var G__30211 = cljs.core.count(c__5565__auto__);
var G__30212 = (0);
seq__29580 = G__30209;
chunk__29581 = G__30210;
count__29582 = G__30211;
i__29583 = G__30212;
continue;
} else {
var vec__29600 = cljs.core.first(seq__29580__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29600,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30214 = cljs.core.next(seq__29580__$1);
var G__30215 = null;
var G__30216 = (0);
var G__30217 = (0);
seq__29580 = G__30214;
chunk__29581 = G__30215;
count__29582 = G__30216;
i__29583 = G__30217;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29604 = cljs.core.seq(styles);
var chunk__29605 = null;
var count__29606 = (0);
var i__29607 = (0);
while(true){
if((i__29607 < count__29606)){
var vec__29621 = chunk__29605.cljs$core$IIndexed$_nth$arity$2(null,i__29607);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29621,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30218 = seq__29604;
var G__30219 = chunk__29605;
var G__30220 = count__29606;
var G__30221 = (i__29607 + (1));
seq__29604 = G__30218;
chunk__29605 = G__30219;
count__29606 = G__30220;
i__29607 = G__30221;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29604);
if(temp__5804__auto__){
var seq__29604__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29604__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29604__$1);
var G__30222 = cljs.core.chunk_rest(seq__29604__$1);
var G__30223 = c__5565__auto__;
var G__30224 = cljs.core.count(c__5565__auto__);
var G__30225 = (0);
seq__29604 = G__30222;
chunk__29605 = G__30223;
count__29606 = G__30224;
i__29607 = G__30225;
continue;
} else {
var vec__29627 = cljs.core.first(seq__29604__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29627,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29627,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30226 = cljs.core.next(seq__29604__$1);
var G__30227 = null;
var G__30228 = (0);
var G__30229 = (0);
seq__29604 = G__30226;
chunk__29605 = G__30227;
count__29606 = G__30228;
i__29607 = G__30229;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29636_30230 = key;
var G__29636_30231__$1 = (((G__29636_30230 instanceof cljs.core.Keyword))?G__29636_30230.fqn:null);
switch (G__29636_30231__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_30234 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_30234,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_30234,"aria-");
}
})())){
el.setAttribute(ks_30234,value);
} else {
(el[ks_30234] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29655){
var map__29657 = p__29655;
var map__29657__$1 = cljs.core.__destructure_map(map__29657);
var props = map__29657__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29657__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29659 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29662 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29662,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29662;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29667 = arguments.length;
switch (G__29667) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29679){
var vec__29681 = p__29679;
var seq__29682 = cljs.core.seq(vec__29681);
var first__29683 = cljs.core.first(seq__29682);
var seq__29682__$1 = cljs.core.next(seq__29682);
var nn = first__29683;
var first__29683__$1 = cljs.core.first(seq__29682__$1);
var seq__29682__$2 = cljs.core.next(seq__29682__$1);
var np = first__29683__$1;
var nc = seq__29682__$2;
var node = vec__29681;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29686 = nn;
var G__29687 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29686,G__29687) : create_fn.call(null,G__29686,G__29687));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29689 = nn;
var G__29690 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29689,G__29690) : create_fn.call(null,G__29689,G__29690));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29692 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29692,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29692,(1),null);
var seq__29695_30241 = cljs.core.seq(node_children);
var chunk__29696_30242 = null;
var count__29697_30243 = (0);
var i__29698_30244 = (0);
while(true){
if((i__29698_30244 < count__29697_30243)){
var child_struct_30245 = chunk__29696_30242.cljs$core$IIndexed$_nth$arity$2(null,i__29698_30244);
var children_30249 = shadow.dom.dom_node(child_struct_30245);
if(cljs.core.seq_QMARK_(children_30249)){
var seq__29725_30250 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30249));
var chunk__29727_30251 = null;
var count__29728_30252 = (0);
var i__29729_30253 = (0);
while(true){
if((i__29729_30253 < count__29728_30252)){
var child_30254 = chunk__29727_30251.cljs$core$IIndexed$_nth$arity$2(null,i__29729_30253);
if(cljs.core.truth_(child_30254)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30254);


var G__30255 = seq__29725_30250;
var G__30256 = chunk__29727_30251;
var G__30257 = count__29728_30252;
var G__30258 = (i__29729_30253 + (1));
seq__29725_30250 = G__30255;
chunk__29727_30251 = G__30256;
count__29728_30252 = G__30257;
i__29729_30253 = G__30258;
continue;
} else {
var G__30259 = seq__29725_30250;
var G__30260 = chunk__29727_30251;
var G__30261 = count__29728_30252;
var G__30262 = (i__29729_30253 + (1));
seq__29725_30250 = G__30259;
chunk__29727_30251 = G__30260;
count__29728_30252 = G__30261;
i__29729_30253 = G__30262;
continue;
}
} else {
var temp__5804__auto___30263 = cljs.core.seq(seq__29725_30250);
if(temp__5804__auto___30263){
var seq__29725_30264__$1 = temp__5804__auto___30263;
if(cljs.core.chunked_seq_QMARK_(seq__29725_30264__$1)){
var c__5565__auto___30265 = cljs.core.chunk_first(seq__29725_30264__$1);
var G__30266 = cljs.core.chunk_rest(seq__29725_30264__$1);
var G__30267 = c__5565__auto___30265;
var G__30268 = cljs.core.count(c__5565__auto___30265);
var G__30269 = (0);
seq__29725_30250 = G__30266;
chunk__29727_30251 = G__30267;
count__29728_30252 = G__30268;
i__29729_30253 = G__30269;
continue;
} else {
var child_30270 = cljs.core.first(seq__29725_30264__$1);
if(cljs.core.truth_(child_30270)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30270);


var G__30271 = cljs.core.next(seq__29725_30264__$1);
var G__30272 = null;
var G__30273 = (0);
var G__30274 = (0);
seq__29725_30250 = G__30271;
chunk__29727_30251 = G__30272;
count__29728_30252 = G__30273;
i__29729_30253 = G__30274;
continue;
} else {
var G__30275 = cljs.core.next(seq__29725_30264__$1);
var G__30276 = null;
var G__30277 = (0);
var G__30278 = (0);
seq__29725_30250 = G__30275;
chunk__29727_30251 = G__30276;
count__29728_30252 = G__30277;
i__29729_30253 = G__30278;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30249);
}


var G__30279 = seq__29695_30241;
var G__30280 = chunk__29696_30242;
var G__30281 = count__29697_30243;
var G__30282 = (i__29698_30244 + (1));
seq__29695_30241 = G__30279;
chunk__29696_30242 = G__30280;
count__29697_30243 = G__30281;
i__29698_30244 = G__30282;
continue;
} else {
var temp__5804__auto___30283 = cljs.core.seq(seq__29695_30241);
if(temp__5804__auto___30283){
var seq__29695_30284__$1 = temp__5804__auto___30283;
if(cljs.core.chunked_seq_QMARK_(seq__29695_30284__$1)){
var c__5565__auto___30289 = cljs.core.chunk_first(seq__29695_30284__$1);
var G__30290 = cljs.core.chunk_rest(seq__29695_30284__$1);
var G__30291 = c__5565__auto___30289;
var G__30292 = cljs.core.count(c__5565__auto___30289);
var G__30293 = (0);
seq__29695_30241 = G__30290;
chunk__29696_30242 = G__30291;
count__29697_30243 = G__30292;
i__29698_30244 = G__30293;
continue;
} else {
var child_struct_30294 = cljs.core.first(seq__29695_30284__$1);
var children_30295 = shadow.dom.dom_node(child_struct_30294);
if(cljs.core.seq_QMARK_(children_30295)){
var seq__29741_30296 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30295));
var chunk__29743_30297 = null;
var count__29744_30298 = (0);
var i__29745_30299 = (0);
while(true){
if((i__29745_30299 < count__29744_30298)){
var child_30300 = chunk__29743_30297.cljs$core$IIndexed$_nth$arity$2(null,i__29745_30299);
if(cljs.core.truth_(child_30300)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30300);


var G__30301 = seq__29741_30296;
var G__30302 = chunk__29743_30297;
var G__30303 = count__29744_30298;
var G__30304 = (i__29745_30299 + (1));
seq__29741_30296 = G__30301;
chunk__29743_30297 = G__30302;
count__29744_30298 = G__30303;
i__29745_30299 = G__30304;
continue;
} else {
var G__30305 = seq__29741_30296;
var G__30306 = chunk__29743_30297;
var G__30307 = count__29744_30298;
var G__30308 = (i__29745_30299 + (1));
seq__29741_30296 = G__30305;
chunk__29743_30297 = G__30306;
count__29744_30298 = G__30307;
i__29745_30299 = G__30308;
continue;
}
} else {
var temp__5804__auto___30309__$1 = cljs.core.seq(seq__29741_30296);
if(temp__5804__auto___30309__$1){
var seq__29741_30310__$1 = temp__5804__auto___30309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29741_30310__$1)){
var c__5565__auto___30311 = cljs.core.chunk_first(seq__29741_30310__$1);
var G__30312 = cljs.core.chunk_rest(seq__29741_30310__$1);
var G__30313 = c__5565__auto___30311;
var G__30314 = cljs.core.count(c__5565__auto___30311);
var G__30315 = (0);
seq__29741_30296 = G__30312;
chunk__29743_30297 = G__30313;
count__29744_30298 = G__30314;
i__29745_30299 = G__30315;
continue;
} else {
var child_30316 = cljs.core.first(seq__29741_30310__$1);
if(cljs.core.truth_(child_30316)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30316);


var G__30317 = cljs.core.next(seq__29741_30310__$1);
var G__30318 = null;
var G__30319 = (0);
var G__30320 = (0);
seq__29741_30296 = G__30317;
chunk__29743_30297 = G__30318;
count__29744_30298 = G__30319;
i__29745_30299 = G__30320;
continue;
} else {
var G__30321 = cljs.core.next(seq__29741_30310__$1);
var G__30322 = null;
var G__30323 = (0);
var G__30324 = (0);
seq__29741_30296 = G__30321;
chunk__29743_30297 = G__30322;
count__29744_30298 = G__30323;
i__29745_30299 = G__30324;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30295);
}


var G__30325 = cljs.core.next(seq__29695_30284__$1);
var G__30326 = null;
var G__30327 = (0);
var G__30328 = (0);
seq__29695_30241 = G__30325;
chunk__29696_30242 = G__30326;
count__29697_30243 = G__30327;
i__29698_30244 = G__30328;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__29777 = cljs.core.seq(node);
var chunk__29779 = null;
var count__29780 = (0);
var i__29781 = (0);
while(true){
if((i__29781 < count__29780)){
var n = chunk__29779.cljs$core$IIndexed$_nth$arity$2(null,i__29781);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30329 = seq__29777;
var G__30330 = chunk__29779;
var G__30331 = count__29780;
var G__30332 = (i__29781 + (1));
seq__29777 = G__30329;
chunk__29779 = G__30330;
count__29780 = G__30331;
i__29781 = G__30332;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29777);
if(temp__5804__auto__){
var seq__29777__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29777__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29777__$1);
var G__30333 = cljs.core.chunk_rest(seq__29777__$1);
var G__30334 = c__5565__auto__;
var G__30335 = cljs.core.count(c__5565__auto__);
var G__30336 = (0);
seq__29777 = G__30333;
chunk__29779 = G__30334;
count__29780 = G__30335;
i__29781 = G__30336;
continue;
} else {
var n = cljs.core.first(seq__29777__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30337 = cljs.core.next(seq__29777__$1);
var G__30338 = null;
var G__30339 = (0);
var G__30340 = (0);
seq__29777 = G__30337;
chunk__29779 = G__30338;
count__29780 = G__30339;
i__29781 = G__30340;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__29792 = arguments.length;
switch (G__29792) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__29796 = arguments.length;
switch (G__29796) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29806 = arguments.length;
switch (G__29806) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30351 = arguments.length;
var i__5767__auto___30352 = (0);
while(true){
if((i__5767__auto___30352 < len__5766__auto___30351)){
args__5772__auto__.push((arguments[i__5767__auto___30352]));

var G__30353 = (i__5767__auto___30352 + (1));
i__5767__auto___30352 = G__30353;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29813_30357 = cljs.core.seq(nodes);
var chunk__29814_30358 = null;
var count__29815_30359 = (0);
var i__29816_30360 = (0);
while(true){
if((i__29816_30360 < count__29815_30359)){
var node_30361 = chunk__29814_30358.cljs$core$IIndexed$_nth$arity$2(null,i__29816_30360);
fragment.appendChild(shadow.dom._to_dom(node_30361));


var G__30362 = seq__29813_30357;
var G__30363 = chunk__29814_30358;
var G__30364 = count__29815_30359;
var G__30365 = (i__29816_30360 + (1));
seq__29813_30357 = G__30362;
chunk__29814_30358 = G__30363;
count__29815_30359 = G__30364;
i__29816_30360 = G__30365;
continue;
} else {
var temp__5804__auto___30366 = cljs.core.seq(seq__29813_30357);
if(temp__5804__auto___30366){
var seq__29813_30367__$1 = temp__5804__auto___30366;
if(cljs.core.chunked_seq_QMARK_(seq__29813_30367__$1)){
var c__5565__auto___30368 = cljs.core.chunk_first(seq__29813_30367__$1);
var G__30369 = cljs.core.chunk_rest(seq__29813_30367__$1);
var G__30370 = c__5565__auto___30368;
var G__30371 = cljs.core.count(c__5565__auto___30368);
var G__30372 = (0);
seq__29813_30357 = G__30369;
chunk__29814_30358 = G__30370;
count__29815_30359 = G__30371;
i__29816_30360 = G__30372;
continue;
} else {
var node_30373 = cljs.core.first(seq__29813_30367__$1);
fragment.appendChild(shadow.dom._to_dom(node_30373));


var G__30374 = cljs.core.next(seq__29813_30367__$1);
var G__30375 = null;
var G__30376 = (0);
var G__30377 = (0);
seq__29813_30357 = G__30374;
chunk__29814_30358 = G__30375;
count__29815_30359 = G__30376;
i__29816_30360 = G__30377;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29808){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29808));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29829_30378 = cljs.core.seq(scripts);
var chunk__29830_30379 = null;
var count__29831_30380 = (0);
var i__29832_30381 = (0);
while(true){
if((i__29832_30381 < count__29831_30380)){
var vec__29847_30385 = chunk__29830_30379.cljs$core$IIndexed$_nth$arity$2(null,i__29832_30381);
var script_tag_30386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29847_30385,(0),null);
var script_body_30387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29847_30385,(1),null);
eval(script_body_30387);


var G__30388 = seq__29829_30378;
var G__30389 = chunk__29830_30379;
var G__30390 = count__29831_30380;
var G__30391 = (i__29832_30381 + (1));
seq__29829_30378 = G__30388;
chunk__29830_30379 = G__30389;
count__29831_30380 = G__30390;
i__29832_30381 = G__30391;
continue;
} else {
var temp__5804__auto___30392 = cljs.core.seq(seq__29829_30378);
if(temp__5804__auto___30392){
var seq__29829_30393__$1 = temp__5804__auto___30392;
if(cljs.core.chunked_seq_QMARK_(seq__29829_30393__$1)){
var c__5565__auto___30394 = cljs.core.chunk_first(seq__29829_30393__$1);
var G__30395 = cljs.core.chunk_rest(seq__29829_30393__$1);
var G__30396 = c__5565__auto___30394;
var G__30397 = cljs.core.count(c__5565__auto___30394);
var G__30398 = (0);
seq__29829_30378 = G__30395;
chunk__29830_30379 = G__30396;
count__29831_30380 = G__30397;
i__29832_30381 = G__30398;
continue;
} else {
var vec__29854_30399 = cljs.core.first(seq__29829_30393__$1);
var script_tag_30400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29854_30399,(0),null);
var script_body_30401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29854_30399,(1),null);
eval(script_body_30401);


var G__30402 = cljs.core.next(seq__29829_30393__$1);
var G__30403 = null;
var G__30404 = (0);
var G__30405 = (0);
seq__29829_30378 = G__30402;
chunk__29830_30379 = G__30403;
count__29831_30380 = G__30404;
i__29832_30381 = G__30405;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29859){
var vec__29860 = p__29859;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29869 = arguments.length;
switch (G__29869) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29874 = cljs.core.seq(style_keys);
var chunk__29875 = null;
var count__29876 = (0);
var i__29877 = (0);
while(true){
if((i__29877 < count__29876)){
var it = chunk__29875.cljs$core$IIndexed$_nth$arity$2(null,i__29877);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30407 = seq__29874;
var G__30408 = chunk__29875;
var G__30409 = count__29876;
var G__30410 = (i__29877 + (1));
seq__29874 = G__30407;
chunk__29875 = G__30408;
count__29876 = G__30409;
i__29877 = G__30410;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29874);
if(temp__5804__auto__){
var seq__29874__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29874__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29874__$1);
var G__30411 = cljs.core.chunk_rest(seq__29874__$1);
var G__30412 = c__5565__auto__;
var G__30413 = cljs.core.count(c__5565__auto__);
var G__30414 = (0);
seq__29874 = G__30411;
chunk__29875 = G__30412;
count__29876 = G__30413;
i__29877 = G__30414;
continue;
} else {
var it = cljs.core.first(seq__29874__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30415 = cljs.core.next(seq__29874__$1);
var G__30416 = null;
var G__30417 = (0);
var G__30418 = (0);
seq__29874 = G__30415;
chunk__29875 = G__30416;
count__29876 = G__30417;
i__29877 = G__30418;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k29887,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__29899 = k29887;
var G__29899__$1 = (((G__29899 instanceof cljs.core.Keyword))?G__29899.fqn:null);
switch (G__29899__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29887,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__29903){
var vec__29904 = p__29903;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29904,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29904,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29886){
var self__ = this;
var G__29886__$1 = this;
return (new cljs.core.RecordIter((0),G__29886__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29888,other29889){
var self__ = this;
var this29888__$1 = this;
return (((!((other29889 == null)))) && ((((this29888__$1.constructor === other29889.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29888__$1.x,other29889.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29888__$1.y,other29889.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29888__$1.__extmap,other29889.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k29887){
var self__ = this;
var this__5347__auto____$1 = this;
var G__29922 = k29887;
var G__29922__$1 = (((G__29922 instanceof cljs.core.Keyword))?G__29922.fqn:null);
switch (G__29922__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29887);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__29886){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__29924 = cljs.core.keyword_identical_QMARK_;
var expr__29925 = k__5349__auto__;
if(cljs.core.truth_((pred__29924.cljs$core$IFn$_invoke$arity$2 ? pred__29924.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29925) : pred__29924.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29925)))){
return (new shadow.dom.Coordinate(G__29886,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29924.cljs$core$IFn$_invoke$arity$2 ? pred__29924.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29925) : pred__29924.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29925)))){
return (new shadow.dom.Coordinate(self__.x,G__29886,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__29886),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__29886){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29886,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29893){
var extmap__5382__auto__ = (function (){var G__29939 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29893,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29893)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29939);
} else {
return G__29939;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29893),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29893),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k29947,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__29952 = k29947;
var G__29952__$1 = (((G__29952 instanceof cljs.core.Keyword))?G__29952.fqn:null);
switch (G__29952__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29947,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__29953){
var vec__29954 = p__29953;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29954,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29954,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29946){
var self__ = this;
var G__29946__$1 = this;
return (new cljs.core.RecordIter((0),G__29946__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29948,other29949){
var self__ = this;
var this29948__$1 = this;
return (((!((other29949 == null)))) && ((((this29948__$1.constructor === other29949.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29948__$1.w,other29949.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29948__$1.h,other29949.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29948__$1.__extmap,other29949.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k29947){
var self__ = this;
var this__5347__auto____$1 = this;
var G__29970 = k29947;
var G__29970__$1 = (((G__29970 instanceof cljs.core.Keyword))?G__29970.fqn:null);
switch (G__29970__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29947);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__29946){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__29972 = cljs.core.keyword_identical_QMARK_;
var expr__29973 = k__5349__auto__;
if(cljs.core.truth_((pred__29972.cljs$core$IFn$_invoke$arity$2 ? pred__29972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29973) : pred__29972.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29973)))){
return (new shadow.dom.Size(G__29946,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29972.cljs$core$IFn$_invoke$arity$2 ? pred__29972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29973) : pred__29972.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29973)))){
return (new shadow.dom.Size(self__.w,G__29946,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__29946),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__29946){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29946,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29950){
var extmap__5382__auto__ = (function (){var G__29986 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29950,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29950)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29986);
} else {
return G__29986;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29950),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29950),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__30444 = (i + (1));
var G__30445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30444;
ret = G__30445;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29998){
var vec__29999 = p__29998;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29999,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29999,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30003 = arguments.length;
switch (G__30003) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__30450 = ps;
var G__30451 = (i + (1));
el__$1 = G__30450;
i = G__30451;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__30029 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30029,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30029,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30029,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30033_30454 = cljs.core.seq(props);
var chunk__30034_30455 = null;
var count__30035_30456 = (0);
var i__30036_30457 = (0);
while(true){
if((i__30036_30457 < count__30035_30456)){
var vec__30046_30458 = chunk__30034_30455.cljs$core$IIndexed$_nth$arity$2(null,i__30036_30457);
var k_30459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30046_30458,(0),null);
var v_30460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30046_30458,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_30459);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30459),v_30460);


var G__30461 = seq__30033_30454;
var G__30462 = chunk__30034_30455;
var G__30463 = count__30035_30456;
var G__30464 = (i__30036_30457 + (1));
seq__30033_30454 = G__30461;
chunk__30034_30455 = G__30462;
count__30035_30456 = G__30463;
i__30036_30457 = G__30464;
continue;
} else {
var temp__5804__auto___30465 = cljs.core.seq(seq__30033_30454);
if(temp__5804__auto___30465){
var seq__30033_30467__$1 = temp__5804__auto___30465;
if(cljs.core.chunked_seq_QMARK_(seq__30033_30467__$1)){
var c__5565__auto___30468 = cljs.core.chunk_first(seq__30033_30467__$1);
var G__30469 = cljs.core.chunk_rest(seq__30033_30467__$1);
var G__30470 = c__5565__auto___30468;
var G__30471 = cljs.core.count(c__5565__auto___30468);
var G__30472 = (0);
seq__30033_30454 = G__30469;
chunk__30034_30455 = G__30470;
count__30035_30456 = G__30471;
i__30036_30457 = G__30472;
continue;
} else {
var vec__30051_30473 = cljs.core.first(seq__30033_30467__$1);
var k_30474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30051_30473,(0),null);
var v_30475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30051_30473,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_30474);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30474),v_30475);


var G__30476 = cljs.core.next(seq__30033_30467__$1);
var G__30477 = null;
var G__30478 = (0);
var G__30479 = (0);
seq__30033_30454 = G__30476;
chunk__30034_30455 = G__30477;
count__30035_30456 = G__30478;
i__30036_30457 = G__30479;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__30064 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(1),null);
var seq__30068_30480 = cljs.core.seq(node_children);
var chunk__30070_30481 = null;
var count__30071_30482 = (0);
var i__30072_30483 = (0);
while(true){
if((i__30072_30483 < count__30071_30482)){
var child_struct_30484 = chunk__30070_30481.cljs$core$IIndexed$_nth$arity$2(null,i__30072_30483);
if((!((child_struct_30484 == null)))){
if(typeof child_struct_30484 === 'string'){
var text_30485 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30485),child_struct_30484].join(''));
} else {
var children_30486 = shadow.dom.svg_node(child_struct_30484);
if(cljs.core.seq_QMARK_(children_30486)){
var seq__30109_30487 = cljs.core.seq(children_30486);
var chunk__30111_30488 = null;
var count__30113_30489 = (0);
var i__30114_30490 = (0);
while(true){
if((i__30114_30490 < count__30113_30489)){
var child_30492 = chunk__30111_30488.cljs$core$IIndexed$_nth$arity$2(null,i__30114_30490);
if(cljs.core.truth_(child_30492)){
node.appendChild(child_30492);


var G__30493 = seq__30109_30487;
var G__30494 = chunk__30111_30488;
var G__30495 = count__30113_30489;
var G__30496 = (i__30114_30490 + (1));
seq__30109_30487 = G__30493;
chunk__30111_30488 = G__30494;
count__30113_30489 = G__30495;
i__30114_30490 = G__30496;
continue;
} else {
var G__30498 = seq__30109_30487;
var G__30499 = chunk__30111_30488;
var G__30500 = count__30113_30489;
var G__30501 = (i__30114_30490 + (1));
seq__30109_30487 = G__30498;
chunk__30111_30488 = G__30499;
count__30113_30489 = G__30500;
i__30114_30490 = G__30501;
continue;
}
} else {
var temp__5804__auto___30502 = cljs.core.seq(seq__30109_30487);
if(temp__5804__auto___30502){
var seq__30109_30503__$1 = temp__5804__auto___30502;
if(cljs.core.chunked_seq_QMARK_(seq__30109_30503__$1)){
var c__5565__auto___30504 = cljs.core.chunk_first(seq__30109_30503__$1);
var G__30505 = cljs.core.chunk_rest(seq__30109_30503__$1);
var G__30506 = c__5565__auto___30504;
var G__30507 = cljs.core.count(c__5565__auto___30504);
var G__30508 = (0);
seq__30109_30487 = G__30505;
chunk__30111_30488 = G__30506;
count__30113_30489 = G__30507;
i__30114_30490 = G__30508;
continue;
} else {
var child_30509 = cljs.core.first(seq__30109_30503__$1);
if(cljs.core.truth_(child_30509)){
node.appendChild(child_30509);


var G__30510 = cljs.core.next(seq__30109_30503__$1);
var G__30511 = null;
var G__30512 = (0);
var G__30513 = (0);
seq__30109_30487 = G__30510;
chunk__30111_30488 = G__30511;
count__30113_30489 = G__30512;
i__30114_30490 = G__30513;
continue;
} else {
var G__30514 = cljs.core.next(seq__30109_30503__$1);
var G__30515 = null;
var G__30516 = (0);
var G__30517 = (0);
seq__30109_30487 = G__30514;
chunk__30111_30488 = G__30515;
count__30113_30489 = G__30516;
i__30114_30490 = G__30517;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30486);
}
}


var G__30518 = seq__30068_30480;
var G__30519 = chunk__30070_30481;
var G__30520 = count__30071_30482;
var G__30521 = (i__30072_30483 + (1));
seq__30068_30480 = G__30518;
chunk__30070_30481 = G__30519;
count__30071_30482 = G__30520;
i__30072_30483 = G__30521;
continue;
} else {
var G__30522 = seq__30068_30480;
var G__30523 = chunk__30070_30481;
var G__30524 = count__30071_30482;
var G__30525 = (i__30072_30483 + (1));
seq__30068_30480 = G__30522;
chunk__30070_30481 = G__30523;
count__30071_30482 = G__30524;
i__30072_30483 = G__30525;
continue;
}
} else {
var temp__5804__auto___30526 = cljs.core.seq(seq__30068_30480);
if(temp__5804__auto___30526){
var seq__30068_30527__$1 = temp__5804__auto___30526;
if(cljs.core.chunked_seq_QMARK_(seq__30068_30527__$1)){
var c__5565__auto___30528 = cljs.core.chunk_first(seq__30068_30527__$1);
var G__30529 = cljs.core.chunk_rest(seq__30068_30527__$1);
var G__30530 = c__5565__auto___30528;
var G__30531 = cljs.core.count(c__5565__auto___30528);
var G__30532 = (0);
seq__30068_30480 = G__30529;
chunk__30070_30481 = G__30530;
count__30071_30482 = G__30531;
i__30072_30483 = G__30532;
continue;
} else {
var child_struct_30533 = cljs.core.first(seq__30068_30527__$1);
if((!((child_struct_30533 == null)))){
if(typeof child_struct_30533 === 'string'){
var text_30534 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30534),child_struct_30533].join(''));
} else {
var children_30536 = shadow.dom.svg_node(child_struct_30533);
if(cljs.core.seq_QMARK_(children_30536)){
var seq__30127_30537 = cljs.core.seq(children_30536);
var chunk__30129_30538 = null;
var count__30130_30539 = (0);
var i__30131_30540 = (0);
while(true){
if((i__30131_30540 < count__30130_30539)){
var child_30541 = chunk__30129_30538.cljs$core$IIndexed$_nth$arity$2(null,i__30131_30540);
if(cljs.core.truth_(child_30541)){
node.appendChild(child_30541);


var G__30542 = seq__30127_30537;
var G__30543 = chunk__30129_30538;
var G__30544 = count__30130_30539;
var G__30545 = (i__30131_30540 + (1));
seq__30127_30537 = G__30542;
chunk__30129_30538 = G__30543;
count__30130_30539 = G__30544;
i__30131_30540 = G__30545;
continue;
} else {
var G__30546 = seq__30127_30537;
var G__30547 = chunk__30129_30538;
var G__30548 = count__30130_30539;
var G__30549 = (i__30131_30540 + (1));
seq__30127_30537 = G__30546;
chunk__30129_30538 = G__30547;
count__30130_30539 = G__30548;
i__30131_30540 = G__30549;
continue;
}
} else {
var temp__5804__auto___30550__$1 = cljs.core.seq(seq__30127_30537);
if(temp__5804__auto___30550__$1){
var seq__30127_30551__$1 = temp__5804__auto___30550__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30127_30551__$1)){
var c__5565__auto___30552 = cljs.core.chunk_first(seq__30127_30551__$1);
var G__30555 = cljs.core.chunk_rest(seq__30127_30551__$1);
var G__30556 = c__5565__auto___30552;
var G__30557 = cljs.core.count(c__5565__auto___30552);
var G__30558 = (0);
seq__30127_30537 = G__30555;
chunk__30129_30538 = G__30556;
count__30130_30539 = G__30557;
i__30131_30540 = G__30558;
continue;
} else {
var child_30561 = cljs.core.first(seq__30127_30551__$1);
if(cljs.core.truth_(child_30561)){
node.appendChild(child_30561);


var G__30562 = cljs.core.next(seq__30127_30551__$1);
var G__30563 = null;
var G__30564 = (0);
var G__30565 = (0);
seq__30127_30537 = G__30562;
chunk__30129_30538 = G__30563;
count__30130_30539 = G__30564;
i__30131_30540 = G__30565;
continue;
} else {
var G__30566 = cljs.core.next(seq__30127_30551__$1);
var G__30567 = null;
var G__30568 = (0);
var G__30569 = (0);
seq__30127_30537 = G__30566;
chunk__30129_30538 = G__30567;
count__30130_30539 = G__30568;
i__30131_30540 = G__30569;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30536);
}
}


var G__30570 = cljs.core.next(seq__30068_30527__$1);
var G__30571 = null;
var G__30572 = (0);
var G__30573 = (0);
seq__30068_30480 = G__30570;
chunk__30070_30481 = G__30571;
count__30071_30482 = G__30572;
i__30072_30483 = G__30573;
continue;
} else {
var G__30575 = cljs.core.next(seq__30068_30527__$1);
var G__30576 = null;
var G__30577 = (0);
var G__30578 = (0);
seq__30068_30480 = G__30575;
chunk__30070_30481 = G__30576;
count__30071_30482 = G__30577;
i__30072_30483 = G__30578;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30579 = arguments.length;
var i__5767__auto___30580 = (0);
while(true){
if((i__5767__auto___30580 < len__5766__auto___30579)){
args__5772__auto__.push((arguments[i__5767__auto___30580]));

var G__30581 = (i__5767__auto___30580 + (1));
i__5767__auto___30580 = G__30581;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30148){
var G__30149 = cljs.core.first(seq30148);
var seq30148__$1 = cljs.core.next(seq30148);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30149,seq30148__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__30162 = arguments.length;
switch (G__30162) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__27903__auto___30588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_30167){
var state_val_30168 = (state_30167[(1)]);
if((state_val_30168 === (1))){
var state_30167__$1 = state_30167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30167__$1,(2),once_or_cleanup);
} else {
if((state_val_30168 === (2))){
var inst_30164 = (state_30167[(2)]);
var inst_30165 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30167__$1 = (function (){var statearr_30169 = state_30167;
(statearr_30169[(7)] = inst_30164);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30167__$1,inst_30165);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27833__auto__ = null;
var shadow$dom$state_machine__27833__auto____0 = (function (){
var statearr_30170 = [null,null,null,null,null,null,null,null];
(statearr_30170[(0)] = shadow$dom$state_machine__27833__auto__);

(statearr_30170[(1)] = (1));

return statearr_30170;
});
var shadow$dom$state_machine__27833__auto____1 = (function (state_30167){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_30167);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e30171){var ex__27836__auto__ = e30171;
var statearr_30172_30589 = state_30167;
(statearr_30172_30589[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_30167[(4)]))){
var statearr_30173_30590 = state_30167;
(statearr_30173_30590[(1)] = cljs.core.first((state_30167[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30591 = state_30167;
state_30167 = G__30591;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
shadow$dom$state_machine__27833__auto__ = function(state_30167){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27833__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27833__auto____1.call(this,state_30167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27833__auto____0;
shadow$dom$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27833__auto____1;
return shadow$dom$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_30174 = f__27904__auto__();
(statearr_30174[(6)] = c__27903__auto___30588);

return statearr_30174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
