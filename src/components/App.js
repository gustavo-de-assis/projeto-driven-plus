import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle"

import Login from "./login/Login"
import Signup from "./login/Signup"
import Subscriptions from "./subscriptions/Subscriptions"
import MainPage from "./home/MainPage"


export default function App(){
    return(<>
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/subscriptions/" element={<Subscriptions/>}/>
            <Route path="/home" element={<MainPage/>}/>
        </Routes>
    </BrowserRouter>
    </>)
}