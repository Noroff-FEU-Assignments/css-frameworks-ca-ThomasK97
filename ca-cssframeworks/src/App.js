
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Navigation from './components/Navbar';
import Tab from './components/Tab';
import Contact from './components/pages/Contact';




function App() {
  return (
    <>
      <Router>
      
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/contact' component={Contact} />
        
        
      </Switch>
      
      </Router>
      
     
      
      
    </>
  );
}

export default App;






