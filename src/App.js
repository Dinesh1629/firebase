import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
 import firebase from 'firebase';
 import { DB_CONFIG} from './Config';



class App extends Component{
  constructor(){
  super()

  const app = firebase.initializeApp(DB_CONFIG);
  this.database = this.app.database().ref().child('speed');
  this.state={
    speed: 10
  }
}

componentDidMount(){
  this.database.on('value', snap => {
    this.setState({
      speed: snap.val()
    });
  });
}

render()
{
  return(
    <div >
           <h1>the Value is {this.state.speed}</h1>
    </div>
  )
}


 
}
export default App;

