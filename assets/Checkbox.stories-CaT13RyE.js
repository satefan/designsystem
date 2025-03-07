import{_ as v}from"./Checkbox-C3XwJdFT.js";const f={title:"Components/Form/Input Checkbox",component:v,argTypes:{size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:_=>({components:{Checkbox:v},setup:()=>({args:_}),template:`
      <div>
        <Checkbox v-bind="args" />
      </div>
    `}),args:{size:"base",label:"Label",name:"checkbox-name",id:"checkbox-id"}},a={render:()=>({template:`
      <input type="checkbox" class="input--base" disabled />
      <input type="checkbox" class="input--base" disabled checked />
      <label><input type="checkbox" class="input--base" disabled data-default-theme="dark"/>dark-themed disabled checkbox</label>
      <label><input type="checkbox" class="input--base" disabled checked data-default-theme="dark" /> dark-themed disabled checked checkbox</label>
    `})},s={render:()=>({template:`
      <input type="checkbox" class="input--sm" value="input--sm" />
      <input type="checkbox" class="input--base" value="input--base" />
      <input type="checkbox" class="input--lg" value="input--lg" />
    `})},c={render:()=>({template:`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--base" value="" />
        <label for="checkbox-id1" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
      </div>
    `})},r={render:()=>({template:`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    `})};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <Checkbox v-bind="args" />
      </div>
    \`
  }),
  args: {
    size: 'base',
    label: 'Label',
    name: 'checkbox-name',
    id: 'checkbox-id'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--base" disabled />
      <input type="checkbox" class="input--base" disabled checked />
      <label><input type="checkbox" class="input--base" disabled data-default-theme="dark"/>dark-themed disabled checkbox</label>
      <label><input type="checkbox" class="input--base" disabled checked data-default-theme="dark" /> dark-themed disabled checked checkbox</label>
    \`
  })
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,b,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--sm" value="input--sm" />
      <input type="checkbox" class="input--base" value="input--base" />
      <input type="checkbox" class="input--lg" value="input--lg" />
    \`
  })
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var m,k,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--base" value="" />
        <label for="checkbox-id1" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
      </div>
    \`
  })
}`,...(h=(k=c.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var x,g,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    \`
  })
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const C=["Example","DisabledInput","SizesCheckbox","RequiredCheckbox","MessagesCheckbox"],S=Object.freeze(Object.defineProperty({__proto__:null,DisabledInput:a,Example:e,MessagesCheckbox:r,RequiredCheckbox:c,SizesCheckbox:s,__namedExportsOrder:C,default:f},Symbol.toStringTag,{value:"Module"}));export{S as C,a as D,e as E,r as M,c as R,s as S};
