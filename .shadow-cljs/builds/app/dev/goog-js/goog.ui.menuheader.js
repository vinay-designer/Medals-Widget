["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/ui/menuheader.js"],"~:js","goog.provide(\"goog.ui.MenuHeader\");\ngoog.require(\"goog.ui.Component\");\ngoog.require(\"goog.ui.Control\");\ngoog.require(\"goog.ui.MenuHeaderRenderer\");\ngoog.require(\"goog.ui.registry\");\ngoog.requireType(\"goog.dom.DomHelper\");\ngoog.requireType(\"goog.ui.ControlContent\");\ngoog.ui.MenuHeader = function(content, opt_domHelper, opt_renderer) {\n  goog.ui.Control.call(this, content, opt_renderer || goog.ui.MenuHeaderRenderer.getInstance(), opt_domHelper);\n  this.setSupportedState(goog.ui.Component.State.DISABLED, false);\n  this.setSupportedState(goog.ui.Component.State.HOVER, false);\n  this.setSupportedState(goog.ui.Component.State.ACTIVE, false);\n  this.setSupportedState(goog.ui.Component.State.FOCUSED, false);\n  this.setStateInternal(goog.ui.Component.State.DISABLED);\n};\ngoog.inherits(goog.ui.MenuHeader, goog.ui.Control);\ngoog.ui.registry.setDecoratorByClassName(goog.ui.MenuHeaderRenderer.CSS_CLASS, function() {\n  return new goog.ui.MenuHeader(null);\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A class for representing menu headers.\n * @see goog.ui.Menu\n */\n\ngoog.provide('goog.ui.MenuHeader');\n\ngoog.require('goog.ui.Component');\ngoog.require('goog.ui.Control');\ngoog.require('goog.ui.MenuHeaderRenderer');\ngoog.require('goog.ui.registry');\ngoog.requireType('goog.dom.DomHelper');\ngoog.requireType('goog.ui.ControlContent');\n\n\n\n/**\n * Class representing a menu header.\n * @param {goog.ui.ControlContent} content Text caption or DOM structure to\n *     display as the content of the item (use to add icons or styling to\n *     menus).\n * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for\n *     document interactions.\n * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.\n * @constructor\n * @extends {goog.ui.Control}\n */\ngoog.ui.MenuHeader = function(content, opt_domHelper, opt_renderer) {\n  'use strict';\n  goog.ui.Control.call(\n      this, content, opt_renderer || goog.ui.MenuHeaderRenderer.getInstance(),\n      opt_domHelper);\n\n  this.setSupportedState(goog.ui.Component.State.DISABLED, false);\n  this.setSupportedState(goog.ui.Component.State.HOVER, false);\n  this.setSupportedState(goog.ui.Component.State.ACTIVE, false);\n  this.setSupportedState(goog.ui.Component.State.FOCUSED, false);\n\n  // Headers are always considered disabled.\n  this.setStateInternal(goog.ui.Component.State.DISABLED);\n};\ngoog.inherits(goog.ui.MenuHeader, goog.ui.Control);\n\n\n// Register a decorator factory function for goog.ui.MenuHeaders.\ngoog.ui.registry.setDecoratorByClassName(\n    goog.ui.MenuHeaderRenderer.CSS_CLASS, function() {\n      'use strict';\n      // MenuHeader defaults to using MenuHeaderRenderer.\n      return new goog.ui.MenuHeader(null);\n    });\n","~:compiled-at",1666088249586,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.ui.menuheader.js\",\n\"lineCount\":20,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,oBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,mBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,iBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,4BAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,kBAAb,CAAA;AACAF,IAAKG,CAAAA,WAAL,CAAiB,oBAAjB,CAAA;AACAH,IAAKG,CAAAA,WAAL,CAAiB,wBAAjB,CAAA;AAeAH,IAAKI,CAAAA,EAAGC,CAAAA,UAAR,GAAqBC,QAAQ,CAACC,OAAD,EAAUC,aAAV,EAAyBC,YAAzB,CAAuC;AAElET,MAAKI,CAAAA,EAAGM,CAAAA,OAAQC,CAAAA,IAAhB,CACI,IADJ,EACUJ,OADV,EACmBE,YADnB,IACmCT,IAAKI,CAAAA,EAAGQ,CAAAA,kBAAmBC,CAAAA,WAA3B,EADnC,EAEIL,aAFJ,CAAA;AAIA,MAAKM,CAAAA,iBAAL,CAAuBd,IAAKI,CAAAA,EAAGW,CAAAA,SAAUC,CAAAA,KAAMC,CAAAA,QAA/C,EAAyD,KAAzD,CAAA;AACA,MAAKH,CAAAA,iBAAL,CAAuBd,IAAKI,CAAAA,EAAGW,CAAAA,SAAUC,CAAAA,KAAME,CAAAA,KAA/C,EAAsD,KAAtD,CAAA;AACA,MAAKJ,CAAAA,iBAAL,CAAuBd,IAAKI,CAAAA,EAAGW,CAAAA,SAAUC,CAAAA,KAAMG,CAAAA,MAA/C,EAAuD,KAAvD,CAAA;AACA,MAAKL,CAAAA,iBAAL,CAAuBd,IAAKI,CAAAA,EAAGW,CAAAA,SAAUC,CAAAA,KAAMI,CAAAA,OAA/C,EAAwD,KAAxD,CAAA;AAGA,MAAKC,CAAAA,gBAAL,CAAsBrB,IAAKI,CAAAA,EAAGW,CAAAA,SAAUC,CAAAA,KAAMC,CAAAA,QAA9C,CAAA;AAZkE,CAApE;AAcAjB,IAAKsB,CAAAA,QAAL,CAActB,IAAKI,CAAAA,EAAGC,CAAAA,UAAtB,EAAkCL,IAAKI,CAAAA,EAAGM,CAAAA,OAA1C,CAAA;AAIAV,IAAKI,CAAAA,EAAGmB,CAAAA,QAASC,CAAAA,uBAAjB,CACIxB,IAAKI,CAAAA,EAAGQ,CAAAA,kBAAmBa,CAAAA,SAD/B,EAC0C,QAAQ,EAAG;AAG/C,SAAO,IAAIzB,IAAKI,CAAAA,EAAGC,CAAAA,UAAZ,CAAuB,IAAvB,CAAP;AAH+C,CADrD,CAAA;;\",\n\"sources\":[\"goog/ui/menuheader.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A class for representing menu headers.\\n * @see goog.ui.Menu\\n */\\n\\ngoog.provide('goog.ui.MenuHeader');\\n\\ngoog.require('goog.ui.Component');\\ngoog.require('goog.ui.Control');\\ngoog.require('goog.ui.MenuHeaderRenderer');\\ngoog.require('goog.ui.registry');\\ngoog.requireType('goog.dom.DomHelper');\\ngoog.requireType('goog.ui.ControlContent');\\n\\n\\n\\n/**\\n * Class representing a menu header.\\n * @param {goog.ui.ControlContent} content Text caption or DOM structure to\\n *     display as the content of the item (use to add icons or styling to\\n *     menus).\\n * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for\\n *     document interactions.\\n * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.\\n * @constructor\\n * @extends {goog.ui.Control}\\n */\\ngoog.ui.MenuHeader = function(content, opt_domHelper, opt_renderer) {\\n  'use strict';\\n  goog.ui.Control.call(\\n      this, content, opt_renderer || goog.ui.MenuHeaderRenderer.getInstance(),\\n      opt_domHelper);\\n\\n  this.setSupportedState(goog.ui.Component.State.DISABLED, false);\\n  this.setSupportedState(goog.ui.Component.State.HOVER, false);\\n  this.setSupportedState(goog.ui.Component.State.ACTIVE, false);\\n  this.setSupportedState(goog.ui.Component.State.FOCUSED, false);\\n\\n  // Headers are always considered disabled.\\n  this.setStateInternal(goog.ui.Component.State.DISABLED);\\n};\\ngoog.inherits(goog.ui.MenuHeader, goog.ui.Control);\\n\\n\\n// Register a decorator factory function for goog.ui.MenuHeaders.\\ngoog.ui.registry.setDecoratorByClassName(\\n    goog.ui.MenuHeaderRenderer.CSS_CLASS, function() {\\n      'use strict';\\n      // MenuHeader defaults to using MenuHeaderRenderer.\\n      return new goog.ui.MenuHeader(null);\\n    });\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"ui\",\"MenuHeader\",\"goog.ui.MenuHeader\",\"content\",\"opt_domHelper\",\"opt_renderer\",\"Control\",\"call\",\"MenuHeaderRenderer\",\"getInstance\",\"setSupportedState\",\"Component\",\"State\",\"DISABLED\",\"HOVER\",\"ACTIVE\",\"FOCUSED\",\"setStateInternal\",\"inherits\",\"registry\",\"setDecoratorByClassName\",\"CSS_CLASS\"]\n}\n"]