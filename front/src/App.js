import React from "react";
import MainPage from "./pages/Mainpage";
import Login from "./pages/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    // <GlobalStyles>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    // </GlobalStyles>
  );
}

export default App;
