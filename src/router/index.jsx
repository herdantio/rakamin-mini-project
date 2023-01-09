import {
    createBrowserRouter,
    Navigate
  } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
      path: "/v1",
      element: <App/>,
    },
    {
        path: '/*',
        element: <Navigate to='/v1'/>
    }
  ]);

  export default router