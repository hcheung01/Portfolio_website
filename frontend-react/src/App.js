import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/main_components/header';
import StickyFooter from './components/main_components/footer';
import MyDocument from './components/main_components/resume';
import MainInfo from './components/main_components/mainInfo';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import { List, ListItem } from '@material-ui/core';

class MyInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
  }
  render () {
    console.log(this.state.items);

    return (
      <h1 style={{ color: 'white' }}>HELLO WELCOME TO MY INFO PAGE</h1>
      // this.state.items.map(data => {
      //   <List>
      //     <ListItem />
      //   </List>
      // })
    );
  }
  componentDidMount () {
    this.getInfo();
  }
  getInfo = () => {
    fetch('/myinfo')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data
        })
      })
  }
}

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
                  <Route exact path='/' to='/home' />
                  <Route exact path='/resume' component={MyDocument} />
                  <Route exact path='/yourinformation' component={MainInfo} />
                  <Redirect from='/myinformation' to='myinfo' />
                  <Route exact path='/myinfo' component={MyInfo} />
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
