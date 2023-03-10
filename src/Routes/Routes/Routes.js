import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Media from "../../Pages/Home/Media/Media";
import About from "../../Pages/About/About";
import Message from "../../Pages/Message/Message";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "media",
        element: <Media></Media>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/message",
        element: <Message></Message>
      },
    ],
  },
]);

export default router;