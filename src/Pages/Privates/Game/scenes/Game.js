import ReactGA from 'react-ga';
import { CST } from "../CST";
import Phaser from "phaser";
import { fetchWithToken } from "../../../../Helpers/Bba5/api/fetch";
import { game } from "../../../../Helpers/Game/index";
import {
  MAX_SCORE_CHANGE_FIRST,
  MAX_SCORE_CHANGE_SECOND,
  MAX_TIME_SHOW_RANDOM_MESSAGE,
	MAX_SCORE_CHANGE_MESSAGE,
  MAX_SCORE_VELOCITY,
	ANGLE_GIRO,
	DURATION_DEAD,
	MAX_COUNT_CHECKPOINT,
	VOLUME_COIN,
	VOLUME_CHECKPOINT,
	VOLUME_JUMP,
	VOLUME_LOSE,
	VOLUME_GAME,
    VOLUME_TIME,
	VOLUME_GIRO,
	MIN_AREA,
	MAX_BLOQUES_SHOW,
	MIN_BLOQUES_SHOW,
	MIN_TRAMOS,
	DURATION_DESTROY,
	INITIAL_VELOCIDAD,
	PASO_MITAD,
	SIZE_AFTER_DEAD,
  SUMA_VELOCITY
} from './Configurable';

import {
  INITIAL_VALUE_NUMBER,
  ANGLE_AFTER_DEAD,
  INITIAL_VALUE_BOOL,
  INITIAL_VALUE_BOOL_REVERSE,
  MAX_COUNT_HIDE,
  EMPTY,
  ORIGIN_X,
  ORIGIN_Y,
  ACTIVE,
  TILE_SIZE,
  IZQUIERDA,
  DERECHA,
  ARRIBA,
  CENTRO,
  EMPTY_ARRAY,
  HIDE,
  SHOW,
  STARTING,
  GIRANDO,
  X,Y,LOSE,SIZE_JUMP,DURATION_GIRO,
  SIZE_AVANCE_TILE,
  SIZE_AVANCE_IMG
} from "./Constants";
export default class HelloWorldScene extends Phaser.Scene {
  constructor(avatar, height, width,isMobile) {
    super({
      key: CST.SCENES.MENU,
    });
    this.avatar = avatar;
    this.height = height;
    this.width = width;
    this.isMobile = isMobile;
  }
  init() {
    sessionStorage.setItem('ranking-item',JSON.stringify(false))
    this.isMuted = JSON.parse(sessionStorage.getItem('isMuted')) || false;
    game();
    this.validateGame();
  }

  preload() {
    //Cada cuentos score va a parecer un mensaje
    this.maxScoreChange = MAX_SCORE_CHANGE_MESSAGE;
	  this.messageNumber = INITIAL_VALUE_NUMBER + 1;
    //Id del ultimo tile cuando gira
    this.tileAnterior = EMPTY;
    this.tileGiro = INITIAL_VALUE_BOOL;
    this.body = INITIAL_VALUE_NUMBER;
    this.newTileFocus = EMPTY;
    this.imgCheckNew = EMPTY;
    //Gradis en el que gira la camara al girar el personaje
    this.giroX = ANGLE_GIRO;

    this.game.ancho = this.game.config.width;
    this.game.alto = this.game.config.height;

    this.countBeforeCheckpoint = INITIAL_VALUE_NUMBER;
    //Siempre en par
    this.maximoCountCheckpoint = MAX_COUNT_CHECKPOINT;

    this.isInCheckpoint = INITIAL_VALUE_BOOL;

    //No cambiar este valor para los tiles vacíos
    this.maximoCountHideTile = MAX_COUNT_HIDE;
    this.countMaximoCountHideTile = INITIAL_VALUE_NUMBER;

    this.estadoJuego = ACTIVE;
    this.tileTemporal = EMPTY;
    var fondoJuego = this.newUnits(414, this.game.ancho);
    this.fondoJuego = this.add.image(
      INITIAL_VALUE_NUMBER,
      INITIAL_VALUE_NUMBER,
      "fondo"
    );

    this.fondoJuego.setScale(fondoJuego.scale);
    this.fondoJuego.setOrigin(ORIGIN_X, ORIGIN_Y);
    this.maxScoreChange = MAX_SCORE_CHANGE_MESSAGE;
    // this.sonidoCoin = this.sound.add("coin", { volume: VOLUME_COIN });
    this.sonidoCoin = this.sound.add("coin_", { volume: VOLUME_COIN });

    this.sonidoMusic = this.sound.add("music", { volume: VOLUME_GAME, loop: INITIAL_VALUE_BOOL_REVERSE });
    this.sonidoTime = this.sound.add("time", { volume: VOLUME_TIME });    
    this.sonidoSalto = this.sound.add("salto", { volume: VOLUME_JUMP });
    this.sonidoCheckpoint = this.sound.add("checkpoint_", { volume: VOLUME_CHECKPOINT });
    this.sonidoLose = this.sound.add("lose", { volume: VOLUME_LOSE });
    this.sonidoGiro = this.sound.add("giro", { volume: VOLUME_GIRO });

    this.tileSize = TILE_SIZE;
    this.areaMinima = MIN_AREA;

    this.start = INITIAL_VALUE_BOOL;

    this.minBloques = MIN_BLOQUES_SHOW;
    this.maxBloques = MAX_BLOQUES_SHOW;
    this.score = INITIAL_VALUE_NUMBER;
    this.pistaX = CENTRO;
    this.pistaY = CENTRO;
    this.pistaOrientacion = ARRIBA; //x,y

    this.imgStarGroup = this.physics.add.group();
    this.imgCheckGroup = this.physics.add.group();
    this.emptyTileGroup = this.physics.add.group();
    this.contenedor = this.add.container(this.height / 2, this.width / 2);
    this.camino = EMPTY_ARRAY;
    this.tileFocus = INITIAL_VALUE_NUMBER;
    // this.anchoCubierto = INITIAL_VALUE_NUMBER;
    // this.altoCubierto = INITIAL_VALUE_NUMBER;
    // this.tileEntrando = INITIAL_VALUE_BOOL_REVERSE;
    this.tiles = this.physics.add.group();
    this.crearTramo(MAX_BLOQUES_SHOW,CENTRO,ARRIBA);
    this.crearPista(MIN_TRAMOS);
    // this.input.setPollAlways();
    this.interval = 0;
    this.avanceCheckpoint = INITIAL_VALUE_NUMBER + 1;
    this.saltando = INITIAL_VALUE_BOOL;

    this.pressCharacter = INITIAL_VALUE_BOOL;
    this.pressGiro = INITIAL_VALUE_BOOL;
    this.dirX = CENTRO;
    this.dirY = ARRIBA;
    this.dirXAnterior = CENTRO;
    this.salio = false;

    //Velocidad con la que se va a mover si aumenta va como el rayo maqueen
    this.velocidad = INITIAL_VELOCIDAD;

    this.personaje = this.physics.add.image(INITIAL_VALUE_NUMBER, INITIAL_VALUE_NUMBER, "personaje").setInteractive();
    this.personaje.setOrigin(ORIGIN_X, ORIGIN_Y);
    this.personaje.setDepth(20);

    // var varStart = false;
  
    this.pistaRound = this.physics.add.image(INITIAL_VALUE_NUMBER, INITIAL_VALUE_NUMBER, "pista_round");
    this.pistaRound.setOrigin(ORIGIN_X, ORIGIN_Y );
    this.pistaRound.setScale(2.25);
    this.pistaRound.setDepth(10);
    //this.contenedor.add(this.personaje);

    this.cameras.main.removeBounds();
    this.cameras.main.startFollow(this.personaje, false);

    // this.cameras.main.setZoom(2);
    this.physics.add.overlap(this.personaje, this.tiles, this.hit, EMPTY, this);
    this.physics.add.overlap(
      this.personaje,
      this.imgStarGroup,
      this.getPoints,
      EMPTY,
      this
    );
    this.physics.add.overlap(
      this.personaje,
      this.imgCheckGroup,
      this.getCheck,
      EMPTY,
      this
    );
    this.physics.add.overlap(this.personaje, this.tiles, this.hit, EMPTY, this);
    this.physics.add.overlap(
      this.personaje,
      this.imgStarGroup,
      this.getPoints,
      EMPTY,
      this
    );
    this.physics.add.overlap(
      this.personaje,
      this.imgCheckGroup,
      this.getCheck,
      EMPTY,
      this
    );
    var bg_blurr = this.newUnits(414, this.game.ancho);
    this.bg_blur = this.physics.add.image(INITIAL_VALUE_NUMBER, INITIAL_VALUE_NUMBER, "bg_blur");
    this.bg_blur.setOrigin(ORIGIN_X, ORIGIN_Y);
    this.bg_blur.setScale(bg_blurr.scale, window.screen.height);
    this.bg_blur.setDepth(30);

    this.startGameText = this.add.text( window.screen.width < 450 ? this.personaje.x-110 : this.personaje.x-98, window.screen.width < 450 ?  this.personaje.y-140 :  this.personaje.y-160, '¿Estás lista para empezar?',
		{ font: "18px crosstenextrabold", align: "center", wordWrap: { width: 290 }, fontWeight: "bold", color:'#FCDC00' });
			this.startGameText.setDepth(230);	

    this.bg_on = this.physics.add.image(INITIAL_VALUE_NUMBER, INITIAL_VALUE_NUMBER+20, "bbOn");
    this.bg_on.setOrigin(ORIGIN_X, ORIGIN_Y);
    this.bg_on.setDepth(35);

    var btnStart = this.newUnits(374, this.game.ancho * 0.7);
    this.btnStart = this.add.sprite(INITIAL_VALUE_NUMBER, 200, "btnStart").setInteractive();
    this.btnStart.setOrigin(ORIGIN_X, ORIGIN_Y);
    this.btnStart.setScale(btnStart.scale);
    this.btnStart.setDepth(200);
    this.btnStart.on(
      "pointerdown",
      () => {
		this.showSpinner();
		this.sendPost();    
		this.destroy(this.spinner);	
    this.destroy(this.startGameText);
    this.destroy(this.btnStart);
		this.destroy(this.bg_on);

    setTimeout(() => {
      if(this.varStart !== true){        
        this.countAnim();
      }
    }, 2000);

      },
      this
    );
    this.input.on("pointerdown", this.hizoClick,this);
    this.personaje.on("pointerdown", this.hizoClick2,this);

  }
  hizoClick2(e){
    if(this.isMobile){
      if(!this.pressCharacter){
        this.pressCharacter = INITIAL_VALUE_BOOL_REVERSE;
        this.hizoClick(e);      
      }else{
        this.pressCharacter = INITIAL_VALUE_BOOL;
      }
    }else{
      this.hizoClick(e);
    }
  }
  showSpinner(){	
		var spinner_ = this.newUnits(200, this.game.ancho * 0.1);
		this.spinner = this.add.sprite(0, 300, "spinner").setInteractive();
		this.spinner.setOrigin(0.5, 0.5);
		this.spinner.setScale(spinner_.scale);
		this.spinner.setDepth(210);
		this.tweens.add({
			targets: this.spinner,
			ease: "linear", // 'Cubic', 'Elastic', '', 'Back'
			rotation: 5, 
			duration: 1000,
			repeat: 0,
		});
	}
  destroy(object) {
    this.tweens.add({
      targets: object,
      ease: "linear", // 'Cubic', 'Elastic', '', 'Back'
      alpha: {
        getStart: () => SHOW,
        getEnd: () => HIDE,
      },
      duration: DURATION_DESTROY,
      repeat: INITIAL_VALUE_NUMBER,
      onComplete: function () {
        object.destroy();
      },
    });
  }
  create() {}
  update(time, delta) {
    // This function is called 60 times per second
    // It contains the this.game's logic
    if (this.estadoJuego !== ACTIVE) {
      return;
    }
    //if(this.tileFocus==(this.camino.length)) return;
    if (this.start === STARTING) {
      if(this.newTileFocus !== EMPTY){
        if (this.newTileFocus.id > this.camino.length - 10) {
          this.crearPista(MIN_TRAMOS);
          this.eliminarTiles();
        }
      }

      if (this.newTileFocus !== EMPTY) {
        if (this.dirY === CENTRO) {
          //está avanzando horizontalmente
          if (
            this.camino[this.newTileFocus.id+1].y === ARRIBA && !this.salio && this.anchoCubierto < this.areaMinima
          ) {
            console.log("Perdio 1", this.camino[this.newTileFocus.id + 1].y,this.anchoCubierto ,this.areaMinima ,
            !this.tileEntrando);
            console.log(this.newTileFocus);
            this.estadoJuego = LOSE;
            this.deadAnimation(X,null);
            // this.personaje.x > 0 ? this.personaje.x-=100-this.anchoCubierto :  this.personaje.x+=100-this.anchoCubierto
          }
        } else {
          //está avanzando verticalmente
          if (
            this.camino[this.newTileFocus.id+1].y === CENTRO  && !this.salio && this.altoCubierto < this.areaMinima
          ) {
            // console.log("Perdio 2", this.camino[this.newTileFocus.id + 1].y,this.altoCubierto ,this.areaMinima ,
            // !this.tileEntrando);
            this.estadoJuego = LOSE;
            this.deadAnimation(Y, null);
            // this.personaje.y > 0 ? this.personaje.y-=100-this.altoCubierto :  this.personaje.y+=100-this.altoCubierto
          }
        }
      }

      this.personaje.x += this.dirX * this.velocidad;
      this.personaje.y -= this.dirY * this.velocidad;

      this.fondoJuego.x += this.dirX * this.velocidad;
      this.fondoJuego.y -= this.dirY * this.velocidad;
    }
  }
  hit(personaje, tile) {
    // this.getCheck(tile)
    // this.isInCheckoint = false;
    //this.addCheck();
    if (this.estadoJuego !== ACTIVE ) return;
    // if (!this.saltando) {
      var ancho = Phaser.Geom.Intersects.GetRectangleIntersection(
        personaje.getBounds(),
        tile.getBounds()
      ).width;
      var alto = Phaser.Geom.Intersects.GetRectangleIntersection(
        personaje.getBounds(),
        tile.getBounds()
      ).height;
      if (this.newTileFocus !== null){
        if (this.dirY === CENTRO) {
          this.newTileFocus = !tile.giro ? tile.id > this.newTileFocus.id  && alto > 40 ? tile  : this.newTileFocus  :  tile.id > this.newTileFocus.id  ? tile  : this.newTileFocus;
          // this.newTileFocus = alto > 30 ? tile : this.newTileFocus
        } else {
          this.newTileFocus = tile.id > this.newTileFocus.id && alto > 30  ? tile  : this.newTileFocus;
        }
      
      }else this.newTileFocus = tile;
      // this.newTileFocus.alpha = 0.3;
      if (tile.id === this.newTileFocus.id) {
        if (this.dirY === CENTRO) {
          //avanzando horizontalmente
          if (this.dirX === IZQUIERDA)
            this.salio = personaje.x - tile.x < 0 ? false : true;
          if (this.dirX === DERECHA)
            this.salio = personaje.x - tile.x < 0 ? true : false;
        } else {
          //avanzando verticalmente

          this.salio = personaje.y - tile.y < 0 ? false : true;
        }

        this.anchoCubierto = ancho;
        this.altoCubierto = alto;

      }
      

      if (this.newTileFocus.EmptyTile && !this.saltando) {
        this.tileTemporal = this.newTileFocus;
        if (this.dirX === DERECHA || this.dirX === IZQUIERDA) {
          if (this.anchoCubierto > PASO_MITAD) {
            this.estadoJuego = LOSE;
            // console.log("Game Over");
            this.girarCamara(INITIAL_VALUE_NUMBER, INITIAL_VALUE_NUMBER, LOSE);
          }
        } else if (this.dirY === 1) {
          if (this.altoCubierto > PASO_MITAD) {
            this.estadoJuego = LOSE;
            // console.log("Game Over");
            this.girarCamara(INITIAL_VALUE_NUMBER, INITIAL_VALUE_NUMBER, LOSE);
          }
        }
      }
    // }
  }
  jumpingAnimated(duration) {
    this.sonidoSalto.play();

    var ref = this;
    this.tweens.add({
      targets: this.personaje,
      scale: { from: 1, to: SIZE_JUMP },
      // x:this.newTileFocus.x,
      // y:this.newTileFocus.y,
      ease: "linear", // 'Cubic', 'Elastic', '', 'Back'
      duration: duration / this.velocidad,
      repeat: 0,
      yoyo: true,
      onComplete: function () {
        ref.saltando = false;
        ref.tileEntrando = false;
      },
    });
  }
  girarCamara(x, y, message) {
    var ref = this;
    if (message === GIRANDO) {
      let giro = this.dirX === DERECHA ? x : x * IZQUIERDA;
      this.cameras.main.rotateTo(
        giro,
        true,
        DURATION_GIRO / this.velocidad,
        "Cubic",
        true
      );
      // setTimeout(function () {
        // ref.imgCheckNew.rotation = ref.giroX > 0 ? 0 : 180
        // console.log(ref.giroX , ref.dirX , ref.dirY);
        // ref.cameras.main.rotateTo(0, true, 3000 / ref.velocidad, "Cubic", true);
       
        ref.dirX === 1 ? ref.giroX += ANGLE_GIRO : ref.giroX -= ANGLE_GIRO;
        // ref.dirX === 1 ? (  Math.abs(ref.giroX) >= 180 ? ref.giroX+= ANGLE_GIRO : ref.giroX -= ANGLE_GIRO) : (Math.abs(ref.giroX) >= 180 ? ref.giroX+=ANGLE_GIRO : ref.giroX -= ANGLE_GIRO);
        // if(ref.imgCheckNew !== null){
        //   ref.imgCheckNew.angle = ref.giroX > 0 ? ref.giroX - ANGLE_GIRO : ref.giroX + ANGLE_GIRO;
        // }
      // }, 500);


    } else {
      setTimeout(function () {
        ref.cameras.main.rotateTo(INITIAL_VALUE_NUMBER, true, DURATION_GIRO - 1000, "Cubic", true);
        setTimeout(() => {
          ref.endGame(this.score);
        }, 500);
      }, 300);
    }
    // setTimeout(function () {}, DURATION_GIRO*2 / ref.velocidad);
  }
  deadAnimation(dir, click) {
    var ref = this;
    if (click !== EMPTY) {
      if (dir === X) {
        this.tweens.add({
          targets: ref.personaje,
          scale: { from: SHOW, to: HIDE },
          angle:
            click.y > this.height / 2
              ? ref.personaje.angle + ANGLE_AFTER_DEAD
              : ref.personaje.angle - ANGLE_AFTER_DEAD,
          x: ref.personaje.x,
          y:
            click.y < this.height / 2
              ? ref.personaje.y - SIZE_AFTER_DEAD
              : ref.personaje.y + SIZE_AFTER_DEAD,
          ease: "linear", // 'Cubic', 'Elastic', '', 'Back'
          duration: DURATION_DEAD,
          repeat: 0,
          yoyo: false,
          onComplete: function () {
            ref.girarCamara(INITIAL_VALUE_NUMBER,INITIAL_VALUE_NUMBER , LOSE);
          },
        });
      } else {
        this.tweens.add({
          targets: ref.personaje,
          scale: { from: SHOW, to: HIDE },
          angle: click.x > this.width/2 ? ANGLE_AFTER_DEAD : -ANGLE_AFTER_DEAD,
          x: click.x > this.width/2 ? ref.personaje.x + SIZE_AFTER_DEAD : ref.personaje.x - SIZE_AFTER_DEAD,
          y: ref.personaje.y,
          ease: "linear", // 'Cubic', 'Elastic', '', 'Back'
          duration: DURATION_DEAD,
          repeat: 0,
          yoyo: false,
          onComplete: function () {
            ref.girarCamara(INITIAL_VALUE_NUMBER,INITIAL_VALUE_NUMBER, LOSE);
          },
        });
      }
    } else {
      if (dir === Y) {
        this.tweens.add({
          targets: ref.personaje,
          scale: { from: SHOW, to: HIDE },
          x: ref.personaje.x,
          y: ref.personaje.y - SIZE_AFTER_DEAD,
          ease: "linear", // 'Cubic', 'Elastic', '', 'Back'
          duration: DURATION_DEAD,
          repeat: 0,
          yoyo: false,
          onComplete: function () {
			ref.girarCamara(INITIAL_VALUE_NUMBER,INITIAL_VALUE_NUMBER, LOSE);
          },
        });
      } else {
        this.tweens.add({
          targets: ref.personaje,
          scale: { from: SHOW, to: HIDE },
          x: ref.dirX === -1 ? ref.personaje.x - SIZE_AFTER_DEAD  : ref.personaje.x + SIZE_AFTER_DEAD,
          y: ref.personaje.y,
          ease: "linear", // 'Cubic', 'Elastic', '', 'Back'
          duration: DURATION_DEAD,
          repeat: 0,
          yoyo: false,
          onComplete: function () {
			ref.girarCamara(INITIAL_VALUE_NUMBER,INITIAL_VALUE_NUMBER, LOSE);
          },
        });
      }
    }
  }
  hizoClick(e) {
    // let dirTemporalX = this.dirX;
    if (this.estadoJuego !== ACTIVE) return;
    if (!this.saltando && this.start && !this.pressGiro) {
      if(this.tileTemporal!==null){
        this.tileTemporal.destroy();
        this.tileTemporal = null;
        this.saltando = true;
        this.tileEntrando = true;
        this.jumpingAnimated(1000);
        console.log("Salto 3");
      }else{
        if (this.dirY === CENTRO) {
          //está avanzando horizontalmente
          if (this.camino[this.newTileFocus.id + 1].y === ARRIBA) {
            this.dirY = ARRIBA;
            this.dirX = CENTRO;
          } else {
            // this.newTileFocus.alpha = 0.2;
            if (this.newTileFocus.isAnteriorEmpty) {
              this.emptyTileGroup.getChildren()[INITIAL_VALUE_NUMBER].destroy();
              this.saltando = true;
              this.tileEntrando = true;
              this.jumpingAnimated(1000);
              console.log("Salto1")
            } else {
              this.estadoJuego = LOSE;
              this.deadAnimation(X, e);
              console.log("Aqui 1", this.camino[this.newTileFocus.id + 1].y);
              console.log(this.altoCubierto ,this.newTileFocus);
            }
            return
          }
        } else {
          //está avanzando verticalmente
          if (this.camino[this.newTileFocus.id + 1].x !== CENTRO) {
            this.dirX = this.camino[this.newTileFocus.id + 1].x;
            this.dirY = CENTRO;
          } else {
            if (this.newTileFocus.isAnteriorEmpty) {
              this.emptyTileGroup.getChildren()[INITIAL_VALUE_NUMBER].destroy();
              this.saltando = true;
              this.tileEntrando = true;

              this.jumpingAnimated(1000);

              console.log("Salto2")
            } else {
              this.estadoJuego = LOSE;
              this.deadAnimation(Y, e);
              console.log("Aqui 2", this.camino[this.newTileFocus.id + 1].x);
              console.log(this.altoCubierto);
            }
            return 
          }
        }

        if (this.dirY === ARRIBA) {
          //dirTemporalX === 1 ? this.personaje.x-=100-this.anchoCubierto : this.personaje.x+=100-this.anchoCubierto
          this.sonidoGiro.play();
          this.pressGiro = true;
          this.girarPersonaje(INITIAL_VALUE_NUMBER);
          this.girarCamara(this.giroX, this.giroY, "girando");
        } else {
          //this.personaje.y+=100-this.altoCubierto
          this.pressGiro = true;
          this.girarPersonaje(90 * this.dirX);
          this.sonidoGiro.play();
          this.girarCamara(this.giroX, this.giroY, "girando");
        }
      }
    }else{
      console.log(this.saltando,this.start,this.pressGiro);
    }
  }
  eliminarTiles() {
    var arr = this.tiles.getChildren();
    var eliminados = 0;
    var total = arr.length - (this.camino.length - this.newTileFocus.id) - 7;
    while (eliminados < total) {
      arr[0].alpha = 0;
      arr[0].destroy();
      eliminados++;
    }
  }
  crearPista(tramos) {
    var bloques1 =
      this.minBloques +
      Math.round((this.maxBloques - this.minBloques) * Math.random());
    var bloques2 =
      this.minBloques +
      Math.round((this.maxBloques - this.minBloques) * Math.random());
    var vectoresX = [IZQUIERDA, DERECHA];
    var vx = vectoresX[Math.round(Math.random())];

    this.crearTramo(bloques1, vx, CENTRO);
    this.crearTramo(bloques2, CENTRO, ARRIBA);
  }
  girarPersonaje(angle) {
    var ref = this;
    this.tweens.add({
      targets: this.personaje,
      angle: angle, // '+=100'
      ease: "Cubic", // 'Cubic', 'Elastic', 'Bounce', 'Back'
      duration: 900 / this.velocidad,
      repeat: 0,
      yoyo: false,
      onComplete: () =>{
        ref.pressGiro = false;
      }
    });
  }
  crearTramo(bloques, vx, vy) {
    this.countBeforeCheckpoint++;
    this.countMaximoCountHideTile++;
    let createCheckpoint = INITIAL_VALUE_BOOL;
    let anterior = EMPTY;
    let createEmpty = INITIAL_VALUE_BOOL;
    let starCreate = EMPTY;
    for (var i = 0; i < bloques; i++) {
      this.camino.push({ x: vx, y: vy });

      if (createCheckpoint) {
        if (vx === DERECHA) {
          this.pistaX += this.tileSize * vx + SIZE_AVANCE_TILE;
          this.pistaY -= this.tileSize * vy;
        } else if (vx === IZQUIERDA) {
          this.pistaX += this.tileSize * vx - SIZE_AVANCE_TILE;
          this.pistaY -= this.tileSize * vy;
        } else {
          this.pistaX += this.tileSize * vx;
          this.pistaY -= this.tileSize * vy + SIZE_AVANCE_TILE;
        }
        createCheckpoint = INITIAL_VALUE_BOOL;
      } else {
        this.pistaY -= this.tileSize * vy;
        this.pistaX += this.tileSize * vx;
      }

      //Cambiar textura cuando gira
      if (this.tileGiro && i === INITIAL_VALUE_NUMBER) {
        let tileDirection = this.tileAnterior;
        this.tileGiro = false;
        tileDirection.setAngle(0);
        if (vx !== CENTRO) {
          // vx === -1 ? tileDirection.setAngle(180) : tileDirection.setAngle(0);
          vx === IZQUIERDA
            ? tileDirection.setTexture("arrow_left")
            : tileDirection.setTexture("arrow_right");
        } else {
          this.dirXAnterior === DERECHA
            ? tileDirection.setTexture("arrow_up")
            : tileDirection.setTexture("arrow_up_reverse");

          // tileDirection.setAngle(-90)
        }
      }
      var p = this.tiles.create(this.pistaX, this.pistaY, "pista");
      p.setDepth(5);
      if (vy !== ARRIBA) {
        p.angle = 90 * vx;
      }
      if (
        this.countBeforeCheckpoint === this.maximoCountCheckpoint &&
        i < bloques - 1 &&
        i !== INITIAL_VALUE_NUMBER
      ) {
        this.countBeforeCheckpoint = INITIAL_VALUE_NUMBER;
        p.isCheckpoint = INITIAL_VALUE_BOOL_REVERSE;
        p.setTexture("pista_round");
        p.setDepth(10);
        createCheckpoint = INITIAL_VALUE_BOOL_REVERSE;
        p.setScale(2.25);
        var imgCheckScale = this.newUnits(104, this.game.ancho * 0.15);
        var imgCheck = this.imgCheckGroup.create(
          this.pistaX,
          this.pistaY,
          "checkpoint_avatar"
        );
        // this.anims.create({
        //   key: "anim_check_chase",
        //   frames: this.anims.generateFrameNumbers("checkpoint_chase"),
        //   frameRate: 10,
        //   repeat: -1,
        // });
        imgCheck.setScale(imgCheckScale.scale);
        imgCheck.setOrigin(ORIGIN_X, ORIGIN_Y);
        imgCheck.setDepth(10);
        imgCheck.play("anim_check_chase");
        if (vx !== CENTRO) {
          if (vx === DERECHA) {
            p.x += SIZE_AVANCE_IMG;
            imgCheck.x += SIZE_AVANCE_IMG;
          } else {
            p.x -= SIZE_AVANCE_IMG;
            imgCheck.x -= SIZE_AVANCE_IMG;
          }
        } else {
          p.y -= SIZE_AVANCE_IMG;
          imgCheck.y -= SIZE_AVANCE_IMG;
        }
        this.imgCheckNew = imgCheck;
      } else {
        p.isCheckpoint = INITIAL_VALUE_BOOL;
      }

      if (
        this.countMaximoCountHideTile === this.maximoCountHideTile &&
        i < bloques - 1 &&
        i > 1 &&
        !p.isCheckpoint
      ) {
        this.countMaximoCountHideTile = INITIAL_VALUE_NUMBER;
        // debugger;
        if (anterior.isCheckpoint) {
          p.EmptyTile = INITIAL_VALUE_BOOL;
          createCheckpoint = INITIAL_VALUE_BOOL;
        } else {
          p.setAlpha(0);
          p.EmptyTile = INITIAL_VALUE_BOOL_REVERSE;
          this.emptyTileGroup.add(p);
          // anterior.setAngle(0);
          anterior.setTexture("arrow");
          anterior.isAnteriorEmpty = INITIAL_VALUE_BOOL_REVERSE;
          if (starCreate !== EMPTY) {
            starCreate.destroy();
          }
          if (vx === DERECHA) {
            anterior.setAngle(0);
            // anterior.setTexture('arrow_right');
          } else if (vx === IZQUIERDA) {
            anterior.setAngle(180);
            // anterior.setTexture('arrow_left');
          } else {
            anterior.setAngle(90);
            // anterior.setTexture('arrow_up');
          }
        }
      } else {
        p.EmptyTile = INITIAL_VALUE_BOOL;
        //Descomentar si desea que sea random y agregarle al if numberRandom === 4
        // const numberRandom = Math.floor(Math.random() * 6);
        if (!p.isCheckpoint && !createEmpty) {
          var imgStarScale = this.newUnits(55, this.game.ancho * 0.075);
          var imgStar = this.imgStarGroup.create(
            this.pistaX,
            this.pistaY,
            "estrella"
          );
          imgStar.setScale(imgStarScale.scale);
          imgStar.setOrigin(ORIGIN_X, ORIGIN_Y);
          imgStar.setDepth(14);
          starCreate = imgStar;
        }
      }

      p.id = this.camino.length - 1;
      anterior = p;

      if (createEmpty) {
        p.setAngle(0);
        p.setTexture("arrow_reverse");
        if (starCreate !== EMPTY) {
          starCreate.destroy();
        }
        if (vx === DERECHA) {
          i === bloques - 1 ? p.setAngle(-90) : p.setAngle(0);
          // i === bloques - 1 ? p.setTexture('arrow_up') :  p.setTexture('arrow_right')
        } else if (vx === IZQUIERDA) {
          i === bloques - 1 ? p.setAngle(-90) : p.setAngle(180);
          // i === bloques - 1 ?  p.setTexture('arrow_up') : p.setTexture('arrow_left')
        } else {
          p.setAngle(90);
          // p.setTexture('arrow_up');
        }
        createEmpty = INITIAL_VALUE_BOOL;
      } else if (p.EmptyTile) {
        createEmpty = INITIAL_VALUE_BOOL_REVERSE;
      } else if (i === bloques - 1) {
        this.tileAnterior = p;
        this.tileGiro = INITIAL_VALUE_BOOL_REVERSE;
        p.giro = true;
        this.dirXAnterior = vx;
        if (starCreate !== EMPTY) starCreate.destroy();
      }
    }
  }
  getCheck(player, check) {
    if (!this.isInCheckpoint) {
      check.destroy();
      this.anim10();
      this.sonidoCheckpoint.play();
      this.regresar(player, check, this.dirY);
      this.score += 10;
      if(this.score % 500 === 0){
        this.avanceCheckpoint++;
        this.maximoCountCheckpoint = MAX_COUNT_CHECKPOINT + this.avanceCheckpoint;
      }
      this.scoreLabel = this.getElement("score");
      this.scoreLabel.innerText = `${this.score} pts`;
      this.randomMessage();
    }
  }
  regresar(player, check, dir) {
    if (dir === DERECHA) {
      this.tweens.add({
        targets: player,
        x: check.x,
        ease: "Cubic", // 'Cubic', 'Elastic', 'Bounce', 'Back'
        duration: 500,
        repeat: 0,
        yoyo: false,
        onComplete: function () {
          //	check.destroy();
          //	console.log("destroy")
        },
      });
    } else {
      this.tweens.add({
        targets: player,
        y: check.y,
        ease: "Cubic", // 'Cubic', 'Elastic', 'Bounce', 'Back'
        duration: 500,
        repeat: 0,
        yoyo: false,
        onComplete: function () {
          //check.destroy();
        },
      });
    }
  }

  endGame(){
    this.scoreLabel.innerText = "0 pts.";
    this.sonidoMusic.stop();
    this.sonidoLose.play();
    this.varStart=false;
    const {juegos_restantes} = JSON.parse(sessionStorage.getItem("body2"));

    var bgBlurr = this.newUnits(414,this.game.ancho);
    this.bgBlur = this.physics.add.image(this.personaje.x, this.personaje.y,"bg_blur");
    this.bgBlur.setOrigin(0.5,0.5);
    this.bgBlur.setScale(bgBlurr.scale, window.screen.height);
    this.bgBlur.setDepth(200);

    var bgStarss = this.newUnits(356,this.game.ancho*0.8);
    this.bgStars = this.add.sprite(this.personaje.x, this.personaje.y,"bgStars");
    this.bgStars.setOrigin(0.5,0.5);
    this.bgStars.setScale(bgStarss.scale)
    this.bgStars.setDepth(220);
    
    this.getElement("playMusic").classList.add("d_none")

    if(juegos_restantes === 0){
      this.scoreLabel.classList.add("d_none");
      this.getElement("stopMusic").classList.add("d_none");
      this.startGameText.destroy();
      this.noChance();
      this.gameOver();
      // console.log("nochance")
    }
    else{
      this.scoreLabel.classList.add("d_none");
      this.getElement("stopMusic").classList.add("d_none")
      this.the_end();
      this.gameOver();
    }
  }
  the_end(){		
    const {juegos_restantes} = JSON.parse(sessionStorage.getItem("body2"));
    const {max_points} = JSON.parse(sessionStorage.getItem("validate"));

      this.msj = this.add.text( this.personaje.x-80, window.screen.width < 450 ?  this.personaje.y-200 :  this.personaje.y-230, '¡Eso Fue increible!',
    { font: "19px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "bold", color:'#fff' });
      this.msj.setDepth(230);

      this.endGameScore = this.add.text( this.personaje.x-25, window.screen.width < 450 ?  this.personaje.y+2 :  this.personaje.y+3, this.score===1? this.score + ' pt': this.score +  ' pts',
      { font: "25px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "900", color:'#fff' });
      this.endGameScore.setDepth(230);

      this.endGameText = this.add.text( this.personaje.x-120, window.screen.width < 450 ?  this.personaje.y-120 :  this.personaje.y-160, 'Aún te quedan '+ juegos_restantes + ' intentos más',
    { font: "17px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "bold", color:'#04A6E1' });
      this.endGameText.setDepth(230);

      this.endGameScoreMax = this.add.text( this.personaje.x-115, window.screen.width < 450 ?  this.personaje.y+95 :  this.personaje.y+120, max_points > this.score ? 'Tu máximo puntaje: '+  max_points  +' pts' : 'Tu máximo puntaje: '+ this.score +' pts',
      { font: "17px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "900", color:'#454545' });
      this.endGameScoreMax.setDepth(230);

    var btnReplay = this.newUnits(374,this.game.ancho*0.7);
    this.btnReplay = this.add.sprite(this.personaje.x, window.screen.width < 450 ? this.personaje.y+150 : this.personaje.y+205,"btnReplay").setInteractive();
    this.btnReplay.setOrigin(0.5,0.5);
    this.btnReplay.setScale(btnReplay.scale)
    this.btnReplay.setDepth(220);
    this.btnReplay.on(
    "pointerdown",
    () => {
      this.scoreLabel.classList.add("d_none");
      this.getElement('stopMusic').classList.add('d_none');
      this.getElement('playMusic').classList.add('d_none')

      ReactGA.event({ category: 'JUEGO', action: 'Volver a jugar', });
      this.scene.restart();
      this.start = false;
    },
    this);   
    var btnHome = this.newUnits(249, this.game.ancho * 0.5);
    this.btnHome= this.add.sprite(this.personaje.x, window.screen.width < 450 ? this.personaje.y+220 : this.personaje.y+280,"btnRanking").setInteractive();
    this.btnHome.setOrigin(0.5,0.5);
    this.btnHome.setScale(btnHome.scale)
    this.btnHome.setDepth(220);
    this.btnHome.on( "pointerdown", () => {	
      ReactGA.event({ category: 'JUEGO', action: 'Ver ranking', });
      sessionStorage.setItem('ranking-item',JSON.stringify(true))
      window.location="./" 
    }, this);	
  }

  noChance(){			
    const {max_points} = JSON.parse(sessionStorage.getItem("validate"));

    this.msj = this.add.text( this.personaje.x-105, window.screen.width < 450 ?  this.personaje.y-200 :  this.personaje.y-260, '¡Cada día hay 10 nuevas oportunidades!',
    { font: "19px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "bold", color:'#fff' });
      this.msj.setDepth(230);	


      this.endGameScore = this.add.text( this.personaje.x-25, window.screen.width < 450 ?  this.personaje.y+2 :  this.personaje.y+3, this.score===1? this.score + ' pt': this.score +  ' pts',
      { font: "25px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "900", color:'#fff' });
      this.endGameScore.setDepth(230);

      this.endGameText = this.add.text( this.personaje.x-130, window.screen.width < 450 ?  this.personaje.y-120 :  this.personaje.y-160, 'Puedes compartir el juego para ganar más oportunidades de jugar',
    { font: "16px crosstenextrabold", align: "center", wordWrap: { width: 290 }, fontWeight: "bold", color:'#04A6E1' });
      this.endGameText.setDepth(230);


      this.endGameScoreMax = this.add.text( this.personaje.x-115, window.screen.width < 450 ?  this.personaje.y+95 :  this.personaje.y+120, max_points > this.score ? 'Tu máximo puntaje: '+  max_points  +' pts' : 'Tu máximo puntaje: '+ this.score +' pts',
      { font: "17px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "900", color:'#454545' });
      this.endGameScoreMax.setDepth(230);

      var btnMore = this.newUnits(310,this.game.ancho*0.6);
      this.btnMore = this.add.sprite(this.personaje.x, window.screen.width < 450 ? this.personaje.y+160 : this.personaje.y+205,"btnMore").setInteractive();
      this.btnMore.setOrigin(0.5,0.5);
      this.btnMore.setScale(btnMore.scale)
      this.btnMore.setDepth(220);
      this.btnMore.on(
      "pointerdown",
      () => {
        ReactGA.event({ category: 'JUEGO', action: 'Más Oportunidades', });
        window.location="https://www.bebeaventurero.com/usuario/compartir/"
      },
      this);
      
      var btnHome = this.newUnits(248, this.game.ancho * 0.5);
      this.btnHome= this.add.sprite(this.personaje.x, window.screen.width < 450 ? this.personaje.y+240 : this.personaje.y+280,"btnHome").setInteractive();
      this.btnHome.setOrigin(0.5,0.5);
      this.btnHome.setScale(btnHome.scale)
      this.btnHome.setDepth(220);
      this.btnHome.on( "pointerdown", () => {	
        ReactGA.event({ category: 'JUEGO', action: 'Ver ranking', });
        window.location="./"
       }, this);			
  }
  anim5(star) {
    let message_score = this.getElement('message_score');
    message_score.classList.add('show_points');
    setTimeout( () =>{
      message_score.classList.remove('show_points');
    },1000/this.velocidad)
    // var ref = this;
    // var plusfive = this.newUnits(100, this.game.ancho * 0.2);
    // this.plusfive = this.add.sprite(
    //   star.x,
    //   star.y,
    //   "plusfive"
    // );
    // this.plusfive.setOrigin(0.5, 0.5);
    // this.plusfive.setScale(plusfive.scale);
    // this.plusfive.setDepth(220);
    // this.tweens.add({
    //   targets: ref.plusfive,
    //   alpha: { from: 1, to: INITIAL_VALUE_NUMBER },
    //   ease: "Cubic", // 'Cubic', 'Elastic', '', 'Back'
    //   duration: 2000,
    //   repeat: 0,
    //   yoyo: false,
    //   onComplete: function () {
    //     ref.plusfive.destroy()
    //   },
    // });

  }
  anim10() {
    let message_checkpoint = this.getElement('message_checkpoint');
    message_checkpoint.classList.add('show_points');
    setTimeout( () =>{
      message_checkpoint.classList.remove('show_points');
    },1000/this.velocidad)
    // var ref = this;
    // var pluscheck = this.newUnits(100, this.game.ancho * 0.3);
    // this.pluscheck = this.add.sprite(
    //   this.personaje.x,
    //   this.personaje.y,
    //   "pluscheck"
    // );
    // this.pluscheck.setOrigin(0.5, 0.5);
    // this.pluscheck.setScale(pluscheck.scale);
    // this.pluscheck.setDepth(220);
    // setTimeout(function () {
    //   ref.pluscheck.destroy();
    // }, 500);
  }
  getPoints(player, star) {
    star.destroy();
    this.sonidoCoin.play();
    this.anim5(star);
    let suma = this.score + 5;
    if(suma % 500 === 0){
      this.avanceCheckpoint++;
      this.maximoCountCheckpoint = MAX_COUNT_CHECKPOINT + this.avanceCheckpoint;
    }
    this.score = suma;
    this.scoreLabel = this.getElement("score");
    this.scoreLabel.innerText = `${this.score} pts`;
	  this.randomMessage();
  }
  newUnits(anchoReal, anchoObjetivo) {
    var result = {};
    result.scale = anchoObjetivo / anchoReal;
    result.x = (this.game.ancho - anchoObjetivo) / 2;
    return result;
  }

  getElement(className) {
    return document.querySelector(`.${className}`);
  }

  randomMessage() {
    var ref = this;
    if(this.score % this.maxScoreChange === 0 && this.score <= MAX_SCORE_VELOCITY){
      if(this.score >= 600  && this.score < 1200){
        this.maxScoreChange = MAX_SCORE_CHANGE_FIRST;
      }else if(this.score >= 1200){
        this.maxScoreChange = MAX_SCORE_CHANGE_SECOND;
      }
      this.velocidad+=SUMA_VELOCITY;
      console.log(this.velocidad);
      if(this.messageNumber <= 6){
        let mensaje_container = this.getElement('message_'+this.messageNumber);
        if(this.messageNumber > 1){
          mensaje_container.classList.add("show");
          setTimeout(() => {
            mensaje_container.classList.remove('show');
            ref.messageNumber++;
          }, MAX_TIME_SHOW_RANDOM_MESSAGE);
        }else{
          mensaje_container.classList.add('show');
          setTimeout(() => {
            mensaje_container.classList.remove('show');
            ref.messageNumber++;
          }, MAX_TIME_SHOW_RANDOM_MESSAGE);
        }
      }
    }
  }
  //metodo Api
	startGame(body){		
	// 	 this.destroy(this.btnStart);
	// 	this.destroy(this.bg_blur);
	// 	this.destroy(this.bg_on);  
  //   this.destroy(this.startGameText);
  //   //¿Estás lista para empezar?
	// 	let intervalID = setInterval(() => {
	// 		this.start = true;
	// 		this.sonidoMusic.play();
  //     const {puntos_iniciales} = JSON.parse(sessionStorage.getItem("validate"));
  //     let pluspoint = puntos_iniciales + this.score;
  //     this.score = pluspoint;
	// 		clearInterval(intervalID);
	// 	}, 1000);
	}
	sendPost(){
		var body;
		const crearPartida = async () =>{
      const { id } = JSON.parse(sessionStorage.getItem("avatar"));
			const personaje = {personaje_id: id};
			const response = await fetchWithToken('/startGame', personaje,'POST');
			body = await response.json();
			sessionStorage.setItem("body2", JSON.stringify(body));
			const {juegos_restantes} = JSON.parse(sessionStorage.getItem("validate"));
			if(body.status==="success" && juegos_restantes > 0){
				this.startGame(body);
			}
			else{
				this.noOportunities();
			}
		}		
		crearPartida();
	}
	gameOver(){
		const end_Game = async () =>{
			const result = JSON.parse(sessionStorage.getItem("body2"));
      const { id } = JSON.parse(sessionStorage.getItem("avatar"));
     
      let puntos = this.score;
      for(let i = 0; i<=6 ; i++){
        puntos = btoa(puntos)+btoa(puntos);
      }
			const personaje = {personaje_id: id, points: puntos, token:result.token};

			const responseEnd = await fetchWithToken('/endGame', personaje,'POST');
			const end = await responseEnd.json();
			// console.log(end);
			if (end.status === "success"){
				// console.log("fin", end);
			}
		}
		end_Game();
	}
	validateGame(){
		this.showSpinner();
		this.destroy(this.spinner);
		const remainingGame = async () =>{
      const personaje = {};
      const responseEnd = await fetchWithToken('/remainingGame', personaje,'POST');
      //const responseEnd = await fetchWithToken('/remainingGame', 'POST');
      const validate = await responseEnd.json();
      if (validate.status === "success"){
        sessionStorage.setItem("validate", JSON.stringify(validate));
      }
      else{
        sessionStorage.setItem("validate", JSON.stringify(validate));
        this.noOportunities();        
      }
    }
		remainingGame();
	}
	noOportunities(){
		const {max_points} = JSON.parse(sessionStorage.getItem("validate"));
    //this.destroy(this.scoreLabel);
		this.sonidoLose.play();
		var bgBlurr = this.newUnits(414,this.game.ancho);
		this.bgBlur = this.physics.add.image(this.personaje.x, this.personaje.y,"bg_blur");
		this.bgBlur.setOrigin(0.5,0.5);
		this.bgBlur.setScale(bgBlurr.scale, window.screen.height);
		this.bgBlur.setDepth(200);

		var bgStarss = this.newUnits(356,this.game.ancho*0.8);
		this.bgStars = this.add.sprite(this.personaje.x, this.personaje.y,"bgStars");
		this.bgStars.setOrigin(0.5,0.5);
		this.bgStars.setScale(bgStarss.scale)
		this.bgStars.setDepth(220);

		this.msj = this.add.text( this.personaje.x-105, window.screen.width < 450 ?  this.personaje.y-200 :  this.personaje.y-260, '¡Cada día hay 10 nuevas oportunidades!',
		{ font: "19px crosstenextrabold", align: "center", wordWrap: { width: 300 }, fontWeight: "bold", color:'#fff' });
			this.msj.setDepth(230);	

			this.endGameText = this.add.text( this.personaje.x-130, window.screen.width < 450 ?  this.personaje.y-120 :  this.personaje.y-160, 'Puedes compartir el juego para ganar más oportunidades de jugar',
		{ font: "16px crosstenextrabold", align: "center", wordWrap: { width: 290 }, fontWeight: "bold", color:'#04A6E1' });
			this.endGameText.setDepth(230);

			this.endGameScoreMax = this.add.text( this.personaje.x-110, window.screen.width < 450 ?  this.personaje.y+80 :  this.personaje.y+120, max_points > this.score ? 'Máximo puntaje obtenido: '+  max_points  +' pts' : 'Tu máximo puntaje: '+ this.score +' pts',
			{ font: "17px crosstenextrabold", align: "center", wordWrap: { width: 240 }, fontWeight: "900", color:'#454545' });
			this.endGameScoreMax.setDepth(230);

		var btnMore = this.newUnits(310,this.game.ancho*0.6);
		this.btnMore = this.add.sprite(this.personaje.x, window.screen.width < 450 ? this.personaje.y+160 : this.personaje.y+205,"btnMore").setInteractive();
		this.btnMore.setOrigin(0.5,0.5);
		this.btnMore.setScale(btnMore.scale)
		this.btnMore.setDepth(220);
		this.btnMore.on(
		"pointerdown",
		() => {
      ReactGA.event({ category: 'JUEGO', action: 'Más Oportunidades', });
			window.location="https://www.bebeaventurero.com/usuario/compartir/"
		},
		this);   
		var btnHome = this.newUnits(248, this.game.ancho * 0.5);
		this.btnHome= this.add.sprite(this.personaje.x, window.screen.width < 450 ? this.personaje.y+240 : this.personaje.y+280,"btnHome").setInteractive();
		this.btnHome.setOrigin(0.5,0.5);
		this.btnHome.setScale(btnHome.scale)
		this.btnHome.setDepth(220);
    this.btnHome.on( "pointerdown", () => {
      ReactGA.event({ category: 'JUEGO', action: 'Ver ranking', });
      sessionStorage.setItem('ranking-item',JSON.stringify(true))
      window.location="./"
    }, this);	
	}
  countAnim(){
    var this_ = this;
    let intervalone = setInterval(() => {
      var one = this.newUnits(356,this.game.ancho*1.3);
      this.one = this.add.sprite(this.personaje.x, this.personaje.y,"tres");
      this.one.setOrigin(0.5,0.5);
      this.one.setScale(one.setScale)
      this.one.setDepth(220);
      this.one.alpha=0;
      this.sonidoTime.play()   
      this.tweens.add({
        targets: this.one,
        alpha: { from: 0, to: 1 },
        ease: "Cubic", // 'Cubic', 'Elastic', '', 'Back'
        duration: 600,
        repeat: 0,
        yoyo: false,
        scale: {from:one.setScale, to: one.setScale},
        onComplete: function () {
         this_.one.destroy();
        },
     });
    	clearInterval(intervalone);  
    }, 100);

    let intervaltwo = setInterval(() => {
      var two = this.newUnits(356,this.game.ancho*1.3);
      this.two = this.add.sprite(this.personaje.x, this.personaje.y,"dos");
      this.two.setOrigin(0.5,0.5);
      this.two.setScale(two.setScale);
      this.two.setDepth(220);
      this.two.alpha=0;
      this.sonidoTime.play()   
      this.tweens.add({
              targets: this.two,
              alpha: { from: 0, to: 1 },
              ease: "Cubic", // 'Cubic', 'Elastic', '', 'Back'
              duration: 600,
              repeat: 0,
              yoyo: false,
              onComplete: function () {
              this_.two.alpha=0;
              this_.two.destroy();
              },
          });
    	clearInterval(intervaltwo);  
    }, 1200);

    let intervalthree = setInterval(() => {
      this.startText = this.add.text( this.personaje.x-40, window.screen.width < 450 ?  this.personaje.y-160 :  this.personaje.y-160, '¡START!',
		{ font: "25px crosstenextrabold", align: "center", wordWrap: { width: 290 }, fontWeight: "bold", color:'#FCDC00' });
			this.startText.setDepth(230);

      var three = this.newUnits(356,this.game.ancho*1.3);
      this.three = this.add.sprite(this.personaje.x, this.personaje.y,"uno");
      this.three.setOrigin(0.5,0.5);
      this.three.setScale(three.setScale);
      this.three.setDepth(220);
      this.two.alpha=0;
      this.sonidoTime.play()   
      this.tweens.add({
        targets: this.three,
        alpha: { from: 0, to: 1 },
        ease: "Cubic", // 'Cubic', 'Elastic', '', 'Back'
        duration:600,
        repeat: 0,
        yoyo: false,
        onComplete: function () {
          this_.three.alpha=0;
          this_.three.destroy();
          this_.destroy( this_.bg_blur);
          this_.destroy(this_.startText);
        },
    });
      clearInterval(intervalthree);  
    },2200);    
    if(this.isMuted)
      this.getElement('playMusic').classList.remove('d_none');
    else
      this.getElement('stopMusic').classList.remove('d_none');

    this.getElement('score').classList.remove('d_none');

		let intervalID = setInterval(() => {
			this.start = true;
      if(!this.isMuted)
			  this.sonidoMusic.play();
      const {puntos_iniciales} = JSON.parse(sessionStorage.getItem("validate"));
      let pluspoint = puntos_iniciales + this.score;
      this.score = pluspoint;
      this.stopMusic();
			clearInterval(intervalID);
      
      return this.varStart = true;
		}, 4000);
  }
  stopMusic(){
    let ref = this;
    let state = false;
    let stop = this.getElement("stopMusic");
    let play = this.getElement("playMusic");
    stop.onclick = function(){
      ref.sonidoMusic.play();        
      play.classList.add("d_none");
      stop.classList.remove("d_none");
      return state = false;
    }
    play.onclick = function(){
      if(state === false){
        ref.sonidoMusic.stop();        
        sessionStorage.setItem('isMuted',JSON.stringify(true));
        ref.isMuted = true;
        stop.classList.add("d_none");
        play.classList.remove("d_none");
        return state = true;
      }

    }
  }
}
