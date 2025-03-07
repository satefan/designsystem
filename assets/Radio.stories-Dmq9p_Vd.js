import{_ as R}from"./Radio-BGPQzbI6.js";const k={title:"Components/Form/Input Radio",component:R,argTypes:{required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:h=>({components:{Radio:R},setup:()=>({args:h}),template:`
      <div>
        <Radio v-bind="args" />
      </div>
    `}),args:{size:"base",label:"Label",name:"radio-name",id:"radio-id"}},a={render:()=>({template:`
      <input type="radio" class="input--base" disabled />
      <input type="radio" class="input--base" disabled checked />
      <label for=""><input type="radio" class="input--base" disabled data-default-theme="dark" />dark-themed disabled radio</label>
      <label for=""><input type="radio" class="input--base" disabled checked data-default-theme="dark" />dark-themed disabled checked radio</label>
    `})},r={render:()=>({template:`
      <input type="radio" class="input--sm" value="input--sm" />
      <input type="radio" class="input--base" value="input--base" />
      <input type="radio" class="input--lg" value="input--lg" />
    `})},s={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" class="input" value="value-0" />

          <label for="radio-0" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" class="input" value="value-1" />

          <label for="radio-1" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-2" name="radio-group-1" class="input" value="value-2" />

          <label for="radio-2" class="">
            Label for value three
          </label>
        </div>
      </fieldset>
    `})},i={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-10" name="radio-group-2" class="input input--error" value="value-0" />

          <label for="radio-10" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-11" name="radio-group-2" class="input input--error" value="value-1" />

          <label for="radio-11" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-12" name="radio-group-2" class="input input--error" value="value-2" />

          <label for="radio-12" class="">
            Label for value three
          </label>
        </div>

        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </fieldset>
    `})};var o,d,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Radio
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <Radio v-bind="args" />
      </div>
    \`
  }),
  args: {
    size: 'base',
    label: 'Label',
    name: 'radio-name',
    id: 'radio-id'
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var n,t,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="radio" class="input--base" disabled />
      <input type="radio" class="input--base" disabled checked />
      <label for=""><input type="radio" class="input--base" disabled data-default-theme="dark" />dark-themed disabled radio</label>
      <label for=""><input type="radio" class="input--base" disabled checked data-default-theme="dark" />dark-themed disabled checked radio</label>
    \`
  })
}`,...(p=(t=a.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="radio" class="input--sm" value="input--sm" />
      <input type="radio" class="input--base" value="input--base" />
      <input type="radio" class="input--lg" value="input--lg" />
    \`
  })
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,g,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" class="input" value="value-0" />

          <label for="radio-0" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" class="input" value="value-1" />

          <label for="radio-1" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-2" name="radio-group-1" class="input" value="value-2" />

          <label for="radio-2" class="">
            Label for value three
          </label>
        </div>
      </fieldset>
    \`
  })
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-10" name="radio-group-2" class="input input--error" value="value-0" />

          <label for="radio-10" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-11" name="radio-group-2" class="input input--error" value="value-1" />

          <label for="radio-11" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-12" name="radio-group-2" class="input input--error" value="value-2" />

          <label for="radio-12" class="">
            Label for value three
          </label>
        </div>

        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </fieldset>
    \`
  })
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const L=["Example","DisabledRadio","SizesRadio","RequiredRadio","MessageRadio"],q=Object.freeze(Object.defineProperty({__proto__:null,DisabledRadio:a,Example:e,MessageRadio:i,RequiredRadio:s,SizesRadio:r,__namedExportsOrder:L,default:k},Symbol.toStringTag,{value:"Module"}));export{a as D,e as E,i as M,q as R,r as S,s as a};
