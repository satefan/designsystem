import{q as o,g as s,k as n,y as r,z as f,v as u,A as i,p as l}from"./vue.esm-bundler-Ch9_S53f.js";const c={class:"form__group__input"},g=["for"],y=["id","name","rows","cols","maxlength","minlength","placeholder","required"],p=o({__name:"Textarea",props:{size:{type:String,validator:e=>["sm","base","lg"].includes(e),default:()=>{}},id:{type:String,default:()=>{}},name:{type:String,default:()=>{}},label:{type:String,default:()=>{}},placeholder:{type:String,default:()=>{}},rows:{type:Number,default:()=>4},cols:{type:Number,default:()=>50},message:{type:String,default:()=>{}},messageType:{type:String,validator:e=>["error","warning","success","info"].includes(e),default:()=>{}},required:{type:Boolean,default:()=>!1},resizable:{type:Boolean,default:()=>!0},maxlength:{type:Number,default:()=>{}},minlength:{type:Number,default:()=>{}}},setup(e){const t=e,d=s(()=>{let a="";return t.size&&(a+=`input--${t.size} `),t.messageType&&(a+=`input--${t.messageType} `),t.resizable||(a+="textarea--public"),a}),m=s(()=>{let a="";return t.size&&(a+=`text--${t.size} `),t.required&&(a+="text--asterisk "),a});return(a,v)=>(l(),n("div",c,[e.label?(l(),n("label",{key:0,for:e.id,class:u(m.value)},i(e.label),11,g)):r("",!0),f("textarea",{id:e.id,class:u(d.value),name:e.id,rows:e.rows,cols:e.cols,maxlength:e.maxlength,minlength:e.minlength,placeholder:e.placeholder,required:e.required},null,10,y),e.message?(l(),n("div",{key:1,class:u(["badge badge--sm",`badge--${e.messageType}`])},i(e.message),3)):r("",!0)]))}});p.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["sm","base","lg"]},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"name",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"label",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"rows",type:{name:"number"},defaultValue:{func:!0,value:"() => 4"}},{name:"cols",type:{name:"number"},defaultValue:{func:!0,value:"() => 50"}},{name:"message",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"messageType",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["error","warning","success","info"]},{name:"required",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"resizable",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"maxlength",type:{name:"number"},defaultValue:{func:!0,value:"() => undefined"}},{name:"minlength",type:{name:"number"},defaultValue:{func:!0,value:"() => undefined"}}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/components/Textarea.vue"]};export{p as _};
