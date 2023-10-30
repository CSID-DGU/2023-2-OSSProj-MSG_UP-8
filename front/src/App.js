import React from "react";
import MainPage from "./pages/Mainpage";
import Login from "./pages/Loginpage";
import Signup from "./pages/Signuppage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    // <GlobalStyles>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    // </GlobalStyles>
  );
}

export default App;
