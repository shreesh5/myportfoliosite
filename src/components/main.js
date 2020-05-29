import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/myportfoliosite/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;

/*<Route exact path={`/home`} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} />*/
