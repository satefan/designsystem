import{j as e,M as l,C as i,a as o}from"./index-BbiUpFnI.js";import{useMDXComponents as a}from"./index-Dg22RJN-.js";import{R as t,E as r,D as c,S as h,a as p,M as u}from"./Radio.stories-Dmq9p_Vd.js";import"./iframe-B3Kg2xCR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bx-go_-4.js";import"./index-DrFu-skq.js";import"./Radio-BGPQzbI6.js";import"./vue.esm-bundler-Ch9_S53f.js";function d(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(n.h1,{id:"input-radio",children:"Input Radio"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"radio-disabled-state",children:"Radio disabled state"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"input--disabled"})," or ",e.jsx(n.code,{children:"disabled state on the input"})," to add the disabled style"]}),`
`]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"For size variations, the following css classes are built:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"input--sm"})," for small inputs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"input--base"})," for standard size"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"input--lg"})," for large inputs"]}),`
`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h1,{id:"multiple-radios",children:"Multiple radios"}),`
`,e.jsxs(n.p,{children:["It's recommanded to wrap the radio inputs in a ",e.jsx(n.code,{children:"fieldset"})," element, with a ",e.jsx(n.code,{children:"legend"}),` element as a title.
Check the `,e.jsx(n.a,{href:"/docs/components-form-fieldset--example-radio",children:"Fieldset documentation"})," for more information."]}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<fieldset class="form__group">
  <legend class="form__group__legend text--asterisk">
    Radio button group legend
    <span class="sr-only">required</span>
  </legend>
  <div class="form__group__radio">
    <input
      type="radio"
      id="radio-0"
      name="radio-group-1"
      required="required"
      class="input"
      value="value-1"
    />
    <label for="radio-0" class="text--asterisk">
      Label for value one
      <span class="sr-only">required</span>
    </label>
  </div>
  <div class="form__group__radio">
    <input
      type="radio"
      id="radio-1"
      name="radio-group-1"
      required="required"
      class="input"
      value="value-2"
    />
    <label for="radio-1" class="text--asterisk">
      Label for value two
      <span class="sr-only">required</span>
    </label>
  </div>
</fieldset>
`})}),`
`,e.jsx(n.h2,{id:"required-radio",children:"Required radio"}),`
`,e.jsx(n.p,{children:"If the radio is mandatory:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["a ",e.jsx(n.code,{children:"required"})," attribute is added to the input element"]}),`
`,e.jsxs(n.li,{children:["an asterisk is displayed right after the legend. This can be done by adding a ",e.jsx(n.code,{children:"text--asterisk"})," class on the legend element."]}),`
`,e.jsxs(n.li,{children:["the word “required“ is added to the legend for screen readers. This can be done by wrapping the word into a ",e.jsx(n.code,{children:".sr-only"})," element."]}),`
`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"messages",children:"Messages"}),`
`,e.jsxs(n.p,{children:["If the radio has error, an ",e.jsx(n.code,{children:"input--error"}),` class is added to the input element. Additionally
a `,e.jsx(n.code,{children:"badge badge--sm badge--error"})," element wraps the error message, right after the input element:"]}),`
`,e.jsx(i,{of:u})]})}function v(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{v as default};
