import{q as M,M as P,b as S,N as L,k as r,D as t,z as e,G as V,v as y,y as n,u as m,s as _,B as D,l as F,p as a}from"./vue.esm-bundler-Ch9_S53f.js";import{_ as I}from"./AlterBodyClasses-DFm3l8vu.js";import{_ as q}from"./TopBar-D_-WjR0Q.js";import{u as E,_ as W}from"./TopHeader-DsHQ1Ngr.js";import{_ as j}from"./DesktopMenu-CIODupia.js";import{_ as G}from"./MobileMenu-BDmfc278.js";import{_ as H}from"./FooterInformation-BLY2gpPK.js";import{_ as K}from"./FooterNavigation-DDi3gFkE.js";import{_ as Z}from"./SvgIcon-D6hp3eDa.js";import{_ as p}from"./Btn-CPsKswks.js";import{_ as J}from"./SearchResultsList-B_XBywUD.js";import{_ as Q}from"./Pagination-CxB-jJSC.js";import{_ as U}from"./Notification-d6RbBoZ4.js";import{_ as f}from"./Select-BPQ-D0Ub.js";import{_ as b}from"./Input-DbqkJEVL.js";import{_ as g}from"./TagItem-9j59V7yq.js";import{_ as X}from"./Breadcrumb-EUCal1R0.js";const Y={id:"main-header"},ee={id:"main-content"},se={class:"section section--default bg--accent-01"},te={class:"container"},ie={class:"search__filters__actions"},ae={key:0,class:"search__filters__drawer"},ne={class:"relative"},oe={class:"search__filters__tags"},re={class:"section section--default"},le={class:"container gap--responsive"},ce=["aria-busy"],de={key:0,class:"search-results__header"},ue={class:"search-results__header__left"},me={class:"search-results__header__right"},pe={key:2,class:"my-16"},fe={key:3,class:"search-results__no-results"},ge={id:"main-footer",class:"footer"},R=M({__name:"newsList",props:P({noResults:{type:Boolean,default:()=>!1},isLoading:{type:Boolean,default:()=>!1}},{filtersAreOpen:{type:Boolean,default:()=>!1},filtersAreOpenModifiers:{},displayType:{type:String,default:()=>"grid"},displayTypeModifiers:{}}),emits:["update:filtersAreOpen","update:displayType"],setup(i){const $=E(),h=S({currentPage:"1",totalPages:"von 13 Seiten",items:[{icon:"ChevronLeft",label:"Previous Page",link:"#prev"},{icon:"ChevronRight",label:"Next Page",link:"#next"}]}),C=S([{title:"Search result one",content:"Max 150 chars, then truncate .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...",href:"#",type:"Bericht",date:"12. May 2022",specifications:"Specifications related to content type (Author, PDF specs etc)",topics:["Topic one","Topic two"],isVideo:"true",isEasyLanguage:"true",isSignLanguage:"true",image:{src:"https://picsum.photos/230/130/?image=29",width:"230",height:"130",alt:"image name",source:{srcset:"https://picsum.photos/460/260/?image=29",width:"460",height:"260",media:"(min-width: 1024px)"}}},{title:"Search result two",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma",href:"#",type:"Bericht",date:"12. May 2022",specifications:"Specifications related to content type (Author, PDF specs etc)",topics:["Topic one","Topic two","Topic three"],image:{src:"https://picsum.photos/130/230/?image=29",width:"130",height:"230",alt:"image name",source:{srcset:"https://picsum.photos/260/400/?image=29",width:"260",height:"400",media:"(min-width: 1024px)"}}},{title:"Search result three",content:"Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",href:"http://admin.ch",type:"Bericht",date:"12. May 2022"},{title:"Search result four. Display a minimum of ten items",content:"Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",href:"http://admin.ch",type:"Bericht",date:"12. May 2022"}]),o=L(i,"filtersAreOpen"),u=L(i,"displayType");return(_e,s)=>(a(),r("div",null,[t(I,{isMobileMenuOpen:V($).mobileMenuIsOpen},null,8,["isMobileMenuOpen"]),e("header",Y,[s[3]||(s[3]=e("a",{href:"#main-content",class:"skip-to-content"},"Skip to main content",-1)),t(q,{isOpen:!1}),t(W),t(j,{showActiveNavigation:!0}),t(G,{showActiveNavigation:!0}),t(X)]),e("main",ee,[e("section",se,[e("div",te,[s[7]||(s[7]=e("h1",{class:"h1"},"Aktuell",-1)),e("div",{class:y(["search__filters",o.value?"filters--are-open":""])},[e("div",ie,[t(p,{label:o.value?"Filter ausblenden":"Filter anzeigen",variant:"bare",size:"sm",icon:"ChevronDown",iconPos:"left",class:y(o.value?" btn--icon-180":""),onClick:s[0]||(s[0]=v=>o.value=!o.value)},null,8,["label","class"])]),o.value?(a(),r("div",ae,[e("div",ne,[t(b,{id:"select-1",type:"text",size:"sm",name:"select-name",label:"Stichwortfilter"})]),t(f,{id:"select-2",size:"sm",name:"select-name",label:"Organisation"},{default:m(()=>s[4]||(s[4]=[e("option",{selected:""},"VBS - Alle",-1),e("option",{disabled:""},"(Future tree selector here)",-1)])),_:1}),t(f,{id:"select-3",size:"sm",name:"select-name",label:"Themen"},{default:m(()=>s[5]||(s[5]=[e("option",{selected:""},"- Alle -",-1),e("option",null,"...",-1)])),_:1}),t(b,{id:"date-start",type:"date",size:"sm",name:"select-name",value:"2022-05-01",label:"Zeitraum | Startdatum"}),t(b,{id:"date-start",type:"date",size:"sm",name:"select-name",value:"2022-06-01",label:"Zeitraum | Enddatum"}),t(f,{id:"select-5",size:"sm",name:"select-name",label:"Inhalts-Typ"},{default:m(()=>s[6]||(s[6]=[e("option",{selected:""},"- Alle -",-1),e("option",null,"Bericht",-1),e("option",null,"...",-1)])),_:1})])):n("",!0),e("div",oe,[t(g,{label:"VBS - Alle",variant:"primary",size:"sm",icon:"Cancel"}),t(g,{label:"Bericht",variant:"primary",size:"sm",icon:"Cancel"}),t(g,{label:"01.05.2022 - 01.06.2022",variant:"primary",size:"sm",icon:"Cancel"}),t(g,{label:"Filter zurücksetzen",variant:"default",size:"sm",icon:"Repeat"})])],2)])]),e("section",re,[e("div",le,[e("div",{class:y(["search-results",u.value==="grid"?"search-results--grid":"search-results--list"]),"aria-live":"polite","aria-busy":i.isLoading},[!i.noResults&&!i.isLoading?(a(),r("div",de,[e("div",ue,[s[8]||(s[8]=e("div",{class:"search-results__occurences"},[e("strong",null,"127"),D(" Suchergebnisse ")],-1)),s[9]||(s[9]=e("div",{class:"separator separator--vertical"},null,-1)),t(p,{label:"Abo erstellen",variant:"bare",size:"sm","icon-pos":"right",icon:"RSS"})]),e("div",me,[t(f,{id:"select-7",bare:"",size:"sm",name:"select-name",label:"Sortierung",hideLabel:!0},{default:m(()=>s[10]||(s[10]=[e("option",{disabled:"",selected:""},"Sortieren",-1),e("option",null,"nach Relevanz",-1),e("option",null,"by date (increasing)",-1),e("option",null,"by date (decreasing)",-1),e("option",null,"...",-1)])),_:1}),s[11]||(s[11]=e("div",{class:"separator separator--vertical"},null,-1)),t(p,{variant:"bare","icon-pos":"only",icon:"List",size:"sm",label:"Display as list",onClick:s[1]||(s[1]=v=>u.value="list")}),t(p,{variant:"bare","icon-pos":"only",icon:"Apps",size:"sm",label:"Display as grid",onClick:s[2]||(s[2]=v=>u.value="grid")})])])):n("",!0),s[14]||(s[14]=e("h2",{class:"sr-only"},"News list",-1)),!i.noResults&&!i.isLoading?(a(),_(J,{key:1,itemList:C,displayType:u.value},null,8,["itemList","displayType"])):n("",!0),i.isLoading?(a(),r("div",pe,[s[12]||(s[12]=e("h2",{class:"sr-only"},"Search is loading",-1)),t(Z,{icon:"Spinner",size:"2xl",class:"icon--spin"})])):n("",!0),i.noResults&&!i.isLoading?(a(),r("div",fe,s[13]||(s[13]=[F('<h2 class="text--xl"> Die Suche nach <span class="text--bold">«My search keyword»</span> ergab keine Treffer auf der Behördenwebsite <span class="text--bold">«NameNextLogo»</span></h2><h3 class="h4">Tipps zur Suche</h3><ul class="list list--default"><li>Überprüfen Sie die Schreibweise Ihres Suchbegriffes</li><li>Verwenden Sie einen anderen bzw. allgemeineren Begriff</li><li>Verwenden Sie ggf. weniger Suchbegriffe</li><li>Wechseln Sie die Behördenwebsite</li></ul><h3 class="h4">Hinweis</h3><p> Die Suche ist momentan auf die Behördenwebsite &quot;[NameNextLogo]&quot; beschränkt. Eine behördenübergreifende Suche über die Domain *.admin.ch ist erst in Erarbeitung. </p>',5)]))):n("",!0),!i.noResults&&!i.isLoading?(a(),_(Q,{key:4,class:"pagination--right",currentPage:h.currentPage,totalPages:h.totalPages,paginationItems:h.items},null,8,["currentPage","totalPages","paginationItems"])):n("",!0),i.isLoading?n("",!0):(a(),_(U,{key:5,type:"info",icon:"InfoCircle",closeBtn:!1,text:`<div class='text--bold'>Haben Sie nicht gefunden wonach Sie suchen?</div>
  <div>Gerne geben wir Ihnen auch persönlich Auskunft. Bitte melden Sie sich via Kontaktformular bei uns.</div><a href='#' class='link'>Kontaktformular</link>`}))],10,ce)])])]),e("footer",ge,[t(H),t(K)])]))}});R.__docgenInfo={exportName:"default",displayName:"newsList",description:"",tags:{},props:[{name:"noResults",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/pages/newsList.vue"]};const he={title:"Pages/News List",component:R,argTypes:{noResults:{control:{type:"boolean"}},filtersAreOpen:{table:{category:"props"},control:{type:"boolean"}},displayType:{table:{category:"props",type:{summary:["string: list, grid"]}},options:["list","grid"],control:{type:"select"}},isLoading:{control:{type:"boolean"}}}},l={args:{displayType:"grid",filtersAreOpen:!1,isLoading:!1,noResults:!1}},c={args:{displayType:"grid",filtersAreOpen:!0,isLoading:!1,noResults:!1}},d={args:{displayType:"grid",filtersAreOpen:!1,isLoading:!0,noResults:!0}};var w,A,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    displayType: 'grid',
    filtersAreOpen: false,
    isLoading: false,
    noResults: false
  }
}`,...(k=(A=l.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var T,z,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    displayType: 'grid',
    filtersAreOpen: true,
    isLoading: false,
    noResults: false
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var x,N,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    displayType: 'grid',
    filtersAreOpen: false,
    isLoading: true,
    noResults: true
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const ye=["WithResults","ShowFilters","WhenLoading"],Pe=Object.freeze(Object.defineProperty({__proto__:null,ShowFilters:c,WhenLoading:d,WithResults:l,__namedExportsOrder:ye,default:he},Symbol.toStringTag,{value:"Module"}));export{Pe as N,c as S,l as W,d as a};
