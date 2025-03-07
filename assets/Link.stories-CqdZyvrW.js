const _={title:"Components/Link"},e={render:()=>({template:`
      <div>
        <a>Link</a> without style
      </div>
    `})},a={render:()=>({template:`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a>metus tempor</a> at. Donec volutpat ex et enim gravida vehicula.</p>
      </main>
    `})},n={render:()=>({template:`
      <div>
        <a class="link">Link</a> with style
      </div>
    `})},t={render:()=>({template:`
      <main>
        <p>
          <a href="#" class="btn btn--link" target="_blank">
            <svg viewBox="0 0 24 24" class="btn__icon">
              <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
            </svg>

            <span class="btn__text">
              Standort auf Karte anzeigen
            </span>
          </a>
        </p>
      </main>
    `})},r={render:()=>({template:`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a href="http://admin.ch" rel="external">sementical external</a> at. Donec volutpat ex et enim <a href="http://admin.ch" class="link--external">forced external</a> gravida vehicula.</p>
      </main>
    `})};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <a>Link</a> without style
      </div>
    \`
  })
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var o,l,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a>metus tempor</a> at. Donec volutpat ex et enim gravida vehicula.</p>
      </main>
    \`
  })
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <a class="link">Link</a> with style
      </div>
    \`
  })
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,v,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <p>
          <a href="#" class="btn btn--link" target="_blank">
            <svg viewBox="0 0 24 24" class="btn__icon">
              <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
            </svg>

            <span class="btn__text">
              Standort auf Karte anzeigen
            </span>
          </a>
        </p>
      </main>
    \`
  })
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var k,x,L;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <p>Sed luctus pharetra nunc, et egestas <a href="http://admin.ch" rel="external">sementical external</a> at. Donec volutpat ex et enim <a href="http://admin.ch" class="link--external">forced external</a> gravida vehicula.</p>
      </main>
    \`
  })
}`,...(L=(x=r.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const f=["DefaultLink","ParagraphLink","ForceLink","IconLink","IconExternalLink"],S=Object.freeze(Object.defineProperty({__proto__:null,DefaultLink:e,ForceLink:n,IconExternalLink:r,IconLink:t,ParagraphLink:a,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{e as D,n as F,t as I,S as L,a as P,r as a};
