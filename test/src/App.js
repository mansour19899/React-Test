import {useState} from 'react';
import PartList from './componetes/partList/partList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=> {

 const [names,setNames]=useState([
    {id:1,name:"Mansour"},
    {id:2,name:"Ali"},
    {id:3,name:"Mohammad"},
    {id:4,name:"Maryam"},
    {id:5,name:"Javad"},
    {id:6,name:"Jasem"},
  ])


  return (
    <div className="container">
      <PartList names={names} />
    </div>
  )
}

export default App;
