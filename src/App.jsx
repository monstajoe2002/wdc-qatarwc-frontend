import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Reservations from "./components/Reservations";

//defin
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="reservations" element={<Reservations />} />  {/* */}
      {/* define your own routes here */}
    </Route>
  )
);

//router provider to wrap the app
function App() {
  return (
    <>
      {/* Navbar here */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
