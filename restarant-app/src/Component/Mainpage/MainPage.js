import React, { useState } from "react";
import "./MainPage.css";
// import Header from "../Header/Header";
// import Footer from "../Footer/index";
import { Route, Routes } from "react-router-dom";
// import Home from "../Home/Home";
// import AboutProduct from "../Pages/AboutProduct/AboutProduct";

export default function MainPage(props) {
  const { hamburger, popupMenu,popmenuData } = props;
   console.log(props,'main')
 
  return (
    <React.Fragment>
      <section
        className={hamburger ||popmenuData[0][popupMenu]? "MainPage_container menu" : "MainPage_container"}
      >
        {/* {loading ? */}
        <>
          {/* <Header {...props} /> */}
          {/* <ProductBlock/> */}
       
          
         {/* <Routes>
         <Route path="/" element={<Home {...props} />} />
         <Route path="/AboutProduct" element={<AboutProduct {...props}/>} />
          </Routes>  */}
  
          {/* <Footer/> */}
          <div>sgiysgsgysgyudu</div>
        </>
         {/* : <div className="loading">Loading...</div> } */}
      </section>
    </React.Fragment>
  );
}
