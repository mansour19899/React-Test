import './part1.css';

const part1=({title}) =>{

const showName=()=>{
  console.log(title);
}


  return (
    <div className="card part-card">
      <div className="card-body">
      <h3>{title}</h3>
      <button type="button" className="btn btn-info" onClick={showName}>Info</button>
      </div>
    </div>
  );
}

export default part1;
