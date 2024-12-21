import{D as m}from"./index.d08ea73c.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as d,o as i,g as v,e as a,a as e,c,l as g,F as p,h as t,d as o,t as n}from"./index.e1903b36.js";import"./logo.c708bae0.js";const f={name:"ViewStudents",components:{Dashboard:m},data(){return{students:[]}},computed:{},methods:{async loadStudents(){let r=await axios.get("/students");this.students=r.data.data.students}},mounted(){this.loadStudents()}},b=e("div",{class:"single-page-header","data-background-image":""},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-md-12"},[e("div",{class:"single-page-header-inner"},[e("div",{class:"left-side"},[e("div",{class:"header-details"},[e("h1",{class:"margin-bottom-0"},[e("i",{class:"icon-material-outline-assignment text-success"}),t(" View Students")]),e("br"),e("h3",{class:"margin-bottom-0 margin-top-0"},"View Students in Database"),e("h5",null,[e("i",{class:"icon-material-outline-assignment text-success"}),t(" Students on the system")])])])])])])]),e("div",{class:"background-image-container",style:{"background-image":"url('/images/view-student.png')"}})],-1),w=e("div",{class:"dashboard-headline"},[e("nav",{id:"breadcrumbs",class:"dark"},[e("ul",null,[e("li",null,[e("a",{href:"#"},"Home")]),e("li",null,"Students")])])],-1),k=e("br",null,null,-1),S=e("br",null,null,-1),x={class:"freelancers-container freelancers-grid-layout margin-top-35"},V={class:"freelancer"},y={class:"freelancer-overview"},B={class:"freelancer-overview-inner"},D={class:"freelancer-avatar"},L=e("div",{class:"verified-badge"},null,-1),N=["src"],$={class:"freelancer-name"},C={class:"freelancer-details"},F={class:"freelancer-details-list"},A=e("i",{class:"icon-material-outline-arrow-right-alt"},null,-1);function E(r,H,P,T,u,j){const l=d("router-link"),_=d("dashboard");return i(),v(_,null,{default:a(()=>[e("div",null,[b,w,k,S,e("div",x,[(i(!0),c(p,null,g(u.students,s=>(i(),c("div",V,[e("div",y,[e("div",B,[e("div",D,[L,o(l,{to:{name:"view_student",params:{id:s.id}}},{default:a(()=>[e("img",{src:s.imageLink,alt:""},null,8,N)]),_:2},1032,["to"])]),e("div",$,[e("h4",null,[o(l,{to:{name:"view_student",params:{id:s.id}}},{default:a(()=>[t(n(s.name),1)]),_:2},1032,["to"])]),e("span",null,n(s.department),1)])])]),e("div",C,[e("div",F,[e("ul",null,[e("li",null,[t("Level "),e("strong",null,n(s.level),1)]),e("li",null,[t("Age "),e("strong",null,n(s.age),1)])])]),o(l,{to:{name:"view_student",params:{id:s.id}},class:"button button-sliding-icon ripple-effect"},{default:a(()=>[t("View Profile "),A]),_:2},1032,["to"])])]))),256))])])]),_:1})}const J=h(f,[["render",E]]);export{J as default};
