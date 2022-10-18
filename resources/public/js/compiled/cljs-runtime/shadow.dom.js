goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30155 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_30155(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30156 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_30156(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29474 = coll;
var G__29475 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29474,G__29475) : shadow.dom.lazy_native_coll_seq.call(null,G__29474,G__29475));
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
var G__29489 = arguments.length;
switch (G__29489) {
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
var G__29497 = arguments.length;
switch (G__29497) {
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
var G__29507 = arguments.length;
switch (G__29507) {
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
var G__29513 = arguments.length;
switch (G__29513) {
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
var G__29516 = arguments.length;
switch (G__29516) {
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
}catch (e29526){if((e29526 instanceof Object)){
var e = e29526;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29526;

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
var seq__29536 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29537 = null;
var count__29538 = (0);
var i__29539 = (0);
while(true){
if((i__29539 < count__29538)){
var el = chunk__29537.cljs$core$IIndexed$_nth$arity$2(null,i__29539);
var handler_30165__$1 = ((function (seq__29536,chunk__29537,count__29538,i__29539,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29536,chunk__29537,count__29538,i__29539,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30165__$1);


var G__30166 = seq__29536;
var G__30167 = chunk__29537;
var G__30168 = count__29538;
var G__30169 = (i__29539 + (1));
seq__29536 = G__30166;
chunk__29537 = G__30167;
count__29538 = G__30168;
i__29539 = G__30169;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29536);
if(temp__5804__auto__){
var seq__29536__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29536__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29536__$1);
var G__30181 = cljs.core.chunk_rest(seq__29536__$1);
var G__30182 = c__5565__auto__;
var G__30183 = cljs.core.count(c__5565__auto__);
var G__30184 = (0);
seq__29536 = G__30181;
chunk__29537 = G__30182;
count__29538 = G__30183;
i__29539 = G__30184;
continue;
} else {
var el = cljs.core.first(seq__29536__$1);
var handler_30185__$1 = ((function (seq__29536,chunk__29537,count__29538,i__29539,el,seq__29536__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29536,chunk__29537,count__29538,i__29539,el,seq__29536__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30185__$1);


var G__30187 = cljs.core.next(seq__29536__$1);
var G__30188 = null;
var G__30189 = (0);
var G__30190 = (0);
seq__29536 = G__30187;
chunk__29537 = G__30188;
count__29538 = G__30189;
i__29539 = G__30190;
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
var G__29557 = arguments.length;
switch (G__29557) {
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
var seq__29566 = cljs.core.seq(events);
var chunk__29567 = null;
var count__29568 = (0);
var i__29569 = (0);
while(true){
if((i__29569 < count__29568)){
var vec__29582 = chunk__29567.cljs$core$IIndexed$_nth$arity$2(null,i__29569);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30198 = seq__29566;
var G__30199 = chunk__29567;
var G__30200 = count__29568;
var G__30201 = (i__29569 + (1));
seq__29566 = G__30198;
chunk__29567 = G__30199;
count__29568 = G__30200;
i__29569 = G__30201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29566);
if(temp__5804__auto__){
var seq__29566__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29566__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29566__$1);
var G__30203 = cljs.core.chunk_rest(seq__29566__$1);
var G__30204 = c__5565__auto__;
var G__30205 = cljs.core.count(c__5565__auto__);
var G__30206 = (0);
seq__29566 = G__30203;
chunk__29567 = G__30204;
count__29568 = G__30205;
i__29569 = G__30206;
continue;
} else {
var vec__29588 = cljs.core.first(seq__29566__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30209 = cljs.core.next(seq__29566__$1);
var G__30210 = null;
var G__30211 = (0);
var G__30212 = (0);
seq__29566 = G__30209;
chunk__29567 = G__30210;
count__29568 = G__30211;
i__29569 = G__30212;
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
var seq__29591 = cljs.core.seq(styles);
var chunk__29592 = null;
var count__29593 = (0);
var i__29594 = (0);
while(true){
if((i__29594 < count__29593)){
var vec__29611 = chunk__29592.cljs$core$IIndexed$_nth$arity$2(null,i__29594);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29611,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29611,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30215 = seq__29591;
var G__30216 = chunk__29592;
var G__30217 = count__29593;
var G__30218 = (i__29594 + (1));
seq__29591 = G__30215;
chunk__29592 = G__30216;
count__29593 = G__30217;
i__29594 = G__30218;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29591);
if(temp__5804__auto__){
var seq__29591__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29591__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29591__$1);
var G__30220 = cljs.core.chunk_rest(seq__29591__$1);
var G__30221 = c__5565__auto__;
var G__30222 = cljs.core.count(c__5565__auto__);
var G__30223 = (0);
seq__29591 = G__30220;
chunk__29592 = G__30221;
count__29593 = G__30222;
i__29594 = G__30223;
continue;
} else {
var vec__29616 = cljs.core.first(seq__29591__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29616,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30224 = cljs.core.next(seq__29591__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__29591 = G__30224;
chunk__29592 = G__30225;
count__29593 = G__30226;
i__29594 = G__30227;
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
var G__29620_30229 = key;
var G__29620_30230__$1 = (((G__29620_30229 instanceof cljs.core.Keyword))?G__29620_30229.fqn:null);
switch (G__29620_30230__$1) {
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
var ks_30233 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_30233,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_30233,"aria-");
}
})())){
el.setAttribute(ks_30233,value);
} else {
(el[ks_30233] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29643){
var map__29644 = p__29643;
var map__29644__$1 = cljs.core.__destructure_map(map__29644);
var props = map__29644__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29644__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29646 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29646,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29646,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29646,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29651 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29651,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29651;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29657 = arguments.length;
switch (G__29657) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29664){
var vec__29665 = p__29664;
var seq__29666 = cljs.core.seq(vec__29665);
var first__29667 = cljs.core.first(seq__29666);
var seq__29666__$1 = cljs.core.next(seq__29666);
var nn = first__29667;
var first__29667__$1 = cljs.core.first(seq__29666__$1);
var seq__29666__$2 = cljs.core.next(seq__29666__$1);
var np = first__29667__$1;
var nc = seq__29666__$2;
var node = vec__29665;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29669 = nn;
var G__29670 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29669,G__29670) : create_fn.call(null,G__29669,G__29670));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29672 = nn;
var G__29673 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29672,G__29673) : create_fn.call(null,G__29672,G__29673));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29678 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29678,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29678,(1),null);
var seq__29681_30241 = cljs.core.seq(node_children);
var chunk__29682_30242 = null;
var count__29683_30243 = (0);
var i__29684_30244 = (0);
while(true){
if((i__29684_30244 < count__29683_30243)){
var child_struct_30245 = chunk__29682_30242.cljs$core$IIndexed$_nth$arity$2(null,i__29684_30244);
var children_30246 = shadow.dom.dom_node(child_struct_30245);
if(cljs.core.seq_QMARK_(children_30246)){
var seq__29714_30247 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30246));
var chunk__29716_30248 = null;
var count__29717_30249 = (0);
var i__29718_30250 = (0);
while(true){
if((i__29718_30250 < count__29717_30249)){
var child_30251 = chunk__29716_30248.cljs$core$IIndexed$_nth$arity$2(null,i__29718_30250);
if(cljs.core.truth_(child_30251)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30251);


var G__30252 = seq__29714_30247;
var G__30253 = chunk__29716_30248;
var G__30254 = count__29717_30249;
var G__30255 = (i__29718_30250 + (1));
seq__29714_30247 = G__30252;
chunk__29716_30248 = G__30253;
count__29717_30249 = G__30254;
i__29718_30250 = G__30255;
continue;
} else {
var G__30256 = seq__29714_30247;
var G__30257 = chunk__29716_30248;
var G__30258 = count__29717_30249;
var G__30259 = (i__29718_30250 + (1));
seq__29714_30247 = G__30256;
chunk__29716_30248 = G__30257;
count__29717_30249 = G__30258;
i__29718_30250 = G__30259;
continue;
}
} else {
var temp__5804__auto___30260 = cljs.core.seq(seq__29714_30247);
if(temp__5804__auto___30260){
var seq__29714_30261__$1 = temp__5804__auto___30260;
if(cljs.core.chunked_seq_QMARK_(seq__29714_30261__$1)){
var c__5565__auto___30262 = cljs.core.chunk_first(seq__29714_30261__$1);
var G__30266 = cljs.core.chunk_rest(seq__29714_30261__$1);
var G__30267 = c__5565__auto___30262;
var G__30268 = cljs.core.count(c__5565__auto___30262);
var G__30269 = (0);
seq__29714_30247 = G__30266;
chunk__29716_30248 = G__30267;
count__29717_30249 = G__30268;
i__29718_30250 = G__30269;
continue;
} else {
var child_30270 = cljs.core.first(seq__29714_30261__$1);
if(cljs.core.truth_(child_30270)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30270);


var G__30271 = cljs.core.next(seq__29714_30261__$1);
var G__30272 = null;
var G__30273 = (0);
var G__30274 = (0);
seq__29714_30247 = G__30271;
chunk__29716_30248 = G__30272;
count__29717_30249 = G__30273;
i__29718_30250 = G__30274;
continue;
} else {
var G__30275 = cljs.core.next(seq__29714_30261__$1);
var G__30276 = null;
var G__30277 = (0);
var G__30278 = (0);
seq__29714_30247 = G__30275;
chunk__29716_30248 = G__30276;
count__29717_30249 = G__30277;
i__29718_30250 = G__30278;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30246);
}


var G__30279 = seq__29681_30241;
var G__30280 = chunk__29682_30242;
var G__30281 = count__29683_30243;
var G__30282 = (i__29684_30244 + (1));
seq__29681_30241 = G__30279;
chunk__29682_30242 = G__30280;
count__29683_30243 = G__30281;
i__29684_30244 = G__30282;
continue;
} else {
var temp__5804__auto___30283 = cljs.core.seq(seq__29681_30241);
if(temp__5804__auto___30283){
var seq__29681_30284__$1 = temp__5804__auto___30283;
if(cljs.core.chunked_seq_QMARK_(seq__29681_30284__$1)){
var c__5565__auto___30285 = cljs.core.chunk_first(seq__29681_30284__$1);
var G__30286 = cljs.core.chunk_rest(seq__29681_30284__$1);
var G__30287 = c__5565__auto___30285;
var G__30288 = cljs.core.count(c__5565__auto___30285);
var G__30289 = (0);
seq__29681_30241 = G__30286;
chunk__29682_30242 = G__30287;
count__29683_30243 = G__30288;
i__29684_30244 = G__30289;
continue;
} else {
var child_struct_30294 = cljs.core.first(seq__29681_30284__$1);
var children_30295 = shadow.dom.dom_node(child_struct_30294);
if(cljs.core.seq_QMARK_(children_30295)){
var seq__29731_30296 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30295));
var chunk__29733_30297 = null;
var count__29734_30298 = (0);
var i__29735_30299 = (0);
while(true){
if((i__29735_30299 < count__29734_30298)){
var child_30300 = chunk__29733_30297.cljs$core$IIndexed$_nth$arity$2(null,i__29735_30299);
if(cljs.core.truth_(child_30300)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30300);


var G__30301 = seq__29731_30296;
var G__30302 = chunk__29733_30297;
var G__30303 = count__29734_30298;
var G__30304 = (i__29735_30299 + (1));
seq__29731_30296 = G__30301;
chunk__29733_30297 = G__30302;
count__29734_30298 = G__30303;
i__29735_30299 = G__30304;
continue;
} else {
var G__30305 = seq__29731_30296;
var G__30306 = chunk__29733_30297;
var G__30307 = count__29734_30298;
var G__30308 = (i__29735_30299 + (1));
seq__29731_30296 = G__30305;
chunk__29733_30297 = G__30306;
count__29734_30298 = G__30307;
i__29735_30299 = G__30308;
continue;
}
} else {
var temp__5804__auto___30309__$1 = cljs.core.seq(seq__29731_30296);
if(temp__5804__auto___30309__$1){
var seq__29731_30310__$1 = temp__5804__auto___30309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29731_30310__$1)){
var c__5565__auto___30311 = cljs.core.chunk_first(seq__29731_30310__$1);
var G__30312 = cljs.core.chunk_rest(seq__29731_30310__$1);
var G__30313 = c__5565__auto___30311;
var G__30314 = cljs.core.count(c__5565__auto___30311);
var G__30315 = (0);
seq__29731_30296 = G__30312;
chunk__29733_30297 = G__30313;
count__29734_30298 = G__30314;
i__29735_30299 = G__30315;
continue;
} else {
var child_30316 = cljs.core.first(seq__29731_30310__$1);
if(cljs.core.truth_(child_30316)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30316);


var G__30317 = cljs.core.next(seq__29731_30310__$1);
var G__30318 = null;
var G__30319 = (0);
var G__30320 = (0);
seq__29731_30296 = G__30317;
chunk__29733_30297 = G__30318;
count__29734_30298 = G__30319;
i__29735_30299 = G__30320;
continue;
} else {
var G__30321 = cljs.core.next(seq__29731_30310__$1);
var G__30322 = null;
var G__30323 = (0);
var G__30324 = (0);
seq__29731_30296 = G__30321;
chunk__29733_30297 = G__30322;
count__29734_30298 = G__30323;
i__29735_30299 = G__30324;
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


var G__30325 = cljs.core.next(seq__29681_30284__$1);
var G__30326 = null;
var G__30327 = (0);
var G__30328 = (0);
seq__29681_30241 = G__30325;
chunk__29682_30242 = G__30326;
count__29683_30243 = G__30327;
i__29684_30244 = G__30328;
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
var seq__29762 = cljs.core.seq(node);
var chunk__29763 = null;
var count__29764 = (0);
var i__29765 = (0);
while(true){
if((i__29765 < count__29764)){
var n = chunk__29763.cljs$core$IIndexed$_nth$arity$2(null,i__29765);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30329 = seq__29762;
var G__30330 = chunk__29763;
var G__30331 = count__29764;
var G__30332 = (i__29765 + (1));
seq__29762 = G__30329;
chunk__29763 = G__30330;
count__29764 = G__30331;
i__29765 = G__30332;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29762);
if(temp__5804__auto__){
var seq__29762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29762__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29762__$1);
var G__30333 = cljs.core.chunk_rest(seq__29762__$1);
var G__30334 = c__5565__auto__;
var G__30335 = cljs.core.count(c__5565__auto__);
var G__30336 = (0);
seq__29762 = G__30333;
chunk__29763 = G__30334;
count__29764 = G__30335;
i__29765 = G__30336;
continue;
} else {
var n = cljs.core.first(seq__29762__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30337 = cljs.core.next(seq__29762__$1);
var G__30338 = null;
var G__30339 = (0);
var G__30340 = (0);
seq__29762 = G__30337;
chunk__29763 = G__30338;
count__29764 = G__30339;
i__29765 = G__30340;
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
var G__29783 = arguments.length;
switch (G__29783) {
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
var G__29792 = arguments.length;
switch (G__29792) {
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
var G__29799 = arguments.length;
switch (G__29799) {
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
var len__5766__auto___30357 = arguments.length;
var i__5767__auto___30358 = (0);
while(true){
if((i__5767__auto___30358 < len__5766__auto___30357)){
args__5772__auto__.push((arguments[i__5767__auto___30358]));

var G__30359 = (i__5767__auto___30358 + (1));
i__5767__auto___30358 = G__30359;
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
var seq__29809_30360 = cljs.core.seq(nodes);
var chunk__29810_30361 = null;
var count__29811_30362 = (0);
var i__29812_30363 = (0);
while(true){
if((i__29812_30363 < count__29811_30362)){
var node_30364 = chunk__29810_30361.cljs$core$IIndexed$_nth$arity$2(null,i__29812_30363);
fragment.appendChild(shadow.dom._to_dom(node_30364));


var G__30365 = seq__29809_30360;
var G__30366 = chunk__29810_30361;
var G__30367 = count__29811_30362;
var G__30368 = (i__29812_30363 + (1));
seq__29809_30360 = G__30365;
chunk__29810_30361 = G__30366;
count__29811_30362 = G__30367;
i__29812_30363 = G__30368;
continue;
} else {
var temp__5804__auto___30369 = cljs.core.seq(seq__29809_30360);
if(temp__5804__auto___30369){
var seq__29809_30370__$1 = temp__5804__auto___30369;
if(cljs.core.chunked_seq_QMARK_(seq__29809_30370__$1)){
var c__5565__auto___30371 = cljs.core.chunk_first(seq__29809_30370__$1);
var G__30372 = cljs.core.chunk_rest(seq__29809_30370__$1);
var G__30373 = c__5565__auto___30371;
var G__30374 = cljs.core.count(c__5565__auto___30371);
var G__30375 = (0);
seq__29809_30360 = G__30372;
chunk__29810_30361 = G__30373;
count__29811_30362 = G__30374;
i__29812_30363 = G__30375;
continue;
} else {
var node_30376 = cljs.core.first(seq__29809_30370__$1);
fragment.appendChild(shadow.dom._to_dom(node_30376));


var G__30377 = cljs.core.next(seq__29809_30370__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__29809_30360 = G__30377;
chunk__29810_30361 = G__30378;
count__29811_30362 = G__30379;
i__29812_30363 = G__30380;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29807){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29807));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29822_30381 = cljs.core.seq(scripts);
var chunk__29823_30382 = null;
var count__29824_30383 = (0);
var i__29825_30384 = (0);
while(true){
if((i__29825_30384 < count__29824_30383)){
var vec__29838_30385 = chunk__29823_30382.cljs$core$IIndexed$_nth$arity$2(null,i__29825_30384);
var script_tag_30386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29838_30385,(0),null);
var script_body_30387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29838_30385,(1),null);
eval(script_body_30387);


var G__30388 = seq__29822_30381;
var G__30389 = chunk__29823_30382;
var G__30390 = count__29824_30383;
var G__30391 = (i__29825_30384 + (1));
seq__29822_30381 = G__30388;
chunk__29823_30382 = G__30389;
count__29824_30383 = G__30390;
i__29825_30384 = G__30391;
continue;
} else {
var temp__5804__auto___30392 = cljs.core.seq(seq__29822_30381);
if(temp__5804__auto___30392){
var seq__29822_30393__$1 = temp__5804__auto___30392;
if(cljs.core.chunked_seq_QMARK_(seq__29822_30393__$1)){
var c__5565__auto___30394 = cljs.core.chunk_first(seq__29822_30393__$1);
var G__30395 = cljs.core.chunk_rest(seq__29822_30393__$1);
var G__30396 = c__5565__auto___30394;
var G__30397 = cljs.core.count(c__5565__auto___30394);
var G__30398 = (0);
seq__29822_30381 = G__30395;
chunk__29823_30382 = G__30396;
count__29824_30383 = G__30397;
i__29825_30384 = G__30398;
continue;
} else {
var vec__29844_30399 = cljs.core.first(seq__29822_30393__$1);
var script_tag_30400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844_30399,(0),null);
var script_body_30401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844_30399,(1),null);
eval(script_body_30401);


var G__30402 = cljs.core.next(seq__29822_30393__$1);
var G__30403 = null;
var G__30404 = (0);
var G__30405 = (0);
seq__29822_30381 = G__30402;
chunk__29823_30382 = G__30403;
count__29824_30383 = G__30404;
i__29825_30384 = G__30405;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29849){
var vec__29851 = p__29849;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29851,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29851,(1),null);
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
var G__29867 = arguments.length;
switch (G__29867) {
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


var G__30409 = seq__29874;
var G__30410 = chunk__29875;
var G__30411 = count__29876;
var G__30412 = (i__29877 + (1));
seq__29874 = G__30409;
chunk__29875 = G__30410;
count__29876 = G__30411;
i__29877 = G__30412;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29874);
if(temp__5804__auto__){
var seq__29874__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29874__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29874__$1);
var G__30413 = cljs.core.chunk_rest(seq__29874__$1);
var G__30414 = c__5565__auto__;
var G__30415 = cljs.core.count(c__5565__auto__);
var G__30416 = (0);
seq__29874 = G__30413;
chunk__29875 = G__30414;
count__29876 = G__30415;
i__29877 = G__30416;
continue;
} else {
var it = cljs.core.first(seq__29874__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30418 = cljs.core.next(seq__29874__$1);
var G__30419 = null;
var G__30420 = (0);
var G__30421 = (0);
seq__29874 = G__30418;
chunk__29875 = G__30419;
count__29876 = G__30420;
i__29877 = G__30421;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k29880,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__29892 = k29880;
var G__29892__$1 = (((G__29892 instanceof cljs.core.Keyword))?G__29892.fqn:null);
switch (G__29892__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29880,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__29897){
var vec__29900 = p__29897;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29900,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29900,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29879){
var self__ = this;
var G__29879__$1 = this;
return (new cljs.core.RecordIter((0),G__29879__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29881,other29882){
var self__ = this;
var this29881__$1 = this;
return (((!((other29882 == null)))) && ((((this29881__$1.constructor === other29882.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29881__$1.x,other29882.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29881__$1.y,other29882.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29881__$1.__extmap,other29882.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k29880){
var self__ = this;
var this__5347__auto____$1 = this;
var G__29919 = k29880;
var G__29919__$1 = (((G__29919 instanceof cljs.core.Keyword))?G__29919.fqn:null);
switch (G__29919__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29880);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__29879){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__29921 = cljs.core.keyword_identical_QMARK_;
var expr__29922 = k__5349__auto__;
if(cljs.core.truth_((pred__29921.cljs$core$IFn$_invoke$arity$2 ? pred__29921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29922) : pred__29921.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29922)))){
return (new shadow.dom.Coordinate(G__29879,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29921.cljs$core$IFn$_invoke$arity$2 ? pred__29921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29922) : pred__29921.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29922)))){
return (new shadow.dom.Coordinate(self__.x,G__29879,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__29879),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__29879){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29879,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29885){
var extmap__5382__auto__ = (function (){var G__29930 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29885,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29885)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29930);
} else {
return G__29930;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29885),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29885),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k29932,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__29936 = k29932;
var G__29936__$1 = (((G__29936 instanceof cljs.core.Keyword))?G__29936.fqn:null);
switch (G__29936__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29932,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__29937){
var vec__29938 = p__29937;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29938,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29938,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29931){
var self__ = this;
var G__29931__$1 = this;
return (new cljs.core.RecordIter((0),G__29931__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29933,other29934){
var self__ = this;
var this29933__$1 = this;
return (((!((other29934 == null)))) && ((((this29933__$1.constructor === other29934.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29933__$1.w,other29934.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29933__$1.h,other29934.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29933__$1.__extmap,other29934.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k29932){
var self__ = this;
var this__5347__auto____$1 = this;
var G__29945 = k29932;
var G__29945__$1 = (((G__29945 instanceof cljs.core.Keyword))?G__29945.fqn:null);
switch (G__29945__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29932);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__29931){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__29948 = cljs.core.keyword_identical_QMARK_;
var expr__29949 = k__5349__auto__;
if(cljs.core.truth_((pred__29948.cljs$core$IFn$_invoke$arity$2 ? pred__29948.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29949) : pred__29948.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29949)))){
return (new shadow.dom.Size(G__29931,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29948.cljs$core$IFn$_invoke$arity$2 ? pred__29948.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29949) : pred__29948.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29949)))){
return (new shadow.dom.Size(self__.w,G__29931,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__29931),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__29931){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29931,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29935){
var extmap__5382__auto__ = (function (){var G__29955 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29935,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29935)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29955);
} else {
return G__29955;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29935),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29935),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var G__30449 = (i + (1));
var G__30450 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30449;
ret = G__30450;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29980){
var vec__29982 = p__29980;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29982,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29982,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29988 = arguments.length;
switch (G__29988) {
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
var G__30453 = ps;
var G__30454 = (i + (1));
el__$1 = G__30453;
i = G__30454;
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
var vec__30004 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30004,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30004,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30004,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30007_30457 = cljs.core.seq(props);
var chunk__30008_30458 = null;
var count__30009_30459 = (0);
var i__30010_30460 = (0);
while(true){
if((i__30010_30460 < count__30009_30459)){
var vec__30017_30461 = chunk__30008_30458.cljs$core$IIndexed$_nth$arity$2(null,i__30010_30460);
var k_30462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30017_30461,(0),null);
var v_30463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30017_30461,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_30462);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30462),v_30463);


var G__30464 = seq__30007_30457;
var G__30465 = chunk__30008_30458;
var G__30466 = count__30009_30459;
var G__30467 = (i__30010_30460 + (1));
seq__30007_30457 = G__30464;
chunk__30008_30458 = G__30465;
count__30009_30459 = G__30466;
i__30010_30460 = G__30467;
continue;
} else {
var temp__5804__auto___30468 = cljs.core.seq(seq__30007_30457);
if(temp__5804__auto___30468){
var seq__30007_30469__$1 = temp__5804__auto___30468;
if(cljs.core.chunked_seq_QMARK_(seq__30007_30469__$1)){
var c__5565__auto___30471 = cljs.core.chunk_first(seq__30007_30469__$1);
var G__30472 = cljs.core.chunk_rest(seq__30007_30469__$1);
var G__30473 = c__5565__auto___30471;
var G__30474 = cljs.core.count(c__5565__auto___30471);
var G__30475 = (0);
seq__30007_30457 = G__30472;
chunk__30008_30458 = G__30473;
count__30009_30459 = G__30474;
i__30010_30460 = G__30475;
continue;
} else {
var vec__30020_30476 = cljs.core.first(seq__30007_30469__$1);
var k_30477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30020_30476,(0),null);
var v_30478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30020_30476,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_30477);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30477),v_30478);


var G__30479 = cljs.core.next(seq__30007_30469__$1);
var G__30480 = null;
var G__30481 = (0);
var G__30482 = (0);
seq__30007_30457 = G__30479;
chunk__30008_30458 = G__30480;
count__30009_30459 = G__30481;
i__30010_30460 = G__30482;
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
var vec__30024 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30024,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30024,(1),null);
var seq__30027_30487 = cljs.core.seq(node_children);
var chunk__30029_30488 = null;
var count__30030_30489 = (0);
var i__30031_30490 = (0);
while(true){
if((i__30031_30490 < count__30030_30489)){
var child_struct_30492 = chunk__30029_30488.cljs$core$IIndexed$_nth$arity$2(null,i__30031_30490);
if((!((child_struct_30492 == null)))){
if(typeof child_struct_30492 === 'string'){
var text_30493 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30493),child_struct_30492].join(''));
} else {
var children_30494 = shadow.dom.svg_node(child_struct_30492);
if(cljs.core.seq_QMARK_(children_30494)){
var seq__30054_30495 = cljs.core.seq(children_30494);
var chunk__30057_30496 = null;
var count__30058_30497 = (0);
var i__30059_30498 = (0);
while(true){
if((i__30059_30498 < count__30058_30497)){
var child_30499 = chunk__30057_30496.cljs$core$IIndexed$_nth$arity$2(null,i__30059_30498);
if(cljs.core.truth_(child_30499)){
node.appendChild(child_30499);


var G__30500 = seq__30054_30495;
var G__30501 = chunk__30057_30496;
var G__30502 = count__30058_30497;
var G__30503 = (i__30059_30498 + (1));
seq__30054_30495 = G__30500;
chunk__30057_30496 = G__30501;
count__30058_30497 = G__30502;
i__30059_30498 = G__30503;
continue;
} else {
var G__30504 = seq__30054_30495;
var G__30505 = chunk__30057_30496;
var G__30506 = count__30058_30497;
var G__30507 = (i__30059_30498 + (1));
seq__30054_30495 = G__30504;
chunk__30057_30496 = G__30505;
count__30058_30497 = G__30506;
i__30059_30498 = G__30507;
continue;
}
} else {
var temp__5804__auto___30508 = cljs.core.seq(seq__30054_30495);
if(temp__5804__auto___30508){
var seq__30054_30509__$1 = temp__5804__auto___30508;
if(cljs.core.chunked_seq_QMARK_(seq__30054_30509__$1)){
var c__5565__auto___30510 = cljs.core.chunk_first(seq__30054_30509__$1);
var G__30511 = cljs.core.chunk_rest(seq__30054_30509__$1);
var G__30512 = c__5565__auto___30510;
var G__30513 = cljs.core.count(c__5565__auto___30510);
var G__30514 = (0);
seq__30054_30495 = G__30511;
chunk__30057_30496 = G__30512;
count__30058_30497 = G__30513;
i__30059_30498 = G__30514;
continue;
} else {
var child_30515 = cljs.core.first(seq__30054_30509__$1);
if(cljs.core.truth_(child_30515)){
node.appendChild(child_30515);


var G__30516 = cljs.core.next(seq__30054_30509__$1);
var G__30517 = null;
var G__30518 = (0);
var G__30519 = (0);
seq__30054_30495 = G__30516;
chunk__30057_30496 = G__30517;
count__30058_30497 = G__30518;
i__30059_30498 = G__30519;
continue;
} else {
var G__30520 = cljs.core.next(seq__30054_30509__$1);
var G__30521 = null;
var G__30522 = (0);
var G__30523 = (0);
seq__30054_30495 = G__30520;
chunk__30057_30496 = G__30521;
count__30058_30497 = G__30522;
i__30059_30498 = G__30523;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30494);
}
}


var G__30524 = seq__30027_30487;
var G__30525 = chunk__30029_30488;
var G__30526 = count__30030_30489;
var G__30527 = (i__30031_30490 + (1));
seq__30027_30487 = G__30524;
chunk__30029_30488 = G__30525;
count__30030_30489 = G__30526;
i__30031_30490 = G__30527;
continue;
} else {
var G__30528 = seq__30027_30487;
var G__30529 = chunk__30029_30488;
var G__30530 = count__30030_30489;
var G__30531 = (i__30031_30490 + (1));
seq__30027_30487 = G__30528;
chunk__30029_30488 = G__30529;
count__30030_30489 = G__30530;
i__30031_30490 = G__30531;
continue;
}
} else {
var temp__5804__auto___30533 = cljs.core.seq(seq__30027_30487);
if(temp__5804__auto___30533){
var seq__30027_30534__$1 = temp__5804__auto___30533;
if(cljs.core.chunked_seq_QMARK_(seq__30027_30534__$1)){
var c__5565__auto___30535 = cljs.core.chunk_first(seq__30027_30534__$1);
var G__30536 = cljs.core.chunk_rest(seq__30027_30534__$1);
var G__30537 = c__5565__auto___30535;
var G__30538 = cljs.core.count(c__5565__auto___30535);
var G__30539 = (0);
seq__30027_30487 = G__30536;
chunk__30029_30488 = G__30537;
count__30030_30489 = G__30538;
i__30031_30490 = G__30539;
continue;
} else {
var child_struct_30540 = cljs.core.first(seq__30027_30534__$1);
if((!((child_struct_30540 == null)))){
if(typeof child_struct_30540 === 'string'){
var text_30541 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30541),child_struct_30540].join(''));
} else {
var children_30542 = shadow.dom.svg_node(child_struct_30540);
if(cljs.core.seq_QMARK_(children_30542)){
var seq__30076_30543 = cljs.core.seq(children_30542);
var chunk__30078_30544 = null;
var count__30079_30545 = (0);
var i__30080_30546 = (0);
while(true){
if((i__30080_30546 < count__30079_30545)){
var child_30547 = chunk__30078_30544.cljs$core$IIndexed$_nth$arity$2(null,i__30080_30546);
if(cljs.core.truth_(child_30547)){
node.appendChild(child_30547);


var G__30548 = seq__30076_30543;
var G__30549 = chunk__30078_30544;
var G__30550 = count__30079_30545;
var G__30551 = (i__30080_30546 + (1));
seq__30076_30543 = G__30548;
chunk__30078_30544 = G__30549;
count__30079_30545 = G__30550;
i__30080_30546 = G__30551;
continue;
} else {
var G__30552 = seq__30076_30543;
var G__30553 = chunk__30078_30544;
var G__30554 = count__30079_30545;
var G__30555 = (i__30080_30546 + (1));
seq__30076_30543 = G__30552;
chunk__30078_30544 = G__30553;
count__30079_30545 = G__30554;
i__30080_30546 = G__30555;
continue;
}
} else {
var temp__5804__auto___30557__$1 = cljs.core.seq(seq__30076_30543);
if(temp__5804__auto___30557__$1){
var seq__30076_30558__$1 = temp__5804__auto___30557__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30076_30558__$1)){
var c__5565__auto___30562 = cljs.core.chunk_first(seq__30076_30558__$1);
var G__30563 = cljs.core.chunk_rest(seq__30076_30558__$1);
var G__30564 = c__5565__auto___30562;
var G__30565 = cljs.core.count(c__5565__auto___30562);
var G__30566 = (0);
seq__30076_30543 = G__30563;
chunk__30078_30544 = G__30564;
count__30079_30545 = G__30565;
i__30080_30546 = G__30566;
continue;
} else {
var child_30567 = cljs.core.first(seq__30076_30558__$1);
if(cljs.core.truth_(child_30567)){
node.appendChild(child_30567);


var G__30568 = cljs.core.next(seq__30076_30558__$1);
var G__30569 = null;
var G__30570 = (0);
var G__30571 = (0);
seq__30076_30543 = G__30568;
chunk__30078_30544 = G__30569;
count__30079_30545 = G__30570;
i__30080_30546 = G__30571;
continue;
} else {
var G__30572 = cljs.core.next(seq__30076_30558__$1);
var G__30573 = null;
var G__30574 = (0);
var G__30575 = (0);
seq__30076_30543 = G__30572;
chunk__30078_30544 = G__30573;
count__30079_30545 = G__30574;
i__30080_30546 = G__30575;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30542);
}
}


var G__30576 = cljs.core.next(seq__30027_30534__$1);
var G__30577 = null;
var G__30578 = (0);
var G__30579 = (0);
seq__30027_30487 = G__30576;
chunk__30029_30488 = G__30577;
count__30030_30489 = G__30578;
i__30031_30490 = G__30579;
continue;
} else {
var G__30580 = cljs.core.next(seq__30027_30534__$1);
var G__30581 = null;
var G__30582 = (0);
var G__30583 = (0);
seq__30027_30487 = G__30580;
chunk__30029_30488 = G__30581;
count__30030_30489 = G__30582;
i__30031_30490 = G__30583;
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
var len__5766__auto___30584 = arguments.length;
var i__5767__auto___30585 = (0);
while(true){
if((i__5767__auto___30585 < len__5766__auto___30584)){
args__5772__auto__.push((arguments[i__5767__auto___30585]));

var G__30586 = (i__5767__auto___30585 + (1));
i__5767__auto___30585 = G__30586;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30100){
var G__30101 = cljs.core.first(seq30100);
var seq30100__$1 = cljs.core.next(seq30100);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30101,seq30100__$1);
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
var G__30109 = arguments.length;
switch (G__30109) {
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
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_30123){
var state_val_30125 = (state_30123[(1)]);
if((state_val_30125 === (1))){
var state_30123__$1 = state_30123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30123__$1,(2),once_or_cleanup);
} else {
if((state_val_30125 === (2))){
var inst_30120 = (state_30123[(2)]);
var inst_30121 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30123__$1 = (function (){var statearr_30129 = state_30123;
(statearr_30129[(7)] = inst_30120);

return statearr_30129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30123__$1,inst_30121);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27833__auto__ = null;
var shadow$dom$state_machine__27833__auto____0 = (function (){
var statearr_30131 = [null,null,null,null,null,null,null,null];
(statearr_30131[(0)] = shadow$dom$state_machine__27833__auto__);

(statearr_30131[(1)] = (1));

return statearr_30131;
});
var shadow$dom$state_machine__27833__auto____1 = (function (state_30123){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_30123);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e30133){var ex__27836__auto__ = e30133;
var statearr_30134_30589 = state_30123;
(statearr_30134_30589[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_30123[(4)]))){
var statearr_30137_30590 = state_30123;
(statearr_30137_30590[(1)] = cljs.core.first((state_30123[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30591 = state_30123;
state_30123 = G__30591;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
shadow$dom$state_machine__27833__auto__ = function(state_30123){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27833__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27833__auto____1.call(this,state_30123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27833__auto____0;
shadow$dom$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27833__auto____1;
return shadow$dom$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_30142 = f__27904__auto__();
(statearr_30142[(6)] = c__27903__auto___30588);

return statearr_30142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
