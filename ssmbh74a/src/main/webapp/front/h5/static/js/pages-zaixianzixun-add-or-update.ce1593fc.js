(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zaixianzixun-add-or-update"],{"189b":function(r,e,i){"use strict";var t=i("92d3"),a=i.n(t);a.a},"1d37":function(r,e,i){"use strict";i.r(e);var t=i("3f65"),a=i.n(t);for(var o in t)"default"!==o&&function(r){i.d(e,r,(function(){return t[r]}))}(o);e["default"]=a.a},"1f76":function(r,e,i){"use strict";var t={"w-picker":i("e2b1").default},a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("标题")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.biaoti,placeholder:"标题"},model:{value:r.ruleForm.biaoti,callback:function(e){r.$set(r.ruleForm,"biaoti",e)},expression:"ruleForm.biaoti"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(65, 65, 65, 1)",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0 0 4rpx",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.tupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.tupian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"4rpx",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.tupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"4rpx",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("咨询时间")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"咨询时间"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.toggleTab("zixunshijian")}},model:{value:r.ruleForm.zixunshijian,callback:function(e){r.$set(r.ruleForm,"zixunshijian",e)},expression:"ruleForm.zixunshijian"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商家账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shangjiazhanghao,placeholder:"商家账号"},model:{value:r.ruleForm.shangjiazhanghao,callback:function(e){r.$set(r.ruleForm,"shangjiazhanghao",e)},expression:"ruleForm.shangjiazhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("店铺名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.dianpuming,placeholder:"店铺名"},model:{value:r.ruleForm.dianpuming,callback:function(e){r.$set(r.ruleForm,"dianpuming",e)},expression:"ruleForm.dianpuming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.zhanghao,placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("手机")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("咨询问题")]),i("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"咨询问题"},model:{value:r.ruleForm.zixunwenti,callback:function(e){r.$set(r.ruleForm,"zixunwenti",e)},expression:"ruleForm.zixunwenti"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(209, 176, 134, 1)",borderColor:"rgba(209, 176, 134, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"0",width:"320rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),i("w-picker",{ref:"zixunshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.zixunshijianConfirm.apply(void 0,arguments)}}})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return t}))},"3f65":function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("96cf");var a=t(i("3b8d")),o=t(i("e2b1")),n={data:function(){return{cross:"",ruleForm:{biaoti:"",tupian:"",zixunwenti:"",zixunshijian:"",shangjiazhanghao:"",dianpuming:"",zhanghao:"",xingming:"",shouji:"",sfsh:"",shhf:""},user:{},ro:{biaoti:!1,tupian:!1,zixunwenti:!1,zixunshijian:!1,shangjiazhanghao:!1,dianpuming:!1,zhanghao:!1,xingming:!1,shouji:!1,sfsh:!1,shhf:!1,clicknum:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,t,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.zixunshijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(i);case 4:if(t=r.sent,this.user=t.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ro.zhanghao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.ruleForm.shouji=this.user.shouji,this.ro.shouji=!0,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=20;break}return this.ruleForm.id=e.id,r.next=18,this.$api.info("zaixianzixun",this.ruleForm.id);case 18:t=r.sent,this.ruleForm=t.data;case 20:if(this.cross=e.cross,!e.cross){r.next=68;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 24:if((r.t1=r.t0()).done){r.next=68;break}if(o=r.t1.value,"biaoti"!=o){r.next=30;break}return this.ruleForm.biaoti=a[o],this.ro.biaoti=!0,r.abrupt("continue",24);case 30:if("tupian"!=o){r.next=34;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,r.abrupt("continue",24);case 34:if("zixunwenti"!=o){r.next=38;break}return this.ruleForm.zixunwenti=a[o],this.ro.zixunwenti=!0,r.abrupt("continue",24);case 38:if("zixunshijian"!=o){r.next=42;break}return this.ruleForm.zixunshijian=a[o],this.ro.zixunshijian=!0,r.abrupt("continue",24);case 42:if("shangjiazhanghao"!=o){r.next=46;break}return this.ruleForm.shangjiazhanghao=a[o],this.ro.shangjiazhanghao=!0,r.abrupt("continue",24);case 46:if("dianpuming"!=o){r.next=50;break}return this.ruleForm.dianpuming=a[o],this.ro.dianpuming=!0,r.abrupt("continue",24);case 50:if("zhanghao"!=o){r.next=54;break}return this.ruleForm.zhanghao=a[o],this.ro.zhanghao=!0,r.abrupt("continue",24);case 54:if("xingming"!=o){r.next=58;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,r.abrupt("continue",24);case 58:if("shouji"!=o){r.next=62;break}return this.ruleForm.shouji=a[o],this.ro.shouji=!0,r.abrupt("continue",24);case 62:if("clicknum"!=o){r.next=66;break}return this.ruleForm.clicknum=a[o],this.ro.clicknum=!0,r.abrupt("continue",24);case 66:r.next=24;break;case 68:this.styleChange();case 69:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},zixunshijianConfirm:function(r){console.log(r),this.ruleForm.zixunshijian=r.result,this.$forceUpdate()},tupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.tupian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,i,t,a,o,n,d,s,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.biaoti){r.next=3;break}return this.$utils.msg("标题不能为空"),r.abrupt("return");case 3:if(this.ruleForm.zixunwenti){r.next=6;break}return this.$utils.msg("咨询问题不能为空"),r.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){r.next=9;break}return this.$utils.msg("点击次数应输入整数"),r.abrupt("return");case 9:if(!this.cross){r.next=25;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){r.next=25;break}if(n=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=21;break}for(d in n)d==a&&(n[d]=o);return s=uni.getStorageSync("crossTable"),r.next=19,this.$api.update("".concat(s),n);case 19:r.next=25;break;case 21:e=Number(uni.getStorageSync("userid")),i=n["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!e){r.next=47;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,u={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=31,this.$api.list("zaixianzixun",u);case 31:if(l=r.sent,!(l.data.total>=t)){r.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!this.ruleForm.id){r.next=42;break}return r.next=40,this.$api.update("zaixianzixun",this.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,this.$api.add("zaixianzixun",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!this.ruleForm.id){r.next=52;break}return r.next=50,this.$api.update("zaixianzixun",this.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,this.$api.add("zaixianzixun",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},"92d3":function(r,e,i){var t=i("9906");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("ef50a416",t,!0,{sourceMap:!1,shadowMode:!1})},9906:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-5e449fbd]{padding:%?20?%}.content[data-v-5e449fbd]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-5e449fbd]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-5e449fbd]{width:%?180?%}.avator[data-v-5e449fbd]{width:%?150?%;height:%?60?%}.right-input[data-v-5e449fbd]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-5e449fbd]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-5e449fbd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-5e449fbd]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-5e449fbd]{border:0}.cu-form-group uni-input[data-v-5e449fbd]{padding:0 %?30?%}.uni-input[data-v-5e449fbd]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-5e449fbd]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-5e449fbd]::after{line-height:%?80?%}.select .uni-input[data-v-5e449fbd]{line-height:%?80?%}.input .right-input[data-v-5e449fbd]{line-height:%?88?%}',""]),r.exports=e},db92:function(r,e,i){"use strict";i.r(e);var t=i("1f76"),a=i("1d37");for(var o in a)"default"!==o&&function(r){i.d(e,r,(function(){return a[r]}))}(o);i("189b");var n,d=i("f0c5"),s=Object(d["a"])(a["default"],t["b"],t["c"],!1,null,"5e449fbd",null,!1,t["a"],n);e["default"]=s.exports}}]);