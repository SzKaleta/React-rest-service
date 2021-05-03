import "./GridFilter.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { actions } from "../store/index";
import { useDispatch, useSelector } from "react-redux";

const GridFilter = (props) => {
  const newUser = useSelector((store) => store.newUser);
  const dispatch = useDispatch();

  const onTextChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const addNewElementHandler = () => {
    dispatch(actions.toggleNewUser());
  };
  return (
    <div className="grid-filter">
      {!newUser && (
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
