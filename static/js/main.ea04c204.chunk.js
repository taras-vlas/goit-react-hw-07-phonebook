(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={Form:"ContactForm_Form__3LeAv",Label:"ContactForm_Label__3yFXJ",Input:"ContactForm_Input__TZ9Se",Button:"ContactForm_Button__3nBzd"}},24:function(e,t,n){e.exports={List_item:"Contact-ListItem_List_item__mIXpk",List_button:"Contact-ListItem_List_button__jPigt"}},59:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(9),a=n.n(c),r=n(5),s=n(22),i=n(39),u=(n(59),n(40)),b=n(43),d=n(41),l=n.n(d),h=n(20),j=n(15),m=n(49),p=n(103),f=n(13),C=n.n(f),O=n(19),k=function(e){return e.phonebook.items},g=function(e){return e.phonebook.filter},v=function(e){return e.phonebook.isLoading},x=Object(O.a)([k,g],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),S=n(18),_=n.n(S),L=n(7),y={fetchContactsRequest:Object(L.b)("phonebook/fetchContactsRequest"),fetchContactsSuccess:Object(L.b)("phonebook/fetchContactsSuccess"),fetchContactsError:Object(L.b)("phonebook/fetchContactsError"),addContactRequest:Object(L.b)("phonebook/addContactRequest"),addContactSuccess:Object(L.b)("phonebook/addContactSuccess"),addContactError:Object(L.b)("phonebook/addContactError"),deleteContactRequest:Object(L.b)("phonebook/deleteContactRequest"),deleteContactSuccess:Object(L.b)("phonebook/deleteContactSuccess"),deleteContactError:Object(L.b)("phonebook/deleteContactError"),changeFilter:Object(L.b)("phonebook/changeFilter")};_.a.defaults.baseURL="http://localhost:4040";var E,F=function(){return function(e){e(y.fetchContactsRequest()),_.a.get("/contacts").then((function(t){var n=t.data;return e(y.fetchContactsSuccess(n))})).catch((function(t){return e(y.fetchContactsError(t))}))}},w=function(e){var t=e.name,n=e.number;return function(e){var o={name:t,number:n};e(y.addContactRequest()),_.a.post("/contacts",o).then((function(t){var n=t.data;return e(y.addContactSuccess(n))})).catch((function(t){return e(y.addContactError(t))}))}},q=function(e){return function(t){t(y.deleteContactRequest()),_.a.delete("/contacts/".concat(e)).then((function(){return t(y.deleteContactSuccess(e))})).catch((function(e){return t(y.deleteContactError(e))}))}},R=n(3),A={id:"",name:"",number:""},N=function(){var e=Object(s.b)(),t=Object(r.b)(),n=Object(r.c)(k),c=Object(o.useState)(A),a=Object(m.a)(c,2),i=a[0],u=a[1],b=i.name,d=i.number,l=function(e){u((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))};return Object(R.jsxs)("form",{className:C.a.Form,onSubmit:function(o){o.preventDefault();var c={id:Object(p.a)(),name:b,number:Number(d)};n.some((function(e){return e.name===c.name}))?e.show("".concat(c.name," is already in your contacts")):t(w(c))},children:[Object(R.jsxs)("label",{className:C.a.Label,children:["Name",Object(R.jsx)("input",{className:C.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:b,onChange:l})]}),Object(R.jsxs)("label",{className:C.a.Label,children:["Number",Object(R.jsx)("input",{className:C.a.Input,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,onChange:l})]}),Object(R.jsx)("button",{className:C.a.Button,type:"submit",children:"Add contact"})]})},z=n(24),I=n.n(z),B=function(e){var t=e.contactID,n=Object(r.b)(),o=Object(r.c)(function(e){return function(t){return t.phonebook.items.find((function(t){return t.id===e}))}}(t)),c=o.id,a=o.name,s=o.number;return Object(R.jsxs)("li",{className:I.a.List_item,children:["\u2022 "+a+":   "+s,Object(R.jsx)("button",{className:I.a.List_button,id:c,type:"button",name:"delete",onClick:function(){return n(q(c))},children:"Delete"})]},c)},Z=function(){var e=Object(r.b)(),t=Object(r.c)(x);return Object(o.useEffect)((function(){return function(){return e(F())}}),[]),Object(R.jsx)("ul",{children:t.map((function(e){return Object(R.jsx)(B,{contactID:e.id})}))})},J=n(48),D=Object(J.a)({Label:{display:"inline-block",marginBottom:16,width:200,fontSize:16,color:"#171718",cursor:"pointer"},Input:{color:"#171718",font:"inherit",fontSize:"0.9rem",marginTop:6,borderRadius:4,border:"1px solid #9e9d9d",width:200,outline:0,"&:focus":{border:"2px solid blue",boxShadow:"1px 1px 3px 1px rgba(41, 107, 250, 0.14)"}}}),T=function(){var e=D(),t=Object(r.b)(),n=Object(r.c)(g);return Object(R.jsxs)("div",{className:e.Label,children:["Find contacts by name",Object(R.jsx)("input",{type:"text",value:n,name:"filter",onChange:function(e){var n,o=e.target.value;n=o,t(y.changeFilter(n))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},M=b.a.section(E||(E=Object(u.a)(["\n  &:not(:last-of-type) {\n    margin-bottom: 40px;\n  }\n"]))),P=function(){var e=Object(r.c)(v);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(M,{children:[Object(R.jsx)("h1",{children:"Phonebook"}),Object(R.jsx)(N,{})]}),Object(R.jsxs)(M,{children:[Object(R.jsx)("h2",{children:"Contacts"}),Object(R.jsx)(T,{}),e&&Object(R.jsx)(l.a,{type:"TailSpin",color:"#00BFFF",height:40,width:40,className:"Spinner",timeout:3e3}),Object(R.jsx)(Z,{})]})]})},X=n(12),$=n(14),H=n(47),K=n.n(H),U=n(6),G={isLoading:!1,error:"",contacts:{items:[{id:"id-1",name:"Rosie Simpson",number:"+38-044-459-1256"},{id:"id-2",name:"Hermione Kline",number:"+38-041-443-8912"},{id:"id-3",name:"Eden Clements",number:"+38-048-645-1779"},{id:"id-4",name:"Annie Copeland",number:"+38-042-227-9126"}],filter:""}},Q=Object(U.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G.contacts.items,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"phonebook/fetchContactsSuccess":return o;case"phonebook/addContactSuccess":return[].concat(Object(X.a)(e),[o]);case"phonebook/deleteContactSuccess":return Object(X.a)(e.filter((function(e){var t=e.id;return o!==t})));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G.contacts.filter,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"phonebook/ChangeFilter":return n;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G.isLoading,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"phonebook/fetchContactRequest":case"phonebook/addContactRequest":case"phonebook/deleteContactRequest":return!0;case"phonebook/fetchContactsSuccess":case"phonebook/fetchContactsError":case"phonebook/addContactSuccess":case"phonebook/addContactError":case"phonebook/deleteContactSuccess":case"phonebook/deleteContactError":return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G.isLoading,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"phonebook/fetchContactsError":case"phonebook/addContactError":case"phonebook/deleteContactError":return o;default:return e}}}),V=[].concat(Object(X.a)(Object(L.c)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),[K.a]),W=Object(L.a)({reducer:{phonebook:Q},middleware:V,devTools:!1});a.a.render(Object(R.jsx)(s.a,{template:i.a,children:Object(R.jsx)(r.a,{store:W,children:Object(R.jsx)(P,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ea04c204.chunk.js.map