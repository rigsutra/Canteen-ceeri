import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess"
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login';
import Signup from './Signup';
import About from './About';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </ChakraProvider>

  );
}

export default App;  