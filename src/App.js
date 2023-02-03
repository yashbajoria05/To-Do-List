import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import List from "./List";
import "./App.css";

const App = () => {
  const [itemName, setItemName] = useState("");
  const [listItems, setListItems] = useState([]);

  const textChange = (event) => {
    setItemName(event.target.value);
  };
  const addItem = () => {
    setListItems((oldItems) => {
      return [...oldItems, itemName];
    });
    setItemName("");
  };
  return (
    <>
      <div className="main-container">
        <h1>To-Do List</h1>
        <div className="container">
          <TextField
            id="standard-basic"
            label="Add Tasks"
            value={itemName}
            variant="standard"
            className="input_feild"
            onChange={textChange}
          />
          <Button variant="contained" className="btn" onClick={addItem}>
            <AddIcon />
          </Button>
        </div>
        <ul>
          {listItems.map((val, index) => {
            return <List key={index} text={val} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
