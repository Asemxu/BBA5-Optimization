(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[19],{108:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return i})),t.d(a,"d",(function(){return n})),t.d(a,"e",(function(){return r}));var s=t.p+"static/media/carrito.bbec7919.webp",c=t.p+"static/media/casita.4c931af2.webp",i=t.p+"static/media/resbaladera.d3c26f7a.webp",n=t.p+"static/media/scooter.559e01c7.webp",r=t.p+"static/media/torre.639280f5.webp"},218:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(10),i=t(18),n=t(30),r=t(84),o=t(20),l=t(85),m=t(31),d=t(82),j=t(81),b=t(1),u=function(){var e=Object(c.b)();return Object(b.jsxs)(r.a,{showAvatars:!0,nameAvatars:j.a.logos,children:[Object(b.jsx)(l.a,{name:j.b.mainAvatars}),Object(b.jsxs)("div",{className:"content__main d-flex flex-column align-self-center",children:[Object(b.jsx)("div",{className:"content__title__md",children:Object(b.jsx)("h1",{className:"title__md",children:"Esta vez jugaremos con"})}),Object(b.jsxs)("div",{className:"main__content__avatars bg__light",children:[Object(b.jsx)("img",{src:d.f,alt:"Logo Paw Patrol La Pel\xedcula",title:"Logo Paw Patrol La Pel\xedcula",className:"logo__paw animate__animated animate__pulse"}),Object(b.jsx)("img",{src:m.h,alt:"Patrulla",title:"Patrulla",className:"img__team animate__animated animate__pulse"})]}),Object(b.jsx)("div",{className:"buttons",children:Object(b.jsx)(o.a,{isPrimary:!0,text:"Continuar",onClick:function(){i.a.event({category:"TUTORIAL AL REGISTRARSE",action:"Jugamos con (CONTINUAR)"}),e(Object(n.b)(1))}})})]})]})},g=t(108),O=function(){var e=Object(c.b)();return Object(b.jsxs)(r.a,{showAvatars:!1,children:[Object(b.jsx)(l.a,{name:j.b.goback,onClick:function(){return e(Object(n.b)(0))}}),Object(b.jsxs)("div",{className:"content__main d-flex flex-column align-self-center",children:[Object(b.jsx)("div",{className:"content__title__sm",children:Object(b.jsx)("h1",{className:"title__md",children:"\xa1Juega y participa del sorteo de uno de los 18 premios semanales!"})}),Object(b.jsx)("div",{className:"bg__light mt-3",children:Object(b.jsxs)("div",{className:"grid__awards",children:[Object(b.jsxs)("div",{className:"award",children:[Object(b.jsx)("div",{className:"white-image"}),Object(b.jsx)("img",{className:"award-image",alt:"Premio Carrito",src:g.a}),Object(b.jsx)("p",{children:"2 carritos"})]}),Object(b.jsxs)("div",{className:"award",children:[Object(b.jsx)("div",{className:"white-image"}),Object(b.jsx)("img",{className:"award-image",alt:"Premio Resbaladeras",src:g.c}),Object(b.jsx)("p",{children:"2 resbaladeras"})]}),Object(b.jsxs)("div",{className:"award",children:[Object(b.jsx)("div",{className:"white-image"}),Object(b.jsx)("img",{className:"award-image",alt:"Premios 2 Torres",src:g.e}),Object(b.jsx)("p",{children:"2 torres"})]}),Object(b.jsxs)("div",{className:"award",children:[Object(b.jsx)("div",{className:"white-image"}),Object(b.jsx)("img",{className:"award-image",alt:"Premio Scooter",src:g.d}),Object(b.jsx)("p",{children:"2 scooter"})]}),Object(b.jsxs)("div",{className:"award",children:[Object(b.jsx)("div",{className:"white-image"}),Object(b.jsx)("img",{className:"award-image",alt:"Premios casitas",src:g.b}),Object(b.jsx)("p",{children:"10 casitas"})]})]})}),Object(b.jsx)("div",{className:"buttons mt-5",children:Object(b.jsx)(o.a,{isPrimary:!0,text:"Continuar",onClick:function(){i.a.event({category:"TUTORIAL AL REGISTRARSE",action:"Premios (CONTINUAR)"}),e(Object(n.b)(2))}})})]})]})},x=t(6),h=t(34),_=t.n(h),f=t(24),p=t(41),N=t(33),v=Object(s.lazy)((function(){return Promise.resolve().then(t.bind(null,49))})),w=Object(s.lazy)((function(){return Promise.resolve().then(t.bind(null,50))})),P=function(){var e=Object(c.c)((function(e){return e.auth})).logged,a=e.num,t=e.registerStep,n=Object(c.c)((function(e){return e.information})),m=n.hasBallots,d=n.hasOpportunities,u=Object(c.b)(),g=Object(x.g)();Object(s.useEffect)((function(){JSON.parse(sessionStorage.getItem("ranking-item"))&&(g.push("/usuario/ranking"),sessionStorage.setItem("ranking-item",!1))}),[g]);return Object(b.jsxs)(r.a,{showAvatars:!1,children:[Object(b.jsx)(l.a,{name:j.b.menu,onClick:function(){return u(Object(f.g)(!0))}}),Object(b.jsxs)("div",{className:"wellcome d-flex justify-content-center flex-column mb-5",children:[Object(b.jsxs)("div",{className:"content__title",children:[Object(b.jsx)("img",{src:p.a,alt:"Hueso",title:"Hueso"}),Object(b.jsx)("h1",{className:"title__md mt-3",children:"\xa1Es momento de jugar!"})]}),Object(b.jsxs)("div",{className:"wellcome-content",children:[Object(b.jsx)("img",{src:N.a,alt:"Baby",title:"Baby",className:"animate__animated animate__pulse"}),Object(b.jsx)("p",{children:"Agrega el c\xf3digo de tu boleta para jugar mucho m\xe1s y ganar los premios de NINET"}),Object(b.jsx)(o.a,{text:"Agregar boleta",onClick:function(){i.a.event({category:"PRINCIPAL",action:"Agregar Boleta"}),_.a.track("AddPaymentInfo"),g.push("/usuario/agregar-boleta")}})]}),!d.loading&&Object(b.jsx)(o.a,{isPrimary:!0,text:d.is?"JUGAR":"M\xe1s Oportunidades",onClick:function(){var e="";d.is?e="Jugar":d.is||(e="M\xe1s Oportunidades"),i.a.event({category:"PRINCIPAL",action:e}),_.a.trackCustom("StartTrial",{value:"0.00",currency:"PEN",predicted_ltv:"0.00"}),!m&&d.is?u(Object(f.h)(!0)):m&&d.is?g.push("/usuario/personajes"):d.is||g.push("/usuario/compartir")}})]}),0===a&&0!==t&&1!==t&&5!==t&&Object(b.jsx)(w,{}),Object(b.jsx)(v,{})]})};a.default=function(){var e=Object(c.c)((function(e){return e.auth})).logged,a=e.num,t=e.registerStep;return Object(b.jsxs)(s.Fragment,{children:[0===a&&0===t&&Object(b.jsx)(u,{}),0===a&&1===t&&Object(b.jsx)(O,{}),0===a&&(2===t||3===t||4===t||5===t)&&Object(b.jsx)(P,{}),1===a&&Object(b.jsx)(P,{})]})}},81:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return c}));var s={chaseRubble:"Chase y Rubble",chaseMarshallSkye:"Chase, Marshall y Skye",chase:"Chase",logos:"Logos"},c={main:"Header Main",mainAvatars:"Header Avatars",goback:"Header Goback",goback2:"Header Goback 2",menu:"Header Menu"}},82:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"c",(function(){return c})),t.d(a,"e",(function(){return i})),t.d(a,"f",(function(){return n})),t.d(a,"b",(function(){return r})),t.d(a,"d",(function(){return o})),t.d(a,"g",(function(){return l}));var s=t.p+"static/media/logoBBA.ee17dfaa.webp",c=t.p+"static/media/logoNinet.d9422b19.webp",i=(t.p,t.p+"static/media/logoPaw.7cc2874a.webp"),n=t.p+"static/media/logoPaw2.28f94506.webp",r=t.p+"static/media/logoLightNickelodeon.9a31c83a.webp",o=t.p+"static/media/logoParamount.c06220b0.webp",l=t.p+"static/media/logoSpinMaster.77b4d61f.webp"},83:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"g",(function(){return c})),t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return n})),t.d(a,"d",(function(){return r})),t.d(a,"f",(function(){return o})),t.d(a,"e",(function(){return l}));var s=t.p+"static/media/chase_1.c3cc8854.webp",c=t.p+"static/media/rubble_1.c94be044.webp",i=t.p+"static/media/3_dogs.d06d5155.webp",n=t.p+"static/media/chase_2.26bc803b.webp",r=t.p+"static/media/chase_pts.ce2aeec1.webp",o=t.p+"static/media/dogs__share.16dc2e46.webp",l=t.p+"static/media/dos_perritos 1 (1).783195b3.webp"},84:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t(0);var s=t(83),c=t(82),i=t(81),n=t(1),r=function(e){var a=e.children,t=e.showAvatars,r=e.nameAvatars;return Object(n.jsxs)("div",{className:"container__main d-grid ".concat(t?"":"rows__2"," ").concat(t&&r===i.a.logos?"row__logos":""),children:[a,t&&r===i.a.chaseRubble&&Object(n.jsxs)("div",{className:"avatars d-flex justify-content-between align-items-center",children:[Object(n.jsx)("img",{src:s.a,alt:"Chase",title:"Chase",className:"animate__animated animate__pulse"}),Object(n.jsx)("img",{src:s.g,alt:"Rubble",title:"Rubble",className:"animate__animated animate__pulse"})]}),t&&r===i.a.chaseMarshallSkye&&Object(n.jsx)("div",{className:"avatars d-flex justify-content-center align-items-end",children:Object(n.jsx)("img",{src:s.c,alt:"Chase",title:"Skye, Chase y Marshall",className:"w-100 h-100 animate__animated animate__pulse"})}),t&&r===i.a.chase&&Object(n.jsx)("div",{className:"avatars d-flex justify-content-end align-items-end",children:Object(n.jsx)("img",{src:s.b,alt:"Chase",title:"Chase",className:"w-100-2 w-100 animate__animated animate__pulse"})}),t&&r===i.a.logos&&Object(n.jsxs)("div",{className:"logos d-flex gap-3 justify-content-center align-items-center",children:[Object(n.jsx)("img",{src:c.b,alt:"Logo Nickelodeon",title:"Logo Nickelodeon",className:"logo__nickelodeon"}),Object(n.jsx)("img",{src:c.d,alt:"Logo Paramount",title:"Logo Paramount"}),Object(n.jsx)("img",{src:c.g,alt:"Logo Spin Master",title:"Logo Spin Master"})]})]})};r.defaultProps={showAvatars:!0,nameAvatars:i.a.chaseRubble}},85:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t(0);var s=t(82),c=t(81),i=t(29),n=t(1),r=function(e){var a=e.name,t=e.onClick;return a===c.b.main?Object(n.jsxs)("div",{className:"header__main main",children:[Object(n.jsx)("div",{}),Object(n.jsx)("img",{src:s.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"}),Object(n.jsx)("img",{src:s.e,alt:"Logo Paw Patrol La Pel\xedcula",title:"Logo Paw Patrol La Pel\xedcula",className:"logo__paw"})]}):a===c.b.menu||a===c.b.goback?Object(n.jsxs)("div",{className:"header__main main__2",children:[a===c.b.goback?Object(n.jsx)("img",{src:i.c,alt:"Regresar",title:"Regresar",className:"decoration__2 align-self-center",onClick:t}):Object(n.jsx)("img",{src:i.e,alt:"Menu",title:"Menu",className:"decoration__2 align-self-center",onClick:t}),Object(n.jsx)("img",{src:s.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"}),Object(n.jsx)("img",{src:s.e,alt:"Logo Paw Patrol La Pel\xedcula",title:"Logo Paw Patrol La Pel\xedcula",className:"logo__paw"})]}):a===c.b.goback2?Object(n.jsxs)("div",{className:"header__main main__3",children:[Object(n.jsx)("img",{src:i.c,alt:"Regresar",title:"Regresar",className:"decoration__2 align-self-center",onClick:t}),Object(n.jsx)("img",{src:s.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"}),Object(n.jsx)("div",{})]}):a===c.b.mainAvatars?Object(n.jsx)("div",{className:"header__main d-flex justify-content",children:Object(n.jsx)("img",{src:s.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"})}):void 0};r.defaultProps={name:c.b.main}}}]);
//# sourceMappingURL=19.8a1ed579.chunk.js.map