import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Work from './Pages/Work'
import Header from './Shared/Header'
import './tailwind.output.css';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" >
     <Home/>
     </Route>
     <Route exact path="/skills" >
     <Skills/>
     </Route>
     <Route exact path="/Work" >
     <Work/>
     </Route>
     <Route exact path="/contact" >
     <Contact/>
     </Route>
     
    </div>
  );
}

export default App;
