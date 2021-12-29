(this["webpackJsonpfirts-app"]=this["webpackJsonpfirts-app"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(26),r=n.n(a),c=n(11),i=n(5),o=n(4),l=n(1),d=Object(s.createContext)(),m=function(e){var t=e.children,n=Object(s.useState)(JSON.parse(sessionStorage.getItem("user"))),a=Object(o.a)(n,2),r=a[0],c=a[1],i=Object(s.useState)(!!sessionStorage.getItem("token")),m=Object(o.a)(i,2),u=m[0],b=m[1];return Object(l.jsx)(d.Provider,{value:{user:r,signin:function(e){var t=e.user,n=e.token;c(t),sessionStorage.setItem("token","Bearer "+n),sessionStorage.setItem("user",JSON.stringify(t)),b(!0)},signout:function(){c({}),b(!1),sessionStorage.removeItem("token"),sessionStorage.removeItem("user")},isAuth:u},children:t})},u=n(82),b=n(25),x=n(6),j=[{name:"Dashboard",href:"/",current:!0}];function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var h=function(e){var t=e.children,n=Object(s.useContext)(d),a=n.user,r=n.signout,o=Object(i.g)(),m=function(){r(),o.push("/login")};return Object(l.jsxs)("div",{className:" text-purple-50",children:[Object(l.jsx)(u.a,{as:"nav",className:"bg-gray-800",children:function(e){var t=e.open;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(l.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(l.jsxs)(u.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(l.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(l.jsx)(b.c,{className:"block h-6 w-6","aria-hidden":"true"}):Object(l.jsx)(b.b,{className:"block h-6 w-6","aria-hidden":"true"})]})}),Object(l.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(l.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(l.jsx)(x.b,{className:"h-10 text-indigo-600 w-auto mx-3"}),Object(l.jsx)("h5",{className:" hidden lg:block w-auto text-2xl",children:"Operations Manager"})]}),Object(l.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(l.jsx)("div",{className:"flex space-x-4",children:j.map((function(e){return Object(l.jsx)(c.b,{to:e.href,className:p(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]}),Object(l.jsx)("div",{className:" hidden lg:block w-auto",children:"".concat(a.name," ").concat(a.surname)}),Object(l.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:Object(l.jsx)("button",{type:"button",onClick:m,className:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:"Log Out"})})]})}),Object(l.jsx)(u.a.Panel,{className:"sm:hidden",children:Object(l.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:j.map((function(e){return Object(l.jsx)(u.a.Button,{as:"Link",to:e.href,className:p(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})}}),t]})},g=n(20),f=n(22),O=n(45),y=function(e){var t=e.page,n=e.size,a=e.cantOperations,r=Object(i.g)(),o={prev:(t+1)*n-n+1,next:(t+1)*n};return Object(s.useEffect)((function(){a%n===0&&o.prev>10&&r.push("/?page=".concat(t-1,"&size=").concat(n))}),[a]),Object(l.jsx)(l.Fragment,{children:a>0&&Object(l.jsxs)("div",{className:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",children:[a>10&&Object(l.jsxs)("div",{className:" container relative sm:hidden",children:[o.prev>=10&&Object(l.jsx)(c.b,{to:{pathname:"/",search:"?page=".concat(t-1,"&size=").concat(n)},className:"absolute items-center left-0 px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50",children:"Previous"}),o.next<a&&Object(l.jsx)(c.b,{to:{pathname:"/",search:"?page=".concat(t+1,"&size=").concat(n)},className:"ml-3 absolute right-0 items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50",children:"Next"})]}),Object(l.jsxs)("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("p",{className:"text-sm text-gray-700",children:["Showing ",Object(l.jsx)("span",{className:"font-medium",children:o.prev})," to ",Object(l.jsx)("span",{className:"font-medium",children:"".concat(o.next<a?o.next:a)})," of"," ",Object(l.jsx)("span",{className:"font-medium",children:a})," operations"]})}),Object(l.jsx)("div",{children:a>10&&Object(l.jsxs)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[o.prev>=10&&Object(l.jsxs)(c.b,{to:{pathname:"/",search:"?page=".concat(t-1,"&size=").concat(n)},className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50",children:[Object(l.jsx)("span",{className:"sr-only",children:"Previous"}),Object(l.jsx)(x.c,{className:"h-5 w-5","aria-hidden":"true"})]}),o.next<a&&Object(l.jsxs)(c.b,{to:{pathname:"/",search:"?page=".concat(t+1,"&size=").concat(n)},className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-indigo-600 bg-white text-sm font-medium text-indigo-600 hover:bg-gray-50",children:[Object(l.jsx)("span",{className:"sr-only",children:"Next"}),Object(l.jsx)(x.d,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]})})},v=n(81),w=n(80),N=function(e){var t=e.modalText,n=e.open,a=e.setOpen,r=e.handleConfirm,c=e.type,i=Object(s.useRef)(null);return Object(l.jsx)(v.a.Root,{show:n,as:s.Fragment,children:Object(l.jsx)(w.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:i,onClose:function(){},children:Object(l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-60 text-center sm:block sm:p-0",children:[Object(l.jsx)(v.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(l.jsx)(w.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(l.jsx)(v.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(l.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(l.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(l.jsxs)("div",{className:"sm:flex sm:items-start",children:[Object(l.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ".concat("delete"===c?"bg-red-100":"bg-green-100"," sm:mx-0 sm:h-10 sm:w-10"),children:"delete"===c?Object(l.jsx)(b.a,{className:"h-6 w-6 text-red-600","aria-hidden":"true"}):Object(l.jsx)(x.a,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),Object(l.jsx)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:Object(l.jsx)("div",{className:"mt-2",children:Object(l.jsx)("p",{className:"text-sm text-gray-500",children:t})})})]})}),Object(l.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:["delete"===c?Object(l.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return r()},children:"Delete"}):Object(l.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:green-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return r()},children:"Accept"}),"delete"===c&&Object(l.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return a(!1)},ref:i,children:"Cancel"})]})]})})]})})})},k=function(e){var t=e.operationList,n=e.onEdit,s=e.setOpen,a=e.setDeleteId;return Object(l.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:e.concept}),Object(l.jsxs)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:["Expense"===e.type&&Object(l.jsx)(l.Fragment,{children:"-"}),"$",e.amount]}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:"Expense"===e.type?Object(l.jsx)("strong",{className:" text-red-500",children:e.type}):Object(l.jsx)("strong",{className:" text-green-500",children:e.type})}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap",children:e.date}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap text-center text-sm font-medium",children:Object(l.jsx)("button",{className:" w-20 bg-red-600 text-white rounded-lg p-1",onClick:function(){s(!0),a(e.id)},children:"Delete"})}),Object(l.jsx)("td",{className:"px-3 sm:px-6 py-4 whitespace-nowrap text-center text-sm font-medium",children:Object(l.jsx)("button",{className:"text-indigo-600 hover:text-indigo-900",onClick:function(){return n(e)},children:"Edit"})})]},e.id)}))})},C=function(e){var t=e.operationList,n=e.setOperationList,a=e.onDelete,r=e.onEdit,c=e.cantOperations,i=e.page,d=e.size,m=Object(s.useState)(null),u=Object(o.a)(m,2),b=u[0],j=u[1],p=Object(s.useState)(!1),h=Object(o.a)(p,2),g=h[0],f=h[1],v=Object(s.useState)(!1),w=Object(o.a)(v,2),C=w[0],S=w[1],I=Object(s.useState)(!1),F=Object(o.a)(I,2),z=F[0],E=F[1],L=Object(s.useState)(!1),P=Object(o.a)(L,2),T=P[0],D=P[1],U=Object(s.useState)(!1),A=Object(o.a)(U,2),R=A[0],q=A[1],B=function(e,s,a){var r=e.target.getAttribute("name"),c=t.sort((function(e,t){return e[r]>t[r]?1:t[r]>e[r]?-1:0})),i=Object(O.a)(t).reverse();a(!s),n(s?c:i)};return Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(l.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(l.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(l.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 text-xs sm:text-lg table-auto",children:[Object(l.jsx)("thead",{className:"bg-indigo-600",children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left  text-white uppercase tracking-wider",children:["Concept",C?Object(l.jsx)(x.g,{name:"concept",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,C,S)}}):Object(l.jsx)(x.h,{name:"concept",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,C,S)}})]}),Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider",children:["Amount",z?Object(l.jsx)(x.g,{name:"amount",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,z,E)}}):Object(l.jsx)(x.h,{name:"amount",className:"h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,z,E)}})]}),Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider",children:["Type",T?Object(l.jsx)(x.g,{name:"type",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,T,D)}}):Object(l.jsx)(x.h,{name:"type",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,T,D)}})]}),Object(l.jsxs)("th",{scope:"col",className:"px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider",children:["Date",R?Object(l.jsx)(x.g,{name:"date",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,R,q)}}):Object(l.jsx)(x.h,{name:"date",className:" h-6 sm:h-10 cursor-pointer",onClick:function(e){B(e,R,q)}})]}),Object(l.jsx)("th",{scope:"col",className:"relative px-3 sm:px-6 py-3",children:Object(l.jsx)("span",{className:"sr-only",children:"Delete"})}),Object(l.jsx)("th",{scope:"col",className:"relative px-3 sm:px-6 py-3",children:Object(l.jsx)("span",{className:"sr-only",children:"Edit"})})]})}),Object(l.jsx)(k,{operationList:t,onEdit:r,setOpen:f,setDeleteId:j})]})})})}),Object(l.jsx)(y,{cantOperations:c,page:i,size:d}),Object(l.jsx)(N,{modalText:"Are you sure you want to delete this operation?",open:g,setOpen:f,handleConfirm:function(){a(b),j(null),f(!1)},type:"delete"})]})},S=function(e){var t=e.newOperationItem,n=e.onSubmit,a=e.onChange,r=e.isEdit,c=e.setIsEdit,i=e.isOpen,o=e.setIsOpen,d=Object(s.useRef)(null);return Object(l.jsx)(v.a.Root,{show:i,as:s.Fragment,children:Object(l.jsx)(w.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:d,onClose:function(){},children:Object(l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-60 text-center sm:block sm:p-0",children:[Object(l.jsx)(v.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(l.jsx)(w.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(l.jsx)(v.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(l.jsxs)("form",{className:"p-5 inline-flex flex-col align-bottom bg-indigo-600 rounded-lg text-left overflow-hidden shadow-xl sm:translate-y-40 transform transition-all sm:my-5 sm:max-w-lg sm:w-full",onSubmit:n,children:[Object(l.jsx)("h1",{className:"mx-auto mb-4 text-xl text-white",children:r?Object(l.jsx)(l.Fragment,{children:"Please update the Operation"}):Object(l.jsx)(l.Fragment,{children:"Please insert a new Operation"})}),Object(l.jsx)("label",{className:"text-white",children:"Concept: "}),Object(l.jsx)("input",{placeholder:"Example: Youtube",className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",name:"concept",value:t.concept,onChange:a}),Object(l.jsx)("label",{className:"text-white",children:"Amount: "}),Object(l.jsx)("input",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",type:"number",name:"amount",value:t.amount,onChange:a}),Object(l.jsx)("label",{className:"text-white",children:"Type: "}),Object(l.jsxs)("select",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",defaultValue:t.type,name:"type",onChange:a,disabled:r,children:[Object(l.jsx)("option",{value:"Income",children:"Income"}),Object(l.jsx)("option",{value:"Expense",children:"Expense"})]}),Object(l.jsx)("label",{className:"text-white",children:"Date: "}),Object(l.jsx)("input",{className:"mb-4 h-7 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-12 sm:text-lg border-gray-300 rounded-md",type:"date",name:"date",value:t.date,onChange:a}),Object(l.jsxs)("div",{className:"flex justify-around m-4 text-white",children:[Object(l.jsx)("button",{className:"w-20  ".concat(r?"bg-indigo-400":"bg-green-500"," rounded-md p-1"),type:"submit",children:r?Object(l.jsx)(l.Fragment,{children:"Update"}):Object(l.jsx)(l.Fragment,{children:"Add"})}),Object(l.jsx)("button",{className:" w-20 bg-red-500 rounded-md p-1",type:"button",ref:d,onClick:function(){o(!1),setTimeout((function(){c(!1)}),200)},children:"Close"})]})]})})]})})})},I=n(7),F=n.n(I),z=n(15),E=n(18),L=n.n(E),P="".concat("http://localhost:4000","/api/operations"),T=function(){var e=Object(z.a)(F.a.mark((function e(t,n){var s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={headers:{authorization:sessionStorage.getItem("token")}},t){e.next=5;break}return e.abrupt("return",L.a.post(P,n,s).then((function(e){return e.data})));case 5:return e.abrupt("return",L.a.patch(P,n,s).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(z.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{authorization:sessionStorage.getItem("token")}},e.abrupt("return",L.a.delete(P+"/"+t,n).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U={getOperationList:function(){var e=Object(z.a)(F.a.mark((function e(t){var n,s,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{authorization:sessionStorage.getItem("token")}},e.next=4,L.a.get(P+"/userOperations?"+t,n);case 4:return s=e.sent,a=s.data,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),deleteOperationItem:D,submitOperationItem:T};function A(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],r={concept:"",amount:0,type:"Income",date:""},c=Object(s.useState)([]),d=Object(o.a)(c,2),m=d[0],u=d[1],b=Object(s.useState)(r),j=Object(o.a)(b,2),p=j[0],h=j[1],O=Object(s.useState)(!1),y=Object(o.a)(O,2),v=y[0],w=y[1],N=Object(s.useState)(!1),k=Object(o.a)(N,2),I=k[0],F=k[1],z=Object(s.useState)(!1),E=Object(o.a)(z,2),L=E[0],P=E[1],T=Object(s.useState)(0),D=Object(o.a)(T,2),A=D[0],R=D[1],q=Object(i.h)(),B=new URLSearchParams(q.search),J=parseInt(B.get("page"))||0,V=parseInt(B.get("size"))||10;B.set("page",J),B.set("size",V),console.log(B.toString());var Y=Object(s.useState)(B.toString()),M=Object(o.a)(Y,2),$=M[0],G=M[1];Object(s.useEffect)((function(){G(new URLSearchParams(q.search)),F(!I)}),[G,q]),Object(s.useEffect)((function(){U.getOperationList($).then((function(e){var t=e||{},n=t.rows,s=t.count;R(s),u(null===n||void 0===n?void 0:n.map((function(e){return null==e.date&&(e.date=""),e}))),a(H(n))}))}),[I,$]);var H=function(e){var t=0;return null===e||void 0===e||e.forEach((function(e){var n=parseInt(e.amount);"Income"===e.type?t+=n:t-=n})),t};return Object(l.jsx)("div",{className:"container sm:mx-auto  text-gray-900",children:Object(l.jsxs)("div",{className:"sm:m-10 m-1",children:[Object(l.jsxs)("div",{className:" flex flex-col m-8",children:[Object(l.jsxs)("h1",{className:"m-auto text-lg sm:text-3xl",children:["Your balance is",Object(l.jsxs)("strong",{className:"".concat(n>=0?"text-green-500":"text-red-500"),children:[" ",n]})]}),Object(l.jsx)("div",{className:"m-auto",children:Object(l.jsx)(x.f,{className:" cursor-pointer h-10 text-indigo-600",onClick:function(){h(r),w(!v)}})})]}),Object(l.jsx)(S,{onSubmit:function(e){e.preventDefault(),U.submitOperationItem(L,p).then((function(e){P(!1),F(!I),w(!v),h(r)}))},onChange:function(e){h(Object(f.a)(Object(f.a)({},p),{},Object(g.a)({},e.target.name,e.target.value)))},newOperationItem:p,isEdit:L,isOpen:v,setIsOpen:w,setIsEdit:P}),Object(l.jsx)(C,{setOperationList:u,operationList:m,onEdit:function(e){P(!L),w(!v),h(e)},onDelete:function(e){U.deleteOperationItem(e).then((function(e){F(!I)}))},page:J,size:V,cantOperations:A})]})})}var R=function(e){var t=e.onSubmit,n=e.setUsername,s=e.setPassword,a=e.error,r=e.setError;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)(x.b,{className:" h-48 w-48 m-auto text-indigo-600"}),Object(l.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Log in to your account"})]}),Object(l.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:t,children:[a&&Object(l.jsx)("div",{className:" bg-red-500 text-center p-2 text-white",children:a}),Object(l.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(l.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Username"}),Object(l.jsx)("input",{name:"username",autoComplete:"current-username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",onChange:function(e){r(!1),n(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Password"}),Object(l.jsx)("input",{name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:function(e){r(!1),s(e.target.value)}})]})]}),Object(l.jsxs)("div",{className:"flex items-center justify-between",children:[Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),Object(l.jsx)("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),Object(l.jsx)("div",{className:"text-sm",children:Object(l.jsx)("a",{href:"/",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Forgot your password?"})})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Log in"}),Object(l.jsxs)("div",{className:"text-lg text-center m-2",children:["New user?"," ",Object(l.jsx)(c.b,{to:"/register",className:" text-lg text-indigo-600 hover:text-indigo-500",children:"Sign Up"})]})]})]})]})})})},q="".concat("http://localhost:4000","/api/users/login"),B=function(){var e=Object(z.a)(F.a.mark((function e(t){var n,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post(q,t);case 3:return n=e.sent,s=n.data,console.log(s),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(o.a)(r,2),m=c[0],u=c[1],b=Object(s.useState)(!1),x=Object(o.a)(b,2),j=x[0],p=x[1],h=Object(i.g)(),g=Object(s.useContext)(d).signin,f=function(){var e=Object(z.a)(F.a.mark((function e(t){var s,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),s={username:n,password:m},e.next=5,B(s);case 5:a=e.sent,(r=a.data).token?(g(r),h.push("/")):p(r.errors),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(R,{onSubmit:f,setUsername:a,setPassword:u,error:j,setError:p})},V="".concat("http://localhost:4000","/api/users/register"),Y=function(){var e=Object(z.a)(F.a.mark((function e(t){var n,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post(V,t);case 3:return n=e.sent,s=n.data,e.abrupt("return",s);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.onSubmit,n=e.handleUser,s=e.error;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Object(l.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)(x.b,{className:" h-48 w-48 m-auto text-indigo-600"}),Object(l.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"})]}),Object(l.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:t,children:[s&&Object(l.jsx)("div",{className:" bg-red-500 text-center p-2 text-white",children:s}),Object(l.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(l.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Name"}),Object(l.jsx)("input",{name:"name",autoComplete:"current-name",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Name",onChange:n})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Surname"}),Object(l.jsx)("input",{name:"surname",autoComplete:"current-name",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Surname",onChange:n})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Username"}),Object(l.jsx)("input",{name:"username",autoComplete:"current-username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",onChange:n})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"sr-only",children:"Password"}),Object(l.jsx)("input",{name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:n})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(l.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(l.jsx)(x.e,{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})}),"Sign up"]}),Object(l.jsxs)("div",{className:"text-lg text-center m-2",children:["Already have an account?"," ",Object(l.jsx)(c.b,{to:"/login",className:" text-lg text-indigo-600 hover:text-indigo-500",children:"Log In"})]})]})]})]})})})},$=function(){var e=Object(s.useState)({name:"",surname:"",username:"",password:""}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(i.g)(),c=Object(s.useState)(!1),d=Object(o.a)(c,2),m=d[0],u=d[1],b=Object(s.useState)(""),x=Object(o.a)(b,2),j=x[0],p=x[1],h=function(){var e=Object(z.a)(F.a.mark((function e(t){var s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,Y(n);case 4:s=e.sent,s.data&&u(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p("This username has been used");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(M,{onSubmit:h,handleUser:function(e){a(Object(f.a)(Object(f.a)({},n),{},Object(g.a)({},e.target.name,e.target.value))),p(""),console.log(n)},error:j}),Object(l.jsx)(N,{modalText:"User registered successfully",open:m,setOpen:m,handleConfirm:function(){u(!1),r.push("/login")},type:"confirm"})]})};function G(){var e=Object(s.useContext)(d).isAuth;return Object(l.jsx)(c.a,{children:Object(l.jsx)(i.d,{children:e?Object(l.jsxs)(h,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",component:A}),Object(l.jsx)(i.b,{exact:!0,path:"/login",component:function(){return Object(l.jsx)(i.a,{to:"/"})}}),Object(l.jsx)(i.b,{exact:!0,path:"/register",component:function(){return Object(l.jsx)(i.a,{to:"/"})}})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/login",component:J}),Object(l.jsx)(i.b,{exact:!0,path:"/register",component:$}),Object(l.jsx)(i.b,{exact:!0,path:"/",component:function(){return Object(l.jsx)(i.a,{to:"/login"})}})]})})})}n(78);r.a.render(Object(l.jsx)(m,{children:Object(l.jsx)(G,{})}),document.getElementById("app"))}},[[79,1,2]]]);
//# sourceMappingURL=main.679e26be.chunk.js.map