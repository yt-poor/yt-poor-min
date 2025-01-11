(()=>{let e={};if(e.mediaElement=performance.timeOrigin,e.mediaElement!==performance.timeOrigin)return;let[t,o,r,n,a,i]=[EventTarget,WeakSet,Object,WeakMap,MutationObserver,Set],l=(async()=>{})().constructor;function s(e,n,a=64){let i=[],l=new o;return"object"==typeof(e||0)&&function e(o,s){if(!(o instanceof t)){l.add(o);try{for(let[p,d]of r.entries(o))n(p,d)&&i.push([o,p]),null!==d&&"object"==typeof d&&s+1<=a&&!l.has(d)&&e(d,s+1)}catch(c){}}}(e,0),i}let p=new n,d=null,c=`${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`,u=e=>{let t=s(e,(e,t)=>"adFormat"===e&&"string"==typeof(t||0)||"adQueryId"===e&&"string"==typeof(t||0)||"adhost"===t||"adpromoted"===t,6);if(0===t.length)return;let o=new i(t.map(e=>e[0])),r=s(e,(e,t)=>"object"==typeof(t||0)&&"function"==typeof(t.publish||t.sendAbandonmentPing)&&(t?.videoData?.adFormat||t?.videoData?.adQueryId)&&t?.playerState&&o.has(t?.videoData),6);o.clear();let n=new i(r.map(e=>e[0][e[1]]));if(n.size>0){for(let a of n)if("object"==typeof(a||0)&&a.videoData&&a.playerState&&(a.videoData.adQueryId||a.videoData.adFormat))return a}},y=`
        div[u${c}]{
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
        div[u${c}]::before{
            content: '' attr(u${c}) ' ads are gone';
            display: inline-block;
        }
        div[u${c}="1"]::before{
            content: '' attr(u${c}) ' ad is gone';
        }
        div[u${c}="9999999"]::before{
            content: '' attr(u${c}) '+ ads are gone';
        }
        #logo[l${c}]{
            position: relative;
        }
    `,$=()=>{let e=document.querySelector("#logo");if(!e)return!1;let t=document.querySelector(`div[u${c}]`)||document.createElement("div"),o=(+t.getAttribute(`u${c}`)||0)+1;o>9999999&&(o=9999999),1===o&&(document.head.appendChild(document.createElement("style")).textContent=y),t.style.transition="opacity 0s",t.style.opacity="1",t.setAttribute(`u${c}`,`${o}`),e.setAttribute(`l${c}`,""),e.insertBefore(t,e.firstChild),setTimeout(()=>{t.style.transition="opacity 2.6s",t.style.opacity="0"},100)},f=()=>{let e=null,t=!1,o=()=>{let o=e=>e?e.polymerController||e.inst||e||0:e||0,n=document.querySelector("ytd-popup-container"),a=o(n);if(a.popups_&&r.keys(a.popups_).length>0)for(let i of(t=!0,e&&e.disconnect(),e=null,r.keys(a.popups_))){let l=a.popups_[i];if(l&&l.rendererName)try{a.handleClosePopupAction_(l.rendererName,l.openPopupAction?.uniqueId)}catch(s){}}try{a.closeDialog()}catch(p){}};o(),t||((e=new a(o)).observe(document.body,{subtree:!0,childList:!0}),setTimeout(()=>{t||(e&&e.disconnect(),e=null,o())},40))},h=document.getElementsByTagName("video"),m=document.getElementsByTagName("audio"),g=0,v=(...e)=>setTimeout(console.log.bind(console,...e),0),b=e=>{var t;let o=()=>e.playerState.state,{mediaElement:r}=e,n=o(),a=e=>({type:e,target:r});if("function"==typeof r.hasError&&!r[`p${c}`]){r[`p${c}`]=!0;let i=r.hasError;r.hasError=function(...e){return g+40>Date.now()||i.call(this,...e)},r.hasError.toString=i.toString.bind(i)}g=Date.now();try{e.publish("videoelementevent",a("error"))}catch(s){}try{e.publish("videoelementevent",a("ended"))}catch(p){}try{e.sendAbandonmentPing()}catch(d){}let u=o(),y=u;v("yt.state1",n,u),u!==n&&(48&(t=u))==0&&(646&t)>0&&(64&t)>0&&!1===$()&&setTimeout($,1e3),l.resolve().then(()=>{y!==(y=o())&&v("yt.state2",n,y)}),setTimeout(()=>{y!==(y=o())&&v("yt.state3",n,y)},100),l.resolve().then(f)};r.defineProperty(r.prototype,"mediaElement",{get(){return p.get(this)},set(e){if(e===performance.timeOrigin&&0===h.length&&0===m.length&&!document.querySelector("ytd-app")&&!document.querySelector("#movie_player"))return!0;if(g=0,d!==e&&(d=e,"object"==typeof(e||0)&&h.length+m.length>0)){let t=null;(t=u(this))&&l.resolve(t).then(b)}return p.set(this,e),!0}})})();