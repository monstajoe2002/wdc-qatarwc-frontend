import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="reservation" element={<Reservation />} /> 
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
