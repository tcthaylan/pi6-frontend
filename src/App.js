import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/template/Header'
import routes from './routes/index'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          {routes.map(route => <Route {...route} {...this.props} />)}
        </div>
      </Router>
    );
  }
}

export default App;
