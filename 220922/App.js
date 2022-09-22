import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import ContactLondon from './ContactLondon';
import ContactParis from './ContactParis';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/contact/london">London</Link>{" "}
        <Link to="/contact/paris">Paris</Link>{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}>
          <Route path="contact/london" element={<ContactLondon/>}/>
          <Route path="contact/paris" element={<ContactParis/>}/>
          </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
