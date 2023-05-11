import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar.tsx';

import About from './pages/About.tsx';
import Details from './pages/Details.tsx';
import Error from './pages/Error.tsx';
import Home from './pages/Home.tsx';

import './styles/rectify.scss';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="details" element={<Details />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
