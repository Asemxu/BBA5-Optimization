(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[28],{154:function(e,a,t){"use strict";t.r(a);var c=t(18),s=t(6),i=t(10),n=t(84),o=t(20),r=t(85),l=t(81),d=t(1);a.default=function(){var e=Object(i.c)((function(e){return e.ui})).selected.avatar,a=e.name,t=e.id,u=e.image2,m=Object(i.c)((function(e){return e.ui})).selected.isRegisterBtn,b=Object(s.g)(),g=function(e){c.a.event({category:"PERSONAJE ELEGIDO",action:"game"===e?"Jugar":"Ver tutorial"}),"game"===e?b.push({pathname:"/usuario/juego",state:{avatar:a,id:t}}):"instruction-1"===e&&b.push("/usuario/instruccion-1")};return Object(d.jsxs)(n.a,{showAvatars:!1,children:[Object(d.jsx)(r.a,{name:l.b.goback,onClick:function(){return b.goBack()}}),Object(d.jsxs)("div",{className:"content__main d-flex flex-column align-self-center",children:[Object(d.jsx)("div",{className:"content__title__sm",children:Object(d.jsx)("h1",{className:"title__bg",children:"\xa1Es momento de divertirse!"})}),Object(d.jsx)("div",{className:"bg__light2",children:Object(d.jsx)("img",{src:u,alt:a,title:a})}),Object(d.jsxs)("div",{className:"buttons mt-4",children:[(!m||""===m)&&Object(d.jsx)(o.a,{isPrimary:!0,text:"JUGAR",onClick:function(){return g("game")}}),Object(d.jsx)(o.a,{text:"Ver tutorial",onClick:function(){return g("instruction-1")}})]})]})]})}},81:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return s}));var c={chaseRubble:"Chase y Rubble",chaseMarshallSkye:"Chase, Marshall y Skye",chase:"Chase",logos:"Logos"},s={main:"Header Main",mainAvatars:"Header Avatars",goback:"Header Goback",goback2:"Header Goback 2",menu:"Header Menu"}},82:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"c",(function(){return s})),t.d(a,"e",(function(){return i})),t.d(a,"f",(function(){return n})),t.d(a,"b",(function(){return o})),t.d(a,"d",(function(){return r})),t.d(a,"g",(function(){return l}));var c=t.p+"static/media/logoBBA.ee17dfaa.webp",s=t.p+"static/media/logoNinet.d9422b19.webp",i=(t.p,t.p+"static/media/logoPaw.7cc2874a.webp"),n=t.p+"static/media/logoPaw2.28f94506.webp",o=t.p+"static/media/logoLightNickelodeon.9a31c83a.webp",r=t.p+"static/media/logoParamount.c06220b0.webp",l=t.p+"static/media/logoSpinMaster.77b4d61f.webp"},83:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"g",(function(){return s})),t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return n})),t.d(a,"d",(function(){return o})),t.d(a,"f",(function(){return r})),t.d(a,"e",(function(){return l}));var c=t.p+"static/media/chase_1.c3cc8854.webp",s=t.p+"static/media/rubble_1.c94be044.webp",i=t.p+"static/media/3_dogs.d06d5155.webp",n=t.p+"static/media/chase_2.26bc803b.webp",o=t.p+"static/media/chase_pts.ce2aeec1.webp",r=t.p+"static/media/dogs__share.16dc2e46.webp",l=t.p+"static/media/dos_perritos 1 (1).783195b3.webp"},84:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t(0);var c=t(83),s=t(82),i=t(81),n=t(1),o=function(e){var a=e.children,t=e.showAvatars,o=e.nameAvatars;return Object(n.jsxs)("div",{className:"container__main d-grid ".concat(t?"":"rows__2"," ").concat(t&&o===i.a.logos?"row__logos":""),children:[a,t&&o===i.a.chaseRubble&&Object(n.jsxs)("div",{className:"avatars d-flex justify-content-between align-items-center",children:[Object(n.jsx)("img",{src:c.a,alt:"Chase",title:"Chase",className:"animate__animated animate__pulse"}),Object(n.jsx)("img",{src:c.g,alt:"Rubble",title:"Rubble",className:"animate__animated animate__pulse"})]}),t&&o===i.a.chaseMarshallSkye&&Object(n.jsx)("div",{className:"avatars d-flex justify-content-center align-items-end",children:Object(n.jsx)("img",{src:c.c,alt:"Chase",title:"Skye, Chase y Marshall",className:"w-100 h-100 animate__animated animate__pulse"})}),t&&o===i.a.chase&&Object(n.jsx)("div",{className:"avatars d-flex justify-content-end align-items-end",children:Object(n.jsx)("img",{src:c.b,alt:"Chase",title:"Chase",className:"w-100-2 w-100 animate__animated animate__pulse"})}),t&&o===i.a.logos&&Object(n.jsxs)("div",{className:"logos d-flex gap-3 justify-content-center align-items-center",children:[Object(n.jsx)("img",{src:s.b,alt:"Logo Nickelodeon",title:"Logo Nickelodeon",className:"logo__nickelodeon"}),Object(n.jsx)("img",{src:s.d,alt:"Logo Paramount",title:"Logo Paramount"}),Object(n.jsx)("img",{src:s.g,alt:"Logo Spin Master",title:"Logo Spin Master"})]})]})};o.defaultProps={showAvatars:!0,nameAvatars:i.a.chaseRubble}},85:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t(0);var c=t(82),s=t(81),i=t(29),n=t(1),o=function(e){var a=e.name,t=e.onClick;return a===s.b.main?Object(n.jsxs)("div",{className:"header__main main",children:[Object(n.jsx)("div",{}),Object(n.jsx)("img",{src:c.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"}),Object(n.jsx)("img",{src:c.e,alt:"Logo Paw Patrol La Pel\xedcula",title:"Logo Paw Patrol La Pel\xedcula",className:"logo__paw"})]}):a===s.b.menu||a===s.b.goback?Object(n.jsxs)("div",{className:"header__main main__2",children:[a===s.b.goback?Object(n.jsx)("img",{src:i.c,alt:"Regresar",title:"Regresar",className:"decoration__2 align-self-center",onClick:t}):Object(n.jsx)("img",{src:i.e,alt:"Menu",title:"Menu",className:"decoration__2 align-self-center",onClick:t}),Object(n.jsx)("img",{src:c.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"}),Object(n.jsx)("img",{src:c.e,alt:"Logo Paw Patrol La Pel\xedcula",title:"Logo Paw Patrol La Pel\xedcula",className:"logo__paw"})]}):a===s.b.goback2?Object(n.jsxs)("div",{className:"header__main main__3",children:[Object(n.jsx)("img",{src:i.c,alt:"Regresar",title:"Regresar",className:"decoration__2 align-self-center",onClick:t}),Object(n.jsx)("img",{src:c.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"}),Object(n.jsx)("div",{})]}):a===s.b.mainAvatars?Object(n.jsx)("div",{className:"header__main d-flex justify-content",children:Object(n.jsx)("img",{src:c.c,alt:"Logo Ninet",title:"Logo Ninet",className:"logo mx-auto"})}):void 0};o.defaultProps={name:s.b.main}}}]);
//# sourceMappingURL=28.af6ca9cd.chunk.js.map