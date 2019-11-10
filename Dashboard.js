import React from 'react'
import fire from './fire'
const logout=()=>{
  fire.auth().signOut()
  
}
class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <div>
          <h4>Panel-1</h4>
          <p>This is the panel</p>
        </div>
      </div>
    )
  }
}

export default Dashboard