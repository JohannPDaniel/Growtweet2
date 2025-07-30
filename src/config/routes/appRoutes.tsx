// instale o React-Router-Dom com o comando: npm install react-router-dom

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from "../../page/SignIn";
import { SignUp } from "../../page/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />,
    },
    {
        path: '/signUp',
        element: <SignUp />,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;