import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Todos from './Todos'

let Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/todos' component={Todos} />
  </Switch>
)

export default Main
