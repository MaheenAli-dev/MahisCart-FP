import React from 'react';
import Login from '../User/Pages/Login';
import Products from '../User/Pages/Products';
import CategorySec from '../User/Pages/CategorySec';
import Home from '../User/Pages/Home';
import GuestNvagatio from '../Components/GuestNvagatio';
import FooterSection from '../Components/FooterSection';
import { Navigate, Route, Routes } from 'react-router-dom'

function index() {
  return (
    <>
      <GuestNvagatio />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/CategorySec" element={<CategorySec />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace={true}/>} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default index;




