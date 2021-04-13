import React from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = React.useState([]);
  const [dataLength, setDataLength] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function clear() {
    setLoading(true);

    try {
      const clearStorage = await window.localStorage.clear();

      if (clearStorage === undefined) {
        setData([]);
        setDataLength("No data");
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  function show() {
    var KeyName = window.localStorage;

    const propertyNames = Object.keys(KeyName);
    //const propertyValues = Object.values(KeyName);

    setData(propertyNames);
    setDataLength(propertyNames.length);
  }

  return (
    <div className="App">
      <button onClick={clear} className="my-button" disabled={loading}>
        {loading ? "Loading.." : "Clear localStorage"}
      </button>

      <button onClick={show} className="my-button" disabled={loading}>
        {loading ? "Loading.." : "Show"}
      </button>

      {data.map((items, index) => (
        <ListItem key={index} value={items} />
      ))}

      <div>{dataLength}</div>
    </div>
  );
}

function ListItem({ value }) {
  return <div className="storage-item">{value}</div>;
}
