import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import "./styles.css";
import Login from './Login'
import Signup from './Signup'
import {createStore} from 'redux'
import Reducer from './reducers'
import {Provider} from 'react-redux'
import Header from './Header'
import Dashboard from './Dashboard'
import CreatePanel from './CreatePanel'
const store=createStore(Reducer)
const Main=()=>{
  return(
    <BrowserRouter>
     <Header/>
     <Switch> 
      <Route exact path="/" component={App}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/createpanel" component={CreatePanel}/>
      </Switch>  
    </BrowserRouter>
  )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><Main/></Provider>, rootElement);
