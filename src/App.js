import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home.jsx';
import Headphone from './headphone.jsx';
import Earbuds from './earbuds.jsx';
import Products from './products.jsx';
import Neckbands from './neckbands.jsx';
import Loginpage from './loginpage.jsx';
import Signup from './signup.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/headphone' element={<Headphone />} />
          <Route path='/neckbands' element={<Neckbands />} />
          <Route path='/earbuds' element={<Earbuds />} />
          <Route path="/product/:id" element={<Products/>}/>
          <Route path='/loginpage' element={<Loginpage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
