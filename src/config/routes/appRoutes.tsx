// instale o React-Router-Dom com o comando: npm install react-router-dom

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from "../../page/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;