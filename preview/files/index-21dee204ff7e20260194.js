define(["classnames","react","rendering-engine-api","zalando-consent-api"],(function(e,t,n,a){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[2591],{13870:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,"app-download-banner":["main.close","download.app.banner.alt.cta","download.app.banner.cta"]}},81546:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var a=n(82151),r=n(12650),o=n(52851);const l="smart_app_download_banner",s="smart_app_download_banner",c="app_download_banner_exited",i=[1,1,1,1,1],d=[1,1,1,1,.5];function u(e){const t=e.get(l),n={view_count:((null==t?void 0:t.view_count)||0)+1};e.set(l,n,21)}const p={de_AT:430,fr_BE:321,nl_BE:320,de_CH:410,fr_CH:411,cz_CZ:420,de_DE:490,dk_DK:450,es_ES:340,en_IE:353,fi_FI:358,fr_FR:330,it_IT:390,nl_NL:310,no_NO:470,pl_PL:480,pt_PT:351,se_SE:460,en_GB:440,lt_LT:370,sk_SK:421,sl_SI:386,lv_LV:371,et_EE:372,hr_HR:385,hu_HU:360,ro_RO:400},m=["pl-PL","nl-NL","tr-TR","de-CH","fr-CH","it-CH","da-DK","de-DE","en-DE","no-NO","fi-FI","ru-RU","nl-BE","fr-BE","fr-FR","es-ES","it-IT","en-GB","sv-SE","de-AT","en-IE","cs-CZ","lt-LT","sk-SK","sl-SI","lv-LV","et-EE","hr-HR","hu-HU","ro-RO","pt-PT"];function f(e){const{id:t,language:n,domain:a}=function(e){const[t="",n=""]=e.split("-"),a=p[t+"_"+n];return a?{id:a,language:t,domain:n}:{id:490,language:"de",domain:"DE"}}(e),r="orf"+t+"__smartbanner.___.";return"adjust_t=kcry49g_t9wexgj&adjust_campaign="+(a.toLowerCase()+"_"+n+"_smartbanner_1")+"&adjust_adgroup="+r}async function _(e){let{locale:t,appStoreUrl:n}=e,r=!1;try{r=(await(0,a.promiseWithTimeout)((0,o.getConsent)("smart_app_download_banner"),100)).status}catch(e){}if(!r)return n;const l=f(t),s=function(){if("undefined"!=typeof window&&"undefined"!=typeof document){const e=Array.from(document.getElementsByTagName("meta")).find((e=>"al:ios:url"===e.getAttribute("property")));if(null==e?void 0:e.content)return e.content}return"zalando://ROOT"}(),c=encodeURIComponent(s);return"https://Hfe2.adj.st/"+s.replace("zalando://","")+(s.includes("?")?"&":"?")+l+"&adjust_deeplink="+c}var E=n(22303),w=n.n(E),g=n(15762);var v=e=>{let{appRatingArray:t}=e;const n=t.reduce(((e,t)=>e+t),0);return r.createElement("div",{"aria-label":"rating score "+n+" out of 5",role:"img"},t.map(((e,t)=>{let n="StarOutlined";return.5===e?n="StarHalf":e&&(n="StarFilled"),r.createElement(g.Z,{key:t,fontSize:"custom",icon:n,size:10,style:{fontSize:"10px",marginRight:"2px"}})})))},b=n(57575),h=n(96558),S=n(8779),y=n(9543),N=n(98376),R=n(56766),k=n(36761),T=n(85234),x=n(54664),C=n(49947),I=n(51535),L=n(72279),Z=n(16197),j=n(23087);const z="36px";var O=()=>r.createElement("div",{style:{width:z,height:z}},r.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2300 2300",preserveAspectRatio:"xMidYMid meet",style:{borderRadius:"6px"}},r.createElement("g",{fill:"#ff6901",stroke:"none"},r.createElement("path",{d:"M0 1150 l0 -1150 1150 0 1150 0 0 1150 0 1150 -1150 0 -1150 0 0 -1150z"})),r.createElement("g",{fill:"#ddfffb",stroke:"none"},r.createElement("path",{d:"M0 1150 l0 -1150 1150 0 1150 0 0 1150 0 1150 -1150 0 -1150 0 0 -1150z m980 554 c281 -66 620 -281 739 -469 58 -92 36 -153 -103 -290 -174 -172 -430 -311 -663 -360 -93 -20 -142 -19 -180 5 -92 56 -162 351 -149 625 11 226 74 446 140 486 39 24 125 25 216 3z"})),r.createElement("g",{fill:"#ffffff",stroke:"none"},r.createElement("path",{d:"M0 1150 l0 -1150 1150 0 1150 0 0 1150 0 1150 -1150 0 -1150 0 0 -1150z m980 554 c106 -24 162 -46 320 -122 111 -54 298 -196 367 -279 120 -143 112 -197 -51 -358 -174 -172 -430 -311 -663 -360 -93 -20 -142 -19 -180 5 -92 56 -162 351 -149 625 11 226 74 446 140 486 39 24 125 25 216 3z"})))),B=n(2351);var P=e=>{const[t,n]=(0,r.useState)((0,a.isBrowser)()),o=(0,r.useRef)(0),[l]=(0,B.Z)((()=>{const a=window.scrollY;t&&a>o.current&&n(!1),!t&&a<o.current&&a>e&&n(!0),o.current=a}),20);return(0,r.useEffect)((()=>((0,a.isBrowser)()&&window.addEventListener("scroll",l),()=>{(0,a.isBrowser)()&&window.removeEventListener("scroll",l)})),[l]),t};var A=e=>{let{onInstall:t,onClose:n,appPlatform:o}=e;const[l,s]=r.useState(!1),[c,u]=r.useState(!1);r.useEffect((()=>{u(!0)}),[]);const p=P(60),m="ios"===o?"(902k)":"(1.01M)",f="ios"===o?i:d;return l?null:r.createElement("div",{className:w()(S.se),style:{height:60}},c?r.createElement("div",{className:w()(p?k.eVb:k.Epl,k.TkM,h.Lo,b.ROZ,x.gG,S.j2,y.wZ,T.XpO,T.uBg,y.db),style:{height:60}},r.createElement("div",{className:w()(y.Si,S.j2,y.wZ)},r.createElement(I.Z,{"aria-label":__("main.close"),label:__("main.close"),size:"small",preset:L.Wn.transparent,onClick:()=>{(0,a.requestIdleCallback)((()=>{n(),s(!0)}))},type:"button",className:T.t4Y},r.createElement(R.Z,{src:N.Z,style:{width:12,height:12}})),r.createElement("div",{className:w()(S.j2,y.wZ,T.XpO,T.Juf,T.vvw)},r.createElement(O,null)),r.createElement("div",{className:w()(S.j2,y.Jt,T.TUX)},r.createElement(Z.ZP,{preset:j.j3.bodySmallBold,"aria-label":"zalando"},"Zalando"),r.createElement("div",{className:w()(S.j2,y.TW)},r.createElement(v,{appRatingArray:f}),r.createElement(Z.ZP,{style:{padding:2},preset:j.j3.bodyExtraSmall},m)))),r.createElement("div",{className:w()(S.j2,y.wZ)},r.createElement(C.K,{"aria-label":__("download.app.banner.alt.cta"),label:__("download.app.banner.cta"),onClick:t,style:{padding:8,minWidth:132}}))):null)},H=n(56926);const D="smartbanner",U=(e,t,n,a,r)=>{a.tracking.track({name:e,context:{customCategory:t,customLabel:n,customActionSuffix:r}})};var F=(0,a.tile)().withTracking((e=>({resolve:()=>({context:{id:e.entity.id}})}))).withRender((e=>{const{tools:t,context:n}=e,i=t.cookies,d=n.deviceInfo,p=n.locale;if(!d.appPlatform||function(e){return!!e&&!m.some((t=>t.toLowerCase()===e.toLowerCase()))}(p)||function(e){const t=e.get(c),{view_count:n=0}=e.get(l)||{};return t||n>=6}(i))return null;r.useEffect((()=>{!function(e){let t=!1;(0,o.getConsent)(s).then((n=>{n.status&&!t&&(u(e),t=!0),(0,o.subscribe)(s,(n=>{n.status&&!t&&(u(e),t=!0)}))})).catch((()=>{}))}(i)}),[]);return r.createElement(a.ViewTracker,{onVisible:()=>((e,t)=>{const n="smartbanner-"+(t||"");U(H.xW,D,n,e)})(t,d.appPlatform)},r.createElement(A,{onInstall:async()=>{var e;const n=await _({appStoreUrl:d.appStoreUrl,locale:p});null==(e=window.open(n,"_blank"))||e.focus(),((e,t)=>{const n="smartbanner-"+(t||"");U(H.eF,D,n,e)})(t,d.appPlatform)},onClose:()=>{i.set(c,!0,21),((e,t)=>{const n="smartbanner-"+(t||"");U(H.eF,D,n,e,"close")})(t,d.appPlatform)},appPlatform:d.appPlatform}))}))},22303:function(t){"use strict";t.exports=e},12650:function(e){"use strict";e.exports=t},82151:function(e){"use strict";e.exports=n},52851:function(e){"use strict";e.exports=a}},function(e){var t=function(t){return e(e.s=t)};return e.O(0,[2782],(function(){return t(13870),t(81546)})),e.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/app-download-banner/index-0e5b308c5dfd64bce865.map