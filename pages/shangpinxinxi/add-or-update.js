(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"2c44":function(n,e,i){"use strict";(function(n){i("15dd");t(i("66fd"));var e=t(i("ad5c"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"3aee":function(n,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"6a9f"))}},r=function(){var n=this,e=n.$createElement;n._self._c},a=[]},"6f62":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,i,t,r,a,u){try{var c=n[a](u),o=c.value}catch(s){return void i(s)}c.done?e(o):Promise.resolve(o).then(t,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var u=n.apply(e,i);function c(n){a(u,t,r,c,o,"next",n)}function o(n){a(u,t,r,c,o,"throw",n)}c(void 0)}))}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("6a9f"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{cross:"",ruleForm:{shangpinbianhao:"",shangpinmingcheng:"",shangpinleixing:"",tupian:"",chandi:"",shengchanriqi:"",baozhiqi:"",shangpinxiangqing:"",price:""},shangpinleixingOptions:[],shangpinleixingIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,tupian:!1,chandi:!1,shengchanriqi:!1,baozhiqi:!1,shangpinxiangqing:!1,clicktime:!1,price:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var i=this;return u(t.default.mark((function r(){var a,u,c,o;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n.getStorageSync("nowTable"),r.next=3,i.$api.session(a);case 3:return u=r.sent,i.user=u.data,r.next=7,i.$api.option("shangpinleixing","shangpinleixing",{});case 7:if(u=r.sent,i.shangpinleixingOptions=u.data,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=17;break}return i.ruleForm.id=e.id,r.next=15,i.$api.info("shangpinxinxi",i.ruleForm.id);case 15:u=r.sent,i.ruleForm=u.data;case 17:if(i.cross=e.cross,!e.cross){r.next=65;break}c=n.getStorageSync("crossObj"),r.t0=t.default.keys(c);case 21:if((r.t1=r.t0()).done){r.next=65;break}if(o=r.t1.value,"shangpinbianhao"!=o){r.next=27;break}return i.ruleForm.shangpinbianhao=c[o],i.ro.shangpinbianhao=!0,r.abrupt("continue",21);case 27:if("shangpinmingcheng"!=o){r.next=31;break}return i.ruleForm.shangpinmingcheng=c[o],i.ro.shangpinmingcheng=!0,r.abrupt("continue",21);case 31:if("shangpinleixing"!=o){r.next=35;break}return i.ruleForm.shangpinleixing=c[o],i.ro.shangpinleixing=!0,r.abrupt("continue",21);case 35:if("tupian"!=o){r.next=39;break}return i.ruleForm.tupian=c[o],i.ro.tupian=!0,r.abrupt("continue",21);case 39:if("chandi"!=o){r.next=43;break}return i.ruleForm.chandi=c[o],i.ro.chandi=!0,r.abrupt("continue",21);case 43:if("shengchanriqi"!=o){r.next=47;break}return i.ruleForm.shengchanriqi=c[o],i.ro.shengchanriqi=!0,r.abrupt("continue",21);case 47:if("baozhiqi"!=o){r.next=51;break}return i.ruleForm.baozhiqi=c[o],i.ro.baozhiqi=!0,r.abrupt("continue",21);case 51:if("shangpinxiangqing"!=o){r.next=55;break}return i.ruleForm.shangpinxiangqing=c[o],i.ro.shangpinxiangqing=!0,r.abrupt("continue",21);case 55:if("clicktime"!=o){r.next=59;break}return i.ruleForm.clicktime=c[o],i.ro.clicktime=!0,r.abrupt("continue",21);case 59:if("price"!=o){r.next=63;break}return i.ruleForm.price=c[o],i.ro.price=!0,r.abrupt("continue",21);case 63:r.next=21;break;case 65:i.styleChange();case 66:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shengchanriqiChange:function(n){this.ruleForm.shengchanriqi=n.target.value,this.$forceUpdate()},clicktimeConfirm:function(n){console.log(n),this.ruleForm.clicktime=n.result,this.$forceUpdate()},shangpinleixingChange:function(n){this.shangpinleixingIndex=n.target.value,this.ruleForm.shangpinleixing=this.shangpinleixingOptions[this.shangpinleixingIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function i(){var r,a,u,c,o,s,l,g,p,h;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e.ruleForm.price||e.$validate.isNumber(e.ruleForm.price)){i.next=3;break}return e.$utils.msg("价格应输入数字"),i.abrupt("return");case 3:if(!e.cross){i.next=19;break}if(c=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==c){i.next=19;break}if(s=n.getStorageSync("crossObj"),c.startsWith("[")){i.next=15;break}for(l in s)l==c&&(s[l]=o);return g=n.getStorageSync("crossTable"),i.next=13,e.$api.update("".concat(g),s);case 13:i.next=19;break;case 15:r=Number(n.getStorageSync("userid")),a=s["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!a||!r){i.next=41;break}return e.ruleForm.crossuserid=r,e.ruleForm.crossrefid=a,p={page:1,limit:10,crossuserid:r,crossrefid:a},i.next=25,e.$api.list("shangpinxinxi",p);case 25:if(h=i.sent,!(h.data.total>=u)){i.next=31;break}return e.$utils.msg(n.getStorageSync("tips")),i.abrupt("return",!1);case 31:if(!e.ruleForm.id){i.next=36;break}return i.next=34,e.$api.update("shangpinxinxi",e.ruleForm);case 34:i.next=38;break;case 36:return i.next=38,e.$api.add("shangpinxinxi",e.ruleForm);case 38:e.$utils.msgBack("提交成功");case 39:i.next=49;break;case 41:if(!e.ruleForm.id){i.next=46;break}return i.next=44,e.$api.update("shangpinxinxi",e.ruleForm);case 44:i.next=48;break;case 46:return i.next=48,e.$api.add("shangpinxinxi",e.ruleForm);case 48:e.$utils.msgBack("提交成功");case 49:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,i("543d")["default"])},"7d1d":function(n,e,i){"use strict";var t=i("f309"),r=i.n(t);r.a},ad5c:function(n,e,i){"use strict";i.r(e);var t=i("3aee"),r=i("efc3");for(var a in r)"default"!==a&&function(n){i.d(e,n,(function(){return r[n]}))}(a);i("7d1d");var u,c=i("f0c5"),o=Object(c["a"])(r["default"],t["b"],t["c"],!1,null,"4ab270db",null,!1,t["a"],u);e["default"]=o.exports},efc3:function(n,e,i){"use strict";i.r(e);var t=i("6f62"),r=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=r.a},f309:function(n,e,i){}},[["2c44","common/runtime","common/vendor"]]]);