import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader"
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { isMobile } from 'react-device-detect';


function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (isMobile) {
        return (
            <div>
                Comming soon
            </div>
        )
    }
    else {
        return (
            <Router>
                <Preloader load={load} />
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                </div>
                <Analytics />
            </Router>
        );
    }

}


export default App;
