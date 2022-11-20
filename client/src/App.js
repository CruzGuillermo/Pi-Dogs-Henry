import './App.css';
import {Route} from "react-router-dom"
import CreateDog from './components/CreateDog/CreateDog';
import Home from './components/Home/Home';
import LandingPage from "./components/LandingPage/LandingPage"
import DogDetail from "./components/DogDetail/DogDetail"


function App() {

 
  return (
    <div className="App">
      <Route>
     <Route exact path="/" component={LandingPage}/>
     <Route exact path="/home" component={Home} />
     <Route exact path="/home/:id" component={DogDetail}/>
     <Route exact path="/CreateDog" component={CreateDog}/>
      </Route>
    </div>
  );
}

export default App;
