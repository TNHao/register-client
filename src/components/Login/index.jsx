import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_DOMAIN } from "../../constants";
import postData from "../../utils/postData";
import { loginSchema } from "../../validators/schema";
import Input from "../Input";
import * as S from "./styles";

const Login = () => {
  const [error, setError] = useState(" ");
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const res = await postData(API_DOMAIN + "/users/login", data);
    if (res.error) {
      setError(res.error);
    } else {
      navigate(`/users?email=${data.email}`);
    }
  };

  return (
    <S.Wrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.DoubleContainer>
          <Input {...register("email")} errors={errors.email} label="Email" />

          <Input
            {...register("password")}
            errors={errors.password}
            type="password"
            label="Password"
          />
        </S.DoubleContainer>
        <S.Error>
          <h1>{error}</h1>
        </S.Error>
        <S.WrapperButton>
          <button className="btn-hover" type="submit">
            Submit
          </button>
        </S.WrapperButton>
      </form>
    </S.Wrapper>
  );
};

export default Login;
