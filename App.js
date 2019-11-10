import React from 'react'
import fire from './fire'
import Dashboard from './Dashboard'

import {user} from './actions/user'
import {connect} from 'react-redux'
class App extends React.Component{
state={
  user:{}
}

componentDidMount(){
  this.authListener();
}

authListener=()=>{
  
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
    this.setState({user:user})
    console.log(this.props.user)

    }
    else{
      this.setState({user:null});
    }
  })
}

getData=()=>{
  fire.firestore().collection("panels").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
}
  render(){
    // console.log(this.props.user)

    return(
      <div>
       
         {this.state.user?<Dashboard/>:(

           <h1 className="font-cursive center">Welcome!</h1>
          
         )}
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    user:(userStatus)=> dispatch(user(userStatus))
  }
}

export default connect(null,mapDispatchToProps)(App)