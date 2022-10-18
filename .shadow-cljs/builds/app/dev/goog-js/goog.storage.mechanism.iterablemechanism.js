["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/storage/mechanism/iterablemechanism.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.storage.mechanism.IterableMechanism\");\n  goog.module.declareLegacyNamespace();\n  const Mechanism = goog.require(\"goog.storage.mechanism.Mechanism\");\n  const {Iterator:GoogIterator} = goog.require(\"goog.iter\");\n  const {ShimIterable} = goog.require(\"goog.iter.es6\");\n  const {assertString} = goog.require(\"goog.asserts\");\n  const IterableMechanism = function() {\n    IterableMechanism.base(this, \"constructor\");\n  };\n  goog.inherits(IterableMechanism, Mechanism);\n  IterableMechanism.prototype.getCount = function() {\n    let count = 0;\n    for (const key of this) {\n      assertString(key);\n      count++;\n    }\n    return count;\n  };\n  IterableMechanism.prototype.__iterator__ = goog.abstractMethod;\n  IterableMechanism.prototype[Symbol.iterator] = function() {\n    return ShimIterable.of(this.__iterator__(true)).toEs6();\n  };\n  IterableMechanism.prototype.clear = function() {\n    const keys = Array.from(this);\n    for (const key of keys) {\n      this.remove(key);\n    }\n  };\n  exports = IterableMechanism;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Interface for storing, retrieving and scanning data using some\n * persistence mechanism.\n */\n\ngoog.module('goog.storage.mechanism.IterableMechanism');\ngoog.module.declareLegacyNamespace();\n\nconst Mechanism = goog.require('goog.storage.mechanism.Mechanism');\nconst {Iterator: GoogIterator} = goog.require('goog.iter');\nconst {ShimIterable} = goog.require('goog.iter.es6');\nconst {assertString} = goog.require('goog.asserts');\n\n\n\n/**\n * Interface for all iterable storage mechanisms.\n *\n * @constructor\n * @struct\n * @extends {Mechanism}\n * @implements {Iterable<!Array<string>>}\n * @abstract\n */\nconst IterableMechanism = function() {\n  'use strict';\n  IterableMechanism.base(this, 'constructor');\n};\ngoog.inherits(IterableMechanism, Mechanism);\n\n\n/**\n * Get the number of stored key-value pairs.\n *\n * Could be overridden in a subclass, as the default implementation is not very\n * efficient - it iterates over all keys.\n *\n * @return {number} Number of stored elements.\n */\nIterableMechanism.prototype.getCount = function() {\n  'use strict';\n  let count = 0;\n  for (const key of this) {\n    assertString(key);\n    count++;\n  }\n  return count;\n};\n\n\n/**\n * Returns an iterator that iterates over the elements in the storage. Will\n * throw goog.iter.StopIteration after the last element.\n *\n * @param {boolean=} opt_keys True to iterate over the keys. False to iterate\n *     over the values.  The default value is false.\n * @return {!GoogIterator} The iterator.\n * @deprecated Use ES6 iteration protocols instead.\n */\nIterableMechanism.prototype.__iterator__ = goog.abstractMethod;\n\n\n/**\n * Returns an interator that iterates over all the keys for elements in storage.\n *\n * @return {!IteratorIterable<string>}\n */\nIterableMechanism.prototype[Symbol.iterator] = function() {\n  return ShimIterable.of(this.__iterator__(true)).toEs6();\n};\n\n\n/**\n * Remove all key-value pairs.\n *\n * Could be overridden in a subclass, as the default implementation is not\n * very efficient - it iterates over all keys.\n */\nIterableMechanism.prototype.clear = function() {\n  'use strict';\n  // This converts the keys to an array first because otherwise\n  // removing while iterating results in unstable ordering of keys and\n  // can skip keys or terminate early.\n  const keys = Array.from(this);\n  for (const key of keys) {\n    this.remove(key);\n  }\n};\n\nexports = IterableMechanism;\n","~:compiled-at",1666088249517,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.storage.mechanism.iterablemechanism.js\",\n\"lineCount\":34,\n\"mappings\":\"AAWA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAAAA,MAAKC,CAAAA,MAAL,CAAY,0CAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAMC,YAAYH,IAAKI,CAAAA,OAAL,CAAa,kCAAb,CAAlB;AACA,QAAM,CAAC,SAAUC,YAAX,CAAA,GAA2BL,IAAKI,CAAAA,OAAL,CAAa,WAAb,CAAjC;AACA,QAAM,CAACE,YAAD,CAAA,GAAiBN,IAAKI,CAAAA,OAAL,CAAa,eAAb,CAAvB;AACA,QAAM,CAACG,YAAD,CAAA,GAAiBP,IAAKI,CAAAA,OAAL,CAAa,cAAb,CAAvB;AAaA,QAAMI,oBAAoBA,QAAQ,EAAG;AAEnCA,qBAAkBC,CAAAA,IAAlB,CAAuB,IAAvB,EAA6B,aAA7B,CAAA;AAFmC,GAArC;AAIAT,MAAKU,CAAAA,QAAL,CAAcF,iBAAd,EAAiCL,SAAjC,CAAA;AAWAK,mBAAkBG,CAAAA,SAAUC,CAAAA,QAA5B,GAAuCC,QAAQ,EAAG;AAEhD,QAAIC,QAAQ,CAAZ;AACA,SAAK,MAAMC,GAAX,IAAkB,IAAlB,CAAwB;AACtBR,kBAAA,CAAaQ,GAAb,CAAA;AACAD,WAAA,EAAA;AAFsB;AAIxB,WAAOA,KAAP;AAPgD,GAAlD;AAoBAN,mBAAkBG,CAAAA,SAAUK,CAAAA,YAA5B,GAA2ChB,IAAKiB,CAAAA,cAAhD;AAQAT,mBAAkBG,CAAAA,SAAlB,CAA4BO,MAAOC,CAAAA,QAAnC,CAAA,GAA+C,QAAQ,EAAG;AACxD,WAAOb,YAAac,CAAAA,EAAb,CAAgB,IAAKJ,CAAAA,YAAL,CAAkB,IAAlB,CAAhB,CAAyCK,CAAAA,KAAzC,EAAP;AADwD,GAA1D;AAWAb,mBAAkBG,CAAAA,SAAUW,CAAAA,KAA5B,GAAoCC,QAAQ,EAAG;AAK7C,UAAMC,OAAOC,KAAMC,CAAAA,IAAN,CAAW,IAAX,CAAb;AACA,SAAK,MAAMX,GAAX,IAAkBS,IAAlB;AACE,UAAKG,CAAAA,MAAL,CAAYZ,GAAZ,CAAA;AADF;AAN6C,GAA/C;AAWAa,SAAA,GAAUpB,iBAAV;AApFA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/storage/mechanism/iterablemechanism.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Interface for storing, retrieving and scanning data using some\\n * persistence mechanism.\\n */\\n\\ngoog.module('goog.storage.mechanism.IterableMechanism');\\ngoog.module.declareLegacyNamespace();\\n\\nconst Mechanism = goog.require('goog.storage.mechanism.Mechanism');\\nconst {Iterator: GoogIterator} = goog.require('goog.iter');\\nconst {ShimIterable} = goog.require('goog.iter.es6');\\nconst {assertString} = goog.require('goog.asserts');\\n\\n\\n\\n/**\\n * Interface for all iterable storage mechanisms.\\n *\\n * @constructor\\n * @struct\\n * @extends {Mechanism}\\n * @implements {Iterable<!Array<string>>}\\n * @abstract\\n */\\nconst IterableMechanism = function() {\\n  'use strict';\\n  IterableMechanism.base(this, 'constructor');\\n};\\ngoog.inherits(IterableMechanism, Mechanism);\\n\\n\\n/**\\n * Get the number of stored key-value pairs.\\n *\\n * Could be overridden in a subclass, as the default implementation is not very\\n * efficient - it iterates over all keys.\\n *\\n * @return {number} Number of stored elements.\\n */\\nIterableMechanism.prototype.getCount = function() {\\n  'use strict';\\n  let count = 0;\\n  for (const key of this) {\\n    assertString(key);\\n    count++;\\n  }\\n  return count;\\n};\\n\\n\\n/**\\n * Returns an iterator that iterates over the elements in the storage. Will\\n * throw goog.iter.StopIteration after the last element.\\n *\\n * @param {boolean=} opt_keys True to iterate over the keys. False to iterate\\n *     over the values.  The default value is false.\\n * @return {!GoogIterator} The iterator.\\n * @deprecated Use ES6 iteration protocols instead.\\n */\\nIterableMechanism.prototype.__iterator__ = goog.abstractMethod;\\n\\n\\n/**\\n * Returns an interator that iterates over all the keys for elements in storage.\\n *\\n * @return {!IteratorIterable<string>}\\n */\\nIterableMechanism.prototype[Symbol.iterator] = function() {\\n  return ShimIterable.of(this.__iterator__(true)).toEs6();\\n};\\n\\n\\n/**\\n * Remove all key-value pairs.\\n *\\n * Could be overridden in a subclass, as the default implementation is not\\n * very efficient - it iterates over all keys.\\n */\\nIterableMechanism.prototype.clear = function() {\\n  'use strict';\\n  // This converts the keys to an array first because otherwise\\n  // removing while iterating results in unstable ordering of keys and\\n  // can skip keys or terminate early.\\n  const keys = Array.from(this);\\n  for (const key of keys) {\\n    this.remove(key);\\n  }\\n};\\n\\nexports = IterableMechanism;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"Mechanism\",\"require\",\"GoogIterator\",\"ShimIterable\",\"assertString\",\"IterableMechanism\",\"base\",\"inherits\",\"prototype\",\"getCount\",\"IterableMechanism.prototype.getCount\",\"count\",\"key\",\"__iterator__\",\"abstractMethod\",\"Symbol\",\"iterator\",\"of\",\"toEs6\",\"clear\",\"IterableMechanism.prototype.clear\",\"keys\",\"Array\",\"from\",\"remove\",\"exports\"]\n}\n"]