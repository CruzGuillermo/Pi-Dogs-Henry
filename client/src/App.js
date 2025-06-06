// src/App.jsx
import './App.css';
import { Route, useLocation } from "react-router-dom";
import CreateDog from './components/CreateDog/CreateDog';
import Home from './components/Home/Home';
import LandingPage from "./components/LandingPage/LandingPage";
import DogDetail from "./components/DogDetail/DogDetail";
import DogEdit from './components/DogEdit/DogEdit';
import Navbar from './components/Navbar/Navbar'; 

function App() {
  const location = useLocation();

  return (
    <div className="App">
       <Navbar />

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:id" component={DogDetail} />
      <Route exact path="/CreateDog" component={CreateDog} />
      <Route exact path="/:id/edit" component={DogEdit} />
    </div>
  );
}

export default App;
