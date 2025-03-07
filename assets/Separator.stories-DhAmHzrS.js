const i={title:"Components/Separator"},e={render:()=>({template:`
      <div>
        <div>Content above</div>
          <hr class="separator" />
        <div>Content below</div>
      </div>
    `})},r={render:()=>({template:`
      <div>
        <div>Content above</div>
          <hr class="separator separator--xl" />
        <div>Content below</div>
      </div>
    `})};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <div>Content above</div>
          <hr class="separator" />
        <div>Content below</div>
      </div>
    \`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <div>Content above</div>
          <hr class="separator separator--xl" />
        <div>Content below</div>
      </div>
    \`
  })
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const p=["Separator","SeparatorSpacings"],v=Object.freeze(Object.defineProperty({__proto__:null,Separator:e,SeparatorSpacings:r,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{v as S,e as a,r as b};
