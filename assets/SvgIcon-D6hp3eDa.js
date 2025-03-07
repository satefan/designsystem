import{_ as t}from"./iframe-B3Kg2xCR.js";import{S as u,q as p,r as n,g as v,T as E,s as l,y as c,v as d,G as g,p as L}from"./vue.esm-bundler-Ch9_S53f.js";const A=(s,r,e)=>{const o=s[r];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+r+(r.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})},_={};function P(s){return Object.keys(s).reduce((r,e)=>(s[e]!==!1&&s[e]!==null&&s[e]!==void 0&&(r[e]=s[e]),r),{})}const D={name:"InlineSvg",inheritAttrs:!1,render(){return this.svgElSource?u("svg",Object.assign({},this.getSvgAttrs(this.svgElSource),P(this.$attrs),{innerHTML:this.getSvgContent(this.svgElSource)})):null},props:{src:{type:String,required:!0},title:{type:String},transformSource:{type:Function,default:s=>s},keepDuringLoading:{type:Boolean,default:!0}},emits:["loaded","unloaded","error"],data(){return{svgElSource:null,request:void 0}},watch:{src(s){this.getSource(s)}},mounted(){this.getSource(this.src)},methods:{getSvgAttrs(s){let r={};const e=s.attributes;if(!e)return r;for(let o=e.length-1;o>=0;o--)r[e[o].name]=e[o].value;return r},getSvgContent(s){return s=s.cloneNode(!0),s=this.transformSource(s),this.title&&I(s,this.title),s.innerHTML},getSource(s){_[s]||(_[s]=this.download(s)),this.svgElSource&&_[s].getIsPending()&&!this.keepDuringLoading&&(this.svgElSource=null,this.$emit("unloaded")),_[s].then(r=>{this.svgElSource=r,this.$nextTick(()=>{this.$emit("loaded",this.$el)})}).catch(r=>{this.svgElSource&&(this.svgElSource=null,this.$emit("unloaded")),delete _[s],this.$emit("error",r)})},download(s){return T(new Promise((r,e)=>{const o=new XMLHttpRequest;o.open("GET",s,!0),this.request=o,o.onload=()=>{if(o.status>=200&&o.status<400)try{let a=new DOMParser().parseFromString(o.responseText,"text/xml").getElementsByTagName("svg")[0];a?r(a):e(new Error('Loaded file is not valid SVG"'))}catch(i){e(i)}else e(new Error("Error loading SVG"))},o.onerror=e,o.send()}))}}};function I(s,r){const e=s.getElementsByTagName("title");if(e.length)e[0].textContent=r;else{const o=document.createElementNS("http://www.w3.org/2000/svg","title");o.textContent=r,s.insertBefore(o,s.firstChild)}}function T(s){if(s.getIsPending)return s;let r=!0,e=s.then(o=>(r=!1,o),o=>{throw r=!1,o});return e.getIsPending=function(){return r},e}const R=p({__name:"SvgIcon",props:{icon:{type:String,required:!0},size:{type:String,required:!1,default:()=>"base",validator:s=>["sm","base","md","lg","xl","2xl","3xl","4xl","full"].includes(s)},spin:{type:Boolean,default:()=>!1}},setup(s){const r=s,e=n(""),o=v(()=>{let i="icon ";return r.size&&(i+=`icon--${r.size} `),r.icon&&(i+=`icon--${r.icon} `),r.spin&&(i+="icon--spin "),i});return E(async()=>{if(!r.icon){e.value="";return}e.value=(await A(Object.assign({"../../../assets/icons/ALD.svg":()=>t(()=>import("./ALD-C5Il5i46.js"),[],import.meta.url),"../../../assets/icons/AddressBook.svg":()=>t(()=>import("./AddressBook-Bnzk-4gP.js"),[],import.meta.url),"../../../assets/icons/Anchor.svg":()=>t(()=>import("./Anchor-Bh3t69ZD.js"),[],import.meta.url),"../../../assets/icons/Apps.svg":()=>t(()=>import("./Apps-Bj23_cAP.js"),[],import.meta.url),"../../../assets/icons/Archive.svg":()=>t(()=>import("./Archive-BBANF0hA.js"),[],import.meta.url),"../../../assets/icons/ArrowAngleBottomLeft.svg":()=>t(()=>import("./ArrowAngleBottomLeft-DWesHyNB.js"),[],import.meta.url),"../../../assets/icons/ArrowDown.svg":()=>t(()=>import("./ArrowDown-5CyvPYfq.js"),[],import.meta.url),"../../../assets/icons/ArrowDownLeft.svg":()=>t(()=>import("./ArrowDownLeft-CinrLr5c.js"),[],import.meta.url),"../../../assets/icons/ArrowDownRight.svg":()=>t(()=>import("./ArrowDownRight-0KdEBW9T.js"),[],import.meta.url),"../../../assets/icons/ArrowLeft.svg":()=>t(()=>import("./ArrowLeft-BdqmoIvs.js"),[],import.meta.url),"../../../assets/icons/ArrowRight.svg":()=>t(()=>import("./ArrowRight-gt4PI9X1.js"),[],import.meta.url),"../../../assets/icons/ArrowUp.svg":()=>t(()=>import("./ArrowUp--5ZLPMLz.js"),[],import.meta.url),"../../../assets/icons/ArrowUpLeft.svg":()=>t(()=>import("./ArrowUpLeft-BvcrXR0w.js"),[],import.meta.url),"../../../assets/icons/ArrowUpRight.svg":()=>t(()=>import("./ArrowUpRight-Bxsrbyu5.js"),[],import.meta.url),"../../../assets/icons/Art.svg":()=>t(()=>import("./Art-D7qwgmxv.js"),[],import.meta.url),"../../../assets/icons/Audio.svg":()=>t(()=>import("./Audio-9bqjv52m.js"),[],import.meta.url),"../../../assets/icons/AudioDescription.svg":()=>t(()=>import("./AudioDescription-COFvBNZv.js"),[],import.meta.url),"../../../assets/icons/AudioLow.svg":()=>t(()=>import("./AudioLow-g9Lnu3-4.js"),[],import.meta.url),"../../../assets/icons/AudioMute.svg":()=>t(()=>import("./AudioMute-D-UwfauP.js"),[],import.meta.url),"../../../assets/icons/Balance.svg":()=>t(()=>import("./Balance-CsflQiR-.js"),[],import.meta.url),"../../../assets/icons/BalanceSlash.svg":()=>t(()=>import("./BalanceSlash-DmdyFWHT.js"),[],import.meta.url),"../../../assets/icons/Ban.svg":()=>t(()=>import("./Ban-DOqt0ryW.js"),[],import.meta.url),"../../../assets/icons/Bed.svg":()=>t(()=>import("./Bed-BvfsJILt.js"),[],import.meta.url),"../../../assets/icons/Bell.svg":()=>t(()=>import("./Bell-CzjyshCc.js"),[],import.meta.url),"../../../assets/icons/BellSlash.svg":()=>t(()=>import("./BellSlash-BKDR5aII.js"),[],import.meta.url),"../../../assets/icons/Blind.svg":()=>t(()=>import("./Blind-B04Cuqw0.js"),[],import.meta.url),"../../../assets/icons/Bolt.svg":()=>t(()=>import("./Bolt-Copkpv9I.js"),[],import.meta.url),"../../../assets/icons/Book.svg":()=>t(()=>import("./Book-CAv1jNSC.js"),[],import.meta.url),"../../../assets/icons/Bookmark.svg":()=>t(()=>import("./Bookmark-GvD029Rk.js"),[],import.meta.url),"../../../assets/icons/Braille.svg":()=>t(()=>import("./Braille-CNnp8bA0.js"),[],import.meta.url),"../../../assets/icons/Briefcase.svg":()=>t(()=>import("./Briefcase-zzqMUOsr.js"),[],import.meta.url),"../../../assets/icons/Brush.svg":()=>t(()=>import("./Brush-Bc6Efb31.js"),[],import.meta.url),"../../../assets/icons/Bug.svg":()=>t(()=>import("./Bug-rfqL41RF.js"),[],import.meta.url),"../../../assets/icons/Building.svg":()=>t(()=>import("./Building-15rqv5jg.js"),[],import.meta.url),"../../../assets/icons/Bullhorn.svg":()=>t(()=>import("./Bullhorn-CU-2TXqp.js"),[],import.meta.url),"../../../assets/icons/Bullseye.svg":()=>t(()=>import("./Bullseye-BnTzGthB.js"),[],import.meta.url),"../../../assets/icons/CC-0.svg":()=>t(()=>import("./CC-0-DJn9FPM_.js"),[],import.meta.url),"../../../assets/icons/CC-BY-NC-ND.svg":()=>t(()=>import("./CC-BY-NC-ND-ChDc_sQc.js"),[],import.meta.url),"../../../assets/icons/CC-BY-NC-SA.svg":()=>t(()=>import("./CC-BY-NC-SA-Bz10n2vi.js"),[],import.meta.url),"../../../assets/icons/CC-BY-NC.svg":()=>t(()=>import("./CC-BY-NC-Bk3hxHG6.js"),[],import.meta.url),"../../../assets/icons/CC-BY-ND.svg":()=>t(()=>import("./CC-BY-ND-DLd6VZ3d.js"),[],import.meta.url),"../../../assets/icons/CC-BY-SA.svg":()=>t(()=>import("./CC-BY-SA-04M8u7ZB.js"),[],import.meta.url),"../../../assets/icons/CC-BY.svg":()=>t(()=>import("./CC-BY-8BGvn7uc.js"),[],import.meta.url),"../../../assets/icons/Calculator.svg":()=>t(()=>import("./Calculator-CEvKCMlS.js"),[],import.meta.url),"../../../assets/icons/Calendar.svg":()=>t(()=>import("./Calendar-W34SeAI6.js"),[],import.meta.url),"../../../assets/icons/Camera.svg":()=>t(()=>import("./Camera-CBrKDivU.js"),[],import.meta.url),"../../../assets/icons/Cancel.svg":()=>t(()=>import("./Cancel-CHeDj1m-.js"),[],import.meta.url),"../../../assets/icons/CancelCircle.svg":()=>t(()=>import("./CancelCircle-DOsSynX2.js"),[],import.meta.url),"../../../assets/icons/Car.svg":()=>t(()=>import("./Car-BG8rWj3c.js"),[],import.meta.url),"../../../assets/icons/Certificate.svg":()=>t(()=>import("./Certificate-DzkMOo4Q.js"),[],import.meta.url),"../../../assets/icons/Chart.svg":()=>t(()=>import("./Chart-BCP5taw_.js"),[],import.meta.url),"../../../assets/icons/ChartBar.svg":()=>t(()=>import("./ChartBar-9vFkjoGE.js"),[],import.meta.url),"../../../assets/icons/ChartLine.svg":()=>t(()=>import("./ChartLine-b0Ik6hWD.js"),[],import.meta.url),"../../../assets/icons/ChartPie.svg":()=>t(()=>import("./ChartPie-CjvAJj6d.js"),[],import.meta.url),"../../../assets/icons/Checkmark.svg":()=>t(()=>import("./Checkmark-BcB06kHb.js"),[],import.meta.url),"../../../assets/icons/CheckmarkBold.svg":()=>t(()=>import("./CheckmarkBold-CnISz9_U.js"),[],import.meta.url),"../../../assets/icons/CheckmarkBoldRounded.svg":()=>t(()=>import("./CheckmarkBoldRounded-1V_x_lim.js"),[],import.meta.url),"../../../assets/icons/CheckmarkCircle.svg":()=>t(()=>import("./CheckmarkCircle-B8ECUPQj.js"),[],import.meta.url),"../../../assets/icons/ChevronDoubleLeft.svg":()=>t(()=>import("./ChevronDoubleLeft-DaYPHCuB.js"),[],import.meta.url),"../../../assets/icons/ChevronDoubleRight.svg":()=>t(()=>import("./ChevronDoubleRight-buJ05VA5.js"),[],import.meta.url),"../../../assets/icons/ChevronDown.svg":()=>t(()=>import("./ChevronDown-DBI_81Qe.js"),[],import.meta.url),"../../../assets/icons/ChevronLeft.svg":()=>t(()=>import("./ChevronLeft-Bs--S2xK.js"),[],import.meta.url),"../../../assets/icons/ChevronLineLeft.svg":()=>t(()=>import("./ChevronLineLeft-BdNIyJ_4.js"),[],import.meta.url),"../../../assets/icons/ChevronLineRight.svg":()=>t(()=>import("./ChevronLineRight-Dp7EE2g0.js"),[],import.meta.url),"../../../assets/icons/ChevronRight.svg":()=>t(()=>import("./ChevronRight-BfKgM5vh.js"),[],import.meta.url),"../../../assets/icons/ChevronSmallDown.svg":()=>t(()=>import("./ChevronSmallDown-BmHwT1W-.js"),[],import.meta.url),"../../../assets/icons/ChevronSmallLeft.svg":()=>t(()=>import("./ChevronSmallLeft-DQYOXvzl.js"),[],import.meta.url),"../../../assets/icons/ChevronSmallRight.svg":()=>t(()=>import("./ChevronSmallRight-B6eXzEgc.js"),[],import.meta.url),"../../../assets/icons/ChevronSmallUp.svg":()=>t(()=>import("./ChevronSmallUp-B7CqGq8P.js"),[],import.meta.url),"../../../assets/icons/ChevronUp.svg":()=>t(()=>import("./ChevronUp-BAsV9WHn.js"),[],import.meta.url),"../../../assets/icons/Clock.svg":()=>t(()=>import("./Clock-DfmMA75V.js"),[],import.meta.url),"../../../assets/icons/Cloud.svg":()=>t(()=>import("./Cloud-CTo2k_Kr.js"),[],import.meta.url),"../../../assets/icons/CloudUpload.svg":()=>t(()=>import("./CloudUpload-YRFQmf0o.js"),[],import.meta.url),"../../../assets/icons/Coffee.svg":()=>t(()=>import("./Coffee-sv9nt5a_.js"),[],import.meta.url),"../../../assets/icons/Cog.svg":()=>t(()=>import("./Cog-jSvl8zZO.js"),[],import.meta.url),"../../../assets/icons/Compass.svg":()=>t(()=>import("./Compass-Uaa21eWr.js"),[],import.meta.url),"../../../assets/icons/Compress.svg":()=>t(()=>import("./Compress-V_P9cEVe.js"),[],import.meta.url),"../../../assets/icons/ConfirmationBadge.svg":()=>t(()=>import("./ConfirmationBadge-C9BX_XbD.js"),[],import.meta.url),"../../../assets/icons/CreditCard.svg":()=>t(()=>import("./CreditCard-Dv54OfXC.js"),[],import.meta.url),"../../../assets/icons/Crop.svg":()=>t(()=>import("./Crop-CX6V-7PZ.js"),[],import.meta.url),"../../../assets/icons/Database.svg":()=>t(()=>import("./Database-CaTs4Sdv.js"),[],import.meta.url),"../../../assets/icons/Deaf.svg":()=>t(()=>import("./Deaf-BTxnYf7T.js"),[],import.meta.url),"../../../assets/icons/Desktop.svg":()=>t(()=>import("./Desktop-DrZQnKmO.js"),[],import.meta.url),"../../../assets/icons/Download.svg":()=>t(()=>import("./Download-BK9V1h75.js"),[],import.meta.url),"../../../assets/icons/DragIndicator.svg":()=>t(()=>import("./DragIndicator-CHcy5yve.js"),[],import.meta.url),"../../../assets/icons/Duplicate.svg":()=>t(()=>import("./Duplicate-DE3z9FzP.js"),[],import.meta.url),"../../../assets/icons/EasyLanguage.svg":()=>t(()=>import("./EasyLanguage-Bt4yZ65v.js"),[],import.meta.url),"../../../assets/icons/Envelope.svg":()=>t(()=>import("./Envelope-Bpph2P8W.js"),[],import.meta.url),"../../../assets/icons/Eraser.svg":()=>t(()=>import("./Eraser-BS5T7LtZ.js"),[],import.meta.url),"../../../assets/icons/Exchange.svg":()=>t(()=>import("./Exchange-D-fDtDni.js"),[],import.meta.url),"../../../assets/icons/Expand.svg":()=>t(()=>import("./Expand-0jC2yQCm.js"),[],import.meta.url),"../../../assets/icons/External.svg":()=>t(()=>import("./External-B2xu-Wqy.js"),[],import.meta.url),"../../../assets/icons/Eye.svg":()=>t(()=>import("./Eye-CEYkmWNr.js"),[],import.meta.url),"../../../assets/icons/EyeSlash.svg":()=>t(()=>import("./EyeSlash-C84qYesK.js"),[],import.meta.url),"../../../assets/icons/Eyedropper.svg":()=>t(()=>import("./Eyedropper-_k44iKNj.js"),[],import.meta.url),"../../../assets/icons/Facebook.svg":()=>t(()=>import("./Facebook-C4nSxKbg.js"),[],import.meta.url),"../../../assets/icons/Family.svg":()=>t(()=>import("./Family-CK8ljeT_.js"),[],import.meta.url),"../../../assets/icons/Fax.svg":()=>t(()=>import("./Fax-Ce0wpRyb.js"),[],import.meta.url),"../../../assets/icons/File.svg":()=>t(()=>import("./File-8HO2nNOo.js"),[],import.meta.url),"../../../assets/icons/FileAudio.svg":()=>t(()=>import("./FileAudio-ChpmG6dO.js"),[],import.meta.url),"../../../assets/icons/FileBullet.svg":()=>t(()=>import("./FileBullet-81vUat4v.js"),[],import.meta.url),"../../../assets/icons/FileCheckmark.svg":()=>t(()=>import("./FileCheckmark-qy3ugbIc.js"),[],import.meta.url),"../../../assets/icons/FileCode.svg":()=>t(()=>import("./FileCode-D9iF3YMt.js"),[],import.meta.url),"../../../assets/icons/FileDatabase.svg":()=>t(()=>import("./FileDatabase-BVFMgbQd.js"),[],import.meta.url),"../../../assets/icons/FileEPUB.svg":()=>t(()=>import("./FileEPUB-BaDn--sL.js"),[],import.meta.url),"../../../assets/icons/FileExcel.svg":()=>t(()=>import("./FileExcel-CQbn7p63.js"),[],import.meta.url),"../../../assets/icons/FileForward.svg":()=>t(()=>import("./FileForward-moZm1lW3.js"),[],import.meta.url),"../../../assets/icons/FileImage.svg":()=>t(()=>import("./FileImage-iR1EBHQP.js"),[],import.meta.url),"../../../assets/icons/FileJSON.svg":()=>t(()=>import("./FileJSON-DQGN_TWG.js"),[],import.meta.url),"../../../assets/icons/FileLines.svg":()=>t(()=>import("./FileLines-Cuoj_LZu.js"),[],import.meta.url),"../../../assets/icons/FilePDF.svg":()=>t(()=>import("./FilePDF-CLa74aHR.js"),[],import.meta.url),"../../../assets/icons/FilePPT.svg":()=>t(()=>import("./FilePPT-CLlhWS1L.js"),[],import.meta.url),"../../../assets/icons/FilePlus.svg":()=>t(()=>import("./FilePlus-BSOq2syj.js"),[],import.meta.url),"../../../assets/icons/FileRefresh.svg":()=>t(()=>import("./FileRefresh-CP0OFVND.js"),[],import.meta.url),"../../../assets/icons/FileServer.svg":()=>t(()=>import("./FileServer-DfHFDthS.js"),[],import.meta.url),"../../../assets/icons/FileUser.svg":()=>t(()=>import("./FileUser-CFYB29Fk.js"),[],import.meta.url),"../../../assets/icons/FileVideo.svg":()=>t(()=>import("./FileVideo-DVFDJ7Tr.js"),[],import.meta.url),"../../../assets/icons/FileWord.svg":()=>t(()=>import("./FileWord-BqKqPeaf.js"),[],import.meta.url),"../../../assets/icons/FileZip.svg":()=>t(()=>import("./FileZip-CfN7RCGq.js"),[],import.meta.url),"../../../assets/icons/Filter.svg":()=>t(()=>import("./Filter-DglVzJPU.js"),[],import.meta.url),"../../../assets/icons/Flag.svg":()=>t(()=>import("./Flag-DScs8GAX.js"),[],import.meta.url),"../../../assets/icons/FlagFilled.svg":()=>t(()=>import("./FlagFilled-DB3fXqfH.js"),[],import.meta.url),"../../../assets/icons/Flask.svg":()=>t(()=>import("./Flask-CQezORNw.js"),[],import.meta.url),"../../../assets/icons/Folder.svg":()=>t(()=>import("./Folder-BAdrLldo.js"),[],import.meta.url),"../../../assets/icons/FolderOpen.svg":()=>t(()=>import("./FolderOpen--kaUwYbY.js"),[],import.meta.url),"../../../assets/icons/Forward.svg":()=>t(()=>import("./Forward-CxNmnogB.js"),[],import.meta.url),"../../../assets/icons/Frown.svg":()=>t(()=>import("./Frown-CsJlMab3.js"),[],import.meta.url),"../../../assets/icons/Globe.svg":()=>t(()=>import("./Globe-trPQG525.js"),[],import.meta.url),"../../../assets/icons/Headphones.svg":()=>t(()=>import("./Headphones-CT5G2wC4.js"),[],import.meta.url),"../../../assets/icons/Heart.svg":()=>t(()=>import("./Heart-UV-7-0qB.js"),[],import.meta.url),"../../../assets/icons/HeartFilled.svg":()=>t(()=>import("./HeartFilled-CYR_ywBf.js"),[],import.meta.url),"../../../assets/icons/Help.svg":()=>t(()=>import("./Help-BQe8KaiM.js"),[],import.meta.url),"../../../assets/icons/HelpCircle.svg":()=>t(()=>import("./HelpCircle-BqzijXku.js"),[],import.meta.url),"../../../assets/icons/History.svg":()=>t(()=>import("./History-BS_grESj.js"),[],import.meta.url),"../../../assets/icons/Home.svg":()=>t(()=>import("./Home-BCoD54-1.js"),[],import.meta.url),"../../../assets/icons/ID-Card.svg":()=>t(()=>import("./ID-Card-DDX_tWph.js"),[],import.meta.url),"../../../assets/icons/Image.svg":()=>t(()=>import("./Image-7zCti5BO.js"),[],import.meta.url),"../../../assets/icons/Inbox.svg":()=>t(()=>import("./Inbox-BIsZ1cdc.js"),[],import.meta.url),"../../../assets/icons/Industry.svg":()=>t(()=>import("./Industry-Az-uuzmr.js"),[],import.meta.url),"../../../assets/icons/Info.svg":()=>t(()=>import("./Info-Cdmd2-IY.js"),[],import.meta.url),"../../../assets/icons/InfoCircle.svg":()=>t(()=>import("./InfoCircle-DUgdswbi.js"),[],import.meta.url),"../../../assets/icons/Instagram.svg":()=>t(()=>import("./Instagram-CEs9i6mY.js"),[],import.meta.url),"../../../assets/icons/Key.svg":()=>t(()=>import("./Key-BL6i7iOR.js"),[],import.meta.url),"../../../assets/icons/Keyboard.svg":()=>t(()=>import("./Keyboard-BsKG6OaB.js"),[],import.meta.url),"../../../assets/icons/Lifering.svg":()=>t(()=>import("./Lifering-B15ziYIM.js"),[],import.meta.url),"../../../assets/icons/Link.svg":()=>t(()=>import("./Link-BCi-1YpL.js"),[],import.meta.url),"../../../assets/icons/LinkedIn.svg":()=>t(()=>import("./LinkedIn-DiDa9Nb5.js"),[],import.meta.url),"../../../assets/icons/List.svg":()=>t(()=>import("./List-XORbPMNX.js"),[],import.meta.url),"../../../assets/icons/ListParagraph.svg":()=>t(()=>import("./ListParagraph-CxCY-mA4.js"),[],import.meta.url),"../../../assets/icons/Lock.svg":()=>t(()=>import("./Lock-CtugSfEH.js"),[],import.meta.url),"../../../assets/icons/Login.svg":()=>t(()=>import("./Login-bjW7UDPj.js"),[],import.meta.url),"../../../assets/icons/Logout.svg":()=>t(()=>import("./Logout-EJmpSwVX.js"),[],import.meta.url),"../../../assets/icons/LowVision.svg":()=>t(()=>import("./LowVision-B-chtJkn.js"),[],import.meta.url),"../../../assets/icons/Magnet.svg":()=>t(()=>import("./Magnet-D_d0iJO9.js"),[],import.meta.url),"../../../assets/icons/Map.svg":()=>t(()=>import("./Map-CfbA4l3W.js"),[],import.meta.url),"../../../assets/icons/MapMarker.svg":()=>t(()=>import("./MapMarker-CRtE3A5c.js"),[],import.meta.url),"../../../assets/icons/Menu.svg":()=>t(()=>import("./Menu-CFJavXrY.js"),[],import.meta.url),"../../../assets/icons/Microphone.svg":()=>t(()=>import("./Microphone-Dk3dfAOs.js"),[],import.meta.url),"../../../assets/icons/MicrophoneSlash.svg":()=>t(()=>import("./MicrophoneSlash-CH_W8r_n.js"),[],import.meta.url),"../../../assets/icons/Minus.svg":()=>t(()=>import("./Minus-F6Hp9xKU.js"),[],import.meta.url),"../../../assets/icons/Mobile.svg":()=>t(()=>import("./Mobile-sapq1Ahh.js"),[],import.meta.url),"../../../assets/icons/More.svg":()=>t(()=>import("./More-HAxgWzzH.js"),[],import.meta.url),"../../../assets/icons/MoreFilled.svg":()=>t(()=>import("./MoreFilled-2ao2vC0l.js"),[],import.meta.url),"../../../assets/icons/PaperPlane.svg":()=>t(()=>import("./PaperPlane-DWvZzsWF.js"),[],import.meta.url),"../../../assets/icons/Pen.svg":()=>t(()=>import("./Pen-BD-lzl08.js"),[],import.meta.url),"../../../assets/icons/Phone.svg":()=>t(()=>import("./Phone-BHArcUlj.js"),[],import.meta.url),"../../../assets/icons/Pin.svg":()=>t(()=>import("./Pin-UMs4KczC.js"),[],import.meta.url),"../../../assets/icons/Plus.svg":()=>t(()=>import("./Plus-DFcHB9k3.js"),[],import.meta.url),"../../../assets/icons/Printer.svg":()=>t(()=>import("./Printer-DFILkb49.js"),[],import.meta.url),"../../../assets/icons/QRCode.svg":()=>t(()=>import("./QRCode-DGQugnCu.js"),[],import.meta.url),"../../../assets/icons/RSS.svg":()=>t(()=>import("./RSS-CgpvWPiG.js"),[],import.meta.url),"../../../assets/icons/Random.svg":()=>t(()=>import("./Random-BXAROKP4.js"),[],import.meta.url),"../../../assets/icons/Refresh.svg":()=>t(()=>import("./Refresh-bGlrqG-5.js"),[],import.meta.url),"../../../assets/icons/Repeat.svg":()=>t(()=>import("./Repeat-D26jjVhK.js"),[],import.meta.url),"../../../assets/icons/Reply.svg":()=>t(()=>import("./Reply-2dUON6pL.js"),[],import.meta.url),"../../../assets/icons/Save.svg":()=>t(()=>import("./Save-Dt1PEtKR.js"),[],import.meta.url),"../../../assets/icons/Search.svg":()=>t(()=>import("./Search-CqyWJQ7b.js"),[],import.meta.url),"../../../assets/icons/Server.svg":()=>t(()=>import("./Server-Cqk8fV3i.js"),[],import.meta.url),"../../../assets/icons/Share.svg":()=>t(()=>import("./Share-B7Jm0g3o.js"),[],import.meta.url),"../../../assets/icons/ShoppingCart.svg":()=>t(()=>import("./ShoppingCart-5GSnYhDi.js"),[],import.meta.url),"../../../assets/icons/SignLanguage.svg":()=>t(()=>import("./SignLanguage-DhH9eyS-.js"),[],import.meta.url),"../../../assets/icons/Smile.svg":()=>t(()=>import("./Smile-D00Al7vT.js"),[],import.meta.url),"../../../assets/icons/SpeechBubble.svg":()=>t(()=>import("./SpeechBubble-DNgyM9z2.js"),[],import.meta.url),"../../../assets/icons/Spinner.svg":()=>t(()=>import("./Spinner-D_hRv7UV.js"),[],import.meta.url),"../../../assets/icons/Stack.svg":()=>t(()=>import("./Stack-BCEtfWD-.js"),[],import.meta.url),"../../../assets/icons/Star.svg":()=>t(()=>import("./Star-CKy_qgMd.js"),[],import.meta.url),"../../../assets/icons/StarFilled.svg":()=>t(()=>import("./StarFilled-D8-zpTqC.js"),[],import.meta.url),"../../../assets/icons/Stop.svg":()=>t(()=>import("./Stop-MNC6bgNM.js"),[],import.meta.url),"../../../assets/icons/Tablet.svg":()=>t(()=>import("./Tablet-h7hXo6Rw.js"),[],import.meta.url),"../../../assets/icons/Tachometer.svg":()=>t(()=>import("./Tachometer-BSusIPuN.js"),[],import.meta.url),"../../../assets/icons/Tag.svg":()=>t(()=>import("./Tag-B_un4vzs.js"),[],import.meta.url),"../../../assets/icons/ThumbsDown.svg":()=>t(()=>import("./ThumbsDown-CLHLBkOd.js"),[],import.meta.url),"../../../assets/icons/ThumbsUp.svg":()=>t(()=>import("./ThumbsUp-CYGFI60I.js"),[],import.meta.url),"../../../assets/icons/Ticket.svg":()=>t(()=>import("./Ticket-DbMI6WfW.js"),[],import.meta.url),"../../../assets/icons/Trash.svg":()=>t(()=>import("./Trash-DF258EN3.js"),[],import.meta.url),"../../../assets/icons/Truck.svg":()=>t(()=>import("./Truck-u1Vs4Cqx.js"),[],import.meta.url),"../../../assets/icons/Twitter.svg":()=>t(()=>import("./Twitter-Dx2VNTU2.js"),[],import.meta.url),"../../../assets/icons/UniversalAccess.svg":()=>t(()=>import("./UniversalAccess-Bf-FCpyq.js"),[],import.meta.url),"../../../assets/icons/University.svg":()=>t(()=>import("./University-CsjWoK93.js"),[],import.meta.url),"../../../assets/icons/Unlink.svg":()=>t(()=>import("./Unlink-Dxgf-0ac.js"),[],import.meta.url),"../../../assets/icons/Unlock.svg":()=>t(()=>import("./Unlock-CEFy6sA0.js"),[],import.meta.url),"../../../assets/icons/Upload.svg":()=>t(()=>import("./Upload-DPNupNQc.js"),[],import.meta.url),"../../../assets/icons/User.svg":()=>t(()=>import("./User-Q7YUt4o8.js"),[],import.meta.url),"../../../assets/icons/UserBrush.svg":()=>t(()=>import("./UserBrush-CKCn3HR7.js"),[],import.meta.url),"../../../assets/icons/UserCheckmark.svg":()=>t(()=>import("./UserCheckmark-BzFEd3SR.js"),[],import.meta.url),"../../../assets/icons/UserCode.svg":()=>t(()=>import("./UserCode-DTcS4vju.js"),[],import.meta.url),"../../../assets/icons/UserCog.svg":()=>t(()=>import("./UserCog-D5CteW-P.js"),[],import.meta.url),"../../../assets/icons/UserPen.svg":()=>t(()=>import("./UserPen-KFYU-VzD.js"),[],import.meta.url),"../../../assets/icons/Users.svg":()=>t(()=>import("./Users-B1cOdYyS.js"),[],import.meta.url),"../../../assets/icons/Video.svg":()=>t(()=>import("./Video-BhAGqGOz.js"),[],import.meta.url),"../../../assets/icons/Wand.svg":()=>t(()=>import("./Wand-Ci_sRMiD.js"),[],import.meta.url),"../../../assets/icons/Warning.svg":()=>t(()=>import("./Warning-_kIZ2u4G.js"),[],import.meta.url),"../../../assets/icons/WarningCircle.svg":()=>t(()=>import("./WarningCircle-DqrB_SRP.js"),[],import.meta.url),"../../../assets/icons/Wheelchair.svg":()=>t(()=>import("./Wheelchair-DwhG533D.js"),[],import.meta.url),"../../../assets/icons/WiFi.svg":()=>t(()=>import("./WiFi-Bnoc1MjA.js"),[],import.meta.url),"../../../assets/icons/Wrench.svg":()=>t(()=>import("./Wrench-gsK9Tx9-.js"),[],import.meta.url),"../../../assets/icons/Xing.svg":()=>t(()=>import("./Xing-CHQujiVj.js"),[],import.meta.url),"../../../assets/icons/Youtube.svg":()=>t(()=>import("./Youtube-B_H5ZMkX.js"),[],import.meta.url)}),`../../../assets/icons/${r.icon}.svg`,6)).default}),(i,m)=>e.value?(L(),l(g(D),{key:0,src:e.value,class:d(o.value)},null,8,["src","class"])):c("",!0)}});R.__docgenInfo={exportName:"default",displayName:"SvgIcon",description:"",tags:{},props:[{name:"icon",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},required:!1,defaultValue:{func:!0,value:"() => 'base'"},values:["sm","base","md","lg","xl","2xl","3xl","4xl","full"]},{name:"spin",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/designsystem/designsystem/app/components/ch/components/SvgIcon.vue"]};export{R as _};
