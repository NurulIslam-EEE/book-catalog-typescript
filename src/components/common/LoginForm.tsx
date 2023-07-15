import React, { useState, FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginUser } from "../../redux/features/user/userSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { user, isLoading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      loginUser({ email: loginData.email, password: loginData.password })
    );

    if (error) {
      toast.error(error);
      return;
    }
  };

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user?.email, navigate]);

  console.log("uuuu", user);
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...loginData, [e.target.name]: e.target.value };
    setLoginData(updatedData);
  };

  return (
    <div className="container">
      <div className="add-book">
        <h3>Login</h3>
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
    </div>
  );
}

export default LoginForm;
