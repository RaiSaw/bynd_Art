import { ChakraProvider} from "@chakra-ui/react";
import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage"
import Shop from './pages/Shop'
import Login from "./pages/Login";
import Error from "./pages/Error";
import Footer from './components/Footer'
import Xr from './pages/Xr'
import Ar from './pages/Ar'

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/shop" element={<Shop/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/ar" element={<Ar/>} />
          <Route path="/vr" element={<Xr/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      <Footer/>
    </Router>
    </ChakraProvider>
  )
}

export default App;
