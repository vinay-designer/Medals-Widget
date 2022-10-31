goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30188 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_30188(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30189 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_30189(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29488 = coll;
var G__29489 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29488,G__29489) : shadow.dom.lazy_native_coll_seq.call(null,G__29488,G__29489));
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
var G__29510 = arguments.length;
switch (G__29510) {
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
var G__29517 = arguments.length;
switch (G__29517) {
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
var G__29522 = arguments.length;
switch (G__29522) {
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
var G__29528 = arguments.length;
switch (G__29528) {
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
var G__29542 = arguments.length;
switch (G__29542) {
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
var G__29555 = arguments.length;
switch (G__29555) {
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
}catch (e29569){if((e29569 instanceof Object)){
var e = e29569;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29569;

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
var seq__29587 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29588 = null;
var count__29589 = (0);
var i__29590 = (0);
while(true){
if((i__29590 < count__29589)){
var el = chunk__29588.cljs$core$IIndexed$_nth$arity$2(null,i__29590);
var handler_30196__$1 = ((function (seq__29587,chunk__29588,count__29589,i__29590,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29587,chunk__29588,count__29589,i__29590,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30196__$1);


var G__30197 = seq__29587;
var G__30198 = chunk__29588;
var G__30199 = count__29589;
var G__30200 = (i__29590 + (1));
seq__29587 = G__30197;
chunk__29588 = G__30198;
count__29589 = G__30199;
i__29590 = G__30200;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29587);
if(temp__5804__auto__){
var seq__29587__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29587__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29587__$1);
var G__30201 = cljs.core.chunk_rest(seq__29587__$1);
var G__30202 = c__5565__auto__;
var G__30203 = cljs.core.count(c__5565__auto__);
var G__30204 = (0);
seq__29587 = G__30201;
chunk__29588 = G__30202;
count__29589 = G__30203;
i__29590 = G__30204;
continue;
} else {
var el = cljs.core.first(seq__29587__$1);
var handler_30205__$1 = ((function (seq__29587,chunk__29588,count__29589,i__29590,el,seq__29587__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29587,chunk__29588,count__29589,i__29590,el,seq__29587__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30205__$1);


var G__30206 = cljs.core.next(seq__29587__$1);
var G__30207 = null;
var G__30208 = (0);
var G__30209 = (0);
seq__29587 = G__30206;
chunk__29588 = G__30207;
count__29589 = G__30208;
i__29590 = G__30209;
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
var G__29606 = arguments.length;
switch (G__29606) {
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
var seq__29620 = cljs.core.seq(events);
var chunk__29622 = null;
var count__29623 = (0);
var i__29624 = (0);
while(true){
if((i__29624 < count__29623)){
var vec__29638 = chunk__29622.cljs$core$IIndexed$_nth$arity$2(null,i__29624);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29638,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29638,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30211 = seq__29620;
var G__30212 = chunk__29622;
var G__30213 = count__29623;
var G__30214 = (i__29624 + (1));
seq__29620 = G__30211;
chunk__29622 = G__30212;
count__29623 = G__30213;
i__29624 = G__30214;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29620);
if(temp__5804__auto__){
var seq__29620__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29620__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29620__$1);
var G__30215 = cljs.core.chunk_rest(seq__29620__$1);
var G__30216 = c__5565__auto__;
var G__30217 = cljs.core.count(c__5565__auto__);
var G__30218 = (0);
seq__29620 = G__30215;
chunk__29622 = G__30216;
count__29623 = G__30217;
i__29624 = G__30218;
continue;
} else {
var vec__29645 = cljs.core.first(seq__29620__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29645,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29645,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30219 = cljs.core.next(seq__29620__$1);
var G__30220 = null;
var G__30221 = (0);
var G__30222 = (0);
seq__29620 = G__30219;
chunk__29622 = G__30220;
count__29623 = G__30221;
i__29624 = G__30222;
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
var seq__29649 = cljs.core.seq(styles);
var chunk__29650 = null;
var count__29651 = (0);
var i__29652 = (0);
while(true){
if((i__29652 < count__29651)){
var vec__29665 = chunk__29650.cljs$core$IIndexed$_nth$arity$2(null,i__29652);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29665,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30223 = seq__29649;
var G__30224 = chunk__29650;
var G__30225 = count__29651;
var G__30226 = (i__29652 + (1));
seq__29649 = G__30223;
chunk__29650 = G__30224;
count__29651 = G__30225;
i__29652 = G__30226;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29649);
if(temp__5804__auto__){
var seq__29649__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29649__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29649__$1);
var G__30227 = cljs.core.chunk_rest(seq__29649__$1);
var G__30228 = c__5565__auto__;
var G__30229 = cljs.core.count(c__5565__auto__);
var G__30230 = (0);
seq__29649 = G__30227;
chunk__29650 = G__30228;
count__29651 = G__30229;
i__29652 = G__30230;
continue;
} else {
var vec__29671 = cljs.core.first(seq__29649__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29671,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29671,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30231 = cljs.core.next(seq__29649__$1);
var G__30232 = null;
var G__30233 = (0);
var G__30234 = (0);
seq__29649 = G__30231;
chunk__29650 = G__30232;
count__29651 = G__30233;
i__29652 = G__30234;
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
var G__29685_30235 = key;
var G__29685_30236__$1 = (((G__29685_30235 instanceof cljs.core.Keyword))?G__29685_30235.fqn:null);
switch (G__29685_30236__$1) {
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
var ks_30240 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_30240,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_30240,"aria-");
}
})())){
el.setAttribute(ks_30240,value);
} else {
(el[ks_30240] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29705){
var map__29706 = p__29705;
var map__29706__$1 = cljs.core.__destructure_map(map__29706);
var props = map__29706__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29706__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29708 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29708,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29708,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29708,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29712 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29712,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29712;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29719 = arguments.length;
switch (G__29719) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29728){
var vec__29729 = p__29728;
var seq__29730 = cljs.core.seq(vec__29729);
var first__29731 = cljs.core.first(seq__29730);
var seq__29730__$1 = cljs.core.next(seq__29730);
var nn = first__29731;
var first__29731__$1 = cljs.core.first(seq__29730__$1);
var seq__29730__$2 = cljs.core.next(seq__29730__$1);
var np = first__29731__$1;
var nc = seq__29730__$2;
var node = vec__29729;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29736 = nn;
var G__29737 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29736,G__29737) : create_fn.call(null,G__29736,G__29737));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29741 = nn;
var G__29742 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29741,G__29742) : create_fn.call(null,G__29741,G__29742));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29747 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29747,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29747,(1),null);
var seq__29752_30243 = cljs.core.seq(node_children);
var chunk__29753_30244 = null;
var count__29754_30245 = (0);
var i__29755_30246 = (0);
while(true){
if((i__29755_30246 < count__29754_30245)){
var child_struct_30247 = chunk__29753_30244.cljs$core$IIndexed$_nth$arity$2(null,i__29755_30246);
var children_30248 = shadow.dom.dom_node(child_struct_30247);
if(cljs.core.seq_QMARK_(children_30248)){
var seq__29794_30249 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30248));
var chunk__29796_30250 = null;
var count__29797_30251 = (0);
var i__29798_30252 = (0);
while(true){
if((i__29798_30252 < count__29797_30251)){
var child_30254 = chunk__29796_30250.cljs$core$IIndexed$_nth$arity$2(null,i__29798_30252);
if(cljs.core.truth_(child_30254)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30254);


var G__30255 = seq__29794_30249;
var G__30256 = chunk__29796_30250;
var G__30257 = count__29797_30251;
var G__30258 = (i__29798_30252 + (1));
seq__29794_30249 = G__30255;
chunk__29796_30250 = G__30256;
count__29797_30251 = G__30257;
i__29798_30252 = G__30258;
continue;
} else {
var G__30259 = seq__29794_30249;
var G__30260 = chunk__29796_30250;
var G__30261 = count__29797_30251;
var G__30262 = (i__29798_30252 + (1));
seq__29794_30249 = G__30259;
chunk__29796_30250 = G__30260;
count__29797_30251 = G__30261;
i__29798_30252 = G__30262;
continue;
}
} else {
var temp__5804__auto___30263 = cljs.core.seq(seq__29794_30249);
if(temp__5804__auto___30263){
var seq__29794_30264__$1 = temp__5804__auto___30263;
if(cljs.core.chunked_seq_QMARK_(seq__29794_30264__$1)){
var c__5565__auto___30265 = cljs.core.chunk_first(seq__29794_30264__$1);
var G__30266 = cljs.core.chunk_rest(seq__29794_30264__$1);
var G__30267 = c__5565__auto___30265;
var G__30268 = cljs.core.count(c__5565__auto___30265);
var G__30269 = (0);
seq__29794_30249 = G__30266;
chunk__29796_30250 = G__30267;
count__29797_30251 = G__30268;
i__29798_30252 = G__30269;
continue;
} else {
var child_30271 = cljs.core.first(seq__29794_30264__$1);
if(cljs.core.truth_(child_30271)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30271);


var G__30272 = cljs.core.next(seq__29794_30264__$1);
var G__30273 = null;
var G__30274 = (0);
var G__30275 = (0);
seq__29794_30249 = G__30272;
chunk__29796_30250 = G__30273;
count__29797_30251 = G__30274;
i__29798_30252 = G__30275;
continue;
} else {
var G__30276 = cljs.core.next(seq__29794_30264__$1);
var G__30277 = null;
var G__30278 = (0);
var G__30279 = (0);
seq__29794_30249 = G__30276;
chunk__29796_30250 = G__30277;
count__29797_30251 = G__30278;
i__29798_30252 = G__30279;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30248);
}


var G__30280 = seq__29752_30243;
var G__30281 = chunk__29753_30244;
var G__30282 = count__29754_30245;
var G__30283 = (i__29755_30246 + (1));
seq__29752_30243 = G__30280;
chunk__29753_30244 = G__30281;
count__29754_30245 = G__30282;
i__29755_30246 = G__30283;
continue;
} else {
var temp__5804__auto___30284 = cljs.core.seq(seq__29752_30243);
if(temp__5804__auto___30284){
var seq__29752_30285__$1 = temp__5804__auto___30284;
if(cljs.core.chunked_seq_QMARK_(seq__29752_30285__$1)){
var c__5565__auto___30286 = cljs.core.chunk_first(seq__29752_30285__$1);
var G__30287 = cljs.core.chunk_rest(seq__29752_30285__$1);
var G__30288 = c__5565__auto___30286;
var G__30289 = cljs.core.count(c__5565__auto___30286);
var G__30290 = (0);
seq__29752_30243 = G__30287;
chunk__29753_30244 = G__30288;
count__29754_30245 = G__30289;
i__29755_30246 = G__30290;
continue;
} else {
var child_struct_30291 = cljs.core.first(seq__29752_30285__$1);
var children_30292 = shadow.dom.dom_node(child_struct_30291);
if(cljs.core.seq_QMARK_(children_30292)){
var seq__29804_30293 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30292));
var chunk__29807_30294 = null;
var count__29808_30295 = (0);
var i__29809_30296 = (0);
while(true){
if((i__29809_30296 < count__29808_30295)){
var child_30297 = chunk__29807_30294.cljs$core$IIndexed$_nth$arity$2(null,i__29809_30296);
if(cljs.core.truth_(child_30297)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30297);


var G__30298 = seq__29804_30293;
var G__30299 = chunk__29807_30294;
var G__30300 = count__29808_30295;
var G__30301 = (i__29809_30296 + (1));
seq__29804_30293 = G__30298;
chunk__29807_30294 = G__30299;
count__29808_30295 = G__30300;
i__29809_30296 = G__30301;
continue;
} else {
var G__30302 = seq__29804_30293;
var G__30303 = chunk__29807_30294;
var G__30304 = count__29808_30295;
var G__30305 = (i__29809_30296 + (1));
seq__29804_30293 = G__30302;
chunk__29807_30294 = G__30303;
count__29808_30295 = G__30304;
i__29809_30296 = G__30305;
continue;
}
} else {
var temp__5804__auto___30306__$1 = cljs.core.seq(seq__29804_30293);
if(temp__5804__auto___30306__$1){
var seq__29804_30307__$1 = temp__5804__auto___30306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29804_30307__$1)){
var c__5565__auto___30308 = cljs.core.chunk_first(seq__29804_30307__$1);
var G__30309 = cljs.core.chunk_rest(seq__29804_30307__$1);
var G__30310 = c__5565__auto___30308;
var G__30311 = cljs.core.count(c__5565__auto___30308);
var G__30312 = (0);
seq__29804_30293 = G__30309;
chunk__29807_30294 = G__30310;
count__29808_30295 = G__30311;
i__29809_30296 = G__30312;
continue;
} else {
var child_30313 = cljs.core.first(seq__29804_30307__$1);
if(cljs.core.truth_(child_30313)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30313);


var G__30314 = cljs.core.next(seq__29804_30307__$1);
var G__30315 = null;
var G__30316 = (0);
var G__30317 = (0);
seq__29804_30293 = G__30314;
chunk__29807_30294 = G__30315;
count__29808_30295 = G__30316;
i__29809_30296 = G__30317;
continue;
} else {
var G__30318 = cljs.core.next(seq__29804_30307__$1);
var G__30319 = null;
var G__30320 = (0);
var G__30321 = (0);
seq__29804_30293 = G__30318;
chunk__29807_30294 = G__30319;
count__29808_30295 = G__30320;
i__29809_30296 = G__30321;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30292);
}


var G__30322 = cljs.core.next(seq__29752_30285__$1);
var G__30323 = null;
var G__30324 = (0);
var G__30325 = (0);
seq__29752_30243 = G__30322;
chunk__29753_30244 = G__30323;
count__29754_30245 = G__30324;
i__29755_30246 = G__30325;
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
var seq__29844 = cljs.core.seq(node);
var chunk__29845 = null;
var count__29846 = (0);
var i__29847 = (0);
while(true){
if((i__29847 < count__29846)){
var n = chunk__29845.cljs$core$IIndexed$_nth$arity$2(null,i__29847);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30327 = seq__29844;
var G__30328 = chunk__29845;
var G__30329 = count__29846;
var G__30330 = (i__29847 + (1));
seq__29844 = G__30327;
chunk__29845 = G__30328;
count__29846 = G__30329;
i__29847 = G__30330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29844);
if(temp__5804__auto__){
var seq__29844__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29844__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29844__$1);
var G__30331 = cljs.core.chunk_rest(seq__29844__$1);
var G__30332 = c__5565__auto__;
var G__30333 = cljs.core.count(c__5565__auto__);
var G__30334 = (0);
seq__29844 = G__30331;
chunk__29845 = G__30332;
count__29846 = G__30333;
i__29847 = G__30334;
continue;
} else {
var n = cljs.core.first(seq__29844__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30335 = cljs.core.next(seq__29844__$1);
var G__30336 = null;
var G__30337 = (0);
var G__30338 = (0);
seq__29844 = G__30335;
chunk__29845 = G__30336;
count__29846 = G__30337;
i__29847 = G__30338;
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
var G__29855 = arguments.length;
switch (G__29855) {
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
var G__29857 = arguments.length;
switch (G__29857) {
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
var G__29873 = arguments.length;
switch (G__29873) {
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
var len__5766__auto___30345 = arguments.length;
var i__5767__auto___30346 = (0);
while(true){
if((i__5767__auto___30346 < len__5766__auto___30345)){
args__5772__auto__.push((arguments[i__5767__auto___30346]));

var G__30347 = (i__5767__auto___30346 + (1));
i__5767__auto___30346 = G__30347;
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
var seq__29891_30348 = cljs.core.seq(nodes);
var chunk__29892_30349 = null;
var count__29893_30350 = (0);
var i__29894_30351 = (0);
while(true){
if((i__29894_30351 < count__29893_30350)){
var node_30352 = chunk__29892_30349.cljs$core$IIndexed$_nth$arity$2(null,i__29894_30351);
fragment.appendChild(shadow.dom._to_dom(node_30352));


var G__30353 = seq__29891_30348;
var G__30354 = chunk__29892_30349;
var G__30355 = count__29893_30350;
var G__30356 = (i__29894_30351 + (1));
seq__29891_30348 = G__30353;
chunk__29892_30349 = G__30354;
count__29893_30350 = G__30355;
i__29894_30351 = G__30356;
continue;
} else {
var temp__5804__auto___30358 = cljs.core.seq(seq__29891_30348);
if(temp__5804__auto___30358){
var seq__29891_30359__$1 = temp__5804__auto___30358;
if(cljs.core.chunked_seq_QMARK_(seq__29891_30359__$1)){
var c__5565__auto___30361 = cljs.core.chunk_first(seq__29891_30359__$1);
var G__30362 = cljs.core.chunk_rest(seq__29891_30359__$1);
var G__30363 = c__5565__auto___30361;
var G__30364 = cljs.core.count(c__5565__auto___30361);
var G__30365 = (0);
seq__29891_30348 = G__30362;
chunk__29892_30349 = G__30363;
count__29893_30350 = G__30364;
i__29894_30351 = G__30365;
continue;
} else {
var node_30366 = cljs.core.first(seq__29891_30359__$1);
fragment.appendChild(shadow.dom._to_dom(node_30366));


var G__30367 = cljs.core.next(seq__29891_30359__$1);
var G__30368 = null;
var G__30369 = (0);
var G__30370 = (0);
seq__29891_30348 = G__30367;
chunk__29892_30349 = G__30368;
count__29893_30350 = G__30369;
i__29894_30351 = G__30370;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29886){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29886));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29900_30372 = cljs.core.seq(scripts);
var chunk__29901_30373 = null;
var count__29902_30374 = (0);
var i__29903_30375 = (0);
while(true){
if((i__29903_30375 < count__29902_30374)){
var vec__29918_30376 = chunk__29901_30373.cljs$core$IIndexed$_nth$arity$2(null,i__29903_30375);
var script_tag_30377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29918_30376,(0),null);
var script_body_30378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29918_30376,(1),null);
eval(script_body_30378);


var G__30380 = seq__29900_30372;
var G__30381 = chunk__29901_30373;
var G__30382 = count__29902_30374;
var G__30383 = (i__29903_30375 + (1));
seq__29900_30372 = G__30380;
chunk__29901_30373 = G__30381;
count__29902_30374 = G__30382;
i__29903_30375 = G__30383;
continue;
} else {
var temp__5804__auto___30384 = cljs.core.seq(seq__29900_30372);
if(temp__5804__auto___30384){
var seq__29900_30386__$1 = temp__5804__auto___30384;
if(cljs.core.chunked_seq_QMARK_(seq__29900_30386__$1)){
var c__5565__auto___30387 = cljs.core.chunk_first(seq__29900_30386__$1);
var G__30388 = cljs.core.chunk_rest(seq__29900_30386__$1);
var G__30389 = c__5565__auto___30387;
var G__30390 = cljs.core.count(c__5565__auto___30387);
var G__30391 = (0);
seq__29900_30372 = G__30388;
chunk__29901_30373 = G__30389;
count__29902_30374 = G__30390;
i__29903_30375 = G__30391;
continue;
} else {
var vec__29924_30392 = cljs.core.first(seq__29900_30386__$1);
var script_tag_30393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924_30392,(0),null);
var script_body_30394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29924_30392,(1),null);
eval(script_body_30394);


var G__30395 = cljs.core.next(seq__29900_30386__$1);
var G__30396 = null;
var G__30397 = (0);
var G__30398 = (0);
seq__29900_30372 = G__30395;
chunk__29901_30373 = G__30396;
count__29902_30374 = G__30397;
i__29903_30375 = G__30398;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29928){
var vec__29929 = p__29928;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29929,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29929,(1),null);
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
var G__29940 = arguments.length;
switch (G__29940) {
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
var seq__29958 = cljs.core.seq(style_keys);
var chunk__29959 = null;
var count__29960 = (0);
var i__29961 = (0);
while(true){
if((i__29961 < count__29960)){
var it = chunk__29959.cljs$core$IIndexed$_nth$arity$2(null,i__29961);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30400 = seq__29958;
var G__30401 = chunk__29959;
var G__30402 = count__29960;
var G__30403 = (i__29961 + (1));
seq__29958 = G__30400;
chunk__29959 = G__30401;
count__29960 = G__30402;
i__29961 = G__30403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29958);
if(temp__5804__auto__){
var seq__29958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29958__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29958__$1);
var G__30404 = cljs.core.chunk_rest(seq__29958__$1);
var G__30405 = c__5565__auto__;
var G__30406 = cljs.core.count(c__5565__auto__);
var G__30407 = (0);
seq__29958 = G__30404;
chunk__29959 = G__30405;
count__29960 = G__30406;
i__29961 = G__30407;
continue;
} else {
var it = cljs.core.first(seq__29958__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30408 = cljs.core.next(seq__29958__$1);
var G__30409 = null;
var G__30410 = (0);
var G__30411 = (0);
seq__29958 = G__30408;
chunk__29959 = G__30409;
count__29960 = G__30410;
i__29961 = G__30411;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k29969,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__29979 = k29969;
var G__29979__$1 = (((G__29979 instanceof cljs.core.Keyword))?G__29979.fqn:null);
switch (G__29979__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29969,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__29983){
var vec__29984 = p__29983;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29968){
var self__ = this;
var G__29968__$1 = this;
return (new cljs.core.RecordIter((0),G__29968__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29970,other29971){
var self__ = this;
var this29970__$1 = this;
return (((!((other29971 == null)))) && ((((this29970__$1.constructor === other29971.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29970__$1.x,other29971.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29970__$1.y,other29971.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29970__$1.__extmap,other29971.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k29969){
var self__ = this;
var this__5347__auto____$1 = this;
var G__29987 = k29969;
var G__29987__$1 = (((G__29987 instanceof cljs.core.Keyword))?G__29987.fqn:null);
switch (G__29987__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29969);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__29968){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__29988 = cljs.core.keyword_identical_QMARK_;
var expr__29989 = k__5349__auto__;
if(cljs.core.truth_((pred__29988.cljs$core$IFn$_invoke$arity$2 ? pred__29988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29989) : pred__29988.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29989)))){
return (new shadow.dom.Coordinate(G__29968,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29988.cljs$core$IFn$_invoke$arity$2 ? pred__29988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29989) : pred__29988.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29989)))){
return (new shadow.dom.Coordinate(self__.x,G__29968,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__29968),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__29968){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29968,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29974){
var extmap__5382__auto__ = (function (){var G__30007 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29974,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29974)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30007);
} else {
return G__30007;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29974),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29974),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k30016,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__30027 = k30016;
var G__30027__$1 = (((G__30027 instanceof cljs.core.Keyword))?G__30027.fqn:null);
switch (G__30027__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30016,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__30036){
var vec__30039 = p__30036;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30039,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30039,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30015){
var self__ = this;
var G__30015__$1 = this;
return (new cljs.core.RecordIter((0),G__30015__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30017,other30018){
var self__ = this;
var this30017__$1 = this;
return (((!((other30018 == null)))) && ((((this30017__$1.constructor === other30018.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30017__$1.w,other30018.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30017__$1.h,other30018.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30017__$1.__extmap,other30018.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k30016){
var self__ = this;
var this__5347__auto____$1 = this;
var G__30069 = k30016;
var G__30069__$1 = (((G__30069 instanceof cljs.core.Keyword))?G__30069.fqn:null);
switch (G__30069__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30016);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__30015){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__30073 = cljs.core.keyword_identical_QMARK_;
var expr__30074 = k__5349__auto__;
if(cljs.core.truth_((pred__30073.cljs$core$IFn$_invoke$arity$2 ? pred__30073.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__30074) : pred__30073.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30074)))){
return (new shadow.dom.Size(G__30015,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30073.cljs$core$IFn$_invoke$arity$2 ? pred__30073.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__30074) : pred__30073.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30074)))){
return (new shadow.dom.Size(self__.w,G__30015,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__30015),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__30015){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30015,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30021){
var extmap__5382__auto__ = (function (){var G__30091 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30021,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30021)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30091);
} else {
return G__30091;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30021),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30021),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var G__30430 = (i + (1));
var G__30431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30430;
ret = G__30431;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30113){
var vec__30114 = p__30113;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30114,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30118 = arguments.length;
switch (G__30118) {
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
var G__30436 = ps;
var G__30437 = (i + (1));
el__$1 = G__30436;
i = G__30437;
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
var vec__30119 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30122_30441 = cljs.core.seq(props);
var chunk__30123_30442 = null;
var count__30124_30443 = (0);
var i__30125_30444 = (0);
while(true){
if((i__30125_30444 < count__30124_30443)){
var vec__30132_30445 = chunk__30123_30442.cljs$core$IIndexed$_nth$arity$2(null,i__30125_30444);
var k_30446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30132_30445,(0),null);
var v_30447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30132_30445,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_30446);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30446),v_30447);


var G__30448 = seq__30122_30441;
var G__30449 = chunk__30123_30442;
var G__30450 = count__30124_30443;
var G__30451 = (i__30125_30444 + (1));
seq__30122_30441 = G__30448;
chunk__30123_30442 = G__30449;
count__30124_30443 = G__30450;
i__30125_30444 = G__30451;
continue;
} else {
var temp__5804__auto___30452 = cljs.core.seq(seq__30122_30441);
if(temp__5804__auto___30452){
var seq__30122_30453__$1 = temp__5804__auto___30452;
if(cljs.core.chunked_seq_QMARK_(seq__30122_30453__$1)){
var c__5565__auto___30454 = cljs.core.chunk_first(seq__30122_30453__$1);
var G__30455 = cljs.core.chunk_rest(seq__30122_30453__$1);
var G__30456 = c__5565__auto___30454;
var G__30457 = cljs.core.count(c__5565__auto___30454);
var G__30458 = (0);
seq__30122_30441 = G__30455;
chunk__30123_30442 = G__30456;
count__30124_30443 = G__30457;
i__30125_30444 = G__30458;
continue;
} else {
var vec__30135_30459 = cljs.core.first(seq__30122_30453__$1);
var k_30460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30135_30459,(0),null);
var v_30461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30135_30459,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_30460);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30460),v_30461);


var G__30462 = cljs.core.next(seq__30122_30453__$1);
var G__30463 = null;
var G__30464 = (0);
var G__30465 = (0);
seq__30122_30441 = G__30462;
chunk__30123_30442 = G__30463;
count__30124_30443 = G__30464;
i__30125_30444 = G__30465;
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
var vec__30139 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(1),null);
var seq__30142_30466 = cljs.core.seq(node_children);
var chunk__30144_30467 = null;
var count__30145_30468 = (0);
var i__30146_30469 = (0);
while(true){
if((i__30146_30469 < count__30145_30468)){
var child_struct_30470 = chunk__30144_30467.cljs$core$IIndexed$_nth$arity$2(null,i__30146_30469);
if((!((child_struct_30470 == null)))){
if(typeof child_struct_30470 === 'string'){
var text_30471 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30471),child_struct_30470].join(''));
} else {
var children_30472 = shadow.dom.svg_node(child_struct_30470);
if(cljs.core.seq_QMARK_(children_30472)){
var seq__30160_30473 = cljs.core.seq(children_30472);
var chunk__30162_30474 = null;
var count__30163_30475 = (0);
var i__30164_30476 = (0);
while(true){
if((i__30164_30476 < count__30163_30475)){
var child_30477 = chunk__30162_30474.cljs$core$IIndexed$_nth$arity$2(null,i__30164_30476);
if(cljs.core.truth_(child_30477)){
node.appendChild(child_30477);


var G__30478 = seq__30160_30473;
var G__30479 = chunk__30162_30474;
var G__30480 = count__30163_30475;
var G__30481 = (i__30164_30476 + (1));
seq__30160_30473 = G__30478;
chunk__30162_30474 = G__30479;
count__30163_30475 = G__30480;
i__30164_30476 = G__30481;
continue;
} else {
var G__30482 = seq__30160_30473;
var G__30483 = chunk__30162_30474;
var G__30484 = count__30163_30475;
var G__30485 = (i__30164_30476 + (1));
seq__30160_30473 = G__30482;
chunk__30162_30474 = G__30483;
count__30163_30475 = G__30484;
i__30164_30476 = G__30485;
continue;
}
} else {
var temp__5804__auto___30486 = cljs.core.seq(seq__30160_30473);
if(temp__5804__auto___30486){
var seq__30160_30487__$1 = temp__5804__auto___30486;
if(cljs.core.chunked_seq_QMARK_(seq__30160_30487__$1)){
var c__5565__auto___30488 = cljs.core.chunk_first(seq__30160_30487__$1);
var G__30489 = cljs.core.chunk_rest(seq__30160_30487__$1);
var G__30490 = c__5565__auto___30488;
var G__30491 = cljs.core.count(c__5565__auto___30488);
var G__30492 = (0);
seq__30160_30473 = G__30489;
chunk__30162_30474 = G__30490;
count__30163_30475 = G__30491;
i__30164_30476 = G__30492;
continue;
} else {
var child_30493 = cljs.core.first(seq__30160_30487__$1);
if(cljs.core.truth_(child_30493)){
node.appendChild(child_30493);


var G__30494 = cljs.core.next(seq__30160_30487__$1);
var G__30495 = null;
var G__30496 = (0);
var G__30497 = (0);
seq__30160_30473 = G__30494;
chunk__30162_30474 = G__30495;
count__30163_30475 = G__30496;
i__30164_30476 = G__30497;
continue;
} else {
var G__30498 = cljs.core.next(seq__30160_30487__$1);
var G__30499 = null;
var G__30500 = (0);
var G__30501 = (0);
seq__30160_30473 = G__30498;
chunk__30162_30474 = G__30499;
count__30163_30475 = G__30500;
i__30164_30476 = G__30501;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30472);
}
}


var G__30502 = seq__30142_30466;
var G__30503 = chunk__30144_30467;
var G__30504 = count__30145_30468;
var G__30505 = (i__30146_30469 + (1));
seq__30142_30466 = G__30502;
chunk__30144_30467 = G__30503;
count__30145_30468 = G__30504;
i__30146_30469 = G__30505;
continue;
} else {
var G__30506 = seq__30142_30466;
var G__30507 = chunk__30144_30467;
var G__30508 = count__30145_30468;
var G__30509 = (i__30146_30469 + (1));
seq__30142_30466 = G__30506;
chunk__30144_30467 = G__30507;
count__30145_30468 = G__30508;
i__30146_30469 = G__30509;
continue;
}
} else {
var temp__5804__auto___30510 = cljs.core.seq(seq__30142_30466);
if(temp__5804__auto___30510){
var seq__30142_30511__$1 = temp__5804__auto___30510;
if(cljs.core.chunked_seq_QMARK_(seq__30142_30511__$1)){
var c__5565__auto___30512 = cljs.core.chunk_first(seq__30142_30511__$1);
var G__30513 = cljs.core.chunk_rest(seq__30142_30511__$1);
var G__30514 = c__5565__auto___30512;
var G__30515 = cljs.core.count(c__5565__auto___30512);
var G__30516 = (0);
seq__30142_30466 = G__30513;
chunk__30144_30467 = G__30514;
count__30145_30468 = G__30515;
i__30146_30469 = G__30516;
continue;
} else {
var child_struct_30517 = cljs.core.first(seq__30142_30511__$1);
if((!((child_struct_30517 == null)))){
if(typeof child_struct_30517 === 'string'){
var text_30518 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30518),child_struct_30517].join(''));
} else {
var children_30519 = shadow.dom.svg_node(child_struct_30517);
if(cljs.core.seq_QMARK_(children_30519)){
var seq__30166_30520 = cljs.core.seq(children_30519);
var chunk__30168_30521 = null;
var count__30169_30522 = (0);
var i__30170_30523 = (0);
while(true){
if((i__30170_30523 < count__30169_30522)){
var child_30524 = chunk__30168_30521.cljs$core$IIndexed$_nth$arity$2(null,i__30170_30523);
if(cljs.core.truth_(child_30524)){
node.appendChild(child_30524);


var G__30525 = seq__30166_30520;
var G__30526 = chunk__30168_30521;
var G__30527 = count__30169_30522;
var G__30528 = (i__30170_30523 + (1));
seq__30166_30520 = G__30525;
chunk__30168_30521 = G__30526;
count__30169_30522 = G__30527;
i__30170_30523 = G__30528;
continue;
} else {
var G__30529 = seq__30166_30520;
var G__30530 = chunk__30168_30521;
var G__30531 = count__30169_30522;
var G__30532 = (i__30170_30523 + (1));
seq__30166_30520 = G__30529;
chunk__30168_30521 = G__30530;
count__30169_30522 = G__30531;
i__30170_30523 = G__30532;
continue;
}
} else {
var temp__5804__auto___30533__$1 = cljs.core.seq(seq__30166_30520);
if(temp__5804__auto___30533__$1){
var seq__30166_30534__$1 = temp__5804__auto___30533__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30166_30534__$1)){
var c__5565__auto___30535 = cljs.core.chunk_first(seq__30166_30534__$1);
var G__30536 = cljs.core.chunk_rest(seq__30166_30534__$1);
var G__30537 = c__5565__auto___30535;
var G__30538 = cljs.core.count(c__5565__auto___30535);
var G__30539 = (0);
seq__30166_30520 = G__30536;
chunk__30168_30521 = G__30537;
count__30169_30522 = G__30538;
i__30170_30523 = G__30539;
continue;
} else {
var child_30540 = cljs.core.first(seq__30166_30534__$1);
if(cljs.core.truth_(child_30540)){
node.appendChild(child_30540);


var G__30541 = cljs.core.next(seq__30166_30534__$1);
var G__30542 = null;
var G__30543 = (0);
var G__30544 = (0);
seq__30166_30520 = G__30541;
chunk__30168_30521 = G__30542;
count__30169_30522 = G__30543;
i__30170_30523 = G__30544;
continue;
} else {
var G__30545 = cljs.core.next(seq__30166_30534__$1);
var G__30546 = null;
var G__30547 = (0);
var G__30548 = (0);
seq__30166_30520 = G__30545;
chunk__30168_30521 = G__30546;
count__30169_30522 = G__30547;
i__30170_30523 = G__30548;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30519);
}
}


var G__30551 = cljs.core.next(seq__30142_30511__$1);
var G__30552 = null;
var G__30553 = (0);
var G__30554 = (0);
seq__30142_30466 = G__30551;
chunk__30144_30467 = G__30552;
count__30145_30468 = G__30553;
i__30146_30469 = G__30554;
continue;
} else {
var G__30555 = cljs.core.next(seq__30142_30511__$1);
var G__30556 = null;
var G__30557 = (0);
var G__30558 = (0);
seq__30142_30466 = G__30555;
chunk__30144_30467 = G__30556;
count__30145_30468 = G__30557;
i__30146_30469 = G__30558;
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
var len__5766__auto___30560 = arguments.length;
var i__5767__auto___30562 = (0);
while(true){
if((i__5767__auto___30562 < len__5766__auto___30560)){
args__5772__auto__.push((arguments[i__5767__auto___30562]));

var G__30563 = (i__5767__auto___30562 + (1));
i__5767__auto___30562 = G__30563;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30172){
var G__30173 = cljs.core.first(seq30172);
var seq30172__$1 = cljs.core.next(seq30172);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30173,seq30172__$1);
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
var G__30175 = arguments.length;
switch (G__30175) {
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
var c__27906__auto___30565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_30180){
var state_val_30181 = (state_30180[(1)]);
if((state_val_30181 === (1))){
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30180__$1,(2),once_or_cleanup);
} else {
if((state_val_30181 === (2))){
var inst_30177 = (state_30180[(2)]);
var inst_30178 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30180__$1 = (function (){var statearr_30182 = state_30180;
(statearr_30182[(7)] = inst_30177);

return statearr_30182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30180__$1,inst_30178);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27846__auto__ = null;
var shadow$dom$state_machine__27846__auto____0 = (function (){
var statearr_30183 = [null,null,null,null,null,null,null,null];
(statearr_30183[(0)] = shadow$dom$state_machine__27846__auto__);

(statearr_30183[(1)] = (1));

return statearr_30183;
});
var shadow$dom$state_machine__27846__auto____1 = (function (state_30180){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_30180);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e30184){var ex__27849__auto__ = e30184;
var statearr_30185_30573 = state_30180;
(statearr_30185_30573[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_30180[(4)]))){
var statearr_30186_30574 = state_30180;
(statearr_30186_30574[(1)] = cljs.core.first((state_30180[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30575 = state_30180;
state_30180 = G__30575;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
shadow$dom$state_machine__27846__auto__ = function(state_30180){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27846__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27846__auto____1.call(this,state_30180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27846__auto____0;
shadow$dom$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27846__auto____1;
return shadow$dom$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_30187 = f__27907__auto__();
(statearr_30187[(6)] = c__27906__auto___30565);

return statearr_30187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
