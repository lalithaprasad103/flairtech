const initState={
  email:"",
  password:"",
  userStatus:null
}

const Reducer=(state=initState,action)=>{
    switch(action.type){
      case "USER_STATUS":return {
        ...state,
        userStatus:action.userStatus
      }
      default: return state
    }
}

export default Reducer