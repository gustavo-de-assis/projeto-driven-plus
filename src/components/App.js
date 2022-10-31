import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle"

import Login from "./login/Login"
import Signup from "./login/Signup"
import Subscriptions from "./subscriptions/Subscriptions"
import MainPage from "./home/MainPage"
import { useEffect, useState } from "react";
import SubscriptionForm from "./subscriptions/SubscriptionForm";
import AuthContext from "../contexts/AuthContext";


export default function App() {
    const [token, setToken] = useState("");
  

    return (<>
        <AuthContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/plans" element={<Subscriptions />} />
                    <Route path="/subscription/:idSubscription" element={<SubscriptionForm />} />
                    <Route path="/home" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    </>)
}