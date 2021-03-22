import React, {Component} from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import ContactMe from './containers/ContactMe/ContactMe'
import Skills from './containers/Skills/Skills'
import About from './containers/About/About'
import Work from './containers/Work/Work'

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' component={ContactMe} />
            <Route path='/skills' component={Skills} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
          </Switch>
        </Layout>
    );
  }
}

export default App