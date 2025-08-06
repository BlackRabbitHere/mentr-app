import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import React from 'react';
import Results from './components/Results';


function App(){
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/results' element={<Results/>}/>
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App;