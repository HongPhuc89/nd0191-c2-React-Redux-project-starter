import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Error404 from "./components/Error404";
import HomePage from "./components/Home";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import { handleInitialData } from "./actions/initialData";

function App({ dispatch, loggedIn }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="container mx-auto py-4">
      {loggedIn && <Nav />}
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/"
          exact
          element={
            <AuthenticatedRoute>
              {" "}
              <HomePage />{" "}
            </AuthenticatedRoute>
          }
        />

        <Route path="/404" exact element={<Error404 />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ isAuthenticatedUser }) => ({
  loggedIn: !!isAuthenticatedUser,
});

export default connect(mapStateToProps)(App);
