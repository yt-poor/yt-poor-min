(()=>{let e={};if(e.mediaElement=performance.timeOrigin,e.mediaElement!==performance.timeOrigin)return;let[t,o,r,n,i,a]=[EventTarget,WeakSet,Object,WeakMap,MutationObserver,Set],l=(async()=>{})().constructor;function s(e,n,i=64){let a=[],l=new o;return"object"==typeof(e||0)&&function e(o,s){if(!(o instanceof t)){l.add(o);try{for(let[p,d]of r.entries(o))n(p,d)&&a.push([o,p]),null!==d&&"object"==typeof d&&s+1<=i&&!l.has(d)&&e(d,s+1)}catch(c){}}}(e,0),a}let p=new n,d=null,c=`${Math.floor(314159265359*Math.random()+314159265359).toString(36)}`,y=e=>{let t=s(e,(e,t)=>"adFormat"===e&&"string"==typeof(t||0)||"adQueryId"===e&&"string"==typeof(t||0)||"adhost"===t||"adpromoted"===t,6);if(0===t.length)return;let o=new a(t.map(e=>e[0])),r=s(e,(e,t)=>"object"==typeof(t||0)&&(t?.videoData?.adFormat||t?.videoData?.adQueryId)&&t?.playerState&&o.has(t?.videoData),6),n=new a(r.map(e=>e[0][e[1]]));if(n.size>0){for(let i of n)if("object"==typeof(i||0)&&i.videoData&&i.playerState&&(i.videoData.adQueryId||i.videoData.adFormat))return i}},u=()=>{let e=document.querySelector("#logo");if(!e)return!1;let t=document.querySelector(`div[u${c}]`)||document.createElement("div"),o=(+t.getAttribute(`u${c}`)||0)+1;1===o&&(document.head.appendChild(document.createElement("style")).textContent=`

                div[u${c}]{

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
                #logo[l${c}]{
                    position: relative;
                }

            `),t.style.transition="opacity 0s",t.style.opacity="1",t.setAttribute(`u${c}`,`${o}`),e.setAttribute(`l${c}`,""),e.insertBefore(t,e.firstChild),setTimeout(()=>{t.style.transition="opacity 2.6s",t.style.opacity="0"},100)},$=()=>{let e=null,t=!1,o=()=>{let o=e=>e?e.polymerController||e.inst||e||0:e||0,n=document.querySelector("ytd-popup-container"),i=o(n);if(i.popups_&&r.keys(i.popups_).length>0)for(let a of(t=!0,e&&e.disconnect(),e=null,r.keys(i.popups_))){let l=i.popups_[a];if(l&&l.rendererName)try{i.handleClosePopupAction_(l.rendererName,l.openPopupAction?.uniqueId)}catch(s){}}try{i.closeDialog()}catch(p){}};o(),t||((e=new i(o)).observe(document.body,{subtree:!0,childList:!0}),setTimeout(()=>{t||(e&&e.disconnect(),e=null,o())},40))},f=document.getElementsByTagName("video"),m=document.getElementsByTagName("audio");r.defineProperty(r.prototype,"mediaElement",{get(){return p.get(this)},set(e){if(e===performance.timeOrigin&&0===f.length&&0===m.length&&!document.querySelector("ytd-app")&&!document.querySelector("#movie_player"))return!0;if(d!==e&&(d=e,"object"==typeof(e||0)&&f.length+m.length>0)){let t=null;(t=y(this))&&l.resolve().then(()=>{var e;let o=()=>t.playerState.state,r=o();try{t.publish("videoelementevent",{type:"error"})}catch(n){}try{t.publish("videoelementevent",{type:"ended"})}catch(i){}try{t.sendAbandonmentPing()}catch(a){}let s=o();console.log(319,1,r,s),l.resolve().then(()=>{console.log(319,2,r,o())}),setTimeout(()=>{console.log(319,3,r,o())},100),s!==r&&(48&(e=s))==0&&(646&e)>0&&(64&e)>0&&!1===u()&&setTimeout(u,1e3),l.resolve().then($)})}return p.set(this,e),!0}})})();
