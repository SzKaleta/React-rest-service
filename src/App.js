import "./App.css";
import Grid from "./components/Grid.js";
import GridFilter from "./components/GridFilter.js";

import { useState, useEffect } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://localhost:44353/api/Users",{            
      method: 'GET',
  })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error)
        }
      )
  }, [post])

  const [filter, setFilter]= useState('')
  const changeFilterHandler = (data) =>{
    setFilter(data)
  };
  
  const [addVisible, setAddVisible]= useState(false)
  const changeAddVisible = (data) =>{
    setAddVisible(data)
  };

  const [data, setData]= useState(null)
  const postData = (newData) => {
    setData(newData);
  };
  useEffect(() => {
    if(data!=null)
    {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "firstName": data.firstName, "lastName": data.lastName, "age": parseInt(data.age) })
    };
    fetch('https://localhost:44353/api/Users', requestOptions)
        .then(response => setPost(response.json()))
        //.then(data => setPost(data));
    }
}, [data]);


  return (
    <div className="App-header">
      <h1>REST service</h1>
      <GridFilter onChangeFilter={changeFilterHandler} onAddElement={changeAddVisible} addVisible={addVisible}/>
      {isLoaded && <Grid data={items} filter={filter} addVisible={addVisible} onAddElement={changeAddVisible} onPostData={postData}/>}
      {!isLoaded && <p>Loading...</p>}
      {error && <h2>ERROR: </h2>}

    </div>
  );
}

export default App;
