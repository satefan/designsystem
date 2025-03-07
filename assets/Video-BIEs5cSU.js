import{j as e,M as r,C as a}from"./index-BbiUpFnI.js";import{useMDXComponents as t}from"./index-Dg22RJN-.js";import{V as d,E as s}from"./Video.stories-BKxBi9Rp.js";import"./iframe-B3Kg2xCR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bx-go_-4.js";import"./index-DrFu-skq.js";function o(i){const n={code:"code",h1:"h1",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"video-embed",children:"Video embed"}),`
`,e.jsxs(n.p,{children:["To make an embed video responsive and keep its ratio, wrap it with a ",e.jsx(n.code,{children:"ratio ratio--[variant]"}),` class.
If the video need a label, use the `,e.jsx(n.code,{children:"figure"})," and ",e.jsx(n.code,{children:"figcaption"}),"combination."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<figure>
  <div class="ratio ratio--16/9">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/vIG4cKz7ukM"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    />
  </div>
  <figcaption>Video label — © Author Name</figcaption>
</figure>
`})}),`
`,e.jsxs(n.p,{children:["Wrapped into a ",e.jsx(n.code,{children:"ratio"})," parent, the ",e.jsx(n.code,{children:"iframe"})," element becomes responsive and keeps a specific ratio. Thus, the video width is defined by the ",e.jsx(n.code,{children:"container"})," parent, and the video height is defined by the ",e.jsx(n.code,{children:"ratio--[variant]"})," class. The ",e.jsx(n.code,{children:"width"})," and the ",e.jsx(n.code,{children:"height"})," attributes of the ",e.jsx(n.code,{children:"iframe"})," element have no effect anymore."]}),`
`,e.jsx(a,{of:s})]})}function j(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{j as default};
