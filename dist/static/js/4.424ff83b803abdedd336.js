webpackJsonp([4],{551:function(e,t,n){function o(e){n(608)}var i=n(10)(n(577),n(621),o,"data-v-70a468a2",null);e.exports=i.exports},567:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(197),i=n(199),a=n.n(i);t.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,i=this.$refs.slider.clientWidth,a=0;a<this.children.length;a++){var r=this.children[a];n.i(o.b)(r,"slider-item"),r.style.width=i+"px",t+=i}this.loop&&!e&&(t+=2*i),this.$refs.sliderGroup.style.width=t+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var e=this;this.slider=new a.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400}}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&(clearTimeout(e.timer),e._sliderPlay())})},_sliderPlay:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._sliderPlay()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},destroyed:function(){clearTimeout(this.timer)}}},568:function(e,t,n){"use strict";function o(){var e=d()({},l.c,{platform:"yqq",needNewCode:0,outCharset:"utf-8"});return n.i(A.a)("https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg",e,l.d)}function i(e){var t=d()({},l.c,{picmid:1,rnd:.5334892526345625,g_tk:814876556,outCharset:"utf-8",platform:"yqq",needNewCode:0,categoryId:e,sortId:5,sin:0,ein:29});return m.a.get("/api/getQQDissByTagProxy",{params:t}).then(function(e){return r.a.resolve(e.data)}).catch(function(e){console.log("获取QQ音乐分类标签歌单详情数据出错getQQDissByTagProxy",e)})}t.b=o,t.a=i;var a=n(89),r=n.n(a),s=n(88),d=n.n(s),A=n(195),l=n(64),c=n(126),m=n.n(c)},572:function(e,t,n){t=e.exports=n(549)(!0),t.push([e.i,'.slider[data-v-d589a78a]{min-height:1px;position:relative;overflow:hidden}.slider .slider-group[data-v-d589a78a]{overflow:hidden;white-space:nowrap}.slider .slider-group[data-v-d589a78a]:after{content:"";display:block;clear:both}.slider .slider-group .slider-item[data-v-d589a78a]{float:left;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.slider .slider-group .slider-item img[data-v-d589a78a]{width:100%;display:block}.slider .dots[data-v-d589a78a]{position:absolute;bottom:6px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.slider .dots .dot[data-v-d589a78a]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:3px;margin:0 2.5px;display:inline-block;border-radius:2.5px;background-color:hsla(0,0%,56%,.8)}.slider .dots .dot.active[data-v-d589a78a]{background-color:#ffcd32}',"",{version:3,sources:["C:/vue-music/vue-music/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,uCACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,6CACE,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,oDACE,WAAY,AACZ,gBAAiB,AACjB,8BAA+B,AACvB,sBAAuB,AAC/B,iBAAmB,CACpB,AACD,wDACE,WAAY,AACZ,aAAe,CAChB,AACD,+BACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,oCACE,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,kCAAwC,CACzC,AACD,2CACE,wBAA0B,CAC3B",file:"slider.vue",sourcesContent:['\n.slider[data-v-d589a78a] {\n  min-height: 1px;\n  position: relative;\n  overflow: hidden;\n}\n.slider .slider-group[data-v-d589a78a] {\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group[data-v-d589a78a]:after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.slider .slider-group .slider-item[data-v-d589a78a] {\n  float: left;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n}\n.slider .slider-group .slider-item img[data-v-d589a78a] {\n  width: 100%;\n  display: block;\n}\n.slider .dots[data-v-d589a78a] {\n  position: absolute;\n  bottom: 6px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.slider .dots .dot[data-v-d589a78a] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 3px;\n  margin: 0 2.5px;\n  display: inline-block;\n  border-radius: 2.5px;\n  background-color: rgba(144,144,144,0.8);\n}\n.slider .dots .dot.active[data-v-d589a78a] {\n  background-color: #ffcd32;\n}'],sourceRoot:""}])},573:function(e,t,n){var o=n(572);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(550)("4930aec0",o,!0)},574:function(e,t,n){function o(e){n(573)}var i=n(10)(n(567),n(575),o,"data-v-d589a78a",null);e.exports=i.exports},575:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,o){return n("span",{staticClass:"dot",class:{active:e.currentPageIndex===o}})}))])},staticRenderFns:[]}},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(38),i=n.n(o),a=n(574),r=n.n(a),s=n(65),d=n.n(s),A=n(196),l=n.n(A),c=n(568),m=n(64),C=n(87),p=n(33);t.default={mixins:[C.c],data:function(){return{recommends:[],hotSongList:[]}},computed:i()({},n.i(p.a)(["category"])),components:{Slider:r.a,Scroll:d.a,Loading:l.a},methods:i()({goBack:function(){this.$router.back()},chooseItem:function(e){this.setDisc(e),this.$router.push({path:"/category/"+this.category.categoryId+"/"+e.dissid})},handlePlayList:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},_getQQDissByTag:function(){var e=this;if(!this.category.categoryName)return void this.$router.push("/category");n.i(c.a)(this.category.categoryId).then(function(t){t.code===m.a?e.hotSongList=t.data.list:(console.log("getQQDissByTag里的res.code 不为0"),alert("获取分类数据异常，请刷新重试或联系本人"))}).catch(function(e){console.log("获取QQ音乐标签歌单详情出错了，请刷新重试或者联系本人",e),alert("获取QQ音乐标签歌单详情出错了，请刷新重试或者联系本人",e)})}},n.i(p.b)({setDisc:"SET_DISC"})),created:function(){this._getQQDissByTag()}}},596:function(e,t,n){t=e.exports=n(549)(!0),t.push([e.i,".recommend[data-v-70a468a2]{position:fixed;width:100%;top:0;bottom:0;background:#222;-webkit-box-sizing:border-box;box-sizing:border-box}.recommend .recommend-content[data-v-70a468a2]{height:100%;overflow:hidden}.recommend .recommend-content div .slider-wrapper[data-v-70a468a2]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content div .recommend-list[data-v-70a468a2]{position:relative}.recommend .recommend-content div .recommend-list .recommend-list-title[data-v-70a468a2]{text-align:center;color:#ffcd32}.recommend .recommend-content div .recommend-list .recommend-list-title h1[data-v-70a468a2]{height:40px;line-height:40px;font-size:18px;position:relative;background-color:#222}.recommend .recommend-content div .recommend-list .recommend-list-title h1 .icon-back[data-v-70a468a2]{font-size:22px;position:absolute;left:25px;top:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.recommend .recommend-content div .recommend-list .song-list-ul[data-v-70a468a2]{padding:0 15px}.recommend .recommend-content div .recommend-list .song-list-ul li[data-v-70a468a2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px 0}.recommend .recommend-content div .recommend-list .song-list-ul li img[data-v-70a468a2]{width:60px;height:60px;margin-right:10px}.recommend .recommend-content div .recommend-list .song-list-ul li p[data-v-70a468a2]{color:hsla(0,0%,100%,.8);font-size:12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.recommend .recommend-content .clone-title[data-v-70a468a2]{position:fixed;top:0;left:0;text-align:center;color:#ffcd32;width:100%;background-color:#333}.recommend .recommend-content .clone-title h1[data-v-70a468a2]{height:40px;line-height:40px;font-size:18px;position:relative}.recommend .recommend-content .clone-title h1 .icon-back[data-v-70a468a2]{font-size:22px;position:absolute;left:25px;top:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.recommend .recommend-content .loading-wrapper[data-v-70a468a2]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}","",{version:3,sources:["C:/vue-music/vue-music/src/components/category-detail/category-detail.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,MAAO,AACP,SAAU,AACV,gBAAiB,AAEjB,8BAA+B,AACvB,qBAAuB,CAChC,AACD,+CACE,YAAa,AACb,eAAiB,CAElB,AACD,mEACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAElB,AACD,mEACE,iBAAmB,CAEpB,AACD,yFACE,kBAAmB,AACnB,aAAe,CAChB,AACD,4FACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,kBAAmB,AACnB,qBAAuB,CACxB,AACD,uGACE,eAAgB,AAChB,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,kCAAqC,AAC7B,yBAA6B,CACtC,AACD,iFACE,cAAgB,CACjB,AACD,oFACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,aAAe,CAChB,AACD,wFACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,sFACE,yBAA6B,AAC7B,eAAgB,AAChB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,4DACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,qBAAuB,CACxB,AACD,+DACE,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACpB,AACD,0EACE,eAAgB,AAChB,kBAAmB,AACnB,UAAW,AACX,MAAO,AACP,kCAAqC,AAC7B,yBAA6B,CACtC,AACD,gEACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C",file:"category-detail.vue",sourcesContent:["\n.recommend[data-v-70a468a2] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  background: #222;\n/*border 1px solid #fff*/\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.recommend .recommend-content[data-v-70a468a2] {\n  height: 100%;\n  overflow: hidden;\n/*border 1px solid red*/\n}\n.recommend .recommend-content div .slider-wrapper[data-v-70a468a2] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n/*border 1px solid green*/\n}\n.recommend .recommend-content div .recommend-list[data-v-70a468a2] {\n  position: relative;\n/*border 1px solid blue*/\n}\n.recommend .recommend-content div .recommend-list .recommend-list-title[data-v-70a468a2] {\n  text-align: center;\n  color: #ffcd32;\n}\n.recommend .recommend-content div .recommend-list .recommend-list-title h1[data-v-70a468a2] {\n  height: 40px;\n  line-height: 40px;\n  font-size: 18px;\n  position: relative;\n  background-color: #222;\n}\n.recommend .recommend-content div .recommend-list .recommend-list-title h1 .icon-back[data-v-70a468a2] {\n  font-size: 22px;\n  position: absolute;\n  left: 25px;\n  top: 0;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n}\n.recommend .recommend-content div .recommend-list .song-list-ul[data-v-70a468a2] {\n  padding: 0 15px;\n}\n.recommend .recommend-content div .recommend-list .song-list-ul li[data-v-70a468a2] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 15px 0;\n}\n.recommend .recommend-content div .recommend-list .song-list-ul li img[data-v-70a468a2] {\n  width: 60px;\n  height: 60px;\n  margin-right: 10px;\n}\n.recommend .recommend-content div .recommend-list .song-list-ul li p[data-v-70a468a2] {\n  color: rgba(255,255,255,0.8);\n  font-size: 12px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.recommend .recommend-content .clone-title[data-v-70a468a2] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  color: #ffcd32;\n  width: 100%;\n  background-color: #333;\n}\n.recommend .recommend-content .clone-title h1[data-v-70a468a2] {\n  height: 40px;\n  line-height: 40px;\n  font-size: 18px;\n  position: relative;\n}\n.recommend .recommend-content .clone-title h1 .icon-back[data-v-70a468a2] {\n  font-size: 22px;\n  position: absolute;\n  left: 25px;\n  top: 0;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n}\n.recommend .recommend-content .loading-wrapper[data-v-70a468a2] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}"],sourceRoot:""}])},608:function(e,t,n){var o=n(596);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(550)("64469625",o,!0)},621:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.hotSongList}},[n("div",[n("div",{staticClass:"recommend-list"},[n("div",{staticClass:"recommend-list-title"},[n("h1")]),e._v(" "),n("ul",{staticClass:"song-list-ul"},e._l(e.hotSongList,function(t){return n("li",{on:{click:function(n){e.chooseItem(t)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{alt:t.dissname}}),e._v(" "),n("p",{domProps:{innerHTML:e._s(t.dissname)}})])}))])]),e._v(" "),n("div",{staticClass:"clone-title"},[n("h1",[n("i",{staticClass:"icon-back",on:{click:e.goBack}}),e._v(e._s(e.category.categoryName)+"推荐歌单")])]),e._v(" "),e.hotSongList.length?e._e():n("div",{staticClass:"loading-wrapper"},[n("loading")],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.424ff83b803abdedd336.js.map