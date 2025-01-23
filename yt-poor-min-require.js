(e=>{let[t,n,r,o,l,i,a,s,u,d]=[EventTarget,WeakSet,Object,WeakMap,MutationObserver,Set,document,314159265359,setTimeout,performance.timeOrigin];if(e.mediaElement=d,e.mediaElement!==d)return;let p=(async()=>{})().constructor;function c(e,o,l=64){let i=[],a=new n;return"object"==typeof(e||0)&&function e(n,s){if(!(n instanceof t)){a.add(n);try{for(let[u,d]of r.entries(n))o(u,d)&&i.push([n,u]),null!==d&&"object"==typeof d&&s+1<=l&&!a.has(d)&&e(d,s+1)}catch(p){}}}(e,0),i}let y=new o,f=null,$=`${Math.floor(Math.random()*s+s).toString(36)}`,h=e=>{let t=c(e,(e,t)=>"adFormat"===e&&"string"==typeof(t||0)||"adQueryId"===e&&"string"==typeof(t||0)||"adhost"===t||"adpromoted"===t,6);if(0===t.length)return;let n=new i(t.map(e=>e[0])),r=c(e,(e,t)=>"object"==typeof(t||0)&&"function"==typeof(t.publish||t.sendAbandonmentPing)&&(t?.videoData?.adFormat||t?.videoData?.adQueryId)&&t?.playerState&&n.has(t?.videoData),6);n.clear();let o=new i(r.map(e=>e[0][e[1]]));if(o.size>0){for(let l of o)if("object"==typeof(l||0)&&l.videoData&&l.playerState&&(l.videoData.adQueryId||l.videoData.adFormat))return l}},g=`
        div[u${$}]{
            all: unset;
            position: absolute;
            text-shadow: 1px 1px 2px var(--yt-spec-text-secondary);
            color: var(--yt-spec-text-primary);
            z-index: 99999;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            font-size: var(--yt-caption-font-size);
            white-space: nowrap;
        }
        div[u${$}]::before{
            content: '' attr(u${$}) ' ads are gone';
            display: inline-block;
        }
        div[u${$}="1"]::before{
            content: '' attr(u${$}) ' ad is gone';
        }
        div[u${$}="9999999"]::before{
            content: '' attr(u${$}) '+ ads are gone';
        }
        #logo[l${$}]{
            position: relative;
        }
        ytm-home-logo[l${$}]{
            position: relative;
        }
    `,m=()=>{let e=a.querySelector("#logo, ytm-home-logo");if(!e)return!1;let t=a.querySelector(`div[u${$}]`)||a.createElement("div"),n=(+t.getAttribute(`u${$}`)||0)+1;n>9999999&&(n=9999999),1===n&&(a.head.appendChild(a.createElement("style")).textContent=g),t.style.transition="opacity 0s",t.style.opacity="1",t.setAttribute(`u${$}`,`${n}`),e.setAttribute(`l${$}`,""),e.insertBefore(t,e.firstChild),u(()=>{t.style.transition="opacity 2.6s",t.style.opacity="0"},100)},v=e=>{let t=e?.popups_||0;if("object"!=typeof t)return null;let n=r.keys(t),o=n.length;if(o>0){let l=Array(o),i=0;for(let a of n)t[a]?.popup?.opened&&(l[i++]=t[a]);return l.length=i,l}return null},b=()=>{let e=null,t=!1,n=a.getElementsByTagName("ytd-popup-container"),r=()=>{if(!n.length)return null;if(1===n.length)return n[0];for(let e of n)if(e.classList.length>=2&&e.childElementCount>=1)return e;return null},o=()=>{let l=e=>e?e.polymerController||e.inst||e||0:e||0;if(!n.length)return;let i=r();if(!i)return;let a=l(i),s=v(a);if(s&&s.length>0){for(let u of(t=!0,e&&e.disconnect(),e=null,o=null,s))if(u?.rendererName)try{a.handleClosePopupAction_(u.rendererName,u.openPopupAction?.uniqueId)}catch(d){}}try{a.closeDialog()}catch(p){}};o&&o(),!t&&o&&((e=new l(o)).observe(a.body,{subtree:!0,childList:!0}),u(()=>{t||(e&&e.disconnect(),e=null,o&&o(),o=null)},40))},_=a.getElementsByTagName("video"),E=a.getElementsByTagName("audio"),w=0,S=(...e)=>u(console.log.bind(console,...e),0),x=e=>{var t;let n=()=>e.playerState.state,{mediaElement:r}=e,o=n(),l=e=>({type:e,target:r});if("function"==typeof r.hasError&&!r[`p${$}`]){r[`p${$}`]=!0;let i=r.hasError;r.hasError=function(...e){return w+40>Date.now()||i.call(this,...e)},r.hasError.toString=i.toString.bind(i)}w=Date.now();try{e.publish("videoelementevent",l("error"))}catch(a){}try{e.publish("videoelementevent",l("ended"))}catch(s){}try{e.sendAbandonmentPing()}catch(d){}let c=n(),y=c;S("yt.state1",o,c),c!==o&&(48&(t=c))==0&&(646&t)>0&&(64&t)>0&&!1===m()&&u(m,1e3),p.resolve().then(()=>{y!==(y=n())&&S("yt.state2",o,y)}),u(()=>{y!==(y=n())&&S("yt.state3",o,y)},100),p.resolve().then(b)};r.defineProperty(r.prototype,"mediaElement",{get(){return y.get(this)},set(e){if(e===d&&0===_.length&&0===E.length&&!a.querySelector("ytd-app")&&!a.querySelector("#movie_player"))return!0;if(w=0,f!==e&&(f=e,"object"==typeof(e||0)&&_.length+E.length>0)){let t=null;(t=h(this))&&p.resolve(t).then(x)}return y.set(this,e),!0}})})({});