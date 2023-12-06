import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  const URL = process.env.PUBLIC_URL;
  const router = createBrowserRouter([
    {
      path: URL+ "/",
      element: <Home />
    },
    {
      path: URL + "/movie/:id",
      element: <Detail />
    }
  ]);

  return(
  <RouterProvider router={router} />
  );
}

export default App;
