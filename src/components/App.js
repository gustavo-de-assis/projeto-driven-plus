import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle"

import Login from "./login/Login"
import Signup from "./login/Signup"
import Subscriptions from "./subscriptions/Subscriptions"
import MainPage from "./home/MainPage"
import { useState } from "react";
import SubscriptionForm from "./subscriptions/SubscriptionForm";


export default function App(){
    const [token, setToken] = useState("");

    return(<>
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<Login setToken={setToken}/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/plans" element={<Subscriptions token={token}/>} />
            <Route path="/subscription/:idSubscription" element={<SubscriptionForm token={token}/>} />
            <Route path="/home" element={<MainPage/>}/>
        </Routes>
    </BrowserRouter>
    </>)
}