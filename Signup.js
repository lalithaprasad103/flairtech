import React from 'react'
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

  register=(e)=>{
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>console.log(u))
    .catch((error)=>console.log(error))

    return this.props.history.push("/dashboard")
  }
  render(){

    return(
      <div>
          <div>
            <h2>SignUp</h2>
            <div className="row">
      <form className="col s12" onSubmit={this.register}>
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
          
        <button type="submit" className="waves-effect waves-light btn-small text-center">SignUp</button>
        </div>
      </form>
  </div>
          </div>
          
      </div>
    )
  }
}

export default Login