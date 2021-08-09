import logo from './logo.svg';
import './App.css' ;
import React from 'react';
import istanbul from"./istanbul.png";
import './style.css'

const getAge=(age)=>age;
let user={username:"ahmed"}
function getName()
{
  return user.username;
}
function App() {
  let firstname="ahmed";
  let lastname="ben abdallah";
  let input=<input type='text' placeholder='Name'/>
  let button=<button>Submit</button>
  let ahmed= (<p>ahmed</p>)
  return (
    <React.Fragment>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
         <h1 class="title red">Votre nom ici</h1>
         <br></br>
         <img src={istanbul} ></img>
         <br></br>
         <img src="/smile.jfif" ></img>
         <video width="320" height="240" controls>

            <source src="/video.mp4" type="video/mp4" />

        </video>
       </div>


   </React.Fragment>
  
  );
}

export default App;
