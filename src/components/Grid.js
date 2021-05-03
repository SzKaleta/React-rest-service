import "./Grid.css";
import GridElement from "./GridElement";
import NewGridElement from "./NewGridElement";
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Grid = (props) => {
  const store = useSelector((store) => store.newUser);

  const [post, setPost] = useState(false);
  let { isLoaded, items, fetchData } = useHttp();

  useEffect(() => {
    setPost(false);
    fetchData("https://localhost:44353/api/Users", {});
  }, [fetchData, post]);

  if (props.filter && items.length > 0) {
    items = items.filter((it) =>
      (it.fname + " " + it.lname)
        .toLowerCase()
        .includes(props.filter.toLowerCase())
    );
  }

  const onPostDataHandler = () => {
    setPost(true);
  };

  if (isLoaded) {
    return (
      <div className="grid-container">
        {store && (
          <NewGridElement onAcceptData={onPostDataHandler} />
        )}
        {items.length > 0 &&
          items.map((user) => (
            <GridElement name={user.fname + " " + user.lname} />
          ))}
        {items.length === 0 && <h2 className="">No data available...</h2>}
      </div>
    );
  } else {
    return (
      <div className="grid-container">
        <h2>Loading data</h2>
      </div>
    );
  }
};

export default Grid;
