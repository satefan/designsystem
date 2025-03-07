import{_ as h}from"./Input-DbqkJEVL.js";const I={title:"Components/Form/Input",component:h,argTypes:{type:{table:{type:{summary:["string: color, date, datetime-local, email, file, month, number, password, range, search, tel, text, time, url, week, submit"]}},options:["color","date","datetime-local","email","file","month","number","password","range","search","tel","text","time","url","week","submit"],control:{type:"select"}},required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},label:{},hideLabel:{control:{type:"boolean"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:_=>({components:{Input:h},setup:()=>({args:_}),template:'<Input v-bind="args" />'}),args:{type:"outline",size:"base",label:"Label",hideLabel:!1,placeholder:"Placeholder",value:void 0,id:"my-id",min:void 0,max:void 0,step:void 0,message:void 0,messageType:"error"}},s={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--base" disabled value="Input text" />
        <input class="input--base" data-default-theme="dark" disabled value="Input text" />
      </div>
    `})},a={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--sm" value="input--sm" />
        <input class="input--base" value="input--base" />
        <input class="input--lg" value="input--lg" />
      </div>
    `})},t={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base" required />
      </div>
    `})},n={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base input--error" required />
        <div class="badge badge--sm badge--error">This field is required</div>
      </div>
    `})};var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Input
    },
    setup: () => ({
      args
    }),
    template: '<Input v-bind="args" />'
  }),
  args: {
    type: 'outline',
    size: 'base',
    label: 'Label',
    hideLabel: false,
    placeholder: 'Placeholder',
    value: undefined,
    id: 'my-id',
    min: undefined,
    max: undefined,
    step: undefined,
    message: undefined,
    messageType: 'error'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,o;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--base" disabled value="Input text" />
        <input class="input--base" data-default-theme="dark" disabled value="Input text" />
      </div>
    \`
  })
}`,...(o=(p=s.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};var u,c,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--sm" value="input--sm" />
        <input class="input--base" value="input--base" />
        <input class="input--lg" value="input--lg" />
      </div>
    \`
  })
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,y,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base" required />
      </div>
    \`
  })
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,v,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base input--error" required />
        <div class="badge badge--sm badge--error">This field is required</div>
      </div>
    \`
  })
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const w=["Example","DisabledInput","SizesInput","RequiredInput","MessagesInput"],S=Object.freeze(Object.defineProperty({__proto__:null,DisabledInput:s,Example:e,MessagesInput:n,RequiredInput:t,SizesInput:a,__namedExportsOrder:w,default:I},Symbol.toStringTag,{value:"Module"}));export{s as D,e as E,S as I,n as M,t as R,a as S};
