import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../middleware/api";
export interface ILogin {
  Login: {
    email: string;
    password: string;
  };
}

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<ILogin["Login"]>({
    email: "",
    password: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  // const fetchData = async () => {
  //   try {
  //     const data = await getLogin(login);
  //     // console.log(data, "========");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const handleClick = (): void => {
    // fetchData();
    navigate("/allRiders");
  };

  console.log(login);
  return (
    <div>
      <input
        type="text"
        name="email"
        value={login.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={login.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
