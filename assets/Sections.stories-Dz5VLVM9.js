const g={title:"Layouts/Sections"},n={render:()=>({template:`
      <section class="section section--default">
        <div class="container">
          Simple Section
        </div>
      </section>`})},e={render:()=>({template:`
      <section class="section bg--accent-01">
        <div class="container">
          <h2 class="section__title">Section title</h2>
          <h2 class="section__subtitle">Section subtitle</h2>

          <div class="card">
            <div class="card__body">
              Content, Card example
            </div>
          </div>

          <div className="section__action">
            Section action, put a button here
          </div>
        </div>
      </section>`})},t={render:()=>({template:`
      <section class="section bg--accent-03">
        <div class="container">
          <h2 class="section__title">Negative section title</h2>

          <div class="card card--highlight">
            <div class="card__content">
              <div class="card__body">
                Card example
              </div>
            </div>
          </div>

          <div className="section__action">
            <a href="#" title="alle Infos auf eine Blick" class="btn btn--bare btn--icon-right">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="btn__icon icon--ArrowRight icon icon--base ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Read more</span>
            </a>
          </div>
        </div>
      </section>`})},i={render:()=>({template:`
      <main>
        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-01">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-01">
          <div class="container">
            Section with padding bottom only (padding top is removed because previous section has the same background color)
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-02">
          <div class="container">
            Section with top and padding bottom
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with consecutive containers. Container 1.
          </div>

          <div class="container">
            Section with consecutive containers. Container 2. Padding top is added.
          </div>
        </section>
      </main>`})};var s,c,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section section--default">
        <div class="container">
          Simple Section
        </div>
      </section>\`
  })
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var o,d,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section bg--accent-01">
        <div class="container">
          <h2 class="section__title">Section title</h2>
          <h2 class="section__subtitle">Section subtitle</h2>

          <div class="card">
            <div class="card__body">
              Content, Card example
            </div>
          </div>

          <div className="section__action">
            Section action, put a button here
          </div>
        </div>
      </section>\`
  })
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var l,v,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <section class="section bg--accent-03">
        <div class="container">
          <h2 class="section__title">Negative section title</h2>

          <div class="card card--highlight">
            <div class="card__content">
              <div class="card__body">
                Card example
              </div>
            </div>
          </div>

          <div className="section__action">
            <a href="#" title="alle Infos auf eine Blick" class="btn btn--bare btn--icon-right">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="btn__icon icon--ArrowRight icon icon--base ">
                <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
              </svg>

              <span class="btn__text">Read more</span>
            </a>
          </div>
        </div>
      </section>\`
  })
}`,...(p=(v=t.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var m,h,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <main>
        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-01">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-01">
          <div class="container">
            Section with padding bottom only (padding top is removed because previous section has the same background color)
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with top and bottom paddings
          </div>
        </section>

        <section class="section bg--accent-02">
          <div class="container">
            Section with top and padding bottom
          </div>
        </section>

        <section class="section section--default">
          <div class="container">
            Section with consecutive containers. Container 1.
          </div>

          <div class="container">
            Section with consecutive containers. Container 2. Padding top is added.
          </div>
        </section>
      </main>\`
  })
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const u=["MainContentExample","Titles","DarkSections","Paddings"],_=Object.freeze(Object.defineProperty({__proto__:null,DarkSections:t,MainContentExample:n,Paddings:i,Titles:e,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{t as D,n as M,i as P,_ as S,e as T};
