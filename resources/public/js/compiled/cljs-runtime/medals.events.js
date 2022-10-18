goog.provide('medals.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("medals.events","initialize-db","medals.events/initialize-db",1227622977),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__34614__auto__ = medals.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__34614__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34614__auto__;
}catch (e34784){var e = e34784;
throw e;
}}):(function (){
return medals.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("medals.events","change-selected-sort","medals.events/change-selected-sort",693596416),(function (db,p__34785){
var vec__34786 = p__34785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786,(0),null);
var selected_sort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sort","sort",953465918),selected_sort);
}));

//# sourceMappingURL=medals.events.js.map
