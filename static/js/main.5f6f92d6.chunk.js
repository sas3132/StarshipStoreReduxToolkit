(this.webpackJsonpstoretoolkit=this.webpackJsonpstoretoolkit||[]).push([[0],{101:function(e,t,r){e.exports={coverFalcon:"Advertising_coverFalcon__2guj5",centeredText:"Advertising_centeredText__MVIxH"}},11:function(e,t,r){e.exports={cartDrawer:"Cart_cartDrawer__1eCZK",cart:"Cart_cart__174xz",items:"Cart_items__1geS0",orderProcessContainer:"Cart_orderProcessContainer__3Mr6s",orderProcess:"Cart_orderProcess__1GvUz",itemOrder:"Cart_itemOrder__zK4aK",NameItem:"Cart_NameItem__3eWeB",item:"Cart_item__22tsK",itemImg:"Cart_itemImg__3ABox",delNameItem:"Cart_delNameItem__aZAe8",totalCred:"Cart_totalCred__1S5Bt",buttonCheckout:"Cart_buttonCheckout__34Wdb"}},164:function(e,t,r){},30:function(e,t,r){e.exports={container:"Header_container__Dnjgf",logoImg:"Header_logoImg__p2VeN",titleHome:"Header_titleHome__2-iM_",orders:"Header_orders__3ZOUf",imgCart:"Header_imgCart__17uvC",cartBlock:"Header_cartBlock__3FKwe",searchForm:"Header_searchForm__zdoGq",searchField:"Header_searchField__1u4PI","search-submit":"Header_search-submit__2snP3"}},36:function(e,t,r){e.exports={footer:"Footer_footer__2wUcz",footerContainer:"Footer_footerContainer__2da_i",contactBlock:"Footer_contactBlock__2z42r",contactImg:"Footer_contactImg__3SmUh",gitImg:"Footer_gitImg__PW7x8",telegImg:"Footer_telegImg__3ItZY",dateBlock:"Footer_dateBlock__Jn-Az"}},43:function(e,t,r){e.exports={productsItem:"ProductItem_productsItem__2kfnc",productsImg:"ProductItem_productsImg__3gM-y",productName:"ProductItem_productName__1ZzRs",productDescription:"ProductItem_productDescription__jmQ5q",productButton:"ProductItem_productButton__3o7Ip",productInfo:"ProductItem_productInfo__1BKsB"}},487:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),s=r(28),n=r.n(s),o=(r(164),r(35)),i=r(160),d=r(23),l=r.n(d),m=r(40),j=r(29),u=r(30),b=r.n(u),h=(r(104),r(48)),O=r(2),p=function(e){var t=e.hideShowCart,r=e.changeSearchInput,c=e.searchValue,s=(e.setSearchValue,Object(a.useContext)(V).cartItems.reduce((function(e,t){return e+t.cost}),0));return Object(O.jsx)("header",{className:b.a.header,children:Object(O.jsxs)("div",{className:b.a.container,children:[Object(O.jsx)(h.b,{to:"/",children:Object(O.jsx)("div",{className:b.a.logoImg,children:Object(O.jsx)("img",{src:"/img/logo.png",alt:"logo"})})}),Object(O.jsx)("div",{className:b.a.titleHome,children:Object(O.jsx)("h1",{children:"StarshipStore"})}),Object(O.jsx)("div",{className:b.a.searchForm,children:Object(O.jsx)("label",{children:Object(O.jsx)("input",{style:""===c?{width:null}:{width:"230px"},onChange:r,value:c,type:"search",className:b.a.searchField,placeholder:"Search"})})}),Object(O.jsx)(h.b,{to:"/orders",children:Object(O.jsx)("img",{className:b.a.orders,src:"/img/order.svg",alt:"order"})}),Object(O.jsxs)("div",{className:b.a.cartBlock,onClick:t,children:[Object(O.jsx)("img",{className:b.a.imgCart,src:"/img/cart.svg",alt:"cart"}),Object(O.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[s.toLocaleString()," cred."]})]})]})})},x=r(11),g=r.n(x),_=r(25),f=r.n(_);var v=function(e){var t=e.removeItemCart,r=(e.showCart,Object(a.useState)(!1)),c=Object(j.a)(r,2),s=c[0],n=c[1],o=Object(a.useState)(null),i=Object(j.a)(o,2),d=i[0],u=i[1],b=Object(a.useContext)(V),h=b.setCartItems,p=b.cartItems,x=(b.hideShowCart,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new Date,r=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),c=t.getFullYear();return e+r+a+c}),_=function(){var e=Object(m.a)(l.a.mark((function e(){var t,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(p.length>0)){e.next=17;break}return e.next=4,f.a.post("https://612e1f69d11e5c00175583a2.mockapi.io/orders",{date:x(),item:p});case 4:t=e.sent,r=t.data,u(r.id),h([]),a=0;case 9:if(!(a<p.length)){e.next=17;break}return c=p[a],e.next=13,f.a.delete("https://612e1f69d11e5c00175583a2.mockapi.io/cart/"+c.id).then();case 13:n(!0);case 14:a++,e.next=9;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430");case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),v=p.reduce((function(e,t){return e+t.cost}),0);return Object(O.jsx)("div",{className:g.a.cartDrawer,children:Object(O.jsxs)("div",{className:g.a.cart,children:[Object(O.jsx)("h2",{children:"Cart"}),s?Object(O.jsxs)("div",{className:g.a.orderProcessContainer,children:[" ",Object(O.jsx)("div",{className:g.a.orderProcess,children:Object(O.jsxs)("div",{className:g.a.itemOrder,children:[Object(O.jsx)("img",{src:"/img/noOrders.png",alt:"orderImg"}),Object(O.jsx)("section",{className:g.a.NameItem,children:Object(O.jsxs)("p",{className:g.a.nameItemP,children:["Prepare you money, Order \u2116 ",x(d)," is processed"]})})]})})," "]}):Object(O.jsx)("div",{className:g.a.items,children:p.map((function(e,r){return Object(O.jsxs)("div",{className:g.a.item,children:[Object(O.jsx)("img",{className:g.a.itemImg,src:e.img,alt:""}),Object(O.jsxs)("section",{className:g.a.delNameItem,children:[Object(O.jsx)("p",{className:g.a.delNameItemP,children:e.name}),Object(O.jsx)("img",{onClick:function(){return t(e.id)},className:g.a.delItemCart,src:"/img/delItemCart.svg",alt:""})]})]},e.cost+r)}))}),Object(O.jsxs)("p",{className:g.a.totalCred,children:["Total: ",v.toLocaleString()," cred."]}),Object(O.jsx)("button",{onClick:_,className:g.a.buttonCheckout,children:"Checkout"})]})})},I=r(36),C=r.n(I),N=function(){return Object(O.jsx)("footer",{className:C.a.footer,children:Object(O.jsxs)("div",{className:C.a.footerContainer,children:[Object(O.jsx)("div",{className:C.a.contactBlock,children:Object(O.jsxs)("div",{className:C.a.contactImg,children:[Object(O.jsx)("img",{className:C.a.gitImg,src:"/img/gitFoote.svg",alt:"git"}),Object(O.jsx)("img",{className:C.a.telegImg,src:"/img/telegFooter.svg",alt:"telegram"})]})}),Object(O.jsx)("div",{className:C.a.dateBlock,children:Object(O.jsx)("p",{children:"Designed and developed by Sas31 \xa9 2021. StarshipStore."})})]})})},k=r(43),S=r.n(k),w=function(e){var t=e.id,r=e.name,c=e.description,s=e.cost,n=e.img,o=e.addOnCart,i=e.showOrders,d=Object(a.useContext)(V).itemAddOnCart;return Object(O.jsxs)("div",{className:S.a.productsItem,children:[Object(O.jsx)("div",{className:S.a.productsImg,children:Object(O.jsx)("img",{src:n,alt:"imgStarS"})}),Object(O.jsxs)("div",{className:S.a.productInfo,children:[Object(O.jsx)("b",{className:S.a.productName,children:r}),Object(O.jsxs)("p",{className:S.a.productDescription,children:["Speed: ",c.speed," km/h",Object(O.jsx)("br",{}),"Class: ",c.class,Object(O.jsx)("br",{}),"Hyperdrive Rating: ",c.rating]}),Object(O.jsxs)("div",{className:S.a.productButton,children:[Object(O.jsxs)("b",{children:["Cost: ",s.toLocaleString()," credits"]}),i?null:Object(O.jsx)("img",{onClick:function(){o({id:t,parentId:t,name:r,description:c,cost:s,img:n})},src:d(t)?"/img/productOnCart.svg":"/img/buttonBuy1.svg",alt:"buy"})]})]})]})},y=r(101),F=r.n(y),P=r(494),B=r(492),H=(r(484),r(485),r(486),r(493)),D=r(489),z=r(490),A=r(491);H.a.use([D.a,z.a,A.a]);var K=function(){return Object(O.jsxs)(P.a,{className:F.a.coverFalcon,pagination:{clickable:!0},autoplay:{delay:1e4,disableOnInteraction:!1},loop:!0,navigation:!1,style:{"--swiper-navigation-color":"#861410",marginLeft:0,marginRight:0,zIndex:0},children:[Object(O.jsxs)("div",{className:F.a.centeredText,children:["Buy now ",Object(O.jsx)("span",{style:{color:"#D4E3EA",whiteSpace:"nowrap"},children:" Fly now"})]}),Object(O.jsx)(B.a,{children:Object(O.jsx)("img",{src:"/img/cover1.jpg",alt:"buy"})}),Object(O.jsx)(B.a,{children:Object(O.jsx)("img",{src:"/img/cover.jpg",alt:"buy"})}),Object(O.jsx)(B.a,{children:Object(O.jsx)("img",{src:"/img/cover2.jpg",alt:"buy"})})]})},E=r(8),J=r(50),L=r.n(J),M=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],s=Object(a.useContext)(V).itemSearch;return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://612e1f69d11e5c00175583a2.mockapi.io/orders").then();case 3:t=e.sent,r=t.data,c(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Orders loading error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.length>0?Object(O.jsx)("div",{className:L.a.orders,children:r.map((function(e,t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:["Order \u2116 ",e.id+e.date]}),Object(O.jsx)("div",{className:"productsItems",children:s(e.item).map((function(e,t){return Object(O.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{showOrders:r}),e.cost+t)}))})]})}))}):Object(O.jsx)("div",{className:L.a.noOrders,children:Object(O.jsxs)("div",{className:L.a.itemOrder,children:[Object(O.jsx)("img",{src:"/img/noOrderPage.png",alt:"orderImg"}),Object(O.jsx)("section",{className:L.a.NameItem,children:Object(O.jsx)("p",{className:L.a.nameItemP,children:"No orders"})})]})})},V=Object(a.createContext)({});var Z=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(!1),n=Object(j.a)(s,2),d=n[0],u=n[1],b=Object(a.useState)([]),h=Object(j.a)(b,2),x=h[0],g=h[1],_=Object(a.useState)(""),I=Object(j.a)(_,2),C=I[0],k=I[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://612e1f69d11e5c00175583a2.mockapi.io/cart").then();case 3:return t=e.sent,e.next=6,f.a.get("https://612e1f69d11e5c00175583a2.mockapi.io/items").then();case 6:r=e.sent,g(t.data),c(r.data),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),alert("Data loading error"),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=function(){u((function(e){return!e})),d?document.body.removeAttribute("style"):document.body.style.overflow="hidden"},y=function(){var e=Object(m.a)(l.a.mark((function e(t){var r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=x.find((function(e){return+e.parentId===+t.id})))){e.next=8;break}return g((function(e){return e.filter((function(e){return+e.parentId!==+t.id}))})),e.next=6,f.a.delete("https://612e1f69d11e5c00175583a2.mockapi.io/cart/".concat(r.id)).then();case 6:e.next=14;break;case 8:return g((function(e){return[].concat(Object(i.a)(e),[t])})),e.next=11,f.a.post("https://612e1f69d11e5c00175583a2.mockapi.io/cart",t).then();case 11:a=e.sent,c=a.data,g((function(e){return e.map((function(e){return e.parentId===c.parentId?Object(o.a)(Object(o.a)({},e),{},{id:c.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e){return e.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}))};return Object(O.jsx)(V.Provider,{value:{setCartItems:g,itemAddOnCart:function(e){return x.some((function(t){return+t.parentId===+e}))},cartItems:x,itemSearch:F,hideShowCart:S,setShowCart:u},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[d&&Object(O.jsx)(v,{showCart:d,cartItems:x,removeItemCart:function(e){try{f.a.delete("https://612e1f69d11e5c00175583a2.mockapi.io/cart/".concat(e)).then(),g((function(t){return t.filter((function(t){return+t.id!==+e}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}}}),Object(O.jsx)(p,{hideShowCart:S,changeSearchInput:function(e){return k(e.target.value)},searchValue:C}),Object(O.jsxs)("main",{className:"main",children:[Object(O.jsxs)(E.a,{path:"/",exact:!0,children:[Object(O.jsx)(K,{}),Object(O.jsx)("div",{className:"productsItems",children:F(r).map((function(e,t){return Object(O.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{addOnCart:y}),e.cost+t)}))})]}),Object(O.jsx)(E.a,{path:"/orders",children:Object(O.jsx)(M,{})})]}),Object(O.jsx)(N,{})]})})};n.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(Z,{})})}),document.getElementById("root"))},50:function(e,t,r){e.exports={orders:"Orders_orders__1KDJg",noOrders:"Orders_noOrders__2EyJG",itemOrder:"Orders_itemOrder__2zzyJ",NameItem:"Orders_NameItem__1OaV2"}}},[[487,1,2]]]);
//# sourceMappingURL=main.5f6f92d6.chunk.js.map