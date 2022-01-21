
import './App.css';
import AddNewMovie from './Components/AddNewMovie';
import ListOfMovies from './Components/ListOfMovies';
import NavBar from './Components/NavBar';
import { Data } from './Data';
import React, { useState } from 'react'

function App() {
  const [Movies, setMovies] = useState(Data)

  const addNewMovie=(x)=>{
    return setMovies([...Movies,x])
  }
  const filterMovie=(x)=>{
    return setMovies(Movies.filter(el=> el.Movies.toLowerCase().includes(x.toLowerCase())))
  }  
  
  
  return (
    <div className="App">

      <NavBar filter={filterMovie}/>
      <AddNewMovie addFunction={addNewMovie}/>
      <ListOfMovies Lmovies={Movies}/>
  
    
    </div>
  );
}

export default App;