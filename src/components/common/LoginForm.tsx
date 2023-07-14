import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../redux/features/user/userSlice";

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    dispatch(
      loginUser({ email: loginData.email, password: loginData.password })
    );
    console.log(loginData);
  };

  console.log("uuuu", user);
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...loginData, [e.target.name]: e.target.value };
    setLoginData(updatedData);
  };

  return (
    <div className="container">
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Email</label> <br />
        <input
          onChange={handleOnchange}
          required
          type="email"
          name="email"
          id=""
        />{" "}
        <br />
        <label htmlFor="">Password</label> <br />
        <input
          onChange={handleOnchange}
          required
          type="password"
          name="password"
          id=""
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
