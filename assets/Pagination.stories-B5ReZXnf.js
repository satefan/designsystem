import{_ as o}from"./Pagination-CxB-jJSC.js";const i={title:"Components/Pagination",component:o,argTypes:{field:{control:{type:"boolean"}},currentPage:{table:{category:"props"}}}},e={render:r=>({components:{Pagination:o},setup:()=>({args:r}),template:'<div><Pagination v-bind="args" /></div>'}),args:{currentPage:"1",totalPages:"von 13 Seiten",paginationItems:[{icon:"ChevronLeft",label:"Previous Page",link:"#prev"},{icon:"ChevronRight",label:"Next Page",link:"#next"}]}};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Pagination
    },
    setup: () => ({
      args
    }),
    template: '<div><Pagination v-bind="args" /></div>'
  }),
  args: {
    currentPage: '1',
    totalPages: 'von 13 Seiten',
    paginationItems: [{
      icon: 'ChevronLeft',
      label: 'Previous Page',
      link: '#prev'
    }, {
      icon: 'ChevronRight',
      label: 'Next Page',
      link: '#next'
    }]
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const s=["Example"],l=Object.freeze(Object.defineProperty({__proto__:null,Example:e,__namedExportsOrder:s,default:i},Symbol.toStringTag,{value:"Module"}));export{e as E,l as P};
