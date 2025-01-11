(e=>{let[t,o,r,n,a,i,l,s,p,d]=[EventTarget,WeakSet,Object,WeakMap,MutationObserver,Set,document,314159265359,setTimeout,performance.timeOrigin];if(e.mediaElement=d,e.mediaElement!==d)return;let c=(async()=>{})().constructor;function u(e,n,a=64){let i=[],l=new o;return"object"==typeof(e||0)&&function e(o,s){if(!(o instanceof t)){l.add(o);try{for(let[p,d]of r.entries(o))n(p,d)&&i.push([o,p]),null!==d&&"object"==typeof d&&s+1<=a&&!l.has(d)&&e(d,s+1)}catch(c){}}}(e,0),i}let y=new n,$=null,f=`${Math.floor(Math.random()*s+s).toString(36)}`,h=e=>{let t=u(e,(e,t)=>"adFormat"===e&&"string"==typeof(t||0)||"adQueryId"===e&&"string"==typeof(t||0)||"adhost"===t||"adpromoted"===t,6);if(0===t.length)return;let o=new i(t.map(e=>e[0])),r=u(e,(e,t)=>"object"==typeof(t||0)&&"function"==typeof(t.publish||t.sendAbandonmentPing)&&(t?.videoData?.adFormat||t?.videoData?.adQueryId)&&t?.playerState&&o.has(t?.videoData),6);o.clear();let n=new i(r.map(e=>e[0][e[1]]));if(n.size>0){for(let a of n)if("object"==typeof(a||0)&&a.videoData&&a.playerState&&(a.videoData.adQueryId||a.videoData.adFormat))return a}},m=`
        div[u${f}]{
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
        div[u${f}]::before{
            content: '' attr(u${f}) ' ads are gone';
            display: inline-block;
        }
        div[u${f}="1"]::before{
            content: '' attr(u${f}) ' ad is gone';
        }
        div[u${f}="9999999"]::before{
            content: '' attr(u${f}) '+ ads are gone';
        }
        #logo[l${f}]{
            position: relative;
        }
        ytm-home-logo[l${f}]{
            position: relative;
        }
    `,g=()=>{let e=l.querySelector("#logo, ytm-home-logo");if(!e)return!1;let t=l.querySelector(`div[u${f}]`)||l.createElement("div"),o=(+t.getAttribute(`u${f}`)||0)+1;o>9999999&&(o=9999999),1===o&&(l.head.appendChild(l.createElement("style")).textContent=m),t.style.transition="opacity 0s",t.style.opacity="1",t.setAttribute(`u${f}`,`${o}`),e.setAttribute(`l${f}`,""),e.insertBefore(t,e.firstChild),p(()=>{t.style.transition="opacity 2.6s",t.style.opacity="0"},100)},v=()=>{let e=null,t=!1,o=()=>{let o=e=>e?e.polymerController||e.inst||e||0:e||0,n=l.querySelector("ytd-popup-container"),a=o(n);if(a.popups_&&r.keys(a.popups_).length>0)for(let i of(t=!0,e&&e.disconnect(),e=null,r.keys(a.popups_))){let s=a.popups_[i];if(s&&s.rendererName)try{a.handleClosePopupAction_(s.rendererName,s.openPopupAction?.uniqueId)}catch(p){}}try{a.closeDialog()}catch(d){}};o(),t||((e=new a(o)).observe(l.body,{subtree:!0,childList:!0}),p(()=>{t||(e&&e.disconnect(),e=null,o())},40))},b=l.getElementsByTagName("video"),_=l.getElementsByTagName("audio"),E=0,S=(...e)=>p(console.log.bind(console,...e),0),w=e=>{var t;let o=()=>e.playerState.state,{mediaElement:r}=e,n=o(),a=e=>({type:e,target:r});if("function"==typeof r.hasError&&!r[`p${f}`]){r[`p${f}`]=!0;let i=r.hasError;r.hasError=function(...e){return E+40>Date.now()||i.call(this,...e)},r.hasError.toString=i.toString.bind(i)}E=Date.now();try{e.publish("videoelementevent",a("error"))}catch(l){}try{e.publish("videoelementevent",a("ended"))}catch(s){}try{e.sendAbandonmentPing()}catch(d){}let u=o(),y=u;S("yt.state1",n,u),u!==n&&(48&(t=u))==0&&(646&t)>0&&(64&t)>0&&!1===g()&&p(g,1e3),c.resolve().then(()=>{y!==(y=o())&&S("yt.state2",n,y)}),p(()=>{y!==(y=o())&&S("yt.state3",n,y)},100),c.resolve().then(v)};r.defineProperty(r.prototype,"mediaElement",{get(){return y.get(this)},set(e){if(e===d&&0===b.length&&0===_.length&&!l.querySelector("ytd-app")&&!l.querySelector("#movie_player"))return!0;if(E=0,$!==e&&($=e,"object"==typeof(e||0)&&b.length+_.length>0)){let t=null;(t=h(this))&&c.resolve(t).then(w)}return y.set(this,e),!0}})})({});