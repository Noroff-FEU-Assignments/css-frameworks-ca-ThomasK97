
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeroSlider from './components/HeroSlider';
import Home from './components/pages/Home';
import News from './components/pages/News';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        
        
      </Switch>
      
      </Router>
     
      
      
    </>
  );
}

export default App;
