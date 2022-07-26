import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Yourresults from './views/yourresults'
import Home from './views/home'
import Company from './views/company'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Yourresults} path="/yourresults" />
        <Route exact component={Home} path="/" />
        <Route exact component={Company} path="/company" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
