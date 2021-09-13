import { Redirect, Route, Switch } from 'react-router-dom';
import {
  PageRanking,
  PageBallots,
  PageProducts,
  PageRaffleAndAwards,
  PageMain,
  PageCharacter,
  PageAddBallot,
  PageBallotMessage,
  PageAvatar,
  PageShare,
} from '../Pages/Privates';
import Game from '../Pages/Privates/Game';

import {
  PageInstruction1,
  PageInstruction2,
  PageInstruction3,
} from '../Pages/Privates/Instructions';

export const Privates = () => {
  return (
    <>
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
    </>
  );
};
