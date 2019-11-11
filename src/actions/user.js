export const user=(userStatus)=>{
  return(dispatch)=>{
    dispatch({type:"USER_STATUS",userStatus})
  }
}