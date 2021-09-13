import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCheckTerms } from '../../Redux/Actions/UI';
import { typesHeaders } from '../../types/ui';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { terms } from '../../data/legacys';
import {
  Rules1A4,
  RuleGame,
  RuleAdwards,
  DrawDates,
  PublicationWinners,
  ClaimPrize,
  GeneralConsiderations,
} from '../../Components/legacy/terms/parts';
import { ProductsTable } from '../../Components/legacy/terms/tables/ProductsTable';

export const PageTermsConditions = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const accept = () => {
    ReactGA.event({
      category: 'REGISTRO',
      action: 'Aceptar Términos y Condiciones',
    });
    dispatch(toggleCheckTerms(true));
    history.goBack();
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main justify-content-center d-flex flex-column px-5">
        <div className="content__title__sm">
          <h1 className="title__md">Términos y Condiciones</h1>
        </div>
        <div className="content__body content__legacy scrollbar text-center">
          <h2>PROMOCIÓN BEBÉ AVENTURERO NINET 2021</h2>
          <p className="description">{terms.description}</p>
          <div className="mt-4">
            <Rules1A4 />
            <RuleGame />
            <RuleAdwards />
            <DrawDates />
            <PublicationWinners />
            <ClaimPrize />
            <GeneralConsiderations />
            <ProductsTable />
          </div>
        </div>
        <div className="buttons mt-5">
          <Button isPrimary text="Aceptar" onClick={accept} />
        </div>
      </div>
    </WrapperMain>
  );
};
