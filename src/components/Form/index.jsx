import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_DOMAIN } from "../../constants";
import postData from "../../utils/postData";
import { registerSchema } from "../../validators/schema";
import Input from "../Input";
import * as S from "./styles";

const Form = () => {
  const [error, setError] = useState(" ");
  let navigate = useNavigate();
  const maskPhone = {
    values: ["(99) 9999-9999", "(99) 99999-9999"],
    maxLength: 14,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    const user = await postData(API_DOMAIN + "/users/register", data);
    if (user.error) {
      setError(user.error);
    } else {
      navigate(`/users?email=${user.email}`);
    }
  };

  return (
    <S.Wrapper>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.DoubleContainer>
          <Input
            {...register("firstName")}
            errors={errors.firstName}
            label="Name"
          />
          <Input
            {...register("lastName")}
            errors={errors.lastName}
            label="Last Name"
          />
        </S.DoubleContainer>
        <Input
          {...register("phone")}
          errors={errors.phone}
          label="Phone"
          mask={maskPhone}
        />
        <Input {...register("email")} errors={errors.email} label="Email" />

        <S.DoubleContainer>
          <Input
            {...register("password")}
            errors={errors.password}
            type="password"
            label="Password"
          />
          <Input
            {...register("confirmPassword")}
            errors={errors.confirmPassword}
            type="password"
            label="Confirm Password"
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

export default Form;
