import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import routes from './routes/index'
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
          <Header {...this.props}/>
          <div className="container">
            {routes.map(route => <Route {...route} {...this.props} />)}
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
