import { useState, useEffect } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const [tablet, setTablet] = useState();
  const [mobile, setMobile] = useState();
  const [register, setRegister] = useState(false);
  useEffect(() => {
    const tabletQuery = matchMedia("(max-width:768px)");
    setTablet(tabletQuery.matches);
    const tabletChange = (event) => {
      setTablet(event.matches);
    };
    tabletQuery.addListener(tabletChange);
    return () => {
      tabletQuery.removeListener(tabletChange);
    };
  }, []);
  useEffect(() => {
    const mobileQuery = matchMedia("(max-width:600px)");
    setMobile(mobileQuery.matches);
    const mobileChange = (event) => {
      setMobile(event.matches);
    };
    mobileQuery.addListener(mobileChange);
    return () => {
      mobileQuery.removeListener(mobileChange);
    };
  }, []);
  const toggleRegister = () => {
    setRegister((prev) => (prev = !register));
  };
  const routes = createBrowserRouter([
    {
      path: "",
      element: (
        <Layout
          tablet={tablet}
          mobile={mobile}
          toggleRegister={toggleRegister}
        />
      ),
      children: [
        {
          path: "/",
          element: <Home mobile={mobile} toggleRegister={toggleRegister} />,
        },
        {
          path: "/home",
          element: <Home mobile={mobile} toggleRegister={toggleRegister} />,
        },
        {
          path: "/news",
          element: <News mobile={mobile} />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        { path: "/login", element: <Login mobile={mobile} /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
