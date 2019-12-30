import React, { Component } from 'react';
import Landing from './components/home/Landing'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Ingredients from './components/home/Ingredients'
class App extends Component {
    render() {
        return (
        <BrowserRouter> 
        <Switch>       
            <Route exact path="/" component={Landing}/>
            <Route  path="/Ingredients" component={Ingredients}/>
               </Switch>
               </BrowserRouter>
        );
    }
}

export default App;