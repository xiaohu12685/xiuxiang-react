import React from 'react';
import './App.css';
import Child from './child';
import store from './store/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: store.getState() };
    store.subscribe(() =>
      this.setState({
        data: store.getState()
      })
    );
  }

  render() {
    return <Child data={this.state.data} />
  }
}

export default App;
