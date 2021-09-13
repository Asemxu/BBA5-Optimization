import Phaser from "phaser";
import { CST } from "../CST";
import { coin , salto , checkpoint_ , lose , giro  , music , coin_ , time} from '../sounds/index';
import {
  starRubble,starChase,starSkye,starMarshall,
  // starCheck,
  pista,
  estrella,
  checkpoint,
  pista_round,
  fondoSkye,
  fondoChase,
  fondoRubble,
  fondoMarshall,
  personajeChase,
  personajeSkye,
  personajeRubble,
  personajeMarshall,
  bg_blur, 
  bbOn, 
  btnStart,
  arrowRight,
  arrowLeft,
  arrowUp,
  arrowReverse,
  btnReplay,
  btnBack,
  bgStars,
  btnPersonaje,
  arrow,
  arrowUpReverse,
  pluscheck, 
  plusfive,
  message1,
  message2,
  message3,
  message4,
  message5,
  message6,
  btnMore,
  btnHome,
  spinner,
  pistaInitial,
  uno, dos, tres,
  btnRanking,
  spriteChase,
  spriteMarshall,
  spriteSky,
  spriteRubble,
  stopMusic
} from "../assets";

import Game from "./Game";

export default class LoadScene extends Phaser.Scene {
  constructor(avatar,height,width) {
    super({
      key: CST.SCENES.LOAD,
    });
    this.avatar = avatar;
    this.height = height;
    this.width = width;
    var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };
  this.isMobile = isMobile.any() ? true : false;
  }
  init() {}
  preload() {
    //Cargar fondo del juego
    //this.load.image("fondo", './');
    //Cargar Music game
    //this.load.audio('golpe', golpe);

    // Load player animations from the player spritesheet and atlas JSON
    //this.load.atlas('personaje1', personaje1, atlas);
    // this.load.atlas('personaje2', personaje2, atlas);

    //this.load.image('cuadroVidas', cuadroVidas);
    //this.load.spritesheet('cuadroVidas',cuadroVidas,{
    //    frameWidth: 86,
    //    frameHeight: 47
    //})
    //Cargar fondo del juego
    this.load.image("pista", pista)
    this.load.image("personaje", this.getPersonaje())
    this.load.image("estrella", estrella)
    this.load.image("checkpoint", checkpoint)
    this.load.image("checkpoint_avatar",this.getCheckpoint())
  //   this.load.spritesheet("checkpoint_chase", starCheck,{
  //     frameWidth:200,
  //     frameHeight:200
  // })
    this.load.image("pista_round",pista_round);
    this.load.image("pista_initial",pistaInitial);
    this.load.image('fondo',this.getFondo());
    this.load.image("bg_blur", bg_blur);
    this.load.image("bbOn", bbOn);
    this.load.image("btnStart", btnStart); 
    this.load.image("btnReplay", btnReplay);
    this.load.image("btnBack", btnBack);
    this.load.image("btnMore", btnMore);
    this.load.image("btnHome", btnHome);
    this.load.image("bgStars", bgStars);
    this.load.image("btnPersonaje", btnPersonaje);    
    this.load.image("arrow_right",arrowRight);
    this.load.image("arrow_left",arrowLeft);
    this.load.image("arrow_up",arrowUp);
    this.load.image('arrow',arrow);
    this.load.image('arrow_reverse',arrowReverse);
    this.load.image('arrow_up_reverse',arrowUpReverse)
    this.load.image('pluscheck', pluscheck);
    this.load.image('plusfive', plusfive);
    this.load.image('message1',message1);
    this.load.image('message2',message2);
    this.load.image('message3',message3);
    this.load.image('message4',message4);
    this.load.image('message5',message5);
    this.load.image('message6',message6);
    this.load.image('uno',uno);
    this.load.image('dos', dos);
    this.load.image('tres', tres);
    this.load.image('spinner', spinner);
    this.load.image('btnRanking', btnRanking);
    this.load.image('spriteChase', spriteChase);
    this.load.image('spriteMarshall', spriteMarshall);
    this.load.image('spriteSky',spriteSky);
    this.load.image('spriteRubble',spriteRubble);
    this.load.image('stopMusic', stopMusic)

     //Sonidos
    this.load.audio('coin', coin);
    this.load.audio('coin_', coin_);
    this.load.audio('salto', salto);
    this.load.audio('lose', lose);
    this.load.audio('checkpoint_', checkpoint_);
    this.load.audio('giro',giro);
    this.load.audio('music', music);
    this.load.audio('time', time);

    this.createLoadingBar();
    var x  = -20;
    var y = 0;
    let loadingBar = this.add.graphics({
      x: x, y: y,
      fillStyle: {
        color: 0xffffff, //white        
      },
    });

    
   
    this.load.on("progress", (percent) => {
      loadingBar.fillRect(50, this.sys.scale.height / 2 + 40,
        (this.game.renderer.width -65)* percent,
        20
      );
    });

    this.load.on("complete", () => {
      this.onComplete();
    });
  }

  getPersonaje(){
    return this.avatar === "chase"
    ? personajeChase
    : this.avatar === "skye"
    ? personajeSkye
    : this.avatar === "marshall"
    ? personajeMarshall
    : personajeRubble;
  }
  getCheckpoint(){
    return this.avatar === "chase"
    ? starChase
    : this.avatar === "skye"
    ? starSkye
    : this.avatar === "marshall"
    ? starMarshall
    : starRubble;
  }
  getFondo() {
    return this.avatar === "chase"
      ? fondoChase
      : this.avatar === "skye"
      ? fondoSkye
      : this.avatar === "marshall"
      ? fondoMarshall
      : fondoRubble;
  }

  create() {}
  createLoadingBar() {
    this.mensajePrecargaX = this.add
      .text(
        this.sys.scale.width / 2,
        this.sys.scale.height / 2,
        "Cargando...",
        { font: "20px crosstenextrabold", fill: "#ffffff" }
      )
      .setDepth(5)
      .setOrigin(0.5, 0.5);
    this.txt_progress = this.add
      .text(this.sys.scale.width / 2 , this.sys.scale.height / 2 - 40, "0%", {
        font: "40px crosstenextrabold",
        fill: "#ffffff", align: "center", wordWrap: { width: 300 }
      })    
      .setDepth(5)
      .setOrigin(0.5, 0.5);
    this.load.on("progress", this.onProgress, this);
  }
  onProgress(val) {
    this.txt_progress.setText(Math.round(val * 100) + "%");
  }
  onComplete() {
    this.scene.add(CST.SCENES.MENU, new Game(this.avatar,this.height,this.width,this.isMobile), false);
    this.scene.start(CST.SCENES.MENU, "cargó el juego");
  }
}
