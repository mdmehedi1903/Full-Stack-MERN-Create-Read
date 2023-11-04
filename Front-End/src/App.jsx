import React, { useState } from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AppNav from './components/AppNav';

const App = () => {
  return (
    <BrowserRouter>
      <AppNav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/profile/:user_id' element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
