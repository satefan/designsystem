import{q as d,E as y,g as h,k as o,G as i,H as t,z as u,y as n,s as m,v as p,p as s}from"./vue.esm-bundler-Ch9_S53f.js";import{_ as f}from"./MetaInfo-Dps8ehSO.js";import{_}from"./Authors-BVSx1QsT.js";const v={key:0,class:"sr-only"},g={class:"container container--grid gap--responsive"},k={class:"hero__content"},$={key:1,class:"hero__title"},b={key:2,class:"hero__subtitle"},A={key:3,class:"hero__description"},I={key:4,class:"hero__cta"},V={key:0,class:"hero__image"},B=d({__name:"Hero",props:{type:{type:String,validator:a=>["default","main","main-image","hub","title-only","sr-only","overview"].includes(a),default:()=>{}},metaInfos:{type:Array,default:()=>[]},authors:{type:Array,default:()=>[]}},setup(a){const r=y(),l=a,c=h(()=>{let e="hero ";return l.type&&(e+=`hero--${l.type} `),e});return(e,C)=>i(r).title&&a.type=="sr-only"?(s(),o("h1",v,[t(e.$slots,"type"),t(e.$slots,"date"),t(e.$slots,"title"),t(e.$slots,"description")])):(s(),o("section",{key:1,class:p(c.value)},[u("div",g,[u("div",k,[a.metaInfos.length?(s(),m(f,{key:0,metainfos:a.metaInfos},null,8,["metainfos"])):n("",!0),i(r).title?(s(),o("h1",$,[t(e.$slots,"title")])):n("",!0),i(r).subtitle?(s(),o("h2",b,[t(e.$slots,"subtitle")])):n("",!0),i(r).description?(s(),o("div",A,[t(e.$slots,"description")])):n("",!0),i(r).cta?(s(),o("div",I,[t(e.$slots,"cta")])):n("",!0),a.authors.length?(s(),m(_,{key:5,authors:a.authors},null,8,["authors"])):n("",!0)]),i(r).image?(s(),o("div",V,[t(e.$slots,"image")])):n("",!0)])],2))}});B.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["default","main","main-image","hub","title-only","sr-only","overview"]},{name:"metaInfos",type:{name:"Array<string>"},defaultValue:{func:!0,value:"() => []"}},{name:"authors",type:{name:"Array<Author>"},defaultValue:{func:!0,value:"() => []"}}],slots:[{name:"type"},{name:"date"},{name:"title"},{name:"description"},{name:"subtitle"},{name:"cta"},{name:"image"}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/sections/Hero.vue"]};export{B as _};
