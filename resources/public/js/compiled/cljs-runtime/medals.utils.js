goog.provide('medals.utils');
medals.utils.get_total_count = (function medals$utils$get_total_count(p__15783){
var map__15784 = p__15783;
var map__15784__$1 = cljs.core.__destructure_map(map__15784);
var gold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15784__$1,new cljs.core.Keyword(null,"gold","gold",-806826416));
var silver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15784__$1,new cljs.core.Keyword(null,"silver","silver",1044501468));
var bronze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15784__$1,new cljs.core.Keyword(null,"bronze","bronze",151868654));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total,summation_key){
return (total + summation_key);
}),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gold,silver,bronze], null));
});
medals.utils.sort_countries = (function medals$utils$sort_countries(countries,sort_by){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (country_a,country_b){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(country_a,sort_by) > cljs.core.get.cljs$core$IFn$_invoke$arity$2(country_b,sort_by))){
return (-1);
} else {
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(country_a,sort_by) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(country_b,sort_by))){
return (1);
} else {
var G__15785 = sort_by;
var G__15785__$1 = (((G__15785 instanceof cljs.core.Keyword))?G__15785.fqn:null);
switch (G__15785__$1) {
case "total":
if((new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(country_a) > new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(country_b))){
return (-1);
} else {
return (1);
}

break;
case "gold":
if((new cljs.core.Keyword(null,"silver","silver",1044501468).cljs$core$IFn$_invoke$arity$1(country_a) > new cljs.core.Keyword(null,"silver","silver",1044501468).cljs$core$IFn$_invoke$arity$1(country_b))){
return (-1);
} else {
return (1);
}

break;
case "silver":
if((new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(country_a) > new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(country_b))){
return (-1);
} else {
return (1);
}

break;
case "bronze":
if((new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(country_a) > new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(country_b))){
return (-1);
} else {
return (1);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15785__$1)].join('')));

}

}
}
}),countries);
});
medals.utils.get_countries_with_total = (function medals$utils$get_countries_with_total(countries){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (country){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(country,new cljs.core.Keyword(null,"total","total",1916810418),medals.utils.get_total_count(country));
}),countries);
});

//# sourceMappingURL=medals.utils.js.map
