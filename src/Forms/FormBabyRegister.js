import { useDispatch, useSelector } from 'react-redux';

import {
  toggleCheckPolicy,
  toggleCheckProgramInkaClub,
  toggleCheckTerms,
} from '../Redux/Actions/UI';
import { useFormBaby } from '../Hooks';

import { Button } from '../Components/Buttons';
import { Spinner } from '../Components/Spinner';
import { ErrorMessage } from '../Components/messages/ErrorMessage';
import { months } from '../data';

 const FormBabyRegister = () => {
  const dispatch = useDispatch();

  const {
    checksRegister: { terms, policy, programInkaClub },
  } = useSelector((state) => state.ui);

  const {
    formvalues,
    handleInputChange,
    showErrorMessage,
    gender,
    month,
    year,
    loading,
    handleSubmit,
    handleMonthChange,
    handleYearChange,
    handleGenderChange,
    updateInfoBaby,
  } = useFormBaby();
  const { baby_name, baby_birthday_d } = formvalues;

  return (
    <form className="content__form__login" onSubmit={handleSubmit}>
      <div className="content__input">
        <input
          className="form-control"
          type="text"
          name="baby_name"
          value={baby_name}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Nombre de tu bebé"
          required
        ></input>
      </div>
      <div className="content__input">
        <select
          className="form-select w-100"
          name="gender"
          value={gender}
          onChange={handleGenderChange}
          required
        >
          <option value="" disabled>
            Sexo de tu bebé
          </option>
          <option value="0">Femenino </option>
          <option value="1">Masculino</option>
        </select>
      </div>
      <div className="content__input">
        <p className="label">Fecha de nacimiento:</p>
        <div className="d-grid gap-2 col__3 select__2 content__input">
          <input
            className="form-control"
            type="tel"
            name="baby_birthday_d"
            value={baby_birthday_d}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="DD"
            required
          ></input>
          <select
            className="form-select"
            onChange={handleMonthChange}
            value={month}
            required
          >
            <option value="" disabled>
              Mes
            </option>
            {months.map((month) => (
              <option value={month.id} key={month.id}>
                {month.name}
              </option>
            ))}
          </select>
          <select
            className="form-select"
            onChange={handleYearChange}
            value={year}
            required
          >
            <option value="" disabled>
              Año
            </option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
      </div>

      <div className="content__checkbox mt-4 mt-lg-5">
        <input
          type="checkbox"
          checked={terms}
          onChange={() => dispatch(toggleCheckTerms(!terms))}
        />
        <p>
          He leído y acepto{' '}
          <button
            onClick={() => updateInfoBaby('/terminos-condiciones')}
            type="button"
            className="link link__custom"
          >
            Los Términos y Condiciones
          </button>
        </p>
      </div>
      <div className="content__checkbox">
        <input
          type="checkbox"
          checked={policy}
          onChange={() => dispatch(toggleCheckPolicy(!policy))}
        />
        <p>
          He leído y acepto{' '}
          <button
            onClick={() => updateInfoBaby('/politica-privacidad')}
            type="button"
            className="link link__custom"
          >
            La Política de Privacidad
          </button>
        </p>
      </div>
      <div className="content__checkbox">
        <input
          type="checkbox"
          checked={programInkaClub}
          onChange={() =>
            dispatch(toggleCheckProgramInkaClub(!programInkaClub))
          }
        />
        <p>
          He leído y acepto las finalidades adicionales{' '}
          <button
            onClick={() => updateInfoBaby('/programa-inkaclub')}
            type="button"
            className="link link__custom"
          >
            lo que implica mi registro en el Programa Inkaclub
          </button>
        </p>
      </div>

      {showErrorMessage !== '' && <ErrorMessage text={showErrorMessage} />}
      {loading ? (
        <Spinner />
      ) : (
        <div className="buttons">
          <Button type="submit" isPrimary text="Crear cuenta" />
        </div>
      )}
    </form>
  );
};
export default FormBabyRegister