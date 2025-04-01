import{_ as f}from"./Badge-DLqeiXXd.js";const S={title:"Components/Badge",component:f,argTypes:{color:{table:{type:{summary:["string: info, error, warning, success, gray, red, yellow, orange, green, blue, indigo, purple, pink"]}},options:["info","error","warning","success","gray","red","yellow","orange","green","blue","indigo","purple","pink","active"],control:{type:"select"}},size:{table:{type:{summary:["string: base, sm"]}},options:["base","sm"],control:{type:"select"}},icon:{table:{type:{summary:["string: Cancel, Checkmark, undefined"]}},options:["Cancel","Checkmark",null],control:{type:"select"}}}},e={args:{color:"blue",size:"base",icon:void 0,label:"Badge"}},a={render:()=>({template:`
      <button class="badge badge--info">info</button>
      <button class="badge badge--warning">warning</button>
      <button class="badge badge--error">error</button>
      <button class="badge badge--success">success</button>
      <button class="badge badge--active">active</button>
    `})},t={render:()=>({template:`
      <button class="badge badge--gray">gray</button>
      <button class="badge badge--red">red</button>
      <button class="badge badge--yellow">yellow</button>
      <button class="badge badge--orange">orange</button>
      <button class="badge badge--green">green</button>
      <button class="badge badge--blue">blue</button>
      <button class="badge badge--indigo">indigo</button>
      <button class="badge badge--purple">purple</button>
      <button class="badge badge--pink">pink</button>
    `})},n={render:()=>({template:`
      <button class="badge badge--base badge--gray">badge--base</button>
      <button class="badge badge--sm badge--gray">badge--sm</button>
    `})},s={render:()=>({template:`
      <div class="badge badge--gray badge--icon">
        <span class="badge__text">badge--icon</span>

        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="badge__icon icon icon--base">
          <path xmlns="http://www.w3.org/2000/svg" d="m17.153 7.066-4.8 4.801-4.779-4.779-.53.531 4.779 4.778-4.757 4.756.531.531 4.756-4.757 4.778 4.779.531-.53-4.779-4.779 4.801-4.8z" />
        </svg>

      </div>
    `})};var o,r,b;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    size: 'base',
    icon: undefined,
    label: 'Badge'
  }
}`,...(b=(r=e.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var g,d,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button class="badge badge--info">info</button>
      <button class="badge badge--warning">warning</button>
      <button class="badge badge--error">error</button>
      <button class="badge badge--success">success</button>
      <button class="badge badge--active">active</button>
    \`
  })
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button class="badge badge--gray">gray</button>
      <button class="badge badge--red">red</button>
      <button class="badge badge--yellow">yellow</button>
      <button class="badge badge--orange">orange</button>
      <button class="badge badge--green">green</button>
      <button class="badge badge--blue">blue</button>
      <button class="badge badge--indigo">indigo</button>
      <button class="badge badge--purple">purple</button>
      <button class="badge badge--pink">pink</button>
    \`
  })
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,m,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button class="badge badge--base badge--gray">badge--base</button>
      <button class="badge badge--sm badge--gray">badge--sm</button>
    \`
  })
}`,...(w=(m=n.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var y,v,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="badge badge--gray badge--icon">
        <span class="badge__text">badge--icon</span>

        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="badge__icon icon icon--base">
          <path xmlns="http://www.w3.org/2000/svg" d="m17.153 7.066-4.8 4.801-4.779-4.779-.53.531 4.779 4.778-4.757 4.756.531.531 4.756-4.757 4.778 4.779.531-.53-4.779-4.779 4.801-4.8z" />
        </svg>

      </div>
    \`
  })
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const x=["Example","ColorsStates","ColorsOther","Sizes","Icons"],k=Object.freeze(Object.defineProperty({__proto__:null,ColorsOther:t,ColorsStates:a,Example:e,Icons:s,Sizes:n,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{k as B,a as C,e as E,s as I,n as S,t as a};
