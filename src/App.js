import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BurgerDetails from './components/BurgerDetails'
import BurgerList from './components/BurgerList'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import FeedbackForm from './components/FeedbackForm';
import 'bootstrap/dist/css/bootstrap.css';
import HealthProfile from "./components/healthprofile";
import Recommendations from "./components/Recommendations";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<BurgerList />} />
          <Route exact path="/order" element={<Cart/>} />
          <Route exact path="/burgers/:id" element={<BurgerDetails/>} />
          <Route exact path="/feedback/:id" element={<FeedbackForm/>} />

          <Route exact path="/healthprofile" element={<HealthProfile />} />
          <Route exact path="/recommendations" element={<Recommendations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
