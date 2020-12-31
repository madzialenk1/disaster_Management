import React from 'react';
import './App.css';
import Home from 'src/Containers/HomePage';
import Survavial_Kits from 'src/Component/Survavial kits';
import Supliers from 'src/Component/Supliers';
import Help from 'src/Component/Help';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from 'src/Component/Header';
import NavBar from 'src/Component/NavBar';
import {MapWithMarker} from 'src/Component/MapWithMarker';
import {TableVictims} from 'src/Component/TableVictims';
import {ToggleSwitch} from 'src/Component/ToggleSwitch';
function App() {
  return (
   <Router>
   
   <div className="App">
      <Header/>
      <NavBar/>
      <Route path="/" exact component={Home} />
      <Route path="/Survavial_Kits" exact component={Survavial_Kits} />
      <Route path="/Help" exact component={Help} />
      <Route path="/Supliers" eaxact  component={Supliers} />
    </div>

    </Router>
    
  );
}

export default App;
