(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[38],{125:function(e,t,i){var s={"./ion-phaser.entry.js":[136,39]};function n(e){if(!i.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],n=t[0];return i.e(t[1]).then((function(){return i(n)}))}n.keys=function(){return Object.keys(s)},n.id=125,e.exports=n},214:function(e,t,i){"use strict";i.r(t);var s=i(91),n=i(92),a=i(93),o=i(94),r=i(0),h=i.n(r),l=i(107),c=i.n(l),d=i(138),u={LOAD:"LOAD",MENU:"MENU"},p=i.p+"static/media/coin.acb813dd.mp3",m=i.p+"static/media/checkpoint.74dcbae3.mp3",g=i.p+"static/media/salto.63bbdfa3.mp3",y=i.p+"static/media/lose.7f2b4067.mp3",f=i.p+"static/media/giro.9f65d58a.mp3",b=i.p+"static/media/music.e174498d.mp3",v=i.p+"static/media/coin_.d8bb0add.mp3",w=i.p+"static/media/time.ddee8e14.mp3",j=h.a.lazy((function(){return i.e(78).then(i.bind(null,161))})),x=h.a.lazy((function(){return i.e(80).then(i.bind(null,162))})),S=h.a.lazy((function(){return i.e(74).then(i.bind(null,163))})),k=h.a.lazy((function(){return i.e(77).then(i.bind(null,164))})),C=h.a.lazy((function(){return i.e(75).then(i.bind(null,165))})),O=h.a.lazy((function(){return i.e(76).then(i.bind(null,166))})),T=h.a.lazy((function(){return i.e(63).then(i.bind(null,167))})),_=h.a.lazy((function(){return i.e(62).then(i.bind(null,168))})),M=h.a.lazy((function(){return i.e(64).then(i.bind(null,169))})),z=h.a.lazy((function(){return i.e(67).then(i.bind(null,170))})),G=h.a.lazy((function(){return i.e(65).then(i.bind(null,171))})),A=h.a.lazy((function(){return i.e(66).then(i.bind(null,172))})),E=h.a.lazy((function(){return i.e(52).then(i.bind(null,173))})),D=h.a.lazy((function(){return i.e(50).then(i.bind(null,174))})),N=h.a.lazy((function(){return i.e(59).then(i.bind(null,175))})),I=h.a.lazy((function(){return i.e(44).then(i.bind(null,176))})),F=h.a.lazy((function(){return i.e(42).then(i.bind(null,177))})),J=h.a.lazy((function(){return i.e(45).then(i.bind(null,178))})),L=h.a.lazy((function(){return i.e(41).then(i.bind(null,179))})),B=h.a.lazy((function(){return i.e(43).then(i.bind(null,180))})),U=h.a.lazy((function(){return i.e(46).then(i.bind(null,181))})),W=h.a.lazy((function(){return i.e(58).then(i.bind(null,182))})),X=h.a.lazy((function(){return i.e(53).then(i.bind(null,183))})),P=h.a.lazy((function(){return i.e(55).then(i.bind(null,184))})),H=h.a.lazy((function(){return i.e(54).then(i.bind(null,185))})),Y=h.a.lazy((function(){return i.e(56).then(i.bind(null,186))})),R=h.a.lazy((function(){return i.e(51).then(i.bind(null,187))})),q=h.a.lazy((function(){return i.e(82).then(i.bind(null,188))})),V=h.a.lazy((function(){return i.e(81).then(i.bind(null,189))})),K=h.a.lazy((function(){return i.e(68).then(i.bind(null,190))})),Q=h.a.lazy((function(){return i.e(69).then(i.bind(null,191))})),Z=h.a.lazy((function(){return i.e(70).then(i.bind(null,192))})),$=h.a.lazy((function(){return i.e(71).then(i.bind(null,193))})),ee=h.a.lazy((function(){return i.e(72).then(i.bind(null,194))})),te=h.a.lazy((function(){return i.e(73).then(i.bind(null,195))})),ie=h.a.lazy((function(){return i.e(79).then(i.bind(null,196))})),se=h.a.lazy((function(){return i.e(47).then(i.bind(null,197))})),ne=h.a.lazy((function(){return i.e(48).then(i.bind(null,198))})),ae=h.a.lazy((function(){return i.e(49).then(i.bind(null,199))})),oe=h.a.lazy((function(){return i.e(57).then(i.bind(null,200))})),re=h.a.lazy((function(){return i.e(83).then(i.bind(null,201))})),he=h.a.lazy((function(){return i.e(85).then(i.bind(null,202))})),le=h.a.lazy((function(){return i.e(88).then(i.bind(null,203))})),ce=h.a.lazy((function(){return i.e(87).then(i.bind(null,206))})),de=h.a.lazy((function(){return i.e(61).then(i.bind(null,207))})),ue=h.a.lazy((function(){return i.e(90).then(i.bind(null,209))})),pe=h.a.lazy((function(){return i.e(93).then(i.bind(null,210))})),me=h.a.lazy((function(){return i.e(91).then(i.bind(null,211))})),ge=h.a.lazy((function(){return i.e(92).then(i.bind(null,212))})),ye=h.a.lazy((function(){return i.e(60).then(i.bind(null,213))})),fe=i(3),be=i.n(fe),ve=i(9),we=i(18),je=i(11),xe=1500,Se=50,ke=!1,Ce=!0,Oe=null,Te=[],_e=.5,Me=.5,ze="activo",Ge=-1,Ae="perdio",Ee=50,De=function(e){Object(a.a)(i,e);var t=Object(o.a)(i);function i(e,n,a,o){var r;return Object(s.a)(this,i),(r=t.call(this,{key:u.MENU})).avatar=e,r.height=n,r.width=a,r.isMobile=o,r}return Object(n.a)(i,[{key:"init",value:function(){sessionStorage.setItem("ranking-item",JSON.stringify(!1)),this.isMuted=JSON.parse(sessionStorage.getItem("isMuted"))||!1,console.log("Prueba"),this.validateGame()}},{key:"preload",value:function(){var e=this;this.maxScoreChange=100,this.messageNumber=1,this.tileAnterior=Oe,this.tileGiro=ke,this.body=0,this.newTileFocus=Oe,this.imgCheckNew=Oe,this.giroX=45,this.game.ancho=this.game.config.width,this.game.alto=this.game.config.height,this.countBeforeCheckpoint=0,this.maximoCountCheckpoint=5,this.isInCheckpoint=ke,this.maximoCountHideTile=2,this.countMaximoCountHideTile=0,this.estadoJuego=ze,this.tileTemporal=Oe;var t=this.newUnits(414,this.game.ancho);this.fondoJuego=this.add.image(0,0,"fondo"),this.fondoJuego.setScale(t.scale),this.fondoJuego.setOrigin(_e,Me),this.maxScoreChange=100,this.sonidoCoin=this.sound.add("coin_",{volume:.5}),this.sonidoMusic=this.sound.add("music",{volume:.3,loop:Ce}),this.sonidoTime=this.sound.add("time",{volume:.5}),this.sonidoSalto=this.sound.add("salto",{volume:.5}),this.sonidoCheckpoint=this.sound.add("checkpoint_",{volume:.5}),this.sonidoLose=this.sound.add("lose",{volume:.5}),this.sonidoGiro=this.sound.add("giro",{volume:.7}),this.tileSize=100,this.areaMinima=20,this.start=ke,this.minBloques=4,this.maxBloques=5,this.score=0,this.pistaX=0,this.pistaY=0,this.pistaOrientacion=1,this.imgStarGroup=this.physics.add.group(),this.imgCheckGroup=this.physics.add.group(),this.emptyTileGroup=this.physics.add.group(),this.contenedor=this.add.container(this.height/2,this.width/2),this.camino=Te,this.tileFocus=0,this.tiles=this.physics.add.group(),this.crearTramo(5,0,1),this.crearPista(3),this.interval=0,this.avanceCheckpoint=1,this.saltando=ke,this.pressCharacter=ke,this.pressGiro=ke,this.dirX=0,this.dirY=1,this.dirXAnterior=0,this.salio=!1,this.velocidad=3,this.personaje=this.physics.add.image(0,0,"personaje").setInteractive(),this.personaje.setOrigin(_e,Me),this.personaje.setDepth(20),this.pistaRound=this.physics.add.image(0,0,"pista_round"),this.pistaRound.setOrigin(_e,Me),this.pistaRound.setScale(2.25),this.pistaRound.setDepth(10),this.cameras.main.removeBounds(),this.cameras.main.startFollow(this.personaje,!1),this.physics.add.overlap(this.personaje,this.tiles,this.hit,Oe,this),this.physics.add.overlap(this.personaje,this.imgStarGroup,this.getPoints,Oe,this),this.physics.add.overlap(this.personaje,this.imgCheckGroup,this.getCheck,Oe,this),this.physics.add.overlap(this.personaje,this.tiles,this.hit,Oe,this),this.physics.add.overlap(this.personaje,this.imgStarGroup,this.getPoints,Oe,this),this.physics.add.overlap(this.personaje,this.imgCheckGroup,this.getCheck,Oe,this);var i=this.newUnits(414,this.game.ancho);this.bg_blur=this.physics.add.image(0,0,"bg_blur"),this.bg_blur.setOrigin(_e,Me),this.bg_blur.setScale(i.scale,window.screen.height),this.bg_blur.setDepth(30),this.startGameText=this.add.text(window.screen.width<450?this.personaje.x-110:this.personaje.x-98,window.screen.width<450?this.personaje.y-140:this.personaje.y-160,"\xbfEst\xe1s lista para empezar?",{font:"18px crosstenextrabold",align:"center",wordWrap:{width:290},fontWeight:"bold",color:"#FCDC00"}),this.startGameText.setDepth(230),this.bg_on=this.physics.add.image(0,20,"bbOn"),this.bg_on.setOrigin(_e,Me),this.bg_on.setDepth(35);var s=this.newUnits(374,.7*this.game.ancho);this.btnStart=this.add.sprite(0,200,"btnStart").setInteractive(),this.btnStart.setOrigin(_e,Me),this.btnStart.setScale(s.scale),this.btnStart.setDepth(200),this.btnStart.on("pointerdown",(function(){e.showSpinner(),e.sendPost(),e.destroy(e.spinner),e.destroy(e.startGameText),e.destroy(e.btnStart),e.destroy(e.bg_on),setTimeout((function(){!0!==e.varStart&&e.countAnim()}),2e3)}),this),this.input.on("pointerdown",this.hizoClick,this),this.personaje.on("pointerdown",this.hizoClick2,this)}},{key:"hizoClick2",value:function(e){this.isMobile?this.pressCharacter?this.pressCharacter=ke:(this.pressCharacter=Ce,this.hizoClick(e)):this.hizoClick(e)}},{key:"showSpinner",value:function(){var e=this.newUnits(200,.1*this.game.ancho);this.spinner=this.add.sprite(0,300,"spinner").setInteractive(),this.spinner.setOrigin(.5,.5),this.spinner.setScale(e.scale),this.spinner.setDepth(210),this.tweens.add({targets:this.spinner,ease:"linear",rotation:5,duration:1e3,repeat:0})}},{key:"destroy",value:function(e){this.tweens.add({targets:e,ease:"linear",alpha:{getStart:function(){return 1},getEnd:function(){return 0}},duration:1e3,repeat:0,onComplete:function(){e.destroy()}})}},{key:"create",value:function(){}},{key:"update",value:function(e,t){this.estadoJuego===ze&&true===this.start&&(this.newTileFocus!==Oe&&this.newTileFocus.id>this.camino.length-10&&(this.crearPista(3),this.eliminarTiles()),this.newTileFocus!==Oe&&(0===this.dirY?1===this.camino[this.newTileFocus.id+1].y&&!this.salio&&this.anchoCubierto<this.areaMinima&&(console.log("Perdio 1",this.camino[this.newTileFocus.id+1].y,this.anchoCubierto,this.areaMinima,!this.tileEntrando),console.log(this.newTileFocus),this.estadoJuego=Ae,this.deadAnimation("x",null)):0===this.camino[this.newTileFocus.id+1].y&&!this.salio&&this.altoCubierto<this.areaMinima&&(this.estadoJuego=Ae,this.deadAnimation("y",null))),this.personaje.x+=this.dirX*this.velocidad,this.personaje.y-=this.dirY*this.velocidad,this.fondoJuego.x+=this.dirX*this.velocidad,this.fondoJuego.y-=this.dirY*this.velocidad)}},{key:"hit",value:function(e,t){if(this.estadoJuego===ze){var i=c.a.Geom.Intersects.GetRectangleIntersection(e.getBounds(),t.getBounds()).width,s=c.a.Geom.Intersects.GetRectangleIntersection(e.getBounds(),t.getBounds()).height;null!==this.newTileFocus?0===this.dirY?this.newTileFocus=t.giro?t.id>this.newTileFocus.id?t:this.newTileFocus:t.id>this.newTileFocus.id&&s>40?t:this.newTileFocus:this.newTileFocus=t.id>this.newTileFocus.id&&s>30?t:this.newTileFocus:this.newTileFocus=t,t.id===this.newTileFocus.id&&(0===this.dirY?(this.dirX===Ge&&(this.salio=!(e.x-t.x<0)),1===this.dirX&&(this.salio=e.x-t.x<0)):this.salio=!(e.y-t.y<0),this.anchoCubierto=i,this.altoCubierto=s),this.newTileFocus.EmptyTile&&!this.saltando&&(this.tileTemporal=this.newTileFocus,1===this.dirX||this.dirX===Ge?this.anchoCubierto>50&&(this.estadoJuego=Ae,this.girarCamara(0,0,Ae)):1===this.dirY&&this.altoCubierto>50&&(this.estadoJuego=Ae,this.girarCamara(0,0,Ae)))}}},{key:"jumpingAnimated",value:function(e){this.sonidoSalto.play();var t=this;this.tweens.add({targets:this.personaje,scale:{from:1,to:1.5},ease:"linear",duration:e/this.velocidad,repeat:0,yoyo:!0,onComplete:function(){t.saltando=!1,t.tileEntrando=!1}})}},{key:"girarCamara",value:function(e,t,i){var s=this;if("girando"===i){var n=1===this.dirX?e:e*Ge;this.cameras.main.rotateTo(n,!0,3e3/this.velocidad,"Cubic",!0),1===s.dirX?s.giroX+=45:s.giroX-=45}else setTimeout((function(){var e=this;s.cameras.main.rotateTo(0,!0,2e3,"Cubic",!0),setTimeout((function(){s.endGame(e.score)}),500)}),300)}},{key:"deadAnimation",value:function(e,t){var i=this;t!==Oe?"x"===e?this.tweens.add({targets:i.personaje,scale:{from:1,to:0},angle:t.y>this.height/2?i.personaje.angle+90:i.personaje.angle-90,x:i.personaje.x,y:t.y<this.height/2?i.personaje.y-Se:i.personaje.y+Se,ease:"linear",duration:xe,repeat:0,yoyo:!1,onComplete:function(){i.girarCamara(0,0,Ae)}}):this.tweens.add({targets:i.personaje,scale:{from:1,to:0},angle:t.x>this.width/2?90:-90,x:t.x>this.width/2?i.personaje.x+Se:i.personaje.x-Se,y:i.personaje.y,ease:"linear",duration:xe,repeat:0,yoyo:!1,onComplete:function(){i.girarCamara(0,0,Ae)}}):"y"===e?this.tweens.add({targets:i.personaje,scale:{from:1,to:0},x:i.personaje.x,y:i.personaje.y-Se,ease:"linear",duration:xe,repeat:0,yoyo:!1,onComplete:function(){i.girarCamara(0,0,Ae)}}):this.tweens.add({targets:i.personaje,scale:{from:1,to:0},x:-1===i.dirX?i.personaje.x-Se:i.personaje.x+Se,y:i.personaje.y,ease:"linear",duration:xe,repeat:0,yoyo:!1,onComplete:function(){i.girarCamara(0,0,Ae)}})}},{key:"hizoClick",value:function(e){if(this.estadoJuego===ze)if(this.saltando||!this.start||this.pressGiro)console.log(this.saltando,this.start,this.pressGiro);else if(null!==this.tileTemporal)this.tileTemporal.destroy(),this.tileTemporal=null,this.saltando=!0,this.tileEntrando=!0,this.jumpingAnimated(1e3),console.log("Salto 3");else{if(0===this.dirY){if(1!==this.camino[this.newTileFocus.id+1].y)return void(this.newTileFocus.isAnteriorEmpty?(this.emptyTileGroup.getChildren()[0].destroy(),this.saltando=!0,this.tileEntrando=!0,this.jumpingAnimated(1e3),console.log("Salto1")):(this.estadoJuego=Ae,this.deadAnimation("x",e),console.log("Aqui 1",this.camino[this.newTileFocus.id+1].y),console.log(this.altoCubierto,this.newTileFocus)));this.dirY=1,this.dirX=0}else{if(0===this.camino[this.newTileFocus.id+1].x)return void(this.newTileFocus.isAnteriorEmpty?(this.emptyTileGroup.getChildren()[0].destroy(),this.saltando=!0,this.tileEntrando=!0,this.jumpingAnimated(1e3),console.log("Salto2")):(this.estadoJuego=Ae,this.deadAnimation("y",e),console.log("Aqui 2",this.camino[this.newTileFocus.id+1].x),console.log(this.altoCubierto)));this.dirX=this.camino[this.newTileFocus.id+1].x,this.dirY=0}1===this.dirY?(this.sonidoGiro.play(),this.pressGiro=!0,this.girarPersonaje(0),this.girarCamara(this.giroX,this.giroY,"girando")):(this.pressGiro=!0,this.girarPersonaje(90*this.dirX),this.sonidoGiro.play(),this.girarCamara(this.giroX,this.giroY,"girando"))}}},{key:"eliminarTiles",value:function(){for(var e=this.tiles.getChildren(),t=0,i=e.length-(this.camino.length-this.newTileFocus.id)-7;t<i;)e[0].alpha=0,e[0].destroy(),t++}},{key:"crearPista",value:function(e){var t=this.minBloques+Math.round((this.maxBloques-this.minBloques)*Math.random()),i=this.minBloques+Math.round((this.maxBloques-this.minBloques)*Math.random()),s=[Ge,1][Math.round(Math.random())];this.crearTramo(t,s,0),this.crearTramo(i,0,1)}},{key:"girarPersonaje",value:function(e){var t=this;this.tweens.add({targets:this.personaje,angle:e,ease:"Cubic",duration:900/this.velocidad,repeat:0,yoyo:!1,onComplete:function(){t.pressGiro=!1}})}},{key:"crearTramo",value:function(e,t,i){this.countBeforeCheckpoint++,this.countMaximoCountHideTile++;for(var s=ke,n=Oe,a=ke,o=Oe,r=0;r<e;r++){if(this.camino.push({x:t,y:i}),s?(1===t?(this.pistaX+=this.tileSize*t+100,this.pistaY-=this.tileSize*i):t===Ge?(this.pistaX+=this.tileSize*t-100,this.pistaY-=this.tileSize*i):(this.pistaX+=this.tileSize*t,this.pistaY-=this.tileSize*i+100),s=ke):(this.pistaY-=this.tileSize*i,this.pistaX+=this.tileSize*t),this.tileGiro&&0===r){var h=this.tileAnterior;this.tileGiro=!1,h.setAngle(0),0!==t?t===Ge?h.setTexture("arrow_left"):h.setTexture("arrow_right"):1===this.dirXAnterior?h.setTexture("arrow_up"):h.setTexture("arrow_up_reverse")}var l=this.tiles.create(this.pistaX,this.pistaY,"pista");if(l.setDepth(5),1!==i&&(l.angle=90*t),this.countBeforeCheckpoint===this.maximoCountCheckpoint&&r<e-1&&0!==r){this.countBeforeCheckpoint=0,l.isCheckpoint=Ce,l.setTexture("pista_round"),l.setDepth(10),s=Ce,l.setScale(2.25);var c=this.newUnits(104,.15*this.game.ancho),d=this.imgCheckGroup.create(this.pistaX,this.pistaY,"checkpoint_avatar");d.setScale(c.scale),d.setOrigin(_e,Me),d.setDepth(10),d.play("anim_check_chase"),0!==t?1===t?(l.x+=Ee,d.x+=Ee):(l.x-=Ee,d.x-=Ee):(l.y-=Ee,d.y-=Ee),this.imgCheckNew=d}else l.isCheckpoint=ke;if(this.countMaximoCountHideTile===this.maximoCountHideTile&&r<e-1&&r>1&&!l.isCheckpoint)this.countMaximoCountHideTile=0,n.isCheckpoint?(l.EmptyTile=ke,s=ke):(l.setAlpha(0),l.EmptyTile=Ce,this.emptyTileGroup.add(l),n.setTexture("arrow"),n.isAnteriorEmpty=Ce,o!==Oe&&o.destroy(),1===t?n.setAngle(0):t===Ge?n.setAngle(180):n.setAngle(90));else if(l.EmptyTile=ke,!l.isCheckpoint&&!a){var u=this.newUnits(55,.075*this.game.ancho),p=this.imgStarGroup.create(this.pistaX,this.pistaY,"estrella");p.setScale(u.scale),p.setOrigin(_e,Me),p.setDepth(14),o=p}l.id=this.camino.length-1,n=l,a?(l.setAngle(0),l.setTexture("arrow_reverse"),o!==Oe&&o.destroy(),1===t?r===e-1?l.setAngle(-90):l.setAngle(0):t===Ge?r===e-1?l.setAngle(-90):l.setAngle(180):l.setAngle(90),a=ke):l.EmptyTile?a=Ce:r===e-1&&(this.tileAnterior=l,this.tileGiro=Ce,l.giro=!0,this.dirXAnterior=t,o!==Oe&&o.destroy())}}},{key:"getCheck",value:function(e,t){this.isInCheckpoint||(t.destroy(),this.anim10(),this.sonidoCheckpoint.play(),this.regresar(e,t,this.dirY),this.score+=10,this.score%500===0&&(this.avanceCheckpoint++,this.maximoCountCheckpoint=5+this.avanceCheckpoint),this.scoreLabel=this.getElement("score"),this.scoreLabel.innerText="".concat(this.score," pts"),this.randomMessage())}},{key:"regresar",value:function(e,t,i){1===i?this.tweens.add({targets:e,x:t.x,ease:"Cubic",duration:500,repeat:0,yoyo:!1,onComplete:function(){}}):this.tweens.add({targets:e,y:t.y,ease:"Cubic",duration:500,repeat:0,yoyo:!1,onComplete:function(){}})}},{key:"endGame",value:function(){this.scoreLabel.innerText="0 pts.",this.sonidoMusic.stop(),this.sonidoLose.play(),this.varStart=!1;var e=JSON.parse(sessionStorage.getItem("body2")).juegos_restantes,t=this.newUnits(414,this.game.ancho);this.bgBlur=this.physics.add.image(this.personaje.x,this.personaje.y,"bg_blur"),this.bgBlur.setOrigin(.5,.5),this.bgBlur.setScale(t.scale,window.screen.height),this.bgBlur.setDepth(200);var i=this.newUnits(356,.8*this.game.ancho);this.bgStars=this.add.sprite(this.personaje.x,this.personaje.y,"bgStars"),this.bgStars.setOrigin(.5,.5),this.bgStars.setScale(i.scale),this.bgStars.setDepth(220),this.getElement("playMusic").classList.add("d_none"),0===e?(this.scoreLabel.classList.add("d_none"),this.getElement("stopMusic").classList.add("d_none"),this.startGameText.destroy(),this.noChance(),this.gameOver()):(this.scoreLabel.classList.add("d_none"),this.getElement("stopMusic").classList.add("d_none"),this.the_end(),this.gameOver())}},{key:"the_end",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("body2")).juegos_restantes,i=JSON.parse(sessionStorage.getItem("validate")).max_points;this.msj=this.add.text(this.personaje.x-80,window.screen.width<450?this.personaje.y-200:this.personaje.y-230,"\xa1Eso Fue increible!",{font:"19px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"bold",color:"#fff"}),this.msj.setDepth(230),this.endGameScore=this.add.text(this.personaje.x-25,window.screen.width<450?this.personaje.y+2:this.personaje.y+3,1===this.score?this.score+" pt":this.score+" pts",{font:"25px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"900",color:"#fff"}),this.endGameScore.setDepth(230),this.endGameText=this.add.text(this.personaje.x-120,window.screen.width<450?this.personaje.y-120:this.personaje.y-160,"A\xfan te quedan "+t+" intentos m\xe1s",{font:"17px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"bold",color:"#04A6E1"}),this.endGameText.setDepth(230),this.endGameScoreMax=this.add.text(this.personaje.x-115,window.screen.width<450?this.personaje.y+95:this.personaje.y+120,i>this.score?"Tu m\xe1ximo puntaje: "+i+" pts":"Tu m\xe1ximo puntaje: "+this.score+" pts",{font:"17px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"900",color:"#454545"}),this.endGameScoreMax.setDepth(230);var s=this.newUnits(374,.7*this.game.ancho);this.btnReplay=this.add.sprite(this.personaje.x,window.screen.width<450?this.personaje.y+150:this.personaje.y+205,"btnReplay").setInteractive(),this.btnReplay.setOrigin(.5,.5),this.btnReplay.setScale(s.scale),this.btnReplay.setDepth(220),this.btnReplay.on("pointerdown",(function(){e.scoreLabel.classList.add("d_none"),e.getElement("stopMusic").classList.add("d_none"),e.getElement("playMusic").classList.add("d_none"),we.a.event({category:"JUEGO",action:"Volver a jugar"}),e.scene.restart(),e.start=!1}),this);var n=this.newUnits(249,.5*this.game.ancho);this.btnHome=this.add.sprite(this.personaje.x,window.screen.width<450?this.personaje.y+220:this.personaje.y+280,"btnRanking").setInteractive(),this.btnHome.setOrigin(.5,.5),this.btnHome.setScale(n.scale),this.btnHome.setDepth(220),this.btnHome.on("pointerdown",(function(){we.a.event({category:"JUEGO",action:"Ver ranking"}),sessionStorage.setItem("ranking-item",JSON.stringify(!0)),window.location="./"}),this)}},{key:"noChance",value:function(){var e=JSON.parse(sessionStorage.getItem("validate")).max_points;this.msj=this.add.text(this.personaje.x-105,window.screen.width<450?this.personaje.y-200:this.personaje.y-260,"\xa1Cada d\xeda hay 10 nuevas oportunidades!",{font:"19px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"bold",color:"#fff"}),this.msj.setDepth(230),this.endGameScore=this.add.text(this.personaje.x-25,window.screen.width<450?this.personaje.y+2:this.personaje.y+3,1===this.score?this.score+" pt":this.score+" pts",{font:"25px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"900",color:"#fff"}),this.endGameScore.setDepth(230),this.endGameText=this.add.text(this.personaje.x-130,window.screen.width<450?this.personaje.y-120:this.personaje.y-160,"Puedes compartir el juego para ganar m\xe1s oportunidades de jugar",{font:"16px crosstenextrabold",align:"center",wordWrap:{width:290},fontWeight:"bold",color:"#04A6E1"}),this.endGameText.setDepth(230),this.endGameScoreMax=this.add.text(this.personaje.x-115,window.screen.width<450?this.personaje.y+95:this.personaje.y+120,e>this.score?"Tu m\xe1ximo puntaje: "+e+" pts":"Tu m\xe1ximo puntaje: "+this.score+" pts",{font:"17px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"900",color:"#454545"}),this.endGameScoreMax.setDepth(230);var t=this.newUnits(310,.6*this.game.ancho);this.btnMore=this.add.sprite(this.personaje.x,window.screen.width<450?this.personaje.y+160:this.personaje.y+205,"btnMore").setInteractive(),this.btnMore.setOrigin(.5,.5),this.btnMore.setScale(t.scale),this.btnMore.setDepth(220),this.btnMore.on("pointerdown",(function(){we.a.event({category:"JUEGO",action:"M\xe1s Oportunidades"}),window.location="https://www.bebeaventurero.com/usuario/compartir/"}),this);var i=this.newUnits(248,.5*this.game.ancho);this.btnHome=this.add.sprite(this.personaje.x,window.screen.width<450?this.personaje.y+240:this.personaje.y+280,"btnHome").setInteractive(),this.btnHome.setOrigin(.5,.5),this.btnHome.setScale(i.scale),this.btnHome.setDepth(220),this.btnHome.on("pointerdown",(function(){we.a.event({category:"JUEGO",action:"Ver ranking"}),window.location="./"}),this)}},{key:"anim5",value:function(e){var t=this.getElement("message_score");t.classList.add("show_points"),setTimeout((function(){t.classList.remove("show_points")}),1e3/this.velocidad)}},{key:"anim10",value:function(){var e=this.getElement("message_checkpoint");e.classList.add("show_points"),setTimeout((function(){e.classList.remove("show_points")}),1e3/this.velocidad)}},{key:"getPoints",value:function(e,t){t.destroy(),this.sonidoCoin.play(),this.anim5(t);var i=this.score+5;i%500===0&&(this.avanceCheckpoint++,this.maximoCountCheckpoint=5+this.avanceCheckpoint),this.score=i,this.scoreLabel=this.getElement("score"),this.scoreLabel.innerText="".concat(this.score," pts"),this.randomMessage()}},{key:"newUnits",value:function(e,t){var i={};return i.scale=t/e,i.x=(this.game.ancho-t)/2,i}},{key:"getElement",value:function(e){return document.querySelector(".".concat(e))}},{key:"randomMessage",value:function(){var e=this;if(this.score%this.maxScoreChange===0&&this.score<=2e3&&(this.score>=600&&this.score<1200?this.maxScoreChange=200:this.score>=1200&&(this.maxScoreChange=300),this.velocidad+=.5,console.log(this.velocidad),this.messageNumber<=6)){var t=this.getElement("message_"+this.messageNumber);this.messageNumber,t.classList.add("show"),setTimeout((function(){t.classList.remove("show"),e.messageNumber++}),5e3)}}},{key:"startGame",value:function(e){}},{key:"sendPost",value:function(){var e,t=this;(function(){var i=Object(ve.a)(be.a.mark((function i(){var s,n,a,o,r,h;return be.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s=JSON.parse(sessionStorage.getItem("avatar")),n=s.id,a={personaje_id:n},i.next=4,Object(je.c)("/startGame",a,"POST");case 4:return o=i.sent,i.next=7,o.json();case 7:e=i.sent,sessionStorage.setItem("body2",JSON.stringify(e)),r=JSON.parse(sessionStorage.getItem("validate")),h=r.juegos_restantes,"success"===e.status&&h>0?t.startGame(e):t.noOportunities();case 11:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}})()()}},{key:"gameOver",value:function(){var e=this;(function(){var t=Object(ve.a)(be.a.mark((function t(){var i,s,n,a,o,r,h;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=JSON.parse(sessionStorage.getItem("body2")),s=JSON.parse(sessionStorage.getItem("avatar")),n=s.id,a=e.score,o=0;o<=6;o++)a=btoa(a)+btoa(a);return r={personaje_id:n,points:a,token:i.token},t.next=7,Object(je.c)("/endGame",r,"POST");case 7:return h=t.sent,t.next=10,h.json();case 10:t.sent.status;case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"validateGame",value:function(){var e=this;this.showSpinner(),this.destroy(this.spinner),function(){var t=Object(ve.a)(be.a.mark((function t(){var i,s,n;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={},t.next=3,Object(je.c)("/remainingGame",i,"POST");case 3:return s=t.sent,t.next=6,s.json();case 6:"success"===(n=t.sent).status?sessionStorage.setItem("validate",JSON.stringify(n)):(sessionStorage.setItem("validate",JSON.stringify(n)),e.noOportunities());case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}},{key:"noOportunities",value:function(){var e=JSON.parse(sessionStorage.getItem("validate")).max_points;this.sonidoLose.play();var t=this.newUnits(414,this.game.ancho);this.bgBlur=this.physics.add.image(this.personaje.x,this.personaje.y,"bg_blur"),this.bgBlur.setOrigin(.5,.5),this.bgBlur.setScale(t.scale,window.screen.height),this.bgBlur.setDepth(200);var i=this.newUnits(356,.8*this.game.ancho);this.bgStars=this.add.sprite(this.personaje.x,this.personaje.y,"bgStars"),this.bgStars.setOrigin(.5,.5),this.bgStars.setScale(i.scale),this.bgStars.setDepth(220),this.msj=this.add.text(this.personaje.x-105,window.screen.width<450?this.personaje.y-200:this.personaje.y-260,"\xa1Cada d\xeda hay 10 nuevas oportunidades!",{font:"19px crosstenextrabold",align:"center",wordWrap:{width:300},fontWeight:"bold",color:"#fff"}),this.msj.setDepth(230),this.endGameText=this.add.text(this.personaje.x-130,window.screen.width<450?this.personaje.y-120:this.personaje.y-160,"Puedes compartir el juego para ganar m\xe1s oportunidades de jugar",{font:"16px crosstenextrabold",align:"center",wordWrap:{width:290},fontWeight:"bold",color:"#04A6E1"}),this.endGameText.setDepth(230),this.endGameScoreMax=this.add.text(this.personaje.x-110,window.screen.width<450?this.personaje.y+80:this.personaje.y+120,e>this.score?"M\xe1ximo puntaje obtenido: "+e+" pts":"Tu m\xe1ximo puntaje: "+this.score+" pts",{font:"17px crosstenextrabold",align:"center",wordWrap:{width:240},fontWeight:"900",color:"#454545"}),this.endGameScoreMax.setDepth(230);var s=this.newUnits(310,.6*this.game.ancho);this.btnMore=this.add.sprite(this.personaje.x,window.screen.width<450?this.personaje.y+160:this.personaje.y+205,"btnMore").setInteractive(),this.btnMore.setOrigin(.5,.5),this.btnMore.setScale(s.scale),this.btnMore.setDepth(220),this.btnMore.on("pointerdown",(function(){we.a.event({category:"JUEGO",action:"M\xe1s Oportunidades"}),window.location="https://www.bebeaventurero.com/usuario/compartir/"}),this);var n=this.newUnits(248,.5*this.game.ancho);this.btnHome=this.add.sprite(this.personaje.x,window.screen.width<450?this.personaje.y+240:this.personaje.y+280,"btnHome").setInteractive(),this.btnHome.setOrigin(.5,.5),this.btnHome.setScale(n.scale),this.btnHome.setDepth(220),this.btnHome.on("pointerdown",(function(){we.a.event({category:"JUEGO",action:"Ver ranking"}),sessionStorage.setItem("ranking-item",JSON.stringify(!0)),window.location="./"}),this)}},{key:"countAnim",value:function(){var e=this,t=this,i=setInterval((function(){var s=e.newUnits(356,1.3*e.game.ancho);e.one=e.add.sprite(e.personaje.x,e.personaje.y,"tres"),e.one.setOrigin(.5,.5),e.one.setScale(s.setScale),e.one.setDepth(220),e.one.alpha=0,e.sonidoTime.play(),e.tweens.add({targets:e.one,alpha:{from:0,to:1},ease:"Cubic",duration:600,repeat:0,yoyo:!1,scale:{from:s.setScale,to:s.setScale},onComplete:function(){t.one.destroy()}}),clearInterval(i)}),100),s=setInterval((function(){var i=e.newUnits(356,1.3*e.game.ancho);e.two=e.add.sprite(e.personaje.x,e.personaje.y,"dos"),e.two.setOrigin(.5,.5),e.two.setScale(i.setScale),e.two.setDepth(220),e.two.alpha=0,e.sonidoTime.play(),e.tweens.add({targets:e.two,alpha:{from:0,to:1},ease:"Cubic",duration:600,repeat:0,yoyo:!1,onComplete:function(){t.two.alpha=0,t.two.destroy()}}),clearInterval(s)}),1200),n=setInterval((function(){e.startText=e.add.text(e.personaje.x-40,(window.screen.width,e.personaje.y-160),"\xa1START!",{font:"25px crosstenextrabold",align:"center",wordWrap:{width:290},fontWeight:"bold",color:"#FCDC00"}),e.startText.setDepth(230);var i=e.newUnits(356,1.3*e.game.ancho);e.three=e.add.sprite(e.personaje.x,e.personaje.y,"uno"),e.three.setOrigin(.5,.5),e.three.setScale(i.setScale),e.three.setDepth(220),e.two.alpha=0,e.sonidoTime.play(),e.tweens.add({targets:e.three,alpha:{from:0,to:1},ease:"Cubic",duration:600,repeat:0,yoyo:!1,onComplete:function(){t.three.alpha=0,t.three.destroy(),t.destroy(t.bg_blur),t.destroy(t.startText)}}),clearInterval(n)}),2200);this.isMuted?this.getElement("playMusic").classList.remove("d_none"):this.getElement("stopMusic").classList.remove("d_none"),this.getElement("score").classList.remove("d_none");var a=setInterval((function(){e.start=!0,e.isMuted||e.sonidoMusic.play();var t=JSON.parse(sessionStorage.getItem("validate")).puntos_iniciales+e.score;return e.score=t,e.stopMusic(),clearInterval(a),e.varStart=!0}),4e3)}},{key:"stopMusic",value:function(){var e=this,t=!1,i=this.getElement("stopMusic"),s=this.getElement("playMusic");i.onclick=function(){return e.sonidoMusic.play(),s.classList.add("d_none"),i.classList.remove("d_none"),t=!1},s.onclick=function(){if(!1===t)return e.sonidoMusic.stop(),sessionStorage.setItem("isMuted",JSON.stringify(!0)),e.isMuted=!0,i.classList.add("d_none"),s.classList.remove("d_none"),t=!0}}}]),i}(c.a.Scene),Ne=function(e){Object(a.a)(i,e);var t=Object(o.a)(i);function i(e,n,a){var o;Object(s.a)(this,i),(o=t.call(this,{key:u.LOAD})).avatar=e,o.height=n,o.width=a;var r={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()}};return o.isMobile=!!r.any(),o}return Object(n.a)(i,[{key:"init",value:function(){}},{key:"preload",value:function(){var e=this;this.load.image("pista",j),this.load.image("personaje",this.getPersonaje()),this.load.image("estrella",T),this.load.image("checkpoint",_),this.load.image("checkpoint_avatar",this.getCheckpoint()),this.load.image("pista_round",x),this.load.image("pista_initial",ie),this.load.image("fondo",this.getFondo()),this.load.image("bg_blur",E),this.load.image("bbOn",D),this.load.image("btnStart",N),this.load.image("btnReplay",W),this.load.image("btnBack",X),this.load.image("btnMore",P),this.load.image("btnHome",H),this.load.image("bgStars",R),this.load.image("btnPersonaje",Y),this.load.image("arrow_right",I),this.load.image("arrow_left",F),this.load.image("arrow_up",J),this.load.image("arrow",L),this.load.image("arrow_reverse",B),this.load.image("arrow_up_reverse",U),this.load.image("pluscheck",q),this.load.image("plusfive",V),this.load.image("message1",K),this.load.image("message2",Q),this.load.image("message3",Z),this.load.image("message4",$),this.load.image("message5",ee),this.load.image("message6",te),this.load.image("uno",se),this.load.image("dos",ne),this.load.image("tres",ae),this.load.image("spinner",ye),this.load.image("btnRanking",oe),this.load.image("spriteChase",re),this.load.image("spriteMarshall",he),this.load.image("spriteSky",le),this.load.image("spriteRubble",ce),this.load.image("stopMusic",de),this.load.audio("coin",p),this.load.audio("coin_",v),this.load.audio("salto",g),this.load.audio("lose",y),this.load.audio("checkpoint_",m),this.load.audio("giro",f),this.load.audio("music",b),this.load.audio("time",w),this.createLoadingBar();var t=this.add.graphics({x:-20,y:0,fillStyle:{color:16777215}});this.load.on("progress",(function(i){t.fillRect(50,e.sys.scale.height/2+40,(e.game.renderer.width-65)*i,20)})),this.load.on("complete",(function(){e.onComplete()}))}},{key:"getPersonaje",value:function(){return"chase"===this.avatar?S:"skye"===this.avatar?k:"marshall"===this.avatar?C:O}},{key:"getCheckpoint",value:function(){return"chase"===this.avatar?ue:"skye"===this.avatar?pe:"marshall"===this.avatar?me:ge}},{key:"getFondo",value:function(){return"chase"===this.avatar?M:"skye"===this.avatar?z:"marshall"===this.avatar?G:A}},{key:"create",value:function(){}},{key:"createLoadingBar",value:function(){this.mensajePrecargaX=this.add.text(this.sys.scale.width/2,this.sys.scale.height/2,"Cargando...",{font:"20px crosstenextrabold",fill:"#ffffff"}).setDepth(5).setOrigin(.5,.5),this.txt_progress=this.add.text(this.sys.scale.width/2,this.sys.scale.height/2-40,"0%",{font:"40px crosstenextrabold",fill:"#ffffff",align:"center",wordWrap:{width:300}}).setDepth(5).setOrigin(.5,.5),this.load.on("progress",this.onProgress,this)}},{key:"onProgress",value:function(e){this.txt_progress.setText(Math.round(100*e)+"%")}},{key:"onComplete",value:function(){this.scene.add(u.MENU,new De(this.avatar,this.height,this.width,this.isMobile),!1),this.scene.start(u.MENU,"carg\xf3 el juego")}}]),i}(c.a.Scene),Ie=i(6),Fe=i(1),Je=function(e){Object(a.a)(i,e);var t=Object(o.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={width:window.innerWidth>500?500:window.innerWidth,height:window.innerHeight,score:0,comeback:!1,avatar:void 0!==n.props.location.state?n.props.location.state.avatar:"chase"},sessionStorage.setItem("score",0),n}return Object(n.a)(i,[{key:"sizeScreen",value:function(e,t){var i={};return i.scale=t/e,i.x=(this.ancho-t)/2,i}},{key:"render",value:function(){var e=this,t={initialize:!0,game:{width:this.state.width,fps:{target:30,min:30},backgroundColor:"chase"===e.state.avatar?"#2C1D61":"skye"===e.state.avatar?"#F070A9":"marshall"===e.state.avatar?"#B61F25":"#FAA914",height:this.state.height,dom:{createContainer:!0},physics:{default:"arcade",arcade:{debug:!1}},type:c.a.AUTO,scene:[new Ne(this.state.avatar,this.state.height,this.state.width)]}},i=t.initialize,s=t.game;return this.state.comeback?Object(Fe.jsx)(Ie.a,{to:"/usuario/personajes"}):Object(Fe.jsxs)("div",{className:"container__game p-relative",children:[Object(Fe.jsxs)("div",{className:"score p-absolute text-primary d_none",children:[this.state.score," pts"]}),Object(Fe.jsx)("div",{className:"p-absolute stopMusic d_none"}),Object(Fe.jsx)("div",{className:"p-absolute playMusic d_none"}),Object(Fe.jsx)("div",{className:"p-absolute message_score"}),Object(Fe.jsx)("div",{className:"p-absolute message message_1"}),Object(Fe.jsx)("div",{className:"p-absolute message message_2"}),Object(Fe.jsx)("div",{className:"p-absolute message message_3"}),Object(Fe.jsx)("div",{className:"p-absolute message message_4"}),Object(Fe.jsx)("div",{className:"p-absolute message message_5"}),Object(Fe.jsx)("div",{className:"p-absolute message message_6"}),Object(Fe.jsx)("div",{className:"p-absolute message message_checkpoint"}),Object(Fe.jsx)(d.a,{game:s,initialize:i})]})}}]),i}(r.Component);t.default=Je}}]);
//# sourceMappingURL=38.39298a6a.chunk.js.map