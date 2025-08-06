import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import React from 'react';
import Results from './components/Results';
import PaymentForm from './components/checkout/PaymentForm';
import PaymentSuccess from './components/checkout/PaymentSuccess';
import Navbar from './components/Navbar';


function App(){
    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/results' element={<Results/>}/>
                    <Route path='/payment' element={<PaymentForm/>}/>
                    <Route path='/payment-success' element={<PaymentSuccess/>}/>
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;