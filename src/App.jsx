import React from 'react'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './Components'
import { Home } from './Pages'

function App() {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Navbar />
         <Switch>
            <Route exact to='/' component={Home} />
         </Switch>
      </BrowserRouter>
   )
}

export default App
