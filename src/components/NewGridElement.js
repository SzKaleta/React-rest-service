import "./NewGridElement.css";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useState } from "react";

const NewGridElement = (props) => {
  const onConfirmHandler = () => {
    let newuser = {firstName: firstName, lastName: lastName, age: age};
    setFirstName("");
    setLastName("");
    setAge("");
    props.onAdd(false);
    props.onAcceptData(newuser);
  };
  const onCancelHandler = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    props.onAdd(false);
  };

  const [firstName, setFirstName] = useState("");
  const onFirstNameChangeHandler = (event) => {
    console.log('event.target.value');
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const onLastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    console.log(event.target.value);

  };

  const [age, setAge] = useState("");
  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
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
        value={firstName}
        onChange={onFirstNameChangeHandler}
      />
      <input
        className="filter-input"
        type="text"
        value={lastName}
        placeholder="Last name"
        onChange={onLastNameChangeHandler}
      />
      <input
        className="filter-input"
        type="number"
        placeholder="Age"
        value={age}
        onChange={onAgeChangeHandler}
      />
      <div className="grid-icon" onClick={onConfirmHandler}>
        <CheckCircleIcon fontSize="large" htmlColor="#66ff66" />
      </div>
    </div>
  );
};

export default NewGridElement;
