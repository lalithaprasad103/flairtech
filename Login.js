import React from 'react'
import { Link} from 'react-router-dom'
import fire from './fire'
class Login extends React.Component{
state={
  email:"",
  password:""
}
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  login=(e)=>{
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
     return  this.props.history.push("/dashboard")
    })
    .catch((error=>{
      console.log(alert(error))
    }))
  }

  render(){

    return(
      <div className="row">
      <form className="col s12" onSubmit={this.login}>
        <div className="row">
          <div className="input-field col s6">  
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" name="email" onChange={this.handleChange} type="text" className="validate"/>
            <label htmlFor="icon_prefix">Email</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">vpn_key</i>
            <input id="icon_telephone" name="password" onChange={this.handleChange} type="password" className="validate"/>
            <label htmlFor="icon_telephone">Password</label>
          </div>
         
        </div>
        <div className="w-50 content-between">
          
        <button type="submit" className="waves-effect waves-light btn-small text-center">Login</button>
        <button className="waves-effect waves-light btn-small text-center"><Link to="/signup" className="white-text">SignUp</Link></button>
        </div>
      </form>
  </div>
    )
  }
}

export default Login