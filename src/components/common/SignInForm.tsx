import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser } from "../../redux/features/user/userSlice";

type Inputs = {
  email: string;
  password: string;
};

function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));

    console.log("sign up success", user);
  };
  return (
    <div className="container">
      <h1> Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} /> <br />
        {errors.email && <span>This field is required</span>}
        <input {...register("password", { required: true })} /> <br />
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignInForm;
