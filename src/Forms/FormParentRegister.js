import { useSelector } from 'react-redux';
import Select from 'react-select';

import { useTooglePass, useFormParent } from '../Hooks';

import { months } from '../data';

import { Button } from '../Components/Buttons';
import { ErrorMessage } from '../Components/messages/ErrorMessage';
import { Spinner } from '../Components/Spinner';

export const FormParentRegister = () => {
  const { cities, typesDocs } = useSelector((state) => state.information);
  const {
    selected: { registerWith },
  } = useSelector((state) => state.ui);
  const {
    formvalues,
    handleSubmit,
    handleInputChange,
    handleMonthChange,
    handleTypeDocument,
    showErrorMessage,
    defaultCity,
    city,
    month,
    loading,
    type_doc,
  } = useFormParent();

  const {
    name,
    parent_document,
    parent_cellphone,
    email,
    password,
    password_confirmation,
    parent_birthday_d,
    parent_birthday_y,
  } = formvalues;

  const { togglePass, showPass, inputPassword } = useTooglePass();
  const {
    togglePass: togglePass2,
    showPass: showPass2,
    inputPassword: inputPassword2,
  } = useTooglePass();

  return (
    <form className="content__form__register" onSubmit={handleSubmit}>
      <div className="content__input">
        <input
          className="form-control"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Nombres y apellidos"
          autoComplete="off"
          required
        ></input>
      </div>

      {typesDocs.length > 0 && (
        <div className="content__input">
          <select
            className="form-select w-100"
            onChange={handleTypeDocument}
            value={type_doc}
            required
          >
            <option value="" disabled>
              Seleccione un tipo de documento
            </option>

            {typesDocs.map((doc) => (
              <option value={doc.id} key={doc.id}>
                {doc.type_document}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="content__input d-grid gap-2 col__2">
        <input
          className="form-control"
          type="tel"
          name="parent_document"
          value={parent_document}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="DNI"
          required
        ></input>
        <input
          className="form-control"
          type="tel"
          name="parent_cellphone"
          value={parent_cellphone}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder="Celular"
          required
        ></input>
      </div>
      <div className="content__input">
        <input
          className="form-control"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          disabled={registerWith !== 1}
          required
        ></input>
      </div>
      {cities.length > 0 && (
        <div className="content__input">
          <Select
            options={cities}
            placeholder="Seleccione una ciudad"
            className="select__cities"
            ref={city}
            defaultValue={defaultCity}
            noOptionsMessage={({ inputValue }) =>
              inputValue && 'No se encontró ciudad'
            }
          />
        </div>
      )}

      {registerWith === 1 && (
        <>
          <div className="content__input input__pass">
            <input
              className="form-control"
              type="password"
              name="password"
              ref={inputPassword}
              value={password}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Contraseña"
              required
            ></input>
            {showPass ? (
              <i className="fas fa-eye" onClick={togglePass}></i>
            ) : (
              <i className="fas fa-eye-slash" onClick={togglePass}></i>
            )}
          </div>
          <div className="content__input input__pass">
            <input
              className="form-control"
              type="password"
              name="password_confirmation"
              ref={inputPassword2}
              value={password_confirmation}
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Confirma tu contraseña"
              required
            ></input>
            {showPass2 ? (
              <i className="fas fa-eye" onClick={togglePass2}></i>
            ) : (
              <i className="fas fa-eye-slash" onClick={togglePass2}></i>
            )}
          </div>
        </>
      )}
      <div className="content__input">
        <p className="label">Fecha de nacimiento:</p>
        <div className="d-grid gap-2 col__3">
          <input
            className="form-control"
            type="tel"
            name="parent_birthday_d"
            value={parent_birthday_d}
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
          <input
            className="form-control"
            type="tel"
            name="parent_birthday_y"
            value={parent_birthday_y}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="AAAA"
            required
          ></input>
        </div>
      </div>

      {showErrorMessage !== '' && <ErrorMessage text={showErrorMessage} />}
      {loading ? (
        <Spinner />
      ) : (
        <div className="buttons">
          <Button type="submit" isPrimary text="Continuar" />
        </div>
      )}
    </form>
  );
};
