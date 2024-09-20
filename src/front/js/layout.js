import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Hero } from "./pages/hero";
import { Signin } from './component/signin';
import { Signup } from './component/signup';
import HomePage from "./component/HomePage";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<><Navbar /><Hero /></>} />
                    <Route path="/signin" element={<><Navbar /><Signin /></>} />
                    <Route path="/signup" element={<><Navbar /><Signup /></>} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
