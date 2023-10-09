define(["classnames","react","rendering-engine-api"],(function(e,t,n){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[7992],{20601:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.def=void 0;var a=i(n(32106));t.def={queryId:a.id}},39397:function(e,t,n){"use strict";function r(e,t){void 0===t&&(t=40);let n=0,r=0,o=0;4===e.length?(n="0x"+e[1]+e[1],r="0x"+e[2]+e[2],o="0x"+e[3]+e[3]):7===e.length&&(n="0x"+e[1]+e[2],r="0x"+e[3]+e[4],o="0x"+e[5]+e[6]),n/=255,r/=255,o/=255;const i=Math.min(n,r,o),a=Math.max(n,r,o),c=a-i;let s=0,l=0,u=0;return s=0===c?0:a===n?(r-o)/c%6:a===r?(o-n)/c+2:(n-r)/c+4,s=Math.round(60*s),s<0&&(s+=360),u=(a+i)/2,l=0===c?0:c/(1-Math.abs(2*u-1)),l=+(100*l).toFixed(1),u=+(100*u).toFixed(1),t&&(u-=u*(t/100),u<0?u=0:u>100&&(u=100)),"hsl("+s+","+l+"%,"+u+"%)"}n.d(t,{k:function(){return r}})},40458:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(5348);const o=()=>!(0,r.jU)()||window.matchMedia("(prefers-reduced-motion: reduce)").matches},21873:function(e,t,n){"use strict";var r=n(7896),o=n(31461),i=n(30670),a=n(22303),c=n.n(a),s=n(12650),l=n.n(s),u=n(9914);const d=["children","className","tag"];t.Z=e=>{let{children:t,className:n,tag:a}=e,s=(0,o.Z)(e,d);const[{primaryActionTag:m,primaryActionProps:h={},styles:f,dangerousHackDetailHeight:g}]=(0,i.y)(u.Z);let p=m;const{href:v,onClick:b,onContextMenu:y,onMouseUp:E,onMouseLeave:k,onMouseEnter:Z,className:C}=h;return void 0!==a&&(p=a),l().createElement(p,(0,r.Z)({tabIndex:-1,className:c()(n,void 0===a&&C,f&&f.detail),href:v,onClick:b,onContextMenu:y,onMouseUp:E,onMouseLeave:k,onMouseEnter:Z,style:Object.assign({},g?{height:g}:{})},s,{"aria-hidden":!0}),l().createElement("header",null,t))}},40320:function(e,t,n){"use strict";var r=n(7896),o=n(31461),i=n(30670),a=n(22303),c=n.n(a),s=n(12650),l=n.n(s),u=n(9914);const d=["className","children"];t.Z=e=>{const{className:t,children:n}=e,a=(0,o.Z)(e,d),[{styles:s}]=(0,i.y)(u.Z);return l().createElement("div",(0,r.Z)({className:c()(t,s&&s.wrapper),tabIndex:-1},a),n)}},90175:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7896),o=n(31461),i=n(30670),a=n(85234),c=n(22303),s=n.n(c),l=n(12650),u=n.n(l);let d,m;!function(e){e.inherit="inherit",e.default="default",e.monochromeDark="monochromeDark",e.monochromeLight="monochromeLight"}(d||(d={})),function(e){e.inherit="inherit",e.hebe="hebe",e.sephora="sephora",e.designer="designer",e.test="test",e.light="light",e.dark="dark",e.monochrome="monochrome"}(m||(m={}));const h="_LM";d.inherit,d.default,d.monochromeLight,d.monochromeDark,m.inherit,m.hebe,m.sephora,m.designer,m.test,m.inherit,m.light,m.dark,m.monochrome,m.inherit,d.inherit;var f=n(9914);const g=["children","className","tag"];var p=u().forwardRef(((e,t)=>{let{children:n,className:c,tag:l}=e,d=(0,o.Z)(e,g);const[{styles:m,primaryActionTag:p,primaryActionProps:v},b]=(0,i.y)(f.Z),y=u().useRef(null),{href:E,onClick:k,onContextMenu:Z,onMouseUp:C,onMouseLeave:M,onMouseEnter:x,className:N,"aria-label":L}=v;let T=p;void 0!==l&&(T=l);const w=()=>{var e;null!==(null===(e=y.current)||void 0===e?void 0:e.getAttribute("data-focus-visible-added"))&&b({isCurrentlyFocused:!0})},S=()=>{b({isCurrentlyFocused:!1})};u().useEffect((()=>(y.current&&(y.current.addEventListener("focus",w),y.current.addEventListener("blur",S)),()=>{y.current&&(y.current.removeEventListener("focus",w),y.current.removeEventListener("blur",S))})),[y]);return u().createElement(T,(0,r.Z)({className:s()(h,m.media,c,void 0===l&&N),ref:e=>{e&&!y.current&&(y.current=e,"function"==typeof t?t(e):t&&(t.current=e))},href:E,onClick:k,onContextMenu:Z,onMouseUp:C,onMouseLeave:M,onMouseEnter:x,"aria-label":L,"data-card-type":"media"},d),u().createElement("figure",{className:a.QS5},n))}))},74621:function(e,t,n){"use strict";var r=n(9914);t.ZP=r.Z},9914:function(e,t,n){"use strict";var r=n(7896),o=n(5791),i=n(87180),a=n(67793),c=n(36761),s=n(99060),l=n(96677),u=n(54664),d=n(70682),m=n(71352),h=n(27414),f=n(5348),g=n(51119),p=n(60031),v=n(71179),b=n(14381),y=n(22303),E=n.n(y),k=n(12650),Z=n.n(k);const C={styles:i,primaryActionTag:"div",primaryActionProps:{}};const M=(0,g.l)((function(){return C}),(e=>{const{href:t,onMouseUp:n,onClick:r,disabled:c,styles:s=i,dangerousHackDetailHeight:l}=e;let u=Object.assign({},C,{styles:s,dangerousHackDetailHeight:l,primaryActionProps:e});switch(!0){case!0===c:u=Object.assign({},u,{primaryActionTag:"div"});break;case void 0!==t:u=Object.assign({},u,{primaryActionTag:v.ZP,primaryActionProps:Object.assign({},e,{className:a.aR})});break;case"function"==typeof n:case"function"==typeof r:u=Object.assign({},u,{primaryActionTag:p.Z,primaryActionProps:Object.assign({},e,{className:E()(o.Us,b.ip)})});break;default:u=Object.assign({},u,{primaryActionTag:"div"})}return u}))((e=>{const{className:t,children:n,context:{styles:o,isCurrentlyFocused:a},wrapperTitle:g,onMouseEnter:p,onMouseLeave:v,onFocus:b,onMouseEnterCardWrapper:y,onMouseLeaveCardWrapper:k,forwardedRef:C}=e;let M;const{href:x,onMouseUp:N,onClick:L}=e,T=N||L;x?M="link":x||"function"!=typeof T||(M="button");const w=Z().useRef();Z().useEffect((()=>{const e=w.current;return!(0,f.b1)()&&e&&"function"==typeof p&&e.addEventListener("mouseenter",p),!(0,f.b1)()&&e&&"function"==typeof v&&e.addEventListener("mouseleave",v),()=>{!(0,f.b1)()&&e&&"function"==typeof p&&e.removeEventListener("mouseenter",p),!(0,f.b1)()&&e&&"function"==typeof v&&e.removeEventListener("mouseleave",v)}}),[p,v]);return Z().createElement("article",(0,r.Z)({className:E()(o.card,t),ref:e=>{e&&(w.current=e),"function"==typeof C?C(e):C&&(C.current=e)},role:M,title:g},"function"==typeof b&&{onFocus:b},{onKeyDown:e=>{(0,m.vs)(e,[h.yX.Enter],[h.cL.KeyDown])&&("function"==typeof T&&T(e),"string"==typeof x&&(0,f.jU)()&&(window.location.href=x))},onMouseEnter:y,onMouseLeave:k}),Z().createElement("div",{className:E()(i.focus,c.vKC,c.TkM,c.jzP,s.W$,l.Zv,u.gG,a?d.t$:d.Y4)}),n)}));t.Z=M},4897:function(e,t,n){"use strict";var r=n(7896),o=n(31461),i=n(96558),a=n(30670),c=n(94838),s=n(22303),l=n.n(s),u=n(12650),d=n.n(u),m=n(69226);const h=["children","ariaLive"];t.Z=e=>{const{children:t,ariaLive:n}=e,s=(0,o.Z)(e,h),[{bus:f,style:g,currentIndex:p},v]=(0,a.y)(m.ZP),b=e=>{let n=e;const r=d().Children.count(t);n>r-1&&(n=r-1),n<0&&(n=0),v({currentIndex:n,navigatingToIndex:n,canSlidePrev:0!==n,canSlideNext:n<r-1}),f.emit("goto:success",{currentIndex:n})},y=()=>{const e=d().Children.count(t);let n=p+1;n>e-1&&(n=e-1),n<0&&(n=0),v({currentIndex:n,navigatingToIndex:n,canSlidePrev:0!==n,canSlideNext:n<e-1}),f.emit("next:success",{currentIndex:n})},E=()=>{const e=d().Children.count(t);let n=p-1;n>e-1&&(n=e-1),n<0&&(n=0),v({currentIndex:n,navigatingToIndex:n,canSlidePrev:0!==n,canSlideNext:n<e-1}),f.emit("prev:success",{currentIndex:n})};let k;return"function"==typeof n?k=n(p,d().Children.count(t)):"string"==typeof n&&(k=(0,c.$)(n,{current:p+1,total:d().Children.count(t)})),(0,u.useEffect)((()=>{const e=d().Children.count(t);v({canSlidePrev:0!==p,canSlideNext:p+1<=e-1})}),[t]),(0,u.useEffect)((()=>(f.on("next",y),f.on("prev",E),f.on("goto",b),()=>{f.off("next",y),f.off("prev",E),f.off("goto",b)}))),d().createElement(d().Fragment,null,d().createElement("ul",(0,r.Z)({className:g.root},s),d().Children.map(t,((e,t)=>d().createElement("li",{key:t,className:l()(g.children,t===p?g.animationIn:g.animationOut)},e)))),0!==p&&k&&d().createElement("div",{"aria-live":"polite","aria-atomic":"true",className:i.al},k))}},46620:function(e,t,n){"use strict";var r=n(12650),o=n.n(r),i=n(16197),a=n(23087),c=n(81173);t.Z=e=>{let{title:t,subtitle:n,className:r}=e;const s="string"==typeof r?"div":o().Fragment;return o().createElement(s,null,t&&o().createElement(i.ZP,{tag:a.rh.h3,preset:a.j3.h5,className:c.LH},t),n&&o().createElement(i.ZP,{tag:a.rh.h5,preset:a.j3.body,className:c.LH,font:a.Zx.serif},n))}},29406:function(e,t,n){"use strict";n.d(t,{KX:function(){return c},Qe:function(){return s}});n(22303);var r=n(12650);let o,i;!function(e){e.inherit="inherit",e.default="default",e.monochromeDark="monochromeDark",e.monochromeLight="monochromeLight"}(o||(o={})),function(e){e.inherit="inherit",e.hebe="hebe",e.sephora="sephora",e.designer="designer",e.test="test",e.light="light",e.dark="dark",e.monochrome="monochrome"}(i||(i={}));o.inherit,o.default,o.monochromeLight,o.monochromeDark;const a={[i.inherit]:"",[i.hebe]:"_TH",[i.sephora]:"_TS",[i.designer]:"_TD",[i.test]:"_TT",[i.inherit]:"",[i.light]:"_LM",[i.dark]:"_DM",[i.monochrome]:"_MM"},c=(e,t)=>(void 0===t&&(t=i.inherit),e?"#1A1A1A"===e.toUpperCase()?i.monochrome:i.dark:t),s=(e,t)=>(void 0===t&&(t=i.inherit),e?a[e]:a[t]);i.inherit,o.inherit},67509:function(e,t){"use strict";t.Z=(e,t)=>{let n,r;void 0===t&&(t=!1);let o,i,a,c,s,l,u="product";if(e&&e.image){const{image:t}=e;if(t.default&&(n=t.default),"string"==typeof t.hover)r=t.hover;else if(t.hover&&"[object Object]"===Object.prototype.toString.call(t.hover)){const{default:e,srcSet:n,sizes:o}=t.hover;r={src:e,srcSet:n,sizes:o}}t.srcSet&&(o=t.srcSet),t.sizes&&(i=t.sizes),t.loading&&(a=t.loading),t.width&&(c=t.width),t.height&&(s=t.height),t.fetchpriority&&(l=t.fetchpriority)}if(e&&e.labels){const{labels:t}=e;t.altText&&(u=t.altText)}const{onMouseEnter:d,onMouseLeave:m}=e||{};return{src:n,hoverImage:t?r:void 0,fallbackDefaultImageAltText:u,onMouseEnter:d,onMouseLeave:m,srcSet:o,sizes:i,loading:a,fetchpriority:l,width:c,height:s}}},66355:function(e,t,n){"use strict";n.d(t,{Iz:function(){return r},J7:function(){return a},JH:function(){return c},Kb:function(){return o},Zz:function(){return i},qp:function(){return s}});var r="KVKCn3 _2dqvZS hN9H_L jDGwVr",o="KVKCn3 _2dqvZS s32-sV jDGwVr",i="KVKCn3 _2dqvZS hN9H_L df4QKn",a="KVKCn3 _2dqvZS s32-sV df4QKn",c="KVKCn3 _2dqvZS nMZJd8 oFYU5q TWI6W2",s="KVKCn3 kLVbC0 SmOhEI jDGwVr df4QKn"},71392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var r=n(58013),o=n(20601),i=n(13887),a=n(39397),c=n(7896),s=n(31461),l=n(22303),u=n.n(l),d=n(12650),m=n.n(d),h=n(67509),f=n(72496),g=n(74621),p=n(90175),v=n(40320),b=n(21873),y=n(79949),E=n(9543),k=n(66355),Z=n(85234),C=n(87180);var M={card:u()(C.card,E.Jt),media:C.media,wrapper:u()(C.wrapper,Z.NMN),flags:u()(C.flags,k.Kb),detail:u()(C.detail)},x=n(46620),N=n(29406),L=n(68747),T=n(33467),w=n(54664),S=n(36761);const _=e=>{let{src:t,srcSet:n,sizes:r,loading:o,width:i,height:a}=e;return{src:t,srcSet:n,sizes:r,loading:o,width:i,height:a}};var D=n(99060);const O=["className","gallery","title","wrapperTitle","subtitle","bgColor","mediaBgColor","theme","gradientBackground"];var I=e=>{const{className:t,gallery:n,title:r,wrapperTitle:o,subtitle:i,bgColor:a,mediaBgColor:l,theme:d,gradientBackground:k}=e,C=(0,s.Z)(e,O),I=Object.assign({className:u()(t,(0,N.Qe)(d))},void 0!==r&&{title:r},o&&{wrapperTitle:o},C),j=m().useMemo((()=>n.slice(0,12).map((e=>(0,h.Z)(e.media))).map(((e,t)=>m().createElement("div",{key:t,className:u()(E.$5,Z.hCb)},m().createElement(f.Z,(0,c.Z)({style:{paddingLeft:2,paddingRight:2},alt:void 0!==r?r:e.fallbackDefaultImageAltText},_(e))))))),[n]);return m().createElement("div",{className:T.Mx,style:{background:l}},m().createElement(g.ZP,(0,c.Z)({styles:M},I),m().createElement(p.Z,null,m().createElement("div",{className:u()(y.Tx,T.Mx)},m().createElement("div",{style:{top:"-8%"},className:u()(D.W$,S.vKC,L.O7B,Z.XpO,Z.uBg)},j))),m().createElement(v.Z,{className:w.XZ,style:{background:null!=k?k:a}},(r||i)&&m().createElement(b.Z,null,m().createElement(x.Z,{title:r,subtitle:i})))))};const j=["className","title","gallery","wrapperTitle","subtitle","bgColor","theme","gradientBackground"];var A=e=>{const{className:t,title:n,gallery:r,wrapperTitle:o,subtitle:i,bgColor:a,theme:l,gradientBackground:d}=e,k=(0,s.Z)(e,j),Z=Object.assign({className:u()(t,(0,N.Qe)(l))},void 0!==n&&{title:n},o&&{wrapperTitle:o},k),C=m().useMemo((()=>r.slice(0,4).map((e=>(0,h.Z)(e.media))).map(((e,t)=>m().createElement("div",{key:t,className:u()(E.jG)},m().createElement(f.Z,(0,c.Z)({alt:void 0!==n?n:e.fallbackDefaultImageAltText},_(e))))))),[r]);return m().createElement(g.ZP,(0,c.Z)({styles:M},Z),m().createElement(p.Z,null,m().createElement("div",{className:u()(y.Tx,T.Mx)},m().createElement("div",{className:u()(S.vKC,L.O7B,S.TkM,D.W$)},C))),m().createElement(v.Z,{style:{background:null!=d?d:a}},(n||i)&&m().createElement(b.Z,null,m().createElement(x.Z,{title:n,subtitle:i}))))},P=n(54190),K=n(6126),F=n(40458),V=n(87489),B=n(69226),H=n(4897),U=n(95745),W=n(87307),z=n(32801);const J=["className","gallery","title","wrapperTitle","subtitle","bgColor","theme","gradientBackground"],Q={root:U.J,children:D.W$,animationIn:u()(W.rK,S.Epl),animationOut:u()(z.C3,S.vKC,S.TkM)};var R=e=>{const{className:t,gallery:n,title:r,wrapperTitle:o,subtitle:i,bgColor:a,theme:l,gradientBackground:d}=e,f=(0,s.Z)(e,J);let y;const E=Object.assign({className:u()(t,(0,N.Qe)(l))},void 0!==r&&{title:r},o&&{wrapperTitle:o},f),k=n.map((e=>(0,h.Z)(e.media))),[Z,C]=m().useState(1),[L,T]=m().useState(!1),[w,S]=(0,K.Y)({threshold:.8,triggerOnce:!1}),D=(0,F.J)(),O=new V.N;return m().useEffect((()=>{if(D||!S)return clearTimeout(y),void T(!1);const e=(Z+1)%k.length;y=S&&!L?setTimeout((()=>{O.emit("goto",Z),T(!0),C(e)}),1e3):setTimeout((()=>{O.emit("goto",Z),C(e)}),2500)}),[Z,S]),m().createElement("div",{ref:w},m().createElement(g.ZP,(0,c.Z)({styles:M},E),void 0!==k&&k.length&&m().createElement(p.Z,null,m().createElement(B.ZP,{bus:O,styles:Q,canTabToNavigation:!0},m().createElement(H.Z,null,k.map(((e,t)=>m().createElement(P.Z,(0,c.Z)({key:t,alt:void 0!==r?r:e.fallbackDefaultImageAltText},_(e)))))))),m().createElement(v.Z,{style:{background:null!=d?d:a}},(r||i)&&m().createElement(b.Z,null,m().createElement(x.Z,{title:r,subtitle:i})))))},q=n(82151);let G,$;!function(e){e.inherit="inherit",e.default="default",e.monochromeDark="monochromeDark",e.monochromeLight="monochromeLight"}(G||(G={})),function(e){e.inherit="inherit",e.hebe="hebe",e.sephora="sephora",e.designer="designer",e.test="test",e.light="light",e.dark="dark",e.monochrome="monochrome"}($||($={}));var Y=n(54432);G.inherit,G.default,G.monochromeLight,G.monochromeDark,$.inherit,$.hebe,$.sephora,$.designer,$.test,$.inherit,$.light,$.dark,$.monochrome,$.inherit,G.inherit;var X=n(56926);function ee(e){return()=>{const t={name:X.d};e.tools.tracking.track(t)}}const te="#D82B00";var ne;!function(e){e.STYLE_ALL="style-all",e.GRID="grid",e.SLIDESHOW="slideshow"}(ne||(ne={}));const re=e=>!!e&&"Image"===e.__typename,oe=(0,i.W)((e=>e.children)),ie=e=>{let t=250,n=4,r="mediumLow";return e.ruleData.isStyleAllVariant?(t=150,n=12,r="low"):e.ruleData.isSlideshowVariant&&(t=500,r="medium"),{id:e.entity.id,mediaWidth:t,mediaFirst:n,mediaQuality:r}};var ae=(0,q.tile)().withQueries((e=>({collection:{query:Y,variables:ie(e)}}))).withTracking((e=>({def:o.def,context:ie(e)}))).withProcessDependencies((e=>{var t,n,r,o;if(!(null==e||null==(t=e.collection)?void 0:t.collection))return{action:"error",message:"Collection not found"};if(null==(o=e.collection.collection.reason)||!("__typename"in o)||"SteeringReason"!==o.__typename)return{action:"error",message:"Unknown steering reason"};const i=e.collection.collection.reason.value,{collection:c}=e.collection,s=c.media;if(s.length<4)return{action:"error",message:"Invalid collection media"};const l=re(c.media[0])?null==(n=c.media[0].colorSnaps)?void 0:n.foregroundColor:"#FFFFFF",u=re(c.media[0])&&(null==(r=c.media[0].colorSnaps)?void 0:r.backgroundColor)||te;let d=u,m={};const h=(f=l,void 0===g&&(g=$.inherit),f?"#1A1A1A"===f.toUpperCase()?$.monochrome:$.dark:g);var f,g;if(i===ne.STYLE_ALL){if(s.length<12)return{action:"error",message:"Invalid collection media"};m={mediaBgColor:u},d=h===$.dark?(0,a.k)(u,40):(0,a.k)(u,-40)}return{action:"render",data:{collection:c,reasonValue:i,collectionMedia:s,mediaBgColorProps:m,bgColor:d,theme:h}}})).withRender((e=>{const{context:{deviceInfo:t},data:n,data:{collectionMedia:o,collection:i,reasonValue:a,bgColor:c,mediaBgColorProps:s,theme:l},tools:u}=e,m=a===ne.STYLE_ALL?I:a===ne.GRID?A:R,h={gallery:o.map((e=>({media:{labels:{altText:i.title},image:{default:e.uri}}})))},f=i.uri;return d.createElement(q.ViewTracker,null,d.createElement(oe,{disableListeners:!0,serverMedia:t,isTouchOnServer:!t.isDesktop},d.createElement(m,(0,r.Z)({},h,{href:f,title:n.collection.title,subtitle:n.collection.subtitle||"",bgColor:c},s,{theme:l,onClick:ee({tools:u})}))))}))},54432:function(e){e.exports={id:"215446f1534170546bdaa5f956e55c561f28c836d5b592a2aa5f30f5dc935661"}},22303:function(t){"use strict";t.exports=e},12650:function(e){"use strict";e.exports=t},82151:function(e){"use strict";e.exports=n},32106:function(e){"use strict";e.exports=JSON.parse('{"id":"20bda2b945b528e9a7af073e9d4caafb3b38b63e7857d3f6aa55236b094e4b49"}')}},function(e){return e.O(0,[2782],(function(){return t=71392,e(e.s=t);var t})),e.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/collection_styles-card/index-519ba84c79adf943146c.map