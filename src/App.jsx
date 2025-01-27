import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from "./components/Layout.jsx";
import MainView, {HomeLoader} from "./views/MainView.jsx";
import NotFound from "./views/404.jsx";
import ErrorElement from "./components/Error.jsx";

export const ipifyKey = import.meta.env.VITE_IPIFY_KEY;

const router = createBrowserRouter(createRoutesFromElements(<Route path={'/'} element={<Layout/>}>
    <Route index element={<MainView/>} loader={HomeLoader} errorElement={<ErrorElement/>}/>
    <Route path={'*'} element={<NotFound/>}/>
</Route>))

function App() {
    return (<RouterProvider router={router}/>)
}

export default App
