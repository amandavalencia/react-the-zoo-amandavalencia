import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Animals",
        element: <Animals/>
      },
      {
        path: "/Animal/:animalId",
        element: <Animal/>
      }
    ],
    errorElement: <NotFound/>
  },
]);
