import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/Authcontext";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Protectedroute from "./components/Protectedroute";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Protectedroute><Account /></Protectedroute>} />
        <Route path="/moviedetail/id" element={ <Protectedroute><MovieDetail /></Protectedroute>} />      
      </Routes>
      
    </AuthContextProvider>
  );
}

export default App;
