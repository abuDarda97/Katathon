import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import store from '../../redux/store'

import Home from '../HomeContainer/HomeContainer'
import About from '../../views/About/About'
import KatathonData from '../KatathonContainer/KatathonContainer'

import '../../styles/index.scss'

const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/katathon" component={KatathonData} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default hot(module)(App)
