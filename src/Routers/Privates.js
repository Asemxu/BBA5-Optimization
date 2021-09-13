import React, { lazy  } from 'react'; 
import { Redirect, Route, Switch } from 'react-router-dom';

const PageCharacter = lazy (() => import( '../Pages/Privates/PageCharacter'));
const PageRanking = lazy (() => import( '../Pages/Privates/PageRanking'));
const PageBallots = lazy (() => import( '../Pages/Privates/PageBallots'));
const PageProducts = lazy (() => import( '../Pages/Privates/PageProducts'));
const PageMain = lazy (() => import( '../Pages/Privates/PageMain'));
const PageAddBallot = lazy (() => import( '../Pages/Privates/PageAddBallot'));
const PageAvatar = lazy (() => import( '../Pages/Privates/PageAvatar'));
const PageShare = lazy (() => import( '../Pages/Privates/PageShare'));
const PageRaffleAndAwards = lazy (() => import( '../Pages/Privates/PageRaffleAndAwards'));
const PageBallotMessage = lazy (() => import( '../Pages/Privates/PageBallotMessage'));

const Game = lazy (() => import( '../Pages/Privates/Game'));


const PageInstruction1 = lazy (() => import( '../Pages/Privates/Instructions/PageInstruction1'));
const PageInstruction2 = lazy (() => import( '../Pages/Privates/Instructions/PageInstruction2'));
const PageInstruction3 = lazy (() => import( '../Pages/Privates/Instructions/PageInstruction3'));

export const Privates = () => {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/usuario" component={PageMain} />
        <Route exact path="/usuario/ranking" component={PageRanking} />
        <Route
          exact
          path="/usuario/sorteo-premios"
          component={PageRaffleAndAwards}
        />
        <Route exact path="/usuario/boletas" component={PageBallots} />
        <Route exact path="/usuario/personajes" component={PageCharacter} />
        <Route exact path="/usuario/agregar-boleta" component={PageAddBallot} />
        <Route exact path="/usuario/productos" component={PageProducts} />
        <Route exact path="/usuario/personaje" component={PageAvatar} />
        <Route exact path="/usuario/juego" component={Game} />
        <Route
          exact
          path="/usuario/boletas-agregada"
          component={PageBallotMessage}
        />
        <Route
          exact
          path="/usuario/instruccion-1"
          component={PageInstruction1}
        />
        <Route
          exact
          path="/usuario/instruccion-2"
          component={PageInstruction2}
        />
        <Route
          exact
          path="/usuario/instruccion-3"
          component={PageInstruction3}
        />
        <Route exact path="/usuario/compartir" component={PageShare} />

        <Redirect to="/" />
      </Switch>
    </React.Suspense>
  );
};
