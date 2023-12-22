import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: '/browse',
            element: <Browse></Browse>
        }
    ])
    return (
        <div className="">
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}

export default Body;