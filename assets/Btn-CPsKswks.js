import{q as v,g as n,s as i,u as y,v as u,x as g,p as s,y as h,z as k,A as S}from"./vue.esm-bundler-Ch9_S53f.js";import{_ as V}from"./SvgIcon-D6hp3eDa.js";const C=v({__name:"Btn",props:{to:{type:String,required:!1,default:()=>{}},variant:{type:String,validator:t=>["outline","bare","filled","link"].includes(t),default:()=>{}},disabled:{type:Boolean,default:()=>!1},size:{type:String,validator:t=>["sm","base","lg"].includes(t),default:()=>{}},icon:{type:String,default:()=>""},iconPos:{type:String,validator:t=>["none","only","left","right"].includes(t),default:()=>{}},label:{type:String,required:!0},ariaLabel:{type:String,required:!1,default:()=>{}},fullWidth:{type:Boolean,default:()=>!1},isSubmit:{type:Boolean,default:()=>!1}},emits:["emitClick"],setup(t,{emit:o}){const e=t,r=o,d=n(()=>e.isSubmit?"submit":e.to?"a":"button"),l=n(()=>e.to?!1:"button"),f=n(()=>e.to?e.to:!1),c=n(()=>{let a;return e.ariaLabel?a=e.ariaLabel:a=e.iconPos==="only"&&l.value==="button"?e.label:!1,a}),m=n(()=>{let a="btn__text";return e.fullWidth&&(a+="-centered"),a}),b=n(()=>{let a="btn ";return e.variant&&(a+=`btn--${e.variant} `),e.size&&(a+=`btn--${e.size} `),e.iconPos&&(a+=`btn--icon-${e.iconPos} `),e.fullWidth&&(a+="btn--full-width "),a}),p=function(){!e.to&&!e.disabled&&r("emitClick")};return(a,B)=>(s(),i(g(d.value),{href:f.value,type:l.value,class:u(b.value),"aria-label":c.value,disabled:t.disabled||void 0,onClick:p},{default:y(()=>[t.icon?(s(),i(V,{key:0,icon:t.icon,class:"btn__icon"},null,8,["icon"])):h("",!0),k("span",{class:u(m.value)},S(t.label),3)]),_:1},8,["href","type","class","aria-label","disabled"]))}});C.__docgenInfo={exportName:"default",displayName:"Btn",description:"",tags:{},props:[{name:"to",type:{name:"string"},required:!1,defaultValue:{func:!0,value:"() => undefined"}},{name:"variant",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["outline","bare","filled","link"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["sm","base","lg"]},{name:"icon",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"iconPos",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["none","only","left","right"]},{name:"label",type:{name:"string"},required:!0},{name:"ariaLabel",type:{name:"string"},required:!1,defaultValue:{func:!0,value:"() => undefined"}},{name:"fullWidth",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isSubmit",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],events:[{name:"emitClick"}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/components/Btn.vue"]};export{C as _};
