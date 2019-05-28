import React, { Component } from 'react';
import './App.css';
import InfoForm from './components/infoform';
import Infos from './components/infos';
import ButtonAppBar from './components/main_components/header';
import StickyFooter from './components/main_components/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoaded: false,
      items: []
    };
  }
  render() {
    return (
      <div>
        <div id="navBarContainer">
          <ButtonAppBar/>
        </div>
        <div id="sideInfoContainer">
          <InfoForm getInfo={this.getInfo.bind(this)} />
          <Infos
            getInfo={this.getInfo.bind(this)}
            infos={this.state.items}
          />
          </div>
        <div>
          <StickyFooter />
        </div>
      </div>
                  

    );
  }
  componentDidMount() {
    this.getInfo();
  }
  getInfo = () => {
    fetch("/api/allinfo")
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoaded: true,
          items: data
        })
      );
  }
}

export default App;
