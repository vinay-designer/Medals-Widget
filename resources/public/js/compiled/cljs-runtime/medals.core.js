goog.provide('medals.core');
medals.core.dev_setup = (function medals$core$dev_setup(){
if(medals.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
medals.core.mount_root = (function medals$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [medals.views.main_panel], null),root_el);
});
medals.core.init = (function medals$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("medals.events","initialize-db","medals.events/initialize-db",1227622977)], null));

medals.core.dev_setup();

return medals.core.mount_root();
});

//# sourceMappingURL=medals.core.js.map
