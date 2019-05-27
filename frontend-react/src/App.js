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
        <Infos infos={this.state.items} />
      </div>
    );
  }
  componentDidMount() {
    this.getInfo();
    // this.interval = setInterval(this.getInfo, 10000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
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
