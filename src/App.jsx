import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { create } from "zustand";
import { firebaseAuth } from "../zustand/FirebaseAuth.js";
////PAGES
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import Quote from "./pages/Quote";
import Weather from "./pages/Weather";
import Commands from './pages/Commands'
import NotFound from "./pages/error/NotFound";
////PAGES
const App = () => {
  const { loginStatus } = firebaseAuth();
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={loginStatus ? <Home /> : <SignIn />} />
        <Route path="/chat" element={loginStatus ? <Chat /> : <SignIn />} />
        <Route path="/quote" element={loginStatus ? <Quote /> : <SignIn />} />
        <Route
          path="/weather"
          element={loginStatus ? <Weather /> : <SignIn />}
        />
        <Route
          path="/commands"
          element={loginStatus ? <Commands /> : <SignIn />}
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
