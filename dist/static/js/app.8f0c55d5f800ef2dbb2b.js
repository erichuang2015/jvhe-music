webpackJsonp([1],Array(45).concat([function(t,e,n){"use strict";var r=n(24),a=n(134),s=n(121),o=n.n(s),i=n(122),c=n.n(i),u=n(123),d=n.n(u),l=n(124),f=n.n(l);r.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",redirect:"/recommend"},{path:"/rank",component:o.a},{path:"/recommend",component:c.a},{path:"/search",component:d.a},{path:"/singer",component:f.a}]})},function(t,e){},function(t,e,n){function r(t){n(114)}var a=n(3)(n(65),n(131),r,"data-v-73b00972",null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(120),a=n.n(r),s=n(125),o=n.n(s);e.default={name:"app",components:{MHeader:a.a,Tab:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header",data:function(){return{msg:"聚合音乐"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"rank",data:function(){return{msg:"排行页面"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(74),a=n.n(r),s=n(119),o=n.n(s);e.default={name:"recommend",data:function(){return{}},components:{Slider:o.a},methods:{showData:function(){this.$http.get("/api/getSliderData").then(function(t){return console.log("耶！代理数据是。。。",t.data),a.a.resolve(t.data)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search",data:function(){return{msg:"搜索页面"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"singer",data:function(){return{msg:"歌手页面"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tab",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(24),a=n(47),s=n.n(a),o=n(45),i=n(46),c=(n.n(i),n(44)),u=n.n(c);r.a.prototype.$http=u.a,r.a.config.productionTip=!1,new r.a({el:"#app",router:o.a,render:function(t){return t(s.a)}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){function r(t){n(116)}var a=n(3)(n(66),n(133),r,"data-v-d589a78a",null);t.exports=a.exports},function(t,e,n){function r(t){n(112)}var a=n(3)(n(67),n(129),r,"data-v-56a58140",null);t.exports=a.exports},function(t,e,n){function r(t){n(110)}var a=n(3)(n(68),n(127),r,"data-v-106fcaa0",null);t.exports=a.exports},function(t,e,n){function r(t){n(115)}var a=n(3)(n(69),n(132),r,"data-v-74b4415a",null);t.exports=a.exports},function(t,e,n){function r(t){n(109)}var a=n(3)(n(70),n(126),r,"data-v-0e6b8440",null);t.exports=a.exports},function(t,e,n){function r(t){n(111)}var a=n(3)(n(71),n(128),r,"data-v-4b8ff140",null);t.exports=a.exports},function(t,e,n){function r(t){n(113)}var a=n(3)(n(72),n(130),r,"data-v-6919f4cc",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{to:"/recommend",tag:"div"}},[t._v("推荐")]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{to:"/singer",tag:"div"}},[t._v("歌手")]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{to:"/rank",tag:"div"}},[t._v("排行")]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{to:"/search",tag:"div"}},[t._v("搜索")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),t._v(" "),n("tab"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[t._v("\n  推荐页面\n  "),n("slider",[t._v("\n    我是slider\n  ")]),t._v(" "),n("button",{on:{click:t.showData}},[t._v("点击")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("div",{staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"})])},staticRenderFns:[]}}]),[73]);
//# sourceMappingURL=app.8f0c55d5f800ef2dbb2b.js.map