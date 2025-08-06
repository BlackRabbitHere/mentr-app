import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import React from 'react';
import Results from './components/Results';
import PaymentForm from './components/checkout/PaymentForm';


function App(){
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/results' element={<Results/>}/>
                    <Route path='/payment' element={<PaymentForm/>}/>
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;