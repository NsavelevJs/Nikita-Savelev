import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" >
     <Home/>
     </Route>
     {/* <Route >
     <Home/>
     </Route>
     <Route >
     <Home/>
     </Route> */}
    </div>
  );
}

export default App;
