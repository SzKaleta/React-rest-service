import './Grid.css'
import GridElement from './GridElement';
import NewGridElement from './NewGridElement';


const Grid = props => {
    let items = props.data;
    if(props.filter)
    {
        items = props.data.filter((it)=> (it.fname+" "+it.lname).toLowerCase().includes(props.filter.toLowerCase()))
    }
    const addNewElementHandler = (data) => {
        props.onAddElement(data);
      };
    const onNewData = (data)=> {
        props.onPostData(data);
    }
    return (
        <div className="grid-container">
            {props.addVisible && <NewGridElement onAdd={addNewElementHandler} onAcceptData={onNewData}/>}
            {items.length> 0 && items.map( user=> <GridElement name={user.fname+" "+user.lname}/>)}
            {items.length=== 0 && <h2 className="">No data available...</h2>}
        </div>
    );
}

export default Grid;
