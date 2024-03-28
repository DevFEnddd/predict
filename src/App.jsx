import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./route/index.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

function App() {
    return <DefaultLayout>
        <RouterProvider router={router}/>
    </DefaultLayout>
}


export default App
