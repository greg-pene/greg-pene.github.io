define(["classnames","react","rendering-engine-api","z-shop-event-bus"],(function(e,t,n,i){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[8687],{3278:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.def=void 0;var a=s(n(77007));t.def={queryId:a.id}},70033:function(e,t,n){"use strict";n.d(t,{F:function(){return o},v:function(){return i}});var i="op82Mm",o="XZ2bXP pViZDy _9eCAZc RbfshF"},33825:function(e,t,n){"use strict";n.d(t,{z:function(){return R}});var i=n(37798),o=n(12650),s=n(22303),a=n.n(s),r=n(5791),l=n(85234),c=n(57575),d=n(8779),u=n(54664),f=n(51754),m=n(81173),p=n(36761),h="undefined"!=typeof window?window:{screen:{},navigator:{}},w=(h.matchMedia||function(){return{matches:!1}}).bind(h),v=!1,b={get passive(){return v=!0}},g=function(){};h.addEventListener&&h.addEventListener("p",g,b),h.removeEventListener&&h.removeEventListener("p",g,!1);var E=v,y="ontouchstart"in h,k=y||"TouchEvent"in h&&w("(any-pointer: coarse)").matches,N=(h.navigator.maxTouchPoints,h.navigator.userAgent||""),_=w("(pointer: coarse)").matches&&/iPad|Macintosh/.test(N)&&Math.min(h.screen.width||0,h.screen.height||0)>=768,S=((w("(pointer: coarse)").matches||!w("(pointer: fine)").matches&&y)&&/Windows.*Firefox/.test(N),w("(any-pointer: fine)").matches||w("(any-hover: hover)").matches,n(15762));const F="main.goToTop";function C(e){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e)})(e)}function I(e){let{show:t,onClick:n}=e;return o.createElement("button",{className:a()(p.eVb,p.N8K,p.Mp0,u.uz,r.Us,c.BBE,c.Y8I,c.hyA,{[f.E]:!t}),onClick:n,style:{transition:"opacity ease-in 150ms",opacity:t?1:0}},o.createElement("span",{className:a()(l.XpO,l.uBg,l.Juf,l.vvw,l.Mxe,l.L$E,l.ddB,l.kNL,d.j2)},o.createElement("span",{className:a()(d.v1,d.Kb,m.Rm,l.R1P)},(""+__(F)).toUpperCase()),o.createElement(S.Z,{className:a()(m.Rm,l.PmS,l.R1P,l.czn),icon:"ArrowUp",color:"custom",size:12,fontSize:"custom"})))}const A=o.memo(I,((e,t)=>e.show==t.show));function T(e){const t=window.cancelAnimationFrame||window.mozCancelAnimationFrame;t&&t(e)}function O(e,t,n){let i,o;return function s(a){i=i||a;const r=(t-(c=e))*((l=(l=a-i)/n-1)*l*l+1)+c;var l,c;window.pageYOffset<=t?T(o):(window.scrollTo(window.pageYOffset,r),o=C(s))}}function R(e){let{topPosition:t=0,showUnder:n=250,duration:s=250}=e;const[a,r]=o.useState({show:!1}),l={topPosition:t,showUnder:n,duration:s},c=()=>{T(a.rafId),r({...a,rafId:void 0})},d=()=>{var e;e=()=>{window.pageYOffset>l.showUnder?a.show||r({...a,show:!0}):a.show&&r({...a,show:!1})},C((()=>{setTimeout((()=>{e()}))}))},u=()=>{window.removeEventListener("scroll",d),window.removeEventListener("wheel",c,!1),window.removeEventListener("touchstart",c,!1)};return o.useEffect((()=>(d(),window.addEventListener("scroll",d),window.addEventListener("wheel",c,!!E&&{passive:!0}),window.addEventListener("touchstart",c,!!E&&{passive:!0}),u)),[a.show]),o.createElement(A,{show:a.show,onClick:()=>{var e,t;e=window.pageYOffset,t=window.innerHeight,i.trigger("tracking:event",{type:"click back to top",category:"footer",label:((1+e)/t).toFixed(2)}),c(),r({...a,rafId:C(O(window.pageYOffset,l.topPosition,l.duration))})}})}},91542:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,"customer_gender-home-view":["re.customer_genderHomeView.title.kids","re.customer_genderHomeView.title.men","re.customer_genderHomeView.title.women"]}},10506:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g},isSpacingTopNeeded:function(){return v}});var i=n(58013),o=n(3278),s=n(96558),a=n(85234),r=n(70033),l=n(9543),c=n(8779),d=n(33825),u=n(82151),f=n(22303),m=n(12650);var p=n(8761),h=n(43535),w=n.n(h);function v(e,t){return 0===t&&!!e.isSpacingTopNeeded}const b=e=>(m.useEffect((()=>{try{var t;const n="homes-slot-"+(e.index+1)+"-two";null==(t=window.performance)||null==t.measure||t.measure(n)}catch(e){}}),[]),m.createElement("div",(0,i.Z)({"data-entity-id":e.id,"data-re-hints":e.hints,className:f(r.F,{[a.GJx+" "+a.Oy]:e.isSpacingTopRequired,[a.Kuc]:e.isFollowingBrand})},e.fallbackIdOption),e.tile));var g=(0,u.view)().withFragments((()=>w())).withQueries((()=>({data:{query:p}}))).withTracking((e=>({def:o.def,context:{id:e.entity.id}}))).withStaticTiles((e=>{let{entity:t,ruleData:n}=e;return{...n.isBodyMeasurementsEnabled?{measurementReminderDialog:[{type:"measurement-reminder-dialog"}]}:{},plusExclusivityNotifications:[{id:t.id,hints:["plus-notifications"]}],newsletterBanner:[{id:"ern:nlconsent::default",hints:["banner"]}],appDownloadBanner:[{type:"app-download-banner"}],informationBanner:[{type:"information-banner"}],outfitNotifications:[{type:"outfit-notifications"}],...n.topLevelNavigationWebEnabled?{topLevelNavigation:[{type:"top-level-navigation"}]}:{},sustainabilityClaims:[{hints:["sustainability-claims"]}],...n.isSegmentedBannerEnabled&&{followBrandNotification:[{hints:["follow-brand-notification"]}]},...n.fashionAssistantRendererEnabled||n.earlyAccessFeatureEnabled?{fashionAssistantChat:[{hints:["fashion-assistant",n.fashionAssistantRendererEnabled?"zfa-flow":"",n.earlyAccessFeatureEnabled?"zfa-signup-flow":""]}]}:{},header:[{type:"navigation"}],visibilityInfo:[{hints:["visibility-info-modal"]}]}})).withShell((e=>{let{fragments:t,tiles:n}=e;return{meta:t.seo,pre:m.createElement(m.Fragment,null,n.appDownloadBanner,n.informationBanner,n.header),post:m.createElement(m.Fragment,null,t.tracking,t.miniCartNew)}})).withProcessDependencies(((e,t)=>{var n,i,o;const s=e.data.customer,{isSinglePreview:a}=t.context.navigation.url.query,{useFallbackContent:r}=t.ruleData;let l=[],c=!1,d="";if(a){let{id:e=[],hints:n=[]}=t.context.navigation.url.query;Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),e.forEach(((e,t)=>{l.push({id:""+e,hints:(""+n[t]).split(",")})}))}else if(t.ruleData.customEntities)l=t.ruleData.customEntities.toString().split("|").map((e=>{const[t="",n=""]=e.split(";");return{id:t,hints:n.split(",")}}));else if(s&&null!==s.relevantEntities&&null!==s.relevantEntities.edges){s.relevantEntities.edges.forEach((e=>{let n,i=[];if(e.node.reason&&"kind"in e.node.reason&&null!==e.node.reason.kind&&(i=i.concat(e.node.reason.kind.split(","))),e.node.reason&&"value"in e.node.reason&&null!==e.node.reason.value){"CATEGORY-SEASON"===e.node.reason.value&&"KIDS"===s.navigationTargetGroup&&i.push("kids-entry"),"outfit-inspiration"!==e.node.reason.value&&"home-reco-outfits-collection-web"!==e.node.reason.value||!t.context.deviceInfo.isDesktop||i.push("isDesktop");const n={"get the look":"isGetTheLook","home-zms-a1-billboard":"isA1",billboard:"isA1","want it":"isWantIt","home-zms-showstopper-m1":"isM1","home-zms-showstopper-m2":"isM2","home-zms-showstopper-b1":"isB1","CAMP-TEASER.NEW_IN":"isNewIn",showstopper:"isShowstopper","outfits-reco":"isOutfitsReco","daily-style-watch":"isDailyStyleWatch","kids-entry":"isCategorySeason","CATEGORY-SEASON":"isCategorySeason","new-in-brands-v1":"isNewInForBrandsCarouselV1",NEW_IN_BRAND:"isNewInForBrandsCarousel",PERSONALIZED_PLAIN:"isPersonalizedPlainCarousel",SALE:"isSalesCarousel","recently-viewed":"isRecentlyViewedCarousel","RECENTLY-VIEWED":"isRecentlyViewed2Carousel","personalised-discounted-articles-v3":"isPersonalisedDiscountedCarousel","personalised-articles-v4":"isPersonalisedCarousel","home-aladdin-collections":"isAladdinCollectionCarousel","outfits-reco-collection":"isOutfitsRecoCollection","res-reco-followed-brand-silhouette-slice":"isMonoBrandCarousel","res-reco-non-followed-brand-silhouette-slice":"isMonoBrandCarousel",INTRODUCTION:"isHPTOIntro","res-reco-personalized-products-repurchase":"BUY_IT_AGAIN","suggested-brands-collection":"isBrandCarousel"}[e.node.reason.value];n?i.push(n):i.push("isUnrecognizableCarousel"),i=i.concat(e.node.reason.value.split(",")),"statement-carousel"!==e.node.reason.value&&"statement-welcome-mat"!==e.node.reason.value||(d=e.node.id),c||"home-zms-showstopper-m1"!==e.node.reason.value&&"showstopper"!==e.node.reason.value||(i.push("measureTtmp"),i.push("measureTtmpForHomes"),c=!0)}var o,a;"visibility"in e.node&&e.node.visibility&&"visibilityInfo"in e.node.visibility&&(n=null==(o=e.node.visibility)||null==(a=o.visibilityInfo)?void 0:a.id);l.push({id:e.node.id,hints:i,fragmentsData:{visibilityInfoId:n}})}))}const f=0===l.length||r;var m;f&&(m=s.navigationTargetGroup,t.context.locale,l=[{id:"ern:campaign:cfa:home_sales1",hints:["sales1","isSales1Fallback"]},{id:"ern:collection:ccc:995d7c60-bfe2-428f-bfae-7f4da87f8b73",hints:"KIDS"===m?["kids-entry","isCategorySeasonFallback"]:["CATEGORY-SEASON","isCategorySeasonFallback"]},{id:"ern:collection:dsw:static",hints:["daily-style-watch","isDailyStyleWatchFallback"]},{id:"ern:collection:stc:curated-collections/042954ed-05d5-4e0c-a799-62be17bc21a4",hints:["home-aladdin-collections","isAladdinCollectionCarouselFallback"]},{id:"ern:collection:cac:recently-viewed",hints:["recently-viewed","isRecentlyViewedCarouselFallback"]},{id:"ern:collection:gtl:static",hints:["get the look","isGetTheLookFallback"]}]),d&&l.unshift({id:d,hints:["shorts-dialog"]});const p={[u.HOMES_TILES_KEY]:l};return[0].forEach((e=>{var t,n;null==(t=p.relevantEntities[e])||null==(n=t.hints)||n.push("expectedAboveTheFold")})),{action:"render",data:p,tiles:p,fallback:f?"static":void 0,...(null==s||null==(n=s.followingBrands)||null==(i=n.edges)?void 0:i.length)&&{brandIds:null==(o=s.followingBrands)?void 0:o.edges.map((e=>{let{node:t}=e;return t.id}))}}})).withRenderTile((e=>{let{tileToRender:t,index:n,entity:o}=e;const{id:s,hints:a,type:r}=o,{isDesktop:l}=t.props.context.deviceInfo,c=l?2:3;if("top-level-navigation"===r&&!l)return t;const{ruleData:d,data:f}=t.props,p={},h=a.filter((e=>e.endsWith("Fallback")))[0];h&&(p["data-fallback-id"]={isSales1Fallback:"sl1Fb",isShowstopperFallback:"ssFb",isNewInFallback:"nwnFb",isCategorySeasonFallback:"ctsFb",isDailyStyleWatchFallback:"dswFb",isAladdinCollectionCarouselFallback:"adnFb",isRecentlyViewedCarouselFallback:"rctFb",isGetTheLookFallback:"gtlFb"}[h]||"unknown-fallback");let w=!1;var g,E,y,k;0===n&&["showstopper","isShowstopper"].some((e=>a.includes(e)))&&(w=!d.noFollow&&("FOLLOWING"===(null==(g=f.showstopperCampaign)||null==(E=g.brand)?void 0:E.followStatus)||"FOLLOWING"===(null==(y=f.collection)||null==(k=y.relevantBrand)?void 0:k.followStatus)));const N={index:n,id:s,hints:a,fallbackIdOption:p,tile:t,isFollowingBrand:w,isSpacingTopRequired:v(d,n)},_=m.createElement(b,(0,i.Z)({},N)),[S,F]=m.useState(n>=c?null:_);return m.useEffect((()=>{n>=c&&(n>=4?(0,u.requestIdleCallback)((()=>{F(_)})):F(_))}),[]),S})).withRender((e=>{let{context:t,tiles:n,fragments:i,ruleData:o}=e;const a=(e=>{switch(e){case"KIDS":return __("re.customer_genderHomeView.title.kids");case"MEN":return __("re.customer_genderHomeView.title.men");case"WOMEN":case"ALL":return __("re.customer_genderHomeView.title.women");default:return""}})(t.intent.navigationTargetGroup),{isDesktop:u,isTablet:p}=t.deviceInfo,[h,w]=m.useState(!1);return m.useEffect((()=>{w(!0)}),[]),m.createElement("div",{"data-uat-pagetype":"shop-home","data-uat-ntg":t.intent.navigationTargetGroup},!u&&!p&&n.topLevelNavigation,m.createElement("div",{id:"main-content"},a&&m.createElement("h1",{className:s.al},a),m.createElement("div",{style:{overflowX:"hidden"},id:"homes-pagemon",className:f("z-dz-feed-content",r.v,{"is-loaded":h})},n.relevantEntities)),i.seoTextblock,i.glados,m.createElement("div",{id:"zal_qualtrics_insitu",className:f(c.j2,l.j2)}),n.newsletterBanner,i.footer,n.outfitNotifications,n.plusExclusivityNotifications,n.sustainabilityClaims,n.followBrandNotification,o.isBodyMeasurementsEnabled&&n.measurementReminderDialog,n.fashionAssistantChat,n.visibilityInfo,m.createElement(d.z,null))}))},43535:function(e){e.exports={footer:{id:"footer",url:""},glados:{id:"glados",url:""},miniCartNew:{id:"minicart",url:""},tracking:{id:"tracking",url:""},seo:{id:"seo-header",url:""},seoTextblock:{id:"seoTextblock",url:""}}},8761:function(e){e.exports={id:"ff6979fe429d1f9381129015f41ef5e826ba901709182ab036316c7bcc3f50bb"}},22303:function(t){"use strict";t.exports=e},12650:function(e){"use strict";e.exports=t},82151:function(e){"use strict";e.exports=n},37798:function(e){"use strict";e.exports=i},77007:function(e){"use strict";e.exports=JSON.parse('{"id":"52162e77d32154abbc678791a521d3f7444bcdb15d76dc5cd8fd054b026a6856"}')}},function(e){var t=function(t){return e(e.s=t)};return e.O(0,[2782],(function(){return t(91542),t(10506)})),e.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/customer_gender-home-view/index-cf7ffc5196df6f68f3b4.map