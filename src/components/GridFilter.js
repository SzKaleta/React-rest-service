import "./GridFilter.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const GridFilter = (props) => {
  const onTextChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const addNewElementHandler = () => {
    props.onAddElement(true);
  };
  return (
    <div className="grid-filter">
      {!props.addVisible && (
        <div className="grid-add" onClick={addNewElementHandler}>
          <AddCircleIcon fontSize="inherit" />
        </div>
      )}
      <input
        className="filter-input"
        type="text"
        placeholder="Filter items"
        onChange={onTextChangeHandler}
      />
    </div>
  );
};

export default GridFilter;
