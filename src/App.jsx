import React, { useState } from 'react';
import  NewComponent from './pages/Main';
import Host from './pages/Host';
import Product from './pages/Product';
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewComponent />} />
                <Route path="/host" element={<Host />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
