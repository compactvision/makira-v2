import{r as P,j as C,U as $t}from"./app-DcO9B_4T.js";import{c as tr}from"./createLucideIcon-BjdxXtgX.js";import{u as Dt,c as ar}from"./button-BRDfUn3M.js";import{u as rr,c as nr,a as it,b as ir,P as or}from"./index-CG0xb6oJ.js";import{P as Be}from"./index-DSrw2zdM.js";import{C as sr}from"./check-Dwnz1w0-.js";function lr(e){const t=P.useRef({value:e,previous:e});return P.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var he="Checkbox",[fr,es]=nr(he),[ur,Ge]=fr(he);function cr(e){const{__scopeCheckbox:t,checked:a,children:r,defaultChecked:n,disabled:i,form:o,name:s,onCheckedChange:l,required:u,value:d="on",internal_do_not_use_render:c}=e,[h,v]=rr({prop:a,defaultProp:n??!1,onChange:l,caller:he}),[x,g]=P.useState(null),[S,y]=P.useState(null),k=P.useRef(!1),A=x?!!o||!!x.closest("form"):!0,E={checked:h,disabled:i,setChecked:v,control:x,setControl:g,name:s,form:o,value:d,hasConsumerStoppedPropagationRef:k,required:u,defaultChecked:z(n)?!1:n,isFormControl:A,bubbleInput:S,setBubbleInput:y};return C.jsx(ur,{scope:t,...E,children:dr(c)?c(E):r})}var Ut="CheckboxTrigger",Wt=P.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:a,...r},n)=>{const{control:i,value:o,disabled:s,checked:l,required:u,setControl:d,setChecked:c,hasConsumerStoppedPropagationRef:h,isFormControl:v,bubbleInput:x}=Ge(Ut,e),g=Dt(n,d),S=P.useRef(l);return P.useEffect(()=>{const y=i?.form;if(y){const k=()=>c(S.current);return y.addEventListener("reset",k),()=>y.removeEventListener("reset",k)}},[i,c]),C.jsx(Be.button,{type:"button",role:"checkbox","aria-checked":z(l)?"mixed":l,"aria-required":u,"data-state":Vt(l),"data-disabled":s?"":void 0,disabled:s,value:o,...r,ref:g,onKeyDown:it(t,y=>{y.key==="Enter"&&y.preventDefault()}),onClick:it(a,y=>{c(k=>z(k)?!0:!k),x&&v&&(h.current=y.isPropagationStopped(),h.current||y.stopPropagation())})})});Wt.displayName=Ut;var Yt=P.forwardRef((e,t)=>{const{__scopeCheckbox:a,name:r,checked:n,defaultChecked:i,required:o,disabled:s,value:l,onCheckedChange:u,form:d,...c}=e;return C.jsx(cr,{__scopeCheckbox:a,checked:n,defaultChecked:i,disabled:s,required:o,onCheckedChange:u,name:r,form:d,value:l,internal_do_not_use_render:({isFormControl:h})=>C.jsxs(C.Fragment,{children:[C.jsx(Wt,{...c,ref:t,__scopeCheckbox:a}),h&&C.jsx(Xt,{__scopeCheckbox:a})]})})});Yt.displayName=he;var Ht="CheckboxIndicator",Bt=P.forwardRef((e,t)=>{const{__scopeCheckbox:a,forceMount:r,...n}=e,i=Ge(Ht,a);return C.jsx(or,{present:r||z(i.checked)||i.checked===!0,children:C.jsx(Be.span,{"data-state":Vt(i.checked),"data-disabled":i.disabled?"":void 0,...n,ref:t,style:{pointerEvents:"none",...e.style}})})});Bt.displayName=Ht;var Gt="CheckboxBubbleInput",Xt=P.forwardRef(({__scopeCheckbox:e,...t},a)=>{const{control:r,hasConsumerStoppedPropagationRef:n,checked:i,defaultChecked:o,required:s,disabled:l,name:u,value:d,form:c,bubbleInput:h,setBubbleInput:v}=Ge(Gt,e),x=Dt(a,v),g=lr(i),S=ir(r);P.useEffect(()=>{const k=h;if(!k)return;const A=window.HTMLInputElement.prototype,b=Object.getOwnPropertyDescriptor(A,"checked").set,B=!n.current;if(g!==i&&b){const ke=new Event("click",{bubbles:B});k.indeterminate=z(i),b.call(k,z(i)?!1:i),k.dispatchEvent(ke)}},[h,g,i,n]);const y=P.useRef(z(i)?!1:i);return C.jsx(Be.input,{type:"checkbox","aria-hidden":!0,defaultChecked:o??y.current,required:s,disabled:l,name:u,value:d,form:c,...t,tabIndex:-1,ref:x,style:{...t.style,...S,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});Xt.displayName=Gt;function dr(e){return typeof e=="function"}function z(e){return e==="indeterminate"}function Vt(e){return z(e)?"indeterminate":e?"checked":"unchecked"}function ts(e){const t=tr.c(9);let a,r;t[0]!==e?({className:a,...r}=e,t[0]=e,t[1]=a,t[2]=r):(a=t[1],r=t[2]);let n;t[3]!==a?(n=ar("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",a),t[3]=a,t[4]=n):n=t[4];let i;t[5]===Symbol.for("react.memo_cache_sentinel")?(i=C.jsx(Bt,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:C.jsx(sr,{className:"size-3.5"})}),t[5]=i):i=t[5];let o;return t[6]!==r||t[7]!==n?(o=C.jsx(Yt,{"data-slot":"checkbox",className:n,...r,children:i}),t[6]=r,t[7]=n,t[8]=o):o=t[8],o}var as={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},rs={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},ns={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},is={prefix:"fas",iconName:"headset",icon:[448,512,[],"f590","M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z"]},os={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M136 128a120 120 0 1 1 240 0 120 120 0 1 1 -240 0zM48 482.3C48 383.8 127.8 304 226.3 304l59.4 0c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3zM544 96c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24z"]},ss={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},ls={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},fs={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]},mr={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]},us=mr,cs={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]},ds={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]};function Ne(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function vr(e){if(Array.isArray(e))return e}function hr(e){if(Array.isArray(e))return Ne(e)}function pr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Kt(r.key),r)}}function br(e,t,a){return t&&gr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Xe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function p(e,t,a){return(t=Kt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function yr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function kr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(a),!0).forEach(function(r){p(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ot(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function pe(e,t){return vr(e)||xr(e,t)||Xe(e,t)||kr()}function O(e){return hr(e)||yr(e)||Xe(e)||Sr()}function wr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kt(e){var t=wr(e,"string");return typeof t=="symbol"?t:t+""}function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function Xe(e,t){if(e){if(typeof e=="string")return Ne(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ne(e,t):void 0}}var st=function(){},Ve={},qt={},Jt=null,Qt={mark:st,measure:st};try{typeof window<"u"&&(Ve=window),typeof document<"u"&&(qt=document),typeof MutationObserver<"u"&&(Jt=MutationObserver),typeof performance<"u"&&(Qt=performance)}catch{}var Ar=Ve.navigator||{},lt=Ar.userAgent,ft=lt===void 0?"":lt,$=Ve,w=qt,ut=Jt,se=Qt;$.document;var R=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Zt=~ft.indexOf("MSIE")||~ft.indexOf("Trident/"),we,Ir=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Pr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,ea={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Er={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ta=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],I="classic",ne="duotone",aa="sharp",ra="sharp-duotone",na="chisel",ia="etch",oa="jelly",sa="jelly-duo",la="jelly-fill",fa="notdog",ua="notdog-duo",ca="slab",da="slab-press",ma="thumbprint",va="utility",ha="utility-duo",pa="utility-fill",ga="whiteboard",Cr="Classic",Fr="Duotone",Nr="Sharp",Or="Sharp Duotone",_r="Chisel",jr="Etch",Tr="Jelly",Lr="Jelly Duo",Mr="Jelly Fill",Rr="Notdog",zr="Notdog Duo",$r="Slab",Dr="Slab Press",Ur="Thumbprint",Wr="Utility",Yr="Utility Duo",Hr="Utility Fill",Br="Whiteboard",ba=[I,ne,aa,ra,na,ia,oa,sa,la,fa,ua,ca,da,ma,va,ha,pa,ga];we={},p(p(p(p(p(p(p(p(p(p(we,I,Cr),ne,Fr),aa,Nr),ra,Or),na,_r),ia,jr),oa,Tr),sa,Lr),la,Mr),fa,Rr),p(p(p(p(p(p(p(p(we,ua,zr),ca,$r),da,Dr),ma,Ur),va,Wr),ha,Yr),pa,Hr),ga,Br);var Gr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Xr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Vr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Kr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ya=["fak","fa-kit","fakd","fa-kit-duotone"],ct={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qr=["kit"],Jr="kit",Qr="kit-duotone",Zr="Kit",en="Kit Duotone";p(p({},Jr,Zr),Qr,en);var tn={kit:{"fa-kit":"fak"}},an={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},rn={kit:{fak:"fa-kit"}},dt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ae,le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],on="classic",sn="duotone",ln="sharp",fn="sharp-duotone",un="chisel",cn="etch",dn="jelly",mn="jelly-duo",vn="jelly-fill",hn="notdog",pn="notdog-duo",gn="slab",bn="slab-press",yn="thumbprint",xn="utility",kn="utility-duo",Sn="utility-fill",wn="whiteboard",An="Classic",In="Duotone",Pn="Sharp",En="Sharp Duotone",Cn="Chisel",Fn="Etch",Nn="Jelly",On="Jelly Duo",_n="Jelly Fill",jn="Notdog",Tn="Notdog Duo",Ln="Slab",Mn="Slab Press",Rn="Thumbprint",zn="Utility",$n="Utility Duo",Dn="Utility Fill",Un="Whiteboard";Ae={},p(p(p(p(p(p(p(p(p(p(Ae,on,An),sn,In),ln,Pn),fn,En),un,Cn),cn,Fn),dn,Nn),mn,On),vn,_n),hn,jn),p(p(p(p(p(p(p(p(Ae,pn,Tn),gn,Ln),bn,Mn),yn,Rn),xn,zn),kn,$n),Sn,Dn),wn,Un);var Wn="kit",Yn="kit-duotone",Hn="Kit",Bn="Kit Duotone";p(p({},Wn,Hn),Yn,Bn);var Gn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Xn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Oe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Vn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],xa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(nn,Vn),Kn=["solid","regular","light","thin","duotone","brands","semibold"],ka=[1,2,3,4,5,6,7,8,9,10],qn=ka.concat([11,12,13,14,15,16,17,18,19,20]),Jn=["aw","fw","pull-left","pull-right"],Qn=[].concat(O(Object.keys(Xn)),Kn,Jn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY]).concat(ka.map(function(e){return"".concat(e,"x")})).concat(qn.map(function(e){return"w-".concat(e)})),Zn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L="___FONT_AWESOME___",_e=16,Sa="fa",wa="svg-inline--fa",Y="data-fa-i2svg",je="data-fa-pseudo-element",ei="data-fa-pseudo-element-pending",Ke="data-prefix",qe="data-icon",mt="fontawesome-i2svg",ti="async",ai=["HTML","HEAD","STYLE","SCRIPT"],Aa=["::before","::after",":before",":after"],Ia=(function(){try{return!0}catch{return!1}})();function ie(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[I]}})}var Pa=f({},ea);Pa[I]=f(f(f(f({},{"fa-duotone":"duotone"}),ea[I]),ct.kit),ct["kit-duotone"]);var ri=ie(Pa),Te=f({},Kr);Te[I]=f(f(f(f({},{duotone:"fad"}),Te[I]),dt.kit),dt["kit-duotone"]);var vt=ie(Te),Le=f({},Oe);Le[I]=f(f({},Le[I]),rn.kit);var Je=ie(Le),Me=f({},Gn);Me[I]=f(f({},Me[I]),tn.kit);ie(Me);var ni=Ir,Ea="fa-layers-text",ii=Pr,oi=f({},Gr);ie(oi);var si=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ie=Er,li=[].concat(O(qr),O(Qn)),Z=$.FontAwesomeConfig||{};function fi(e){var t=w.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ui(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(w&&typeof w.querySelector=="function"){var ci=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ci.forEach(function(e){var t=pe(e,2),a=t[0],r=t[1],n=ui(fi(a));n!=null&&(Z[r]=n)})}var Ca={styleDefault:"solid",familyDefault:I,cssPrefix:Sa,replacementClass:wa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var q=f(f({},Ca),Z);q.autoReplaceSvg||(q.observeMutations=!1);var m={};Object.keys(Ca).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){q[e]=a,ee.forEach(function(r){return r(m)})},get:function(){return q[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,ee.forEach(function(a){return a(m)})},get:function(){return q.cssPrefix}});$.FontAwesomeConfig=m;var ee=[];function di(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var G=_e,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mi(e){if(!(!e||!R)){var t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=w.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return w.head.insertBefore(t,r),e}}var vi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){for(var e=12,t="";e-- >0;)t+=vi[Math.random()*62|0];return t}function J(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Qe(e){return e.classList?J(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hi(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Fa(e[a]),'" ')},"").trim()}function ge(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Ze(e){return e.size!==_.size||e.x!==_.x||e.y!==_.y||e.rotate!==_.rotate||e.flipX||e.flipY}function pi(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function gi(e){var t=e.transform,a=e.width,r=a===void 0?_e:a,n=e.height,i=n===void 0?_e:n,o="";return Zt?o+="translate(".concat(t.x/G-r/2,"em, ").concat(t.y/G-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "),o+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var bi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Na(){var e=Sa,t=wa,a=m.cssPrefix,r=m.replacementClass,n=bi;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var pt=!1;function Pe(){m.autoAddCss&&!pt&&(mi(Na()),pt=!0)}var yi={mixout:function(){return{dom:{css:Na,insertCss:Pe}}},hooks:function(){return{beforeDOMElementCreation:function(){Pe()},beforeI2svg:function(){Pe()}}}},M=$||{};M[L]||(M[L]={});M[L].styles||(M[L].styles={});M[L].hooks||(M[L].hooks={});M[L].shims||(M[L].shims=[]);var N=M[L],Oa=[],_a=function(){w.removeEventListener("DOMContentLoaded",_a),me=1,Oa.map(function(t){return t()})},me=!1;R&&(me=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),me||w.addEventListener("DOMContentLoaded",_a));function xi(e){R&&(me?setTimeout(e,0):Oa.push(e))}function oe(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Fa(e):"<".concat(t," ").concat(hi(r),">").concat(i.map(oe).join(""),"</").concat(t,">")}function gt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ee=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function ja(e){return O(e).length!==1?null:e.codePointAt(0).toString(16)}function bt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Re(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=bt(t);typeof N.hooks.addPack=="function"&&!n?N.hooks.addPack(e,bt(t)):N.styles[e]=f(f({},N.styles[e]||{}),i),e==="fas"&&Re("fa",t)}var ae=N.styles,ki=N.shims,Ta=Object.keys(Je),Si=Ta.reduce(function(e,t){return e[t]=Object.keys(Je[t]),e},{}),et=null,La={},Ma={},Ra={},za={},$a={};function wi(e){return~li.indexOf(e)}function Ai(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!wi(n)?n:null}var Da=function(){var t=function(i){return Ee(ae,function(o,s,l){return o[l]=Ee(s,i,{}),o},{})};La=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Ma=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),$a=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ae||m.autoFetchSvg,r=Ee(ki,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Ra=r.names,za=r.unicodes,et=be(m.styleDefault,{family:m.familyDefault})};di(function(e){et=be(e.styleDefault,{family:m.familyDefault})});Da();function tt(e,t){return(La[e]||{})[t]}function Ii(e,t){return(Ma[e]||{})[t]}function W(e,t){return($a[e]||{})[t]}function Ua(e){return Ra[e]||{prefix:null,iconName:null}}function Pi(e){var t=za[e],a=tt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function D(){return et}var Wa=function(){return{prefix:null,iconName:null,rest:[]}};function Ei(e){var t=I,a=Ta.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return ba.forEach(function(r){(e.includes(a[r])||e.some(function(n){return Si[r].includes(n)}))&&(t=r)}),t}function be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?I:a,n=ri[r][e];if(r===ne&&!e)return"fad";var i=vt[r][e]||vt[r][n],o=e in N.styles?e:null,s=i||o||null;return s}function Ci(e){var t=[],a=null;return e.forEach(function(r){var n=Ai(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function yt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var xt=xa.concat(ya);function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=yt(e.filter(function(v){return xt.includes(v)})),o=yt(e.filter(function(v){return!xt.includes(v)})),s=i.filter(function(v){return n=v,!ta.includes(v)}),l=pe(s,1),u=l[0],d=u===void 0?null:u,c=Ei(i),h=f(f({},Ci(o)),{},{prefix:be(d,{family:c})});return f(f(f({},h),_i({values:e,family:c,styles:ae,config:m,canonical:h,givenPrefix:n})),Fi(r,n,h))}function Fi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Ua(n):{},o=W(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ae.far&&ae.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Ni=ba.filter(function(e){return e!==I||e!==ne}),Oi=Object.keys(Oe).filter(function(e){return e!==I}).map(function(e){return Object.keys(Oe[e])}).flat();function _i(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,d=a===ne,c=t.includes("fa-duotone")||t.includes("fad"),h=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(c||h||v)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ni.includes(a)){var x=Object.keys(s).find(function(S){return Oi.includes(S)});if(x||u.autoFetchSvg){var g=Vr.get(a).defaultShortPrefixId;r.prefix=g,r.iconName=W(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=D()||"fas"),r}var ji=(function(){function e(){pr(this,e),this.definitions={}}return br(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Re(s,o[s]);var l=Je[I][s];l&&Re(l,o[s]),Da()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),kt=[],V={},K={},Ti=Object.keys(K);function Li(e,t){var a=t.mixoutsTo;return kt=e,V={},Object.keys(K).forEach(function(r){Ti.indexOf(r)===-1&&delete K[r]}),kt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),de(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){V[o]||(V[o]=[]),V[o].push(i[o])})}r.provides&&r.provides(K)}),a}function ze(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=V[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function H(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=V[e]||[];n.forEach(function(i){i.apply(null,a)})}function U(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function $e(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||D();if(t)return t=W(a,t)||t,gt(Ya.definitions,a,t)||gt(N.styles,a,t)}var Ya=new ji,Mi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,H("noAuto")},Ri={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(H("beforeI2svg",t),U("pseudoElements2svg",t),U("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,xi(function(){$i({autoReplaceSvgRoot:a}),H("watch",t)})}},zi={icon:function(t){if(t===null)return null;if(de(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=be(t[0]);return{prefix:r,iconName:W(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ni))){var n=ye(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||D(),iconName:W(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=D();return{prefix:i,iconName:W(i,t)||t}}}},F={noAuto:Mi,config:m,dom:Ri,parse:zi,library:Ya,findIconDefinition:$e,toHtml:oe},$i=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?w:a;(Object.keys(N.styles).length>0||m.autoFetchSvg)&&R&&m.autoReplaceSvg&&F.dom.i2svg({node:r})};function xe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return oe(r)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var r=w.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Di(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(Ze(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=ge(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Ui(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function Wi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function at(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,h=r.found?r:a,v=h.width,x=h.height,g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(b){return u.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:g,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!Wi(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[Y]="");var y=f(f({},S),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),k=r.found&&a.found?U("generateAbstractMask",y)||{children:[],attributes:{}}:U("generateAbstractIcon",y)||{children:[],attributes:{}},A=k.children,E=k.attributes;return y.children=A,y.attributes=E,s?Ui(y):Di(y)}function St(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Y]="");var u=f({},i.styles);Ze(n)&&(u.transform=gi({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var d=ge(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function Yi(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=ge(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ce=N.styles;function De(e){var t=e[0],a=e[1],r=e.slice(4),n=pe(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ie.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ie.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Hi={found:!1,width:512,height:512};function Bi(e,t){!Ia&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ue(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=D()),new Promise(function(r,n){if(a==="fa"){var i=Ua(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ce[t]&&Ce[t][e]){var o=Ce[t][e];return r(De(o))}Bi(e,t),r(f(f({},Hi),{},{icon:m.showMissingIcons&&e?U("missingIconAbstract")||{}:{}}))})}var wt=function(){},We=m.measurePerformance&&se&&se.mark&&se.measure?se:{mark:wt,measure:wt},Q='FA "7.1.0"',Gi=function(t){return We.mark("".concat(Q," ").concat(t," begins")),function(){return Ha(t)}},Ha=function(t){We.mark("".concat(Q," ").concat(t," ends")),We.measure("".concat(Q," ").concat(t),"".concat(Q," ").concat(t," begins"),"".concat(Q," ").concat(t," ends"))},rt={begin:Gi,end:Ha},ue=function(){};function At(e){var t=e.getAttribute?e.getAttribute(Y):null;return typeof t=="string"}function Xi(e){var t=e.getAttribute?e.getAttribute(Ke):null,a=e.getAttribute?e.getAttribute(qe):null;return t&&a}function Vi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ki(){if(m.autoReplaceSvg===!0)return ce.replace;var e=ce[m.autoReplaceSvg];return e||ce.replace}function qi(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function Ji(e){return w.createElement(e)}function Ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?qi:Ji:a;if(typeof e=="string")return w.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ba(o,{ceFn:r}))}),n}function Qi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ce={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ba(n),a)}),a.getAttribute(Y)===null&&m.keepOriginalSource){var r=w.createComment(Qi(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Qe(a).indexOf(m.replacementClass))return ce.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return oe(s)}).join(`
`);a.setAttribute(Y,""),a.innerHTML=o}};function It(e){e()}function Ga(e,t){var a=typeof t=="function"?t:ue;if(e.length===0)a();else{var r=It;m.mutateApproach===ti&&(r=$.requestAnimationFrame||It),r(function(){var n=Ki(),i=rt.begin("mutate");e.map(n),i(),a()})}}var nt=!1;function Xa(){nt=!0}function Ye(){nt=!1}var ve=null;function Pt(e){if(ut&&m.observeMutations){var t=e.treeCallback,a=t===void 0?ue:t,r=e.nodeCallback,n=r===void 0?ue:r,i=e.pseudoElementsCallback,o=i===void 0?ue:i,s=e.observeMutationsRoot,l=s===void 0?w:s;ve=new ut(function(u){if(!nt){var d=D();J(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!At(c.addedNodes[0])&&(m.searchPseudoElements&&o(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&o([c.target],!0),c.type==="attributes"&&At(c.target)&&~si.indexOf(c.attributeName))if(c.attributeName==="class"&&Xi(c.target)){var h=ye(Qe(c.target)),v=h.prefix,x=h.iconName;c.target.setAttribute(Ke,v||d),x&&c.target.setAttribute(qe,x)}else Vi(c.target)&&n(c.target)})}}),R&&ve.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zi(){ve&&ve.disconnect()}function eo(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function to(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=ye(Qe(e));return n.prefix||(n.prefix=D()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Ii(n.prefix,e.innerText)||tt(n.prefix,ja(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function ao(e){var t=J(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function ro(){return{iconName:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=to(e),r=a.iconName,n=a.prefix,i=a.rest,o=ao(e),s=ze("parseNodeAttributes",{},e),l=t.styleParser?eo(e):[];return f({iconName:r,prefix:n,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var no=N.styles;function Va(e){var t=m.autoReplaceSvg==="nest"?Et(e,{styleParser:!1}):Et(e);return~t.extra.classes.indexOf(Ea)?U("generateLayersText",e,t):U("generateSvgReplacementMutation",e,t)}function io(){return[].concat(O(ya),O(xa))}function Ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var a=w.documentElement.classList,r=function(c){return a.add("".concat(mt,"-").concat(c))},n=function(c){return a.remove("".concat(mt,"-").concat(c))},i=m.autoFetchSvg?io():ta.concat(Object.keys(no));i.includes("fa")||i.push("fa");var o=[".".concat(Ea,":not([").concat(Y,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(Y,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=rt.begin("onTree"),u=s.reduce(function(d,c){try{var h=Va(c);h&&d.push(h)}catch(v){Ia||v.name==="MissingIcon"&&console.error(v)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(h){Ga(h,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),c(h)})})}function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Va(e).then(function(a){a&&Ga([a],t)})}function so(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$e(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:$e(n||{})),e(r,f(f({},a),{},{mask:n}))}}var lo=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?_:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,h=c===void 0?[]:c,v=a.attributes,x=v===void 0?{}:v,g=a.styles,S=g===void 0?{}:g;if(t){var y=t.prefix,k=t.iconName,A=t.icon;return xe(f({type:"icon"},t),function(){return H("beforeDOMElementCreation",{iconDefinition:t,params:a}),at({icons:{main:De(A),mask:l?De(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:k,transform:f(f({},_),n),symbol:o,maskId:d,extra:{attributes:x,styles:S,classes:h}})})}},fo={mixout:function(){return{icon:so(lo)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ct,a.nodeCallback=oo,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?w:r,i=a.callback,o=i===void 0?function(){}:i;return Ct(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,d=r.extra;return new Promise(function(c,h){Promise.all([Ue(n,i),l.iconName?Ue(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=pe(v,2),g=x[0],S=x[1];c([a,at({icons:{main:g,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=ge(s);l.length>0&&(n.style=l);var u;return Ze(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},uo={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return xe({type:"layer"},function(){H("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(O(i)).join(" ")},children:o}]})}}}},co={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return xe({type:"counter",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:r}),Yi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(O(i))}})})}}}},mo={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?_:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return xe({type:"text",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:r}),St({content:a,transform:f(f({},_),i),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Zt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,St({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Ka=new RegExp('"',"ug"),Ft=[1105920,1112319],Nt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Xr),Zn),an),He=Object.keys(Nt).reduce(function(e,t){return e[t.toLowerCase()]=Nt[t],e},{}),vo=Object.keys(He).reduce(function(e,t){var a=He[t];return e[t]=a[900]||O(Object.entries(a))[0][1],e},{});function ho(e){var t=e.replace(Ka,"");return ja(O(t)[0]||"")}function po(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ka,""),n=r.codePointAt(0),i=n>=Ft[0]&&n<=Ft[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function go(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(He[a]||{})[n]||vo[a]}function Ot(e,t){var a="".concat(ei).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=J(e.children),o=i.filter(function(B){return B.getAttribute(je)===t})[0],s=$.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(ii),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&c!=="none"&&c!==""){var h=s.getPropertyValue("content"),v=go(l,d),x=ho(h),g=u[0].startsWith("FontAwesome"),S=po(s),y=tt(v,x),k=y;if(g){var A=Pi(x);A.iconName&&A.prefix&&(y=A.iconName,v=A.prefix)}if(y&&!S&&(!o||o.getAttribute(Ke)!==v||o.getAttribute(qe)!==k)){e.setAttribute(a,k),o&&e.removeChild(o);var E=ro(),b=E.extra;b.attributes[je]=t,Ue(y,v).then(function(B){var ke=at(f(f({},E),{},{icons:{main:B,mask:Wa()},prefix:v,iconName:k,extra:b,watchable:!0})),Se=w.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Se,e.firstChild):e.appendChild(Se),Se.outerHTML=ke.map(function(er){return oe(er)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function bo(e){return Promise.all([Ot(e,"::before"),Ot(e,"::after")])}function yo(e){return e.parentNode!==document.head&&!~ai.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(je)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var xo=function(t){return!!t&&Aa.some(function(a){return t.includes(a)})},ko=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=fe(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(xo(o)){var s=Aa.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=fe(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=fe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=ko(u.selectorText),c=fe(d),h;try{for(c.s();!(h=c.n()).done;){var v=h.value;r.add(v)}}catch(g){c.e(g)}finally{c.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){n.e(g)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(g,S){var y=J(a).filter(yo).map(bo),k=rt.begin("searchPseudoElements");Xa(),Promise.all(y).then(function(){k(),Ye(),g()}).catch(function(){k(),Ye(),S()})})}}var So={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=_t,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?w:r;m.searchPseudoElements&&_t(n)}}},jt=!1,wo={mixout:function(){return{dom:{unwatch:function(){Xa(),jt=!0}}}},hooks:function(){return{bootstrap:function(){Pt(ze("mutationObserverCallbacks",{}))},noAuto:function(){Zi()},watch:function(a){var r=a.observeMutationsRoot;jt?Ye():Pt(ze("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Tt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},Ao={mixout:function(){return{parse:{transform:function(a){return Tt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Tt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:c,path:h};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},Fe={x:0,y:0,width:"100%",height:"100%"};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Io(e){return e.tag==="g"?e.children:[e]}var Po={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?ye(n.split(" ").map(function(o){return o.trim()})):Wa();return i.prefix||(i.prefix=D()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,d=i.icon,c=o.width,h=o.icon,v=pi({transform:l,containerWidth:c,iconWidth:u}),x={tag:"rect",attributes:f(f({},Fe),{},{fill:"white"})},g=d.children?{children:d.children.map(Lt)}:{},S={tag:"g",attributes:f({},v.inner),children:[Lt(f({tag:d.tag,attributes:f(f({},d.attributes),v.path)},g))]},y={tag:"g",attributes:f({},v.outer),children:[S]},k="mask-".concat(s||ht()),A="clip-".concat(s||ht()),E={tag:"mask",attributes:f(f({},Fe),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,y]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Io(h)},E]};return r.push(b,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(k,")")},Fe)}),{children:r,attributes:n}}}},Eo={provides:function(t){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Co={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},Fo=[yi,fo,uo,co,mo,So,wo,Ao,Po,Eo,Co];Li(Fo,{mixoutsTo:F});F.noAuto;var re=F.config;F.library;F.dom;var qa=F.parse;F.findIconDefinition;F.toHtml;var No=F.icon;F.layer;F.text;F.counter;function Oo(e){return e=e-0,e===e}function Ja(e){return Oo(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function _o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,jo=1e3;function To(e){if(X.has(e))return X.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),i=n===-1?r:n,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const d=Ja(l);t[d.startsWith("webkit")?_o(d):d]=u}}}a=i+1}if(X.size===jo){const n=X.keys().next().value;n&&X.delete(n)}return X.set(e,t),t}function Qa(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(d=>Qa(e,d)),n=t.attributes||{},i={};for(const[d,c]of Object.entries(n))switch(!0){case d==="class":{i.className=c;break}case d==="style":{i.style=To(String(c));break}case d.startsWith("aria-"):case d.startsWith("data-"):{i[d.toLowerCase()]=c;break}default:i[Ja(d)]=c}const{style:o,role:s,"aria-label":l,...u}=a;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),e(t.tag,{...u,...i},...r)}var Lo=Qa.bind(null,$t.createElement),Mt=(e,t)=>{const a=P.useId();return e||(t?a:void 0)},Mo=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Ro="searchPseudoElementsFullScan"in re?"7.0.0":"6.0.0",zo=Number.parseInt(Ro)>=7,te="fa",j={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},$o={left:"fa-pull-left",right:"fa-pull-right"},Do={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Uo={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},T={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Wo(e){const t=re.cssPrefix||re.familyPrefix||te;return t===te?e:e.replace(new RegExp(String.raw`(?<=^|\s)${te}-`,"g"),`${t}-`)}function Yo(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:d,inverse:c,border:h,flip:v,size:x,rotation:g,pull:S,swapOpacity:y,rotateBy:k,widthAuto:A,className:E}=e,b=[];return E&&b.push(...E.split(" ")),t&&b.push(j.beat),a&&b.push(j.fade),r&&b.push(j.beatFade),n&&b.push(j.bounce),i&&b.push(j.shake),o&&b.push(j.spin),l&&b.push(j.spinReverse),s&&b.push(j.spinPulse),u&&b.push(j.pulse),d&&b.push(T.fixedWidth),c&&b.push(T.inverse),h&&b.push(T.border),v===!0&&b.push(T.flip),(v==="horizontal"||v==="both")&&b.push(T.flipHorizontal),(v==="vertical"||v==="both")&&b.push(T.flipVertical),x!=null&&b.push(Uo[x]),g!=null&&g!==0&&b.push(Do[g]),S!=null&&b.push($o[S]),y&&b.push(T.swapOpacity),zo?(k&&b.push(T.rotateBy),A&&b.push(T.widthAuto),(re.cssPrefix||re.familyPrefix||te)===te?b:b.map(Wo)):b}var Ho=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Rt(e){if(e)return Ho(e)?e:qa.icon(e)}function Bo(e){return Object.keys(e)}var zt=new Mo("FontAwesomeIcon"),Za={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Go=new Set(Object.keys(Za)),Xo=$t.forwardRef((e,t)=>{const a={...Za,...e},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:u}=a,d=Mt(l,!!n),c=Mt(s,!!o),h=Rt(r);if(!h)return zt.error("Icon lookup is undefined",r),null;const v=Yo(a),x=typeof u=="string"?qa.transform(u):u,g=Rt(n),S=No(h,{...v.length>0&&{classes:v},...x&&{transform:x},...g&&{mask:g},symbol:i,title:o,titleId:c,maskId:d});if(!S)return zt.error("Could not find icon",h),null;const{abstract:y}=S,k={ref:t};for(const A of Bo(a))Go.has(A)||(k[A]=a[A]);return Lo(y[0],k)});Xo.displayName="FontAwesomeIcon";export{ts as C,Xo as F,rs as a,us as b,ns as c,is as d,as as e,cs as f,fs as g,os as h,ds as i,ss as j,ls as k};
