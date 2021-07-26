(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{107:function(t,e,n){"use strict";n.r(e);var r,a,c=n(0),o=n.n(c),i=n(7),u=n.n(i),s=(n(61),n(12)),l=n(8),b=n(6),d=n(15),f=n(11),j=Object(l.b)("contacts/fetchContactsRequest"),p=Object(l.b)("contacts/fetchContactsSuccess"),h=Object(l.b)("contacts/fetchContactsError"),O=Object(l.b)("contacts/addContactRequest"),m=Object(l.b)("contacts/addContactSuccess"),v=Object(l.b)("contacts/addContactError"),_=Object(l.b)("contacts/deleteContactRequest"),x=Object(l.b)("contacts/deleteContactSuccess"),C=Object(l.b)("contacts/deleteContactError"),g=Object(l.b)("contacts/changeFilter"),y=Object(l.c)([{id:"id-1",name:"Rosie Simpson",number:"+38-044-459-1256"},{id:"id-2",name:"Hermione Kline",number:"+38-041-443-8912"},{id:"id-3",name:"Eden Clements",number:"+38-048-645-1779"},{id:"id-4",name:"Annie Copeland",number:"+38-042-227-9126"}],(r={},Object(b.a)(r,p,(function(t,e){return e.payload})),Object(b.a)(r,m,(function(t,e){var n=e.payload;return[].concat(Object(d.a)(t),[n])})),Object(b.a)(r,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),w=Object(l.c)("",Object(b.a)({},g,(function(t,e){return e.payload}))),k=Object(l.c)(!1,(a={},Object(b.a)(a,j,(function(){return!0})),Object(b.a)(a,p,(function(){return!1})),Object(b.a)(a,h,(function(){return!1})),Object(b.a)(a,O,(function(){return!0})),Object(b.a)(a,m,(function(){return!1})),Object(b.a)(a,v,(function(){return!1})),Object(b.a)(a,_,(function(){return!0})),Object(b.a)(a,x,(function(){return!1})),Object(b.a)(a,C,(function(){return!1})),a)),S=Object(f.b)({contacts:y,filter:w,loading:k}),L=Object(l.a)({reducer:{contacts:S}}),N=n(17),H=n(13),A=n(27),F=n(26),W=n(23),B=function(t){return t.contacts.filter},E=function(t){return t.contacts.contacts};console.log("getAllContacts",E);var z={getLoading:function(t){return t.contacts.loading},getFilter:B,getInputContacts:Object(W.a)([E,B],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},I=n(33),M=n.n(I),R=n(47),D=n(22),q=n.n(D),T=n(25);q.a.defaults.baseURL="http://localhost:4040";var J=function(){return function(){var t=Object(R.a)(M.a.mark((function t(e){var n,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(j()),t.prev=1,t.next=4,q.a.get("/contacts");case 4:n=t.sent,r=n.data,e(p(r)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),e(h(t.t0)),T.b.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},P=function(t){var e=t.name,n=t.number;return function(t){var r={name:e,number:n};t(O),q.a.post("/contacts",r).then((function(e){var n=e.data;return t(m(n))})).catch((function(e){return t(v(e))}))}},V=function(t){return function(e){e(_()),q.a.delete("/contacts/".concat(t)).then((function(){return e(x(t))})).catch((function(t){return e(C(t))}))}},Z=n(133),G=n(34),K=n.n(G),Q=n(4),U=function(){var t=Object(c.createRef)(null);return Object(Q.jsx)(Z.a,{in:!0,appear:!0,timeout:250,classNames:K.a,nodeRef:t,children:Object(Q.jsx)("h1",{className:K.a.title,ref:t,children:"Phonebook"})})},$=n(48),X=n.n($);function Y(){return Object(Q.jsx)(X.a,{role:"alert",type:"Circles",color:"#00BFFF",width:40,height:40,style:{display:"flex",justifyContent:"center",margin:"5px"}})}var tt,et,nt=n(49),rt=n.n(nt),at=function(t){var e=t.children;return Object(Q.jsxs)("div",{className:rt.a.Container,children:[" ",e," "]})},ct=n(132),ot=n(35),it=n.n(ot),ut=function(){return Object(Q.jsx)("div",{className:it.a.button__wrapper,children:Object(Q.jsx)("button",{type:"submit",className:it.a.button,children:"Add contact"})})},st=n(28),lt=n.n(st),bt=function(t){Object(A.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(N.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.some((function(e){return e.name===t.state.name})))return alert("".concat(t.state.name," is already in your contacts"));t.props.onSubmit(t.state),t.reset()},t.handleChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(b.a)({},r,a))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(H.a)(n,[{key:"render",value:function(){return Object(Q.jsxs)("form",{className:lt.a.form,onSubmit:this.handleSubmit,children:[Object(Q.jsx)("div",{className:lt.a.HeaderWrapper,children:Object(Q.jsx)(ct.a,{label:"Name",onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(Q.jsx)("div",{className:lt.a.HeaderWrapper,children:Object(Q.jsx)(ct.a,{label:"Number",onChange:this.handleChange,value:this.state.number,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})}),Object(Q.jsx)(ut,{})]})}}]),n}(c.Component),dt=Object(s.b)((function(t){return{contacts:z.getInputContacts(t)}}),(function(t){return{onSubmit:function(e){return t(P(e))}}}))(bt),ft=n(21),jt=n.n(ft);function pt(){return(pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function ht(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function Ot(t,e){var n=t.title,r=t.titleId,a=ht(t,["title","titleId"]);return c.createElement("svg",pt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,tt||(tt=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),et||(et=c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var mt=c.forwardRef(Ot),vt=(n.p,function(t){var e=t.name,n=t.number,r=t.onDelete;return Object(Q.jsxs)("li",{className:jt.a.List__item,children:["\u2022   "+e+":    "+n+"    ",Object(Q.jsxs)("button",{className:jt.a.List__button,type:"button",name:"delete",onClick:function(){return r()},children:["Delete ",Object(Q.jsx)(mt,{width:"20px",height:"20px",fill:"#a7a1a1"})]})]})}),_t=Object(s.b)((function(t){return{contacts:z.getInputContacts(t)}}),(function(t){return{onDelete:function(e){return t(V(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(Q.jsx)("ul",{className:jt.a.TodoList,children:e.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(Q.jsx)(vt,{name:r,number:a,onDelete:function(){return n(e)}},e)}))})})),xt=n(29),Ct=n.n(xt),gt=function(t){var e=t.value,n=t.onChange;return Object(Q.jsxs)("div",{className:Ct.a.filter,children:[Object(Q.jsx)("h2",{className:Ct.a.title,children:"Contacts"}),Object(Q.jsx)("div",{className:Ct.a.HeaderWrapper,children:Object(Q.jsx)(ct.a,{value:e,onChange:n,label:"Searches by name"})})]})};gt.defaultProps={value:""};var yt=Object(s.b)((function(t){return{value:z.getFilter(t)}}),(function(t){return{onChange:function(e){return t(g(e.target.value))}}}))(gt),wt=(n(106),function(t){Object(A.a)(n,t);var e=Object(F.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(Q.jsxs)(at,{children:[Object(Q.jsx)(U,{}),Object(Q.jsx)(dt,{}),this.props.isLoadingContacts&&Object(Q.jsx)(Y,{}),Object(Q.jsx)(T.a,{autoClose:2e3}),Object(Q.jsx)("hr",{}),Object(Q.jsx)(yt,{}),Object(Q.jsx)(_t,{})]})}}]),n}(c.Component)),kt=Object(s.b)((function(t){return{isLoadingContacts:z.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(J())}}}))(wt);u.a.render(Object(Q.jsx)(o.a.StrictMode,{children:Object(Q.jsx)(s.a,{store:L,children:Object(Q.jsx)(kt,{})})}),document.getElementById("root"))},21:function(t,e,n){t.exports={List__item:"ContactList_List__item__1GVB5",List__button:"ContactList_List__button__cC25J"}},28:function(t,e,n){t.exports={Wrapper:"HookForm_Wrapper__3lyHu",HeaderWrapper:"HookForm_HeaderWrapper__3OgeD"}},29:function(t,e,n){t.exports={Wrapper:"Filter_Wrapper__heRz1",HeaderWrapper:"Filter_HeaderWrapper__2h7fS",filter:"Filter_filter__3qsC8",title:"Filter_title__3uTIe"}},34:function(t,e,n){t.exports={title:"BrandMark_title__3vJv8",appear:"BrandMark_appear__2CGtV",appearActive:"BrandMark_appearActive__poTQe"}},35:function(t,e,n){t.exports={button__wrapper:"AddTodoButton_button__wrapper__3n49v",button:"AddTodoButton_button__2Izfk"}},49:function(t,e,n){t.exports={Container:"Container_Container__3sS4l"}},61:function(t,e,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.cfc2aafe.chunk.js.map