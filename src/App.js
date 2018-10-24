import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Sobre from './Sobre'
import Contato from './Contato'
import Campanhas from './Campanhas'

import base from './base'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>

          </div>
          <Route exact path='/' component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} />
          <Route path='/campanhas' component={Campanhas} />
          <Home />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
