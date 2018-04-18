import React from 'react'; // stateless Component
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component ={ LandingPage } />
        <Route path="/aboutme" component ={ AboutMe } />
        <Route path="/resume" component ={ Resume } />
        <Route path="/projects" component = { Projects} />
        <Route path="/contact" component ={ Contact} />
    </Switch>
)

export default Main;
