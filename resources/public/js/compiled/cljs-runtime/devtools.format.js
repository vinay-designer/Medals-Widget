goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_12334 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._header[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._header["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_12334(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_12335 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._has_body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._has_body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_12335(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_12336 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_12336(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12196 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12196["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12197 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12197["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12198 = temp__5802__auto____$2;
return (o12198["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12201 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12201["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12202 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12202["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12203 = temp__5802__auto____$2;
return (o12203["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12204 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12204["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12205 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12205["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12206 = temp__5802__auto____$2;
return (o12206["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12211 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12211["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12212 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12212["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12213 = temp__5802__auto____$2;
return (o12213["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12217 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12217["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12218 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12218["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12219 = temp__5802__auto____$2;
return (o12219["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12223 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12223["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12224 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12224["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12225 = temp__5802__auto____$2;
return (o12225["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12235 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12235["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12236 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12236["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12237 = temp__5802__auto____$2;
return (o12237["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12342 = arguments.length;
var i__5767__auto___12343 = (0);
while(true){
if((i__5767__auto___12343 < len__5766__auto___12342)){
args__5772__auto__.push((arguments[i__5767__auto___12343]));

var G__12344 = (i__5767__auto___12343 + (1));
i__5767__auto___12343 = G__12344;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq12247){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12247));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12346 = arguments.length;
var i__5767__auto___12347 = (0);
while(true){
if((i__5767__auto___12347 < len__5766__auto___12346)){
args__5772__auto__.push((arguments[i__5767__auto___12347]));

var G__12348 = (i__5767__auto___12347 + (1));
i__5767__auto___12347 = G__12348;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq12252){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12252));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12349 = arguments.length;
var i__5767__auto___12350 = (0);
while(true){
if((i__5767__auto___12350 < len__5766__auto___12349)){
args__5772__auto__.push((arguments[i__5767__auto___12350]));

var G__12351 = (i__5767__auto___12350 + (1));
i__5767__auto___12350 = G__12351;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq12255){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12255));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12352 = arguments.length;
var i__5767__auto___12353 = (0);
while(true){
if((i__5767__auto___12353 < len__5766__auto___12352)){
args__5772__auto__.push((arguments[i__5767__auto___12353]));

var G__12354 = (i__5767__auto___12353 + (1));
i__5767__auto___12353 = G__12354;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12258){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12258));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12357 = arguments.length;
var i__5767__auto___12358 = (0);
while(true){
if((i__5767__auto___12358 < len__5766__auto___12357)){
args__5772__auto__.push((arguments[i__5767__auto___12358]));

var G__12360 = (i__5767__auto___12358 + (1));
i__5767__auto___12358 = G__12360;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq12275){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12275));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12363 = arguments.length;
var i__5767__auto___12364 = (0);
while(true){
if((i__5767__auto___12364 < len__5766__auto___12363)){
args__5772__auto__.push((arguments[i__5767__auto___12364]));

var G__12365 = (i__5767__auto___12364 + (1));
i__5767__auto___12364 = G__12365;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq12293){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12293));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12369 = arguments.length;
var i__5767__auto___12370 = (0);
while(true){
if((i__5767__auto___12370 < len__5766__auto___12369)){
args__5772__auto__.push((arguments[i__5767__auto___12370]));

var G__12372 = (i__5767__auto___12370 + (1));
i__5767__auto___12370 = G__12372;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq12299){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12299));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12374 = arguments.length;
var i__5767__auto___12375 = (0);
while(true){
if((i__5767__auto___12375 < len__5766__auto___12374)){
args__5772__auto__.push((arguments[i__5767__auto___12375]));

var G__12379 = (i__5767__auto___12375 + (1));
i__5767__auto___12375 = G__12379;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12315){
var vec__12316 = p__12315;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12316,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__12306_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__12306_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq12310){
var G__12311 = cljs.core.first(seq12310);
var seq12310__$1 = cljs.core.next(seq12310);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12311,seq12310__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__12320 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__12321 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__12322 = (function (){var G__12324 = new cljs.core.Keyword(null,"li","li",723558921);
var G__12325 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__12326 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12324,G__12325,G__12326) : devtools.format.make_template_fn.call(null,G__12324,G__12325,G__12326));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12320,G__12321,G__12322) : devtools.format.make_template_fn.call(null,G__12320,G__12321,G__12322));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12383 = arguments.length;
var i__5767__auto___12384 = (0);
while(true){
if((i__5767__auto___12384 < len__5766__auto___12383)){
args__5772__auto__.push((arguments[i__5767__auto___12384]));

var G__12385 = (i__5767__auto___12384 + (1));
i__5767__auto___12384 = G__12385;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq12328){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12328));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___12396 = arguments.length;
var i__5767__auto___12397 = (0);
while(true){
if((i__5767__auto___12397 < len__5766__auto___12396)){
args__5772__auto__.push((arguments[i__5767__auto___12397]));

var G__12398 = (i__5767__auto___12397 + (1));
i__5767__auto___12397 = G__12398;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12330){
var G__12331 = cljs.core.first(seq12330);
var seq12330__$1 = cljs.core.next(seq12330);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12331,seq12330__$1);
}));


//# sourceMappingURL=devtools.format.js.map
