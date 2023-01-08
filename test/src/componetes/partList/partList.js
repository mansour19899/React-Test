import './partList.css';
import Part from '../part1/part1';

function partList({names}) {
    return (
        <div>
            {names.map((item)=>{
                return <Part key={item.id} title={item.name} />
            })}
        </div>
    )
}

export default partList


