import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {
    Main, List, Detail, Login, Register, User, BeerTest
} from "../pages";
import Header from "./Header";
import CheckLogin from './CheckLogin';
import { Navigate, Outlet } from 'react-router-dom';
const Router = () => {

    const [isLogin, setIsLogin] = useState(CheckLogin());

    const handleLogin = () => {
        setIsLogin(true);
      };
    
    const handleLogout = () => {
        setIsLogin(false);
    };
    
    //로그인한 회원은 들어갈 수 없는 페이지 
    const PublicRoute = () => {
        console.log("isLogin: ", isLogin);
        return isLogin ? <Navigate to="/"/> : <Outlet />;

    }
    //로그인한 회원만 들어갈 수 있는 페이지 
    const PrivateRoute = () => {
        console.log("isLogin: ", isLogin);
        return isLogin ? <Outlet /> :  <Navigate to="/"/>
    }

    return (
        <BrowserRouter>
            <Header isLogin={isLogin} onLogout={handleLogout}/>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/:userid" element={<User />} />
                </Route>

                <Route element={<PublicRoute/>}>
                    <Route path="/login" element={<Login onLogin={handleLogin}/>} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/" element={<Main />} />
                <Route path="/beer" element={<List />} />
                <Route path="/beer/:detailid" element={<Detail isLogin={isLogin}/>} />
                <Route path="/test" element={<BeerTest />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;