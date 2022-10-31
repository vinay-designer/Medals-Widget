goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types');

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
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k17033,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__17039 = k17033;
var G__17039__$1 = (((G__17039 instanceof cljs.core.Keyword))?G__17039.fqn:null);
switch (G__17039__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17033,else__5343__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__17040){
var vec__17041 = p__17040;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17041,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17041,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types.CSSUnit{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17032){
var self__ = this;
var G__17032__$1 = this;
return (new cljs.core.RecordIter((0),G__17032__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-2144458263 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17034,other17035){
var self__ = this;
var this17034__$1 = this;
return (((!((other17035 == null)))) && ((((this17034__$1.constructor === other17035.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17034__$1.unit,other17035.unit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17034__$1.magnitude,other17035.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17034__$1.__extmap,other17035.__extmap)))))))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k17033){
var self__ = this;
var this__5347__auto____$1 = this;
var G__17053 = k17033;
var G__17053__$1 = (((G__17053 instanceof cljs.core.Keyword))?G__17053.fqn:null);
switch (G__17053__$1) {
case "unit":
case "magnitude":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17033);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__17032){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__17054 = cljs.core.keyword_identical_QMARK_;
var expr__17055 = k__5349__auto__;
if(cljs.core.truth_((pred__17054.cljs$core$IFn$_invoke$arity$2 ? pred__17054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175),expr__17055) : pred__17054.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__17055)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(G__17032,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17054.cljs$core$IFn$_invoke$arity$2 ? pred__17054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__17055) : pred__17054.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__17055)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,G__17032,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__17032),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__17032){
var self__ = this;
var this__5339__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,G__17032,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$__GT_CSSUnit(unit,magnitude){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.map__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$map__GT_CSSUnit(G__17036){
var extmap__5382__auto__ = (function (){var G__17061 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17036,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0));
if(cljs.core.record_QMARK_(G__17036)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17061);
} else {
return G__17061;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__17036),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__17036),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k17063,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__17067 = k17063;
var G__17067__$1 = (((G__17067 instanceof cljs.core.Keyword))?G__17067.fqn:null);
switch (G__17067__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17063,else__5343__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__17068){
var vec__17069 = p__17068;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17069,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types.CSSFunction{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17062){
var self__ = this;
var G__17062__$1 = this;
return (new cljs.core.RecordIter((0),G__17062__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (716070664 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17064,other17065){
var self__ = this;
var this17064__$1 = this;
return (((!((other17065 == null)))) && ((((this17064__$1.constructor === other17065.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17064__$1.f,other17065.f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17064__$1.args,other17065.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17064__$1.__extmap,other17065.__extmap)))))))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k17063){
var self__ = this;
var this__5347__auto____$1 = this;
var G__17078 = k17063;
var G__17078__$1 = (((G__17078 instanceof cljs.core.Keyword))?G__17078.fqn:null);
switch (G__17078__$1) {
case "f":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17063);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__17062){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__17079 = cljs.core.keyword_identical_QMARK_;
var expr__17080 = k__5349__auto__;
if(cljs.core.truth_((pred__17079.cljs$core$IFn$_invoke$arity$2 ? pred__17079.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__17080) : pred__17079.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__17080)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(G__17062,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17079.cljs$core$IFn$_invoke$arity$2 ? pred__17079.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__17080) : pred__17079.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__17080)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,G__17062,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__17062),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__17062){
var self__ = this;
var this__5339__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,G__17062,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$__GT_CSSFunction(f,args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.map__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$map__GT_CSSFunction(G__17066){
var extmap__5382__auto__ = (function (){var G__17085 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17066,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__17066)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17085);
} else {
return G__17085;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__17066),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__17066),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k17087,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__17092 = k17087;
var G__17092__$1 = (((G__17092 instanceof cljs.core.Keyword))?G__17092.fqn:null);
switch (G__17092__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17087,else__5343__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__17093){
var vec__17094 = p__17093;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17094,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17094,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types.CSSAtRule{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17086){
var self__ = this;
var G__17086__$1 = this;
return (new cljs.core.RecordIter((0),G__17086__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1117572042 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17088,other17089){
var self__ = this;
var this17088__$1 = this;
return (((!((other17089 == null)))) && ((((this17088__$1.constructor === other17089.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17088__$1.identifier,other17089.identifier)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17088__$1.value,other17089.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17088__$1.__extmap,other17089.__extmap)))))))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k17087){
var self__ = this;
var this__5347__auto____$1 = this;
var G__17101 = k17087;
var G__17101__$1 = (((G__17101 instanceof cljs.core.Keyword))?G__17101.fqn:null);
switch (G__17101__$1) {
case "identifier":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17087);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__17086){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__17105 = cljs.core.keyword_identical_QMARK_;
var expr__17106 = k__5349__auto__;
if(cljs.core.truth_((pred__17105.cljs$core$IFn$_invoke$arity$2 ? pred__17105.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__17106) : pred__17105.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__17106)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(G__17086,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17105.cljs$core$IFn$_invoke$arity$2 ? pred__17105.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__17106) : pred__17105.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__17106)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,G__17086,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__17086),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__17086){
var self__ = this;
var this__5339__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,G__17086,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$__GT_CSSAtRule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.map__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$map__GT_CSSAtRule(G__17090){
var extmap__5382__auto__ = (function (){var G__17112 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17090,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__17090)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17112);
} else {
return G__17112;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__17090),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__17090),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.js.map
