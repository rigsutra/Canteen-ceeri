import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login';
import Signup from './Signup';
import About from './About';

function App() {
    const [isLogin, setIsLogin] = useState(false);  // Handle login state here

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/login" 
                        element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} 
                    />
                    <Route 
                        path="/signup" 
                        element={<Signup isLogin={isLogin} setIsLogin={setIsLogin} />} 
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
