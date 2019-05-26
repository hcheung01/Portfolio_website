import React, { Component } from 'react';
import './App.css';
import InfoForm from './components/infoform';
import Infos from './components/infos';
// import Icon from '@material-ui/core/Icon';
// import IconButton from '@material-ui/core/IconButton';
// import SvgIcon from '@material-ui/core/SvgIcon';

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
        <InfoForm></InfoForm>
        <Infos infos={this.state.items} />
      </div>
    );
  }
  componentDidMount() {
    this.getInfo();
    this.interval = setInterval(this.getInfo, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getInfo = () => {
    fetch("http://localhost:5000/api/allinfo")
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
