import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser } from "../../redux/features/user/userSlice";
import { toast } from "react-hot-toast";

type Inputs = {
  email: string;
  password: string;
};

function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector((state) => state.user);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
    if (user.email) {
      toast.success("user created successfully");
    }
    if (error) {
      toast.error(error);
    }
    reset();
  };
  return (
    <div className="container">
      <div className="add-book">
        <h1> Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Email</label> <br />
          <input {...register("email", { required: true })} /> <br />
          {errors.email && <span>This field is required</span>}
          <br />
          <label htmlFor="">Password</label> <br />
          <input {...register("password", { required: true })} /> <br />
          {errors.password && <span>This field is required</span>}
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
