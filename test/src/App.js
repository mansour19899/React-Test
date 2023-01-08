import {useState} from 'react';
import PartList from './componetes/partList/partList';
import AddName from './componetes/AddName/AddName'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=> {

 const [names,setNames]=useState([
    {id:1,name:"Mansour"},
    {id:2,name:"Ali"},
    {id:3,name:"Mohammad"},
    {id:4,name:"Maryam"},
  ])

  const addName=(name)=>{
    const id=Math.floor(Math.random()*10000);
    const newNames={id,...name}
    setNames([...names,newNames])
  }

  const deleteName=(id)=>{
    setNames(names.filter((item)=>item.id!==id));
  }

  return (
    <div className="container">
      <AddName onAdd={addName} />
      <PartList names={names} onDelete={deleteName} />
    </div>
  )
}

export default App;
