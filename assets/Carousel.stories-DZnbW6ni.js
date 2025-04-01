import{q as T,g as S,k as h,D as o,z as t,u as i,G as n,v as x,p,F as B,C as V,s as E,B as N,A as c}from"./vue.esm-bundler-Ch9_S53f.js";import{S as $,N as G,P as A,A as O,a as j}from"./swiper-vue-B4fAsP-m.js";import{_ as g}from"./SvgIcon-C2oDYonj.js";import{_ as W}from"./Card-51PxHNYN.js";import{_ as q}from"./Btn-BVIvNJmY.js";const z=["src","alt","height","width"],F={class:"carousel__fonctions"},R=["id"],H=["id"],M=["id"],d=T({__name:"CarouselExample",props:{id:{type:Number,default:()=>1},breakpoints:{type:Object,default:()=>{}},paginationType:{type:String,validator:e=>["bullets","fraction"].includes(e),default:()=>"bullets"},loop:{type:Boolean,default:()=>!1},slides:{type:Array,required:!0}},setup(e){const y=S(()=>"carousel carousel--cards");return(D,m)=>(p(),h("div",{class:x(y.value)},[o(n(j),{speed:500,autoHeight:!1,loop:e.loop,slidesPerView:1,spaceBetween:20,slidesPerGroup:1,breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:28},640:{slidesPerView:1,slidesPerGroup:1,spaceBetween:36},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:36},1024:{slidesPerView:3,slidesPerGroup:3,spaceBetween:40},1280:{slidesPerView:3,slidesPerGroup:3,spaceBetween:48},1800:{slidesPerView:3,slidesPerGroup:3,spaceBetween:64}},keyboard:{enabled:!0,onlyInViewport:!1},modules:[n(G),n(A),n(O)],navigation:{nextEl:`#carousel-next-${e.id}`,prevEl:`#carousel-prev-${e.id}`},simulateTouch:!0,slideToClickedSlide:!1,pagination:{type:e.paginationType,el:`#carousel-pagination-${e.id}`,clickable:!0,bulletClass:"carousel__bullet",bulletActiveClass:"carousel__bullet--active"}},{default:i(()=>[(p(!0),h(B,null,V(e.slides,(s,_)=>(p(),E(n($),{key:`slide-${_}`},{default:i(()=>[o(W,{type:"default"},{image:i(()=>[t("picture",null,[t("img",{src:s.image.src,alt:s.image.alt,height:s.image.height,width:s.image.width},null,8,z)])]),title:i(()=>[t("h3",null,c(s.title),1)]),description:i(()=>[t("p",null,c(s.description),1)]),footerInfo:i(()=>[N(c(s.footerInfo),1)]),footerAction:i(()=>[o(q,{to:"#",variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Weiterlesen"})]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["loop","modules","navigation","pagination"]),t("div",F,[t("div",{id:`carousel-pagination-${e.id}`,class:"carousel__pagination"},null,8,R),t("button",{id:`carousel-prev-${e.id}`,class:"carousel__prev"},[m[0]||(m[0]=t("div",{class:"sr-only"},"Previous image",-1)),o(g,{icon:"ChevronLeft",role:"presentation","aria-hidden":"true"})],8,H),t("button",{id:`carousel-next-${e.id}`,class:"carousel__next"},[m[1]||(m[1]=t("div",{class:"sr-only"},"Next image",-1)),o(g,{icon:"ChevronRight",role:"presentation","aria-hidden":"true"})],8,M)])],2))}});d.__docgenInfo={exportName:"default",displayName:"CarouselExample",description:"",tags:{},props:[{name:"id",type:{name:"number"},defaultValue:{func:!0,value:"() => 1"}},{name:"breakpoints",type:{name:"object"},defaultValue:{func:!0,value:"() => undefined"}},{name:"paginationType",type:{name:"PaginationOptions['type']"},defaultValue:{func:!0,value:"() => 'bullets'"},values:["bullets","fraction"]},{name:"loop",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"slides",type:{name:"SlideshowSlide[]"},required:!0}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/demo/CarouselExample.vue"]};const u=e=>({setup:()=>({...e}),components:{CarouselExample:d},template:`
    <div class="section section--default">
      <div class="container">
        <CarouselExample
          :breakpoints="breakpoints"
          :paginationType="paginationType"
          :id="id"
          :slides="slides"
        />
        <div>
          Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel. Some random content below carousel.
        </div>
      </div>
    </div>`}),J=e=>({setup:()=>({...e}),components:{CarouselExample:d},template:`
    <div>
      <div class="section bg--accent-01">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="2"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--accent-02">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="3"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--accent-03">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="4"
            :slides="slides"
          />
        </div>
      </div>
      <div class="section bg--accent-04">
        <div class="container">
          <CarouselExample
            :breakpoints="breakpoints"
            :paginationType="paginationType"
            :id="5"
            :slides="slides"
          />
        </div>
      </div>
    </div>`}),K={render:u,title:"Components/Carousel",component:d},a={render:u.bind({}),args:{id:1,paginationType:"bullets",slides:[{image:{src:"https://picsum.photos/1024/768/?image=29",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=1045",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=29",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"}]}},r={render:u.bind({}),args:{id:111,paginationType:"bullets",slides:[{image:{src:"https://picsum.photos/1024/768/?image=29",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=1045",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=29",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=1045",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=29",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"}]}},l={render:J.bind({}),args:{id:10,paginationType:"bullets",slides:[{image:{src:"https://picsum.photos/1024/768/?image=29",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"},{image:{src:"https://picsum.photos/1024/768/?image=1045",width:"1024",height:"768",alt:"image name"},title:"Card title",description:"If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...",footerInfo:"Dienstleistungen & Produkte"}]}};var f,b,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: TemplateDefault.bind({}),
  args: {
    id: 1,
    paginationType: 'bullets',
    slides: [{
      image: {
        src: 'https://picsum.photos/1024/768/?image=29',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=1045',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=29',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }]
  }
}`,...(L=(b=a.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var I,w,C;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: TemplateDefault.bind({}),
  args: {
    id: 111,
    paginationType: 'bullets',
    slides: [{
      image: {
        src: 'https://picsum.photos/1024/768/?image=29',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=1045',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=29',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=1045',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=29',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }]
  }
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,P,v;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: TemplateBackgrounds.bind({}),
  args: {
    id: 10,
    paginationType: 'bullets',
    slides: [{
      image: {
        src: 'https://picsum.photos/1024/768/?image=29',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=28',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }, {
      image: {
        src: 'https://picsum.photos/1024/768/?image=1045',
        width: '1024',
        height: '768',
        alt: 'image name'
      },
      title: 'Card title',
      description: 'If possible, less than 150 chars here, sed Lorem ipsum dolor sit amet, consetetur sadipscing elir, sed Lorem ipsum dolor sit amet...',
      footerInfo: 'Dienstleistungen & Produkte'
    }]
  }
}`,...(v=(P=l.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};const Q=["WithBullets","LargeNumberOfCards","Backgrounds"],te=Object.freeze(Object.defineProperty({__proto__:null,Backgrounds:l,LargeNumberOfCards:r,WithBullets:a,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{l as B,te as C,r as L,a as W};
