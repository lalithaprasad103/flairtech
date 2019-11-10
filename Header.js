import React from 'react'
import {Link} from 'react-router-dom'
import fire from 'firebase'
class Header extends React.Component{

  state={user:null}
  componentDidMount(){
    this.authListener();
  }
  
  authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
      this.setState({user:user})
      }
      else{
        this.setState({user:null});
      }
    })
  }

  logOut=()=>{
    fire.auth().signOut();
    this.authListener();
  }
  render(){
   
  return(
  
    
            <div>
              
                <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo left">Flair</Link>
              <ul className="right">
              {this.state.user?(<div className="d-flex">
            <li><Link to="/account">Account</Link> </li>
            <li> <Link to="/" onClick={this.logOut}>Logout</Link></li>
            <li><Link to="/createpanel">Create Panel</Link></li>
            </div> ):(
            <div className="d-flex">
              <li><Link to="/login">Login</Link></li> 
              <li><Link to="/signup">SignUp</Link></li>
            </div>
            )}
              </ul>
            </div>
          </nav>
        
            </div>
          
  ) 
}
}

export default Header