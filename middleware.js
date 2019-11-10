import fire from './fire'

export const Login=(e)=>{
  e.preventDefault();
  fire.auth().signInWithEmainAndPassword()
}