import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import './index.css';

function App() {
  return (
    <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="Contact">Contact</Link>
          <Link to="Company">Company</Link>
          <Link to="NewProject">NewProject</Link>
          <li>Contato</li>
        </div>

            <Container customClass= "min-height">
              <Routes>
                <Route exact path='/' element = {<><Home /></>}></Route>
                <Route exact path='company' element = {<><Company /></>}></Route>
                <Route exact path='contact' element = {<><Contact /></>}></Route>
                <Route exact path='newproject' element = {<><NewProject /></>}></Route>
              </Routes>
            </Container>
      
        <p>Footer</p>
    </Router>
  
  );
}

export default App;
