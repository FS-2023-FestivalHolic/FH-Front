import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Main, List, Detail, Login, Register, User,
} from "../pages";
import Header from "./Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/:userid" element={<User />} />
                <Route path="/beer" element={<List />} />
                <Route path="/beer/:detailid" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;