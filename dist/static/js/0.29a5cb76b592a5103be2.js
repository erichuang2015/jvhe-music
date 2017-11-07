webpackJsonp([0],{557:function(t,e,a){function n(t){a(599)}var i=a(10)(a(576),a(612),n,"data-v-89caf134",null);t.exports=i.exports},560:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(48),i=a.n(n),s=a(198),r=a.n(s),o=a(65),A=a.n(o),l=a(196),c=a.n(l),p=a(197),d=a(37),g=a(87),u=a.i(p.a)("transform"),f=a.i(p.a)("backdrop-filter");e.default={mixins:[g.c],props:{title:{type:String,default:""},bgImage:{type:String,default:""},songs:{type:Array,default:[]},rank:{type:Boolean,default:!1}},components:{songList:r.a,scroll:A.a,loading:c.a},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},mounted:function(){this.singerAvatarHeight=this.$refs.singerAvatar.clientHeight,this.$refs.scrollSongList.$el.style.top=this.singerAvatarHeight+"px"},created:function(){this.probeType=3,this.listenScroll=!0},data:function(){return{scrollY:0}},methods:i()({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.scrollSongList.$el.style.bottom=e,this.$refs.scrollSongList.refresh()},goback:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},randomPlayAllMusic:function(t){this.randomPlay({list:t})},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})}},a.i(d.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){-t<this.singerAvatarHeight-40?(this.$refs.songListBg.style[u]="translate3d(0,"+t+"px,0)",this.$refs.singerAvatar.style.zIndex=0,this.$refs.singerAvatar.style.paddingBottom="70%",this.$refs.singerAvatar.style.height=0,this.$refs.randomPlayAllWrap.style.display=""):(this.$refs.singerAvatar.style.zIndex=30,this.$refs.singerAvatar.style.paddingBottom=0,this.$refs.singerAvatar.style.height="40px",this.$refs.randomPlayAllWrap.style.display="none");var e=1+t/this.singerAvatarHeight;if(t>0)this.$refs.singerAvatar.style[u]="scale("+e+")";else{var a=Math.min(-t/this.singerAvatarHeight*20,20);this.$refs.bgCover.style[f]="blur("+a+"px)"}}}}},561:function(t,e,a){e=t.exports=a(549)(!0),e.push([t.i,".music-list-wrapper[data-v-77c0eaa0]{height:100%;width:100%;position:relative}.music-list-wrapper .singer-name[data-v-77c0eaa0]{z-index:40;color:#ffcd32;position:absolute;text-align:center;width:100%}.music-list-wrapper .singer-name .icon-back[data-v-77c0eaa0]{left:25px;top:0;position:absolute;display:block;height:40px;line-height:40px;font-size:22px}.music-list-wrapper .singer-name h2[data-v-77c0eaa0]{font-size:18px;line-height:40px;height:40px;padding:0 50px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.music-list-wrapper .singerAvatar[data-v-77c0eaa0]{position:relative;width:100%;height:0;background-size:cover;padding-bottom:70%;-webkit-transform-origin:top;transform-origin:top}.music-list-wrapper .singerAvatar .bg-cover[data-v-77c0eaa0]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(7,17,27,.4)}.music-list-wrapper .singerAvatar .random-play-all-wrap[data-v-77c0eaa0]{position:absolute;left:50%;bottom:20px;-webkit-transform:translate(-50%);transform:translate(-50%);text-align:center;color:#ffcd32}.music-list-wrapper .singerAvatar .random-play-all-wrap .random-play-all-button[data-v-77c0eaa0]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;border:1px solid #ffcd32;border-radius:100px;font-size:16px}.music-list-wrapper .song-list-bg[data-v-77c0eaa0]{background-color:#222;position:relative;top:0;left:0;height:200%;width:100%}.music-list-wrapper .scroll-song-list-part[data-v-77c0eaa0]{position:fixed;bottom:0;width:100%}.music-list-wrapper .loading-wrapper[data-v-77c0eaa0]{position:absolute;left:50%;bottom:30%;z-index:50;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}","",{version:3,sources:["C:/vue-music/vue-music/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,qCACE,YAAa,AACb,WAAY,AACZ,iBAAmB,CACpB,AACD,kDACE,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,kBAAmB,AACnB,UAAY,CACb,AACD,6DACE,UAAW,AACX,MAAO,AACP,kBAAmB,AACnB,cAAe,AACf,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACjB,AACD,qDACE,eAAgB,AAChB,iBAAkB,AAClB,YAAa,AACb,eAAgB,AAChB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,sBAAuB,AACvB,mBAAoB,AACpB,6BAA8B,AACtB,oBAAsB,CAC/B,AACD,6DACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,MAAO,AACP,OAAQ,AACR,2BAA8B,CAC/B,AACD,yEACE,kBAAmB,AACnB,SAAU,AACV,YAAa,AACb,kCAAsC,AAC9B,0BAA8B,AACtC,kBAAmB,AACnB,aAAe,CAChB,AACD,iGACE,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,cAAe,AACf,yBAA0B,AAC1B,oBAAqB,AACrB,cAAgB,CACjB,AACD,mDACE,sBAAuB,AACvB,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,YAAa,AACb,UAAY,CACb,AACD,4DACE,eAAgB,AAChB,SAAU,AACV,UAAY,CACb,AACD,sDACE,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,WAAY,AACZ,uCAAyC,AACjC,8BAAiC,CAC1C",file:"music-list.vue",sourcesContent:["\n.music-list-wrapper[data-v-77c0eaa0] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.music-list-wrapper .singer-name[data-v-77c0eaa0] {\n  z-index: 40;\n  color: #ffcd32;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n}\n.music-list-wrapper .singer-name .icon-back[data-v-77c0eaa0] {\n  left: 25px;\n  top: 0;\n  position: absolute;\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  font-size: 22px;\n}\n.music-list-wrapper .singer-name h2[data-v-77c0eaa0] {\n  font-size: 18px;\n  line-height: 40px;\n  height: 40px;\n  padding: 0 50px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.music-list-wrapper .singerAvatar[data-v-77c0eaa0] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  background-size: cover;\n  padding-bottom: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n}\n.music-list-wrapper .singerAvatar .bg-cover[data-v-77c0eaa0] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(7,17,27,0.4);\n}\n.music-list-wrapper .singerAvatar .random-play-all-wrap[data-v-77c0eaa0] {\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  text-align: center;\n  color: #ffcd32;\n}\n.music-list-wrapper .singerAvatar .random-play-all-wrap .random-play-all-button[data-v-77c0eaa0] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  border: 1px solid #ffcd32;\n  border-radius: 100px;\n  font-size: 16px;\n}\n.music-list-wrapper .song-list-bg[data-v-77c0eaa0] {\n  background-color: #222;\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 200%;\n  width: 100%;\n}\n.music-list-wrapper .scroll-song-list-part[data-v-77c0eaa0] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n.music-list-wrapper .loading-wrapper[data-v-77c0eaa0] {\n  position: absolute;\n  left: 50%;\n  bottom: 30%;\n  z-index: 50;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}"],sourceRoot:""}])},562:function(t,e,a){var n=a(561);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(550)("fd18c5bc",n,!0)},563:function(t,e,a){function n(t){a(562)}var i=a(10)(a(560),a(564),n,"data-v-77c0eaa0",null);t.exports=i.exports},564:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"musicListWrapper",staticClass:"music-list-wrapper"},[a("div",{staticClass:"singer-name"},[a("i",{staticClass:"icon-back",on:{click:t.goback}}),t._v(" "),a("h2",{domProps:{innerHTML:t._s(t.title)}})]),t._v(" "),a("div",{ref:"singerAvatar",staticClass:"singerAvatar",style:t.bgStyle},[a("div",{ref:"bgCover",staticClass:"bg-cover"}),t._v(" "),t.songs.length>0?a("div",{ref:"randomPlayAllWrap",staticClass:"random-play-all-wrap"},[a("div",{staticClass:"random-play-all-button",on:{click:function(e){t.randomPlayAllMusic(t.songs)}}},[a("i",{staticClass:"icon-play"}),t._v(" 随机播放全部")])]):t._e()]),t._v(" "),a("div",{ref:"songListBg",staticClass:"song-list-bg"}),t._v(" "),a("scroll",{ref:"scrollSongList",staticClass:"scroll-song-list-part",attrs:{data:t.songs,probeType:t.probeType,listenScroll:t.listenScroll},on:{scroll:t.scroll}},[a("div",{staticClass:"song-list-wrapper"},[a("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{selectEvent:t.selectItem}})],1)]),t._v(" "),t.songs.length?t._e():a("div",{staticClass:"loading-wrapper"},[a("loading")],1)],1)},staticRenderFns:[]}},567:function(t,e,a){"use strict";function n(){var t=r()({},A.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:5381,outCharset:"utf-8",platform:"yqq",needNewCode:0});return a.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,A.c)}function i(t){var e=r()({},A.b,{g_tk:5381,outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:100,songstatus:1});return a.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,A.c)}e.b=n,e.a=i;var s=a(88),r=a.n(s),o=a(195),A=a(64)},576:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(48),i=a.n(n),s=a(37),r=a(567),o=a(64),A=a(126),l=a(563),c=a.n(l);e.default={name:"singer-detail",data:function(){return{songs:[]}},computed:i()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},a.i(s.a)(["singer"])),created:function(){this._getQQSingerDetail()},methods:{_getQQSingerDetail:function(){var t=this;if(!this.singer.mid)return void this.$router.push("/singer");a.i(r.a)(this.singer.mid).then(function(e){e.code===o.a?(t.songs=t.optimizeQQSongs(e.data.list),console.log(e.data.list)):console.log("获取QQ歌手详情数据失败：res.code不为0")}).catch(function(t){console.log("获取歌手详情数据出错了",t),alert("获取歌手详情数据出错了，请刷新重试",t)})},optimizeQQSongs:function(t){var e=[];return t.forEach(function(t){var n=t.musicData;n.songid&&n.albummid&&e.push(a.i(A.b)(n))}),e}},components:{musicList:c.a}}},588:function(t,e,a){e=t.exports=a(549)(!0),e.push([t.i,".singer-detail-wrapper[data-v-89caf134]{position:fixed;z-index:90;top:0;left:0;right:0;bottom:0;background:#222}.slide-enter-active[data-v-89caf134],.slide-leave-active[data-v-89caf134]{-webkit-transition:all .3s;transition:all .3s}.slide-enter[data-v-89caf134],.slide-leave-to[data-v-89caf134]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["C:/vue-music/vue-music/src/components/singer-detail/singer-detail.vue"],names:[],mappings:"AACA,wCACE,eAAgB,AAChB,WAAY,AACZ,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,eAAiB,CAClB,AACD,0EAEE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"singer-detail.vue",sourcesContent:["\n.singer-detail-wrapper[data-v-89caf134] {\n  position: fixed;\n  z-index: 90;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #222;\n}\n.slide-enter-active[data-v-89caf134],\n.slide-leave-active[data-v-89caf134] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-enter[data-v-89caf134],\n.slide-leave-to[data-v-89caf134] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},599:function(t,e,a){var n=a(588);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(550)("612fc0d7",n,!0)},612:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"singer-detail-wrapper"},[a("music-list",{attrs:{songs:t.songs,title:t.title,"bg-image":t.bgImage}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=0.29a5cb76b592a5103be2.js.map