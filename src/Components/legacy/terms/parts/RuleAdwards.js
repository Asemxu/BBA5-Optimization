import React from 'react';
import { terms } from '../../../../data/legacys';
import { AdwardTableA, AdwardTableB } from '../tables';

export const RuleAdwards = () => {
  const ruleAdwardsTables = [<AdwardTableA />, <AdwardTableB />];
  return (
    terms.ruleAdwards.length > 0 && (
      <div className="legacy__item">
        <h3 className="legacy__subtitle">{terms.ruleAdwards[0].title}</h3>
        <div className="mb-2 ms-lg-3">
          <p className="description">{terms.ruleAdwards[0].description}</p>
          <ol type="A">
            {terms?.ruleAdwards[0].sub_items.map((sub_item, index) => (
              <div key={index}>
                <li className="mt-2">
                  <b>{sub_item.title}</b>
                </li>
                <p>{sub_item.description} </p>
                {ruleAdwardsTables[index]}
              </div>
            ))}
          </ol>
          <p>
            <span className="bold">EN CONCLUSIÓN:</span> Cada semana se
            sortearán dieciocho (18) premios y se tendrán dieciocho (18)ganadores, según el siguiente detalle:
          </p>

          <div className="mb-2">
            <ul>
              <li>
                <b className="bold">
                  PARA LOS 8 PARTICIPANTES CON MAYOR PUNTAJEDE CADA SEMANA:
                </b>
                Serán 8 ganadores por semana
              </li>
            </ul>
            <p>(a) Dos (2) Carros a batería Paw Patrol Bombero Marshall 6V;</p>
            <p>(b) Dos (2) Resbaladeras multisport Marca: Step 2;</p>
            <p>(c) Dos (2) Torres de control Paw Patrol My Syze;</p>
            <p>(d) Dos (2) Scooter Paw Patrol con luces. Marca: Kiddieland.</p>
            <p className="mt-2">
              Los participantes no podrán elegir el premio, se sorteará de forma
              aleatoria.
            </p>
            <ul>
              <li>
                <b className="bold">
                  PARA EL RESTO DE PARTICIPANTES DE LA SEMANA (que activaron al
                  menos una boleta de compra válida){' '}
                </b>
                Serán 10 ganadores por semana.
              </li>
            </ul>
            <p>(e) Diez (10)  Casitas armables para niños, marca Intex.</p>
            <p className="description">
              Los premios no son transferibles ni canjeables por otro bien. Los
              ganadores no podrán elegir en ningún caso el premio que les
              corresponde, siendo esta potestad única e indiscutible de las
              Empresas Organizadoras.
            </p>
          </div>
        </div>
      </div>
    )
  );
};
