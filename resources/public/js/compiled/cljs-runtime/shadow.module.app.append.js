
shadow.cljs.devtools.client.env.module_loaded('app');

try { medals.core.init(); } catch (e) { console.error("An error occurred when calling (medals.core/init)"); throw(e); }