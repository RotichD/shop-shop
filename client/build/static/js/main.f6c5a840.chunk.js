(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},76:function(e,t,a){e.exports=a(90)},81:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(60),l=a.n(c),o=(a(81),a(12)),i=a(11),s=a(8),m=a(69),u=a(98),d=a(100),p=a(97),E=a(68),g=a(14),f=a(101),b=a(70),v=a(54),h=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(o.a)(Object(o.a)({},e),{},{products:Object(v.a)(t.products)});case"UPDATE_CATEGORIES":return Object(o.a)(Object(o.a)({},e),{},{categories:Object(v.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(o.a)(Object(o.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var w=["value"],y=Object(n.createContext)(),O=y.Provider,j=function(e){e.value;var t,a=Object(b.a)(e,w),c=(t={products:[],categories:[],currentCategory:""},Object(n.useReducer)(h,t)),l=Object(g.a)(c,2),o=l[0],i=l[1];return console.log(o),r.a.createElement(O,Object.assign({value:[o,i]},a))},N=function(){return Object(n.useContext)(y)};var k,x,S,_,C=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,l=e.quantity;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,l," ",function(e,t){return 1===t?e:e+"s"}("item",l)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",null,"Add to cart"))},T=a(27),P=a(99),D=Object(P.a)(k||(k=Object(T.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),$=(Object(P.a)(x||(x=Object(T.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(P.a)(S||(S=Object(T.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),A=Object(P.a)(_||(_=Object(T.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),U=a(44),R=a.n(U);var F=function(){var e=N(),t=Object(g.a)(e,2),a=t[0],c=t[1],l=a.currentCategory,o=Object(f.a)(D),i=o.loading,s=o.data;return Object(n.useEffect)((function(){s&&c({type:"UPDATE_PRODUCTS",products:s.products})}),[s,c]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),a.products.length?r.a.createElement("div",{className:"flex-row"},(l?a.products.filter((function(e){return e.category._id===l})):a.products).map((function(e){return r.a.createElement(C,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),i?r.a.createElement("img",{src:R.a,alt:"loading"}):null)};var I=function(){var e=N(),t=Object(g.a)(e,2),a=t[0],c=t[1],l=a.categories,o=Object(f.a)($).data;return Object(n.useEffect)((function(){o&&c({type:"UPDATE_CATEGORIES",categories:o.categories})}),[o,c]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),l.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},q=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(I,null),r.a.createElement(F,null))};var L=function(){var e=N(),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(s.f)().id,o=Object(n.useState)({}),m=Object(g.a)(o,2),u=m[0],d=m[1],p=Object(f.a)(D),E=p.loading,b=p.data,v=a.products;return Object(n.useEffect)((function(){v.length?d(v.find((function(e){return e._id===l}))):b&&c({type:"UPDATE_PRODUCTS",products:b.products})}),[v,b,c,l]),r.a.createElement(r.a.Fragment,null,u?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,u.name),r.a.createElement("p",null,u.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",u.price," ",r.a.createElement("button",null,"Add to Cart"),r.a.createElement("button",null,"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(u.image),alt:u.name})):null,E?r.a.createElement("img",{src:R.a,alt:"loading"}):null)};var W,G,B,H=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},Y=function(){return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},J=a(33),z=a(34),M=a.n(z),K=a(46),Q=a(103),V=Object(P.a)(W||(W=Object(T.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),X=(Object(P.a)(G||(G=Object(T.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(P.a)(B||(B=Object(T.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),Z=a(65),ee=a(66),te=a(52),ae=a.n(te),ne=new(function(){function e(){Object(Z.a)(this,e)}return Object(ee.a)(e,[{key:"getProfile",value:function(){return ae()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ae()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var re=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(g.a)(t,2),c=a[0],l=a[1],s=Object(Q.a)(V),m=Object(g.a)(s,2),u=m[0],d=m[1].error,p=function(){var e=Object(K.a)(M.a.mark((function e(t){var a,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,ne.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;l(Object(o.a)(Object(o.a)({},c),{},Object(J.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ce=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(g.a)(t,2),c=a[0],l=a[1],s=Object(Q.a)(X),m=Object(g.a)(s,1)[0],u=function(){var e=Object(K.a)(M.a.mark((function e(t){var a,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,ne.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;l(Object(o.a)(Object(o.a)({},c),{},Object(J.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var le=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,ne.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return ne.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var oe=function(){var e,t=Object(f.a)(A).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,l=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",l)))}))))}))):null))},ie=Object(m.a)({uri:"/graphql"}),se=Object(E.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),me=new u.a({link:se.concat(ie),cache:new d.a});var ue=function(){return r.a.createElement(p.a,{client:me},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(j,null,r.a.createElement(le,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:q}),r.a.createElement(s.a,{exact:!0,path:"/login",component:re}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:ce}),r.a.createElement(s.a,{exact:!0,path:"/orderHistory",component:oe}),r.a.createElement(s.a,{exact:!0,path:"/products/:id",component:L}),r.a.createElement(s.a,{component:Y}))))))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pe(t,e)}))}}()}},[[76,1,2]]]);
//# sourceMappingURL=main.f6c5a840.chunk.js.map