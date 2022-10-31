goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27974 = arguments.length;
switch (G__27974) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27975 = (function (f,blockable,meta27976){
this.f = f;
this.blockable = blockable;
this.meta27976 = meta27976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27977,meta27976__$1){
var self__ = this;
var _27977__$1 = this;
return (new cljs.core.async.t_cljs$core$async27975(self__.f,self__.blockable,meta27976__$1));
}));

(cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27977){
var self__ = this;
var _27977__$1 = this;
return self__.meta27976;
}));

(cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27976","meta27976",-930188623,null)], null);
}));

(cljs.core.async.t_cljs$core$async27975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27975");

(cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async27975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27975.
 */
cljs.core.async.__GT_t_cljs$core$async27975 = (function cljs$core$async$__GT_t_cljs$core$async27975(f__$1,blockable__$1,meta27976){
return (new cljs.core.async.t_cljs$core$async27975(f__$1,blockable__$1,meta27976));
});

}

return (new cljs.core.async.t_cljs$core$async27975(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28006 = arguments.length;
switch (G__28006) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28020 = arguments.length;
switch (G__28020) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28031 = arguments.length;
switch (G__28031) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29486 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29486) : fn1.call(null,val_29486));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29486) : fn1.call(null,val_29486));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28043 = arguments.length;
switch (G__28043) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___29490 = n;
var x_29491 = (0);
while(true){
if((x_29491 < n__5633__auto___29490)){
(a[x_29491] = x_29491);

var G__29492 = (x_29491 + (1));
x_29491 = G__29492;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28044 = (function (flag,meta28045){
this.flag = flag;
this.meta28045 = meta28045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28046,meta28045__$1){
var self__ = this;
var _28046__$1 = this;
return (new cljs.core.async.t_cljs$core$async28044(self__.flag,meta28045__$1));
}));

(cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28046){
var self__ = this;
var _28046__$1 = this;
return self__.meta28045;
}));

(cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28045","meta28045",-194338070,null)], null);
}));

(cljs.core.async.t_cljs$core$async28044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28044");

(cljs.core.async.t_cljs$core$async28044.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28044.
 */
cljs.core.async.__GT_t_cljs$core$async28044 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28044(flag__$1,meta28045){
return (new cljs.core.async.t_cljs$core$async28044(flag__$1,meta28045));
});

}

return (new cljs.core.async.t_cljs$core$async28044(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28051 = (function (flag,cb,meta28052){
this.flag = flag;
this.cb = cb;
this.meta28052 = meta28052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28053,meta28052__$1){
var self__ = this;
var _28053__$1 = this;
return (new cljs.core.async.t_cljs$core$async28051(self__.flag,self__.cb,meta28052__$1));
}));

(cljs.core.async.t_cljs$core$async28051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28053){
var self__ = this;
var _28053__$1 = this;
return self__.meta28052;
}));

(cljs.core.async.t_cljs$core$async28051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28052","meta28052",1490916086,null)], null);
}));

(cljs.core.async.t_cljs$core$async28051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28051");

(cljs.core.async.t_cljs$core$async28051.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28051.
 */
cljs.core.async.__GT_t_cljs$core$async28051 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28051(flag__$1,cb__$1,meta28052){
return (new cljs.core.async.t_cljs$core$async28051(flag__$1,cb__$1,meta28052));
});

}

return (new cljs.core.async.t_cljs$core$async28051(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28058_SHARP_){
var G__28063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28058_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28063) : fret.call(null,G__28063));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28059_SHARP_){
var G__28064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28059_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28064) : fret.call(null,G__28064));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29493 = (i + (1));
i = G__29493;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29494 = arguments.length;
var i__5767__auto___29495 = (0);
while(true){
if((i__5767__auto___29495 < len__5766__auto___29494)){
args__5772__auto__.push((arguments[i__5767__auto___29495]));

var G__29496 = (i__5767__auto___29495 + (1));
i__5767__auto___29495 = G__29496;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28067){
var map__28068 = p__28067;
var map__28068__$1 = cljs.core.__destructure_map(map__28068);
var opts = map__28068__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28065){
var G__28066 = cljs.core.first(seq28065);
var seq28065__$1 = cljs.core.next(seq28065);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28066,seq28065__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28070 = arguments.length;
switch (G__28070) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27906__auto___29498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28094){
var state_val_28095 = (state_28094[(1)]);
if((state_val_28095 === (7))){
var inst_28090 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
var statearr_28096_29499 = state_28094__$1;
(statearr_28096_29499[(2)] = inst_28090);

(statearr_28096_29499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (1))){
var state_28094__$1 = state_28094;
var statearr_28097_29500 = state_28094__$1;
(statearr_28097_29500[(2)] = null);

(statearr_28097_29500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (4))){
var inst_28073 = (state_28094[(7)]);
var inst_28073__$1 = (state_28094[(2)]);
var inst_28074 = (inst_28073__$1 == null);
var state_28094__$1 = (function (){var statearr_28098 = state_28094;
(statearr_28098[(7)] = inst_28073__$1);

return statearr_28098;
})();
if(cljs.core.truth_(inst_28074)){
var statearr_28099_29502 = state_28094__$1;
(statearr_28099_29502[(1)] = (5));

} else {
var statearr_28100_29503 = state_28094__$1;
(statearr_28100_29503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (13))){
var state_28094__$1 = state_28094;
var statearr_28101_29504 = state_28094__$1;
(statearr_28101_29504[(2)] = null);

(statearr_28101_29504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (6))){
var inst_28073 = (state_28094[(7)]);
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28094__$1,(11),to,inst_28073);
} else {
if((state_val_28095 === (3))){
var inst_28092 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28094__$1,inst_28092);
} else {
if((state_val_28095 === (12))){
var state_28094__$1 = state_28094;
var statearr_28102_29505 = state_28094__$1;
(statearr_28102_29505[(2)] = null);

(statearr_28102_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (2))){
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28094__$1,(4),from);
} else {
if((state_val_28095 === (11))){
var inst_28083 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
if(cljs.core.truth_(inst_28083)){
var statearr_28103_29506 = state_28094__$1;
(statearr_28103_29506[(1)] = (12));

} else {
var statearr_28104_29507 = state_28094__$1;
(statearr_28104_29507[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (9))){
var state_28094__$1 = state_28094;
var statearr_28105_29509 = state_28094__$1;
(statearr_28105_29509[(2)] = null);

(statearr_28105_29509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (5))){
var state_28094__$1 = state_28094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28106_29511 = state_28094__$1;
(statearr_28106_29511[(1)] = (8));

} else {
var statearr_28107_29512 = state_28094__$1;
(statearr_28107_29512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (14))){
var inst_28088 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
var statearr_28108_29513 = state_28094__$1;
(statearr_28108_29513[(2)] = inst_28088);

(statearr_28108_29513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (10))){
var inst_28080 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
var statearr_28109_29514 = state_28094__$1;
(statearr_28109_29514[(2)] = inst_28080);

(statearr_28109_29514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (8))){
var inst_28077 = cljs.core.async.close_BANG_(to);
var state_28094__$1 = state_28094;
var statearr_28110_29515 = state_28094__$1;
(statearr_28110_29515[(2)] = inst_28077);

(statearr_28110_29515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28111 = [null,null,null,null,null,null,null,null];
(statearr_28111[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28111[(1)] = (1));

return statearr_28111;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28094){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28094);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28112){var ex__27849__auto__ = e28112;
var statearr_28113_29518 = state_28094;
(statearr_28113_29518[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28094[(4)]))){
var statearr_28114_29519 = state_28094;
(statearr_28114_29519[(1)] = cljs.core.first((state_28094[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29520 = state_28094;
state_28094 = G__29520;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28115 = f__27907__auto__();
(statearr_28115[(6)] = c__27906__auto___29498);

return statearr_28115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__28116){
var vec__28117 = p__28116;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28117,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28117,(1),null);
var job = vec__28117;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27906__auto___29523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28124){
var state_val_28125 = (state_28124[(1)]);
if((state_val_28125 === (1))){
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28124__$1,(2),res,v);
} else {
if((state_val_28125 === (2))){
var inst_28121 = (state_28124[(2)]);
var inst_28122 = cljs.core.async.close_BANG_(res);
var state_28124__$1 = (function (){var statearr_28126 = state_28124;
(statearr_28126[(7)] = inst_28121);

return statearr_28126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28124__$1,inst_28122);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28127 = [null,null,null,null,null,null,null,null];
(statearr_28127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28127[(1)] = (1));

return statearr_28127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28124){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28124);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28128){var ex__27849__auto__ = e28128;
var statearr_28129_29524 = state_28124;
(statearr_28129_29524[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28124[(4)]))){
var statearr_28130_29525 = state_28124;
(statearr_28130_29525[(1)] = cljs.core.first((state_28124[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29527 = state_28124;
state_28124 = G__29527;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28131 = f__27907__auto__();
(statearr_28131[(6)] = c__27906__auto___29523);

return statearr_28131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28132){
var vec__28133 = p__28132;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(1),null);
var job = vec__28133;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___29529 = n;
var __29530 = (0);
while(true){
if((__29530 < n__5633__auto___29529)){
var G__28136_29531 = type;
var G__28136_29532__$1 = (((G__28136_29531 instanceof cljs.core.Keyword))?G__28136_29531.fqn:null);
switch (G__28136_29532__$1) {
case "compute":
var c__27906__auto___29534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29530,c__27906__auto___29534,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async){
return (function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = ((function (__29530,c__27906__auto___29534,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async){
return (function (state_28149){
var state_val_28150 = (state_28149[(1)]);
if((state_val_28150 === (1))){
var state_28149__$1 = state_28149;
var statearr_28151_29535 = state_28149__$1;
(statearr_28151_29535[(2)] = null);

(statearr_28151_29535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (2))){
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28149__$1,(4),jobs);
} else {
if((state_val_28150 === (3))){
var inst_28147 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28149__$1,inst_28147);
} else {
if((state_val_28150 === (4))){
var inst_28139 = (state_28149[(2)]);
var inst_28140 = process__$1(inst_28139);
var state_28149__$1 = state_28149;
if(cljs.core.truth_(inst_28140)){
var statearr_28152_29536 = state_28149__$1;
(statearr_28152_29536[(1)] = (5));

} else {
var statearr_28153_29537 = state_28149__$1;
(statearr_28153_29537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (5))){
var state_28149__$1 = state_28149;
var statearr_28154_29538 = state_28149__$1;
(statearr_28154_29538[(2)] = null);

(statearr_28154_29538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (6))){
var state_28149__$1 = state_28149;
var statearr_28155_29540 = state_28149__$1;
(statearr_28155_29540[(2)] = null);

(statearr_28155_29540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28150 === (7))){
var inst_28145 = (state_28149[(2)]);
var state_28149__$1 = state_28149;
var statearr_28156_29541 = state_28149__$1;
(statearr_28156_29541[(2)] = inst_28145);

(statearr_28156_29541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29530,c__27906__auto___29534,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async))
;
return ((function (__29530,switch__27845__auto__,c__27906__auto___29534,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28157 = [null,null,null,null,null,null,null];
(statearr_28157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28157[(1)] = (1));

return statearr_28157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28149){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28149);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28158){var ex__27849__auto__ = e28158;
var statearr_28159_29543 = state_28149;
(statearr_28159_29543[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28149[(4)]))){
var statearr_28160_29544 = state_28149;
(statearr_28160_29544[(1)] = cljs.core.first((state_28149[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29545 = state_28149;
state_28149 = G__29545;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
;})(__29530,switch__27845__auto__,c__27906__auto___29534,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async))
})();
var state__27908__auto__ = (function (){var statearr_28161 = f__27907__auto__();
(statearr_28161[(6)] = c__27906__auto___29534);

return statearr_28161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
});})(__29530,c__27906__auto___29534,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async))
);


break;
case "async":
var c__27906__auto___29546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29530,c__27906__auto___29546,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async){
return (function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = ((function (__29530,c__27906__auto___29546,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async){
return (function (state_28174){
var state_val_28175 = (state_28174[(1)]);
if((state_val_28175 === (1))){
var state_28174__$1 = state_28174;
var statearr_28176_29547 = state_28174__$1;
(statearr_28176_29547[(2)] = null);

(statearr_28176_29547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (2))){
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28174__$1,(4),jobs);
} else {
if((state_val_28175 === (3))){
var inst_28172 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28174__$1,inst_28172);
} else {
if((state_val_28175 === (4))){
var inst_28164 = (state_28174[(2)]);
var inst_28165 = async(inst_28164);
var state_28174__$1 = state_28174;
if(cljs.core.truth_(inst_28165)){
var statearr_28177_29548 = state_28174__$1;
(statearr_28177_29548[(1)] = (5));

} else {
var statearr_28178_29549 = state_28174__$1;
(statearr_28178_29549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (5))){
var state_28174__$1 = state_28174;
var statearr_28179_29550 = state_28174__$1;
(statearr_28179_29550[(2)] = null);

(statearr_28179_29550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (6))){
var state_28174__$1 = state_28174;
var statearr_28180_29551 = state_28174__$1;
(statearr_28180_29551[(2)] = null);

(statearr_28180_29551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28175 === (7))){
var inst_28170 = (state_28174[(2)]);
var state_28174__$1 = state_28174;
var statearr_28181_29552 = state_28174__$1;
(statearr_28181_29552[(2)] = inst_28170);

(statearr_28181_29552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29530,c__27906__auto___29546,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async))
;
return ((function (__29530,switch__27845__auto__,c__27906__auto___29546,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28182 = [null,null,null,null,null,null,null];
(statearr_28182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28182[(1)] = (1));

return statearr_28182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28174){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28174);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28183){var ex__27849__auto__ = e28183;
var statearr_28184_29554 = state_28174;
(statearr_28184_29554[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28174[(4)]))){
var statearr_28185_29556 = state_28174;
(statearr_28185_29556[(1)] = cljs.core.first((state_28174[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29557 = state_28174;
state_28174 = G__29557;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
;})(__29530,switch__27845__auto__,c__27906__auto___29546,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async))
})();
var state__27908__auto__ = (function (){var statearr_28186 = f__27907__auto__();
(statearr_28186[(6)] = c__27906__auto___29546);

return statearr_28186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
});})(__29530,c__27906__auto___29546,G__28136_29531,G__28136_29532__$1,n__5633__auto___29529,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28136_29532__$1)].join('')));

}

var G__29558 = (__29530 + (1));
__29530 = G__29558;
continue;
} else {
}
break;
}

var c__27906__auto___29559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (7))){
var inst_28204 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28210_29560 = state_28208__$1;
(statearr_28210_29560[(2)] = inst_28204);

(statearr_28210_29560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (1))){
var state_28208__$1 = state_28208;
var statearr_28211_29561 = state_28208__$1;
(statearr_28211_29561[(2)] = null);

(statearr_28211_29561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (4))){
var inst_28189 = (state_28208[(7)]);
var inst_28189__$1 = (state_28208[(2)]);
var inst_28190 = (inst_28189__$1 == null);
var state_28208__$1 = (function (){var statearr_28212 = state_28208;
(statearr_28212[(7)] = inst_28189__$1);

return statearr_28212;
})();
if(cljs.core.truth_(inst_28190)){
var statearr_28213_29562 = state_28208__$1;
(statearr_28213_29562[(1)] = (5));

} else {
var statearr_28214_29563 = state_28208__$1;
(statearr_28214_29563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (6))){
var inst_28189 = (state_28208[(7)]);
var inst_28194 = (state_28208[(8)]);
var inst_28194__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28195 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28196 = [inst_28189,inst_28194__$1];
var inst_28197 = (new cljs.core.PersistentVector(null,2,(5),inst_28195,inst_28196,null));
var state_28208__$1 = (function (){var statearr_28215 = state_28208;
(statearr_28215[(8)] = inst_28194__$1);

return statearr_28215;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28208__$1,(8),jobs,inst_28197);
} else {
if((state_val_28209 === (3))){
var inst_28206 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28208__$1,inst_28206);
} else {
if((state_val_28209 === (2))){
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28208__$1,(4),from);
} else {
if((state_val_28209 === (9))){
var inst_28201 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28216 = state_28208;
(statearr_28216[(9)] = inst_28201);

return statearr_28216;
})();
var statearr_28217_29564 = state_28208__$1;
(statearr_28217_29564[(2)] = null);

(statearr_28217_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (5))){
var inst_28192 = cljs.core.async.close_BANG_(jobs);
var state_28208__$1 = state_28208;
var statearr_28218_29565 = state_28208__$1;
(statearr_28218_29565[(2)] = inst_28192);

(statearr_28218_29565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (8))){
var inst_28194 = (state_28208[(8)]);
var inst_28199 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28219 = state_28208;
(statearr_28219[(10)] = inst_28199);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28208__$1,(9),results,inst_28194);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28220[(1)] = (1));

return statearr_28220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28208){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28208);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28221){var ex__27849__auto__ = e28221;
var statearr_28222_29566 = state_28208;
(statearr_28222_29566[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28208[(4)]))){
var statearr_28223_29567 = state_28208;
(statearr_28223_29567[(1)] = cljs.core.first((state_28208[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29568 = state_28208;
state_28208 = G__29568;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28224 = f__27907__auto__();
(statearr_28224[(6)] = c__27906__auto___29559);

return statearr_28224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


var c__27906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28262){
var state_val_28263 = (state_28262[(1)]);
if((state_val_28263 === (7))){
var inst_28258 = (state_28262[(2)]);
var state_28262__$1 = state_28262;
var statearr_28264_29570 = state_28262__$1;
(statearr_28264_29570[(2)] = inst_28258);

(statearr_28264_29570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (20))){
var state_28262__$1 = state_28262;
var statearr_28265_29571 = state_28262__$1;
(statearr_28265_29571[(2)] = null);

(statearr_28265_29571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (1))){
var state_28262__$1 = state_28262;
var statearr_28266_29572 = state_28262__$1;
(statearr_28266_29572[(2)] = null);

(statearr_28266_29572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (4))){
var inst_28227 = (state_28262[(7)]);
var inst_28227__$1 = (state_28262[(2)]);
var inst_28228 = (inst_28227__$1 == null);
var state_28262__$1 = (function (){var statearr_28267 = state_28262;
(statearr_28267[(7)] = inst_28227__$1);

return statearr_28267;
})();
if(cljs.core.truth_(inst_28228)){
var statearr_28268_29573 = state_28262__$1;
(statearr_28268_29573[(1)] = (5));

} else {
var statearr_28269_29574 = state_28262__$1;
(statearr_28269_29574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (15))){
var inst_28240 = (state_28262[(8)]);
var state_28262__$1 = state_28262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28262__$1,(18),to,inst_28240);
} else {
if((state_val_28263 === (21))){
var inst_28253 = (state_28262[(2)]);
var state_28262__$1 = state_28262;
var statearr_28270_29575 = state_28262__$1;
(statearr_28270_29575[(2)] = inst_28253);

(statearr_28270_29575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (13))){
var inst_28255 = (state_28262[(2)]);
var state_28262__$1 = (function (){var statearr_28271 = state_28262;
(statearr_28271[(9)] = inst_28255);

return statearr_28271;
})();
var statearr_28272_29576 = state_28262__$1;
(statearr_28272_29576[(2)] = null);

(statearr_28272_29576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (6))){
var inst_28227 = (state_28262[(7)]);
var state_28262__$1 = state_28262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28262__$1,(11),inst_28227);
} else {
if((state_val_28263 === (17))){
var inst_28248 = (state_28262[(2)]);
var state_28262__$1 = state_28262;
if(cljs.core.truth_(inst_28248)){
var statearr_28273_29577 = state_28262__$1;
(statearr_28273_29577[(1)] = (19));

} else {
var statearr_28274_29578 = state_28262__$1;
(statearr_28274_29578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (3))){
var inst_28260 = (state_28262[(2)]);
var state_28262__$1 = state_28262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28262__$1,inst_28260);
} else {
if((state_val_28263 === (12))){
var inst_28237 = (state_28262[(10)]);
var state_28262__$1 = state_28262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28262__$1,(14),inst_28237);
} else {
if((state_val_28263 === (2))){
var state_28262__$1 = state_28262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28262__$1,(4),results);
} else {
if((state_val_28263 === (19))){
var state_28262__$1 = state_28262;
var statearr_28275_29579 = state_28262__$1;
(statearr_28275_29579[(2)] = null);

(statearr_28275_29579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (11))){
var inst_28237 = (state_28262[(2)]);
var state_28262__$1 = (function (){var statearr_28276 = state_28262;
(statearr_28276[(10)] = inst_28237);

return statearr_28276;
})();
var statearr_28277_29580 = state_28262__$1;
(statearr_28277_29580[(2)] = null);

(statearr_28277_29580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (9))){
var state_28262__$1 = state_28262;
var statearr_28278_29581 = state_28262__$1;
(statearr_28278_29581[(2)] = null);

(statearr_28278_29581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (5))){
var state_28262__$1 = state_28262;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28279_29582 = state_28262__$1;
(statearr_28279_29582[(1)] = (8));

} else {
var statearr_28280_29583 = state_28262__$1;
(statearr_28280_29583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (14))){
var inst_28240 = (state_28262[(8)]);
var inst_28242 = (state_28262[(11)]);
var inst_28240__$1 = (state_28262[(2)]);
var inst_28241 = (inst_28240__$1 == null);
var inst_28242__$1 = cljs.core.not(inst_28241);
var state_28262__$1 = (function (){var statearr_28281 = state_28262;
(statearr_28281[(8)] = inst_28240__$1);

(statearr_28281[(11)] = inst_28242__$1);

return statearr_28281;
})();
if(inst_28242__$1){
var statearr_28282_29584 = state_28262__$1;
(statearr_28282_29584[(1)] = (15));

} else {
var statearr_28283_29585 = state_28262__$1;
(statearr_28283_29585[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (16))){
var inst_28242 = (state_28262[(11)]);
var state_28262__$1 = state_28262;
var statearr_28284_29586 = state_28262__$1;
(statearr_28284_29586[(2)] = inst_28242);

(statearr_28284_29586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (10))){
var inst_28234 = (state_28262[(2)]);
var state_28262__$1 = state_28262;
var statearr_28285_29591 = state_28262__$1;
(statearr_28285_29591[(2)] = inst_28234);

(statearr_28285_29591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (18))){
var inst_28245 = (state_28262[(2)]);
var state_28262__$1 = state_28262;
var statearr_28286_29592 = state_28262__$1;
(statearr_28286_29592[(2)] = inst_28245);

(statearr_28286_29592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28263 === (8))){
var inst_28231 = cljs.core.async.close_BANG_(to);
var state_28262__$1 = state_28262;
var statearr_28287_29593 = state_28262__$1;
(statearr_28287_29593[(2)] = inst_28231);

(statearr_28287_29593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_28288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__);

(statearr_28288[(1)] = (1));

return statearr_28288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1 = (function (state_28262){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28262);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28289){var ex__27849__auto__ = e28289;
var statearr_28290_29594 = state_28262;
(statearr_28290_29594[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28262[(4)]))){
var statearr_28291_29595 = state_28262;
(statearr_28291_29595[(1)] = cljs.core.first((state_28262[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29596 = state_28262;
state_28262 = G__29596;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__ = function(state_28262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1.call(this,state_28262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28292 = f__27907__auto__();
(statearr_28292[(6)] = c__27906__auto__);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));

return c__27906__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28294 = arguments.length;
switch (G__28294) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28296 = arguments.length;
switch (G__28296) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28298 = arguments.length;
switch (G__28298) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27906__auto___29600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28324){
var state_val_28325 = (state_28324[(1)]);
if((state_val_28325 === (7))){
var inst_28320 = (state_28324[(2)]);
var state_28324__$1 = state_28324;
var statearr_28326_29601 = state_28324__$1;
(statearr_28326_29601[(2)] = inst_28320);

(statearr_28326_29601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (1))){
var state_28324__$1 = state_28324;
var statearr_28327_29602 = state_28324__$1;
(statearr_28327_29602[(2)] = null);

(statearr_28327_29602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (4))){
var inst_28301 = (state_28324[(7)]);
var inst_28301__$1 = (state_28324[(2)]);
var inst_28302 = (inst_28301__$1 == null);
var state_28324__$1 = (function (){var statearr_28328 = state_28324;
(statearr_28328[(7)] = inst_28301__$1);

return statearr_28328;
})();
if(cljs.core.truth_(inst_28302)){
var statearr_28329_29604 = state_28324__$1;
(statearr_28329_29604[(1)] = (5));

} else {
var statearr_28330_29605 = state_28324__$1;
(statearr_28330_29605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (13))){
var state_28324__$1 = state_28324;
var statearr_28331_29607 = state_28324__$1;
(statearr_28331_29607[(2)] = null);

(statearr_28331_29607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (6))){
var inst_28301 = (state_28324[(7)]);
var inst_28307 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28301) : p.call(null,inst_28301));
var state_28324__$1 = state_28324;
if(cljs.core.truth_(inst_28307)){
var statearr_28332_29608 = state_28324__$1;
(statearr_28332_29608[(1)] = (9));

} else {
var statearr_28333_29609 = state_28324__$1;
(statearr_28333_29609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (3))){
var inst_28322 = (state_28324[(2)]);
var state_28324__$1 = state_28324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28324__$1,inst_28322);
} else {
if((state_val_28325 === (12))){
var state_28324__$1 = state_28324;
var statearr_28334_29610 = state_28324__$1;
(statearr_28334_29610[(2)] = null);

(statearr_28334_29610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (2))){
var state_28324__$1 = state_28324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28324__$1,(4),ch);
} else {
if((state_val_28325 === (11))){
var inst_28301 = (state_28324[(7)]);
var inst_28311 = (state_28324[(2)]);
var state_28324__$1 = state_28324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28324__$1,(8),inst_28311,inst_28301);
} else {
if((state_val_28325 === (9))){
var state_28324__$1 = state_28324;
var statearr_28335_29611 = state_28324__$1;
(statearr_28335_29611[(2)] = tc);

(statearr_28335_29611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (5))){
var inst_28304 = cljs.core.async.close_BANG_(tc);
var inst_28305 = cljs.core.async.close_BANG_(fc);
var state_28324__$1 = (function (){var statearr_28336 = state_28324;
(statearr_28336[(8)] = inst_28304);

return statearr_28336;
})();
var statearr_28337_29612 = state_28324__$1;
(statearr_28337_29612[(2)] = inst_28305);

(statearr_28337_29612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (14))){
var inst_28318 = (state_28324[(2)]);
var state_28324__$1 = state_28324;
var statearr_28338_29613 = state_28324__$1;
(statearr_28338_29613[(2)] = inst_28318);

(statearr_28338_29613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (10))){
var state_28324__$1 = state_28324;
var statearr_28339_29614 = state_28324__$1;
(statearr_28339_29614[(2)] = fc);

(statearr_28339_29614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (8))){
var inst_28313 = (state_28324[(2)]);
var state_28324__$1 = state_28324;
if(cljs.core.truth_(inst_28313)){
var statearr_28340_29615 = state_28324__$1;
(statearr_28340_29615[(1)] = (12));

} else {
var statearr_28341_29616 = state_28324__$1;
(statearr_28341_29616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28342 = [null,null,null,null,null,null,null,null,null];
(statearr_28342[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28342[(1)] = (1));

return statearr_28342;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28324){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28324);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28343){var ex__27849__auto__ = e28343;
var statearr_28344_29617 = state_28324;
(statearr_28344_29617[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28324[(4)]))){
var statearr_28345_29618 = state_28324;
(statearr_28345_29618[(1)] = cljs.core.first((state_28324[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29619 = state_28324;
state_28324 = G__29619;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28346 = f__27907__auto__();
(statearr_28346[(6)] = c__27906__auto___29600);

return statearr_28346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28368){
var state_val_28369 = (state_28368[(1)]);
if((state_val_28369 === (7))){
var inst_28364 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
var statearr_28370_29621 = state_28368__$1;
(statearr_28370_29621[(2)] = inst_28364);

(statearr_28370_29621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28369 === (1))){
var inst_28347 = init;
var inst_28348 = inst_28347;
var state_28368__$1 = (function (){var statearr_28371 = state_28368;
(statearr_28371[(7)] = inst_28348);

return statearr_28371;
})();
var statearr_28372_29628 = state_28368__$1;
(statearr_28372_29628[(2)] = null);

(statearr_28372_29628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28369 === (4))){
var inst_28351 = (state_28368[(8)]);
var inst_28351__$1 = (state_28368[(2)]);
var inst_28352 = (inst_28351__$1 == null);
var state_28368__$1 = (function (){var statearr_28373 = state_28368;
(statearr_28373[(8)] = inst_28351__$1);

return statearr_28373;
})();
if(cljs.core.truth_(inst_28352)){
var statearr_28374_29629 = state_28368__$1;
(statearr_28374_29629[(1)] = (5));

} else {
var statearr_28375_29630 = state_28368__$1;
(statearr_28375_29630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28369 === (6))){
var inst_28351 = (state_28368[(8)]);
var inst_28348 = (state_28368[(7)]);
var inst_28355 = (state_28368[(9)]);
var inst_28355__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28348,inst_28351) : f.call(null,inst_28348,inst_28351));
var inst_28356 = cljs.core.reduced_QMARK_(inst_28355__$1);
var state_28368__$1 = (function (){var statearr_28376 = state_28368;
(statearr_28376[(9)] = inst_28355__$1);

return statearr_28376;
})();
if(inst_28356){
var statearr_28377_29631 = state_28368__$1;
(statearr_28377_29631[(1)] = (8));

} else {
var statearr_28378_29632 = state_28368__$1;
(statearr_28378_29632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28369 === (3))){
var inst_28366 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28368__$1,inst_28366);
} else {
if((state_val_28369 === (2))){
var state_28368__$1 = state_28368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28368__$1,(4),ch);
} else {
if((state_val_28369 === (9))){
var inst_28355 = (state_28368[(9)]);
var inst_28348 = inst_28355;
var state_28368__$1 = (function (){var statearr_28379 = state_28368;
(statearr_28379[(7)] = inst_28348);

return statearr_28379;
})();
var statearr_28380_29636 = state_28368__$1;
(statearr_28380_29636[(2)] = null);

(statearr_28380_29636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28369 === (5))){
var inst_28348 = (state_28368[(7)]);
var state_28368__$1 = state_28368;
var statearr_28381_29637 = state_28368__$1;
(statearr_28381_29637[(2)] = inst_28348);

(statearr_28381_29637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28369 === (10))){
var inst_28362 = (state_28368[(2)]);
var state_28368__$1 = state_28368;
var statearr_28382_29641 = state_28368__$1;
(statearr_28382_29641[(2)] = inst_28362);

(statearr_28382_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28369 === (8))){
var inst_28355 = (state_28368[(9)]);
var inst_28358 = cljs.core.deref(inst_28355);
var state_28368__$1 = state_28368;
var statearr_28383_29642 = state_28368__$1;
(statearr_28383_29642[(2)] = inst_28358);

(statearr_28383_29642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27846__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27846__auto____0 = (function (){
var statearr_28384 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28384[(0)] = cljs$core$async$reduce_$_state_machine__27846__auto__);

(statearr_28384[(1)] = (1));

return statearr_28384;
});
var cljs$core$async$reduce_$_state_machine__27846__auto____1 = (function (state_28368){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28368);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28385){var ex__27849__auto__ = e28385;
var statearr_28386_29643 = state_28368;
(statearr_28386_29643[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28368[(4)]))){
var statearr_28387_29644 = state_28368;
(statearr_28387_29644[(1)] = cljs.core.first((state_28368[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29648 = state_28368;
state_28368 = G__29648;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27846__auto__ = function(state_28368){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27846__auto____1.call(this,state_28368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27846__auto____0;
cljs$core$async$reduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27846__auto____1;
return cljs$core$async$reduce_$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28388 = f__27907__auto__();
(statearr_28388[(6)] = c__27906__auto__);

return statearr_28388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));

return c__27906__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28394){
var state_val_28395 = (state_28394[(1)]);
if((state_val_28395 === (1))){
var inst_28389 = cljs.core.async.reduce(f__$1,init,ch);
var state_28394__$1 = state_28394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28394__$1,(2),inst_28389);
} else {
if((state_val_28395 === (2))){
var inst_28391 = (state_28394[(2)]);
var inst_28392 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28391) : f__$1.call(null,inst_28391));
var state_28394__$1 = state_28394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28394__$1,inst_28392);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27846__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27846__auto____0 = (function (){
var statearr_28396 = [null,null,null,null,null,null,null];
(statearr_28396[(0)] = cljs$core$async$transduce_$_state_machine__27846__auto__);

(statearr_28396[(1)] = (1));

return statearr_28396;
});
var cljs$core$async$transduce_$_state_machine__27846__auto____1 = (function (state_28394){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28394);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28397){var ex__27849__auto__ = e28397;
var statearr_28398_29653 = state_28394;
(statearr_28398_29653[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28394[(4)]))){
var statearr_28399_29654 = state_28394;
(statearr_28399_29654[(1)] = cljs.core.first((state_28394[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29658 = state_28394;
state_28394 = G__29658;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27846__auto__ = function(state_28394){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27846__auto____1.call(this,state_28394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27846__auto____0;
cljs$core$async$transduce_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27846__auto____1;
return cljs$core$async$transduce_$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28400 = f__27907__auto__();
(statearr_28400[(6)] = c__27906__auto__);

return statearr_28400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));

return c__27906__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__28402 = arguments.length;
switch (G__28402) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28427){
var state_val_28428 = (state_28427[(1)]);
if((state_val_28428 === (7))){
var inst_28409 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28429_29660 = state_28427__$1;
(statearr_28429_29660[(2)] = inst_28409);

(statearr_28429_29660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (1))){
var inst_28403 = cljs.core.seq(coll);
var inst_28404 = inst_28403;
var state_28427__$1 = (function (){var statearr_28430 = state_28427;
(statearr_28430[(7)] = inst_28404);

return statearr_28430;
})();
var statearr_28431_29664 = state_28427__$1;
(statearr_28431_29664[(2)] = null);

(statearr_28431_29664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (4))){
var inst_28404 = (state_28427[(7)]);
var inst_28407 = cljs.core.first(inst_28404);
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28427__$1,(7),ch,inst_28407);
} else {
if((state_val_28428 === (13))){
var inst_28421 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28432_29668 = state_28427__$1;
(statearr_28432_29668[(2)] = inst_28421);

(statearr_28432_29668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (6))){
var inst_28412 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
if(cljs.core.truth_(inst_28412)){
var statearr_28433_29669 = state_28427__$1;
(statearr_28433_29669[(1)] = (8));

} else {
var statearr_28434_29670 = state_28427__$1;
(statearr_28434_29670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (3))){
var inst_28425 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28427__$1,inst_28425);
} else {
if((state_val_28428 === (12))){
var state_28427__$1 = state_28427;
var statearr_28435_29674 = state_28427__$1;
(statearr_28435_29674[(2)] = null);

(statearr_28435_29674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (2))){
var inst_28404 = (state_28427[(7)]);
var state_28427__$1 = state_28427;
if(cljs.core.truth_(inst_28404)){
var statearr_28436_29675 = state_28427__$1;
(statearr_28436_29675[(1)] = (4));

} else {
var statearr_28437_29676 = state_28427__$1;
(statearr_28437_29676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (11))){
var inst_28418 = cljs.core.async.close_BANG_(ch);
var state_28427__$1 = state_28427;
var statearr_28438_29677 = state_28427__$1;
(statearr_28438_29677[(2)] = inst_28418);

(statearr_28438_29677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (9))){
var state_28427__$1 = state_28427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28439_29678 = state_28427__$1;
(statearr_28439_29678[(1)] = (11));

} else {
var statearr_28440_29679 = state_28427__$1;
(statearr_28440_29679[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (5))){
var inst_28404 = (state_28427[(7)]);
var state_28427__$1 = state_28427;
var statearr_28441_29680 = state_28427__$1;
(statearr_28441_29680[(2)] = inst_28404);

(statearr_28441_29680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (10))){
var inst_28423 = (state_28427[(2)]);
var state_28427__$1 = state_28427;
var statearr_28442_29681 = state_28427__$1;
(statearr_28442_29681[(2)] = inst_28423);

(statearr_28442_29681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28428 === (8))){
var inst_28404 = (state_28427[(7)]);
var inst_28414 = cljs.core.next(inst_28404);
var inst_28404__$1 = inst_28414;
var state_28427__$1 = (function (){var statearr_28443 = state_28427;
(statearr_28443[(7)] = inst_28404__$1);

return statearr_28443;
})();
var statearr_28444_29682 = state_28427__$1;
(statearr_28444_29682[(2)] = null);

(statearr_28444_29682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28445 = [null,null,null,null,null,null,null,null];
(statearr_28445[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28445[(1)] = (1));

return statearr_28445;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28427){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28427);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28446){var ex__27849__auto__ = e28446;
var statearr_28447_29683 = state_28427;
(statearr_28447_29683[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28427[(4)]))){
var statearr_28448_29684 = state_28427;
(statearr_28448_29684[(1)] = cljs.core.first((state_28427[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29686 = state_28427;
state_28427 = G__29686;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28449 = f__27907__auto__();
(statearr_28449[(6)] = c__27906__auto__);

return statearr_28449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));

return c__27906__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28451 = arguments.length;
switch (G__28451) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_29688 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29688(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29689 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29689(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29690 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29690(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29691 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29691(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28452 = (function (ch,cs,meta28453){
this.ch = ch;
this.cs = cs;
this.meta28453 = meta28453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28454,meta28453__$1){
var self__ = this;
var _28454__$1 = this;
return (new cljs.core.async.t_cljs$core$async28452(self__.ch,self__.cs,meta28453__$1));
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28454){
var self__ = this;
var _28454__$1 = this;
return self__.meta28453;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28453","meta28453",-1461276531,null)], null);
}));

(cljs.core.async.t_cljs$core$async28452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28452");

(cljs.core.async.t_cljs$core$async28452.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28452.
 */
cljs.core.async.__GT_t_cljs$core$async28452 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28452(ch__$1,cs__$1,meta28453){
return (new cljs.core.async.t_cljs$core$async28452(ch__$1,cs__$1,meta28453));
});

}

return (new cljs.core.async.t_cljs$core$async28452(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27906__auto___29692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28587){
var state_val_28588 = (state_28587[(1)]);
if((state_val_28588 === (7))){
var inst_28583 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28589_29693 = state_28587__$1;
(statearr_28589_29693[(2)] = inst_28583);

(statearr_28589_29693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (20))){
var inst_28488 = (state_28587[(7)]);
var inst_28500 = cljs.core.first(inst_28488);
var inst_28501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28500,(0),null);
var inst_28502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28500,(1),null);
var state_28587__$1 = (function (){var statearr_28590 = state_28587;
(statearr_28590[(8)] = inst_28501);

return statearr_28590;
})();
if(cljs.core.truth_(inst_28502)){
var statearr_28591_29694 = state_28587__$1;
(statearr_28591_29694[(1)] = (22));

} else {
var statearr_28592_29695 = state_28587__$1;
(statearr_28592_29695[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (27))){
var inst_28530 = (state_28587[(9)]);
var inst_28532 = (state_28587[(10)]);
var inst_28457 = (state_28587[(11)]);
var inst_28537 = (state_28587[(12)]);
var inst_28537__$1 = cljs.core._nth(inst_28530,inst_28532);
var inst_28538 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28537__$1,inst_28457,done);
var state_28587__$1 = (function (){var statearr_28593 = state_28587;
(statearr_28593[(12)] = inst_28537__$1);

return statearr_28593;
})();
if(cljs.core.truth_(inst_28538)){
var statearr_28594_29696 = state_28587__$1;
(statearr_28594_29696[(1)] = (30));

} else {
var statearr_28595_29697 = state_28587__$1;
(statearr_28595_29697[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (1))){
var state_28587__$1 = state_28587;
var statearr_28596_29698 = state_28587__$1;
(statearr_28596_29698[(2)] = null);

(statearr_28596_29698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (24))){
var inst_28488 = (state_28587[(7)]);
var inst_28507 = (state_28587[(2)]);
var inst_28508 = cljs.core.next(inst_28488);
var inst_28466 = inst_28508;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28587__$1 = (function (){var statearr_28597 = state_28587;
(statearr_28597[(13)] = inst_28507);

(statearr_28597[(14)] = inst_28467);

(statearr_28597[(15)] = inst_28469);

(statearr_28597[(16)] = inst_28468);

(statearr_28597[(17)] = inst_28466);

return statearr_28597;
})();
var statearr_28598_29699 = state_28587__$1;
(statearr_28598_29699[(2)] = null);

(statearr_28598_29699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (39))){
var state_28587__$1 = state_28587;
var statearr_28602_29700 = state_28587__$1;
(statearr_28602_29700[(2)] = null);

(statearr_28602_29700[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (4))){
var inst_28457 = (state_28587[(11)]);
var inst_28457__$1 = (state_28587[(2)]);
var inst_28458 = (inst_28457__$1 == null);
var state_28587__$1 = (function (){var statearr_28603 = state_28587;
(statearr_28603[(11)] = inst_28457__$1);

return statearr_28603;
})();
if(cljs.core.truth_(inst_28458)){
var statearr_28604_29701 = state_28587__$1;
(statearr_28604_29701[(1)] = (5));

} else {
var statearr_28605_29702 = state_28587__$1;
(statearr_28605_29702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (15))){
var inst_28467 = (state_28587[(14)]);
var inst_28469 = (state_28587[(15)]);
var inst_28468 = (state_28587[(16)]);
var inst_28466 = (state_28587[(17)]);
var inst_28484 = (state_28587[(2)]);
var inst_28485 = (inst_28469 + (1));
var tmp28599 = inst_28467;
var tmp28600 = inst_28468;
var tmp28601 = inst_28466;
var inst_28466__$1 = tmp28601;
var inst_28467__$1 = tmp28599;
var inst_28468__$1 = tmp28600;
var inst_28469__$1 = inst_28485;
var state_28587__$1 = (function (){var statearr_28606 = state_28587;
(statearr_28606[(14)] = inst_28467__$1);

(statearr_28606[(18)] = inst_28484);

(statearr_28606[(15)] = inst_28469__$1);

(statearr_28606[(16)] = inst_28468__$1);

(statearr_28606[(17)] = inst_28466__$1);

return statearr_28606;
})();
var statearr_28607_29703 = state_28587__$1;
(statearr_28607_29703[(2)] = null);

(statearr_28607_29703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (21))){
var inst_28511 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28611_29704 = state_28587__$1;
(statearr_28611_29704[(2)] = inst_28511);

(statearr_28611_29704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (31))){
var inst_28537 = (state_28587[(12)]);
var inst_28541 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28537);
var state_28587__$1 = state_28587;
var statearr_28612_29707 = state_28587__$1;
(statearr_28612_29707[(2)] = inst_28541);

(statearr_28612_29707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (32))){
var inst_28529 = (state_28587[(19)]);
var inst_28530 = (state_28587[(9)]);
var inst_28532 = (state_28587[(10)]);
var inst_28531 = (state_28587[(20)]);
var inst_28543 = (state_28587[(2)]);
var inst_28544 = (inst_28532 + (1));
var tmp28608 = inst_28529;
var tmp28609 = inst_28530;
var tmp28610 = inst_28531;
var inst_28529__$1 = tmp28608;
var inst_28530__$1 = tmp28609;
var inst_28531__$1 = tmp28610;
var inst_28532__$1 = inst_28544;
var state_28587__$1 = (function (){var statearr_28613 = state_28587;
(statearr_28613[(19)] = inst_28529__$1);

(statearr_28613[(9)] = inst_28530__$1);

(statearr_28613[(10)] = inst_28532__$1);

(statearr_28613[(20)] = inst_28531__$1);

(statearr_28613[(21)] = inst_28543);

return statearr_28613;
})();
var statearr_28614_29711 = state_28587__$1;
(statearr_28614_29711[(2)] = null);

(statearr_28614_29711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (40))){
var inst_28556 = (state_28587[(22)]);
var inst_28560 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28556);
var state_28587__$1 = state_28587;
var statearr_28615_29713 = state_28587__$1;
(statearr_28615_29713[(2)] = inst_28560);

(statearr_28615_29713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (33))){
var inst_28547 = (state_28587[(23)]);
var inst_28549 = cljs.core.chunked_seq_QMARK_(inst_28547);
var state_28587__$1 = state_28587;
if(inst_28549){
var statearr_28616_29714 = state_28587__$1;
(statearr_28616_29714[(1)] = (36));

} else {
var statearr_28617_29715 = state_28587__$1;
(statearr_28617_29715[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (13))){
var inst_28478 = (state_28587[(24)]);
var inst_28481 = cljs.core.async.close_BANG_(inst_28478);
var state_28587__$1 = state_28587;
var statearr_28618_29716 = state_28587__$1;
(statearr_28618_29716[(2)] = inst_28481);

(statearr_28618_29716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (22))){
var inst_28501 = (state_28587[(8)]);
var inst_28504 = cljs.core.async.close_BANG_(inst_28501);
var state_28587__$1 = state_28587;
var statearr_28619_29718 = state_28587__$1;
(statearr_28619_29718[(2)] = inst_28504);

(statearr_28619_29718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (36))){
var inst_28547 = (state_28587[(23)]);
var inst_28551 = cljs.core.chunk_first(inst_28547);
var inst_28552 = cljs.core.chunk_rest(inst_28547);
var inst_28553 = cljs.core.count(inst_28551);
var inst_28529 = inst_28552;
var inst_28530 = inst_28551;
var inst_28531 = inst_28553;
var inst_28532 = (0);
var state_28587__$1 = (function (){var statearr_28620 = state_28587;
(statearr_28620[(19)] = inst_28529);

(statearr_28620[(9)] = inst_28530);

(statearr_28620[(10)] = inst_28532);

(statearr_28620[(20)] = inst_28531);

return statearr_28620;
})();
var statearr_28621_29720 = state_28587__$1;
(statearr_28621_29720[(2)] = null);

(statearr_28621_29720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (41))){
var inst_28547 = (state_28587[(23)]);
var inst_28562 = (state_28587[(2)]);
var inst_28563 = cljs.core.next(inst_28547);
var inst_28529 = inst_28563;
var inst_28530 = null;
var inst_28531 = (0);
var inst_28532 = (0);
var state_28587__$1 = (function (){var statearr_28622 = state_28587;
(statearr_28622[(19)] = inst_28529);

(statearr_28622[(9)] = inst_28530);

(statearr_28622[(10)] = inst_28532);

(statearr_28622[(20)] = inst_28531);

(statearr_28622[(25)] = inst_28562);

return statearr_28622;
})();
var statearr_28623_29721 = state_28587__$1;
(statearr_28623_29721[(2)] = null);

(statearr_28623_29721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (43))){
var state_28587__$1 = state_28587;
var statearr_28624_29722 = state_28587__$1;
(statearr_28624_29722[(2)] = null);

(statearr_28624_29722[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (29))){
var inst_28571 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28625_29723 = state_28587__$1;
(statearr_28625_29723[(2)] = inst_28571);

(statearr_28625_29723[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (44))){
var inst_28580 = (state_28587[(2)]);
var state_28587__$1 = (function (){var statearr_28626 = state_28587;
(statearr_28626[(26)] = inst_28580);

return statearr_28626;
})();
var statearr_28627_29724 = state_28587__$1;
(statearr_28627_29724[(2)] = null);

(statearr_28627_29724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (6))){
var inst_28521 = (state_28587[(27)]);
var inst_28520 = cljs.core.deref(cs);
var inst_28521__$1 = cljs.core.keys(inst_28520);
var inst_28522 = cljs.core.count(inst_28521__$1);
var inst_28523 = cljs.core.reset_BANG_(dctr,inst_28522);
var inst_28528 = cljs.core.seq(inst_28521__$1);
var inst_28529 = inst_28528;
var inst_28530 = null;
var inst_28531 = (0);
var inst_28532 = (0);
var state_28587__$1 = (function (){var statearr_28628 = state_28587;
(statearr_28628[(27)] = inst_28521__$1);

(statearr_28628[(19)] = inst_28529);

(statearr_28628[(9)] = inst_28530);

(statearr_28628[(10)] = inst_28532);

(statearr_28628[(20)] = inst_28531);

(statearr_28628[(28)] = inst_28523);

return statearr_28628;
})();
var statearr_28629_29725 = state_28587__$1;
(statearr_28629_29725[(2)] = null);

(statearr_28629_29725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (28))){
var inst_28547 = (state_28587[(23)]);
var inst_28529 = (state_28587[(19)]);
var inst_28547__$1 = cljs.core.seq(inst_28529);
var state_28587__$1 = (function (){var statearr_28630 = state_28587;
(statearr_28630[(23)] = inst_28547__$1);

return statearr_28630;
})();
if(inst_28547__$1){
var statearr_28631_29726 = state_28587__$1;
(statearr_28631_29726[(1)] = (33));

} else {
var statearr_28632_29727 = state_28587__$1;
(statearr_28632_29727[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (25))){
var inst_28532 = (state_28587[(10)]);
var inst_28531 = (state_28587[(20)]);
var inst_28534 = (inst_28532 < inst_28531);
var inst_28535 = inst_28534;
var state_28587__$1 = state_28587;
if(cljs.core.truth_(inst_28535)){
var statearr_28633_29732 = state_28587__$1;
(statearr_28633_29732[(1)] = (27));

} else {
var statearr_28634_29733 = state_28587__$1;
(statearr_28634_29733[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (34))){
var state_28587__$1 = state_28587;
var statearr_28635_29734 = state_28587__$1;
(statearr_28635_29734[(2)] = null);

(statearr_28635_29734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (17))){
var state_28587__$1 = state_28587;
var statearr_28636_29735 = state_28587__$1;
(statearr_28636_29735[(2)] = null);

(statearr_28636_29735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (3))){
var inst_28585 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28587__$1,inst_28585);
} else {
if((state_val_28588 === (12))){
var inst_28516 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28637_29738 = state_28587__$1;
(statearr_28637_29738[(2)] = inst_28516);

(statearr_28637_29738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (2))){
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28587__$1,(4),ch);
} else {
if((state_val_28588 === (23))){
var state_28587__$1 = state_28587;
var statearr_28638_29739 = state_28587__$1;
(statearr_28638_29739[(2)] = null);

(statearr_28638_29739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (35))){
var inst_28569 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28639_29740 = state_28587__$1;
(statearr_28639_29740[(2)] = inst_28569);

(statearr_28639_29740[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (19))){
var inst_28488 = (state_28587[(7)]);
var inst_28492 = cljs.core.chunk_first(inst_28488);
var inst_28493 = cljs.core.chunk_rest(inst_28488);
var inst_28494 = cljs.core.count(inst_28492);
var inst_28466 = inst_28493;
var inst_28467 = inst_28492;
var inst_28468 = inst_28494;
var inst_28469 = (0);
var state_28587__$1 = (function (){var statearr_28640 = state_28587;
(statearr_28640[(14)] = inst_28467);

(statearr_28640[(15)] = inst_28469);

(statearr_28640[(16)] = inst_28468);

(statearr_28640[(17)] = inst_28466);

return statearr_28640;
})();
var statearr_28641_29743 = state_28587__$1;
(statearr_28641_29743[(2)] = null);

(statearr_28641_29743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (11))){
var inst_28488 = (state_28587[(7)]);
var inst_28466 = (state_28587[(17)]);
var inst_28488__$1 = cljs.core.seq(inst_28466);
var state_28587__$1 = (function (){var statearr_28642 = state_28587;
(statearr_28642[(7)] = inst_28488__$1);

return statearr_28642;
})();
if(inst_28488__$1){
var statearr_28643_29744 = state_28587__$1;
(statearr_28643_29744[(1)] = (16));

} else {
var statearr_28644_29745 = state_28587__$1;
(statearr_28644_29745[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (9))){
var inst_28518 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28645_29746 = state_28587__$1;
(statearr_28645_29746[(2)] = inst_28518);

(statearr_28645_29746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (5))){
var inst_28464 = cljs.core.deref(cs);
var inst_28465 = cljs.core.seq(inst_28464);
var inst_28466 = inst_28465;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28587__$1 = (function (){var statearr_28646 = state_28587;
(statearr_28646[(14)] = inst_28467);

(statearr_28646[(15)] = inst_28469);

(statearr_28646[(16)] = inst_28468);

(statearr_28646[(17)] = inst_28466);

return statearr_28646;
})();
var statearr_28647_29750 = state_28587__$1;
(statearr_28647_29750[(2)] = null);

(statearr_28647_29750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (14))){
var state_28587__$1 = state_28587;
var statearr_28648_29751 = state_28587__$1;
(statearr_28648_29751[(2)] = null);

(statearr_28648_29751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (45))){
var inst_28577 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28649_29756 = state_28587__$1;
(statearr_28649_29756[(2)] = inst_28577);

(statearr_28649_29756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (26))){
var inst_28521 = (state_28587[(27)]);
var inst_28573 = (state_28587[(2)]);
var inst_28574 = cljs.core.seq(inst_28521);
var state_28587__$1 = (function (){var statearr_28650 = state_28587;
(statearr_28650[(29)] = inst_28573);

return statearr_28650;
})();
if(inst_28574){
var statearr_28651_29757 = state_28587__$1;
(statearr_28651_29757[(1)] = (42));

} else {
var statearr_28652_29758 = state_28587__$1;
(statearr_28652_29758[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (16))){
var inst_28488 = (state_28587[(7)]);
var inst_28490 = cljs.core.chunked_seq_QMARK_(inst_28488);
var state_28587__$1 = state_28587;
if(inst_28490){
var statearr_28653_29759 = state_28587__$1;
(statearr_28653_29759[(1)] = (19));

} else {
var statearr_28654_29760 = state_28587__$1;
(statearr_28654_29760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (38))){
var inst_28566 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28655_29767 = state_28587__$1;
(statearr_28655_29767[(2)] = inst_28566);

(statearr_28655_29767[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (30))){
var state_28587__$1 = state_28587;
var statearr_28656_29768 = state_28587__$1;
(statearr_28656_29768[(2)] = null);

(statearr_28656_29768[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (10))){
var inst_28467 = (state_28587[(14)]);
var inst_28469 = (state_28587[(15)]);
var inst_28477 = cljs.core._nth(inst_28467,inst_28469);
var inst_28478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28477,(0),null);
var inst_28479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28477,(1),null);
var state_28587__$1 = (function (){var statearr_28657 = state_28587;
(statearr_28657[(24)] = inst_28478);

return statearr_28657;
})();
if(cljs.core.truth_(inst_28479)){
var statearr_28658_29769 = state_28587__$1;
(statearr_28658_29769[(1)] = (13));

} else {
var statearr_28659_29770 = state_28587__$1;
(statearr_28659_29770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (18))){
var inst_28514 = (state_28587[(2)]);
var state_28587__$1 = state_28587;
var statearr_28660_29771 = state_28587__$1;
(statearr_28660_29771[(2)] = inst_28514);

(statearr_28660_29771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (42))){
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28587__$1,(45),dchan);
} else {
if((state_val_28588 === (37))){
var inst_28547 = (state_28587[(23)]);
var inst_28457 = (state_28587[(11)]);
var inst_28556 = (state_28587[(22)]);
var inst_28556__$1 = cljs.core.first(inst_28547);
var inst_28557 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28556__$1,inst_28457,done);
var state_28587__$1 = (function (){var statearr_28661 = state_28587;
(statearr_28661[(22)] = inst_28556__$1);

return statearr_28661;
})();
if(cljs.core.truth_(inst_28557)){
var statearr_28662_29772 = state_28587__$1;
(statearr_28662_29772[(1)] = (39));

} else {
var statearr_28663_29773 = state_28587__$1;
(statearr_28663_29773[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28588 === (8))){
var inst_28469 = (state_28587[(15)]);
var inst_28468 = (state_28587[(16)]);
var inst_28471 = (inst_28469 < inst_28468);
var inst_28472 = inst_28471;
var state_28587__$1 = state_28587;
if(cljs.core.truth_(inst_28472)){
var statearr_28664_29774 = state_28587__$1;
(statearr_28664_29774[(1)] = (10));

} else {
var statearr_28665_29775 = state_28587__$1;
(statearr_28665_29775[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27846__auto__ = null;
var cljs$core$async$mult_$_state_machine__27846__auto____0 = (function (){
var statearr_28666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28666[(0)] = cljs$core$async$mult_$_state_machine__27846__auto__);

(statearr_28666[(1)] = (1));

return statearr_28666;
});
var cljs$core$async$mult_$_state_machine__27846__auto____1 = (function (state_28587){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28587);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28667){var ex__27849__auto__ = e28667;
var statearr_28668_29776 = state_28587;
(statearr_28668_29776[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28587[(4)]))){
var statearr_28669_29777 = state_28587;
(statearr_28669_29777[(1)] = cljs.core.first((state_28587[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29778 = state_28587;
state_28587 = G__29778;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27846__auto__ = function(state_28587){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27846__auto____1.call(this,state_28587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27846__auto____0;
cljs$core$async$mult_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27846__auto____1;
return cljs$core$async$mult_$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28670 = f__27907__auto__();
(statearr_28670[(6)] = c__27906__auto___29692);

return statearr_28670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28672 = arguments.length;
switch (G__28672) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_29786 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_29786(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29787 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_29787(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29788 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29788(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29789 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_29789(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29790 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29790(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29791 = arguments.length;
var i__5767__auto___29792 = (0);
while(true){
if((i__5767__auto___29792 < len__5766__auto___29791)){
args__5772__auto__.push((arguments[i__5767__auto___29792]));

var G__29793 = (i__5767__auto___29792 + (1));
i__5767__auto___29792 = G__29793;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28677){
var map__28678 = p__28677;
var map__28678__$1 = cljs.core.__destructure_map(map__28678);
var opts = map__28678__$1;
var statearr_28679_29800 = state;
(statearr_28679_29800[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28680_29801 = state;
(statearr_28680_29801[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_28681_29802 = state;
(statearr_28681_29802[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28673){
var G__28674 = cljs.core.first(seq28673);
var seq28673__$1 = cljs.core.next(seq28673);
var G__28675 = cljs.core.first(seq28673__$1);
var seq28673__$2 = cljs.core.next(seq28673__$1);
var G__28676 = cljs.core.first(seq28673__$2);
var seq28673__$3 = cljs.core.next(seq28673__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28674,G__28675,G__28676,seq28673__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28682 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28683){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28683 = meta28683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28684,meta28683__$1){
var self__ = this;
var _28684__$1 = this;
return (new cljs.core.async.t_cljs$core$async28682(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28683__$1));
}));

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28684){
var self__ = this;
var _28684__$1 = this;
return self__.meta28683;
}));

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28682.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28683","meta28683",1161572793,null)], null);
}));

(cljs.core.async.t_cljs$core$async28682.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28682");

(cljs.core.async.t_cljs$core$async28682.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28682");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28682.
 */
cljs.core.async.__GT_t_cljs$core$async28682 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28682(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28683){
return (new cljs.core.async.t_cljs$core$async28682(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28683));
});

}

return (new cljs.core.async.t_cljs$core$async28682(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27906__auto___29803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28752){
var state_val_28753 = (state_28752[(1)]);
if((state_val_28753 === (7))){
var inst_28712 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
if(cljs.core.truth_(inst_28712)){
var statearr_28754_29805 = state_28752__$1;
(statearr_28754_29805[(1)] = (8));

} else {
var statearr_28755_29811 = state_28752__$1;
(statearr_28755_29811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (20))){
var inst_28705 = (state_28752[(7)]);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28752__$1,(23),out,inst_28705);
} else {
if((state_val_28753 === (1))){
var inst_28688 = calc_state();
var inst_28689 = cljs.core.__destructure_map(inst_28688);
var inst_28690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28693 = inst_28688;
var state_28752__$1 = (function (){var statearr_28756 = state_28752;
(statearr_28756[(8)] = inst_28690);

(statearr_28756[(9)] = inst_28691);

(statearr_28756[(10)] = inst_28692);

(statearr_28756[(11)] = inst_28693);

return statearr_28756;
})();
var statearr_28757_29812 = state_28752__$1;
(statearr_28757_29812[(2)] = null);

(statearr_28757_29812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (24))){
var inst_28696 = (state_28752[(12)]);
var inst_28693 = inst_28696;
var state_28752__$1 = (function (){var statearr_28758 = state_28752;
(statearr_28758[(11)] = inst_28693);

return statearr_28758;
})();
var statearr_28759_29813 = state_28752__$1;
(statearr_28759_29813[(2)] = null);

(statearr_28759_29813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (4))){
var inst_28707 = (state_28752[(13)]);
var inst_28705 = (state_28752[(7)]);
var inst_28704 = (state_28752[(2)]);
var inst_28705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28704,(0),null);
var inst_28706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28704,(1),null);
var inst_28707__$1 = (inst_28705__$1 == null);
var state_28752__$1 = (function (){var statearr_28760 = state_28752;
(statearr_28760[(13)] = inst_28707__$1);

(statearr_28760[(14)] = inst_28706);

(statearr_28760[(7)] = inst_28705__$1);

return statearr_28760;
})();
if(cljs.core.truth_(inst_28707__$1)){
var statearr_28761_29814 = state_28752__$1;
(statearr_28761_29814[(1)] = (5));

} else {
var statearr_28762_29815 = state_28752__$1;
(statearr_28762_29815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (15))){
var inst_28726 = (state_28752[(15)]);
var inst_28697 = (state_28752[(16)]);
var inst_28726__$1 = cljs.core.empty_QMARK_(inst_28697);
var state_28752__$1 = (function (){var statearr_28763 = state_28752;
(statearr_28763[(15)] = inst_28726__$1);

return statearr_28763;
})();
if(inst_28726__$1){
var statearr_28764_29816 = state_28752__$1;
(statearr_28764_29816[(1)] = (17));

} else {
var statearr_28765_29817 = state_28752__$1;
(statearr_28765_29817[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (21))){
var inst_28696 = (state_28752[(12)]);
var inst_28693 = inst_28696;
var state_28752__$1 = (function (){var statearr_28766 = state_28752;
(statearr_28766[(11)] = inst_28693);

return statearr_28766;
})();
var statearr_28767_29818 = state_28752__$1;
(statearr_28767_29818[(2)] = null);

(statearr_28767_29818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (13))){
var inst_28719 = (state_28752[(2)]);
var inst_28720 = calc_state();
var inst_28693 = inst_28720;
var state_28752__$1 = (function (){var statearr_28768 = state_28752;
(statearr_28768[(17)] = inst_28719);

(statearr_28768[(11)] = inst_28693);

return statearr_28768;
})();
var statearr_28769_29819 = state_28752__$1;
(statearr_28769_29819[(2)] = null);

(statearr_28769_29819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (22))){
var inst_28746 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28770_29820 = state_28752__$1;
(statearr_28770_29820[(2)] = inst_28746);

(statearr_28770_29820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (6))){
var inst_28706 = (state_28752[(14)]);
var inst_28710 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28706,change);
var state_28752__$1 = state_28752;
var statearr_28771_29821 = state_28752__$1;
(statearr_28771_29821[(2)] = inst_28710);

(statearr_28771_29821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (25))){
var state_28752__$1 = state_28752;
var statearr_28772_29822 = state_28752__$1;
(statearr_28772_29822[(2)] = null);

(statearr_28772_29822[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (17))){
var inst_28706 = (state_28752[(14)]);
var inst_28698 = (state_28752[(18)]);
var inst_28728 = (inst_28698.cljs$core$IFn$_invoke$arity$1 ? inst_28698.cljs$core$IFn$_invoke$arity$1(inst_28706) : inst_28698.call(null,inst_28706));
var inst_28729 = cljs.core.not(inst_28728);
var state_28752__$1 = state_28752;
var statearr_28773_29823 = state_28752__$1;
(statearr_28773_29823[(2)] = inst_28729);

(statearr_28773_29823[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (3))){
var inst_28750 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28752__$1,inst_28750);
} else {
if((state_val_28753 === (12))){
var state_28752__$1 = state_28752;
var statearr_28774_29824 = state_28752__$1;
(statearr_28774_29824[(2)] = null);

(statearr_28774_29824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (2))){
var inst_28696 = (state_28752[(12)]);
var inst_28693 = (state_28752[(11)]);
var inst_28696__$1 = cljs.core.__destructure_map(inst_28693);
var inst_28697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28696__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28696__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28696__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28752__$1 = (function (){var statearr_28775 = state_28752;
(statearr_28775[(18)] = inst_28698);

(statearr_28775[(12)] = inst_28696__$1);

(statearr_28775[(16)] = inst_28697);

return statearr_28775;
})();
return cljs.core.async.ioc_alts_BANG_(state_28752__$1,(4),inst_28699);
} else {
if((state_val_28753 === (23))){
var inst_28737 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
if(cljs.core.truth_(inst_28737)){
var statearr_28776_29825 = state_28752__$1;
(statearr_28776_29825[(1)] = (24));

} else {
var statearr_28777_29826 = state_28752__$1;
(statearr_28777_29826[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (19))){
var inst_28732 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28778_29827 = state_28752__$1;
(statearr_28778_29827[(2)] = inst_28732);

(statearr_28778_29827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (11))){
var inst_28706 = (state_28752[(14)]);
var inst_28716 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28706);
var state_28752__$1 = state_28752;
var statearr_28779_29828 = state_28752__$1;
(statearr_28779_29828[(2)] = inst_28716);

(statearr_28779_29828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (9))){
var inst_28723 = (state_28752[(19)]);
var inst_28706 = (state_28752[(14)]);
var inst_28697 = (state_28752[(16)]);
var inst_28723__$1 = (inst_28697.cljs$core$IFn$_invoke$arity$1 ? inst_28697.cljs$core$IFn$_invoke$arity$1(inst_28706) : inst_28697.call(null,inst_28706));
var state_28752__$1 = (function (){var statearr_28780 = state_28752;
(statearr_28780[(19)] = inst_28723__$1);

return statearr_28780;
})();
if(cljs.core.truth_(inst_28723__$1)){
var statearr_28781_29829 = state_28752__$1;
(statearr_28781_29829[(1)] = (14));

} else {
var statearr_28782_29830 = state_28752__$1;
(statearr_28782_29830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (5))){
var inst_28707 = (state_28752[(13)]);
var state_28752__$1 = state_28752;
var statearr_28783_29831 = state_28752__$1;
(statearr_28783_29831[(2)] = inst_28707);

(statearr_28783_29831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (14))){
var inst_28723 = (state_28752[(19)]);
var state_28752__$1 = state_28752;
var statearr_28784_29832 = state_28752__$1;
(statearr_28784_29832[(2)] = inst_28723);

(statearr_28784_29832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (26))){
var inst_28742 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28785_29833 = state_28752__$1;
(statearr_28785_29833[(2)] = inst_28742);

(statearr_28785_29833[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (16))){
var inst_28734 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
if(cljs.core.truth_(inst_28734)){
var statearr_28786_29834 = state_28752__$1;
(statearr_28786_29834[(1)] = (20));

} else {
var statearr_28787_29835 = state_28752__$1;
(statearr_28787_29835[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (10))){
var inst_28748 = (state_28752[(2)]);
var state_28752__$1 = state_28752;
var statearr_28788_29836 = state_28752__$1;
(statearr_28788_29836[(2)] = inst_28748);

(statearr_28788_29836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (18))){
var inst_28726 = (state_28752[(15)]);
var state_28752__$1 = state_28752;
var statearr_28789_29837 = state_28752__$1;
(statearr_28789_29837[(2)] = inst_28726);

(statearr_28789_29837[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28753 === (8))){
var inst_28705 = (state_28752[(7)]);
var inst_28714 = (inst_28705 == null);
var state_28752__$1 = state_28752;
if(cljs.core.truth_(inst_28714)){
var statearr_28790_29838 = state_28752__$1;
(statearr_28790_29838[(1)] = (11));

} else {
var statearr_28791_29839 = state_28752__$1;
(statearr_28791_29839[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27846__auto__ = null;
var cljs$core$async$mix_$_state_machine__27846__auto____0 = (function (){
var statearr_28792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28792[(0)] = cljs$core$async$mix_$_state_machine__27846__auto__);

(statearr_28792[(1)] = (1));

return statearr_28792;
});
var cljs$core$async$mix_$_state_machine__27846__auto____1 = (function (state_28752){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28752);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28793){var ex__27849__auto__ = e28793;
var statearr_28794_29840 = state_28752;
(statearr_28794_29840[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28752[(4)]))){
var statearr_28795_29841 = state_28752;
(statearr_28795_29841[(1)] = cljs.core.first((state_28752[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29843 = state_28752;
state_28752 = G__29843;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27846__auto__ = function(state_28752){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27846__auto____1.call(this,state_28752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27846__auto____0;
cljs$core$async$mix_$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27846__auto____1;
return cljs$core$async$mix_$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28796 = f__27907__auto__();
(statearr_28796[(6)] = c__27906__auto___29803);

return statearr_28796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_29848 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29848(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29849 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29849(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29850 = (function() {
var G__29851 = null;
var G__29851__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__29851__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__29851 = function(p,v){
switch(arguments.length){
case 1:
return G__29851__1.call(this,p);
case 2:
return G__29851__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29851.cljs$core$IFn$_invoke$arity$1 = G__29851__1;
G__29851.cljs$core$IFn$_invoke$arity$2 = G__29851__2;
return G__29851;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28798 = arguments.length;
switch (G__28798) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29850(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29850(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28801 = arguments.length;
switch (G__28801) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__28799_SHARP_){
if(cljs.core.truth_((p1__28799_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28799_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28799_SHARP_.call(null,topic)))){
return p1__28799_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28799_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28803 = meta28803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28804,meta28803__$1){
var self__ = this;
var _28804__$1 = this;
return (new cljs.core.async.t_cljs$core$async28802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28803__$1));
}));

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28804){
var self__ = this;
var _28804__$1 = this;
return self__.meta28803;
}));

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28803","meta28803",-987287015,null)], null);
}));

(cljs.core.async.t_cljs$core$async28802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28802");

(cljs.core.async.t_cljs$core$async28802.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28802.
 */
cljs.core.async.__GT_t_cljs$core$async28802 = (function cljs$core$async$__GT_t_cljs$core$async28802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28803){
return (new cljs.core.async.t_cljs$core$async28802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28803));
});

}

return (new cljs.core.async.t_cljs$core$async28802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27906__auto___29858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28876){
var state_val_28877 = (state_28876[(1)]);
if((state_val_28877 === (7))){
var inst_28872 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28878_29859 = state_28876__$1;
(statearr_28878_29859[(2)] = inst_28872);

(statearr_28878_29859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (20))){
var state_28876__$1 = state_28876;
var statearr_28879_29860 = state_28876__$1;
(statearr_28879_29860[(2)] = null);

(statearr_28879_29860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (1))){
var state_28876__$1 = state_28876;
var statearr_28880_29861 = state_28876__$1;
(statearr_28880_29861[(2)] = null);

(statearr_28880_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (24))){
var inst_28855 = (state_28876[(7)]);
var inst_28864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28855);
var state_28876__$1 = state_28876;
var statearr_28881_29862 = state_28876__$1;
(statearr_28881_29862[(2)] = inst_28864);

(statearr_28881_29862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (4))){
var inst_28807 = (state_28876[(8)]);
var inst_28807__$1 = (state_28876[(2)]);
var inst_28808 = (inst_28807__$1 == null);
var state_28876__$1 = (function (){var statearr_28882 = state_28876;
(statearr_28882[(8)] = inst_28807__$1);

return statearr_28882;
})();
if(cljs.core.truth_(inst_28808)){
var statearr_28883_29863 = state_28876__$1;
(statearr_28883_29863[(1)] = (5));

} else {
var statearr_28884_29864 = state_28876__$1;
(statearr_28884_29864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (15))){
var inst_28849 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28885_29865 = state_28876__$1;
(statearr_28885_29865[(2)] = inst_28849);

(statearr_28885_29865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (21))){
var inst_28869 = (state_28876[(2)]);
var state_28876__$1 = (function (){var statearr_28886 = state_28876;
(statearr_28886[(9)] = inst_28869);

return statearr_28886;
})();
var statearr_28887_29866 = state_28876__$1;
(statearr_28887_29866[(2)] = null);

(statearr_28887_29866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (13))){
var inst_28831 = (state_28876[(10)]);
var inst_28833 = cljs.core.chunked_seq_QMARK_(inst_28831);
var state_28876__$1 = state_28876;
if(inst_28833){
var statearr_28888_29867 = state_28876__$1;
(statearr_28888_29867[(1)] = (16));

} else {
var statearr_28889_29868 = state_28876__$1;
(statearr_28889_29868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (22))){
var inst_28861 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
if(cljs.core.truth_(inst_28861)){
var statearr_28890_29869 = state_28876__$1;
(statearr_28890_29869[(1)] = (23));

} else {
var statearr_28891_29870 = state_28876__$1;
(statearr_28891_29870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (6))){
var inst_28857 = (state_28876[(11)]);
var inst_28807 = (state_28876[(8)]);
var inst_28855 = (state_28876[(7)]);
var inst_28855__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28807) : topic_fn.call(null,inst_28807));
var inst_28856 = cljs.core.deref(mults);
var inst_28857__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28856,inst_28855__$1);
var state_28876__$1 = (function (){var statearr_28892 = state_28876;
(statearr_28892[(11)] = inst_28857__$1);

(statearr_28892[(7)] = inst_28855__$1);

return statearr_28892;
})();
if(cljs.core.truth_(inst_28857__$1)){
var statearr_28893_29872 = state_28876__$1;
(statearr_28893_29872[(1)] = (19));

} else {
var statearr_28894_29874 = state_28876__$1;
(statearr_28894_29874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (25))){
var inst_28866 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28895_29875 = state_28876__$1;
(statearr_28895_29875[(2)] = inst_28866);

(statearr_28895_29875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (17))){
var inst_28831 = (state_28876[(10)]);
var inst_28840 = cljs.core.first(inst_28831);
var inst_28841 = cljs.core.async.muxch_STAR_(inst_28840);
var inst_28842 = cljs.core.async.close_BANG_(inst_28841);
var inst_28843 = cljs.core.next(inst_28831);
var inst_28817 = inst_28843;
var inst_28818 = null;
var inst_28819 = (0);
var inst_28820 = (0);
var state_28876__$1 = (function (){var statearr_28896 = state_28876;
(statearr_28896[(12)] = inst_28842);

(statearr_28896[(13)] = inst_28818);

(statearr_28896[(14)] = inst_28817);

(statearr_28896[(15)] = inst_28820);

(statearr_28896[(16)] = inst_28819);

return statearr_28896;
})();
var statearr_28897_29876 = state_28876__$1;
(statearr_28897_29876[(2)] = null);

(statearr_28897_29876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (3))){
var inst_28874 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28876__$1,inst_28874);
} else {
if((state_val_28877 === (12))){
var inst_28851 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28898_29877 = state_28876__$1;
(statearr_28898_29877[(2)] = inst_28851);

(statearr_28898_29877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (2))){
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28876__$1,(4),ch);
} else {
if((state_val_28877 === (23))){
var state_28876__$1 = state_28876;
var statearr_28899_29878 = state_28876__$1;
(statearr_28899_29878[(2)] = null);

(statearr_28899_29878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (19))){
var inst_28857 = (state_28876[(11)]);
var inst_28807 = (state_28876[(8)]);
var inst_28859 = cljs.core.async.muxch_STAR_(inst_28857);
var state_28876__$1 = state_28876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28876__$1,(22),inst_28859,inst_28807);
} else {
if((state_val_28877 === (11))){
var inst_28831 = (state_28876[(10)]);
var inst_28817 = (state_28876[(14)]);
var inst_28831__$1 = cljs.core.seq(inst_28817);
var state_28876__$1 = (function (){var statearr_28900 = state_28876;
(statearr_28900[(10)] = inst_28831__$1);

return statearr_28900;
})();
if(inst_28831__$1){
var statearr_28901_29879 = state_28876__$1;
(statearr_28901_29879[(1)] = (13));

} else {
var statearr_28902_29880 = state_28876__$1;
(statearr_28902_29880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (9))){
var inst_28853 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28903_29881 = state_28876__$1;
(statearr_28903_29881[(2)] = inst_28853);

(statearr_28903_29881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (5))){
var inst_28814 = cljs.core.deref(mults);
var inst_28815 = cljs.core.vals(inst_28814);
var inst_28816 = cljs.core.seq(inst_28815);
var inst_28817 = inst_28816;
var inst_28818 = null;
var inst_28819 = (0);
var inst_28820 = (0);
var state_28876__$1 = (function (){var statearr_28904 = state_28876;
(statearr_28904[(13)] = inst_28818);

(statearr_28904[(14)] = inst_28817);

(statearr_28904[(15)] = inst_28820);

(statearr_28904[(16)] = inst_28819);

return statearr_28904;
})();
var statearr_28905_29882 = state_28876__$1;
(statearr_28905_29882[(2)] = null);

(statearr_28905_29882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (14))){
var state_28876__$1 = state_28876;
var statearr_28909_29883 = state_28876__$1;
(statearr_28909_29883[(2)] = null);

(statearr_28909_29883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (16))){
var inst_28831 = (state_28876[(10)]);
var inst_28835 = cljs.core.chunk_first(inst_28831);
var inst_28836 = cljs.core.chunk_rest(inst_28831);
var inst_28837 = cljs.core.count(inst_28835);
var inst_28817 = inst_28836;
var inst_28818 = inst_28835;
var inst_28819 = inst_28837;
var inst_28820 = (0);
var state_28876__$1 = (function (){var statearr_28910 = state_28876;
(statearr_28910[(13)] = inst_28818);

(statearr_28910[(14)] = inst_28817);

(statearr_28910[(15)] = inst_28820);

(statearr_28910[(16)] = inst_28819);

return statearr_28910;
})();
var statearr_28911_29884 = state_28876__$1;
(statearr_28911_29884[(2)] = null);

(statearr_28911_29884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (10))){
var inst_28818 = (state_28876[(13)]);
var inst_28817 = (state_28876[(14)]);
var inst_28820 = (state_28876[(15)]);
var inst_28819 = (state_28876[(16)]);
var inst_28825 = cljs.core._nth(inst_28818,inst_28820);
var inst_28826 = cljs.core.async.muxch_STAR_(inst_28825);
var inst_28827 = cljs.core.async.close_BANG_(inst_28826);
var inst_28828 = (inst_28820 + (1));
var tmp28906 = inst_28818;
var tmp28907 = inst_28817;
var tmp28908 = inst_28819;
var inst_28817__$1 = tmp28907;
var inst_28818__$1 = tmp28906;
var inst_28819__$1 = tmp28908;
var inst_28820__$1 = inst_28828;
var state_28876__$1 = (function (){var statearr_28912 = state_28876;
(statearr_28912[(13)] = inst_28818__$1);

(statearr_28912[(14)] = inst_28817__$1);

(statearr_28912[(17)] = inst_28827);

(statearr_28912[(15)] = inst_28820__$1);

(statearr_28912[(16)] = inst_28819__$1);

return statearr_28912;
})();
var statearr_28913_29885 = state_28876__$1;
(statearr_28913_29885[(2)] = null);

(statearr_28913_29885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (18))){
var inst_28846 = (state_28876[(2)]);
var state_28876__$1 = state_28876;
var statearr_28914_29887 = state_28876__$1;
(statearr_28914_29887[(2)] = inst_28846);

(statearr_28914_29887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28877 === (8))){
var inst_28820 = (state_28876[(15)]);
var inst_28819 = (state_28876[(16)]);
var inst_28822 = (inst_28820 < inst_28819);
var inst_28823 = inst_28822;
var state_28876__$1 = state_28876;
if(cljs.core.truth_(inst_28823)){
var statearr_28915_29888 = state_28876__$1;
(statearr_28915_29888[(1)] = (10));

} else {
var statearr_28916_29889 = state_28876__$1;
(statearr_28916_29889[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28917[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28917[(1)] = (1));

return statearr_28917;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28876){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28876);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e28918){var ex__27849__auto__ = e28918;
var statearr_28919_29890 = state_28876;
(statearr_28919_29890[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28876[(4)]))){
var statearr_28920_29895 = state_28876;
(statearr_28920_29895[(1)] = cljs.core.first((state_28876[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29896 = state_28876;
state_28876 = G__29896;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_28921 = f__27907__auto__();
(statearr_28921[(6)] = c__27906__auto___29858);

return statearr_28921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28923 = arguments.length;
switch (G__28923) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28925 = arguments.length;
switch (G__28925) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28927 = arguments.length;
switch (G__28927) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__27906__auto___29904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_28970){
var state_val_28971 = (state_28970[(1)]);
if((state_val_28971 === (7))){
var state_28970__$1 = state_28970;
var statearr_28972_29908 = state_28970__$1;
(statearr_28972_29908[(2)] = null);

(statearr_28972_29908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (1))){
var state_28970__$1 = state_28970;
var statearr_28973_29909 = state_28970__$1;
(statearr_28973_29909[(2)] = null);

(statearr_28973_29909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (4))){
var inst_28931 = (state_28970[(7)]);
var inst_28930 = (state_28970[(8)]);
var inst_28933 = (inst_28931 < inst_28930);
var state_28970__$1 = state_28970;
if(cljs.core.truth_(inst_28933)){
var statearr_28974_29910 = state_28970__$1;
(statearr_28974_29910[(1)] = (6));

} else {
var statearr_28975_29911 = state_28970__$1;
(statearr_28975_29911[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (15))){
var inst_28956 = (state_28970[(9)]);
var inst_28961 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28956);
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28970__$1,(17),out,inst_28961);
} else {
if((state_val_28971 === (13))){
var inst_28956 = (state_28970[(9)]);
var inst_28956__$1 = (state_28970[(2)]);
var inst_28957 = cljs.core.some(cljs.core.nil_QMARK_,inst_28956__$1);
var state_28970__$1 = (function (){var statearr_28976 = state_28970;
(statearr_28976[(9)] = inst_28956__$1);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28957)){
var statearr_28977_29915 = state_28970__$1;
(statearr_28977_29915[(1)] = (14));

} else {
var statearr_28978_29916 = state_28970__$1;
(statearr_28978_29916[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (6))){
var state_28970__$1 = state_28970;
var statearr_28979_29917 = state_28970__$1;
(statearr_28979_29917[(2)] = null);

(statearr_28979_29917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (17))){
var inst_28963 = (state_28970[(2)]);
var state_28970__$1 = (function (){var statearr_28981 = state_28970;
(statearr_28981[(10)] = inst_28963);

return statearr_28981;
})();
var statearr_28982_29921 = state_28970__$1;
(statearr_28982_29921[(2)] = null);

(statearr_28982_29921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (3))){
var inst_28968 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28970__$1,inst_28968);
} else {
if((state_val_28971 === (12))){
var _ = (function (){var statearr_28983 = state_28970;
(statearr_28983[(4)] = cljs.core.rest((state_28970[(4)])));

return statearr_28983;
})();
var state_28970__$1 = state_28970;
var ex28980 = (state_28970__$1[(2)]);
var statearr_28984_29922 = state_28970__$1;
(statearr_28984_29922[(5)] = ex28980);


if((ex28980 instanceof Object)){
var statearr_28985_29923 = state_28970__$1;
(statearr_28985_29923[(1)] = (11));

(statearr_28985_29923[(5)] = null);

} else {
throw ex28980;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (2))){
var inst_28929 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28930 = cnt;
var inst_28931 = (0);
var state_28970__$1 = (function (){var statearr_28986 = state_28970;
(statearr_28986[(7)] = inst_28931);

(statearr_28986[(11)] = inst_28929);

(statearr_28986[(8)] = inst_28930);

return statearr_28986;
})();
var statearr_28987_29927 = state_28970__$1;
(statearr_28987_29927[(2)] = null);

(statearr_28987_29927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (11))){
var inst_28935 = (state_28970[(2)]);
var inst_28936 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28970__$1 = (function (){var statearr_28988 = state_28970;
(statearr_28988[(12)] = inst_28935);

return statearr_28988;
})();
var statearr_28989_29932 = state_28970__$1;
(statearr_28989_29932[(2)] = inst_28936);

(statearr_28989_29932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (9))){
var inst_28931 = (state_28970[(7)]);
var _ = (function (){var statearr_28990 = state_28970;
(statearr_28990[(4)] = cljs.core.cons((12),(state_28970[(4)])));

return statearr_28990;
})();
var inst_28942 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28931) : chs__$1.call(null,inst_28931));
var inst_28943 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28931) : done.call(null,inst_28931));
var inst_28944 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28942,inst_28943);
var ___$1 = (function (){var statearr_28991 = state_28970;
(statearr_28991[(4)] = cljs.core.rest((state_28970[(4)])));

return statearr_28991;
})();
var state_28970__$1 = state_28970;
var statearr_28992_29933 = state_28970__$1;
(statearr_28992_29933[(2)] = inst_28944);

(statearr_28992_29933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (5))){
var inst_28954 = (state_28970[(2)]);
var state_28970__$1 = (function (){var statearr_28993 = state_28970;
(statearr_28993[(13)] = inst_28954);

return statearr_28993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28970__$1,(13),dchan);
} else {
if((state_val_28971 === (14))){
var inst_28959 = cljs.core.async.close_BANG_(out);
var state_28970__$1 = state_28970;
var statearr_28994_29934 = state_28970__$1;
(statearr_28994_29934[(2)] = inst_28959);

(statearr_28994_29934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (16))){
var inst_28966 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_28995_29935 = state_28970__$1;
(statearr_28995_29935[(2)] = inst_28966);

(statearr_28995_29935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (10))){
var inst_28931 = (state_28970[(7)]);
var inst_28947 = (state_28970[(2)]);
var inst_28948 = (inst_28931 + (1));
var inst_28931__$1 = inst_28948;
var state_28970__$1 = (function (){var statearr_28996 = state_28970;
(statearr_28996[(7)] = inst_28931__$1);

(statearr_28996[(14)] = inst_28947);

return statearr_28996;
})();
var statearr_28997_29936 = state_28970__$1;
(statearr_28997_29936[(2)] = null);

(statearr_28997_29936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (8))){
var inst_28952 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_28998_29937 = state_28970__$1;
(statearr_28998_29937[(2)] = inst_28952);

(statearr_28998_29937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_28999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28999[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_28999[(1)] = (1));

return statearr_28999;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_28970){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_28970);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29000){var ex__27849__auto__ = e29000;
var statearr_29001_29939 = state_28970;
(statearr_29001_29939[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_28970[(4)]))){
var statearr_29002_29941 = state_28970;
(statearr_29002_29941[(1)] = cljs.core.first((state_28970[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29942 = state_28970;
state_28970 = G__29942;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_28970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_28970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29003 = f__27907__auto__();
(statearr_29003[(6)] = c__27906__auto___29904);

return statearr_29003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29006 = arguments.length;
switch (G__29006) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27906__auto___29944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_29038){
var state_val_29039 = (state_29038[(1)]);
if((state_val_29039 === (7))){
var inst_29018 = (state_29038[(7)]);
var inst_29017 = (state_29038[(8)]);
var inst_29017__$1 = (state_29038[(2)]);
var inst_29018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29017__$1,(0),null);
var inst_29019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29017__$1,(1),null);
var inst_29020 = (inst_29018__$1 == null);
var state_29038__$1 = (function (){var statearr_29040 = state_29038;
(statearr_29040[(7)] = inst_29018__$1);

(statearr_29040[(9)] = inst_29019);

(statearr_29040[(8)] = inst_29017__$1);

return statearr_29040;
})();
if(cljs.core.truth_(inst_29020)){
var statearr_29041_29945 = state_29038__$1;
(statearr_29041_29945[(1)] = (8));

} else {
var statearr_29042_29946 = state_29038__$1;
(statearr_29042_29946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (1))){
var inst_29007 = cljs.core.vec(chs);
var inst_29008 = inst_29007;
var state_29038__$1 = (function (){var statearr_29043 = state_29038;
(statearr_29043[(10)] = inst_29008);

return statearr_29043;
})();
var statearr_29044_29947 = state_29038__$1;
(statearr_29044_29947[(2)] = null);

(statearr_29044_29947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (4))){
var inst_29008 = (state_29038[(10)]);
var state_29038__$1 = state_29038;
return cljs.core.async.ioc_alts_BANG_(state_29038__$1,(7),inst_29008);
} else {
if((state_val_29039 === (6))){
var inst_29034 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29045_29948 = state_29038__$1;
(statearr_29045_29948[(2)] = inst_29034);

(statearr_29045_29948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (3))){
var inst_29036 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29038__$1,inst_29036);
} else {
if((state_val_29039 === (2))){
var inst_29008 = (state_29038[(10)]);
var inst_29010 = cljs.core.count(inst_29008);
var inst_29011 = (inst_29010 > (0));
var state_29038__$1 = state_29038;
if(cljs.core.truth_(inst_29011)){
var statearr_29047_29949 = state_29038__$1;
(statearr_29047_29949[(1)] = (4));

} else {
var statearr_29048_29950 = state_29038__$1;
(statearr_29048_29950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (11))){
var inst_29008 = (state_29038[(10)]);
var inst_29027 = (state_29038[(2)]);
var tmp29046 = inst_29008;
var inst_29008__$1 = tmp29046;
var state_29038__$1 = (function (){var statearr_29049 = state_29038;
(statearr_29049[(10)] = inst_29008__$1);

(statearr_29049[(11)] = inst_29027);

return statearr_29049;
})();
var statearr_29050_29951 = state_29038__$1;
(statearr_29050_29951[(2)] = null);

(statearr_29050_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (9))){
var inst_29018 = (state_29038[(7)]);
var state_29038__$1 = state_29038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29038__$1,(11),out,inst_29018);
} else {
if((state_val_29039 === (5))){
var inst_29032 = cljs.core.async.close_BANG_(out);
var state_29038__$1 = state_29038;
var statearr_29051_29952 = state_29038__$1;
(statearr_29051_29952[(2)] = inst_29032);

(statearr_29051_29952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (10))){
var inst_29030 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29052_29953 = state_29038__$1;
(statearr_29052_29953[(2)] = inst_29030);

(statearr_29052_29953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (8))){
var inst_29018 = (state_29038[(7)]);
var inst_29008 = (state_29038[(10)]);
var inst_29019 = (state_29038[(9)]);
var inst_29017 = (state_29038[(8)]);
var inst_29022 = (function (){var cs = inst_29008;
var vec__29013 = inst_29017;
var v = inst_29018;
var c = inst_29019;
return (function (p1__29004_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29004_SHARP_);
});
})();
var inst_29023 = cljs.core.filterv(inst_29022,inst_29008);
var inst_29008__$1 = inst_29023;
var state_29038__$1 = (function (){var statearr_29053 = state_29038;
(statearr_29053[(10)] = inst_29008__$1);

return statearr_29053;
})();
var statearr_29054_29954 = state_29038__$1;
(statearr_29054_29954[(2)] = null);

(statearr_29054_29954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29055 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29055[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29055[(1)] = (1));

return statearr_29055;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29038){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29038);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29056){var ex__27849__auto__ = e29056;
var statearr_29057_29955 = state_29038;
(statearr_29057_29955[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29038[(4)]))){
var statearr_29058_29956 = state_29038;
(statearr_29058_29956[(1)] = cljs.core.first((state_29038[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29957 = state_29038;
state_29038 = G__29957;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29059 = f__27907__auto__();
(statearr_29059[(6)] = c__27906__auto___29944);

return statearr_29059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29061 = arguments.length;
switch (G__29061) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27906__auto___29963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_29085){
var state_val_29086 = (state_29085[(1)]);
if((state_val_29086 === (7))){
var inst_29067 = (state_29085[(7)]);
var inst_29067__$1 = (state_29085[(2)]);
var inst_29068 = (inst_29067__$1 == null);
var inst_29069 = cljs.core.not(inst_29068);
var state_29085__$1 = (function (){var statearr_29087 = state_29085;
(statearr_29087[(7)] = inst_29067__$1);

return statearr_29087;
})();
if(inst_29069){
var statearr_29088_29964 = state_29085__$1;
(statearr_29088_29964[(1)] = (8));

} else {
var statearr_29089_29965 = state_29085__$1;
(statearr_29089_29965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (1))){
var inst_29062 = (0);
var state_29085__$1 = (function (){var statearr_29090 = state_29085;
(statearr_29090[(8)] = inst_29062);

return statearr_29090;
})();
var statearr_29091_29966 = state_29085__$1;
(statearr_29091_29966[(2)] = null);

(statearr_29091_29966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (4))){
var state_29085__$1 = state_29085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29085__$1,(7),ch);
} else {
if((state_val_29086 === (6))){
var inst_29080 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
var statearr_29092_29967 = state_29085__$1;
(statearr_29092_29967[(2)] = inst_29080);

(statearr_29092_29967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (3))){
var inst_29082 = (state_29085[(2)]);
var inst_29083 = cljs.core.async.close_BANG_(out);
var state_29085__$1 = (function (){var statearr_29093 = state_29085;
(statearr_29093[(9)] = inst_29082);

return statearr_29093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29085__$1,inst_29083);
} else {
if((state_val_29086 === (2))){
var inst_29062 = (state_29085[(8)]);
var inst_29064 = (inst_29062 < n);
var state_29085__$1 = state_29085;
if(cljs.core.truth_(inst_29064)){
var statearr_29094_29972 = state_29085__$1;
(statearr_29094_29972[(1)] = (4));

} else {
var statearr_29095_29973 = state_29085__$1;
(statearr_29095_29973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (11))){
var inst_29062 = (state_29085[(8)]);
var inst_29072 = (state_29085[(2)]);
var inst_29073 = (inst_29062 + (1));
var inst_29062__$1 = inst_29073;
var state_29085__$1 = (function (){var statearr_29096 = state_29085;
(statearr_29096[(8)] = inst_29062__$1);

(statearr_29096[(10)] = inst_29072);

return statearr_29096;
})();
var statearr_29097_29975 = state_29085__$1;
(statearr_29097_29975[(2)] = null);

(statearr_29097_29975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (9))){
var state_29085__$1 = state_29085;
var statearr_29098_29976 = state_29085__$1;
(statearr_29098_29976[(2)] = null);

(statearr_29098_29976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (5))){
var state_29085__$1 = state_29085;
var statearr_29099_29977 = state_29085__$1;
(statearr_29099_29977[(2)] = null);

(statearr_29099_29977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (10))){
var inst_29077 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
var statearr_29100_29978 = state_29085__$1;
(statearr_29100_29978[(2)] = inst_29077);

(statearr_29100_29978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29086 === (8))){
var inst_29067 = (state_29085[(7)]);
var state_29085__$1 = state_29085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29085__$1,(11),out,inst_29067);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29101[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29101[(1)] = (1));

return statearr_29101;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29085){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29085);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29102){var ex__27849__auto__ = e29102;
var statearr_29103_29980 = state_29085;
(statearr_29103_29980[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29085[(4)]))){
var statearr_29104_29981 = state_29085;
(statearr_29104_29981[(1)] = cljs.core.first((state_29085[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29982 = state_29085;
state_29085 = G__29982;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29105 = f__27907__auto__();
(statearr_29105[(6)] = c__27906__auto___29963);

return statearr_29105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29107 = (function (f,ch,meta29108){
this.f = f;
this.ch = ch;
this.meta29108 = meta29108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29109,meta29108__$1){
var self__ = this;
var _29109__$1 = this;
return (new cljs.core.async.t_cljs$core$async29107(self__.f,self__.ch,meta29108__$1));
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29109){
var self__ = this;
var _29109__$1 = this;
return self__.meta29108;
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29110 = (function (f,ch,meta29108,_,fn1,meta29111){
this.f = f;
this.ch = ch;
this.meta29108 = meta29108;
this._ = _;
this.fn1 = fn1;
this.meta29111 = meta29111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29112,meta29111__$1){
var self__ = this;
var _29112__$1 = this;
return (new cljs.core.async.t_cljs$core$async29110(self__.f,self__.ch,self__.meta29108,self__._,self__.fn1,meta29111__$1));
}));

(cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29112){
var self__ = this;
var _29112__$1 = this;
return self__.meta29111;
}));

(cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29106_SHARP_){
var G__29113 = (((p1__29106_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29106_SHARP_) : self__.f.call(null,p1__29106_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29113) : f1.call(null,G__29113));
});
}));

(cljs.core.async.t_cljs$core$async29110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29108","meta29108",1480727367,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29107","cljs.core.async/t_cljs$core$async29107",-800973466,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29111","meta29111",-163232455,null)], null);
}));

(cljs.core.async.t_cljs$core$async29110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29110");

(cljs.core.async.t_cljs$core$async29110.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29110.
 */
cljs.core.async.__GT_t_cljs$core$async29110 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29110(f__$1,ch__$1,meta29108__$1,___$2,fn1__$1,meta29111){
return (new cljs.core.async.t_cljs$core$async29110(f__$1,ch__$1,meta29108__$1,___$2,fn1__$1,meta29111));
});

}

return (new cljs.core.async.t_cljs$core$async29110(self__.f,self__.ch,self__.meta29108,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29114 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29114) : self__.f.call(null,G__29114));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29108","meta29108",1480727367,null)], null);
}));

(cljs.core.async.t_cljs$core$async29107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29107");

(cljs.core.async.t_cljs$core$async29107.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29107.
 */
cljs.core.async.__GT_t_cljs$core$async29107 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29107(f__$1,ch__$1,meta29108){
return (new cljs.core.async.t_cljs$core$async29107(f__$1,ch__$1,meta29108));
});

}

return (new cljs.core.async.t_cljs$core$async29107(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29115 = (function (f,ch,meta29116){
this.f = f;
this.ch = ch;
this.meta29116 = meta29116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29117,meta29116__$1){
var self__ = this;
var _29117__$1 = this;
return (new cljs.core.async.t_cljs$core$async29115(self__.f,self__.ch,meta29116__$1));
}));

(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29117){
var self__ = this;
var _29117__$1 = this;
return self__.meta29116;
}));

(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29116","meta29116",1204566749,null)], null);
}));

(cljs.core.async.t_cljs$core$async29115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29115");

(cljs.core.async.t_cljs$core$async29115.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29115.
 */
cljs.core.async.__GT_t_cljs$core$async29115 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29115(f__$1,ch__$1,meta29116){
return (new cljs.core.async.t_cljs$core$async29115(f__$1,ch__$1,meta29116));
});

}

return (new cljs.core.async.t_cljs$core$async29115(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29118 = (function (p,ch,meta29119){
this.p = p;
this.ch = ch;
this.meta29119 = meta29119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29120,meta29119__$1){
var self__ = this;
var _29120__$1 = this;
return (new cljs.core.async.t_cljs$core$async29118(self__.p,self__.ch,meta29119__$1));
}));

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29120){
var self__ = this;
var _29120__$1 = this;
return self__.meta29119;
}));

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29119","meta29119",1566285429,null)], null);
}));

(cljs.core.async.t_cljs$core$async29118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29118");

(cljs.core.async.t_cljs$core$async29118.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29118.
 */
cljs.core.async.__GT_t_cljs$core$async29118 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29118(p__$1,ch__$1,meta29119){
return (new cljs.core.async.t_cljs$core$async29118(p__$1,ch__$1,meta29119));
});

}

return (new cljs.core.async.t_cljs$core$async29118(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29122 = arguments.length;
switch (G__29122) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27906__auto___29992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_29143){
var state_val_29144 = (state_29143[(1)]);
if((state_val_29144 === (7))){
var inst_29139 = (state_29143[(2)]);
var state_29143__$1 = state_29143;
var statearr_29145_29993 = state_29143__$1;
(statearr_29145_29993[(2)] = inst_29139);

(statearr_29145_29993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (1))){
var state_29143__$1 = state_29143;
var statearr_29146_29994 = state_29143__$1;
(statearr_29146_29994[(2)] = null);

(statearr_29146_29994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (4))){
var inst_29125 = (state_29143[(7)]);
var inst_29125__$1 = (state_29143[(2)]);
var inst_29126 = (inst_29125__$1 == null);
var state_29143__$1 = (function (){var statearr_29147 = state_29143;
(statearr_29147[(7)] = inst_29125__$1);

return statearr_29147;
})();
if(cljs.core.truth_(inst_29126)){
var statearr_29148_29995 = state_29143__$1;
(statearr_29148_29995[(1)] = (5));

} else {
var statearr_29149_29996 = state_29143__$1;
(statearr_29149_29996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (6))){
var inst_29125 = (state_29143[(7)]);
var inst_29130 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29125) : p.call(null,inst_29125));
var state_29143__$1 = state_29143;
if(cljs.core.truth_(inst_29130)){
var statearr_29150_29997 = state_29143__$1;
(statearr_29150_29997[(1)] = (8));

} else {
var statearr_29151_29998 = state_29143__$1;
(statearr_29151_29998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (3))){
var inst_29141 = (state_29143[(2)]);
var state_29143__$1 = state_29143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29143__$1,inst_29141);
} else {
if((state_val_29144 === (2))){
var state_29143__$1 = state_29143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29143__$1,(4),ch);
} else {
if((state_val_29144 === (11))){
var inst_29133 = (state_29143[(2)]);
var state_29143__$1 = state_29143;
var statearr_29152_29999 = state_29143__$1;
(statearr_29152_29999[(2)] = inst_29133);

(statearr_29152_29999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (9))){
var state_29143__$1 = state_29143;
var statearr_29153_30000 = state_29143__$1;
(statearr_29153_30000[(2)] = null);

(statearr_29153_30000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (5))){
var inst_29128 = cljs.core.async.close_BANG_(out);
var state_29143__$1 = state_29143;
var statearr_29154_30001 = state_29143__$1;
(statearr_29154_30001[(2)] = inst_29128);

(statearr_29154_30001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (10))){
var inst_29136 = (state_29143[(2)]);
var state_29143__$1 = (function (){var statearr_29155 = state_29143;
(statearr_29155[(8)] = inst_29136);

return statearr_29155;
})();
var statearr_29156_30002 = state_29143__$1;
(statearr_29156_30002[(2)] = null);

(statearr_29156_30002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29144 === (8))){
var inst_29125 = (state_29143[(7)]);
var state_29143__$1 = state_29143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29143__$1,(11),out,inst_29125);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29157 = [null,null,null,null,null,null,null,null,null];
(statearr_29157[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29157[(1)] = (1));

return statearr_29157;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29143){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29143);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29158){var ex__27849__auto__ = e29158;
var statearr_29159_30003 = state_29143;
(statearr_29159_30003[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29143[(4)]))){
var statearr_29160_30004 = state_29143;
(statearr_29160_30004[(1)] = cljs.core.first((state_29143[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30005 = state_29143;
state_29143 = G__30005;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29161 = f__27907__auto__();
(statearr_29161[(6)] = c__27906__auto___29992);

return statearr_29161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29163 = arguments.length;
switch (G__29163) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_29225){
var state_val_29226 = (state_29225[(1)]);
if((state_val_29226 === (7))){
var inst_29221 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29227_30008 = state_29225__$1;
(statearr_29227_30008[(2)] = inst_29221);

(statearr_29227_30008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (20))){
var inst_29191 = (state_29225[(7)]);
var inst_29202 = (state_29225[(2)]);
var inst_29203 = cljs.core.next(inst_29191);
var inst_29177 = inst_29203;
var inst_29178 = null;
var inst_29179 = (0);
var inst_29180 = (0);
var state_29225__$1 = (function (){var statearr_29228 = state_29225;
(statearr_29228[(8)] = inst_29202);

(statearr_29228[(9)] = inst_29178);

(statearr_29228[(10)] = inst_29180);

(statearr_29228[(11)] = inst_29177);

(statearr_29228[(12)] = inst_29179);

return statearr_29228;
})();
var statearr_29229_30009 = state_29225__$1;
(statearr_29229_30009[(2)] = null);

(statearr_29229_30009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (1))){
var state_29225__$1 = state_29225;
var statearr_29230_30010 = state_29225__$1;
(statearr_29230_30010[(2)] = null);

(statearr_29230_30010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (4))){
var inst_29166 = (state_29225[(13)]);
var inst_29166__$1 = (state_29225[(2)]);
var inst_29167 = (inst_29166__$1 == null);
var state_29225__$1 = (function (){var statearr_29231 = state_29225;
(statearr_29231[(13)] = inst_29166__$1);

return statearr_29231;
})();
if(cljs.core.truth_(inst_29167)){
var statearr_29232_30011 = state_29225__$1;
(statearr_29232_30011[(1)] = (5));

} else {
var statearr_29233_30012 = state_29225__$1;
(statearr_29233_30012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (15))){
var state_29225__$1 = state_29225;
var statearr_29237_30013 = state_29225__$1;
(statearr_29237_30013[(2)] = null);

(statearr_29237_30013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (21))){
var state_29225__$1 = state_29225;
var statearr_29238_30014 = state_29225__$1;
(statearr_29238_30014[(2)] = null);

(statearr_29238_30014[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (13))){
var inst_29178 = (state_29225[(9)]);
var inst_29180 = (state_29225[(10)]);
var inst_29177 = (state_29225[(11)]);
var inst_29179 = (state_29225[(12)]);
var inst_29187 = (state_29225[(2)]);
var inst_29188 = (inst_29180 + (1));
var tmp29234 = inst_29178;
var tmp29235 = inst_29177;
var tmp29236 = inst_29179;
var inst_29177__$1 = tmp29235;
var inst_29178__$1 = tmp29234;
var inst_29179__$1 = tmp29236;
var inst_29180__$1 = inst_29188;
var state_29225__$1 = (function (){var statearr_29239 = state_29225;
(statearr_29239[(9)] = inst_29178__$1);

(statearr_29239[(14)] = inst_29187);

(statearr_29239[(10)] = inst_29180__$1);

(statearr_29239[(11)] = inst_29177__$1);

(statearr_29239[(12)] = inst_29179__$1);

return statearr_29239;
})();
var statearr_29240_30019 = state_29225__$1;
(statearr_29240_30019[(2)] = null);

(statearr_29240_30019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (22))){
var state_29225__$1 = state_29225;
var statearr_29241_30020 = state_29225__$1;
(statearr_29241_30020[(2)] = null);

(statearr_29241_30020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (6))){
var inst_29166 = (state_29225[(13)]);
var inst_29175 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29166) : f.call(null,inst_29166));
var inst_29176 = cljs.core.seq(inst_29175);
var inst_29177 = inst_29176;
var inst_29178 = null;
var inst_29179 = (0);
var inst_29180 = (0);
var state_29225__$1 = (function (){var statearr_29242 = state_29225;
(statearr_29242[(9)] = inst_29178);

(statearr_29242[(10)] = inst_29180);

(statearr_29242[(11)] = inst_29177);

(statearr_29242[(12)] = inst_29179);

return statearr_29242;
})();
var statearr_29243_30022 = state_29225__$1;
(statearr_29243_30022[(2)] = null);

(statearr_29243_30022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (17))){
var inst_29191 = (state_29225[(7)]);
var inst_29195 = cljs.core.chunk_first(inst_29191);
var inst_29196 = cljs.core.chunk_rest(inst_29191);
var inst_29197 = cljs.core.count(inst_29195);
var inst_29177 = inst_29196;
var inst_29178 = inst_29195;
var inst_29179 = inst_29197;
var inst_29180 = (0);
var state_29225__$1 = (function (){var statearr_29244 = state_29225;
(statearr_29244[(9)] = inst_29178);

(statearr_29244[(10)] = inst_29180);

(statearr_29244[(11)] = inst_29177);

(statearr_29244[(12)] = inst_29179);

return statearr_29244;
})();
var statearr_29245_30023 = state_29225__$1;
(statearr_29245_30023[(2)] = null);

(statearr_29245_30023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (3))){
var inst_29223 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29225__$1,inst_29223);
} else {
if((state_val_29226 === (12))){
var inst_29211 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29246_30024 = state_29225__$1;
(statearr_29246_30024[(2)] = inst_29211);

(statearr_29246_30024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (2))){
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29225__$1,(4),in$);
} else {
if((state_val_29226 === (23))){
var inst_29219 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29247_30025 = state_29225__$1;
(statearr_29247_30025[(2)] = inst_29219);

(statearr_29247_30025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (19))){
var inst_29206 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29248_30026 = state_29225__$1;
(statearr_29248_30026[(2)] = inst_29206);

(statearr_29248_30026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (11))){
var inst_29191 = (state_29225[(7)]);
var inst_29177 = (state_29225[(11)]);
var inst_29191__$1 = cljs.core.seq(inst_29177);
var state_29225__$1 = (function (){var statearr_29249 = state_29225;
(statearr_29249[(7)] = inst_29191__$1);

return statearr_29249;
})();
if(inst_29191__$1){
var statearr_29250_30028 = state_29225__$1;
(statearr_29250_30028[(1)] = (14));

} else {
var statearr_29251_30029 = state_29225__$1;
(statearr_29251_30029[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (9))){
var inst_29213 = (state_29225[(2)]);
var inst_29214 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29225__$1 = (function (){var statearr_29252 = state_29225;
(statearr_29252[(15)] = inst_29213);

return statearr_29252;
})();
if(cljs.core.truth_(inst_29214)){
var statearr_29253_30030 = state_29225__$1;
(statearr_29253_30030[(1)] = (21));

} else {
var statearr_29254_30031 = state_29225__$1;
(statearr_29254_30031[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (5))){
var inst_29169 = cljs.core.async.close_BANG_(out);
var state_29225__$1 = state_29225;
var statearr_29255_30032 = state_29225__$1;
(statearr_29255_30032[(2)] = inst_29169);

(statearr_29255_30032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (14))){
var inst_29191 = (state_29225[(7)]);
var inst_29193 = cljs.core.chunked_seq_QMARK_(inst_29191);
var state_29225__$1 = state_29225;
if(inst_29193){
var statearr_29256_30033 = state_29225__$1;
(statearr_29256_30033[(1)] = (17));

} else {
var statearr_29257_30034 = state_29225__$1;
(statearr_29257_30034[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (16))){
var inst_29209 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29258_30035 = state_29225__$1;
(statearr_29258_30035[(2)] = inst_29209);

(statearr_29258_30035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (10))){
var inst_29178 = (state_29225[(9)]);
var inst_29180 = (state_29225[(10)]);
var inst_29185 = cljs.core._nth(inst_29178,inst_29180);
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29225__$1,(13),out,inst_29185);
} else {
if((state_val_29226 === (18))){
var inst_29191 = (state_29225[(7)]);
var inst_29200 = cljs.core.first(inst_29191);
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29225__$1,(20),out,inst_29200);
} else {
if((state_val_29226 === (8))){
var inst_29180 = (state_29225[(10)]);
var inst_29179 = (state_29225[(12)]);
var inst_29182 = (inst_29180 < inst_29179);
var inst_29183 = inst_29182;
var state_29225__$1 = state_29225;
if(cljs.core.truth_(inst_29183)){
var statearr_29259_30037 = state_29225__$1;
(statearr_29259_30037[(1)] = (10));

} else {
var statearr_29260_30038 = state_29225__$1;
(statearr_29260_30038[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____0 = (function (){
var statearr_29261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29261[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__);

(statearr_29261[(1)] = (1));

return statearr_29261;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____1 = (function (state_29225){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29225);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29262){var ex__27849__auto__ = e29262;
var statearr_29263_30042 = state_29225;
(statearr_29263_30042[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29225[(4)]))){
var statearr_29264_30043 = state_29225;
(statearr_29264_30043[(1)] = cljs.core.first((state_29225[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30044 = state_29225;
state_29225 = G__30044;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__ = function(state_29225){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____1.call(this,state_29225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27846__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29265 = f__27907__auto__();
(statearr_29265[(6)] = c__27906__auto__);

return statearr_29265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));

return c__27906__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29267 = arguments.length;
switch (G__29267) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29269 = arguments.length;
switch (G__29269) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29271 = arguments.length;
switch (G__29271) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27906__auto___30048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_29295){
var state_val_29296 = (state_29295[(1)]);
if((state_val_29296 === (7))){
var inst_29290 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29297_30049 = state_29295__$1;
(statearr_29297_30049[(2)] = inst_29290);

(statearr_29297_30049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (1))){
var inst_29272 = null;
var state_29295__$1 = (function (){var statearr_29298 = state_29295;
(statearr_29298[(7)] = inst_29272);

return statearr_29298;
})();
var statearr_29299_30050 = state_29295__$1;
(statearr_29299_30050[(2)] = null);

(statearr_29299_30050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (4))){
var inst_29275 = (state_29295[(8)]);
var inst_29275__$1 = (state_29295[(2)]);
var inst_29276 = (inst_29275__$1 == null);
var inst_29277 = cljs.core.not(inst_29276);
var state_29295__$1 = (function (){var statearr_29300 = state_29295;
(statearr_29300[(8)] = inst_29275__$1);

return statearr_29300;
})();
if(inst_29277){
var statearr_29301_30051 = state_29295__$1;
(statearr_29301_30051[(1)] = (5));

} else {
var statearr_29302_30052 = state_29295__$1;
(statearr_29302_30052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (6))){
var state_29295__$1 = state_29295;
var statearr_29303_30053 = state_29295__$1;
(statearr_29303_30053[(2)] = null);

(statearr_29303_30053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (3))){
var inst_29292 = (state_29295[(2)]);
var inst_29293 = cljs.core.async.close_BANG_(out);
var state_29295__$1 = (function (){var statearr_29304 = state_29295;
(statearr_29304[(9)] = inst_29292);

return statearr_29304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29295__$1,inst_29293);
} else {
if((state_val_29296 === (2))){
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29295__$1,(4),ch);
} else {
if((state_val_29296 === (11))){
var inst_29275 = (state_29295[(8)]);
var inst_29284 = (state_29295[(2)]);
var inst_29272 = inst_29275;
var state_29295__$1 = (function (){var statearr_29305 = state_29295;
(statearr_29305[(10)] = inst_29284);

(statearr_29305[(7)] = inst_29272);

return statearr_29305;
})();
var statearr_29306_30054 = state_29295__$1;
(statearr_29306_30054[(2)] = null);

(statearr_29306_30054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (9))){
var inst_29275 = (state_29295[(8)]);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29295__$1,(11),out,inst_29275);
} else {
if((state_val_29296 === (5))){
var inst_29275 = (state_29295[(8)]);
var inst_29272 = (state_29295[(7)]);
var inst_29279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29275,inst_29272);
var state_29295__$1 = state_29295;
if(inst_29279){
var statearr_29308_30055 = state_29295__$1;
(statearr_29308_30055[(1)] = (8));

} else {
var statearr_29309_30056 = state_29295__$1;
(statearr_29309_30056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (10))){
var inst_29287 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29310_30057 = state_29295__$1;
(statearr_29310_30057[(2)] = inst_29287);

(statearr_29310_30057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (8))){
var inst_29272 = (state_29295[(7)]);
var tmp29307 = inst_29272;
var inst_29272__$1 = tmp29307;
var state_29295__$1 = (function (){var statearr_29311 = state_29295;
(statearr_29311[(7)] = inst_29272__$1);

return statearr_29311;
})();
var statearr_29312_30058 = state_29295__$1;
(statearr_29312_30058[(2)] = null);

(statearr_29312_30058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29313[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29313[(1)] = (1));

return statearr_29313;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29295){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29295);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29314){var ex__27849__auto__ = e29314;
var statearr_29315_30059 = state_29295;
(statearr_29315_30059[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29295[(4)]))){
var statearr_29316_30060 = state_29295;
(statearr_29316_30060[(1)] = cljs.core.first((state_29295[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30061 = state_29295;
state_29295 = G__30061;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29317 = f__27907__auto__();
(statearr_29317[(6)] = c__27906__auto___30048);

return statearr_29317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29319 = arguments.length;
switch (G__29319) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27906__auto___30063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_29357){
var state_val_29358 = (state_29357[(1)]);
if((state_val_29358 === (7))){
var inst_29353 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29359_30064 = state_29357__$1;
(statearr_29359_30064[(2)] = inst_29353);

(statearr_29359_30064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (1))){
var inst_29320 = (new Array(n));
var inst_29321 = inst_29320;
var inst_29322 = (0);
var state_29357__$1 = (function (){var statearr_29360 = state_29357;
(statearr_29360[(7)] = inst_29321);

(statearr_29360[(8)] = inst_29322);

return statearr_29360;
})();
var statearr_29361_30065 = state_29357__$1;
(statearr_29361_30065[(2)] = null);

(statearr_29361_30065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (4))){
var inst_29325 = (state_29357[(9)]);
var inst_29325__$1 = (state_29357[(2)]);
var inst_29326 = (inst_29325__$1 == null);
var inst_29327 = cljs.core.not(inst_29326);
var state_29357__$1 = (function (){var statearr_29362 = state_29357;
(statearr_29362[(9)] = inst_29325__$1);

return statearr_29362;
})();
if(inst_29327){
var statearr_29363_30066 = state_29357__$1;
(statearr_29363_30066[(1)] = (5));

} else {
var statearr_29364_30067 = state_29357__$1;
(statearr_29364_30067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (15))){
var inst_29347 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29365_30068 = state_29357__$1;
(statearr_29365_30068[(2)] = inst_29347);

(statearr_29365_30068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (13))){
var state_29357__$1 = state_29357;
var statearr_29366_30070 = state_29357__$1;
(statearr_29366_30070[(2)] = null);

(statearr_29366_30070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (6))){
var inst_29322 = (state_29357[(8)]);
var inst_29343 = (inst_29322 > (0));
var state_29357__$1 = state_29357;
if(cljs.core.truth_(inst_29343)){
var statearr_29367_30071 = state_29357__$1;
(statearr_29367_30071[(1)] = (12));

} else {
var statearr_29368_30072 = state_29357__$1;
(statearr_29368_30072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (3))){
var inst_29355 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29357__$1,inst_29355);
} else {
if((state_val_29358 === (12))){
var inst_29321 = (state_29357[(7)]);
var inst_29345 = cljs.core.vec(inst_29321);
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29357__$1,(15),out,inst_29345);
} else {
if((state_val_29358 === (2))){
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29357__$1,(4),ch);
} else {
if((state_val_29358 === (11))){
var inst_29337 = (state_29357[(2)]);
var inst_29338 = (new Array(n));
var inst_29321 = inst_29338;
var inst_29322 = (0);
var state_29357__$1 = (function (){var statearr_29369 = state_29357;
(statearr_29369[(7)] = inst_29321);

(statearr_29369[(10)] = inst_29337);

(statearr_29369[(8)] = inst_29322);

return statearr_29369;
})();
var statearr_29370_30076 = state_29357__$1;
(statearr_29370_30076[(2)] = null);

(statearr_29370_30076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (9))){
var inst_29321 = (state_29357[(7)]);
var inst_29335 = cljs.core.vec(inst_29321);
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29357__$1,(11),out,inst_29335);
} else {
if((state_val_29358 === (5))){
var inst_29325 = (state_29357[(9)]);
var inst_29330 = (state_29357[(11)]);
var inst_29321 = (state_29357[(7)]);
var inst_29322 = (state_29357[(8)]);
var inst_29329 = (inst_29321[inst_29322] = inst_29325);
var inst_29330__$1 = (inst_29322 + (1));
var inst_29331 = (inst_29330__$1 < n);
var state_29357__$1 = (function (){var statearr_29371 = state_29357;
(statearr_29371[(11)] = inst_29330__$1);

(statearr_29371[(12)] = inst_29329);

return statearr_29371;
})();
if(cljs.core.truth_(inst_29331)){
var statearr_29372_30077 = state_29357__$1;
(statearr_29372_30077[(1)] = (8));

} else {
var statearr_29373_30078 = state_29357__$1;
(statearr_29373_30078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (14))){
var inst_29350 = (state_29357[(2)]);
var inst_29351 = cljs.core.async.close_BANG_(out);
var state_29357__$1 = (function (){var statearr_29375 = state_29357;
(statearr_29375[(13)] = inst_29350);

return statearr_29375;
})();
var statearr_29376_30079 = state_29357__$1;
(statearr_29376_30079[(2)] = inst_29351);

(statearr_29376_30079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (10))){
var inst_29341 = (state_29357[(2)]);
var state_29357__$1 = state_29357;
var statearr_29377_30080 = state_29357__$1;
(statearr_29377_30080[(2)] = inst_29341);

(statearr_29377_30080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29358 === (8))){
var inst_29330 = (state_29357[(11)]);
var inst_29321 = (state_29357[(7)]);
var tmp29374 = inst_29321;
var inst_29321__$1 = tmp29374;
var inst_29322 = inst_29330;
var state_29357__$1 = (function (){var statearr_29378 = state_29357;
(statearr_29378[(7)] = inst_29321__$1);

(statearr_29378[(8)] = inst_29322);

return statearr_29378;
})();
var statearr_29379_30081 = state_29357__$1;
(statearr_29379_30081[(2)] = null);

(statearr_29379_30081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29380[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29380[(1)] = (1));

return statearr_29380;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29357){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29357);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29381){var ex__27849__auto__ = e29381;
var statearr_29382_30082 = state_29357;
(statearr_29382_30082[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29357[(4)]))){
var statearr_29383_30083 = state_29357;
(statearr_29383_30083[(1)] = cljs.core.first((state_29357[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30084 = state_29357;
state_29357 = G__30084;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29384 = f__27907__auto__();
(statearr_29384[(6)] = c__27906__auto___30063);

return statearr_29384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29386 = arguments.length;
switch (G__29386) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27906__auto___30086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27907__auto__ = (function (){var switch__27845__auto__ = (function (state_29431){
var state_val_29432 = (state_29431[(1)]);
if((state_val_29432 === (7))){
var inst_29427 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29433_30087 = state_29431__$1;
(statearr_29433_30087[(2)] = inst_29427);

(statearr_29433_30087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (1))){
var inst_29387 = [];
var inst_29388 = inst_29387;
var inst_29389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29431__$1 = (function (){var statearr_29434 = state_29431;
(statearr_29434[(7)] = inst_29388);

(statearr_29434[(8)] = inst_29389);

return statearr_29434;
})();
var statearr_29435_30088 = state_29431__$1;
(statearr_29435_30088[(2)] = null);

(statearr_29435_30088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (4))){
var inst_29392 = (state_29431[(9)]);
var inst_29392__$1 = (state_29431[(2)]);
var inst_29393 = (inst_29392__$1 == null);
var inst_29394 = cljs.core.not(inst_29393);
var state_29431__$1 = (function (){var statearr_29436 = state_29431;
(statearr_29436[(9)] = inst_29392__$1);

return statearr_29436;
})();
if(inst_29394){
var statearr_29437_30089 = state_29431__$1;
(statearr_29437_30089[(1)] = (5));

} else {
var statearr_29438_30090 = state_29431__$1;
(statearr_29438_30090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (15))){
var inst_29388 = (state_29431[(7)]);
var inst_29419 = cljs.core.vec(inst_29388);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29431__$1,(18),out,inst_29419);
} else {
if((state_val_29432 === (13))){
var inst_29414 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29439_30092 = state_29431__$1;
(statearr_29439_30092[(2)] = inst_29414);

(statearr_29439_30092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (6))){
var inst_29388 = (state_29431[(7)]);
var inst_29416 = inst_29388.length;
var inst_29417 = (inst_29416 > (0));
var state_29431__$1 = state_29431;
if(cljs.core.truth_(inst_29417)){
var statearr_29440_30093 = state_29431__$1;
(statearr_29440_30093[(1)] = (15));

} else {
var statearr_29441_30094 = state_29431__$1;
(statearr_29441_30094[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (17))){
var inst_29424 = (state_29431[(2)]);
var inst_29425 = cljs.core.async.close_BANG_(out);
var state_29431__$1 = (function (){var statearr_29442 = state_29431;
(statearr_29442[(10)] = inst_29424);

return statearr_29442;
})();
var statearr_29443_30095 = state_29431__$1;
(statearr_29443_30095[(2)] = inst_29425);

(statearr_29443_30095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (3))){
var inst_29429 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29431__$1,inst_29429);
} else {
if((state_val_29432 === (12))){
var inst_29388 = (state_29431[(7)]);
var inst_29407 = cljs.core.vec(inst_29388);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29431__$1,(14),out,inst_29407);
} else {
if((state_val_29432 === (2))){
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29431__$1,(4),ch);
} else {
if((state_val_29432 === (11))){
var inst_29396 = (state_29431[(11)]);
var inst_29388 = (state_29431[(7)]);
var inst_29392 = (state_29431[(9)]);
var inst_29404 = inst_29388.push(inst_29392);
var tmp29444 = inst_29388;
var inst_29388__$1 = tmp29444;
var inst_29389 = inst_29396;
var state_29431__$1 = (function (){var statearr_29445 = state_29431;
(statearr_29445[(12)] = inst_29404);

(statearr_29445[(7)] = inst_29388__$1);

(statearr_29445[(8)] = inst_29389);

return statearr_29445;
})();
var statearr_29446_30096 = state_29431__$1;
(statearr_29446_30096[(2)] = null);

(statearr_29446_30096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (9))){
var inst_29389 = (state_29431[(8)]);
var inst_29400 = cljs.core.keyword_identical_QMARK_(inst_29389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29431__$1 = state_29431;
var statearr_29447_30097 = state_29431__$1;
(statearr_29447_30097[(2)] = inst_29400);

(statearr_29447_30097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (5))){
var inst_29397 = (state_29431[(13)]);
var inst_29396 = (state_29431[(11)]);
var inst_29389 = (state_29431[(8)]);
var inst_29392 = (state_29431[(9)]);
var inst_29396__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29392) : f.call(null,inst_29392));
var inst_29397__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29396__$1,inst_29389);
var state_29431__$1 = (function (){var statearr_29448 = state_29431;
(statearr_29448[(13)] = inst_29397__$1);

(statearr_29448[(11)] = inst_29396__$1);

return statearr_29448;
})();
if(inst_29397__$1){
var statearr_29449_30098 = state_29431__$1;
(statearr_29449_30098[(1)] = (8));

} else {
var statearr_29450_30099 = state_29431__$1;
(statearr_29450_30099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (14))){
var inst_29396 = (state_29431[(11)]);
var inst_29392 = (state_29431[(9)]);
var inst_29409 = (state_29431[(2)]);
var inst_29410 = [];
var inst_29411 = inst_29410.push(inst_29392);
var inst_29388 = inst_29410;
var inst_29389 = inst_29396;
var state_29431__$1 = (function (){var statearr_29451 = state_29431;
(statearr_29451[(14)] = inst_29411);

(statearr_29451[(7)] = inst_29388);

(statearr_29451[(8)] = inst_29389);

(statearr_29451[(15)] = inst_29409);

return statearr_29451;
})();
var statearr_29452_30100 = state_29431__$1;
(statearr_29452_30100[(2)] = null);

(statearr_29452_30100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (16))){
var state_29431__$1 = state_29431;
var statearr_29453_30101 = state_29431__$1;
(statearr_29453_30101[(2)] = null);

(statearr_29453_30101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (10))){
var inst_29402 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
if(cljs.core.truth_(inst_29402)){
var statearr_29454_30102 = state_29431__$1;
(statearr_29454_30102[(1)] = (11));

} else {
var statearr_29455_30103 = state_29431__$1;
(statearr_29455_30103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (18))){
var inst_29421 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29456_30104 = state_29431__$1;
(statearr_29456_30104[(2)] = inst_29421);

(statearr_29456_30104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (8))){
var inst_29397 = (state_29431[(13)]);
var state_29431__$1 = state_29431;
var statearr_29457_30105 = state_29431__$1;
(statearr_29457_30105[(2)] = inst_29397);

(statearr_29457_30105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27846__auto__ = null;
var cljs$core$async$state_machine__27846__auto____0 = (function (){
var statearr_29458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29458[(0)] = cljs$core$async$state_machine__27846__auto__);

(statearr_29458[(1)] = (1));

return statearr_29458;
});
var cljs$core$async$state_machine__27846__auto____1 = (function (state_29431){
while(true){
var ret_value__27847__auto__ = (function (){try{while(true){
var result__27848__auto__ = switch__27845__auto__(state_29431);
if(cljs.core.keyword_identical_QMARK_(result__27848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27848__auto__;
}
break;
}
}catch (e29459){var ex__27849__auto__ = e29459;
var statearr_29460_30106 = state_29431;
(statearr_29460_30106[(2)] = ex__27849__auto__);


if(cljs.core.seq((state_29431[(4)]))){
var statearr_29461_30107 = state_29431;
(statearr_29461_30107[(1)] = cljs.core.first((state_29431[(4)])));

} else {
throw ex__27849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30108 = state_29431;
state_29431 = G__30108;
continue;
} else {
return ret_value__27847__auto__;
}
break;
}
});
cljs$core$async$state_machine__27846__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27846__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27846__auto____0;
cljs$core$async$state_machine__27846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27846__auto____1;
return cljs$core$async$state_machine__27846__auto__;
})()
})();
var state__27908__auto__ = (function (){var statearr_29462 = f__27907__auto__();
(statearr_29462[(6)] = c__27906__auto___30086);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27908__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
