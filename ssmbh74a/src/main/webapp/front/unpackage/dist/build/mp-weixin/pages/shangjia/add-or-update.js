(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{3072:function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"8b84"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"49a4":function(e,n,r){"use strict";r.r(n);var t=r("3072"),a=r("997a");for(var i in a)"default"!==i&&function(e){r.d(n,e,(function(){return a[e]}))}(i);r("ebc7");var u,o=r("f0c5"),c=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"65187b8e",null,!1,t["a"],u);n["default"]=c.exports},"4edf":function(e,n,r){"use strict";(function(e){r("c7eb");t(r("66fd"));var n=t(r("49a4"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"6ddc":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,r,t,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var u=e.apply(n,r);function o(e){i(u,t,a,o,c,"next",e)}function c(e){i(u,t,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("8b84"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",ruleForm:{shangjiazhanghao:"",mima:"",dianpuming:"",fuzeren:"",lianxidianhua:"",jianzhumianji:"",dianpudizhi:"",fengmian:"",jingyingfanwei:"",money:""},user:{},ro:{shangjiazhanghao:!1,mima:!1,dianpuming:!1,fuzeren:!1,lianxidianhua:!1,jianzhumianji:!1,dianpudizhi:!1,fengmian:!1,jingyingfanwei:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,money:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(t.default.mark((function a(){var i,u,o,c;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,r.$api.session(i);case 3:if(u=a.sent,r.user=u.data,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return r.ruleForm.id=n.id,a.next=11,r.$api.info("shangjia",r.ruleForm.id);case 11:u=a.sent,r.ruleForm=u.data;case 13:if(r.cross=n.cross,!n.cross){a.next=77;break}o=e.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=77;break}if(c=a.t1.value,"shangjiazhanghao"!=c){a.next=23;break}return r.ruleForm.shangjiazhanghao=o[c],r.ro.shangjiazhanghao=!0,a.abrupt("continue",17);case 23:if("mima"!=c){a.next=27;break}return r.ruleForm.mima=o[c],r.ro.mima=!0,a.abrupt("continue",17);case 27:if("dianpuming"!=c){a.next=31;break}return r.ruleForm.dianpuming=o[c],r.ro.dianpuming=!0,a.abrupt("continue",17);case 31:if("fuzeren"!=c){a.next=35;break}return r.ruleForm.fuzeren=o[c],r.ro.fuzeren=!0,a.abrupt("continue",17);case 35:if("lianxidianhua"!=c){a.next=39;break}return r.ruleForm.lianxidianhua=o[c],r.ro.lianxidianhua=!0,a.abrupt("continue",17);case 39:if("jianzhumianji"!=c){a.next=43;break}return r.ruleForm.jianzhumianji=o[c],r.ro.jianzhumianji=!0,a.abrupt("continue",17);case 43:if("dianpudizhi"!=c){a.next=47;break}return r.ruleForm.dianpudizhi=o[c],r.ro.dianpudizhi=!0,a.abrupt("continue",17);case 47:if("fengmian"!=c){a.next=51;break}return r.ruleForm.fengmian=o[c],r.ro.fengmian=!0,a.abrupt("continue",17);case 51:if("jingyingfanwei"!=c){a.next=55;break}return r.ruleForm.jingyingfanwei=o[c],r.ro.jingyingfanwei=!0,a.abrupt("continue",17);case 55:if("thumbsupnum"!=c){a.next=59;break}return r.ruleForm.thumbsupnum=o[c],r.ro.thumbsupnum=!0,a.abrupt("continue",17);case 59:if("crazilynum"!=c){a.next=63;break}return r.ruleForm.crazilynum=o[c],r.ro.crazilynum=!0,a.abrupt("continue",17);case 63:if("clicktime"!=c){a.next=67;break}return r.ruleForm.clicktime=o[c],r.ro.clicktime=!0,a.abrupt("continue",17);case 67:if("clicknum"!=c){a.next=71;break}return r.ruleForm.clicknum=o[c],r.ro.clicknum=!0,a.abrupt("continue",17);case 71:if("money"!=c){a.next=75;break}return r.ruleForm.money=o[c],r.ro.money=!0,a.abrupt("continue",17);case 75:a.next=17;break;case 77:r.styleChange();case 78:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function r(){var a,i,u,o,c,s,l,m,f,d;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.shangjiazhanghao){r.next=3;break}return n.$utils.msg("商家账号不能为空"),r.abrupt("return");case 3:if(n.ruleForm.mima){r.next=6;break}return n.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(n.ruleForm.dianpuming){r.next=9;break}return n.$utils.msg("店铺名不能为空"),r.abrupt("return");case 9:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){r.next=12;break}return n.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 12:if(!n.ruleForm.thumbsupnum||n.$validate.isIntNumer(n.ruleForm.thumbsupnum)){r.next=15;break}return n.$utils.msg("赞应输入整数"),r.abrupt("return");case 15:if(!n.ruleForm.crazilynum||n.$validate.isIntNumer(n.ruleForm.crazilynum)){r.next=18;break}return n.$utils.msg("踩应输入整数"),r.abrupt("return");case 18:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){r.next=21;break}return n.$utils.msg("点击次数应输入整数"),r.abrupt("return");case 21:if(!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){r.next=24;break}return n.$utils.msg("余额应输入数字"),r.abrupt("return");case 24:if(!n.cross){r.next=40;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){r.next=40;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=36;break}for(l in s)l==o&&(s[l]=c);return m=e.getStorageSync("crossTable"),r.next=34,n.$api.update("".concat(m),s);case 34:r.next=40;break;case 36:a=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 40:if(!i||!a){r.next=62;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:a,crossrefid:i},r.next=46,n.$api.list("shangjia",f);case 46:if(d=r.sent,!(d.data.total>=u)){r.next=52;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 52:if(!n.ruleForm.id){r.next=57;break}return r.next=55,n.$api.update("shangjia",n.ruleForm);case 55:r.next=59;break;case 57:return r.next=59,n.$api.add("shangjia",n.ruleForm);case 59:n.$utils.msgBack("提交成功");case 60:r.next=70;break;case 62:if(!n.ruleForm.id){r.next=67;break}return r.next=65,n.$api.update("shangjia",n.ruleForm);case 65:r.next=69;break;case 67:return r.next=69,n.$api.add("shangjia",n.ruleForm);case 69:n.$utils.msgBack("提交成功");case 70:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,r("543d")["default"])},"997a":function(e,n,r){"use strict";r.r(n);var t=r("6ddc"),a=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);n["default"]=a.a},ebc7:function(e,n,r){"use strict";var t=r("fe30"),a=r.n(t);a.a},fe30:function(e,n,r){}},[["4edf","common/runtime","common/vendor"]]]);