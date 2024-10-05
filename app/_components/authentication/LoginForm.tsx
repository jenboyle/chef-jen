"use client";
import { FormEvent, useState } from "react";

import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }
  return (
    <form onSubmit={handleSubmit} className="grid mt-5">
      <label id="logintoaccount" className="font-semibold text-center">
        Log in to your account
      </label>
      <input
        type="text"
        id="email"
        name="email"
        disabled={isLoading}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="p-2 m-2 font-semibold rounded-xl focus:outline-none hover:bg-blue-50 transition-colors duration-300 focus:ring focus:ring-emerald-300 focus:bg-blue-50 focus:ring-offset-2"
      ></input>
      <input
        type="password"
        name="password"
        disabled={isLoading}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="p-2 m-2 font-semibold rounded-xl focus:outline-none hover:bg-blue-50 transition-colors duration-300 focus:ring focus:ring-emerald-300 focus:bg-blue-50 focus:ring-offset-2"
      ></input>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-emerald-200 p-4 rounded-2xl text-xl hover:bg-emerald-500"
      >
        Login 👩🏼‍🍳
      </button>
    </form>
  );
}

export default LoginForm;
