import './part1.css';

const part1=({name,onDelete}) =>{


  return (
    <div className="card part-card">
      <div className="card-body">
      <h3>{name.name}</h3>
      <button type="button" className="btn btn-info" onClick={()=>onDelete(name.id)}>Delete</button>
      </div>
    </div>
  );
}

export default part1;
