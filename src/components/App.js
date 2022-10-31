import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle"

import Login from "./login/Login"
import Signup from "./login/Signup"
import Subscriptions from "./subscriptions/Subscriptions"
import MainPage from "./home/MainPage"
import SubscriptionForm from "./subscriptions/SubscriptionForm";
import { useState } from "react";


export default function App(){
    const [token, setToken] = useState("");

    return(<>
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<Login setToken={setToken}/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/subscriptions" element={<Subscriptions token={token}/>} />
            <Route path="/subscriptions/:idSubscription" element={<SubscriptionForm/>}/>
            <Route path="/home" element={<MainPage/>}/>
        </Routes>
    </BrowserRouter>
    </>)
}