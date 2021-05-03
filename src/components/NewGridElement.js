import "./NewGridElement.css";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useRef } from "react";
import useHttp from "../hooks/use-http";
import { actions } from "../store/index";
import { useDispatch } from "react-redux";

const NewGridElement = (props) => {
  const dispatch = useDispatch();
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  let { fetchData } = useHttp();

  const clearInputs = () => {
    firstName.current.value = "";
    lastName.current.value = "";
    age.current.value = "";
    dispatch(actions.toggleNewUser());
  };

  const onConfirmHandler = () => {
    const newuser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
    };
    fetchData("https://localhost:44353/api/Users", {
      method: "POST",
      body: newuser,
      headers: {
        "Content-Type": "application/json",
      },
    });
    clearInputs();
    props.onAcceptData((prev)=> !prev);
  };

  const onCancelHandler = () => {
    clearInputs();
  };

  return (
    <div className="new-grid-element">
      <div className="grid-icon" onClick={onCancelHandler}>
        <RemoveCircleIcon fontSize="large" htmlColor="#ff5050" />
      </div>
      <input
        className="filter-input"
        type="text"
        placeholder="First name"
        ref={firstName}
      />
      <input
        className="filter-input"
        type="text"
        ref={lastName}
        placeholder="Last name"
      />
      <input
        className="filter-input"
        type="number"
        placeholder="Age"
        ref={age}
      />
      <div className="grid-icon" onClick={onConfirmHandler}>
        <CheckCircleIcon fontSize="large" htmlColor="#66ff66" />
      </div>
    </div>
  );
};

export default NewGridElement;
