import React, { Component } from 'react';
import './App.css';
import InfoForm from './components/infoform';
import Infos from './components/infos';

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
      <div className="Info">
        <InfoForm getInfo={this.getInfo.bind(this)}/>
        <Infos getInfo={this.getInfo.bind(this)} infos={this.state.items} />
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
