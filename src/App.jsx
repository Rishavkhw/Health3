import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Career from "./components/Career";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
      
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Home />

        </>
      ),
    },
      {
      path: "/products",
      element: (
        <>
          <Navbar />
          <Products />
    
        </>
      ),
    },
    {
      path: "/blogs",
      element: (
        <>
          <Navbar />
          <Blogs />
 
        </>
      ),
    },
        {
      path: "/career",
      element: (
        <>
          <Navbar />
          <Career />
 
        </>
      ),
    },
            {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
 
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
      
        </>
      ),
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
