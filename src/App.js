import React from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = React.useState([]);
  const [dataLength, setDataLength] = React.useState("");

  function clear() {
    const clearStorage = window.localStorage.clear();

    if (clearStorage === undefined) {
      console.log("storage cleared");
    }
  }

  function show() {
    var KeyName = window.localStorage;

    const propertyNames = Object.keys(KeyName);
    //const propertyValues = Object.values(KeyName);

    setData(propertyNames);
    setDataLength(propertyNames.length);
  }

  function save() {
    localStorage.setItem("myCat", "Tom");
    const getStorage = window.localStorage;
    console.log(getStorage);
  }

  function ListItem(props) {
    return <div className="storage-item">{props.value}</div>;
  }

  return (
    <div className="App">
      <button onClick={clear} className="my-button">
        clear localStorage
      </button>

      <button onClick={save} className="my-button">
        save
      </button>

      <button onClick={show} className="my-button">
        show
      </button>

      {data.map((items, index) => (
        <ListItem key={index} value={items} />
      ))}

      {/* <div>{KeyName.length}</div> */}
    </div>
  );
}
