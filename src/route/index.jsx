import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,

    },
    {
        path: "/:id",
        element: <DetailPage/>,
    },
]);
export default router;