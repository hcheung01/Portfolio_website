import React, { Component } from 'react';
import InfoForm from '../infoform';
import Infos from '../infos';

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
        <InfoForm getInfo={this.getInfo.bind(this)} />
        <Infos
          getInfo={this.getInfo.bind(this)}
          infos={this.state.items}
        />
      </div>

    );
  }
  componentDidMount() {
    this.getInfo();
  }
  getInfo = () => {
    fetch("/allinfo")
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
