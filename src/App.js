import React,{useState,useEffect} from 'react';
import data from './person';



function App() {
  const [person,setPerson]=useState([]);
 useEffect(()=>setPerson(data),[]);
const personList=person.map((prson)=>(
  <div className="max-w-sm bg-blue-500 shadow-lg rounded-lg overflow-hidden my-4 mx-auto flex flex-col justify-center items-around p-4" key={prson.id}> 
  <header className="App-header mx-auto">
          <h1 >Employee {prson.id}</h1>
    </header>
        <h3 className="text-black text-lg mx-auto font-bold">{prson.company}</h3>
        <img className="rounded-full m-2 w-48 h-48 mx-auto" src={prson.logo} alt=""/>
        <h3 className="text-black text-lg mx-auto font-bold">{prson.position}</h3>
        <p className="text-black text-md mx-auto">{prson.role}</p>
        
  </div>
))

  return (
    <div className="App flex flex-col  justify-center items-around">
     
      {
            personList
      }
    </div>
  );
}

export default App;
