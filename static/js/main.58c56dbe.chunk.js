(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(e,c,a){"use strict";a.r(c);var t=a(0),s=a(1),r=a(19),n=a.n(r),l=a(6),i=a(10),d=a(14),j=function(){var e=Object(s.useState)({das:!1,pay:!1,his:!1,cre:!1}),c=Object(l.a)(e,2),a=c[0],r=c[1],n=window.location.href.split("/"),j=n[n.length-1];Object(s.useEffect)((function(){switch(j){case"dashboard":r({das:!0});break;case"history":r({his:!0});break;case"payin":r({pay:!0});break;case"create-user":r({cre:!0});break;default:r({das:!0})}}),[j]);var o=function(e){r(Object(i.a)({},e,!0))};return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"sidebar","data-color":"purple","data-background-color":"black",children:[Object(t.jsx)("div",{className:"logo",children:Object(t.jsx)("div",{className:"simple-text logo-normal",children:" EMPLOYEE"})}),Object(t.jsx)("div",{className:"sidebar-wrapper",children:Object(t.jsxs)("ul",{className:"nav",children:[Object(t.jsx)("li",{className:a.das?"nav-item active":"nav-item",onClick:function(){return o("das")},children:Object(t.jsxs)(d.b,{to:"/dashboard",className:"nav-link ",children:[Object(t.jsx)("i",{className:"material-icons",children:"dashboard"}),"Dashboard"]})}),Object(t.jsx)("li",{className:a.his?"nav-item active":"nav-item",onClick:function(){return o("his")},children:Object(t.jsxs)(d.b,{to:"/history",className:"nav-link",children:[Object(t.jsx)("i",{className:"material-icons",children:"search"}),"History User"]})}),Object(t.jsx)("li",{className:a.pay?"nav-item active":"nav-item",onClick:function(){return o("pay")},children:Object(t.jsxs)(d.b,{to:"/payin",className:"nav-link",children:[Object(t.jsx)("i",{className:"material-icons",children:"add"}),"Pay In User"]})}),Object(t.jsx)("li",{className:a.cre?"nav-item active":"nav-item",onClick:function(){return o("cre")},children:Object(t.jsxs)(d.b,{to:"/create-user",className:"nav-link",children:[Object(t.jsx)("i",{className:"material-icons",children:"person_add"}),"Create User"]})})]})})]})})},o=a(2),b=a(3),m=function(e){var c=Object(b.b)();return Object(t.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ",children:[Object(t.jsx)("div",{className:"container-fluid",children:Object(t.jsx)("div",{className:"navbar-wrapper",children:Object(t.jsx)("a",{className:"navbar-brand",href:"/",children:e.name})})}),Object(t.jsx)("div",{className:"collapse navbar-collapse justify-content-end",children:Object(t.jsx)("button",{onClick:function(){c({type:"LOGOUT"})},children:"Logout"})})]})},h=a(4),u=a.n(h),O=a(11),x=a(13),p=a.n(x),v="http://localhost:7777/api/users";function N(e){return p.a.post(v,e)}function f(e,c){return p.a.put("".concat(v,"/").concat(e),{balance:c})}var g="LOGIN",y="CREATE_USER",w="FETCH_USERS",k="PAY_IN",C=function(){var e=Object(b.c)((function(e){return e.users})),c=Object(b.b)();Object(s.useEffect)((function(){c(function(){var e=Object(O.a)(u.a.mark((function e(c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(v);case 3:a=e.sent,c({type:w,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(c){return e.apply(this,arguments)}}())}),[c]);var a=e.map((function(e,c){return Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:c+1}),Object(t.jsx)("td",{children:e.fullname}),Object(t.jsx)("td",{className:"text-info",children:e.accountNumber}),Object(t.jsx)("td",{children:e.email}),Object(t.jsxs)("td",{className:"text-danger",children:[(e.balance||0).toLocaleString("en-US",{currency:"VND"})," ","VND"]}),Object(t.jsxs)("td",{children:[new Date(parseInt(e.createAt)).toLocaleDateString("en-GB").toString()," - ",new Date(parseInt(e.createAt)).toLocaleTimeString("it-IT").toString()]})]},c)}));return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(m,{name:"Dashboard"}),Object(t.jsx)("div",{className:"content",children:Object(t.jsxs)("div",{className:"container-fluid",children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(t.jsxs)("div",{className:"card card-stats",children:[Object(t.jsxs)("div",{className:"card-header card-header-success card-header-icon",children:[Object(t.jsx)("div",{className:"card-icon",children:Object(t.jsx)("i",{className:"material-icons",children:"person"})}),Object(t.jsx)("p",{className:"card-category",children:"Pay in"}),Object(t.jsx)("h3",{className:"card-title",children:"+23.056.200"})]}),Object(t.jsx)("div",{className:"card-footer",children:Object(t.jsxs)("div",{className:"stats",children:[Object(t.jsx)("i",{className:"material-icons",children:"date_range"})," Last 24 Hours"]})})]})}),Object(t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(t.jsxs)("div",{className:"card card-stats",children:[Object(t.jsxs)("div",{className:"card-header card-header-danger card-header-icon",children:[Object(t.jsx)("div",{className:"card-icon",children:Object(t.jsx)("i",{className:"material-icons",children:"info_outline"})}),Object(t.jsx)("p",{className:"card-category",children:"Fixed Issues"}),Object(t.jsx)("h3",{className:"card-title",children:"75"})]}),Object(t.jsx)("div",{className:"card-footer",children:Object(t.jsxs)("div",{className:"stats",children:[Object(t.jsx)("i",{className:"material-icons",children:"local_offer"})," Tracked from Github"]})})]})}),Object(t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(t.jsxs)("div",{className:"card card-stats",children:[Object(t.jsxs)("div",{className:"card-header card-header-info card-header-icon",children:[Object(t.jsx)("div",{className:"card-icon",children:Object(t.jsx)("i",{className:"fa fa-twitter"})}),Object(t.jsx)("p",{className:"card-category",children:"Total User"}),Object(t.jsx)("h3",{className:"card-title",children:"+336.232"})]}),Object(t.jsx)("div",{className:"card-footer",children:Object(t.jsxs)("div",{className:"stats",children:[Object(t.jsx)("i",{className:"material-icons",children:"update"})," Just Updated"]})})]})})]}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsxs)("div",{className:"card-header card-header-primary",children:[Object(t.jsx)("h4",{className:"card-title ",children:"List user new"}),Object(t.jsx)("p",{className:"card-category",children:" "})]}),Object(t.jsx)("div",{className:"card-body",children:Object(t.jsx)("div",{className:"table-responsive",children:Object(t.jsxs)("table",{className:"table",children:[Object(t.jsx)("thead",{className:" text-primary",children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{}),Object(t.jsx)("th",{children:"Name"}),Object(t.jsx)("th",{children:"Account Number"}),Object(t.jsx)("th",{children:"Email"}),Object(t.jsx)("th",{children:"Balance"}),Object(t.jsx)("th",{children:"Create At"})]})}),Object(t.jsx)("tbody",{children:a})]})})})]})})})]})})]})},E=a(5),S=function(e){return p.a.get("".concat("http://localhost:7777/api/accounts","/").concat(e))},L=function(e){return function(){var c=Object(O.a)(u.a.mark((function c(a){var t;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,S(e);case 3:t=c.sent,a({type:"QUERY_ACCOUNT",payload:t}),c.next=11;break;case 7:c.prev=7,c.t0=c.catch(0),a({type:"CLEAR_QUERY_ACCOUNT"}),alert("Account number: "+e+" not found");case 11:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()},U=function(e){var c=Object(b.c)((function(e){return e.accounts})),a=Object(b.b)(),r=Object(s.useState)(!1),n=Object(l.a)(r,2),d=n[0],j=n[1],o=Object(s.useState)({accountNumber:"",cash:""}),h=Object(l.a)(o,2),x=h[0],p=h[1],v=Object(s.useState)({}),N=Object(l.a)(v,2),g=N[0],y=N[1];Object(s.useEffect)((function(){y(!1===d?"":{fullname:c.fullname,email:c.email})}),[c,d]);var w=function(e){var c=e.target.value;p(Object(E.a)(Object(E.a)({},x),{},Object(i.a)({},e.target.name,c)))},C=function(){var e=Object(O.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(L(x.accountNumber));case 2:j(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.jsx)("div",{className:"content",children:Object(t.jsxs)("div",{className:"container-fluid ",children:[Object(t.jsx)(m,{name:"Pay in"}),Object(t.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(t.jsx)("div",{className:"col-md-7",children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsxs)("div",{className:"card-header card-header-primary",children:[Object(t.jsx)("h4",{className:"card-title",children:"Pay in"}),Object(t.jsx)("p",{className:"card-category",children:"Complete pay in"})]}),Object(t.jsx)("div",{className:"card-body",children:Object(t.jsxs)("form",{onSubmit:function(e){var c,t;e.preventDefault(),a((c=x.accountNumber,t=parseInt(x.cash),function(){var e=Object(O.a)(u.a.mark((function e(a){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(c,t);case 3:200===(s=e.sent).status&&alert("Pay in successed"),a({type:k,payload:s.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Th\xf4ng tin kh\xf4ng \u0111\xfang\n Giao d\u1ecbch th\u1ea5t b\u1ea1i");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(c){return e.apply(this,arguments)}}())),j(!1),p({accountNumber:"",cash:""})},children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-6",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Account number"}),Object(t.jsx)("input",{id:"accountNumber",type:"text",className:"form-control",name:"accountNumber",value:x.accountNumber,onChange:w,required:!0})]})}),Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("button",{id:"btn-check",type:"button",className:"btn btn-primary pull-right",onClick:C,children:["Check account"," "]})})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-md-6",children:Object(t.jsx)("div",{className:"form-group",children:Object(t.jsx)("input",{placeholder:"Full name",type:"text",className:"form-control",value:g.fullname||"",disabled:!0})})}),Object(t.jsx)("div",{className:"col-md-6",children:Object(t.jsx)("div",{className:"form-group",children:Object(t.jsx)("input",{placeholder:"Email",type:"text",className:"form-control",value:g.email||"",disabled:!0})})})]}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-6",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsxs)("label",{className:"bmd-label-floating",children:["Cash number"," "]}),Object(t.jsx)("input",{type:"tel",className:"form-control",name:"cash",value:x.cash,onChange:w,pattern:"[0-9]{3,10}",required:!0})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsx)("div",{className:"form-group",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Comment"}),Object(t.jsx)("textarea",{className:"form-control",rows:"5"})]})})})}),Object(t.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",children:"Pay In"}),Object(t.jsx)("div",{className:"clearfix"})]})})]})})})]})})},A=a(15),D=function(){var e=Object(b.c)((function(e){return e.accounts})),c=Object(s.useState)(""),a=Object(l.a)(c,2),r=a[0],n=a[1],i=Object(s.useState)(""),d=Object(l.a)(i,2),j=d[0],o=d[1],h=Object(b.b)();Object(s.useEffect)((function(){var c=[];if(e.transfer){var a=e.transfer;c=[].concat(Object(A.a)(c),Object(A.a)(a))}if(e.receive){var s=e.receive;c=[].concat(Object(A.a)(c),Object(A.a)(s))}c=c.map((function(c,a){return Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:a+1}),Object(t.jsxs)("td",{children:[new Date(parseInt(c.date)).toLocaleDateString("en-GB").toString()," - ",new Date(parseInt(c.date)).toLocaleTimeString("it-IT").toString()]}),Object(t.jsx)("td",{children:e.accountNumber}),Object(t.jsxs)("td",{children:[" ",(c.money||0).toLocaleString("en-US",{currency:"VND"})," ","VND"]}),Object(t.jsx)("td",{className:"text-info",children:c.type}),Object(t.jsx)("td",{children:c.details})]},a+1)})),o(c)}),[e]),Object(s.useEffect)((function(){""===r&&(o(""),n(""))}),[r]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(m,{name:"History"}),Object(t.jsx)("div",{className:"content",children:Object(t.jsx)("div",{className:"container-fluid ",children:Object(t.jsxs)("div",{className:"row ",children:[Object(t.jsx)("div",{className:"col-md-6",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Enter account number ..."}),Object(t.jsx)("input",{type:"text",className:"form-control",name:"infoAccount",value:r,onChange:function(e){n(e.target.value)}})]})}),Object(t.jsxs)("div",{className:"col-md-6",children:[Object(t.jsx)("button",{type:"",className:"btn btn-primary pull-left",onClick:function(){h(L(r))},children:"Search history"}),Object(t.jsx)("button",{type:"",className:"btn btn-info pull-left",onClick:function(){o(""),n(""),h({type:"CLEAR_QUERY_ACCOUNT"})},children:"Clear"})]}),Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsxs)("div",{className:"card-header card-header-primary",children:[Object(t.jsx)("h4",{className:"card-title ",children:"User"}),Object(t.jsx)("p",{className:"card-category",children:"Here is a subtitle for this table"})]}),Object(t.jsx)("div",{className:"card-body",children:Object(t.jsx)("div",{className:"table-responsive",children:Object(t.jsxs)("table",{className:"table",children:[Object(t.jsx)("thead",{className:" text-primary",children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{}),Object(t.jsx)("th",{children:"Date"}),Object(t.jsx)("th",{children:"Account number"}),Object(t.jsx)("th",{children:"Money number"}),Object(t.jsx)("th",{children:"Type"}),Object(t.jsx)("th",{children:"Details"})]})}),Object(t.jsx)("tbody",{children:j||null})]})})})]})})]})})})]})},I=function(){var e=Object(s.useState)({username:"",password:"",email:"",phone:"",fullname:""}),c=Object(l.a)(e,2),a=c[0],r=c[1],n=function(e){var c=e.target.value;r(Object(E.a)(Object(E.a)({},a),{},Object(i.a)({},e.target.name,c)))},d=Object(b.b)();return Object(t.jsx)("div",{className:"content",children:Object(t.jsxs)("div",{className:"container-fluid ",children:[Object(t.jsx)(m,{name:"Create user"}),Object(t.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(t.jsx)("div",{className:"col-md-7",children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsxs)("div",{className:"card-header card-header-primary",children:[Object(t.jsx)("h4",{className:"card-title",children:"Create user"}),Object(t.jsx)("p",{className:"card-category",children:"Enter infomation"})]}),Object(t.jsx)("div",{className:"card-body",children:Object(t.jsxs)("form",{onSubmit:function(e){e&&e.preventDefault(),d(function(e){return function(){var c=Object(O.a)(u.a.mark((function c(a){var t;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,N(e);case 3:t=c.sent,a({type:y,payload:t.data.user}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}(a)),r({username:"",password:"",email:"",phone:"",fullname:""})},children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Username"}),Object(t.jsx)("input",{type:"text",className:"form-control",name:"username",value:a.username,onChange:n,required:!0})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Password"}),Object(t.jsx)("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:n,required:!0})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Full name"}),Object(t.jsx)("input",{type:"text",className:"form-control",name:"fullname",value:a.fullname,onChange:n,required:!0})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Email"}),Object(t.jsx)("input",{type:"email",className:"form-control",name:"email",value:a.email,onChange:n,required:!0})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Phone number (10 digit)"}),Object(t.jsx)("input",{type:"tel",className:"form-control",name:"phone",value:a.phone,onChange:n,pattern:"[0-9]{10}",required:!0})]})})}),Object(t.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",children:"Create New User"}),Object(t.jsx)("div",{className:"clearfix"})]})})]})})})]})})},T=function(){return Object(t.jsx)("footer",{className:"footer",children:Object(t.jsx)("div",{className:"container-fluid",children:Object(t.jsx)("div",{className:"copyright float-right",children:"2020 - copyright"})})})};function _(e){return p.a.post("http://localhost:7777/api/login",e,{headers:{"Test-Header":"test-value"}})}var P=function(){var e=Object(s.useState)({username:"",password:""}),c=Object(l.a)(e,2),a=c[0],r=c[1],n=Object(b.b)(),d=function(e){var c=e.target.value;r(Object(E.a)(Object(E.a)({},a),{},Object(i.a)({},e.target.name,c)))};return Object(s.useEffect)((function(){n({type:"CHECK_LOGIN"})}),[n]),Object(t.jsxs)("div",{className:"content ",children:[Object(t.jsx)("div",{style:{marginTop:"10%"}}),Object(t.jsx)("div",{className:"container-fluid ",children:Object(t.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsxs)("div",{className:"card-header card-header-primary",children:[Object(t.jsx)("h4",{className:"card-title",children:"Login"}),Object(t.jsx)("p",{className:"card-category",children:"Enter infomation"})]}),Object(t.jsx)("div",{className:"card-body",children:Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(function(e){return function(){var c=Object(O.a)(u.a.mark((function c(a){var t;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,_(e);case 3:(t=c.sent).data.token&&localStorage.setItem("xx-token",t.data.token),a({type:g,payload:t.data}),c.next=12;break;case 8:c.prev=8,c.t0=c.catch(0),alert("username or password i correct"),a({type:"LOGIN_FAIL",payload:!1});case 12:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(e){return c.apply(this,arguments)}}()}(a))},children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Username"}),Object(t.jsx)("input",{type:"text",className:"form-control",name:"username",value:a.username,onChange:d})]})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-md-12",children:Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("label",{className:"bmd-label-floating",children:"Password"}),Object(t.jsx)("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:d})]})})}),Object(t.jsx)("button",{type:"submit",className:"btn btn-primary pull-right",children:"Login"}),Object(t.jsx)("div",{className:"clearfix"})]})})]})})})})]})};var R=function(){var e=Object(b.c)((function(e){return e.login})),c=Object(s.useState)(e.isLogin),a=Object(l.a)(c,2),r=a[0],n=a[1];return Object(s.useEffect)((function(){n(e.isLogin)}),[e]),Object(t.jsx)(t.Fragment,{children:r?Object(t.jsxs)("div",{className:"wrapper ",children:[Object(t.jsx)(j,{}),Object(t.jsxs)("div",{className:"main-panel",children:[Object(t.jsxs)(o.c,{children:[Object(t.jsx)(o.a,{path:"/",component:C,exact:!0}),Object(t.jsx)(o.a,{path:"/dashboard",component:C,exact:!0}),Object(t.jsx)(o.a,{path:"/payin",component:U,exact:!0}),Object(t.jsx)(o.a,{path:"/history",component:D,exact:!0}),Object(t.jsx)(o.a,{path:"/create-user",component:I,exact:!0})]}),Object(t.jsx)(T,{})]})]}):Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(o.c,{children:Object(t.jsx)(o.a,{path:"/",children:Object(t.jsx)(P,{})})})})})},F=a(12),G=[];var H={isLogin:!1,userData:{},token:localStorage.getItem("xx-token")};H.token&&(H.isLogin=!0);var q={};var Y=Object(F.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case w:return c.payload;case y:return[].concat(Object(A.a)(e),[c.payload]);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case g:return Object(E.a)(Object(E.a)({},e),{},{isLogin:!0,token:c.payload.token?c.payload.token:e.token});case"CHECK_LOGIN":return e.token?Object(E.a)(Object(E.a)({},e),{},{isLogin:!0}):e;case"LOGOUT":return localStorage.clear(),Object(E.a)(Object(E.a)({},e),{},{isLogin:!1,token:null,userData:{}});default:return e}},payin:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],c=arguments.length>1?arguments[1]:void 0;switch(c.type){case k:return!0;default:return e}},accounts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,c=arguments.length>1?arguments[1]:void 0,a=c.type,t=c.payload;switch(a){case"QUERY_ACCOUNT":return t.data;case"CLEAR_QUERY_ACCOUNT":return{};default:return e}}}),Q=a(38),B=Object(F.e)(Y,Object(F.d)(Object(F.a)(Q.a)));n.a.render(Object(t.jsx)(b.a,{store:B,children:Object(t.jsx)(d.a,{children:Object(t.jsx)(R,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.58c56dbe.chunk.js.map