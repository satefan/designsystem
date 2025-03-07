import{k as d,p as r,l as y,q as _,r as p,K as B,n as v,z as a,y as S,s as h,D as w}from"./vue.esm-bundler-Ch9_S53f.js";import{N as c,_ as N}from"./MainNavigation-BcPicv7Q.js";import{_ as M}from"./SvgIcon-D6hp3eDa.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const n={init(t){this.wrapper=document.querySelector(t.navigationItem),this.menu=this.wrapper.querySelector("ul"),this.menuItems=this.menu.querySelectorAll("li"),this.moreBtn=document.querySelector(t.moreButton),this.moreContainer=document.querySelector(t.moreContainer),this.threshold=5,this.menuWrapperSize=this.getMenuWrapperSize(),this.menuSize=this.getMenuSize(),this.startTriage(),window.addEventListener("resize",this.startTriage)},startTriage(){let t=0;n.menuItems.forEach(e=>{e.parentElement.id===n.moreContainer.id&&n.MoveContent(e,{target:n.menu,insertBefore:n.moreBtn}),e.style.display="block"}),!(n.menuSize<=n.getMenuWrapperSize())&&n.menuItems.forEach(function(e,l,s){l<s.length-1&&(t+=e.clientWidth,t>n.getRemainingSpace()?(n.setButtonVisibility(n.moreBtn,!0),n.MoveContent(e,{target:n.moreContainer})):n.setButtonVisibility(n.moreBtn,!1))})},setButtonVisibility(t,e){t&&e?t.classList.remove("hidden"):t.classList.add("hidden")},setButtonClickEvent(t,e){t.addEventListener("click",function(){n.menu.scrollTo({top:0,left:e,behavior:"smooth"})})},MoveContent(t,e){e.insertBefore?e.target.insertBefore(t,e.insertBefore):e.target.appendChild(t)},getMenuWrapperSize(){return this.wrapper.clientWidth},getRemainingSpace(){return this.wrapper.clientWidth-this.moreBtn.clientWidth-this.threshold},getMenuSize(){return this.menu.scrollWidth}},g={},C={id:"main-navigation",class:"main-navigation main-navigation--desktop","aria-label":"Main"};function I(t,e){return r(),d("nav",C,e[0]||(e[0]=[y('<ul class="menu-desktop"><li><a href="javascript:alert(&#39;link&#39;)"><span>Alle</span></a></li><li><a href="javascript:alert(&#39;link)" class="active"><span>Corona</span></a></li><li><a href="javascript:alert(&#39;link&#39;)"><span>Bürgerrecht</span></a></li><li><a href="javascript:alert(&#39;link&#39;)"><span>Ukraine</span></a></li></ul>',1)]))}const z=E(g,[["render",I]]);g.__docgenInfo={displayName:"MainNavigationSimple",description:"",tags:{},sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/navigations/MainNavigationSimple.vue"]};const b={id:"desktop-menu",class:"desktop-menu"},L={id:"desktop-navigation-id"},x={class:"container container--flex"},V={id:"desktop-menu__drawer",class:"desktop-menu__drawer hidden"},W={id:"desktop-menu-closer",class:"desktop-menu__close"},A={key:0,id:"sticky-desktop-navigation-placeholder"},q=_({__name:"DesktopMenu",props:{showActiveNavigation:{type:Boolean,default:()=>!1},isSimplePage:{type:Boolean,default:()=>!1},isSticky:{type:Boolean,default:()=>!1}},setup(t){const e=p(!1),l=p(0),s=t,u=function(){const o=document.getElementById("top-header-id"),i=document.getElementById("top-bar");l.value=o.offsetTop+o.clientHeight-(i==null?void 0:i.clientHeight),m()},m=async function(){const o=document.getElementById("top-bar"),i=document.getElementById("desktop-navigation-id"),f=document.getElementById("main-navigation");if(l.value<window.scrollY){e.value=!0,await v();const k=document.getElementById("sticky-desktop-navigation-placeholder");k.style.height=`${f.clientHeight}px`,i.style.top=`${o.clientHeight}px`,i.classList.add("sticky-navigation")}else i.style.top="",e.value=!1,i.classList.remove("sticky-navigation")};return B(async()=>{s.isSticky&&(window.addEventListener("scroll",m),await v(),u(),window.addEventListener("resize",u)),c.initDesktop({navigationNav:"#desktop-menu > div > div > .container > nav",drawer:"#desktop-menu__drawer",overlay:"#desktop-menu__overlay",closeButton:"#desktop-menu-closer"}),c.showLevel(s.showActiveNavigation?2:0),s.isSimplePage||(document.getElementById("more-button").addEventListener("click",function(){c.showLevel(0)}),n.init({navigationItem:"#desktop-menu > div > div > .container > nav",moreButton:"#more-button",moreContainer:"#more-container"}))}),(o,i)=>(r(),d("div",b,[i[1]||(i[1]=a("div",{id:"desktop-menu__overlay",class:"desktop-menu__overlay hidden"},null,-1)),a("div",null,[a("div",L,[a("div",x,[t.isSimplePage?(r(),h(z,{key:0})):(r(),h(N,{key:1,showActiveNavigation:t.showActiveNavigation,context:"desktop"},null,8,["showActiveNavigation"])),a("div",V,[a("button",W,[i[0]||(i[0]=a("span",null,"Schliessen",-1)),w(M,{icon:"Cancel"})])])])]),e.value?(r(),d("div",A)):S("",!0)])]))}});q.__docgenInfo={exportName:"default",displayName:"DesktopMenu",description:"",tags:{},props:[{name:"showActiveNavigation",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isSimplePage",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isSticky",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/sections/DesktopMenu.vue"]};export{q as _};
