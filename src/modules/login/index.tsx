import { IconEyeClosed, IconEyeOpened } from "../../components/Icons";

import { Alert } from "../../components/Alert";
import { Input } from "./components/input";
import { Link } from "react-router-dom";
import { Submit } from "./components/submit/submit";
import { useState } from "react";
import { wait } from "../../utils";

const fakeApiSingIn = async (email: string, password: string) => {
  await wait(1000);
  if (email === "expalmer@gmail.com" && password === "1234") {
    return { token: "XYZ" };
  }
  throw new Error("Invalid credentials");
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length > 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isEmailValid || !isPasswordValid) {
      console.log("Invalid form");
      return;
    }

    setIsLoading(true);

    try {
      setIsLoading(true);
      const { token } = await fakeApiSingIn(email, password);
      console.log(token);
      setError("");
    } catch (error) {
      setError((error as Error).message);
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="header">
        <Link to="/login" className="logo">
          <img src="/max.webp" alt="Ada Max" />
        </Link>
        <Link to="/signUp" className="btn relative z-index-1">
          Sign Up Now
        </Link>
      </div>
      <div className="content">
        <h1 className="title">Get Started</h1>
        <div className="login">
          <h2 className="title">Sign In</h2>
          <p className="text-center">
            Enter your Max or HBO Max account email address and password.
          </p>
          <form onSubmit={handleSubmit}>
            {error && <Alert>{error}</Alert>}
            {/* esse eu criei um componente*/}
            <Input
              label="Email Address"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              disabled={isLoading}
              error={isSubmitted && !isEmailValid ? "E-mail inválido" : ""}
            />

            {/* TODO: tente criar um componente para o password usando ou alterando o de e-mail */}
            <div className="form-group">
              <label htmlFor="">Password</label>
              <div className="input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  disabled={isLoading}
                />
                <button
                  className="eye"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IconEyeClosed /> : <IconEyeOpened />}
                </button>
              </div>
              {isSubmitted && !isPasswordValid && <span>Senha inválida</span>}
            </div>
            <div>
              <Submit isDisabled={isLoading} isLoading={isLoading}>
                Sign In
              </Submit>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
