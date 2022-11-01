import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { API_DOMAIN } from "../../constants";
import postData from "../../utils/postData";
import { schema } from "../../validators/schema";
import Input from "../Input";
import * as S from "./styles";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await postData(API_DOMAIN + "/users/login", data);
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
