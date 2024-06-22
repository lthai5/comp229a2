import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/home';


export default function App() {
    return (
        <>
        <div>
            <h1>Hello World</h1>
        </div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>

            </Routes>
        </Router>
        </>
    );
}