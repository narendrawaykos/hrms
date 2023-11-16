import { RouteObject } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Page404 from "../components/Page404";
import SignIn from "../pages/common/auth/Signin";
import Dashboard from "../pages/common/Dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        children: [
          {
            path: "",
            element: <SignIn />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export { routes };
