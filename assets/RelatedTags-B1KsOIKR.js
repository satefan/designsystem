import{q as l,k as a,p as e,y as n,z as o,F as u,C as c,s as m}from"./vue.esm-bundler-Ch9_S53f.js";import{_ as p}from"./TagItem-9j59V7yq.js";const i={key:0,class:"separator separator--xl"},d={class:"list list--flex list--wrap"},_=l({__name:"RelatedTags",props:{tags:{type:Array,required:!0},bare:{type:Boolean,default:()=>!1}},setup(t){return(f,y)=>(e(),a("div",null,[t.bare?n("",!0):(e(),a("hr",i)),o("ul",d,[(e(!0),a(u,null,c(t.tags,(s,r)=>(e(),a("li",{key:r},[(e(),m(p,{key:s.label+r,label:s.label,to:s.url},null,8,["label","to"]))]))),128))])]))}});_.__docgenInfo={exportName:"default",displayName:"RelatedTags",description:"",tags:{},props:[{name:"tags",type:{name:"Array<{ label: string; url: string }>"},required:!0},{name:"bare",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/components/RelatedTags.vue"]};export{_};
