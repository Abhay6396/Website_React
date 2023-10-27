import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Navbar from "./Navbar";

function App() {
    return (
        <>  
            <Navbar />
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/contact" element={<Contact/>} />
                <Route  path="/about" element={<About/>} />
                <Route  path="/service" element={<Service/>} />
                <Route  path="*" element={Error} />
            </Routes>
        </>
    );
}

export default App;