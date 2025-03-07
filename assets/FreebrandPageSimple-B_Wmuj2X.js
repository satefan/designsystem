import{j as o,M as a,C as i}from"./index-BbiUpFnI.js";import{useMDXComponents as t}from"./index-Dg22RJN-.js";import"./detailPageSimple-D2IW3-fL.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-BE7Xt4xv.js";import"./iframe-B3Kg2xCR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bx-go_-4.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-Ch9_S53f.js";import"./AudioPlayer-VaVfwqkB.js";import"./DownloadItem-DyHuq9lP.js";import"./SvgIcon-D6hp3eDa.js";import"./MetaInfo-Dps8ehSO.js";import"./Newsletter-iwYAg77Y.js";import"./Input-DbqkJEVL.js";import"./Btn-CPsKswks.js";import"./Notification-d6RbBoZ4.js";import"./RelatedTags-B1KsOIKR.js";import"./TagItem-9j59V7yq.js";import"./SlideshowExample-DgmdDmn5.js";import"./swiper-vue-B4fAsP-m.js";import"./TableSortable-CaYAFW9D.js";import"./ContactSection-C2mn_lBM.js";import"./Contact-CInYSyGL.js";import"./AccordionItem-D8RxW6WH.js";import"./Accordion-3JELBM4F.js";import"./Hero-E0g02DIS.js";import"./Authors-BVSx1QsT.js";import"./MoreInfosAccordionSection-HhDjm8NY.js";import"./Card-BzibVs5w.js";import"./QuoteSection-CV2Vo2Wv.js";import"./Badge-BjriTMNe.js";import"./Modal-DKmPKBVt.js";import"./Popover-DHhfpJ1Y.js";import"./ShareBar--Cq4ecjM.js";import"./Print-rk5QwOBK.js";import"./AlterBodyClasses-DFm3l8vu.js";import"./TopHeader-DsHQ1Ngr.js";import"./pinia-DqXaOfHn.js";import"./LanguageSwitcher-DnjxVKkM.js";import"./Select-BPQ-D0Ub.js";import"./Logo-D2CQYKXM.js";import"./Breadcrumb-EUCal1R0.js";import"./DesktopMenu-CIODupia.js";import"./MainNavigation-BcPicv7Q.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-BLY2gpPK.js";import"./FooterNavigation-DDi3gFkE.js";import"./MobileMenu-BDmfc278.js";import"./TopBarNavigation-Ds9fEMAK.js";import"./v4-C6aID195.js";import"./TopBar-D_-WjR0Q.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
`,o.jsx(e.h1,{id:"freebrand-simple-page-example",children:"Freebrand Simple page example"}),`
`,o.jsx("a",{href:"?path=/story/pages-freebrand-detail-page-simple--example",children:"Go to the Canvas Tab"}),`
`,o.jsx(e.hr,{}),`
`,o.jsx("a",{href:"?id=pages-freebrand-detail-page-simple--example",target:"_blank",children:"Open page in full width in a new tab"}),`
`,o.jsx(e.p,{children:"Freebrand design. See bottom of page for configuration options."}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(e.p,{children:"Overwrite the colors by setting the color style attributes on the body"}),`
`,`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`const freebrandColors = [
  { key: '--color-primary-50', value: '#eaffe9' },
  { key: '--color-primary-100', value: '#d3ebd2' },
  { key: '--color-primary-200', value: '#bdd8bc' },
  { key: '--color-primary-300', value: '#a7c4a6' },
  { key: '--color-primary-400', value: '#91b191' },
  { key: '--color-primary-500', value: '#7c9f7c' },
  { key: '--color-primary-600', value: '#678d67' },
  { key: '--color-primary-700', value: '#537b54' },
  { key: '--color-primary-800', value: '#3e6940' },
  { key: '--color-primary-900', value: '#2a582e' },
  { key: '--color-secondary-50', value: '#efffee' },
  { key: '--color-secondary-100', value: '#b0beb0' },
  { key: '--color-secondary-200', value: '#768176' },
  { key: '--color-secondary-300', value: '#404941' },
  { key: '--color-secondary-400', value: '#758874' },
  { key: '--color-secondary-500', value: '#6a7f69' },
  { key: '--color-secondary-600', value: '#5f755f' },
  { key: '--color-secondary-700', value: '#546c55' },
  { key: '--color-secondary-800', value: '#49634b' },
  { key: '--color-secondary-900', value: '#3e5a41' },
]

for (const brandColor of freebrandColors) {
  document.body.style.setProperty(brandColor.key, brandColor.value)
}
`})}),`
`,o.jsx(e.p,{children:"Overwrite fonts by loading the font faces. Has to be loaded last in order for the overwrite to work."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`@font-face {
  font-family: 'Font-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../fonts/Font-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('../fonts/Font-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Italic';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('../fonts/Font-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Bold-Italic';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('../fonts/Font-Bold-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Fallback-font';
  src: local(Verdana);
  advance-override: 125%;
  ascent-override: 95%;
  descent-override: -25%;
  line-gap-override: 25%;
}
`})})]})}function lo(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{lo as default};
