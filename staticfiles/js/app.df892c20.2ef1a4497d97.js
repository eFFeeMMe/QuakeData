(function(e){function t(t){for(var n,c,o=t[0],i=t[1],f=t[2],u=0,l=[];u<o.length;u++)c=o[u],a[c]&&l.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(l.length)l.shift()();return r.push.apply(r,f||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,c=1;c<s.length;c++){var i=s[c];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function c(e){return o.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"a75d0a47"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=a[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise(function(t,n){s=a[e]=[t,n]});t.push(s[2]=n);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=c(e),r=function(t){i.onerror=i.onload=null,clearTimeout(f);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");c.type=n,c.request=r,s[1](c)}a[e]=void 0}};var f=setTimeout(function(){r({type:"timeout",target:i})},12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=f;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0765":function(e,t,s){},"1ff5":function(e,t,s){"use strict";var n=s("0765"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),s("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),s("router-view")],1)},r=[],c=(s("7faf"),s("2877")),o={},i=Object(c["a"])(o,a,r,!1,null,null,null),f=i.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),n("EventList",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"event-list"},[s("h2",[e._v("Ricerca Terremoti")]),s("div",{staticClass:"filters"},[s("div",{staticClass:"filterdiv"},[s("h3",[e._v("dal")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dt0,expression:"dt0"}],attrs:{type:"date"},domProps:{value:e.dt0},on:{input:function(t){t.target.composing||(e.dt0=t.target.value)}}})]),s("div",{staticClass:"filterdiv>"},[s("h3",[e._v("al")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dt1,expression:"dt1"}],attrs:{type:"date"},domProps:{value:e.dt1},on:{input:function(t){t.target.composing||(e.dt1=t.target.value)}}})]),s("div",{staticClass:"filterdiv"},[s("button",{on:{click:e.getEvents}},[e._v("Ricerca")])])]),s("div",{staticClass:"events"},e._l(e.events,function(e){return s("EventEntry",{key:e.id,attrs:{event:e}})}),1)])},b=[],v=s("c1df"),m=s.n(v),p=s("2f62"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"event-entry"},[e._v("\n  "+e._s(e._f("pretty_date")(e.event.dt))+"\n  "+e._s(e.event.lat)+"\n  "+e._s(e.event.lon)+"\n  "+e._s(e.event.depth)+"\n  "),s("div",{style:e.magcolor},[e._v("\n    "+e._s(e.event.mag)+"\n  ")])])},g=[],y=(s("6b54"),s("6929")),k=s.n(y);console.log(k.a);var _={name:"EventList",computed:{magcolor:function(){var e=50*this.event.mag;e=Math.min(Math.max(e,0),100);var t=k()("#59DC19");return{color:t.rotate(-e)}}},props:{event:Object},filters:{pretty_date:function(e){return m()(e).toString()}}},w=_,E=(s("719f"),Object(c["a"])(w,h,g,!1,null,"405bb596",null)),z=E.exports,O={name:"EventList",data:function(){return{dt0:m()().subtract(10,"days").format("YYYY-MM-DD"),dt1:m()().format("YYYY-MM-DD")}},components:{EventEntry:z},props:{msg:String},computed:Object(p["b"])(["events"]),methods:{getEvents:function(){var e=this.dt0,t=this.dt1;this.$store.dispatch("getEvents",{dt0:e,dt1:t})}},mounted:function(){this.getEvents()}},x=O,C=(s("1ff5"),Object(c["a"])(x,j,b,!1,null,"600e5486",null)),M=C.exports,P={name:"home",components:{EventList:M}},S=P,Y=Object(c["a"])(S,d,l,!1,null,null,null),D=Y.exports;n["a"].use(u["a"]);var T=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"eventlist",component:D},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),L=s("cebc"),$=s("bc3a"),q=s.n($),N=s("17fb"),A=s.n(N);n["a"].use(p["a"]);var G="http://127.0.0.1:8000/ingvapi/",J=new p["a"].Store({state:{events:[]},mutations:{setEvents:function(e,t){e.events=t}},actions:{getEvents:function(e,t){var s=t.dt0,n=t.dt1;q.a.get(G+"quakes/"+s+"/"+n).then(function(t){var s=A.a.map(t.data,function(e){return Object(L["a"])({},e,{mag:e.mag.slice(0,3)})});e.commit("setEvents",s)})}}});n["a"].config.productionTip=!1,new n["a"]({router:T,store:J,render:function(e){return e(f)}}).$mount("#app")},"719f":function(e,t,s){"use strict";var n=s("fb36"),a=s.n(n);a.a},"7faf":function(e,t,s){"use strict";var n=s("8fba"),a=s.n(n);a.a},"8fba":function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"static/img/logo.82b9c7a5.png"},fb36:function(e,t,s){}});
//# sourceMappingURL=app.df892c20.js.map