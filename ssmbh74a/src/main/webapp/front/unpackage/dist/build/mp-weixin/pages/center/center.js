(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"3b46":function(n,e,c){"use strict";var t=c("5beb"),u=c.n(t);u.a},"4c7e":function(n,e,c){"use strict";c.r(e);var t=c("78ca"),u=c("647a");for(var o in u)"default"!==o&&function(n){c.d(e,n,(function(){return u[n]}))}(o);c("3b46");var r,a=c("f0c5"),i=Object(a["a"])(u["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);e["default"]=i.exports},"5beb":function(n,e,c){},"647a":function(n,e,c){"use strict";c.r(e);var t=c("88eb"),u=c.n(t);for(var o in t)"default"!==o&&function(n){c.d(e,n,(function(){return t[n]}))}(o);e["default"]=u.a},"78ca":function(n,e,c){"use strict";var t;c.d(e,"b",(function(){return u})),c.d(e,"c",(function(){return o})),c.d(e,"a",(function(){return t}));var u=function(){var n=this,e=n.$createElement;n._self._c},o=[]},"88eb":function(n,e,c){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(c("a34a")),u=o(c("0609"));function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e,c,t,u,o,r){try{var a=n[o](r),i=a.value}catch(s){return void c(s)}a.done?e(i):Promise.resolve(i).then(t,u)}function a(n){return function(){var e=this,c=arguments;return new Promise((function(t,u){var o=n.apply(e,c);function a(n){r(o,t,u,a,i,"next",n)}function i(n){r(o,t,u,a,i,"throw",n)}a(void 0)}))}}var i={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[],iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=this;return a(t.default.mark((function c(){var o,r,a;return t.default.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return e.role=n.getStorageSync("role"),o=n.getStorageSync("nowTable"),c.next=4,e.$api.session(o);case 4:r=c.sent,e.user=r.data,e.tableName=o,a=u.default.list(),e.menuList=a;case 9:case"end":return c.stop()}}),c)})))()},onShow:function(){var e=this;return a(t.default.mark((function c(){var o,r,a;return t.default.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return n.removeStorageSync("useridTag"),e.role=n.getStorageSync("role"),o=n.getStorageSync("nowTable"),c.next=5,e.$api.session(o);case 5:r=c.sent,e.user=r.data,e.tableName=o,a=u.default.list(),e.menuList=a;case 10:case"end":return c.stop()}}),c)})))()},methods:{onPageTap:function(e){n.setStorageSync("useridTag",1),n.navigateTo({url:e,fail:function(){n.switchTab({url:e})}})}}};e.default=i}).call(this,c("543d")["default"])},d5b0:function(n,e,c){"use strict";(function(n){c("c7eb");t(c("66fd"));var e=t(c("4c7e"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,c("543d")["createPage"])}},[["d5b0","common/runtime","common/vendor"]]]);