import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/main_components/header';
import StickyFooter from './components/main_components/footer';
import MyDocument from './components/main_components/resume';
import MainInfo from './components/main_components/mainInfo';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import APIdoc from './components/apidoc';
import About from './components/About';
import TechStack from './components/techstack';

class App extends Component {
  render () {
    return (
      <div className='App' style={{ background: '#121212' }}>
        <header className='App-header'>
          <Router>
            <ButtonAppBar />
            <div>
              <Fade>
                <Switch>
                  <Route from='/home' to='/about' />
                  <Route exact path='/resume' component={MyDocument} />
                  <Route
                    exact
                    path='/yourinformation'
                    component={MainInfo}
                  />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/techstacks' component={TechStack} />

                  <Redirect from='/apidocumentation' to='api/documentation' />
                  <Route exact path='/api/documentation' component={APIdoc} />
                </Switch>
              </Fade>
            </div>
          </Router>
        </header>

        <footer className='App-footer'>
          <StickyFooter />
        </footer>
      </div>
    );
  }
}
export default App;
