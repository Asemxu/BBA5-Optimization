import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCheckProgramInkaClub } from '../../Redux/Actions/UI';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Button } from '../../Components/Buttons';
import { Header } from '../../Components/Header';
import { typesHeaders } from '../../types/ui';

const PageInkaclubProgramme = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const accept = () => {
    ReactGA.event({
      category: 'REGISTRO',
      action: 'Aceptar Programa Inkaclub',
    });
    dispatch(toggleCheckProgramInkaClub(true));
    history.goBack();
  };

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column justify-content-center align-self-center px-5">
        <div className="content__title__sm">
          <h1 className="title__md">Programa Inkaclub</h1>
        </div>
        <div className="content__body content__legacy scrollbar text-center">
          <p className="legacy__item">
            Programa Inkaclub: El Cliente declara que la información es veraz y
            ser mayor de 18 años. Asimismo, autoriza a Inretail Pharma S.A. (
            <b>“Inkafarma”</b>) a afiliarlo al Programa Inkaclub para obtener
            puntos al adquirir productos o servicios en Inkafarma, y obtener,
            después, un descuento para la compra de otros productos ofertados en
            Inkafarma o de productos y/o servicios brindados por terceras
            empresas con las que Inkafarma tenga convenios (el “Programa”);
            puede obtener más información del Programa en{' '}
            <a
              href="https://inkafarma.pe/programa-inkaclub"
              rel="noreferrer"
              target="_blank"
            >
              https://inkafarma.pe/programa-inkaclub
            </a>
            .
          </p>
          <p className="legacy__item mt-4">
            En ese sentido, usted nos da su consentimiento libre, previo,
            expreso e informado para conservar de manera segura y tratar sus
            datos personales hasta que usted revoque su consentimiento,
            necesarios para la ejecución del Programa en el banco de datos
            “CLIENTES” (código N° 970), con la finalidad de: (i) ejecutar el
            Programa, lo que involucra realizar estudios de mercado, registrar y
            analizar historiales de compra y elaborar perfiles de compra,
            efectuar acciones y campañas de publicidad y prospección comercial,
            remitir (vía medio físico, electrónico o telefónico) publicidad,
            obsequios, información de ofertas y/o promociones (personalizadas o
            generales) de productos y/o servicios, para lo cual Inkafarma podrá
            valerse de terceros (encargados de tratamiento) difundidos en{' '}
            <a
              href="https://legales-inkafarma.s3-us-west-2.amazonaws.com/terceros-encargados-de-tratamiento.pdf"
              target="_blank"
              rel="noreferrer"
            >
              https://legales-inkafarma.s3-us-west-2.amazonaws.com/terceros-encargados-de-tratamiento.pdf
            </a>
            , situados fuera del Perú, por lo que se producirá una transferencia
            internacional de datos; (ii) comunicar sus datos personales, a nivel
            nacional y/o transfronterizo a las empresas afiliadas al Programa
            difundidas en{' '}
            <a
              href="https://legales-inkafarma.s3-us-west-2.amazonaws.com/empresas-intercorp-y-socios-estrategicos.pdfa"
              target="_blank"
              rel="noreferrer"
            >
              https://legales-inkafarma.s3-us-west-2.amazonaws.com/empresas-intercorp-y-socios-estrategicos.pdfa
            </a>{' '}
            efecto de que dichas empresas puedan ejecutar los beneficios del
            Programa que les correspondan y así realizar los tratamientos
            indicados en el ítem (i), como parte de la ejecución intrínseca del
            Programa. El CLIENTE podrá ejercitar los derechos de información,
            acceso, actualización, rectificación, inclusión, cancelación,
            oposición y tratamiento objetivo que le confiere la Ley No. 29733, y
            su Reglamento; a través del portal web{' '}
            <a
              href="https://arco.inkafarma.com.pe/"
              rel="noreferrer"
              target="_blank"
            >
              https://arco.inkafarma.com.pe/
            </a>
            (FORMATO ARCO).
          </p>
        </div>
        <div className="buttons mt-5">
          <Button isPrimary text="Aceptar" onClick={accept} />
        </div>
      </div>
    </WrapperMain>
  );
};

export default PageInkaclubProgramme