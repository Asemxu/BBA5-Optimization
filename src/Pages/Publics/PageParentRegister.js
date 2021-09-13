import { Redirect, useHistory } from 'react-router-dom';

import { WrapperMain } from '../../Wrappers/WrapperMain';
import { Header } from '../../Components/Header';
import { FormParentRegister } from '../../Forms';
import { typesHeaders } from '../../types/ui';
import { useSelector } from 'react-redux';

const PageParentRegister = () => {
  const history = useHistory();
  const {
    selected: { isRegisterBtn },
  } = useSelector((state) => state.ui);

  if (isRegisterBtn === '') {
    return <Redirect to="/cuentas" />;
  }

  return (
    <WrapperMain showAvatars={false}>
      <Header name={typesHeaders.goback} onClick={() => history.goBack()} />
      <div className="content__main d-flex flex-column align-self-center">
        <div className="content__title">
          <h1 className="title__bg">Llena tus datos</h1>
        </div>
        <FormParentRegister />
      </div>
    </WrapperMain>
  );
};

export default PageParentRegister