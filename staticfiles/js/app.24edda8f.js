(function(e){function t(t){for(var a,o,c=t[0],i=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],s[o]&&f.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},r=[];function o(e){return c.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"cdfccdcc"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=s[e]=[t,a]});t.push(n[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e),r=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}s[e]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:i})},12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1127:function(e,t,n){},"11c7":function(e,t,n){},2186:function(e,t,n){"use strict";var a=n("11c7"),s=n.n(a);s.a},2562:function(e,t,n){"use strict";var a=n("d119"),s=n.n(a);s.a},4116:function(e,t,n){"use strict";var a=n("1127"),s=n.n(a);s.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("EventSearch"),n("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter-box"},[n("div",{staticStyle:{"flex-grow":"1"}}),n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("Quake Data")])],1),n("div",{staticClass:"filter-widget"},[n("div",[e._v("from")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.date0,expression:"date0"}],attrs:{type:"date"},domProps:{value:e.date0},on:{input:function(t){t.target.composing||(e.date0=t.target.value)}}})]),n("div",{staticClass:"filter-widget>"},[n("div",[e._v("to (included)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.date1,expression:"date1"}],attrs:{type:"date"},domProps:{value:e.date1},on:{input:function(t){t.target.composing||(e.date1=t.target.value)}}})]),n("div",{staticClass:"filter-widget"},[n("button",{on:{click:e.getEvents}},[e._v("Search")])]),n("div",{staticStyle:{"flex-grow":"1"}})])},c=[],i=n("c1df"),d=n.n(i),u={name:"home",data:function(){return{date0:d()().subtract(10,"days").format("YYYY-MM-DD"),date1:d()().format("YYYY-MM-DD")}},components:{},methods:{getEvents:function(){var e=this.date0,t=this.date1;this.$store.dispatch("getEvents",{date0:e,date1:t})}},mounted:function(){this.getEvents()}},l=u,f=(n("2186"),n("2877")),v=Object(f["a"])(l,o,c,!1,null,"4e5ef41c",null),j=v.exports,b={components:{EventSearch:j}},m=b,p=(n("7faf"),Object(f["a"])(m,s,r,!1,null,null,null)),h=p.exports,g=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("EventList")],1)},_=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event-list"},[n("div",{staticClass:"events"},[e._l(e.events,function(t){return n("div",{key:t.id,staticClass:"event-box"},[n("EventEntry",{attrs:{event:t}}),n("div",[n("router-link",{attrs:{to:"/quake/"+t.id}},[e._v("\n          details\n        ")])],1)],1)}),0===e.events.length?n("div",[e._v("\n      No seismic events found in the given range\n    ")]):e._e()],2)])},E=[],w=n("2f62"),z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event-entry"},[n("div",{staticClass:"ev-loc"},[e._v("\n    "+e._s(e.event.location)+"\n  ")]),n("div",{staticClass:"ev-dt"},[n("div",[e._v("\n      Date: "+e._s(e.event_date)+"\n    ")]),n("div",[e._v("\n      Time: "+e._s(e.event_time)+"\n    ")])]),n("div",{staticClass:"ev-latlondepth"},[n("div",[e._v("\n      Lat: "+e._s(e.event.lat)+"\n    ")]),n("div",[e._v("\n      Lon: "+e._s(e.event.lon)+"\n    ")]),n("div",[e._v("\n      Depth: "+e._s(e.event_depth)+"\n    ")])]),n("div",{staticClass:"ev-magnitude",style:e.mag_style},[e._v("\n    "+e._s(e.event_mag)+"\n  ")])])},O=[],x=(n("28a5"),n("6929")),L=n.n(x),C={name:"EventEntry",computed:{event_date:function(){return d()(this.event.dt).format("LL")},event_time:function(){return d()(this.event.dt).format("LT")},event_depth:function(){return this.event.depth.split(".")[0]+"m"},event_mag:function(){return this.event.mag.slice(0,3)},mag_style:function(){var e=(this.event.mag-1)/3,t=100*e;return t=Math.min(t,100),t=Math.max(t,0),{color:L()("#59DC19").rotate(-t)}}},props:{event:Object}},S=C,D=(n("c8f0"),Object(f["a"])(S,z,O,!1,null,"15492c72",null)),M=D.exports,P={name:"EventList",components:{EventEntry:M},props:{},computed:Object(w["b"])(["events"])},T=P,U=(n("4116"),Object(f["a"])(T,k,E,!1,null,"0e9dabbf",null)),$=U.exports,q={name:"home",components:{EventList:$}},Y=q,N=Object(f["a"])(Y,y,_,!1,null,null,null),A=N.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event-details"},[e.event?n("div",{staticClass:"map-container"},[n("l-map",{attrs:{zoom:e.zoom,center:e.center}},[n("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),n("l-marker",{attrs:{"lat-lng":e.marker}})],1)],1):e._e(),e.event?n("EventEntry",{staticClass:"event-entry",attrs:{event:e.event}}):n("div",[e._v("\n    loading quake "+e._s(e.id)+" data\n  ")]),n("div",{staticStyle:{margin:"auto",padding:"2rem"}},[n("router-link",{attrs:{to:"/"}},[e._v("🂢 Back to search 🂢")])],1)],1)},R=[],B=n("bc3a"),G=n.n(B),J=n("458e"),V={name:"EventDetails",data:function(){return{event:null,zoom:6,url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},computed:{id:function(){return this.$route.params.id},center:function(){return J["L"].latLng(this.event.lat,this.event.lon)},marker:function(){return J["L"].latLng(this.event.lat,this.event.lon)}},components:{EventEntry:M},mounted:function(){var e=this,t="/ingvapi/quakes/"+this.id;G.a.get(t).then(function(t){e.event=t.data,e.loaded=!0}),console.log(Object({VUE_APP_API_URL:"/ingvapi/",NODE_ENV:"production",BASE_URL:"/"}))}},F=V,Q=(n("2562"),Object(f["a"])(F,I,R,!1,null,"8a4d1d84",null)),H=Q.exports;a["a"].use(g["a"]);var K=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A},{path:"/quake/:id",component:H},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),W=n("cebc"),X=n("17fb"),Z=n.n(X);a["a"].use(w["a"]);var ee=new w["a"].Store({state:{events:[]},mutations:{setEvents:function(e,t){e.events=t}},actions:{getEvents:function(e,t){var n=t.date0,a=t.date1,s=d()(n).format(),r=d()(a).add(1,"days").format(),o="/ingvapi/quakes/"+s+"/"+r;console.log(o),G.a.get(o).then(function(t){var n=Z.a.map(t.data,function(e){return Object(W["a"])({},e)});e.commit("setEvents",n)})}}});n("6cc5");a["a"].component("l-map",J["LMap"]),a["a"].component("l-tile-layer",J["LTileLayer"]),a["a"].component("l-marker",J["LMarker"]),delete J["L"].Icon.Default.prototype._getIconUrl,J["L"].Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),a["a"].config.productionTip=!1,new a["a"]({router:K,store:ee,render:function(e){return e(h)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var a=n("8fba"),s=n.n(a);s.a},"8fba":function(e,t,n){},c0f1:function(e,t,n){},c8f0:function(e,t,n){"use strict";var a=n("c0f1"),s=n.n(a);s.a},d119:function(e,t,n){}});
//# sourceMappingURL=app.24edda8f.js.map