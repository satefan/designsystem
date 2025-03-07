import{_ as y}from"./Textarea-CbZA4fpL.js";const S={title:"Components/Form/Textarea",component:y,argTypes:{required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:T=>({components:{Textarea:y},setup:()=>({args:T}),template:'<Textarea v-bind="args" />'}),args:{size:"base",label:"Label",name:"textarea-name",id:"textarea-id",placeholder:"Placeholder"}},a={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 50%">
        <textarea class="input--base" disabled>Disabled</textarea>
      </div>
    `})},r={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 90%">
        <textarea class="input--sm">Small</textarea>
        <textarea class="input--base">Default</textarea>
        <textarea class="input--lg">Large</textarea>
      </div>
    `})},s={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base" required />
      </div>
    `})},t={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base input--error" required />
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    `})};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Textarea
    },
    setup: () => ({
      args
    }),
    template: \`<Textarea v-bind="args" />\`
  }),
  args: {
    size: 'base',
    label: 'Label',
    name: 'textarea-name',
    id: 'textarea-id',
    placeholder: 'Placeholder'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var o,d,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 50%">
        <textarea class="input--base" disabled>Disabled</textarea>
      </div>
    \`
  })
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 90%">
        <textarea class="input--sm">Small</textarea>
        <textarea class="input--base">Default</textarea>
        <textarea class="input--lg">Large</textarea>
      </div>
    \`
  })
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,b,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base" required />
      </div>
    \`
  })
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,_,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base input--error" required />
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    \`
  })
}`,...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const h=["Example","DisabledTextarea","SizesTextarea","RequiredTextarea","MessagesTextarea"],q=Object.freeze(Object.defineProperty({__proto__:null,DisabledTextarea:a,Example:e,MessagesTextarea:t,RequiredTextarea:s,SizesTextarea:r,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,e as E,t as M,s as R,r as S,q as T};
