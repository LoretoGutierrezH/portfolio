import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProfileSummary from './components/ProfileSummary.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <main className="mainContainer">
      <Router>
       <Navbar />
       <Route path="/">
         <Redirect to="/sobre-mí"></Redirect>
       </Route>
       <Route path="/sobre-mí" exact>
         <ProfileSummary />
       </Route>
       <Route path="/habilidades">
         <Skills />
       </Route>
       <Route path="/trabajo" exact>
         <Projects />
       </Route>
      {/*  <Route path="/contacto">
        <Contact /> 
       </Route> */}
       {/* <Footer /> */}
      </Router>
    </main>
  );
}

export default App;
