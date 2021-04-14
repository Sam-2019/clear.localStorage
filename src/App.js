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
        setDataLength("Data cleared");
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      setDataLength("");
    }, 2000);

    return () => clearTimeout(timer);
  }

  function show() {
    var KeyName = window.localStorage;

    const propertyNames = Object.keys(KeyName);
    //const propertyValues = Object.values(KeyName);

    setData(propertyNames);
    setDataLength(propertyNames.length);

    if (propertyNames.length === 0) {
      setDataLength("No data");
    }

    const timer = setTimeout(() => {
      setDataLength("");
    }, 2000);

    return () => clearTimeout(timer);
  }

  return (
    <div className="App">
      <div className="content">
        <div className="button-container">
          <button onClick={show} className="my-button show" disabled={loading}>
            {loading ? "Loading.." : "Show content"}
          </button>

          <button
            onClick={clear}
            className="my-button clear"
            disabled={loading}
          >
            {loading ? "Loading.." : "Clear storage"}
          </button>
        </div>

        {data.map((items, index) => (
          <ListItem key={index} value={items} />
        ))}

        <div className="storage-length">{dataLength}</div>
      </div>
    </div>
  );
}

function ListItem({ value }) {
  return <div className="storage-item">{value}</div>;
}
