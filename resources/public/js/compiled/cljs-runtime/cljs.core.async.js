goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27961 = arguments.length;
switch (G__27961) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27967 = (function (f,blockable,meta27968){
this.f = f;
this.blockable = blockable;
this.meta27968 = meta27968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27969,meta27968__$1){
var self__ = this;
var _27969__$1 = this;
return (new cljs.core.async.t_cljs$core$async27967(self__.f,self__.blockable,meta27968__$1));
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27969){
var self__ = this;
var _27969__$1 = this;
return self__.meta27968;
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27968","meta27968",-1900079016,null)], null);
}));

(cljs.core.async.t_cljs$core$async27967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27967");

(cljs.core.async.t_cljs$core$async27967.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async27967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27967.
 */
cljs.core.async.__GT_t_cljs$core$async27967 = (function cljs$core$async$__GT_t_cljs$core$async27967(f__$1,blockable__$1,meta27968){
return (new cljs.core.async.t_cljs$core$async27967(f__$1,blockable__$1,meta27968));
});

}

return (new cljs.core.async.t_cljs$core$async27967(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27982 = arguments.length;
switch (G__27982) {
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
var G__27995 = arguments.length;
switch (G__27995) {
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
var G__28008 = arguments.length;
switch (G__28008) {
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
var val_29473 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29473) : fn1.call(null,val_29473));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29473) : fn1.call(null,val_29473));
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
var G__28016 = arguments.length;
switch (G__28016) {
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
var n__5633__auto___29477 = n;
var x_29478 = (0);
while(true){
if((x_29478 < n__5633__auto___29477)){
(a[x_29478] = x_29478);

var G__29479 = (x_29478 + (1));
x_29478 = G__29479;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28022 = (function (flag,meta28023){
this.flag = flag;
this.meta28023 = meta28023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28024,meta28023__$1){
var self__ = this;
var _28024__$1 = this;
return (new cljs.core.async.t_cljs$core$async28022(self__.flag,meta28023__$1));
}));

(cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28024){
var self__ = this;
var _28024__$1 = this;
return self__.meta28023;
}));

(cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28023","meta28023",2045292929,null)], null);
}));

(cljs.core.async.t_cljs$core$async28022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28022");

(cljs.core.async.t_cljs$core$async28022.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28022.
 */
cljs.core.async.__GT_t_cljs$core$async28022 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28022(flag__$1,meta28023){
return (new cljs.core.async.t_cljs$core$async28022(flag__$1,meta28023));
});

}

return (new cljs.core.async.t_cljs$core$async28022(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28038 = (function (flag,cb,meta28039){
this.flag = flag;
this.cb = cb;
this.meta28039 = meta28039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28040,meta28039__$1){
var self__ = this;
var _28040__$1 = this;
return (new cljs.core.async.t_cljs$core$async28038(self__.flag,self__.cb,meta28039__$1));
}));

(cljs.core.async.t_cljs$core$async28038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28040){
var self__ = this;
var _28040__$1 = this;
return self__.meta28039;
}));

(cljs.core.async.t_cljs$core$async28038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28039","meta28039",-316278106,null)], null);
}));

(cljs.core.async.t_cljs$core$async28038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28038");

(cljs.core.async.t_cljs$core$async28038.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28038.
 */
cljs.core.async.__GT_t_cljs$core$async28038 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28038(flag__$1,cb__$1,meta28039){
return (new cljs.core.async.t_cljs$core$async28038(flag__$1,cb__$1,meta28039));
});

}

return (new cljs.core.async.t_cljs$core$async28038(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28044_SHARP_){
var G__28047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28044_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28047) : fret.call(null,G__28047));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28045_SHARP_){
var G__28050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28045_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28050) : fret.call(null,G__28050));
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
var G__29481 = (i + (1));
i = G__29481;
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
var len__5766__auto___29482 = arguments.length;
var i__5767__auto___29483 = (0);
while(true){
if((i__5767__auto___29483 < len__5766__auto___29482)){
args__5772__auto__.push((arguments[i__5767__auto___29483]));

var G__29485 = (i__5767__auto___29483 + (1));
i__5767__auto___29483 = G__29485;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28054){
var map__28055 = p__28054;
var map__28055__$1 = cljs.core.__destructure_map(map__28055);
var opts = map__28055__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28052){
var G__28053 = cljs.core.first(seq28052);
var seq28052__$1 = cljs.core.next(seq28052);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28053,seq28052__$1);
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
var G__28057 = arguments.length;
switch (G__28057) {
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
var c__27903__auto___29489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28081){
var state_val_28082 = (state_28081[(1)]);
if((state_val_28082 === (7))){
var inst_28077 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28083_29491 = state_28081__$1;
(statearr_28083_29491[(2)] = inst_28077);

(statearr_28083_29491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (1))){
var state_28081__$1 = state_28081;
var statearr_28084_29492 = state_28081__$1;
(statearr_28084_29492[(2)] = null);

(statearr_28084_29492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (4))){
var inst_28060 = (state_28081[(7)]);
var inst_28060__$1 = (state_28081[(2)]);
var inst_28061 = (inst_28060__$1 == null);
var state_28081__$1 = (function (){var statearr_28085 = state_28081;
(statearr_28085[(7)] = inst_28060__$1);

return statearr_28085;
})();
if(cljs.core.truth_(inst_28061)){
var statearr_28086_29493 = state_28081__$1;
(statearr_28086_29493[(1)] = (5));

} else {
var statearr_28087_29494 = state_28081__$1;
(statearr_28087_29494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (13))){
var state_28081__$1 = state_28081;
var statearr_28088_29495 = state_28081__$1;
(statearr_28088_29495[(2)] = null);

(statearr_28088_29495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (6))){
var inst_28060 = (state_28081[(7)]);
var state_28081__$1 = state_28081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28081__$1,(11),to,inst_28060);
} else {
if((state_val_28082 === (3))){
var inst_28079 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28081__$1,inst_28079);
} else {
if((state_val_28082 === (12))){
var state_28081__$1 = state_28081;
var statearr_28089_29497 = state_28081__$1;
(statearr_28089_29497[(2)] = null);

(statearr_28089_29497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (2))){
var state_28081__$1 = state_28081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28081__$1,(4),from);
} else {
if((state_val_28082 === (11))){
var inst_28070 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
if(cljs.core.truth_(inst_28070)){
var statearr_28090_29499 = state_28081__$1;
(statearr_28090_29499[(1)] = (12));

} else {
var statearr_28091_29500 = state_28081__$1;
(statearr_28091_29500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (9))){
var state_28081__$1 = state_28081;
var statearr_28092_29501 = state_28081__$1;
(statearr_28092_29501[(2)] = null);

(statearr_28092_29501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (5))){
var state_28081__$1 = state_28081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28093_29502 = state_28081__$1;
(statearr_28093_29502[(1)] = (8));

} else {
var statearr_28094_29503 = state_28081__$1;
(statearr_28094_29503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (14))){
var inst_28075 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28095_29504 = state_28081__$1;
(statearr_28095_29504[(2)] = inst_28075);

(statearr_28095_29504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (10))){
var inst_28067 = (state_28081[(2)]);
var state_28081__$1 = state_28081;
var statearr_28096_29505 = state_28081__$1;
(statearr_28096_29505[(2)] = inst_28067);

(statearr_28096_29505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28082 === (8))){
var inst_28064 = cljs.core.async.close_BANG_(to);
var state_28081__$1 = state_28081;
var statearr_28097_29506 = state_28081__$1;
(statearr_28097_29506[(2)] = inst_28064);

(statearr_28097_29506[(1)] = (10));


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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_28098 = [null,null,null,null,null,null,null,null];
(statearr_28098[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_28098[(1)] = (1));

return statearr_28098;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_28081){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28081);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28099){var ex__27836__auto__ = e28099;
var statearr_28100_29508 = state_28081;
(statearr_28100_29508[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28081[(4)]))){
var statearr_28101_29510 = state_28081;
(statearr_28101_29510[(1)] = cljs.core.first((state_28081[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29511 = state_28081;
state_28081 = G__29511;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_28081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_28081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28102 = f__27904__auto__();
(statearr_28102[(6)] = c__27903__auto___29489);

return statearr_28102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
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
var process__$1 = (function (p__28103){
var vec__28104 = p__28103;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28104,(1),null);
var job = vec__28104;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27903__auto___29512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28111){
var state_val_28112 = (state_28111[(1)]);
if((state_val_28112 === (1))){
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28111__$1,(2),res,v);
} else {
if((state_val_28112 === (2))){
var inst_28108 = (state_28111[(2)]);
var inst_28109 = cljs.core.async.close_BANG_(res);
var state_28111__$1 = (function (){var statearr_28113 = state_28111;
(statearr_28113[(7)] = inst_28108);

return statearr_28113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28111__$1,inst_28109);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0 = (function (){
var statearr_28114 = [null,null,null,null,null,null,null,null];
(statearr_28114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__);

(statearr_28114[(1)] = (1));

return statearr_28114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1 = (function (state_28111){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28111);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28115){var ex__27836__auto__ = e28115;
var statearr_28116_29513 = state_28111;
(statearr_28116_29513[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28111[(4)]))){
var statearr_28117_29514 = state_28111;
(statearr_28117_29514[(1)] = cljs.core.first((state_28111[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29515 = state_28111;
state_28111 = G__29515;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = function(state_28111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1.call(this,state_28111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28118 = f__27904__auto__();
(statearr_28118[(6)] = c__27903__auto___29512);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28119){
var vec__28120 = p__28119;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(1),null);
var job = vec__28120;
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
var n__5633__auto___29518 = n;
var __29519 = (0);
while(true){
if((__29519 < n__5633__auto___29518)){
var G__28123_29520 = type;
var G__28123_29521__$1 = (((G__28123_29520 instanceof cljs.core.Keyword))?G__28123_29520.fqn:null);
switch (G__28123_29521__$1) {
case "compute":
var c__27903__auto___29523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29519,c__27903__auto___29523,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async){
return (function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = ((function (__29519,c__27903__auto___29523,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async){
return (function (state_28136){
var state_val_28137 = (state_28136[(1)]);
if((state_val_28137 === (1))){
var state_28136__$1 = state_28136;
var statearr_28138_29524 = state_28136__$1;
(statearr_28138_29524[(2)] = null);

(statearr_28138_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (2))){
var state_28136__$1 = state_28136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28136__$1,(4),jobs);
} else {
if((state_val_28137 === (3))){
var inst_28134 = (state_28136[(2)]);
var state_28136__$1 = state_28136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28136__$1,inst_28134);
} else {
if((state_val_28137 === (4))){
var inst_28126 = (state_28136[(2)]);
var inst_28127 = process__$1(inst_28126);
var state_28136__$1 = state_28136;
if(cljs.core.truth_(inst_28127)){
var statearr_28139_29525 = state_28136__$1;
(statearr_28139_29525[(1)] = (5));

} else {
var statearr_28140_29526 = state_28136__$1;
(statearr_28140_29526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (5))){
var state_28136__$1 = state_28136;
var statearr_28141_29528 = state_28136__$1;
(statearr_28141_29528[(2)] = null);

(statearr_28141_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (6))){
var state_28136__$1 = state_28136;
var statearr_28142_29529 = state_28136__$1;
(statearr_28142_29529[(2)] = null);

(statearr_28142_29529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (7))){
var inst_28132 = (state_28136[(2)]);
var state_28136__$1 = state_28136;
var statearr_28143_29531 = state_28136__$1;
(statearr_28143_29531[(2)] = inst_28132);

(statearr_28143_29531[(1)] = (3));


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
});})(__29519,c__27903__auto___29523,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async))
;
return ((function (__29519,switch__27832__auto__,c__27903__auto___29523,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0 = (function (){
var statearr_28144 = [null,null,null,null,null,null,null];
(statearr_28144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__);

(statearr_28144[(1)] = (1));

return statearr_28144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1 = (function (state_28136){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28136);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28145){var ex__27836__auto__ = e28145;
var statearr_28146_29532 = state_28136;
(statearr_28146_29532[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28136[(4)]))){
var statearr_28147_29533 = state_28136;
(statearr_28147_29533[(1)] = cljs.core.first((state_28136[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29534 = state_28136;
state_28136 = G__29534;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = function(state_28136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1.call(this,state_28136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__;
})()
;})(__29519,switch__27832__auto__,c__27903__auto___29523,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async))
})();
var state__27905__auto__ = (function (){var statearr_28148 = f__27904__auto__();
(statearr_28148[(6)] = c__27903__auto___29523);

return statearr_28148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
});})(__29519,c__27903__auto___29523,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async))
);


break;
case "async":
var c__27903__auto___29535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29519,c__27903__auto___29535,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async){
return (function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = ((function (__29519,c__27903__auto___29535,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async){
return (function (state_28161){
var state_val_28162 = (state_28161[(1)]);
if((state_val_28162 === (1))){
var state_28161__$1 = state_28161;
var statearr_28163_29536 = state_28161__$1;
(statearr_28163_29536[(2)] = null);

(statearr_28163_29536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (2))){
var state_28161__$1 = state_28161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28161__$1,(4),jobs);
} else {
if((state_val_28162 === (3))){
var inst_28159 = (state_28161[(2)]);
var state_28161__$1 = state_28161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28161__$1,inst_28159);
} else {
if((state_val_28162 === (4))){
var inst_28151 = (state_28161[(2)]);
var inst_28152 = async(inst_28151);
var state_28161__$1 = state_28161;
if(cljs.core.truth_(inst_28152)){
var statearr_28164_29538 = state_28161__$1;
(statearr_28164_29538[(1)] = (5));

} else {
var statearr_28165_29539 = state_28161__$1;
(statearr_28165_29539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (5))){
var state_28161__$1 = state_28161;
var statearr_28166_29540 = state_28161__$1;
(statearr_28166_29540[(2)] = null);

(statearr_28166_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (6))){
var state_28161__$1 = state_28161;
var statearr_28167_29541 = state_28161__$1;
(statearr_28167_29541[(2)] = null);

(statearr_28167_29541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28162 === (7))){
var inst_28157 = (state_28161[(2)]);
var state_28161__$1 = state_28161;
var statearr_28168_29542 = state_28161__$1;
(statearr_28168_29542[(2)] = inst_28157);

(statearr_28168_29542[(1)] = (3));


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
});})(__29519,c__27903__auto___29535,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async))
;
return ((function (__29519,switch__27832__auto__,c__27903__auto___29535,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0 = (function (){
var statearr_28169 = [null,null,null,null,null,null,null];
(statearr_28169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__);

(statearr_28169[(1)] = (1));

return statearr_28169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1 = (function (state_28161){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28161);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28170){var ex__27836__auto__ = e28170;
var statearr_28171_29543 = state_28161;
(statearr_28171_29543[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28161[(4)]))){
var statearr_28172_29544 = state_28161;
(statearr_28172_29544[(1)] = cljs.core.first((state_28161[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29545 = state_28161;
state_28161 = G__29545;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = function(state_28161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1.call(this,state_28161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__;
})()
;})(__29519,switch__27832__auto__,c__27903__auto___29535,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async))
})();
var state__27905__auto__ = (function (){var statearr_28173 = f__27904__auto__();
(statearr_28173[(6)] = c__27903__auto___29535);

return statearr_28173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
});})(__29519,c__27903__auto___29535,G__28123_29520,G__28123_29521__$1,n__5633__auto___29518,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28123_29521__$1)].join('')));

}

var G__29546 = (__29519 + (1));
__29519 = G__29546;
continue;
} else {
}
break;
}

var c__27903__auto___29547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28195){
var state_val_28196 = (state_28195[(1)]);
if((state_val_28196 === (7))){
var inst_28191 = (state_28195[(2)]);
var state_28195__$1 = state_28195;
var statearr_28197_29548 = state_28195__$1;
(statearr_28197_29548[(2)] = inst_28191);

(statearr_28197_29548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28196 === (1))){
var state_28195__$1 = state_28195;
var statearr_28198_29553 = state_28195__$1;
(statearr_28198_29553[(2)] = null);

(statearr_28198_29553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28196 === (4))){
var inst_28176 = (state_28195[(7)]);
var inst_28176__$1 = (state_28195[(2)]);
var inst_28177 = (inst_28176__$1 == null);
var state_28195__$1 = (function (){var statearr_28199 = state_28195;
(statearr_28199[(7)] = inst_28176__$1);

return statearr_28199;
})();
if(cljs.core.truth_(inst_28177)){
var statearr_28200_29554 = state_28195__$1;
(statearr_28200_29554[(1)] = (5));

} else {
var statearr_28201_29555 = state_28195__$1;
(statearr_28201_29555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28196 === (6))){
var inst_28181 = (state_28195[(8)]);
var inst_28176 = (state_28195[(7)]);
var inst_28181__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28183 = [inst_28176,inst_28181__$1];
var inst_28184 = (new cljs.core.PersistentVector(null,2,(5),inst_28182,inst_28183,null));
var state_28195__$1 = (function (){var statearr_28202 = state_28195;
(statearr_28202[(8)] = inst_28181__$1);

return statearr_28202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28195__$1,(8),jobs,inst_28184);
} else {
if((state_val_28196 === (3))){
var inst_28193 = (state_28195[(2)]);
var state_28195__$1 = state_28195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28195__$1,inst_28193);
} else {
if((state_val_28196 === (2))){
var state_28195__$1 = state_28195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28195__$1,(4),from);
} else {
if((state_val_28196 === (9))){
var inst_28188 = (state_28195[(2)]);
var state_28195__$1 = (function (){var statearr_28203 = state_28195;
(statearr_28203[(9)] = inst_28188);

return statearr_28203;
})();
var statearr_28204_29556 = state_28195__$1;
(statearr_28204_29556[(2)] = null);

(statearr_28204_29556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28196 === (5))){
var inst_28179 = cljs.core.async.close_BANG_(jobs);
var state_28195__$1 = state_28195;
var statearr_28205_29557 = state_28195__$1;
(statearr_28205_29557[(2)] = inst_28179);

(statearr_28205_29557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28196 === (8))){
var inst_28181 = (state_28195[(8)]);
var inst_28186 = (state_28195[(2)]);
var state_28195__$1 = (function (){var statearr_28206 = state_28195;
(statearr_28206[(10)] = inst_28186);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28195__$1,(9),results,inst_28181);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0 = (function (){
var statearr_28207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__);

(statearr_28207[(1)] = (1));

return statearr_28207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1 = (function (state_28195){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28195);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28208){var ex__27836__auto__ = e28208;
var statearr_28209_29558 = state_28195;
(statearr_28209_29558[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28195[(4)]))){
var statearr_28210_29559 = state_28195;
(statearr_28210_29559[(1)] = cljs.core.first((state_28195[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29560 = state_28195;
state_28195 = G__29560;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = function(state_28195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1.call(this,state_28195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28211 = f__27904__auto__();
(statearr_28211[(6)] = c__27903__auto___29547);

return statearr_28211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));


var c__27903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28249){
var state_val_28250 = (state_28249[(1)]);
if((state_val_28250 === (7))){
var inst_28245 = (state_28249[(2)]);
var state_28249__$1 = state_28249;
var statearr_28251_29561 = state_28249__$1;
(statearr_28251_29561[(2)] = inst_28245);

(statearr_28251_29561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (20))){
var state_28249__$1 = state_28249;
var statearr_28252_29562 = state_28249__$1;
(statearr_28252_29562[(2)] = null);

(statearr_28252_29562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (1))){
var state_28249__$1 = state_28249;
var statearr_28253_29563 = state_28249__$1;
(statearr_28253_29563[(2)] = null);

(statearr_28253_29563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (4))){
var inst_28214 = (state_28249[(7)]);
var inst_28214__$1 = (state_28249[(2)]);
var inst_28215 = (inst_28214__$1 == null);
var state_28249__$1 = (function (){var statearr_28254 = state_28249;
(statearr_28254[(7)] = inst_28214__$1);

return statearr_28254;
})();
if(cljs.core.truth_(inst_28215)){
var statearr_28255_29564 = state_28249__$1;
(statearr_28255_29564[(1)] = (5));

} else {
var statearr_28256_29566 = state_28249__$1;
(statearr_28256_29566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (15))){
var inst_28227 = (state_28249[(8)]);
var state_28249__$1 = state_28249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28249__$1,(18),to,inst_28227);
} else {
if((state_val_28250 === (21))){
var inst_28240 = (state_28249[(2)]);
var state_28249__$1 = state_28249;
var statearr_28257_29568 = state_28249__$1;
(statearr_28257_29568[(2)] = inst_28240);

(statearr_28257_29568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (13))){
var inst_28242 = (state_28249[(2)]);
var state_28249__$1 = (function (){var statearr_28258 = state_28249;
(statearr_28258[(9)] = inst_28242);

return statearr_28258;
})();
var statearr_28259_29569 = state_28249__$1;
(statearr_28259_29569[(2)] = null);

(statearr_28259_29569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (6))){
var inst_28214 = (state_28249[(7)]);
var state_28249__$1 = state_28249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28249__$1,(11),inst_28214);
} else {
if((state_val_28250 === (17))){
var inst_28235 = (state_28249[(2)]);
var state_28249__$1 = state_28249;
if(cljs.core.truth_(inst_28235)){
var statearr_28260_29570 = state_28249__$1;
(statearr_28260_29570[(1)] = (19));

} else {
var statearr_28261_29571 = state_28249__$1;
(statearr_28261_29571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (3))){
var inst_28247 = (state_28249[(2)]);
var state_28249__$1 = state_28249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28249__$1,inst_28247);
} else {
if((state_val_28250 === (12))){
var inst_28224 = (state_28249[(10)]);
var state_28249__$1 = state_28249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28249__$1,(14),inst_28224);
} else {
if((state_val_28250 === (2))){
var state_28249__$1 = state_28249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28249__$1,(4),results);
} else {
if((state_val_28250 === (19))){
var state_28249__$1 = state_28249;
var statearr_28262_29572 = state_28249__$1;
(statearr_28262_29572[(2)] = null);

(statearr_28262_29572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (11))){
var inst_28224 = (state_28249[(2)]);
var state_28249__$1 = (function (){var statearr_28263 = state_28249;
(statearr_28263[(10)] = inst_28224);

return statearr_28263;
})();
var statearr_28264_29573 = state_28249__$1;
(statearr_28264_29573[(2)] = null);

(statearr_28264_29573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (9))){
var state_28249__$1 = state_28249;
var statearr_28265_29574 = state_28249__$1;
(statearr_28265_29574[(2)] = null);

(statearr_28265_29574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (5))){
var state_28249__$1 = state_28249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28266_29575 = state_28249__$1;
(statearr_28266_29575[(1)] = (8));

} else {
var statearr_28267_29576 = state_28249__$1;
(statearr_28267_29576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (14))){
var inst_28229 = (state_28249[(11)]);
var inst_28227 = (state_28249[(8)]);
var inst_28227__$1 = (state_28249[(2)]);
var inst_28228 = (inst_28227__$1 == null);
var inst_28229__$1 = cljs.core.not(inst_28228);
var state_28249__$1 = (function (){var statearr_28268 = state_28249;
(statearr_28268[(11)] = inst_28229__$1);

(statearr_28268[(8)] = inst_28227__$1);

return statearr_28268;
})();
if(inst_28229__$1){
var statearr_28269_29577 = state_28249__$1;
(statearr_28269_29577[(1)] = (15));

} else {
var statearr_28270_29578 = state_28249__$1;
(statearr_28270_29578[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (16))){
var inst_28229 = (state_28249[(11)]);
var state_28249__$1 = state_28249;
var statearr_28271_29579 = state_28249__$1;
(statearr_28271_29579[(2)] = inst_28229);

(statearr_28271_29579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (10))){
var inst_28221 = (state_28249[(2)]);
var state_28249__$1 = state_28249;
var statearr_28272_29584 = state_28249__$1;
(statearr_28272_29584[(2)] = inst_28221);

(statearr_28272_29584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (18))){
var inst_28232 = (state_28249[(2)]);
var state_28249__$1 = state_28249;
var statearr_28273_29585 = state_28249__$1;
(statearr_28273_29585[(2)] = inst_28232);

(statearr_28273_29585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (8))){
var inst_28218 = cljs.core.async.close_BANG_(to);
var state_28249__$1 = state_28249;
var statearr_28274_29589 = state_28249__$1;
(statearr_28274_29589[(2)] = inst_28218);

(statearr_28274_29589[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0 = (function (){
var statearr_28275 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__);

(statearr_28275[(1)] = (1));

return statearr_28275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1 = (function (state_28249){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28249);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28276){var ex__27836__auto__ = e28276;
var statearr_28277_29590 = state_28249;
(statearr_28277_29590[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28249[(4)]))){
var statearr_28278_29594 = state_28249;
(statearr_28278_29594[(1)] = cljs.core.first((state_28249[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29595 = state_28249;
state_28249 = G__29595;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__ = function(state_28249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1.call(this,state_28249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27833__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28279 = f__27904__auto__();
(statearr_28279[(6)] = c__27903__auto__);

return statearr_28279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));

return c__27903__auto__;
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
var G__28281 = arguments.length;
switch (G__28281) {
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
var G__28283 = arguments.length;
switch (G__28283) {
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
var G__28285 = arguments.length;
switch (G__28285) {
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
var c__27903__auto___29612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28311){
var state_val_28312 = (state_28311[(1)]);
if((state_val_28312 === (7))){
var inst_28307 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28313_29613 = state_28311__$1;
(statearr_28313_29613[(2)] = inst_28307);

(statearr_28313_29613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (1))){
var state_28311__$1 = state_28311;
var statearr_28314_29614 = state_28311__$1;
(statearr_28314_29614[(2)] = null);

(statearr_28314_29614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (4))){
var inst_28288 = (state_28311[(7)]);
var inst_28288__$1 = (state_28311[(2)]);
var inst_28289 = (inst_28288__$1 == null);
var state_28311__$1 = (function (){var statearr_28315 = state_28311;
(statearr_28315[(7)] = inst_28288__$1);

return statearr_28315;
})();
if(cljs.core.truth_(inst_28289)){
var statearr_28316_29618 = state_28311__$1;
(statearr_28316_29618[(1)] = (5));

} else {
var statearr_28317_29619 = state_28311__$1;
(statearr_28317_29619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (13))){
var state_28311__$1 = state_28311;
var statearr_28318_29620 = state_28311__$1;
(statearr_28318_29620[(2)] = null);

(statearr_28318_29620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (6))){
var inst_28288 = (state_28311[(7)]);
var inst_28294 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28288) : p.call(null,inst_28288));
var state_28311__$1 = state_28311;
if(cljs.core.truth_(inst_28294)){
var statearr_28319_29624 = state_28311__$1;
(statearr_28319_29624[(1)] = (9));

} else {
var statearr_28320_29625 = state_28311__$1;
(statearr_28320_29625[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (3))){
var inst_28309 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28311__$1,inst_28309);
} else {
if((state_val_28312 === (12))){
var state_28311__$1 = state_28311;
var statearr_28321_29626 = state_28311__$1;
(statearr_28321_29626[(2)] = null);

(statearr_28321_29626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (2))){
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28311__$1,(4),ch);
} else {
if((state_val_28312 === (11))){
var inst_28288 = (state_28311[(7)]);
var inst_28298 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28311__$1,(8),inst_28298,inst_28288);
} else {
if((state_val_28312 === (9))){
var state_28311__$1 = state_28311;
var statearr_28322_29630 = state_28311__$1;
(statearr_28322_29630[(2)] = tc);

(statearr_28322_29630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (5))){
var inst_28291 = cljs.core.async.close_BANG_(tc);
var inst_28292 = cljs.core.async.close_BANG_(fc);
var state_28311__$1 = (function (){var statearr_28323 = state_28311;
(statearr_28323[(8)] = inst_28291);

return statearr_28323;
})();
var statearr_28324_29631 = state_28311__$1;
(statearr_28324_29631[(2)] = inst_28292);

(statearr_28324_29631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (14))){
var inst_28305 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28325_29632 = state_28311__$1;
(statearr_28325_29632[(2)] = inst_28305);

(statearr_28325_29632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (10))){
var state_28311__$1 = state_28311;
var statearr_28326_29633 = state_28311__$1;
(statearr_28326_29633[(2)] = fc);

(statearr_28326_29633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (8))){
var inst_28300 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
if(cljs.core.truth_(inst_28300)){
var statearr_28327_29634 = state_28311__$1;
(statearr_28327_29634[(1)] = (12));

} else {
var statearr_28328_29635 = state_28311__$1;
(statearr_28328_29635[(1)] = (13));

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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_28329 = [null,null,null,null,null,null,null,null,null];
(statearr_28329[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_28329[(1)] = (1));

return statearr_28329;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_28311){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28311);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28330){var ex__27836__auto__ = e28330;
var statearr_28331_29637 = state_28311;
(statearr_28331_29637[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28311[(4)]))){
var statearr_28332_29638 = state_28311;
(statearr_28332_29638[(1)] = cljs.core.first((state_28311[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29639 = state_28311;
state_28311 = G__29639;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_28311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_28311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28333 = f__27904__auto__();
(statearr_28333[(6)] = c__27903__auto___29612);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
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
var c__27903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28355){
var state_val_28356 = (state_28355[(1)]);
if((state_val_28356 === (7))){
var inst_28351 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28357_29640 = state_28355__$1;
(statearr_28357_29640[(2)] = inst_28351);

(statearr_28357_29640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (1))){
var inst_28334 = init;
var inst_28335 = inst_28334;
var state_28355__$1 = (function (){var statearr_28358 = state_28355;
(statearr_28358[(7)] = inst_28335);

return statearr_28358;
})();
var statearr_28359_29641 = state_28355__$1;
(statearr_28359_29641[(2)] = null);

(statearr_28359_29641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (4))){
var inst_28338 = (state_28355[(8)]);
var inst_28338__$1 = (state_28355[(2)]);
var inst_28339 = (inst_28338__$1 == null);
var state_28355__$1 = (function (){var statearr_28360 = state_28355;
(statearr_28360[(8)] = inst_28338__$1);

return statearr_28360;
})();
if(cljs.core.truth_(inst_28339)){
var statearr_28361_29642 = state_28355__$1;
(statearr_28361_29642[(1)] = (5));

} else {
var statearr_28362_29643 = state_28355__$1;
(statearr_28362_29643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (6))){
var inst_28335 = (state_28355[(7)]);
var inst_28342 = (state_28355[(9)]);
var inst_28338 = (state_28355[(8)]);
var inst_28342__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28335,inst_28338) : f.call(null,inst_28335,inst_28338));
var inst_28343 = cljs.core.reduced_QMARK_(inst_28342__$1);
var state_28355__$1 = (function (){var statearr_28363 = state_28355;
(statearr_28363[(9)] = inst_28342__$1);

return statearr_28363;
})();
if(inst_28343){
var statearr_28364_29644 = state_28355__$1;
(statearr_28364_29644[(1)] = (8));

} else {
var statearr_28365_29645 = state_28355__$1;
(statearr_28365_29645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (3))){
var inst_28353 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28355__$1,inst_28353);
} else {
if((state_val_28356 === (2))){
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28355__$1,(4),ch);
} else {
if((state_val_28356 === (9))){
var inst_28342 = (state_28355[(9)]);
var inst_28335 = inst_28342;
var state_28355__$1 = (function (){var statearr_28366 = state_28355;
(statearr_28366[(7)] = inst_28335);

return statearr_28366;
})();
var statearr_28367_29646 = state_28355__$1;
(statearr_28367_29646[(2)] = null);

(statearr_28367_29646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (5))){
var inst_28335 = (state_28355[(7)]);
var state_28355__$1 = state_28355;
var statearr_28368_29647 = state_28355__$1;
(statearr_28368_29647[(2)] = inst_28335);

(statearr_28368_29647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (10))){
var inst_28349 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28369_29648 = state_28355__$1;
(statearr_28369_29648[(2)] = inst_28349);

(statearr_28369_29648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (8))){
var inst_28342 = (state_28355[(9)]);
var inst_28345 = cljs.core.deref(inst_28342);
var state_28355__$1 = state_28355;
var statearr_28370_29649 = state_28355__$1;
(statearr_28370_29649[(2)] = inst_28345);

(statearr_28370_29649[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27833__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27833__auto____0 = (function (){
var statearr_28371 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28371[(0)] = cljs$core$async$reduce_$_state_machine__27833__auto__);

(statearr_28371[(1)] = (1));

return statearr_28371;
});
var cljs$core$async$reduce_$_state_machine__27833__auto____1 = (function (state_28355){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28355);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28372){var ex__27836__auto__ = e28372;
var statearr_28373_29650 = state_28355;
(statearr_28373_29650[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28355[(4)]))){
var statearr_28374_29651 = state_28355;
(statearr_28374_29651[(1)] = cljs.core.first((state_28355[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29652 = state_28355;
state_28355 = G__29652;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27833__auto__ = function(state_28355){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27833__auto____1.call(this,state_28355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27833__auto____0;
cljs$core$async$reduce_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27833__auto____1;
return cljs$core$async$reduce_$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28375 = f__27904__auto__();
(statearr_28375[(6)] = c__27903__auto__);

return statearr_28375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));

return c__27903__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28381){
var state_val_28382 = (state_28381[(1)]);
if((state_val_28382 === (1))){
var inst_28376 = cljs.core.async.reduce(f__$1,init,ch);
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28381__$1,(2),inst_28376);
} else {
if((state_val_28382 === (2))){
var inst_28378 = (state_28381[(2)]);
var inst_28379 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28378) : f__$1.call(null,inst_28378));
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28381__$1,inst_28379);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27833__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27833__auto____0 = (function (){
var statearr_28383 = [null,null,null,null,null,null,null];
(statearr_28383[(0)] = cljs$core$async$transduce_$_state_machine__27833__auto__);

(statearr_28383[(1)] = (1));

return statearr_28383;
});
var cljs$core$async$transduce_$_state_machine__27833__auto____1 = (function (state_28381){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28381);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28384){var ex__27836__auto__ = e28384;
var statearr_28385_29653 = state_28381;
(statearr_28385_29653[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28381[(4)]))){
var statearr_28386_29654 = state_28381;
(statearr_28386_29654[(1)] = cljs.core.first((state_28381[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29656 = state_28381;
state_28381 = G__29656;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27833__auto__ = function(state_28381){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27833__auto____1.call(this,state_28381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27833__auto____0;
cljs$core$async$transduce_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27833__auto____1;
return cljs$core$async$transduce_$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28387 = f__27904__auto__();
(statearr_28387[(6)] = c__27903__auto__);

return statearr_28387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));

return c__27903__auto__;
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
var G__28389 = arguments.length;
switch (G__28389) {
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
var c__27903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28414){
var state_val_28415 = (state_28414[(1)]);
if((state_val_28415 === (7))){
var inst_28396 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
var statearr_28416_29663 = state_28414__$1;
(statearr_28416_29663[(2)] = inst_28396);

(statearr_28416_29663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (1))){
var inst_28390 = cljs.core.seq(coll);
var inst_28391 = inst_28390;
var state_28414__$1 = (function (){var statearr_28417 = state_28414;
(statearr_28417[(7)] = inst_28391);

return statearr_28417;
})();
var statearr_28418_29664 = state_28414__$1;
(statearr_28418_29664[(2)] = null);

(statearr_28418_29664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (4))){
var inst_28391 = (state_28414[(7)]);
var inst_28394 = cljs.core.first(inst_28391);
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28414__$1,(7),ch,inst_28394);
} else {
if((state_val_28415 === (13))){
var inst_28408 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
var statearr_28419_29666 = state_28414__$1;
(statearr_28419_29666[(2)] = inst_28408);

(statearr_28419_29666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (6))){
var inst_28399 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
if(cljs.core.truth_(inst_28399)){
var statearr_28420_29668 = state_28414__$1;
(statearr_28420_29668[(1)] = (8));

} else {
var statearr_28421_29669 = state_28414__$1;
(statearr_28421_29669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (3))){
var inst_28412 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28414__$1,inst_28412);
} else {
if((state_val_28415 === (12))){
var state_28414__$1 = state_28414;
var statearr_28422_29670 = state_28414__$1;
(statearr_28422_29670[(2)] = null);

(statearr_28422_29670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (2))){
var inst_28391 = (state_28414[(7)]);
var state_28414__$1 = state_28414;
if(cljs.core.truth_(inst_28391)){
var statearr_28423_29671 = state_28414__$1;
(statearr_28423_29671[(1)] = (4));

} else {
var statearr_28424_29672 = state_28414__$1;
(statearr_28424_29672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (11))){
var inst_28405 = cljs.core.async.close_BANG_(ch);
var state_28414__$1 = state_28414;
var statearr_28425_29673 = state_28414__$1;
(statearr_28425_29673[(2)] = inst_28405);

(statearr_28425_29673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (9))){
var state_28414__$1 = state_28414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28426_29674 = state_28414__$1;
(statearr_28426_29674[(1)] = (11));

} else {
var statearr_28427_29675 = state_28414__$1;
(statearr_28427_29675[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (5))){
var inst_28391 = (state_28414[(7)]);
var state_28414__$1 = state_28414;
var statearr_28428_29676 = state_28414__$1;
(statearr_28428_29676[(2)] = inst_28391);

(statearr_28428_29676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (10))){
var inst_28410 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
var statearr_28429_29677 = state_28414__$1;
(statearr_28429_29677[(2)] = inst_28410);

(statearr_28429_29677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (8))){
var inst_28391 = (state_28414[(7)]);
var inst_28401 = cljs.core.next(inst_28391);
var inst_28391__$1 = inst_28401;
var state_28414__$1 = (function (){var statearr_28430 = state_28414;
(statearr_28430[(7)] = inst_28391__$1);

return statearr_28430;
})();
var statearr_28431_29678 = state_28414__$1;
(statearr_28431_29678[(2)] = null);

(statearr_28431_29678[(1)] = (2));


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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_28432 = [null,null,null,null,null,null,null,null];
(statearr_28432[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_28432[(1)] = (1));

return statearr_28432;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_28414){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28414);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28433){var ex__27836__auto__ = e28433;
var statearr_28434_29680 = state_28414;
(statearr_28434_29680[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28414[(4)]))){
var statearr_28435_29684 = state_28414;
(statearr_28435_29684[(1)] = cljs.core.first((state_28414[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29685 = state_28414;
state_28414 = G__29685;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_28414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_28414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28436 = f__27904__auto__();
(statearr_28436[(6)] = c__27903__auto__);

return statearr_28436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));

return c__27903__auto__;
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
var G__28438 = arguments.length;
switch (G__28438) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_29691 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_29691(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29699 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_29699(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29706 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_29706(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29707 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_29707(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28439 = (function (ch,cs,meta28440){
this.ch = ch;
this.cs = cs;
this.meta28440 = meta28440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28441,meta28440__$1){
var self__ = this;
var _28441__$1 = this;
return (new cljs.core.async.t_cljs$core$async28439(self__.ch,self__.cs,meta28440__$1));
}));

(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28441){
var self__ = this;
var _28441__$1 = this;
return self__.meta28440;
}));

(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28439.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28440","meta28440",-2065156271,null)], null);
}));

(cljs.core.async.t_cljs$core$async28439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28439");

(cljs.core.async.t_cljs$core$async28439.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28439.
 */
cljs.core.async.__GT_t_cljs$core$async28439 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28439(ch__$1,cs__$1,meta28440){
return (new cljs.core.async.t_cljs$core$async28439(ch__$1,cs__$1,meta28440));
});

}

return (new cljs.core.async.t_cljs$core$async28439(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27903__auto___29714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28574){
var state_val_28575 = (state_28574[(1)]);
if((state_val_28575 === (7))){
var inst_28570 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28576_29715 = state_28574__$1;
(statearr_28576_29715[(2)] = inst_28570);

(statearr_28576_29715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (20))){
var inst_28475 = (state_28574[(7)]);
var inst_28487 = cljs.core.first(inst_28475);
var inst_28488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28487,(0),null);
var inst_28489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28487,(1),null);
var state_28574__$1 = (function (){var statearr_28577 = state_28574;
(statearr_28577[(8)] = inst_28488);

return statearr_28577;
})();
if(cljs.core.truth_(inst_28489)){
var statearr_28578_29716 = state_28574__$1;
(statearr_28578_29716[(1)] = (22));

} else {
var statearr_28579_29717 = state_28574__$1;
(statearr_28579_29717[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (27))){
var inst_28444 = (state_28574[(9)]);
var inst_28524 = (state_28574[(10)]);
var inst_28519 = (state_28574[(11)]);
var inst_28517 = (state_28574[(12)]);
var inst_28524__$1 = cljs.core._nth(inst_28517,inst_28519);
var inst_28525 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28524__$1,inst_28444,done);
var state_28574__$1 = (function (){var statearr_28580 = state_28574;
(statearr_28580[(10)] = inst_28524__$1);

return statearr_28580;
})();
if(cljs.core.truth_(inst_28525)){
var statearr_28581_29718 = state_28574__$1;
(statearr_28581_29718[(1)] = (30));

} else {
var statearr_28582_29719 = state_28574__$1;
(statearr_28582_29719[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (1))){
var state_28574__$1 = state_28574;
var statearr_28583_29720 = state_28574__$1;
(statearr_28583_29720[(2)] = null);

(statearr_28583_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (24))){
var inst_28475 = (state_28574[(7)]);
var inst_28494 = (state_28574[(2)]);
var inst_28495 = cljs.core.next(inst_28475);
var inst_28453 = inst_28495;
var inst_28454 = null;
var inst_28455 = (0);
var inst_28456 = (0);
var state_28574__$1 = (function (){var statearr_28584 = state_28574;
(statearr_28584[(13)] = inst_28455);

(statearr_28584[(14)] = inst_28494);

(statearr_28584[(15)] = inst_28454);

(statearr_28584[(16)] = inst_28456);

(statearr_28584[(17)] = inst_28453);

return statearr_28584;
})();
var statearr_28585_29721 = state_28574__$1;
(statearr_28585_29721[(2)] = null);

(statearr_28585_29721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (39))){
var state_28574__$1 = state_28574;
var statearr_28589_29722 = state_28574__$1;
(statearr_28589_29722[(2)] = null);

(statearr_28589_29722[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (4))){
var inst_28444 = (state_28574[(9)]);
var inst_28444__$1 = (state_28574[(2)]);
var inst_28445 = (inst_28444__$1 == null);
var state_28574__$1 = (function (){var statearr_28590 = state_28574;
(statearr_28590[(9)] = inst_28444__$1);

return statearr_28590;
})();
if(cljs.core.truth_(inst_28445)){
var statearr_28591_29723 = state_28574__$1;
(statearr_28591_29723[(1)] = (5));

} else {
var statearr_28592_29724 = state_28574__$1;
(statearr_28592_29724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (15))){
var inst_28455 = (state_28574[(13)]);
var inst_28454 = (state_28574[(15)]);
var inst_28456 = (state_28574[(16)]);
var inst_28453 = (state_28574[(17)]);
var inst_28471 = (state_28574[(2)]);
var inst_28472 = (inst_28456 + (1));
var tmp28586 = inst_28455;
var tmp28587 = inst_28454;
var tmp28588 = inst_28453;
var inst_28453__$1 = tmp28588;
var inst_28454__$1 = tmp28587;
var inst_28455__$1 = tmp28586;
var inst_28456__$1 = inst_28472;
var state_28574__$1 = (function (){var statearr_28593 = state_28574;
(statearr_28593[(13)] = inst_28455__$1);

(statearr_28593[(18)] = inst_28471);

(statearr_28593[(15)] = inst_28454__$1);

(statearr_28593[(16)] = inst_28456__$1);

(statearr_28593[(17)] = inst_28453__$1);

return statearr_28593;
})();
var statearr_28594_29731 = state_28574__$1;
(statearr_28594_29731[(2)] = null);

(statearr_28594_29731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (21))){
var inst_28498 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28598_29732 = state_28574__$1;
(statearr_28598_29732[(2)] = inst_28498);

(statearr_28598_29732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (31))){
var inst_28524 = (state_28574[(10)]);
var inst_28528 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28524);
var state_28574__$1 = state_28574;
var statearr_28599_29733 = state_28574__$1;
(statearr_28599_29733[(2)] = inst_28528);

(statearr_28599_29733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (32))){
var inst_28518 = (state_28574[(19)]);
var inst_28519 = (state_28574[(11)]);
var inst_28517 = (state_28574[(12)]);
var inst_28516 = (state_28574[(20)]);
var inst_28530 = (state_28574[(2)]);
var inst_28531 = (inst_28519 + (1));
var tmp28595 = inst_28518;
var tmp28596 = inst_28517;
var tmp28597 = inst_28516;
var inst_28516__$1 = tmp28597;
var inst_28517__$1 = tmp28596;
var inst_28518__$1 = tmp28595;
var inst_28519__$1 = inst_28531;
var state_28574__$1 = (function (){var statearr_28600 = state_28574;
(statearr_28600[(21)] = inst_28530);

(statearr_28600[(19)] = inst_28518__$1);

(statearr_28600[(11)] = inst_28519__$1);

(statearr_28600[(12)] = inst_28517__$1);

(statearr_28600[(20)] = inst_28516__$1);

return statearr_28600;
})();
var statearr_28601_29734 = state_28574__$1;
(statearr_28601_29734[(2)] = null);

(statearr_28601_29734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (40))){
var inst_28543 = (state_28574[(22)]);
var inst_28547 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28543);
var state_28574__$1 = state_28574;
var statearr_28602_29735 = state_28574__$1;
(statearr_28602_29735[(2)] = inst_28547);

(statearr_28602_29735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (33))){
var inst_28534 = (state_28574[(23)]);
var inst_28536 = cljs.core.chunked_seq_QMARK_(inst_28534);
var state_28574__$1 = state_28574;
if(inst_28536){
var statearr_28603_29736 = state_28574__$1;
(statearr_28603_29736[(1)] = (36));

} else {
var statearr_28604_29737 = state_28574__$1;
(statearr_28604_29737[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (13))){
var inst_28465 = (state_28574[(24)]);
var inst_28468 = cljs.core.async.close_BANG_(inst_28465);
var state_28574__$1 = state_28574;
var statearr_28605_29738 = state_28574__$1;
(statearr_28605_29738[(2)] = inst_28468);

(statearr_28605_29738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (22))){
var inst_28488 = (state_28574[(8)]);
var inst_28491 = cljs.core.async.close_BANG_(inst_28488);
var state_28574__$1 = state_28574;
var statearr_28606_29739 = state_28574__$1;
(statearr_28606_29739[(2)] = inst_28491);

(statearr_28606_29739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (36))){
var inst_28534 = (state_28574[(23)]);
var inst_28538 = cljs.core.chunk_first(inst_28534);
var inst_28539 = cljs.core.chunk_rest(inst_28534);
var inst_28540 = cljs.core.count(inst_28538);
var inst_28516 = inst_28539;
var inst_28517 = inst_28538;
var inst_28518 = inst_28540;
var inst_28519 = (0);
var state_28574__$1 = (function (){var statearr_28607 = state_28574;
(statearr_28607[(19)] = inst_28518);

(statearr_28607[(11)] = inst_28519);

(statearr_28607[(12)] = inst_28517);

(statearr_28607[(20)] = inst_28516);

return statearr_28607;
})();
var statearr_28608_29740 = state_28574__$1;
(statearr_28608_29740[(2)] = null);

(statearr_28608_29740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (41))){
var inst_28534 = (state_28574[(23)]);
var inst_28549 = (state_28574[(2)]);
var inst_28550 = cljs.core.next(inst_28534);
var inst_28516 = inst_28550;
var inst_28517 = null;
var inst_28518 = (0);
var inst_28519 = (0);
var state_28574__$1 = (function (){var statearr_28609 = state_28574;
(statearr_28609[(19)] = inst_28518);

(statearr_28609[(25)] = inst_28549);

(statearr_28609[(11)] = inst_28519);

(statearr_28609[(12)] = inst_28517);

(statearr_28609[(20)] = inst_28516);

return statearr_28609;
})();
var statearr_28610_29747 = state_28574__$1;
(statearr_28610_29747[(2)] = null);

(statearr_28610_29747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (43))){
var state_28574__$1 = state_28574;
var statearr_28611_29748 = state_28574__$1;
(statearr_28611_29748[(2)] = null);

(statearr_28611_29748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (29))){
var inst_28558 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28612_29749 = state_28574__$1;
(statearr_28612_29749[(2)] = inst_28558);

(statearr_28612_29749[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (44))){
var inst_28567 = (state_28574[(2)]);
var state_28574__$1 = (function (){var statearr_28613 = state_28574;
(statearr_28613[(26)] = inst_28567);

return statearr_28613;
})();
var statearr_28614_29750 = state_28574__$1;
(statearr_28614_29750[(2)] = null);

(statearr_28614_29750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (6))){
var inst_28508 = (state_28574[(27)]);
var inst_28507 = cljs.core.deref(cs);
var inst_28508__$1 = cljs.core.keys(inst_28507);
var inst_28509 = cljs.core.count(inst_28508__$1);
var inst_28510 = cljs.core.reset_BANG_(dctr,inst_28509);
var inst_28515 = cljs.core.seq(inst_28508__$1);
var inst_28516 = inst_28515;
var inst_28517 = null;
var inst_28518 = (0);
var inst_28519 = (0);
var state_28574__$1 = (function (){var statearr_28615 = state_28574;
(statearr_28615[(27)] = inst_28508__$1);

(statearr_28615[(19)] = inst_28518);

(statearr_28615[(28)] = inst_28510);

(statearr_28615[(11)] = inst_28519);

(statearr_28615[(12)] = inst_28517);

(statearr_28615[(20)] = inst_28516);

return statearr_28615;
})();
var statearr_28616_29751 = state_28574__$1;
(statearr_28616_29751[(2)] = null);

(statearr_28616_29751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (28))){
var inst_28534 = (state_28574[(23)]);
var inst_28516 = (state_28574[(20)]);
var inst_28534__$1 = cljs.core.seq(inst_28516);
var state_28574__$1 = (function (){var statearr_28617 = state_28574;
(statearr_28617[(23)] = inst_28534__$1);

return statearr_28617;
})();
if(inst_28534__$1){
var statearr_28618_29752 = state_28574__$1;
(statearr_28618_29752[(1)] = (33));

} else {
var statearr_28619_29753 = state_28574__$1;
(statearr_28619_29753[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (25))){
var inst_28518 = (state_28574[(19)]);
var inst_28519 = (state_28574[(11)]);
var inst_28521 = (inst_28519 < inst_28518);
var inst_28522 = inst_28521;
var state_28574__$1 = state_28574;
if(cljs.core.truth_(inst_28522)){
var statearr_28620_29754 = state_28574__$1;
(statearr_28620_29754[(1)] = (27));

} else {
var statearr_28621_29755 = state_28574__$1;
(statearr_28621_29755[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (34))){
var state_28574__$1 = state_28574;
var statearr_28622_29756 = state_28574__$1;
(statearr_28622_29756[(2)] = null);

(statearr_28622_29756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (17))){
var state_28574__$1 = state_28574;
var statearr_28623_29757 = state_28574__$1;
(statearr_28623_29757[(2)] = null);

(statearr_28623_29757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (3))){
var inst_28572 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28574__$1,inst_28572);
} else {
if((state_val_28575 === (12))){
var inst_28503 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28624_29758 = state_28574__$1;
(statearr_28624_29758[(2)] = inst_28503);

(statearr_28624_29758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (2))){
var state_28574__$1 = state_28574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28574__$1,(4),ch);
} else {
if((state_val_28575 === (23))){
var state_28574__$1 = state_28574;
var statearr_28625_29759 = state_28574__$1;
(statearr_28625_29759[(2)] = null);

(statearr_28625_29759[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (35))){
var inst_28556 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28626_29760 = state_28574__$1;
(statearr_28626_29760[(2)] = inst_28556);

(statearr_28626_29760[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (19))){
var inst_28475 = (state_28574[(7)]);
var inst_28479 = cljs.core.chunk_first(inst_28475);
var inst_28480 = cljs.core.chunk_rest(inst_28475);
var inst_28481 = cljs.core.count(inst_28479);
var inst_28453 = inst_28480;
var inst_28454 = inst_28479;
var inst_28455 = inst_28481;
var inst_28456 = (0);
var state_28574__$1 = (function (){var statearr_28627 = state_28574;
(statearr_28627[(13)] = inst_28455);

(statearr_28627[(15)] = inst_28454);

(statearr_28627[(16)] = inst_28456);

(statearr_28627[(17)] = inst_28453);

return statearr_28627;
})();
var statearr_28628_29761 = state_28574__$1;
(statearr_28628_29761[(2)] = null);

(statearr_28628_29761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (11))){
var inst_28475 = (state_28574[(7)]);
var inst_28453 = (state_28574[(17)]);
var inst_28475__$1 = cljs.core.seq(inst_28453);
var state_28574__$1 = (function (){var statearr_28629 = state_28574;
(statearr_28629[(7)] = inst_28475__$1);

return statearr_28629;
})();
if(inst_28475__$1){
var statearr_28630_29762 = state_28574__$1;
(statearr_28630_29762[(1)] = (16));

} else {
var statearr_28631_29763 = state_28574__$1;
(statearr_28631_29763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (9))){
var inst_28505 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28632_29764 = state_28574__$1;
(statearr_28632_29764[(2)] = inst_28505);

(statearr_28632_29764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (5))){
var inst_28451 = cljs.core.deref(cs);
var inst_28452 = cljs.core.seq(inst_28451);
var inst_28453 = inst_28452;
var inst_28454 = null;
var inst_28455 = (0);
var inst_28456 = (0);
var state_28574__$1 = (function (){var statearr_28633 = state_28574;
(statearr_28633[(13)] = inst_28455);

(statearr_28633[(15)] = inst_28454);

(statearr_28633[(16)] = inst_28456);

(statearr_28633[(17)] = inst_28453);

return statearr_28633;
})();
var statearr_28634_29765 = state_28574__$1;
(statearr_28634_29765[(2)] = null);

(statearr_28634_29765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (14))){
var state_28574__$1 = state_28574;
var statearr_28635_29766 = state_28574__$1;
(statearr_28635_29766[(2)] = null);

(statearr_28635_29766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (45))){
var inst_28564 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28636_29767 = state_28574__$1;
(statearr_28636_29767[(2)] = inst_28564);

(statearr_28636_29767[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (26))){
var inst_28508 = (state_28574[(27)]);
var inst_28560 = (state_28574[(2)]);
var inst_28561 = cljs.core.seq(inst_28508);
var state_28574__$1 = (function (){var statearr_28637 = state_28574;
(statearr_28637[(29)] = inst_28560);

return statearr_28637;
})();
if(inst_28561){
var statearr_28638_29768 = state_28574__$1;
(statearr_28638_29768[(1)] = (42));

} else {
var statearr_28639_29769 = state_28574__$1;
(statearr_28639_29769[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (16))){
var inst_28475 = (state_28574[(7)]);
var inst_28477 = cljs.core.chunked_seq_QMARK_(inst_28475);
var state_28574__$1 = state_28574;
if(inst_28477){
var statearr_28640_29770 = state_28574__$1;
(statearr_28640_29770[(1)] = (19));

} else {
var statearr_28641_29771 = state_28574__$1;
(statearr_28641_29771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (38))){
var inst_28553 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28642_29772 = state_28574__$1;
(statearr_28642_29772[(2)] = inst_28553);

(statearr_28642_29772[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (30))){
var state_28574__$1 = state_28574;
var statearr_28643_29773 = state_28574__$1;
(statearr_28643_29773[(2)] = null);

(statearr_28643_29773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (10))){
var inst_28454 = (state_28574[(15)]);
var inst_28456 = (state_28574[(16)]);
var inst_28464 = cljs.core._nth(inst_28454,inst_28456);
var inst_28465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28464,(0),null);
var inst_28466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28464,(1),null);
var state_28574__$1 = (function (){var statearr_28644 = state_28574;
(statearr_28644[(24)] = inst_28465);

return statearr_28644;
})();
if(cljs.core.truth_(inst_28466)){
var statearr_28645_29775 = state_28574__$1;
(statearr_28645_29775[(1)] = (13));

} else {
var statearr_28646_29776 = state_28574__$1;
(statearr_28646_29776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (18))){
var inst_28501 = (state_28574[(2)]);
var state_28574__$1 = state_28574;
var statearr_28647_29778 = state_28574__$1;
(statearr_28647_29778[(2)] = inst_28501);

(statearr_28647_29778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (42))){
var state_28574__$1 = state_28574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28574__$1,(45),dchan);
} else {
if((state_val_28575 === (37))){
var inst_28534 = (state_28574[(23)]);
var inst_28444 = (state_28574[(9)]);
var inst_28543 = (state_28574[(22)]);
var inst_28543__$1 = cljs.core.first(inst_28534);
var inst_28544 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28543__$1,inst_28444,done);
var state_28574__$1 = (function (){var statearr_28648 = state_28574;
(statearr_28648[(22)] = inst_28543__$1);

return statearr_28648;
})();
if(cljs.core.truth_(inst_28544)){
var statearr_28649_29782 = state_28574__$1;
(statearr_28649_29782[(1)] = (39));

} else {
var statearr_28650_29783 = state_28574__$1;
(statearr_28650_29783[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28575 === (8))){
var inst_28455 = (state_28574[(13)]);
var inst_28456 = (state_28574[(16)]);
var inst_28458 = (inst_28456 < inst_28455);
var inst_28459 = inst_28458;
var state_28574__$1 = state_28574;
if(cljs.core.truth_(inst_28459)){
var statearr_28651_29784 = state_28574__$1;
(statearr_28651_29784[(1)] = (10));

} else {
var statearr_28652_29785 = state_28574__$1;
(statearr_28652_29785[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27833__auto__ = null;
var cljs$core$async$mult_$_state_machine__27833__auto____0 = (function (){
var statearr_28653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28653[(0)] = cljs$core$async$mult_$_state_machine__27833__auto__);

(statearr_28653[(1)] = (1));

return statearr_28653;
});
var cljs$core$async$mult_$_state_machine__27833__auto____1 = (function (state_28574){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28574);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28654){var ex__27836__auto__ = e28654;
var statearr_28655_29786 = state_28574;
(statearr_28655_29786[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28574[(4)]))){
var statearr_28656_29787 = state_28574;
(statearr_28656_29787[(1)] = cljs.core.first((state_28574[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29788 = state_28574;
state_28574 = G__29788;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27833__auto__ = function(state_28574){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27833__auto____1.call(this,state_28574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27833__auto____0;
cljs$core$async$mult_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27833__auto____1;
return cljs$core$async$mult_$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28657 = f__27904__auto__();
(statearr_28657[(6)] = c__27903__auto___29714);

return statearr_28657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
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
var G__28659 = arguments.length;
switch (G__28659) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_29791 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_29791(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29793 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_29793(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29794 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29794(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29797 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_29797(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29798 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29798(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29799 = arguments.length;
var i__5767__auto___29800 = (0);
while(true){
if((i__5767__auto___29800 < len__5766__auto___29799)){
args__5772__auto__.push((arguments[i__5767__auto___29800]));

var G__29801 = (i__5767__auto___29800 + (1));
i__5767__auto___29800 = G__29801;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28664){
var map__28665 = p__28664;
var map__28665__$1 = cljs.core.__destructure_map(map__28665);
var opts = map__28665__$1;
var statearr_28666_29802 = state;
(statearr_28666_29802[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28667_29803 = state;
(statearr_28667_29803[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_28668_29804 = state;
(statearr_28668_29804[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28660){
var G__28661 = cljs.core.first(seq28660);
var seq28660__$1 = cljs.core.next(seq28660);
var G__28662 = cljs.core.first(seq28660__$1);
var seq28660__$2 = cljs.core.next(seq28660__$1);
var G__28663 = cljs.core.first(seq28660__$2);
var seq28660__$3 = cljs.core.next(seq28660__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28661,G__28662,G__28663,seq28660__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28669 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28670){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28670 = meta28670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28671,meta28670__$1){
var self__ = this;
var _28671__$1 = this;
return (new cljs.core.async.t_cljs$core$async28669(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28670__$1));
}));

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28671){
var self__ = this;
var _28671__$1 = this;
return self__.meta28670;
}));

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28670","meta28670",-490640502,null)], null);
}));

(cljs.core.async.t_cljs$core$async28669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28669");

(cljs.core.async.t_cljs$core$async28669.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28669.
 */
cljs.core.async.__GT_t_cljs$core$async28669 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28669(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28670){
return (new cljs.core.async.t_cljs$core$async28669(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28670));
});

}

return (new cljs.core.async.t_cljs$core$async28669(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27903__auto___29807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28739){
var state_val_28740 = (state_28739[(1)]);
if((state_val_28740 === (7))){
var inst_28699 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28699)){
var statearr_28741_29809 = state_28739__$1;
(statearr_28741_29809[(1)] = (8));

} else {
var statearr_28742_29810 = state_28739__$1;
(statearr_28742_29810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (20))){
var inst_28692 = (state_28739[(7)]);
var state_28739__$1 = state_28739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28739__$1,(23),out,inst_28692);
} else {
if((state_val_28740 === (1))){
var inst_28675 = calc_state();
var inst_28676 = cljs.core.__destructure_map(inst_28675);
var inst_28677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28676,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28676,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28676,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28680 = inst_28675;
var state_28739__$1 = (function (){var statearr_28743 = state_28739;
(statearr_28743[(8)] = inst_28677);

(statearr_28743[(9)] = inst_28680);

(statearr_28743[(10)] = inst_28679);

(statearr_28743[(11)] = inst_28678);

return statearr_28743;
})();
var statearr_28744_29811 = state_28739__$1;
(statearr_28744_29811[(2)] = null);

(statearr_28744_29811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (24))){
var inst_28683 = (state_28739[(12)]);
var inst_28680 = inst_28683;
var state_28739__$1 = (function (){var statearr_28745 = state_28739;
(statearr_28745[(9)] = inst_28680);

return statearr_28745;
})();
var statearr_28746_29812 = state_28739__$1;
(statearr_28746_29812[(2)] = null);

(statearr_28746_29812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (4))){
var inst_28694 = (state_28739[(13)]);
var inst_28692 = (state_28739[(7)]);
var inst_28691 = (state_28739[(2)]);
var inst_28692__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28691,(0),null);
var inst_28693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28691,(1),null);
var inst_28694__$1 = (inst_28692__$1 == null);
var state_28739__$1 = (function (){var statearr_28747 = state_28739;
(statearr_28747[(13)] = inst_28694__$1);

(statearr_28747[(7)] = inst_28692__$1);

(statearr_28747[(14)] = inst_28693);

return statearr_28747;
})();
if(cljs.core.truth_(inst_28694__$1)){
var statearr_28748_29817 = state_28739__$1;
(statearr_28748_29817[(1)] = (5));

} else {
var statearr_28749_29818 = state_28739__$1;
(statearr_28749_29818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (15))){
var inst_28713 = (state_28739[(15)]);
var inst_28684 = (state_28739[(16)]);
var inst_28713__$1 = cljs.core.empty_QMARK_(inst_28684);
var state_28739__$1 = (function (){var statearr_28750 = state_28739;
(statearr_28750[(15)] = inst_28713__$1);

return statearr_28750;
})();
if(inst_28713__$1){
var statearr_28751_29819 = state_28739__$1;
(statearr_28751_29819[(1)] = (17));

} else {
var statearr_28752_29820 = state_28739__$1;
(statearr_28752_29820[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (21))){
var inst_28683 = (state_28739[(12)]);
var inst_28680 = inst_28683;
var state_28739__$1 = (function (){var statearr_28753 = state_28739;
(statearr_28753[(9)] = inst_28680);

return statearr_28753;
})();
var statearr_28754_29821 = state_28739__$1;
(statearr_28754_29821[(2)] = null);

(statearr_28754_29821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (13))){
var inst_28706 = (state_28739[(2)]);
var inst_28707 = calc_state();
var inst_28680 = inst_28707;
var state_28739__$1 = (function (){var statearr_28755 = state_28739;
(statearr_28755[(9)] = inst_28680);

(statearr_28755[(17)] = inst_28706);

return statearr_28755;
})();
var statearr_28756_29822 = state_28739__$1;
(statearr_28756_29822[(2)] = null);

(statearr_28756_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (22))){
var inst_28733 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28757_29823 = state_28739__$1;
(statearr_28757_29823[(2)] = inst_28733);

(statearr_28757_29823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (6))){
var inst_28693 = (state_28739[(14)]);
var inst_28697 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28693,change);
var state_28739__$1 = state_28739;
var statearr_28758_29824 = state_28739__$1;
(statearr_28758_29824[(2)] = inst_28697);

(statearr_28758_29824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (25))){
var state_28739__$1 = state_28739;
var statearr_28759_29825 = state_28739__$1;
(statearr_28759_29825[(2)] = null);

(statearr_28759_29825[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (17))){
var inst_28685 = (state_28739[(18)]);
var inst_28693 = (state_28739[(14)]);
var inst_28715 = (inst_28685.cljs$core$IFn$_invoke$arity$1 ? inst_28685.cljs$core$IFn$_invoke$arity$1(inst_28693) : inst_28685.call(null,inst_28693));
var inst_28716 = cljs.core.not(inst_28715);
var state_28739__$1 = state_28739;
var statearr_28760_29826 = state_28739__$1;
(statearr_28760_29826[(2)] = inst_28716);

(statearr_28760_29826[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (3))){
var inst_28737 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28739__$1,inst_28737);
} else {
if((state_val_28740 === (12))){
var state_28739__$1 = state_28739;
var statearr_28761_29827 = state_28739__$1;
(statearr_28761_29827[(2)] = null);

(statearr_28761_29827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (2))){
var inst_28680 = (state_28739[(9)]);
var inst_28683 = (state_28739[(12)]);
var inst_28683__$1 = cljs.core.__destructure_map(inst_28680);
var inst_28684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28683__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28683__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28683__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28739__$1 = (function (){var statearr_28762 = state_28739;
(statearr_28762[(18)] = inst_28685);

(statearr_28762[(16)] = inst_28684);

(statearr_28762[(12)] = inst_28683__$1);

return statearr_28762;
})();
return cljs.core.async.ioc_alts_BANG_(state_28739__$1,(4),inst_28686);
} else {
if((state_val_28740 === (23))){
var inst_28724 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28724)){
var statearr_28763_29828 = state_28739__$1;
(statearr_28763_29828[(1)] = (24));

} else {
var statearr_28764_29833 = state_28739__$1;
(statearr_28764_29833[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (19))){
var inst_28719 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28765_29834 = state_28739__$1;
(statearr_28765_29834[(2)] = inst_28719);

(statearr_28765_29834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (11))){
var inst_28693 = (state_28739[(14)]);
var inst_28703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28693);
var state_28739__$1 = state_28739;
var statearr_28766_29838 = state_28739__$1;
(statearr_28766_29838[(2)] = inst_28703);

(statearr_28766_29838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (9))){
var inst_28710 = (state_28739[(19)]);
var inst_28684 = (state_28739[(16)]);
var inst_28693 = (state_28739[(14)]);
var inst_28710__$1 = (inst_28684.cljs$core$IFn$_invoke$arity$1 ? inst_28684.cljs$core$IFn$_invoke$arity$1(inst_28693) : inst_28684.call(null,inst_28693));
var state_28739__$1 = (function (){var statearr_28767 = state_28739;
(statearr_28767[(19)] = inst_28710__$1);

return statearr_28767;
})();
if(cljs.core.truth_(inst_28710__$1)){
var statearr_28768_29839 = state_28739__$1;
(statearr_28768_29839[(1)] = (14));

} else {
var statearr_28769_29840 = state_28739__$1;
(statearr_28769_29840[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (5))){
var inst_28694 = (state_28739[(13)]);
var state_28739__$1 = state_28739;
var statearr_28770_29841 = state_28739__$1;
(statearr_28770_29841[(2)] = inst_28694);

(statearr_28770_29841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (14))){
var inst_28710 = (state_28739[(19)]);
var state_28739__$1 = state_28739;
var statearr_28771_29845 = state_28739__$1;
(statearr_28771_29845[(2)] = inst_28710);

(statearr_28771_29845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (26))){
var inst_28729 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28772_29846 = state_28739__$1;
(statearr_28772_29846[(2)] = inst_28729);

(statearr_28772_29846[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (16))){
var inst_28721 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28721)){
var statearr_28773_29850 = state_28739__$1;
(statearr_28773_29850[(1)] = (20));

} else {
var statearr_28774_29851 = state_28739__$1;
(statearr_28774_29851[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (10))){
var inst_28735 = (state_28739[(2)]);
var state_28739__$1 = state_28739;
var statearr_28775_29852 = state_28739__$1;
(statearr_28775_29852[(2)] = inst_28735);

(statearr_28775_29852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (18))){
var inst_28713 = (state_28739[(15)]);
var state_28739__$1 = state_28739;
var statearr_28776_29853 = state_28739__$1;
(statearr_28776_29853[(2)] = inst_28713);

(statearr_28776_29853[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28740 === (8))){
var inst_28692 = (state_28739[(7)]);
var inst_28701 = (inst_28692 == null);
var state_28739__$1 = state_28739;
if(cljs.core.truth_(inst_28701)){
var statearr_28777_29857 = state_28739__$1;
(statearr_28777_29857[(1)] = (11));

} else {
var statearr_28778_29858 = state_28739__$1;
(statearr_28778_29858[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27833__auto__ = null;
var cljs$core$async$mix_$_state_machine__27833__auto____0 = (function (){
var statearr_28779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28779[(0)] = cljs$core$async$mix_$_state_machine__27833__auto__);

(statearr_28779[(1)] = (1));

return statearr_28779;
});
var cljs$core$async$mix_$_state_machine__27833__auto____1 = (function (state_28739){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28739);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28780){var ex__27836__auto__ = e28780;
var statearr_28781_29863 = state_28739;
(statearr_28781_29863[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28739[(4)]))){
var statearr_28782_29864 = state_28739;
(statearr_28782_29864[(1)] = cljs.core.first((state_28739[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29865 = state_28739;
state_28739 = G__29865;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27833__auto__ = function(state_28739){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27833__auto____1.call(this,state_28739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27833__auto____0;
cljs$core$async$mix_$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27833__auto____1;
return cljs$core$async$mix_$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28783 = f__27904__auto__();
(statearr_28783[(6)] = c__27903__auto___29807);

return statearr_28783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_29866 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_29866(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29867 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_29867(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29870 = (function() {
var G__29871 = null;
var G__29871__1 = (function (p){
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
var G__29871__2 = (function (p,v){
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
G__29871 = function(p,v){
switch(arguments.length){
case 1:
return G__29871__1.call(this,p);
case 2:
return G__29871__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29871.cljs$core$IFn$_invoke$arity$1 = G__29871__1;
G__29871.cljs$core$IFn$_invoke$arity$2 = G__29871__2;
return G__29871;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28785 = arguments.length;
switch (G__28785) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29870(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29870(p,v);
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
var G__28788 = arguments.length;
switch (G__28788) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__28786_SHARP_){
if(cljs.core.truth_((p1__28786_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28786_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28786_SHARP_.call(null,topic)))){
return p1__28786_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28786_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28789 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28790){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28790 = meta28790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28791,meta28790__$1){
var self__ = this;
var _28791__$1 = this;
return (new cljs.core.async.t_cljs$core$async28789(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28790__$1));
}));

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28791){
var self__ = this;
var _28791__$1 = this;
return self__.meta28790;
}));

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28789.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28790","meta28790",1606958999,null)], null);
}));

(cljs.core.async.t_cljs$core$async28789.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28789");

(cljs.core.async.t_cljs$core$async28789.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async28789");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28789.
 */
cljs.core.async.__GT_t_cljs$core$async28789 = (function cljs$core$async$__GT_t_cljs$core$async28789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28790){
return (new cljs.core.async.t_cljs$core$async28789(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28790));
});

}

return (new cljs.core.async.t_cljs$core$async28789(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27903__auto___29878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28863){
var state_val_28864 = (state_28863[(1)]);
if((state_val_28864 === (7))){
var inst_28859 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28865_29879 = state_28863__$1;
(statearr_28865_29879[(2)] = inst_28859);

(statearr_28865_29879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (20))){
var state_28863__$1 = state_28863;
var statearr_28866_29880 = state_28863__$1;
(statearr_28866_29880[(2)] = null);

(statearr_28866_29880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (1))){
var state_28863__$1 = state_28863;
var statearr_28867_29881 = state_28863__$1;
(statearr_28867_29881[(2)] = null);

(statearr_28867_29881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (24))){
var inst_28842 = (state_28863[(7)]);
var inst_28851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28842);
var state_28863__$1 = state_28863;
var statearr_28868_29882 = state_28863__$1;
(statearr_28868_29882[(2)] = inst_28851);

(statearr_28868_29882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (4))){
var inst_28794 = (state_28863[(8)]);
var inst_28794__$1 = (state_28863[(2)]);
var inst_28795 = (inst_28794__$1 == null);
var state_28863__$1 = (function (){var statearr_28869 = state_28863;
(statearr_28869[(8)] = inst_28794__$1);

return statearr_28869;
})();
if(cljs.core.truth_(inst_28795)){
var statearr_28870_29883 = state_28863__$1;
(statearr_28870_29883[(1)] = (5));

} else {
var statearr_28871_29884 = state_28863__$1;
(statearr_28871_29884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (15))){
var inst_28836 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28872_29885 = state_28863__$1;
(statearr_28872_29885[(2)] = inst_28836);

(statearr_28872_29885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (21))){
var inst_28856 = (state_28863[(2)]);
var state_28863__$1 = (function (){var statearr_28873 = state_28863;
(statearr_28873[(9)] = inst_28856);

return statearr_28873;
})();
var statearr_28874_29890 = state_28863__$1;
(statearr_28874_29890[(2)] = null);

(statearr_28874_29890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (13))){
var inst_28818 = (state_28863[(10)]);
var inst_28820 = cljs.core.chunked_seq_QMARK_(inst_28818);
var state_28863__$1 = state_28863;
if(inst_28820){
var statearr_28875_29891 = state_28863__$1;
(statearr_28875_29891[(1)] = (16));

} else {
var statearr_28876_29892 = state_28863__$1;
(statearr_28876_29892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (22))){
var inst_28848 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
if(cljs.core.truth_(inst_28848)){
var statearr_28877_29894 = state_28863__$1;
(statearr_28877_29894[(1)] = (23));

} else {
var statearr_28878_29895 = state_28863__$1;
(statearr_28878_29895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (6))){
var inst_28844 = (state_28863[(11)]);
var inst_28842 = (state_28863[(7)]);
var inst_28794 = (state_28863[(8)]);
var inst_28842__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28794) : topic_fn.call(null,inst_28794));
var inst_28843 = cljs.core.deref(mults);
var inst_28844__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28843,inst_28842__$1);
var state_28863__$1 = (function (){var statearr_28879 = state_28863;
(statearr_28879[(11)] = inst_28844__$1);

(statearr_28879[(7)] = inst_28842__$1);

return statearr_28879;
})();
if(cljs.core.truth_(inst_28844__$1)){
var statearr_28880_29896 = state_28863__$1;
(statearr_28880_29896[(1)] = (19));

} else {
var statearr_28881_29897 = state_28863__$1;
(statearr_28881_29897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (25))){
var inst_28853 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28882_29898 = state_28863__$1;
(statearr_28882_29898[(2)] = inst_28853);

(statearr_28882_29898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (17))){
var inst_28818 = (state_28863[(10)]);
var inst_28827 = cljs.core.first(inst_28818);
var inst_28828 = cljs.core.async.muxch_STAR_(inst_28827);
var inst_28829 = cljs.core.async.close_BANG_(inst_28828);
var inst_28830 = cljs.core.next(inst_28818);
var inst_28804 = inst_28830;
var inst_28805 = null;
var inst_28806 = (0);
var inst_28807 = (0);
var state_28863__$1 = (function (){var statearr_28883 = state_28863;
(statearr_28883[(12)] = inst_28804);

(statearr_28883[(13)] = inst_28805);

(statearr_28883[(14)] = inst_28829);

(statearr_28883[(15)] = inst_28807);

(statearr_28883[(16)] = inst_28806);

return statearr_28883;
})();
var statearr_28884_29900 = state_28863__$1;
(statearr_28884_29900[(2)] = null);

(statearr_28884_29900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (3))){
var inst_28861 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28863__$1,inst_28861);
} else {
if((state_val_28864 === (12))){
var inst_28838 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28885_29901 = state_28863__$1;
(statearr_28885_29901[(2)] = inst_28838);

(statearr_28885_29901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (2))){
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28863__$1,(4),ch);
} else {
if((state_val_28864 === (23))){
var state_28863__$1 = state_28863;
var statearr_28886_29902 = state_28863__$1;
(statearr_28886_29902[(2)] = null);

(statearr_28886_29902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (19))){
var inst_28844 = (state_28863[(11)]);
var inst_28794 = (state_28863[(8)]);
var inst_28846 = cljs.core.async.muxch_STAR_(inst_28844);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28863__$1,(22),inst_28846,inst_28794);
} else {
if((state_val_28864 === (11))){
var inst_28804 = (state_28863[(12)]);
var inst_28818 = (state_28863[(10)]);
var inst_28818__$1 = cljs.core.seq(inst_28804);
var state_28863__$1 = (function (){var statearr_28887 = state_28863;
(statearr_28887[(10)] = inst_28818__$1);

return statearr_28887;
})();
if(inst_28818__$1){
var statearr_28888_29907 = state_28863__$1;
(statearr_28888_29907[(1)] = (13));

} else {
var statearr_28889_29908 = state_28863__$1;
(statearr_28889_29908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (9))){
var inst_28840 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28890_29909 = state_28863__$1;
(statearr_28890_29909[(2)] = inst_28840);

(statearr_28890_29909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (5))){
var inst_28801 = cljs.core.deref(mults);
var inst_28802 = cljs.core.vals(inst_28801);
var inst_28803 = cljs.core.seq(inst_28802);
var inst_28804 = inst_28803;
var inst_28805 = null;
var inst_28806 = (0);
var inst_28807 = (0);
var state_28863__$1 = (function (){var statearr_28891 = state_28863;
(statearr_28891[(12)] = inst_28804);

(statearr_28891[(13)] = inst_28805);

(statearr_28891[(15)] = inst_28807);

(statearr_28891[(16)] = inst_28806);

return statearr_28891;
})();
var statearr_28892_29910 = state_28863__$1;
(statearr_28892_29910[(2)] = null);

(statearr_28892_29910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (14))){
var state_28863__$1 = state_28863;
var statearr_28896_29911 = state_28863__$1;
(statearr_28896_29911[(2)] = null);

(statearr_28896_29911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (16))){
var inst_28818 = (state_28863[(10)]);
var inst_28822 = cljs.core.chunk_first(inst_28818);
var inst_28823 = cljs.core.chunk_rest(inst_28818);
var inst_28824 = cljs.core.count(inst_28822);
var inst_28804 = inst_28823;
var inst_28805 = inst_28822;
var inst_28806 = inst_28824;
var inst_28807 = (0);
var state_28863__$1 = (function (){var statearr_28897 = state_28863;
(statearr_28897[(12)] = inst_28804);

(statearr_28897[(13)] = inst_28805);

(statearr_28897[(15)] = inst_28807);

(statearr_28897[(16)] = inst_28806);

return statearr_28897;
})();
var statearr_28898_29912 = state_28863__$1;
(statearr_28898_29912[(2)] = null);

(statearr_28898_29912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (10))){
var inst_28804 = (state_28863[(12)]);
var inst_28805 = (state_28863[(13)]);
var inst_28807 = (state_28863[(15)]);
var inst_28806 = (state_28863[(16)]);
var inst_28812 = cljs.core._nth(inst_28805,inst_28807);
var inst_28813 = cljs.core.async.muxch_STAR_(inst_28812);
var inst_28814 = cljs.core.async.close_BANG_(inst_28813);
var inst_28815 = (inst_28807 + (1));
var tmp28893 = inst_28804;
var tmp28894 = inst_28805;
var tmp28895 = inst_28806;
var inst_28804__$1 = tmp28893;
var inst_28805__$1 = tmp28894;
var inst_28806__$1 = tmp28895;
var inst_28807__$1 = inst_28815;
var state_28863__$1 = (function (){var statearr_28899 = state_28863;
(statearr_28899[(12)] = inst_28804__$1);

(statearr_28899[(13)] = inst_28805__$1);

(statearr_28899[(17)] = inst_28814);

(statearr_28899[(15)] = inst_28807__$1);

(statearr_28899[(16)] = inst_28806__$1);

return statearr_28899;
})();
var statearr_28900_29913 = state_28863__$1;
(statearr_28900_29913[(2)] = null);

(statearr_28900_29913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (18))){
var inst_28833 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28901_29914 = state_28863__$1;
(statearr_28901_29914[(2)] = inst_28833);

(statearr_28901_29914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (8))){
var inst_28807 = (state_28863[(15)]);
var inst_28806 = (state_28863[(16)]);
var inst_28809 = (inst_28807 < inst_28806);
var inst_28810 = inst_28809;
var state_28863__$1 = state_28863;
if(cljs.core.truth_(inst_28810)){
var statearr_28902_29915 = state_28863__$1;
(statearr_28902_29915[(1)] = (10));

} else {
var statearr_28903_29916 = state_28863__$1;
(statearr_28903_29916[(1)] = (11));

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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_28904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28904[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_28904[(1)] = (1));

return statearr_28904;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_28863){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28863);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28905){var ex__27836__auto__ = e28905;
var statearr_28906_29917 = state_28863;
(statearr_28906_29917[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28863[(4)]))){
var statearr_28907_29918 = state_28863;
(statearr_28907_29918[(1)] = cljs.core.first((state_28863[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29919 = state_28863;
state_28863 = G__29919;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_28863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_28863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28908 = f__27904__auto__();
(statearr_28908[(6)] = c__27903__auto___29878);

return statearr_28908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
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
var G__28910 = arguments.length;
switch (G__28910) {
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
var G__28912 = arguments.length;
switch (G__28912) {
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
var G__28914 = arguments.length;
switch (G__28914) {
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
var c__27903__auto___29927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_28957){
var state_val_28958 = (state_28957[(1)]);
if((state_val_28958 === (7))){
var state_28957__$1 = state_28957;
var statearr_28959_29928 = state_28957__$1;
(statearr_28959_29928[(2)] = null);

(statearr_28959_29928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (1))){
var state_28957__$1 = state_28957;
var statearr_28960_29929 = state_28957__$1;
(statearr_28960_29929[(2)] = null);

(statearr_28960_29929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (4))){
var inst_28918 = (state_28957[(7)]);
var inst_28917 = (state_28957[(8)]);
var inst_28920 = (inst_28918 < inst_28917);
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28920)){
var statearr_28961_29930 = state_28957__$1;
(statearr_28961_29930[(1)] = (6));

} else {
var statearr_28962_29931 = state_28957__$1;
(statearr_28962_29931[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (15))){
var inst_28943 = (state_28957[(9)]);
var inst_28948 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28943);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28957__$1,(17),out,inst_28948);
} else {
if((state_val_28958 === (13))){
var inst_28943 = (state_28957[(9)]);
var inst_28943__$1 = (state_28957[(2)]);
var inst_28944 = cljs.core.some(cljs.core.nil_QMARK_,inst_28943__$1);
var state_28957__$1 = (function (){var statearr_28963 = state_28957;
(statearr_28963[(9)] = inst_28943__$1);

return statearr_28963;
})();
if(cljs.core.truth_(inst_28944)){
var statearr_28964_29932 = state_28957__$1;
(statearr_28964_29932[(1)] = (14));

} else {
var statearr_28965_29933 = state_28957__$1;
(statearr_28965_29933[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (6))){
var state_28957__$1 = state_28957;
var statearr_28966_29934 = state_28957__$1;
(statearr_28966_29934[(2)] = null);

(statearr_28966_29934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (17))){
var inst_28950 = (state_28957[(2)]);
var state_28957__$1 = (function (){var statearr_28968 = state_28957;
(statearr_28968[(10)] = inst_28950);

return statearr_28968;
})();
var statearr_28969_29935 = state_28957__$1;
(statearr_28969_29935[(2)] = null);

(statearr_28969_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (3))){
var inst_28955 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28957__$1,inst_28955);
} else {
if((state_val_28958 === (12))){
var _ = (function (){var statearr_28970 = state_28957;
(statearr_28970[(4)] = cljs.core.rest((state_28957[(4)])));

return statearr_28970;
})();
var state_28957__$1 = state_28957;
var ex28967 = (state_28957__$1[(2)]);
var statearr_28971_29936 = state_28957__$1;
(statearr_28971_29936[(5)] = ex28967);


if((ex28967 instanceof Object)){
var statearr_28972_29937 = state_28957__$1;
(statearr_28972_29937[(1)] = (11));

(statearr_28972_29937[(5)] = null);

} else {
throw ex28967;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (2))){
var inst_28916 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28917 = cnt;
var inst_28918 = (0);
var state_28957__$1 = (function (){var statearr_28973 = state_28957;
(statearr_28973[(7)] = inst_28918);

(statearr_28973[(11)] = inst_28916);

(statearr_28973[(8)] = inst_28917);

return statearr_28973;
})();
var statearr_28974_29938 = state_28957__$1;
(statearr_28974_29938[(2)] = null);

(statearr_28974_29938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (11))){
var inst_28922 = (state_28957[(2)]);
var inst_28923 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28957__$1 = (function (){var statearr_28975 = state_28957;
(statearr_28975[(12)] = inst_28922);

return statearr_28975;
})();
var statearr_28976_29940 = state_28957__$1;
(statearr_28976_29940[(2)] = inst_28923);

(statearr_28976_29940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (9))){
var inst_28918 = (state_28957[(7)]);
var _ = (function (){var statearr_28977 = state_28957;
(statearr_28977[(4)] = cljs.core.cons((12),(state_28957[(4)])));

return statearr_28977;
})();
var inst_28929 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28918) : chs__$1.call(null,inst_28918));
var inst_28930 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28918) : done.call(null,inst_28918));
var inst_28931 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28929,inst_28930);
var ___$1 = (function (){var statearr_28978 = state_28957;
(statearr_28978[(4)] = cljs.core.rest((state_28957[(4)])));

return statearr_28978;
})();
var state_28957__$1 = state_28957;
var statearr_28979_29941 = state_28957__$1;
(statearr_28979_29941[(2)] = inst_28931);

(statearr_28979_29941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (5))){
var inst_28941 = (state_28957[(2)]);
var state_28957__$1 = (function (){var statearr_28980 = state_28957;
(statearr_28980[(13)] = inst_28941);

return statearr_28980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28957__$1,(13),dchan);
} else {
if((state_val_28958 === (14))){
var inst_28946 = cljs.core.async.close_BANG_(out);
var state_28957__$1 = state_28957;
var statearr_28981_29942 = state_28957__$1;
(statearr_28981_29942[(2)] = inst_28946);

(statearr_28981_29942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (16))){
var inst_28953 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28982_29943 = state_28957__$1;
(statearr_28982_29943[(2)] = inst_28953);

(statearr_28982_29943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (10))){
var inst_28918 = (state_28957[(7)]);
var inst_28934 = (state_28957[(2)]);
var inst_28935 = (inst_28918 + (1));
var inst_28918__$1 = inst_28935;
var state_28957__$1 = (function (){var statearr_28983 = state_28957;
(statearr_28983[(14)] = inst_28934);

(statearr_28983[(7)] = inst_28918__$1);

return statearr_28983;
})();
var statearr_28984_29944 = state_28957__$1;
(statearr_28984_29944[(2)] = null);

(statearr_28984_29944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (8))){
var inst_28939 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28985_29945 = state_28957__$1;
(statearr_28985_29945[(2)] = inst_28939);

(statearr_28985_29945[(1)] = (5));


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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_28986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28986[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_28986[(1)] = (1));

return statearr_28986;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_28957){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_28957);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e28987){var ex__27836__auto__ = e28987;
var statearr_28988_29951 = state_28957;
(statearr_28988_29951[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_28957[(4)]))){
var statearr_28989_29957 = state_28957;
(statearr_28989_29957[(1)] = cljs.core.first((state_28957[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_28957;
state_28957 = G__29958;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_28957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_28957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_28990 = f__27904__auto__();
(statearr_28990[(6)] = c__27903__auto___29927);

return statearr_28990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
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
var G__28993 = arguments.length;
switch (G__28993) {
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
var c__27903__auto___29960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_29025){
var state_val_29026 = (state_29025[(1)]);
if((state_val_29026 === (7))){
var inst_29005 = (state_29025[(7)]);
var inst_29004 = (state_29025[(8)]);
var inst_29004__$1 = (state_29025[(2)]);
var inst_29005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29004__$1,(0),null);
var inst_29006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29004__$1,(1),null);
var inst_29007 = (inst_29005__$1 == null);
var state_29025__$1 = (function (){var statearr_29027 = state_29025;
(statearr_29027[(7)] = inst_29005__$1);

(statearr_29027[(8)] = inst_29004__$1);

(statearr_29027[(9)] = inst_29006);

return statearr_29027;
})();
if(cljs.core.truth_(inst_29007)){
var statearr_29028_29961 = state_29025__$1;
(statearr_29028_29961[(1)] = (8));

} else {
var statearr_29029_29962 = state_29025__$1;
(statearr_29029_29962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (1))){
var inst_28994 = cljs.core.vec(chs);
var inst_28995 = inst_28994;
var state_29025__$1 = (function (){var statearr_29030 = state_29025;
(statearr_29030[(10)] = inst_28995);

return statearr_29030;
})();
var statearr_29031_29963 = state_29025__$1;
(statearr_29031_29963[(2)] = null);

(statearr_29031_29963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (4))){
var inst_28995 = (state_29025[(10)]);
var state_29025__$1 = state_29025;
return cljs.core.async.ioc_alts_BANG_(state_29025__$1,(7),inst_28995);
} else {
if((state_val_29026 === (6))){
var inst_29021 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29032_29964 = state_29025__$1;
(statearr_29032_29964[(2)] = inst_29021);

(statearr_29032_29964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (3))){
var inst_29023 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29025__$1,inst_29023);
} else {
if((state_val_29026 === (2))){
var inst_28995 = (state_29025[(10)]);
var inst_28997 = cljs.core.count(inst_28995);
var inst_28998 = (inst_28997 > (0));
var state_29025__$1 = state_29025;
if(cljs.core.truth_(inst_28998)){
var statearr_29034_29965 = state_29025__$1;
(statearr_29034_29965[(1)] = (4));

} else {
var statearr_29035_29966 = state_29025__$1;
(statearr_29035_29966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (11))){
var inst_28995 = (state_29025[(10)]);
var inst_29014 = (state_29025[(2)]);
var tmp29033 = inst_28995;
var inst_28995__$1 = tmp29033;
var state_29025__$1 = (function (){var statearr_29036 = state_29025;
(statearr_29036[(11)] = inst_29014);

(statearr_29036[(10)] = inst_28995__$1);

return statearr_29036;
})();
var statearr_29037_29967 = state_29025__$1;
(statearr_29037_29967[(2)] = null);

(statearr_29037_29967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (9))){
var inst_29005 = (state_29025[(7)]);
var state_29025__$1 = state_29025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29025__$1,(11),out,inst_29005);
} else {
if((state_val_29026 === (5))){
var inst_29019 = cljs.core.async.close_BANG_(out);
var state_29025__$1 = state_29025;
var statearr_29038_29968 = state_29025__$1;
(statearr_29038_29968[(2)] = inst_29019);

(statearr_29038_29968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (10))){
var inst_29017 = (state_29025[(2)]);
var state_29025__$1 = state_29025;
var statearr_29039_29969 = state_29025__$1;
(statearr_29039_29969[(2)] = inst_29017);

(statearr_29039_29969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29026 === (8))){
var inst_29005 = (state_29025[(7)]);
var inst_28995 = (state_29025[(10)]);
var inst_29004 = (state_29025[(8)]);
var inst_29006 = (state_29025[(9)]);
var inst_29009 = (function (){var cs = inst_28995;
var vec__29000 = inst_29004;
var v = inst_29005;
var c = inst_29006;
return (function (p1__28991_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28991_SHARP_);
});
})();
var inst_29010 = cljs.core.filterv(inst_29009,inst_28995);
var inst_28995__$1 = inst_29010;
var state_29025__$1 = (function (){var statearr_29040 = state_29025;
(statearr_29040[(10)] = inst_28995__$1);

return statearr_29040;
})();
var statearr_29041_29971 = state_29025__$1;
(statearr_29041_29971[(2)] = null);

(statearr_29041_29971[(1)] = (2));


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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_29042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29042[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_29042[(1)] = (1));

return statearr_29042;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_29025){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_29025);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e29043){var ex__27836__auto__ = e29043;
var statearr_29044_29975 = state_29025;
(statearr_29044_29975[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_29025[(4)]))){
var statearr_29045_29976 = state_29025;
(statearr_29045_29976[(1)] = cljs.core.first((state_29025[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29977 = state_29025;
state_29025 = G__29977;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_29025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_29025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_29046 = f__27904__auto__();
(statearr_29046[(6)] = c__27903__auto___29960);

return statearr_29046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
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
var G__29048 = arguments.length;
switch (G__29048) {
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
var c__27903__auto___29979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_29072){
var state_val_29073 = (state_29072[(1)]);
if((state_val_29073 === (7))){
var inst_29054 = (state_29072[(7)]);
var inst_29054__$1 = (state_29072[(2)]);
var inst_29055 = (inst_29054__$1 == null);
var inst_29056 = cljs.core.not(inst_29055);
var state_29072__$1 = (function (){var statearr_29074 = state_29072;
(statearr_29074[(7)] = inst_29054__$1);

return statearr_29074;
})();
if(inst_29056){
var statearr_29075_29980 = state_29072__$1;
(statearr_29075_29980[(1)] = (8));

} else {
var statearr_29076_29981 = state_29072__$1;
(statearr_29076_29981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (1))){
var inst_29049 = (0);
var state_29072__$1 = (function (){var statearr_29077 = state_29072;
(statearr_29077[(8)] = inst_29049);

return statearr_29077;
})();
var statearr_29078_29982 = state_29072__$1;
(statearr_29078_29982[(2)] = null);

(statearr_29078_29982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (4))){
var state_29072__$1 = state_29072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29072__$1,(7),ch);
} else {
if((state_val_29073 === (6))){
var inst_29067 = (state_29072[(2)]);
var state_29072__$1 = state_29072;
var statearr_29079_29983 = state_29072__$1;
(statearr_29079_29983[(2)] = inst_29067);

(statearr_29079_29983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (3))){
var inst_29069 = (state_29072[(2)]);
var inst_29070 = cljs.core.async.close_BANG_(out);
var state_29072__$1 = (function (){var statearr_29080 = state_29072;
(statearr_29080[(9)] = inst_29069);

return statearr_29080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29072__$1,inst_29070);
} else {
if((state_val_29073 === (2))){
var inst_29049 = (state_29072[(8)]);
var inst_29051 = (inst_29049 < n);
var state_29072__$1 = state_29072;
if(cljs.core.truth_(inst_29051)){
var statearr_29081_29984 = state_29072__$1;
(statearr_29081_29984[(1)] = (4));

} else {
var statearr_29082_29985 = state_29072__$1;
(statearr_29082_29985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (11))){
var inst_29049 = (state_29072[(8)]);
var inst_29059 = (state_29072[(2)]);
var inst_29060 = (inst_29049 + (1));
var inst_29049__$1 = inst_29060;
var state_29072__$1 = (function (){var statearr_29083 = state_29072;
(statearr_29083[(8)] = inst_29049__$1);

(statearr_29083[(10)] = inst_29059);

return statearr_29083;
})();
var statearr_29084_29987 = state_29072__$1;
(statearr_29084_29987[(2)] = null);

(statearr_29084_29987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (9))){
var state_29072__$1 = state_29072;
var statearr_29085_29988 = state_29072__$1;
(statearr_29085_29988[(2)] = null);

(statearr_29085_29988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (5))){
var state_29072__$1 = state_29072;
var statearr_29086_29989 = state_29072__$1;
(statearr_29086_29989[(2)] = null);

(statearr_29086_29989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (10))){
var inst_29064 = (state_29072[(2)]);
var state_29072__$1 = state_29072;
var statearr_29087_29990 = state_29072__$1;
(statearr_29087_29990[(2)] = inst_29064);

(statearr_29087_29990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (8))){
var inst_29054 = (state_29072[(7)]);
var state_29072__$1 = state_29072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29072__$1,(11),out,inst_29054);
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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_29088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29088[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_29088[(1)] = (1));

return statearr_29088;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_29072){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_29072);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e29089){var ex__27836__auto__ = e29089;
var statearr_29090_29991 = state_29072;
(statearr_29090_29991[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_29072[(4)]))){
var statearr_29091_29992 = state_29072;
(statearr_29091_29992[(1)] = cljs.core.first((state_29072[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29993 = state_29072;
state_29072 = G__29993;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_29072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_29072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_29092 = f__27904__auto__();
(statearr_29092[(6)] = c__27903__auto___29979);

return statearr_29092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29094 = (function (f,ch,meta29095){
this.f = f;
this.ch = ch;
this.meta29095 = meta29095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29096,meta29095__$1){
var self__ = this;
var _29096__$1 = this;
return (new cljs.core.async.t_cljs$core$async29094(self__.f,self__.ch,meta29095__$1));
}));

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29096){
var self__ = this;
var _29096__$1 = this;
return self__.meta29095;
}));

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29097 = (function (f,ch,meta29095,_,fn1,meta29098){
this.f = f;
this.ch = ch;
this.meta29095 = meta29095;
this._ = _;
this.fn1 = fn1;
this.meta29098 = meta29098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29099,meta29098__$1){
var self__ = this;
var _29099__$1 = this;
return (new cljs.core.async.t_cljs$core$async29097(self__.f,self__.ch,self__.meta29095,self__._,self__.fn1,meta29098__$1));
}));

(cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29099){
var self__ = this;
var _29099__$1 = this;
return self__.meta29098;
}));

(cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29093_SHARP_){
var G__29100 = (((p1__29093_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29093_SHARP_) : self__.f.call(null,p1__29093_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29100) : f1.call(null,G__29100));
});
}));

(cljs.core.async.t_cljs$core$async29097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29095","meta29095",-1106665729,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29094","cljs.core.async/t_cljs$core$async29094",-276514138,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29098","meta29098",522364279,null)], null);
}));

(cljs.core.async.t_cljs$core$async29097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29097");

(cljs.core.async.t_cljs$core$async29097.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29097.
 */
cljs.core.async.__GT_t_cljs$core$async29097 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29097(f__$1,ch__$1,meta29095__$1,___$2,fn1__$1,meta29098){
return (new cljs.core.async.t_cljs$core$async29097(f__$1,ch__$1,meta29095__$1,___$2,fn1__$1,meta29098));
});

}

return (new cljs.core.async.t_cljs$core$async29097(self__.f,self__.ch,self__.meta29095,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29101 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29101) : self__.f.call(null,G__29101));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29095","meta29095",-1106665729,null)], null);
}));

(cljs.core.async.t_cljs$core$async29094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29094");

(cljs.core.async.t_cljs$core$async29094.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29094.
 */
cljs.core.async.__GT_t_cljs$core$async29094 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29094(f__$1,ch__$1,meta29095){
return (new cljs.core.async.t_cljs$core$async29094(f__$1,ch__$1,meta29095));
});

}

return (new cljs.core.async.t_cljs$core$async29094(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29102 = (function (f,ch,meta29103){
this.f = f;
this.ch = ch;
this.meta29103 = meta29103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29104,meta29103__$1){
var self__ = this;
var _29104__$1 = this;
return (new cljs.core.async.t_cljs$core$async29102(self__.f,self__.ch,meta29103__$1));
}));

(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29104){
var self__ = this;
var _29104__$1 = this;
return self__.meta29103;
}));

(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29103","meta29103",-1243096511,null)], null);
}));

(cljs.core.async.t_cljs$core$async29102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29102");

(cljs.core.async.t_cljs$core$async29102.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29102.
 */
cljs.core.async.__GT_t_cljs$core$async29102 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29102(f__$1,ch__$1,meta29103){
return (new cljs.core.async.t_cljs$core$async29102(f__$1,ch__$1,meta29103));
});

}

return (new cljs.core.async.t_cljs$core$async29102(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29105 = (function (p,ch,meta29106){
this.p = p;
this.ch = ch;
this.meta29106 = meta29106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29107,meta29106__$1){
var self__ = this;
var _29107__$1 = this;
return (new cljs.core.async.t_cljs$core$async29105(self__.p,self__.ch,meta29106__$1));
}));

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29107){
var self__ = this;
var _29107__$1 = this;
return self__.meta29106;
}));

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29106","meta29106",1500630256,null)], null);
}));

(cljs.core.async.t_cljs$core$async29105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29105");

(cljs.core.async.t_cljs$core$async29105.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29105.
 */
cljs.core.async.__GT_t_cljs$core$async29105 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29105(p__$1,ch__$1,meta29106){
return (new cljs.core.async.t_cljs$core$async29105(p__$1,ch__$1,meta29106));
});

}

return (new cljs.core.async.t_cljs$core$async29105(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29109 = arguments.length;
switch (G__29109) {
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
var c__27903__auto___30005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_29130){
var state_val_29131 = (state_29130[(1)]);
if((state_val_29131 === (7))){
var inst_29126 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29132_30006 = state_29130__$1;
(statearr_29132_30006[(2)] = inst_29126);

(statearr_29132_30006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (1))){
var state_29130__$1 = state_29130;
var statearr_29133_30007 = state_29130__$1;
(statearr_29133_30007[(2)] = null);

(statearr_29133_30007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (4))){
var inst_29112 = (state_29130[(7)]);
var inst_29112__$1 = (state_29130[(2)]);
var inst_29113 = (inst_29112__$1 == null);
var state_29130__$1 = (function (){var statearr_29134 = state_29130;
(statearr_29134[(7)] = inst_29112__$1);

return statearr_29134;
})();
if(cljs.core.truth_(inst_29113)){
var statearr_29135_30008 = state_29130__$1;
(statearr_29135_30008[(1)] = (5));

} else {
var statearr_29136_30009 = state_29130__$1;
(statearr_29136_30009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (6))){
var inst_29112 = (state_29130[(7)]);
var inst_29117 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29112) : p.call(null,inst_29112));
var state_29130__$1 = state_29130;
if(cljs.core.truth_(inst_29117)){
var statearr_29137_30010 = state_29130__$1;
(statearr_29137_30010[(1)] = (8));

} else {
var statearr_29138_30011 = state_29130__$1;
(statearr_29138_30011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (3))){
var inst_29128 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29130__$1,inst_29128);
} else {
if((state_val_29131 === (2))){
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29130__$1,(4),ch);
} else {
if((state_val_29131 === (11))){
var inst_29120 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29139_30012 = state_29130__$1;
(statearr_29139_30012[(2)] = inst_29120);

(statearr_29139_30012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (9))){
var state_29130__$1 = state_29130;
var statearr_29140_30013 = state_29130__$1;
(statearr_29140_30013[(2)] = null);

(statearr_29140_30013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (5))){
var inst_29115 = cljs.core.async.close_BANG_(out);
var state_29130__$1 = state_29130;
var statearr_29141_30014 = state_29130__$1;
(statearr_29141_30014[(2)] = inst_29115);

(statearr_29141_30014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (10))){
var inst_29123 = (state_29130[(2)]);
var state_29130__$1 = (function (){var statearr_29142 = state_29130;
(statearr_29142[(8)] = inst_29123);

return statearr_29142;
})();
var statearr_29143_30015 = state_29130__$1;
(statearr_29143_30015[(2)] = null);

(statearr_29143_30015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (8))){
var inst_29112 = (state_29130[(7)]);
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29130__$1,(11),out,inst_29112);
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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_29144 = [null,null,null,null,null,null,null,null,null];
(statearr_29144[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_29144[(1)] = (1));

return statearr_29144;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_29130){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_29130);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e29145){var ex__27836__auto__ = e29145;
var statearr_29146_30016 = state_29130;
(statearr_29146_30016[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_29130[(4)]))){
var statearr_29147_30017 = state_29130;
(statearr_29147_30017[(1)] = cljs.core.first((state_29130[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30018 = state_29130;
state_29130 = G__30018;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_29130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_29130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_29148 = f__27904__auto__();
(statearr_29148[(6)] = c__27903__auto___30005);

return statearr_29148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29150 = arguments.length;
switch (G__29150) {
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
var c__27903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_29212){
var state_val_29213 = (state_29212[(1)]);
if((state_val_29213 === (7))){
var inst_29208 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
var statearr_29214_30020 = state_29212__$1;
(statearr_29214_30020[(2)] = inst_29208);

(statearr_29214_30020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (20))){
var inst_29178 = (state_29212[(7)]);
var inst_29189 = (state_29212[(2)]);
var inst_29190 = cljs.core.next(inst_29178);
var inst_29164 = inst_29190;
var inst_29165 = null;
var inst_29166 = (0);
var inst_29167 = (0);
var state_29212__$1 = (function (){var statearr_29215 = state_29212;
(statearr_29215[(8)] = inst_29189);

(statearr_29215[(9)] = inst_29167);

(statearr_29215[(10)] = inst_29165);

(statearr_29215[(11)] = inst_29166);

(statearr_29215[(12)] = inst_29164);

return statearr_29215;
})();
var statearr_29216_30021 = state_29212__$1;
(statearr_29216_30021[(2)] = null);

(statearr_29216_30021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (1))){
var state_29212__$1 = state_29212;
var statearr_29217_30022 = state_29212__$1;
(statearr_29217_30022[(2)] = null);

(statearr_29217_30022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (4))){
var inst_29153 = (state_29212[(13)]);
var inst_29153__$1 = (state_29212[(2)]);
var inst_29154 = (inst_29153__$1 == null);
var state_29212__$1 = (function (){var statearr_29218 = state_29212;
(statearr_29218[(13)] = inst_29153__$1);

return statearr_29218;
})();
if(cljs.core.truth_(inst_29154)){
var statearr_29219_30023 = state_29212__$1;
(statearr_29219_30023[(1)] = (5));

} else {
var statearr_29220_30024 = state_29212__$1;
(statearr_29220_30024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (15))){
var state_29212__$1 = state_29212;
var statearr_29224_30025 = state_29212__$1;
(statearr_29224_30025[(2)] = null);

(statearr_29224_30025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (21))){
var state_29212__$1 = state_29212;
var statearr_29225_30026 = state_29212__$1;
(statearr_29225_30026[(2)] = null);

(statearr_29225_30026[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (13))){
var inst_29167 = (state_29212[(9)]);
var inst_29165 = (state_29212[(10)]);
var inst_29166 = (state_29212[(11)]);
var inst_29164 = (state_29212[(12)]);
var inst_29174 = (state_29212[(2)]);
var inst_29175 = (inst_29167 + (1));
var tmp29221 = inst_29165;
var tmp29222 = inst_29166;
var tmp29223 = inst_29164;
var inst_29164__$1 = tmp29223;
var inst_29165__$1 = tmp29221;
var inst_29166__$1 = tmp29222;
var inst_29167__$1 = inst_29175;
var state_29212__$1 = (function (){var statearr_29226 = state_29212;
(statearr_29226[(9)] = inst_29167__$1);

(statearr_29226[(10)] = inst_29165__$1);

(statearr_29226[(11)] = inst_29166__$1);

(statearr_29226[(14)] = inst_29174);

(statearr_29226[(12)] = inst_29164__$1);

return statearr_29226;
})();
var statearr_29227_30027 = state_29212__$1;
(statearr_29227_30027[(2)] = null);

(statearr_29227_30027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (22))){
var state_29212__$1 = state_29212;
var statearr_29228_30028 = state_29212__$1;
(statearr_29228_30028[(2)] = null);

(statearr_29228_30028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (6))){
var inst_29153 = (state_29212[(13)]);
var inst_29162 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29153) : f.call(null,inst_29153));
var inst_29163 = cljs.core.seq(inst_29162);
var inst_29164 = inst_29163;
var inst_29165 = null;
var inst_29166 = (0);
var inst_29167 = (0);
var state_29212__$1 = (function (){var statearr_29229 = state_29212;
(statearr_29229[(9)] = inst_29167);

(statearr_29229[(10)] = inst_29165);

(statearr_29229[(11)] = inst_29166);

(statearr_29229[(12)] = inst_29164);

return statearr_29229;
})();
var statearr_29230_30032 = state_29212__$1;
(statearr_29230_30032[(2)] = null);

(statearr_29230_30032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (17))){
var inst_29178 = (state_29212[(7)]);
var inst_29182 = cljs.core.chunk_first(inst_29178);
var inst_29183 = cljs.core.chunk_rest(inst_29178);
var inst_29184 = cljs.core.count(inst_29182);
var inst_29164 = inst_29183;
var inst_29165 = inst_29182;
var inst_29166 = inst_29184;
var inst_29167 = (0);
var state_29212__$1 = (function (){var statearr_29231 = state_29212;
(statearr_29231[(9)] = inst_29167);

(statearr_29231[(10)] = inst_29165);

(statearr_29231[(11)] = inst_29166);

(statearr_29231[(12)] = inst_29164);

return statearr_29231;
})();
var statearr_29232_30037 = state_29212__$1;
(statearr_29232_30037[(2)] = null);

(statearr_29232_30037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (3))){
var inst_29210 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29212__$1,inst_29210);
} else {
if((state_val_29213 === (12))){
var inst_29198 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
var statearr_29233_30041 = state_29212__$1;
(statearr_29233_30041[(2)] = inst_29198);

(statearr_29233_30041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (2))){
var state_29212__$1 = state_29212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29212__$1,(4),in$);
} else {
if((state_val_29213 === (23))){
var inst_29206 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
var statearr_29234_30042 = state_29212__$1;
(statearr_29234_30042[(2)] = inst_29206);

(statearr_29234_30042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (19))){
var inst_29193 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
var statearr_29235_30049 = state_29212__$1;
(statearr_29235_30049[(2)] = inst_29193);

(statearr_29235_30049[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (11))){
var inst_29178 = (state_29212[(7)]);
var inst_29164 = (state_29212[(12)]);
var inst_29178__$1 = cljs.core.seq(inst_29164);
var state_29212__$1 = (function (){var statearr_29236 = state_29212;
(statearr_29236[(7)] = inst_29178__$1);

return statearr_29236;
})();
if(inst_29178__$1){
var statearr_29237_30050 = state_29212__$1;
(statearr_29237_30050[(1)] = (14));

} else {
var statearr_29238_30054 = state_29212__$1;
(statearr_29238_30054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (9))){
var inst_29200 = (state_29212[(2)]);
var inst_29201 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29212__$1 = (function (){var statearr_29239 = state_29212;
(statearr_29239[(15)] = inst_29200);

return statearr_29239;
})();
if(cljs.core.truth_(inst_29201)){
var statearr_29240_30055 = state_29212__$1;
(statearr_29240_30055[(1)] = (21));

} else {
var statearr_29241_30056 = state_29212__$1;
(statearr_29241_30056[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (5))){
var inst_29156 = cljs.core.async.close_BANG_(out);
var state_29212__$1 = state_29212;
var statearr_29242_30057 = state_29212__$1;
(statearr_29242_30057[(2)] = inst_29156);

(statearr_29242_30057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (14))){
var inst_29178 = (state_29212[(7)]);
var inst_29180 = cljs.core.chunked_seq_QMARK_(inst_29178);
var state_29212__$1 = state_29212;
if(inst_29180){
var statearr_29243_30058 = state_29212__$1;
(statearr_29243_30058[(1)] = (17));

} else {
var statearr_29244_30059 = state_29212__$1;
(statearr_29244_30059[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (16))){
var inst_29196 = (state_29212[(2)]);
var state_29212__$1 = state_29212;
var statearr_29245_30060 = state_29212__$1;
(statearr_29245_30060[(2)] = inst_29196);

(statearr_29245_30060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29213 === (10))){
var inst_29167 = (state_29212[(9)]);
var inst_29165 = (state_29212[(10)]);
var inst_29172 = cljs.core._nth(inst_29165,inst_29167);
var state_29212__$1 = state_29212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29212__$1,(13),out,inst_29172);
} else {
if((state_val_29213 === (18))){
var inst_29178 = (state_29212[(7)]);
var inst_29187 = cljs.core.first(inst_29178);
var state_29212__$1 = state_29212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29212__$1,(20),out,inst_29187);
} else {
if((state_val_29213 === (8))){
var inst_29167 = (state_29212[(9)]);
var inst_29166 = (state_29212[(11)]);
var inst_29169 = (inst_29167 < inst_29166);
var inst_29170 = inst_29169;
var state_29212__$1 = state_29212;
if(cljs.core.truth_(inst_29170)){
var statearr_29246_30062 = state_29212__$1;
(statearr_29246_30062[(1)] = (10));

} else {
var statearr_29247_30063 = state_29212__$1;
(statearr_29247_30063[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27833__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27833__auto____0 = (function (){
var statearr_29248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29248[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27833__auto__);

(statearr_29248[(1)] = (1));

return statearr_29248;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27833__auto____1 = (function (state_29212){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_29212);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e29249){var ex__27836__auto__ = e29249;
var statearr_29250_30067 = state_29212;
(statearr_29250_30067[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_29212[(4)]))){
var statearr_29251_30074 = state_29212;
(statearr_29251_30074[(1)] = cljs.core.first((state_29212[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30075 = state_29212;
state_29212 = G__30075;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27833__auto__ = function(state_29212){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27833__auto____1.call(this,state_29212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27833__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27833__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_29252 = f__27904__auto__();
(statearr_29252[(6)] = c__27903__auto__);

return statearr_29252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));

return c__27903__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29254 = arguments.length;
switch (G__29254) {
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
var G__29256 = arguments.length;
switch (G__29256) {
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
var G__29258 = arguments.length;
switch (G__29258) {
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
var c__27903__auto___30085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_29282){
var state_val_29283 = (state_29282[(1)]);
if((state_val_29283 === (7))){
var inst_29277 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29284_30086 = state_29282__$1;
(statearr_29284_30086[(2)] = inst_29277);

(statearr_29284_30086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (1))){
var inst_29259 = null;
var state_29282__$1 = (function (){var statearr_29285 = state_29282;
(statearr_29285[(7)] = inst_29259);

return statearr_29285;
})();
var statearr_29286_30087 = state_29282__$1;
(statearr_29286_30087[(2)] = null);

(statearr_29286_30087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (4))){
var inst_29262 = (state_29282[(8)]);
var inst_29262__$1 = (state_29282[(2)]);
var inst_29263 = (inst_29262__$1 == null);
var inst_29264 = cljs.core.not(inst_29263);
var state_29282__$1 = (function (){var statearr_29287 = state_29282;
(statearr_29287[(8)] = inst_29262__$1);

return statearr_29287;
})();
if(inst_29264){
var statearr_29288_30088 = state_29282__$1;
(statearr_29288_30088[(1)] = (5));

} else {
var statearr_29289_30089 = state_29282__$1;
(statearr_29289_30089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (6))){
var state_29282__$1 = state_29282;
var statearr_29290_30090 = state_29282__$1;
(statearr_29290_30090[(2)] = null);

(statearr_29290_30090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (3))){
var inst_29279 = (state_29282[(2)]);
var inst_29280 = cljs.core.async.close_BANG_(out);
var state_29282__$1 = (function (){var statearr_29291 = state_29282;
(statearr_29291[(9)] = inst_29279);

return statearr_29291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29282__$1,inst_29280);
} else {
if((state_val_29283 === (2))){
var state_29282__$1 = state_29282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29282__$1,(4),ch);
} else {
if((state_val_29283 === (11))){
var inst_29262 = (state_29282[(8)]);
var inst_29271 = (state_29282[(2)]);
var inst_29259 = inst_29262;
var state_29282__$1 = (function (){var statearr_29292 = state_29282;
(statearr_29292[(10)] = inst_29271);

(statearr_29292[(7)] = inst_29259);

return statearr_29292;
})();
var statearr_29293_30093 = state_29282__$1;
(statearr_29293_30093[(2)] = null);

(statearr_29293_30093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (9))){
var inst_29262 = (state_29282[(8)]);
var state_29282__$1 = state_29282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29282__$1,(11),out,inst_29262);
} else {
if((state_val_29283 === (5))){
var inst_29262 = (state_29282[(8)]);
var inst_29259 = (state_29282[(7)]);
var inst_29266 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29262,inst_29259);
var state_29282__$1 = state_29282;
if(inst_29266){
var statearr_29295_30098 = state_29282__$1;
(statearr_29295_30098[(1)] = (8));

} else {
var statearr_29296_30099 = state_29282__$1;
(statearr_29296_30099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (10))){
var inst_29274 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29297_30100 = state_29282__$1;
(statearr_29297_30100[(2)] = inst_29274);

(statearr_29297_30100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (8))){
var inst_29259 = (state_29282[(7)]);
var tmp29294 = inst_29259;
var inst_29259__$1 = tmp29294;
var state_29282__$1 = (function (){var statearr_29298 = state_29282;
(statearr_29298[(7)] = inst_29259__$1);

return statearr_29298;
})();
var statearr_29299_30101 = state_29282__$1;
(statearr_29299_30101[(2)] = null);

(statearr_29299_30101[(1)] = (2));


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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_29300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29300[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_29300[(1)] = (1));

return statearr_29300;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_29282){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_29282);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e29301){var ex__27836__auto__ = e29301;
var statearr_29302_30102 = state_29282;
(statearr_29302_30102[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_29282[(4)]))){
var statearr_29303_30103 = state_29282;
(statearr_29303_30103[(1)] = cljs.core.first((state_29282[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30104 = state_29282;
state_29282 = G__30104;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_29282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_29282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_29304 = f__27904__auto__();
(statearr_29304[(6)] = c__27903__auto___30085);

return statearr_29304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29306 = arguments.length;
switch (G__29306) {
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
var c__27903__auto___30106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_29344){
var state_val_29345 = (state_29344[(1)]);
if((state_val_29345 === (7))){
var inst_29340 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29346_30107 = state_29344__$1;
(statearr_29346_30107[(2)] = inst_29340);

(statearr_29346_30107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (1))){
var inst_29307 = (new Array(n));
var inst_29308 = inst_29307;
var inst_29309 = (0);
var state_29344__$1 = (function (){var statearr_29347 = state_29344;
(statearr_29347[(7)] = inst_29308);

(statearr_29347[(8)] = inst_29309);

return statearr_29347;
})();
var statearr_29348_30108 = state_29344__$1;
(statearr_29348_30108[(2)] = null);

(statearr_29348_30108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (4))){
var inst_29312 = (state_29344[(9)]);
var inst_29312__$1 = (state_29344[(2)]);
var inst_29313 = (inst_29312__$1 == null);
var inst_29314 = cljs.core.not(inst_29313);
var state_29344__$1 = (function (){var statearr_29349 = state_29344;
(statearr_29349[(9)] = inst_29312__$1);

return statearr_29349;
})();
if(inst_29314){
var statearr_29350_30112 = state_29344__$1;
(statearr_29350_30112[(1)] = (5));

} else {
var statearr_29351_30116 = state_29344__$1;
(statearr_29351_30116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (15))){
var inst_29334 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29352_30117 = state_29344__$1;
(statearr_29352_30117[(2)] = inst_29334);

(statearr_29352_30117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (13))){
var state_29344__$1 = state_29344;
var statearr_29353_30118 = state_29344__$1;
(statearr_29353_30118[(2)] = null);

(statearr_29353_30118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (6))){
var inst_29309 = (state_29344[(8)]);
var inst_29330 = (inst_29309 > (0));
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29330)){
var statearr_29354_30119 = state_29344__$1;
(statearr_29354_30119[(1)] = (12));

} else {
var statearr_29355_30120 = state_29344__$1;
(statearr_29355_30120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (3))){
var inst_29342 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29344__$1,inst_29342);
} else {
if((state_val_29345 === (12))){
var inst_29308 = (state_29344[(7)]);
var inst_29332 = cljs.core.vec(inst_29308);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29344__$1,(15),out,inst_29332);
} else {
if((state_val_29345 === (2))){
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29344__$1,(4),ch);
} else {
if((state_val_29345 === (11))){
var inst_29324 = (state_29344[(2)]);
var inst_29325 = (new Array(n));
var inst_29308 = inst_29325;
var inst_29309 = (0);
var state_29344__$1 = (function (){var statearr_29356 = state_29344;
(statearr_29356[(10)] = inst_29324);

(statearr_29356[(7)] = inst_29308);

(statearr_29356[(8)] = inst_29309);

return statearr_29356;
})();
var statearr_29357_30121 = state_29344__$1;
(statearr_29357_30121[(2)] = null);

(statearr_29357_30121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (9))){
var inst_29308 = (state_29344[(7)]);
var inst_29322 = cljs.core.vec(inst_29308);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29344__$1,(11),out,inst_29322);
} else {
if((state_val_29345 === (5))){
var inst_29308 = (state_29344[(7)]);
var inst_29309 = (state_29344[(8)]);
var inst_29317 = (state_29344[(11)]);
var inst_29312 = (state_29344[(9)]);
var inst_29316 = (inst_29308[inst_29309] = inst_29312);
var inst_29317__$1 = (inst_29309 + (1));
var inst_29318 = (inst_29317__$1 < n);
var state_29344__$1 = (function (){var statearr_29358 = state_29344;
(statearr_29358[(12)] = inst_29316);

(statearr_29358[(11)] = inst_29317__$1);

return statearr_29358;
})();
if(cljs.core.truth_(inst_29318)){
var statearr_29359_30122 = state_29344__$1;
(statearr_29359_30122[(1)] = (8));

} else {
var statearr_29360_30123 = state_29344__$1;
(statearr_29360_30123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (14))){
var inst_29337 = (state_29344[(2)]);
var inst_29338 = cljs.core.async.close_BANG_(out);
var state_29344__$1 = (function (){var statearr_29362 = state_29344;
(statearr_29362[(13)] = inst_29337);

return statearr_29362;
})();
var statearr_29363_30124 = state_29344__$1;
(statearr_29363_30124[(2)] = inst_29338);

(statearr_29363_30124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (10))){
var inst_29328 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29364_30125 = state_29344__$1;
(statearr_29364_30125[(2)] = inst_29328);

(statearr_29364_30125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (8))){
var inst_29308 = (state_29344[(7)]);
var inst_29317 = (state_29344[(11)]);
var tmp29361 = inst_29308;
var inst_29308__$1 = tmp29361;
var inst_29309 = inst_29317;
var state_29344__$1 = (function (){var statearr_29365 = state_29344;
(statearr_29365[(7)] = inst_29308__$1);

(statearr_29365[(8)] = inst_29309);

return statearr_29365;
})();
var statearr_29366_30126 = state_29344__$1;
(statearr_29366_30126[(2)] = null);

(statearr_29366_30126[(1)] = (2));


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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_29367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29367[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_29367[(1)] = (1));

return statearr_29367;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_29344){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_29344);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e29368){var ex__27836__auto__ = e29368;
var statearr_29369_30133 = state_29344;
(statearr_29369_30133[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_29344[(4)]))){
var statearr_29370_30134 = state_29344;
(statearr_29370_30134[(1)] = cljs.core.first((state_29344[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30135 = state_29344;
state_29344 = G__30135;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_29344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_29344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_29371 = f__27904__auto__();
(statearr_29371[(6)] = c__27903__auto___30106);

return statearr_29371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29373 = arguments.length;
switch (G__29373) {
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
var c__27903__auto___30137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27904__auto__ = (function (){var switch__27832__auto__ = (function (state_29418){
var state_val_29419 = (state_29418[(1)]);
if((state_val_29419 === (7))){
var inst_29414 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29420_30138 = state_29418__$1;
(statearr_29420_30138[(2)] = inst_29414);

(statearr_29420_30138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (1))){
var inst_29374 = [];
var inst_29375 = inst_29374;
var inst_29376 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29418__$1 = (function (){var statearr_29421 = state_29418;
(statearr_29421[(7)] = inst_29375);

(statearr_29421[(8)] = inst_29376);

return statearr_29421;
})();
var statearr_29422_30139 = state_29418__$1;
(statearr_29422_30139[(2)] = null);

(statearr_29422_30139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (4))){
var inst_29379 = (state_29418[(9)]);
var inst_29379__$1 = (state_29418[(2)]);
var inst_29380 = (inst_29379__$1 == null);
var inst_29381 = cljs.core.not(inst_29380);
var state_29418__$1 = (function (){var statearr_29423 = state_29418;
(statearr_29423[(9)] = inst_29379__$1);

return statearr_29423;
})();
if(inst_29381){
var statearr_29424_30140 = state_29418__$1;
(statearr_29424_30140[(1)] = (5));

} else {
var statearr_29425_30141 = state_29418__$1;
(statearr_29425_30141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (15))){
var inst_29375 = (state_29418[(7)]);
var inst_29406 = cljs.core.vec(inst_29375);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29418__$1,(18),out,inst_29406);
} else {
if((state_val_29419 === (13))){
var inst_29401 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29426_30142 = state_29418__$1;
(statearr_29426_30142[(2)] = inst_29401);

(statearr_29426_30142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (6))){
var inst_29375 = (state_29418[(7)]);
var inst_29403 = inst_29375.length;
var inst_29404 = (inst_29403 > (0));
var state_29418__$1 = state_29418;
if(cljs.core.truth_(inst_29404)){
var statearr_29427_30143 = state_29418__$1;
(statearr_29427_30143[(1)] = (15));

} else {
var statearr_29428_30144 = state_29418__$1;
(statearr_29428_30144[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (17))){
var inst_29411 = (state_29418[(2)]);
var inst_29412 = cljs.core.async.close_BANG_(out);
var state_29418__$1 = (function (){var statearr_29429 = state_29418;
(statearr_29429[(10)] = inst_29411);

return statearr_29429;
})();
var statearr_29430_30145 = state_29418__$1;
(statearr_29430_30145[(2)] = inst_29412);

(statearr_29430_30145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (3))){
var inst_29416 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29418__$1,inst_29416);
} else {
if((state_val_29419 === (12))){
var inst_29375 = (state_29418[(7)]);
var inst_29394 = cljs.core.vec(inst_29375);
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29418__$1,(14),out,inst_29394);
} else {
if((state_val_29419 === (2))){
var state_29418__$1 = state_29418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29418__$1,(4),ch);
} else {
if((state_val_29419 === (11))){
var inst_29375 = (state_29418[(7)]);
var inst_29379 = (state_29418[(9)]);
var inst_29383 = (state_29418[(11)]);
var inst_29391 = inst_29375.push(inst_29379);
var tmp29431 = inst_29375;
var inst_29375__$1 = tmp29431;
var inst_29376 = inst_29383;
var state_29418__$1 = (function (){var statearr_29432 = state_29418;
(statearr_29432[(7)] = inst_29375__$1);

(statearr_29432[(12)] = inst_29391);

(statearr_29432[(8)] = inst_29376);

return statearr_29432;
})();
var statearr_29433_30146 = state_29418__$1;
(statearr_29433_30146[(2)] = null);

(statearr_29433_30146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (9))){
var inst_29376 = (state_29418[(8)]);
var inst_29387 = cljs.core.keyword_identical_QMARK_(inst_29376,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29418__$1 = state_29418;
var statearr_29434_30147 = state_29418__$1;
(statearr_29434_30147[(2)] = inst_29387);

(statearr_29434_30147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (5))){
var inst_29379 = (state_29418[(9)]);
var inst_29383 = (state_29418[(11)]);
var inst_29384 = (state_29418[(13)]);
var inst_29376 = (state_29418[(8)]);
var inst_29383__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29379) : f.call(null,inst_29379));
var inst_29384__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29383__$1,inst_29376);
var state_29418__$1 = (function (){var statearr_29435 = state_29418;
(statearr_29435[(11)] = inst_29383__$1);

(statearr_29435[(13)] = inst_29384__$1);

return statearr_29435;
})();
if(inst_29384__$1){
var statearr_29436_30150 = state_29418__$1;
(statearr_29436_30150[(1)] = (8));

} else {
var statearr_29437_30151 = state_29418__$1;
(statearr_29437_30151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (14))){
var inst_29379 = (state_29418[(9)]);
var inst_29383 = (state_29418[(11)]);
var inst_29396 = (state_29418[(2)]);
var inst_29397 = [];
var inst_29398 = inst_29397.push(inst_29379);
var inst_29375 = inst_29397;
var inst_29376 = inst_29383;
var state_29418__$1 = (function (){var statearr_29438 = state_29418;
(statearr_29438[(7)] = inst_29375);

(statearr_29438[(14)] = inst_29398);

(statearr_29438[(15)] = inst_29396);

(statearr_29438[(8)] = inst_29376);

return statearr_29438;
})();
var statearr_29439_30152 = state_29418__$1;
(statearr_29439_30152[(2)] = null);

(statearr_29439_30152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (16))){
var state_29418__$1 = state_29418;
var statearr_29440_30153 = state_29418__$1;
(statearr_29440_30153[(2)] = null);

(statearr_29440_30153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (10))){
var inst_29389 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
if(cljs.core.truth_(inst_29389)){
var statearr_29441_30154 = state_29418__$1;
(statearr_29441_30154[(1)] = (11));

} else {
var statearr_29442_30155 = state_29418__$1;
(statearr_29442_30155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (18))){
var inst_29408 = (state_29418[(2)]);
var state_29418__$1 = state_29418;
var statearr_29443_30156 = state_29418__$1;
(statearr_29443_30156[(2)] = inst_29408);

(statearr_29443_30156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29419 === (8))){
var inst_29384 = (state_29418[(13)]);
var state_29418__$1 = state_29418;
var statearr_29444_30157 = state_29418__$1;
(statearr_29444_30157[(2)] = inst_29384);

(statearr_29444_30157[(1)] = (10));


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
var cljs$core$async$state_machine__27833__auto__ = null;
var cljs$core$async$state_machine__27833__auto____0 = (function (){
var statearr_29445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29445[(0)] = cljs$core$async$state_machine__27833__auto__);

(statearr_29445[(1)] = (1));

return statearr_29445;
});
var cljs$core$async$state_machine__27833__auto____1 = (function (state_29418){
while(true){
var ret_value__27834__auto__ = (function (){try{while(true){
var result__27835__auto__ = switch__27832__auto__(state_29418);
if(cljs.core.keyword_identical_QMARK_(result__27835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27835__auto__;
}
break;
}
}catch (e29446){var ex__27836__auto__ = e29446;
var statearr_29447_30158 = state_29418;
(statearr_29447_30158[(2)] = ex__27836__auto__);


if(cljs.core.seq((state_29418[(4)]))){
var statearr_29448_30159 = state_29418;
(statearr_29448_30159[(1)] = cljs.core.first((state_29418[(4)])));

} else {
throw ex__27836__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30161 = state_29418;
state_29418 = G__30161;
continue;
} else {
return ret_value__27834__auto__;
}
break;
}
});
cljs$core$async$state_machine__27833__auto__ = function(state_29418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27833__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27833__auto____1.call(this,state_29418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27833__auto____0;
cljs$core$async$state_machine__27833__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27833__auto____1;
return cljs$core$async$state_machine__27833__auto__;
})()
})();
var state__27905__auto__ = (function (){var statearr_29449 = f__27904__auto__();
(statearr_29449[(6)] = c__27903__auto___30137);

return statearr_29449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27905__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
