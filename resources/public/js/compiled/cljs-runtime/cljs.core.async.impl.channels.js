goog.provide('cljs.core.async.impl.channels');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374 = (function (val,meta26375){
this.val = val;
this.meta26375 = meta26375;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26376,meta26375__$1){
var self__ = this;
var _26376__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374(self__.val,meta26375__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26376){
var self__ = this;
var _26376__$1 = this;
return self__.meta26375;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta26375","meta26375",238638509,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26374");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26374");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26374.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels26374 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels26374(val__$1,meta26375){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374(val__$1,meta26375));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26374(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_26561 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_26561(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_26562 = self__.puts.pop();
if((putter_26562 == null)){
} else {
var put_handler_26563 = putter_26562.handler;
var val_26564 = putter_26562.val;
if(put_handler_26563.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_26565 = put_handler_26563.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_26565,put_handler_26563,val_26564,putter_26562,this$__$1){
return (function (){
return (put_cb_26565.cljs$core$IFn$_invoke$arity$1 ? put_cb_26565.cljs$core$IFn$_invoke$arity$1(true) : put_cb_26565.call(null,true));
});})(put_cb_26565,put_handler_26563,val_26564,putter_26562,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(closed__$1){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

return cljs.core.async.impl.channels.box(false);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__5041__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__26575 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__26575;
continue;
} else {
var G__26576 = takers;
takers = G__26576;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__26397_26578 = cljs.core.seq(take_cbs);
var chunk__26399_26579 = null;
var count__26400_26580 = (0);
var i__26401_26581 = (0);
while(true){
if((i__26401_26581 < count__26400_26580)){
var f_26583 = chunk__26399_26579.cljs$core$IIndexed$_nth$arity$2(null,i__26401_26581);
cljs.core.async.impl.dispatch.run(f_26583);


var G__26584 = seq__26397_26578;
var G__26585 = chunk__26399_26579;
var G__26586 = count__26400_26580;
var G__26587 = (i__26401_26581 + (1));
seq__26397_26578 = G__26584;
chunk__26399_26579 = G__26585;
count__26400_26580 = G__26586;
i__26401_26581 = G__26587;
continue;
} else {
var temp__5804__auto___26588 = cljs.core.seq(seq__26397_26578);
if(temp__5804__auto___26588){
var seq__26397_26589__$1 = temp__5804__auto___26588;
if(cljs.core.chunked_seq_QMARK_(seq__26397_26589__$1)){
var c__5565__auto___26590 = cljs.core.chunk_first(seq__26397_26589__$1);
var G__26592 = cljs.core.chunk_rest(seq__26397_26589__$1);
var G__26593 = c__5565__auto___26590;
var G__26594 = cljs.core.count(c__5565__auto___26590);
var G__26595 = (0);
seq__26397_26578 = G__26592;
chunk__26399_26579 = G__26593;
count__26400_26580 = G__26594;
i__26401_26581 = G__26595;
continue;
} else {
var f_26597 = cljs.core.first(seq__26397_26589__$1);
cljs.core.async.impl.dispatch.run(f_26597);


var G__26598 = cljs.core.next(seq__26397_26589__$1);
var G__26599 = null;
var G__26600 = (0);
var G__26601 = (0);
seq__26397_26578 = G__26598;
chunk__26399_26579 = G__26599;
count__26400_26580 = G__26600;
i__26401_26581 = G__26601;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5802__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5802__auto__)){
var take_cb = temp__5802__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__26416 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5041__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__5041__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))))){
var G__26660 = cbs__$1;
cbs = G__26660;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26416,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26416,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__26429_26663 = cljs.core.seq(cbs);
var chunk__26430_26664 = null;
var count__26431_26665 = (0);
var i__26432_26666 = (0);
while(true){
if((i__26432_26666 < count__26431_26665)){
var cb_26667 = chunk__26430_26664.cljs$core$IIndexed$_nth$arity$2(null,i__26432_26666);
cljs.core.async.impl.dispatch.run(((function (seq__26429_26663,chunk__26430_26664,count__26431_26665,i__26432_26666,cb_26667,val,vec__26416,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1){
return (function (){
return (cb_26667.cljs$core$IFn$_invoke$arity$1 ? cb_26667.cljs$core$IFn$_invoke$arity$1(true) : cb_26667.call(null,true));
});})(seq__26429_26663,chunk__26430_26664,count__26431_26665,i__26432_26666,cb_26667,val,vec__26416,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1))
);


var G__26668 = seq__26429_26663;
var G__26669 = chunk__26430_26664;
var G__26670 = count__26431_26665;
var G__26671 = (i__26432_26666 + (1));
seq__26429_26663 = G__26668;
chunk__26430_26664 = G__26669;
count__26431_26665 = G__26670;
i__26432_26666 = G__26671;
continue;
} else {
var temp__5804__auto___26672 = cljs.core.seq(seq__26429_26663);
if(temp__5804__auto___26672){
var seq__26429_26675__$1 = temp__5804__auto___26672;
if(cljs.core.chunked_seq_QMARK_(seq__26429_26675__$1)){
var c__5565__auto___26676 = cljs.core.chunk_first(seq__26429_26675__$1);
var G__26677 = cljs.core.chunk_rest(seq__26429_26675__$1);
var G__26678 = c__5565__auto___26676;
var G__26679 = cljs.core.count(c__5565__auto___26676);
var G__26680 = (0);
seq__26429_26663 = G__26677;
chunk__26430_26664 = G__26678;
count__26431_26665 = G__26679;
i__26432_26666 = G__26680;
continue;
} else {
var cb_26681 = cljs.core.first(seq__26429_26675__$1);
cljs.core.async.impl.dispatch.run(((function (seq__26429_26663,chunk__26430_26664,count__26431_26665,i__26432_26666,cb_26681,seq__26429_26675__$1,temp__5804__auto___26672,val,vec__26416,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1){
return (function (){
return (cb_26681.cljs$core$IFn$_invoke$arity$1 ? cb_26681.cljs$core$IFn$_invoke$arity$1(true) : cb_26681.call(null,true));
});})(seq__26429_26663,chunk__26430_26664,count__26431_26665,i__26432_26666,cb_26681,seq__26429_26675__$1,temp__5804__auto___26672,val,vec__26416,done_QMARK_,cbs,take_cb,temp__5802__auto__,this$__$1))
);


var G__26683 = cljs.core.next(seq__26429_26675__$1);
var G__26684 = null;
var G__26685 = (0);
var G__26686 = (0);
seq__26429_26663 = G__26683;
chunk__26430_26664 = G__26684;
count__26431_26665 = G__26685;
i__26432_26666 = G__26686;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})())){
var has_val = (function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5041__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return (self__.puts.length === (0));
} else {
return and__5041__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_26688 = self__.takes.pop();
if((taker_26688 == null)){
} else {
if(taker_26688.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_26689 = taker_26688.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_26690 = (cljs.core.truth_((function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5041__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_26689,val_26690,taker_26688,this$__$1){
return (function (){
return (take_cb_26689.cljs$core$IFn$_invoke$arity$1 ? take_cb_26689.cljs$core$IFn$_invoke$arity$1(val_26690) : take_cb_26689.call(null,val_26690));
});})(take_cb_26689,val_26690,taker_26688,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__26519 = (function (){var or__5043__auto__ = exh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__26519.cljs$core$IFn$_invoke$arity$1 ? fexpr__26519.cljs$core$IFn$_invoke$arity$1(t) : fexpr__26519.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__26523 = arguments.length;
switch (G__26523) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__26695 = null;
var G__26695__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e26536){var t = e26536;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__26695__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e26538){var t = e26538;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__26695 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__26695__1.call(this,buf__$1);
case 2:
return G__26695__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26695.cljs$core$IFn$_invoke$arity$1 = G__26695__1;
G__26695.cljs$core$IFn$_invoke$arity$2 = G__26695__2;
return G__26695;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
