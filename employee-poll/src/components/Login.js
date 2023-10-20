import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authenticateUser";
import loginLogo from "./../asserts/images/loginLogo.png";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isSubmitDisabled = !username || !password;

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700">
          Employee Polls
        </h1>
        <img src={loginLogo} alt="login logo"/>
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline mt-3">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              value={username}
              onChange={handleUsername}
              type="text"
              name="username"
              id="username"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              name="password"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6 text-center">
            <button
            type="submit"
            disabled={isSubmitDisabled}

            className={`${
              isSubmitDisabled ? "bg-gray-200" : "bg-sky-500 hover:bg-sky-700"
            } px-5 py-2.5 text-sm leading-5 rounded-md`}
          >
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authenticatedUser }) => ({
  loggedIn: !!authenticatedUser,
});

export default connect(mapStateToProps)(Login);
