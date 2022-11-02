import { useNavigate } from "react-router-dom";
import * as S from "../Form/styles";

const Home = () => {
  const navigate = useNavigate();

  const onRegisterClick = () => {
    navigate("/register");
  };

  const onLoginClick = () => {
    navigate("/login");
  };

  return (
    <S.Wrapper>
      <S.WrapperButton>
        <button onClick={onRegisterClick}>Register</button>
      </S.WrapperButton>
      <S.WrapperButton>
        <button onClick={onLoginClick}>Login</button>
      </S.WrapperButton>
    </S.Wrapper>
  );
};

export default Home;
