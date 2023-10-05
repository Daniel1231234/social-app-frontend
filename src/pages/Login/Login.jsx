import { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onSubimt = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div classEmail="loginPage">
      <h1>Login</h1>
      <form onSubmit={onSubimt} classEmail="loginForm">
        <div classEmail="field">
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            email="email"
            placeholder="Please enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            email="password"
            placeholder="Please enter your password"
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}
export default Login;
