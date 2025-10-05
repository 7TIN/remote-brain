// import axios from "axios";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
// import api from "../lib/api";
import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    //   const result = await api.post("/auth/signin", credentials);
    // console.log(credentials);
    const result = await axios.post(import.meta.env.VITE_AUTH_URL, {email, password});
    // console.log(result.data.data.token);
      const { token } = result.data.data;
      console.log(token);

      localStorage.setItem("token", token);
      console.log("success");

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center bg-stone-100 h-screen items-center">
      <Card className="flex w-xs justify-center items-center shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-y-4 h-fit py-10">
            <div>Login Form</div>
            <div className="flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="p-2 border rounded-md text-center"
              />
              <input
                type="text"
                placeholder="password"
                value={password}
                // onChange={handleChange}
                onChange={e => setPassword(e.target.value)}
                className="p-2 border rounded-md text-center"
              />
            </div>
            <div>
              <Button
                type="submit"
                text="Login"
                className="w-full py-1.5 px-10 rounded-md cursor-pointer"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
