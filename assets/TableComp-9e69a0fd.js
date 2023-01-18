import{c as be,j as n,a as h,u as Le,b as Z,r as c,d as ee,e as Fe,f as u,g as p,m as me,k as re,h as y,i as Ce,o as ge,l as Be,n as _,p as se,q as Me,F as Ne,I as Ae}from"./index-24a2d06b.js";var[dt,Re]=be({name:"CheckboxGroupContext",strict:!1});function Ke(e){return n(h.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:n("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function We(e){return n(h.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:n("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function He(e){const{isIndeterminate:a,isChecked:t,...o}=e,d=a?We:Ke;return t||a?n(h.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:n(d,{...o})}):null}var Oe={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},pe=!1,O=null,I=!1,ne=!1,ae=new Set;function ie(e,a){ae.forEach(t=>t(e,a))}var Ue=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function Ve(e){return!(e.metaKey||!Ue&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function ve(e){I=!0,Ve(e)&&(O="keyboard",ie("keyboard",e))}function F(e){if(O="pointer",e.type==="mousedown"||e.type==="pointerdown"){I=!0;const a=e.composedPath?e.composedPath()[0]:e.target;let t=!1;try{t=a.matches(":focus-visible")}catch{}if(t)return;ie("pointer",e)}}function qe(e){return e.mozInputSource===0&&e.isTrusted?!0:e.detail===0&&!e.pointerType}function Ge(e){qe(e)&&(I=!0,O="virtual")}function Xe(e){e.target===window||e.target===document||(!I&&!ne&&(O="virtual",ie("virtual",e)),I=!1,ne=!1)}function ze(){I=!1,ne=!0}function ke(){return O!=="pointer"}function $e(){if(typeof window>"u"||pe)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...t){I=!0,e.apply(this,t)},document.addEventListener("keydown",ve,!0),document.addEventListener("keyup",ve,!0),document.addEventListener("click",Ge,!0),window.addEventListener("focus",Xe,!0),window.addEventListener("blur",ze,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",F,!0),document.addEventListener("pointermove",F,!0),document.addEventListener("pointerup",F,!0)):(document.addEventListener("mousedown",F,!0),document.addEventListener("mousemove",F,!0),document.addEventListener("mouseup",F,!0)),pe=!0}function je(e){$e(),e(ke());const a=()=>e(ke());return ae.add(a),()=>{ae.delete(a)}}function Ye(e,a=[]){const t=Object.assign({},e);for(const o of a)o in t&&delete t[o];return t}function Je(e={}){const a=Le(e),{isDisabled:t,isReadOnly:o,isRequired:d,isInvalid:i,id:f,onBlur:T,onFocus:B,"aria-describedby":D}=a,{defaultChecked:w,isChecked:x,isFocusable:M,onChange:U,isIndeterminate:s,name:l,value:b,tabIndex:C=void 0,"aria-label":N,"aria-labelledby":A,"aria-invalid":g,...j}=e,R=Ye(j,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),K=Z(U),V=Z(T),q=Z(B),[G,Se]=c.useState(!1),[W,X]=c.useState(!1),[Y,ce]=c.useState(!1),[J,L]=c.useState(!1);c.useEffect(()=>je(Se),[]);const v=c.useRef(null),[le,Ee]=c.useState(!0),[_e,z]=c.useState(!!w),Q=x!==void 0,m=Q?x:_e,de=c.useCallback(r=>{if(o||t){r.preventDefault();return}Q||z(m?r.target.checked:s?!0:r.target.checked),K==null||K(r)},[o,t,m,Q,s,K]);ee(()=>{v.current&&(v.current.indeterminate=Boolean(s))},[s]),Fe(()=>{t&&X(!1)},[t,X]),ee(()=>{const r=v.current;r!=null&&r.form&&(r.form.onreset=()=>{z(!!w)})},[]);const ue=t&&!M,he=c.useCallback(r=>{r.key===" "&&L(!0)},[L]),fe=c.useCallback(r=>{r.key===" "&&L(!1)},[L]);ee(()=>{if(!v.current)return;v.current.checked!==m&&z(v.current.checked)},[v.current]);const Ie=c.useCallback((r={},S=null)=>{const E=$=>{W&&$.preventDefault(),L(!0)};return{...r,ref:S,"data-active":u(J),"data-hover":u(Y),"data-checked":u(m),"data-focus":u(W),"data-focus-visible":u(W&&G),"data-indeterminate":u(s),"data-disabled":u(t),"data-invalid":u(i),"data-readonly":u(o),"aria-hidden":!0,onMouseDown:p(r.onMouseDown,E),onMouseUp:p(r.onMouseUp,()=>L(!1)),onMouseEnter:p(r.onMouseEnter,()=>ce(!0)),onMouseLeave:p(r.onMouseLeave,()=>ce(!1))}},[J,m,t,W,G,Y,s,i,o]),Pe=c.useCallback((r={},S=null)=>({...R,...r,ref:me(S,E=>{E&&Ee(E.tagName==="LABEL")}),onClick:p(r.onClick,()=>{var E;le||((E=v.current)==null||E.click(),requestAnimationFrame(()=>{var $;($=v.current)==null||$.focus()}))}),"data-disabled":u(t),"data-checked":u(m),"data-invalid":u(i)}),[R,t,m,i,le]),Te=c.useCallback((r={},S=null)=>({...r,ref:me(v,S),type:"checkbox",name:l,value:b,id:f,tabIndex:C,onChange:p(r.onChange,de),onBlur:p(r.onBlur,V,()=>X(!1)),onFocus:p(r.onFocus,q,()=>X(!0)),onKeyDown:p(r.onKeyDown,he),onKeyUp:p(r.onKeyUp,fe),required:d,checked:m,disabled:ue,readOnly:o,"aria-label":N,"aria-labelledby":A,"aria-invalid":g?Boolean(g):i,"aria-describedby":D,"aria-disabled":t,style:Oe}),[l,b,f,de,V,q,he,fe,d,m,ue,o,N,A,g,i,D,t,C]),De=c.useCallback((r={},S=null)=>({...r,ref:S,onMouseDown:p(r.onMouseDown,ye),onTouchStart:p(r.onTouchStart,ye),"data-disabled":u(t),"data-checked":u(m),"data-invalid":u(i)}),[m,t,i]);return{state:{isInvalid:i,isFocused:W,isChecked:m,isActive:J,isHovered:Y,isIndeterminate:s,isDisabled:t,isReadOnly:o,isRequired:d},getRootProps:Pe,getCheckboxProps:Ie,getInputProps:Te,getLabelProps:De,htmlProps:R}}function ye(e){e.preventDefault(),e.stopPropagation()}var Qe={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},Ze={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},et=re({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),tt=re({from:{opacity:0},to:{opacity:1}}),nt=re({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),oe=y(function(a,t){const o=Re(),d={...o,...a},i=Ce("Checkbox",d),f=ge(a),{spacing:T="0.5rem",className:B,children:D,iconColor:w,iconSize:x,icon:M=n(He,{}),isChecked:U,isDisabled:s=o==null?void 0:o.isDisabled,onChange:l,inputProps:b,...C}=f;let N=U;o!=null&&o.value&&f.value&&(N=o.value.includes(f.value));let A=l;o!=null&&o.onChange&&f.value&&(A=Be(o.onChange,l));const{state:g,getInputProps:j,getCheckboxProps:R,getLabelProps:K,getRootProps:V}=Je({...C,isDisabled:s,isChecked:N,onChange:A}),q=c.useMemo(()=>({animation:g.isIndeterminate?`${tt} 20ms linear, ${nt} 200ms linear`:`${et} 200ms linear`,fontSize:x,color:w,...i.icon}),[w,x,,g.isIndeterminate,i.icon]),G=c.cloneElement(M,{__css:q,isIndeterminate:g.isIndeterminate,isChecked:g.isChecked});return _(h.label,{__css:{...Ze,...i.container},className:se("chakra-checkbox",B),...V(),children:[n("input",{className:"chakra-checkbox__input",...j(b,t)}),n(h.span,{__css:{...Qe,...i.control},className:"chakra-checkbox__control",...R(),children:G}),D&&n(h.span,{className:"chakra-checkbox__label",...K(),__css:{marginStart:T,...i.label},children:D})]})});oe.displayName="Checkbox";var[at,P]=be({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),we=y((e,a)=>{const t=Ce("Table",e),{className:o,layout:d,...i}=ge(e);return n(at,{value:t,children:n(h.table,{ref:a,__css:{tableLayout:d,...t.table},className:se("chakra-table",o),...i})})});we.displayName="Table";var ot=y((e,a)=>{const t=P();return n(h.thead,{...e,ref:a,__css:t.thead})}),te=y((e,a)=>{const t=P();return n(h.tr,{...e,ref:a,__css:t.tr})}),xe=y((e,a)=>{const{placement:t="bottom",...o}=e,d=P();return n(h.caption,{...o,ref:a,__css:{...d.caption,captionSide:t}})});xe.displayName="TableCaption";var rt=y((e,a)=>{var t;const{overflow:o,overflowX:d,className:i,...f}=e;return n(h.div,{ref:a,className:se("chakra-table__container",i),...f,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(t=o??d)!=null?t:"auto",overflowY:"hidden",maxWidth:"100%"}})}),st=y((e,a)=>{const t=P();return n(h.tbody,{...e,ref:a,__css:t.tbody})}),H=y(({isNumeric:e,...a},t)=>{const o=P();return n(h.td,{...a,ref:t,__css:o.td,"data-is-numeric":e})}),it=y((e,a)=>{const t=P();return n(h.tfoot,{...e,ref:a,__css:t.tfoot})}),k=y(({isNumeric:e,...a},t)=>{const o=P();return n(h.th,{...a,ref:t,__css:o.th,"data-is-numeric":e})});const ut=({updateData:e})=>{const[a,t]=c.useState([]),[o,d]=c.useState(""),[i,f]=c.useState([!1]),T=i.every(Boolean),B=i.some(Boolean)&&!T;let w=[...a].filter(s=>s.packageEvent.includes(o));console.log("parnet",o),c.useEffect(()=>{Me.get("https://api.jajangrohmatulloh.com").then(s=>{t(s.data);let l=[];s.data.forEach((b,C)=>{l[C]=!1}),f(l)})},[e]);const x=s=>{let l=[...i];a.forEach((b,C)=>{l[C]=s.target.checked}),f(l)},M=s=>{let l=[...i];l[s.target.parentNode.dataset.index]=s.target.checked,f(l)};return _(Ne,{children:[n(Ae,{onChange:s=>{d(s.target.value)}}),n(rt,{children:_(we,{variant:"simple",children:[n(xe,{children:"Imperial to metric conversion factors"}),n(ot,{children:_(te,{children:[n(k,{children:n(oe,{isChecked:T,isIndeterminate:B,onChange:s=>x(s)})}),n(k,{children:"Ticket id"}),n(k,{children:"Package Event"}),n(k,{children:"Date"}),n(k,{children:"Name"})]})}),n(st,{children:w.map((s,l)=>_(te,{children:[n(H,{children:n(oe,{"data-index":l,"data-id":s.ticketId,className:"table__checkbox--one",isChecked:i[l],onChange:b=>M(b)})}),n(H,{children:s.ticketId}),n(H,{children:s.packageEvent}),_(H,{children:[s.startDate," - ",s.finishDate]}),n(H,{children:s.name})]},s.ticketId))}),n(it,{children:_(te,{children:[n(k,{}),n(k,{children:"Ticket id"}),n(k,{children:"Package Event"}),n(k,{children:"Date"}),n(k,{children:"Name"})]})})]})})]})};export{ut as default};
