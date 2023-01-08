import './partList.css';
import Part from '../part1/part1';

function partList({names,onDelete}) {
    return (
        <div>
            {names.map((item)=>{
                return <Part key={item.id} name={item} onDelete= {onDelete}/>
            })}
        </div>
    )
}

export default partList


