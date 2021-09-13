import { terms } from '../../../../data/legacys';

export const DrawDates = () => {
  return (
    <div className="legacy__item draw__dates">
      <h3 className="legacy__subtitle">{terms.drawDates.title}</h3>
      <p className="description">{terms.drawDates.description}</p>
      {terms.drawDates.items.map((item, index) => (
        <div className="mb-2 ms-lg-3" key={index}>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: item.title }} />

            {item.sub_items.map((sub_item, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: sub_item }} />
            ))}
          </ul>
          <p className="mb-2">
            Los sorteos se realizarán con presencia de un notario en dichas
            fechas, entre las 09:00 y 18:00 horas, en las Oficinas de las
            Empresas Organizadoras, ubicadas en Calle Víctor Alzamora N° 147 La
            Victoria, Lima -Perú.
          </p>
          <p>
            Nota: Previo a cada sorteo, se realizará una validación de todas las
            boletas ingresadas por cada participante. En caso alguna de las
            boletas sea inválida, se descalificará al participante del juego,
            así se encuentre en los primeros puestos en el ranking.
          </p>
        </div>
      ))}
    </div>
  );
};
