import './GridElement.css'

const GridElement = props => {
    return (
        <div className="grid-element">
            <div className="">
                {props.name}
            </div>
        </div>
    );
}

export default GridElement;
