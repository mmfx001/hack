import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Body';
import Post from './Post';
import Navbar from './Navbar';
import Admin from './Admin';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
