import './App.css';
import NavBar from './components/UI/NavBar'
import Data from './components/Data'
import Main from './components/Main/Main'
import {Route, Switch} from 'react-router-dom'
import Movie from './components/Movie/Movie'
import Home from './components/Home/Home'
import CustomSelect from './components/UI/CustomSelect'
import { useState } from 'react';

function App() {
  const[rating,setRating]= useState('')
  return (

    <div className="App">
       <NavBar/>
       <CustomSelect/>
       <Switch>
         <Route exact path='/' render={()=> <Main Data={Data}/>}/>
         <Route path='/Movie/:id' render={()=> <Movie Data={Data}/>}/>
         <Route path='/Movie' render={()=> <Home Data={Data}/>}/>
       </Switch>
    </div>
  );
}

export default App;
