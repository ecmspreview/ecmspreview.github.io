import{D as p}from"./index.ba9dc0ad.js";import{r as m,o as l,d as g,j as v,a as s,C as a,w as h,g as i,b,v as f,c as d}from"./index.f75a56f6.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const _={name:"CheckFolder",components:{Dashboard:p},data(){return{file:"",progress:[],saving:11,fileTypes:["image"],form:new Form({path:""})}},computed:{},methods:{async checkFolder(){let o=await this.form.post("/check-folder");console.log(o)},changed(o){let e=o.target.files[0].type;console.log(e),this.fileTypes.some(n=>e.includes(n))?this.file=o.target.files[0]:toast.warning("File Type Not Allowed")},loadProgress(){this.saving=22,console.log(this.file),axios.get("/load-progress",this.form).then(o=>{console.log(o.data.data),toast.success(o.data.message),this.progress=o.data.data.progress,console.log("SUCCESS!!")}).catch(o=>{let e=o.response.data.message?o.response.data.message:"";toast.warning(`${o.message}
${e}`),console.log("FAILURE!!")}).finally(()=>{this.saving=11})}},mounted(){}},w={class:"row"},x={class:"col-xl-10"},y={class:"dashboard-box margin-top-0"},B={class:"content with-padding padding-bottom-0"},C={class:"row"};const N={class:"col"},V={class:"row"},F={class:"col-xl-8"},S={class:"submit-field"},T={class:"col-xl-4"},D={key:0,type:"submit",class:"button ripple-effect create-button"},E={key:1,class:"button ripple-effect create-button disabled"};function P(o,e,n,U,t,c){const u=m("dashboard");return l(),g(u,null,{default:v(()=>[s("div",null,[e[9]||(e[9]=s("div",{class:"single-page-header","data-background-image":""},[s("div",{class:"container"},[s("div",{class:"row"},[s("div",{class:"col-md-12"},[s("div",{class:"single-page-header-inner"},[s("div",{class:"left-side"},[s("div",{class:"header-details"},[s("h1",{class:"margin-bottom-0"},[s("i",{class:"icon-line-awesome-user-plus text-success"}),a(" check folder")]),s("br"),s("h3",{class:"margin-bottom-0 margin-top-0"},"CheckFolder")])])])])])]),s("div",{class:"background-image-container",style:{"background-image":"url('/images/add-student.png')"}})],-1)),e[10]||(e[10]=s("div",{class:"dashboard-headline"},[s("nav",{id:"breadcrumbs",class:"dark"},[s("ul",null,[s("li",null,[s("a",{href:"#"},"Home")]),s("li",null,"Sort Kodak")])])],-1)),e[11]||(e[11]=s("br",null,null,-1)),e[12]||(e[12]=s("br",null,null,-1)),s("div",w,[e[8]||(e[8]=s("div",{class:"col-xl-1"},null,-1)),s("div",x,[s("div",y,[s("form",{action:"#",method:"post",onSubmit:e[1]||(e[1]=h(r=>c.checkFolder(),["prevent"]))},[s("div",B,[s("div",C,[i("",!0),s("div",N,[s("div",V,[s("div",F,[s("div",S,[e[3]||(e[3]=s("h5",null,"Path ",-1)),b(s("input",{type:"text",class:"with-border","onUpdate:modelValue":e[0]||(e[0]=r=>t.form.path=r),required:""},null,512),[[f,t.form.path]])])]),e[6]||(e[6]=s("div",{class:"col-xl-4"},null,-1)),s("div",T,[t.saving==11?(l(),d("button",D,e[4]||(e[4]=[s("i",{class:"icon-feather-save"},null,-1),a(" Check ")]))):i("",!0),t.saving==22?(l(),d("button",E,e[5]||(e[5]=[s("i",{class:"icon-feather-save"},null,-1),a(" Saving.. "),s("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1)]))):i("",!0)]),e[7]||(e[7]=s("div",{class:"col-xl-8"},[s("br")],-1))])])])])],32)])])])])]),_:1})}const M=k(_,[["render",P]]);export{M as default};
