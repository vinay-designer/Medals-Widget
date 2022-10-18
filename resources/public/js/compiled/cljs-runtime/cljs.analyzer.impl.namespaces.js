goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__32822 = libspec;
var seq__32823 = cljs.core.seq(vec__32822);
var first__32824 = cljs.core.first(seq__32823);
var seq__32823__$1 = cljs.core.next(seq__32823);
var lib = first__32824;
var spec = seq__32823__$1;
var libspec__$1 = vec__32822;
var vec__32825 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(0),null);
var vec__32828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(1),null);
var seq__32829 = cljs.core.seq(vec__32828);
var first__32830 = cljs.core.first(seq__32829);
var seq__32829__$1 = cljs.core.next(seq__32829);
var _ = first__32830;
var first__32830__$1 = cljs.core.first(seq__32829__$1);
var seq__32829__$2 = cljs.core.next(seq__32829__$1);
var alias = first__32830__$1;
var post_spec = seq__32829__$2;
var post = vec__32828;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__32831 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32831,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__32831;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__32832 = cljs.core.seq(new_as_aliases);
var chunk__32833 = null;
var count__32834 = (0);
var i__32835 = (0);
while(true){
if((i__32835 < count__32834)){
var vec__32850 = chunk__32833.cljs$core$IIndexed$_nth$arity$2(null,i__32835);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32850,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32850,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__32903 = seq__32832;
var G__32904 = chunk__32833;
var G__32905 = count__32834;
var G__32906 = (i__32835 + (1));
seq__32832 = G__32903;
chunk__32833 = G__32904;
count__32834 = G__32905;
i__32835 = G__32906;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32832);
if(temp__5804__auto__){
var seq__32832__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32832__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32832__$1);
var G__32907 = cljs.core.chunk_rest(seq__32832__$1);
var G__32908 = c__5565__auto__;
var G__32909 = cljs.core.count(c__5565__auto__);
var G__32910 = (0);
seq__32832 = G__32907;
chunk__32833 = G__32908;
count__32834 = G__32909;
i__32835 = G__32910;
continue;
} else {
var vec__32857 = cljs.core.first(seq__32832__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32857,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32857,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__32911 = cljs.core.next(seq__32832__$1);
var G__32912 = null;
var G__32913 = (0);
var G__32914 = (0);
seq__32832 = G__32911;
chunk__32833 = G__32912;
count__32834 = G__32913;
i__32835 = G__32914;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__32869 = arguments.length;
switch (G__32869) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__32876 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__32876__$1 = cljs.core.__destructure_map(map__32876);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32876__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32876__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__32880 = ret__$1;
var G__32880__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32880,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__32880);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32880__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__32880__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__32887,p__32888){
var map__32889 = p__32887;
var map__32889__$1 = cljs.core.__destructure_map(map__32889);
var ret__$1 = map__32889__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32889__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__32890 = p__32888;
var seq__32891 = cljs.core.seq(vec__32890);
var first__32892 = cljs.core.first(seq__32891);
var seq__32891__$1 = cljs.core.next(seq__32891);
var spec_key = first__32892;
var libspecs = seq__32891__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__32893 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__32893__$1 = cljs.core.__destructure_map(map__32893);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32893__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32893__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__32894 = ret__$1;
var G__32894__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32894,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__32894);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32894__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__32894__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
