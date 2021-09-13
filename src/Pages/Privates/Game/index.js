import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import LoadScene from './scenes/LoadScene';
import { Redirect } from 'react-router-dom';
class Game extends Component {
    constructor(props) {
       
        super(props);
        this.state= { 
            width: window.innerWidth > 500 ? 500 : window.innerWidth, 
            height: window.innerHeight, 
            score : 0,
            comeback:false,
            avatar : this.props.location.state !== undefined ?  this.props.location.state.avatar : "chase"
        };
        sessionStorage.setItem("score",0);
        
    };

    sizeScreen(anchoReal, anchoObjetivo) {
        var result = {};
        result.scale = anchoObjetivo / anchoReal;
        result.x = (this.ancho - anchoObjetivo) / 2;
        return result;
    }

    render() {
        const getColorBG = () =>{
            return this.state.avatar === "chase" ? "#2C1D61" : this.state.avatar === "skye" ? "#F070A9" : this.state.avatar === "marshall" ? "#B61F25" : "#FAA914";
        }
        let state = {
            initialize: true,
            game: {
            width:  this.state.width,
            fps: {target: 30, min: 30},
            backgroundColor: getColorBG(),
            height: this.state.height, 
            dom: {
                createContainer: true,
            },
            physics: {
                default: 'arcade',
                arcade: {
                debug: false,
                },
            },
            type: Phaser.AUTO,
            scene: [
                       new LoadScene(this.state.avatar,this.state.height,this.state.width)
                    ]
            },
        };
        const { initialize, game } = state;
        if(this.state.comeback){
            return <Redirect to='/usuario/personajes'/>;
        }
        
        return (
        <div className="container__game p-relative">
         
            <div className="score p-absolute text-primary d_none">{this.state.score} pts</div>
            <div className="p-absolute stopMusic d_none"></div>
            <div className="p-absolute playMusic d_none"></div>
            <div className="p-absolute message_score"></div>
            <div className="p-absolute message message_1"></div>
            <div className="p-absolute message message_2"></div>
            <div className="p-absolute message message_3"></div>
            <div className="p-absolute message message_4"></div>
            <div className="p-absolute message message_5"></div>
            <div className="p-absolute message message_6"></div>
            <div className="p-absolute message message_checkpoint"></div>
            <IonPhaser game={game} initialize={initialize} />
        </div>
    );
  }
}

export default Game;
