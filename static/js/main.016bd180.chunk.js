(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a(18),r=a.n(n),l=a(5),i=a(12),o=a(14),d=function(){var e=Object(s.useState)({das:!1,pay:!1,his:!1,cre:!1}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=window.location.href.split("/"),d=r[r.length-1];Object(s.useEffect)((function(){switch(d){case"dashboard":n({das:!0});break;case"history":n({his:!0});break;case"payin":n({pay:!0});break;case"create-user":n({cre:!0});break;default:n({das:!0})}}),[d]);var j=function(e){n(Object(i.a)({},e,!0))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"sidebar","data-color":"purple","data-background-color":"black",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("div",{className:"simple-text logo-normal",children:" EMPLOYEE"})}),Object(c.jsx)("div",{className:"sidebar-wrapper",children:Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{className:a.das?"nav-item active":"nav-item",onClick:function(){return j("das")},children:Object(c.jsxs)(o.b,{to:"/dashboard",className:"nav-link ",children:[Object(c.jsx)("i",{className:"material-icons",children:"dashboard"}),"Dashboard"]})}),Object(c.jsx)("li",{className:a.his?"nav-item active":"nav-item",onClick:function(){return j("his")},children:Object(c.jsxs)(o.b,{to:"/history",className:"nav-link",children:[Object(c.jsx)("i",{className:"material-icons",children:"search"}),"History Transaction"]})}),Object(c.jsx)("li",{className:a.pay?"nav-item active":"nav-item",onClick:function(){return j("pay")},children:Object(c.jsxs)(o.b,{to:"/payin",className:"nav-link",children:[Object(c.jsx)("i",{className:"material-icons",children:"add"}),"Pay In User"]})}),Object(c.jsx)("li",{className:a.cre?"nav-item active":"nav-item",onClick:function(){return j("cre")},children:Object(c.jsxs)(o.b,{to:"/create-user",className:"nav-link",children:[Object(c.jsx)("i",{className:"material-icons",children:"person_add"}),"Create User"]})})]})})]})})},j=a(3),b=a(4),u="LOGIN",m="CREATE_USER",h="FETCH_USERS",O="PAY_IN",x="ACCESS_TRANS",p="QUERY_ACCOUNT",v="CLEAR_QUERY_ACCOUNT",f="CHECK_LOGIN",N="LOGOUT",g="FETCH_TOTAL_USERS",y=function(e){var t=Object(b.c)((function(e){return e.login.userData})),a=Object(b.b)();return Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ",children:[Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"navbar-wrapper",children:Object(c.jsx)("p",{className:"navbar-brand",children:e.name})})}),Object(c.jsx)("div",{className:"collapse navbar-collapse justify-content-end"}),Object(c.jsx)("div",{className:"collapse navbar-collapse justify-content-end",children:Object(c.jsxs)("button",{onClick:function(){a({type:N})},type:"submit",className:"btn  pull-right",children:[Object(c.jsx)("i",{className:"material-icons",children:"person"}),t," - LOGOUT"]})})]})},w=a(2),k=a.n(w),C=a(6),S=a(9),E=a.n(S),U="/api/users";function L(e,t){return E.a.get("".concat(U,"/?startDate=").concat(e))}function T(e){return E.a.post(U,e)}var D=function(){var e=Object(b.c)((function(e){return e.users})),t=Object(b.c)((function(e){return e.dashboard})),a=Object(s.useState)(0),n=Object(l.a)(a,2),r=n[0],i=n[1],o=Object(b.b)();Object(s.useEffect)((function(){var e=new Date(Date.now()).setHours(0,0,0);o(function(e,t){return function(){var t=Object(C.a)(k.a.mark((function t(a){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e);case 3:c=t.sent,a({type:h,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[o]),Object(s.useEffect)((function(){o(function(){var e=Object(C.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/total-user");case 3:a=e.sent,t({type:g,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),i(t.totalUsers)}),[o,t.totalUsers]);var d=e.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t+1}),Object(c.jsx)("td",{children:e.fullname}),Object(c.jsx)("td",{className:"text-info",children:e.accountNumber}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsxs)("td",{children:[new Date(parseInt(e.createAt)).toLocaleDateString("en-GB").toString()," - ",new Date(parseInt(e.createAt)).toLocaleTimeString("it-IT").toString()]})]},t)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{name:"Dashboard"}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"card card-stats",children:[Object(c.jsxs)("div",{className:"card-header card-header-success card-header-icon",children:[Object(c.jsx)("div",{className:"card-icon",children:Object(c.jsx)("i",{className:"material-icons",children:"person"})}),Object(c.jsx)("p",{className:"card-category",children:"Total User"}),Object(c.jsxs)("h3",{className:"card-title",children:[r," users"]})]}),Object(c.jsx)("div",{className:"card-footer",children:Object(c.jsxs)("div",{className:"stats",children:[Object(c.jsx)("i",{className:"material-icons",children:"update"})," Just Updated"]})})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"card card-stats",children:[Object(c.jsxs)("div",{className:"card-header card-header-info card-header-icon",children:[Object(c.jsx)("div",{className:"card-icon",children:Object(c.jsx)("i",{className:"material-icons",children:"info_outline"})}),Object(c.jsx)("p",{className:"card-category",children:"Fixed Issues"}),Object(c.jsx)("h3",{className:"card-title",children:0})]}),Object(c.jsx)("div",{className:"card-footer",children:Object(c.jsxs)("div",{className:"stats",children:[Object(c.jsx)("i",{className:"material-icons",children:"local_offer"})," Tracked from Github"]})})]})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card-header card-header-primary",children:[Object(c.jsx)("h4",{className:"card-title ",children:"List user"}),Object(c.jsx)("p",{className:"card-category",children:"User was created today"})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("div",{className:"table-responsive",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{className:" text-primary",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Account Number"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"Create At"})]})}),Object(c.jsx)("tbody",{children:d})]})})})]})})})]})})]})},A=a(7);function I(e,t,a,c){return E.a.put("".concat("/api/payins"),{accountNumber:e,mount:t,detail:a},{headers:{Authorization:"Bearer ".concat(c)}})}var _=function(e){return E.a.get("".concat("/api/accounts","/").concat(e))},R=function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:c=t.sent,a({type:"QUERY_ACCOUNT",payload:c}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"CLEAR_QUERY_ACCOUNT"}),alert("Account number: "+e+" not found");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e){var t=Object(b.c)((function(e){return e.accounts})),a=Object(b.b)(),n=Object(s.useState)(!1),r=Object(l.a)(n,2),o=r[0],d=r[1],j=Object(s.useState)({accountNumber:"",cash:"",detail:""}),u=Object(l.a)(j,2),m=u[0],h=u[1],x=Object(s.useState)({}),p=Object(l.a)(x,2),v=p[0],f=p[1];Object(s.useEffect)((function(){f(!1===o?"":{fullname:t.fullname,email:t.email})}),[t,o]);var N=function(e){var t=e.target.value;h(Object(A.a)(Object(A.a)({},m),{},Object(i.a)({},e.target.name,t)))},g=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(R(m.accountNumber));case 2:d(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"container-fluid ",children:[Object(c.jsx)(y,{name:"Pay in"}),Object(c.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"col-md-7",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card-header card-header-primary",children:[Object(c.jsx)("h4",{className:"card-title",children:"Pay in"}),Object(c.jsx)("p",{className:"card-category",children:"Complete pay in"})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:function(e){var t,c,s;e.preventDefault(),a((t=m.accountNumber,c=parseInt(m.cash),s=m.detail,function(){var e=Object(C.a)(k.a.mark((function e(a){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("xx-token"),e.next=4,I(t,c,s,n);case 4:200===(r=e.sent).status&&alert("Pay in successed"),a({type:O,payload:r.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err: ",e.t0),alert("Th\xf4ng tin kh\xf4ng \u0111\xfang\n Giao d\u1ecbch th\u1ea5t b\u1ea1i");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),d(!1),h({accountNumber:"",cash:"",detail:""})},children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Account number"}),Object(c.jsx)("input",{id:"accountNumber",type:"text",className:"form-control",name:"accountNumber",value:m.accountNumber,onChange:N,required:!0})]})}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("button",{id:"btn-check",type:"button",className:"btn btn-primary pull-right",onClick:g,children:["Check account"," "]})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{placeholder:"Full name",type:"text",className:"form-control",value:v.fullname||"",disabled:!0})})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{placeholder:"Email",type:"text",className:"form-control",value:v.email||"",disabled:!0})})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsxs)("label",{className:"bmd-label-floating",children:["Cash number"," "]}),Object(c.jsx)("input",{type:"tel",className:"form-control",name:"cash",value:m.cash,onChange:N,pattern:"[0-9]{3,10}",required:!0})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Comment"}),Object(c.jsx)("textarea",{name:"detail",value:m.detail,onChange:N,className:"form-control",rows:"5"})]})})})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",children:"Pay In"}),Object(c.jsx)("div",{className:"clearfix"})]})})]})})})]})})};var P=function(){var e=Object(b.c)((function(e){return e.history})),t=Object(s.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1],i=Object(s.useState)("all"),o=Object(l.a)(i,2),d=o[0],j=o[1],u=Object(s.useState)(""),m=Object(l.a)(u,2),h=m[0],O=m[1],x=Object(b.b)();Object(s.useEffect)((function(){var t=e.filter((function(e){return"all"===d||e.typeTrans===d})).map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t+1}),Object(c.jsxs)("td",{children:[new Date(parseInt(e.date)).toLocaleDateString("en-GB").toString()," - ",new Date(parseInt(e.date)).toLocaleTimeString("it-IT").toString()]}),Object(c.jsx)("td",{children:e.accountSource}),Object(c.jsxs)("td",{children:[" ",(e.mount||0).toLocaleString("en-US",{currency:"VND"})," ","VND"]}),Object(c.jsx)("td",{className:"text-info",children:e.typeTrans}),Object(c.jsx)("td",{children:e.detail})]},t+1)}));O(t)}),[e,d]),Object(s.useEffect)((function(){""===n&&(O(""),r(""))}),[n]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{name:"History"}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{className:"container-fluid ",children:Object(c.jsxs)("div",{className:"row ",children:[Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Enter account number ..."}),Object(c.jsx)("input",{style:{color:"#f2f2f2"},type:"text",className:"form-control",name:"infoAccount",value:n,onChange:function(e){r(e.target.value)}})]})}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("select",{className:"custom-select",required:!0,onChange:function(e){j(e.target.value)},value:d,children:[Object(c.jsx)("option",{value:"all",children:"Select type (All)"}),Object(c.jsx)("option",{value:"transfer",children:"Transfer"}),Object(c.jsx)("option",{value:"receive",children:"Receive money"}),Object(c.jsx)("option",{value:"debt payment",children:"Debt payment"})]})})}),Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("button",{type:"",className:"btn btn-primary pull-left",onClick:function(){var e;x((e=n,function(){var t=Object(C.a)(k.a.mark((function t(a){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s=e,E.a.get("".concat("/api/history","/").concat(s));case 3:c=t.sent,a({type:"ACCESS_TRANS",payload:c.data}),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),alert(t.t0.response.data.msg),t.abrupt("return");case 11:case"end":return t.stop()}var s}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Search history"}),Object(c.jsx)("button",{type:"",className:"btn btn-info pull-left",onClick:function(){O(""),r(""),x({type:v})},children:"Clear"})]}),Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card-header card-header-primary",children:[Object(c.jsx)("h4",{className:"card-title ",children:"User"}),Object(c.jsx)("p",{className:"card-category",children:"Here is a subtitle for this table"})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("div",{className:"table-responsive",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{className:" text-primary",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{}),Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Account number"}),Object(c.jsx)("th",{children:"Mount"}),Object(c.jsx)("th",{children:"Type"}),Object(c.jsx)("th",{children:"Details"})]})}),Object(c.jsx)("tbody",{children:h||null})]})})})]})})]})})})]})},q=function(){var e=Object(s.useState)({username:"",password:"",email:"",phone:"",fullname:""}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=function(e){var t=e.target.value;n(Object(A.a)(Object(A.a)({},a),{},Object(i.a)({},e.target.name,t)))},o=Object(b.b)();return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"container-fluid ",children:[Object(c.jsx)(y,{name:"Create user"}),Object(c.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"col-md-7",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card-header card-header-primary",children:[Object(c.jsx)("h4",{className:"card-title",children:"Create user"}),Object(c.jsx)("p",{className:"card-category",children:"Enter infomation"})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:function(e){e&&e.preventDefault(),o(function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:c=t.sent,a({type:m,payload:c.data.user}),alert("Create user success"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(a)),n({username:"",password:"",email:"",phone:"",fullname:""})},children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Username"}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"username",value:a.username,onChange:r,required:!0})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Password"}),Object(c.jsx)("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:r,required:!0})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Full name"}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"fullname",value:a.fullname,onChange:r,required:!0})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Email"}),Object(c.jsx)("input",{type:"email",className:"form-control",name:"email",value:a.email,onChange:r,required:!0})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Phone number (10 digit)"}),Object(c.jsx)("input",{type:"tel",className:"form-control",name:"phone",value:a.phone,onChange:r,pattern:"[0-9]{10}",required:!0})]})})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",children:"Create New User"}),Object(c.jsx)("div",{className:"clearfix"})]})})]})})})]})})},G=function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsx)("div",{className:"copyright float-right",children:"2020 - copyright"})})})};function H(e){return E.a.post("/api/login",e)}var Y=function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(e);case 3:(c=t.sent).data.token&&(localStorage.setItem("xx-token",c.data.token),localStorage.setItem("name",c.data.userData)),a({type:u,payload:c.data}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Incorrect username or password"),a({type:"LOGIN_FAIL",payload:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},B=function(){var e=Object(s.useState)({isSubmit:!1}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({username:"",password:""}),o=Object(l.a)(r,2),d=o[0],j=o[1],u=Object(b.b)(),m=function(e){var t=e.target.value;j(Object(A.a)(Object(A.a)({},d),{},Object(i.a)({},e.target.name,t)))},h=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n({isSubmit:!0});case 3:return e.next=5,u(Y(d));case 5:return e.next=7,n({isSubmit:!1});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){u({type:"CHECK_LOGIN"})}),[u]),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{style:{marginTop:"10%"}}),Object(c.jsx)("div",{className:"container-fluid ",children:Object(c.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{className:"card-header card-header-primary",children:[Object(c.jsx)("h4",{className:"card-title",children:"Login"}),Object(c.jsx)("p",{className:"card-category",children:"Enter infomation"})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:h,children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Username"}),Object(c.jsx)("input",{type:"text",className:"form-control",name:"username",value:d.username,onChange:m,required:!0})]})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"bmd-label-floating",children:"Password"}),Object(c.jsx)("input",{type:"password",className:"form-control",name:"password",value:d.password,onChange:m,required:!0})]})})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",disabled:a.isSubmit,children:"Login"}),Object(c.jsx)("div",{className:"clearfix"})]})})]})})})})]})};var Q=function(){var e=Object(b.c)((function(e){return e.login})),t=Object(s.useState)(e.isLogin),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){r(e.isLogin)}),[e]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("div",{className:"wrapper ",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"main-panel",children:[Object(c.jsx)(j.b,{path:"/",component:D,exact:!0}),Object(c.jsx)(j.b,{path:"/dashboard",component:D,exact:!0}),Object(c.jsx)(j.b,{path:"/payin",component:F,exact:!0}),Object(c.jsx)(j.b,{path:"/history",component:P,exact:!0}),Object(c.jsx)(j.b,{path:"/create-user",component:q,exact:!0}),Object(c.jsx)(G,{}),Object(c.jsx)(j.a,{to:"/"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.b,{path:"/",component:B,exact:!0}),Object(c.jsx)(j.a,{to:"/"})]})})},J=a(13),K=a(38),M=[];var V={isLogin:!1,userData:localStorage.getItem("name"),token:localStorage.getItem("xx-token")};V.token&&(V.isLogin=!0);var z={};var W=[];var X={totalUsers:0};var Z=Object(J.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;case m:return[].concat(Object(K.a)(e),[t.payload]);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(A.a)(Object(A.a)({},e),{},{isLogin:!0,token:t.payload.token?t.payload.token:e.token,userData:t.payload.userData});case f:return e.token?Object(A.a)(Object(A.a)({},e),{},{isLogin:!0}):e;case N:return localStorage.clear(),Object(A.a)(Object(A.a)({},e),{},{isLogin:!1,token:null,userData:""});default:return e}},payin:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return!0;default:return e}},accounts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case p:return c.data;case v:return{};default:return e}},history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload.trans;default:return e}},dashboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case g:return{totalUsers:c.totalUsers};default:return e}}}),$=a(37),ee=Object(J.e)(Z,Object(J.d)(Object(J.a)($.a)));r.a.render(Object(c.jsx)(b.a,{store:ee,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(Q,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.016bd180.chunk.js.map