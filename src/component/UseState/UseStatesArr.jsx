import { useState } from "react";

const arrayOfObjects = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Isaac" },
  { id: 10, name: "Julia" },
];
const UseStatesArr = () => {
  const [data, setData] = useState(arrayOfObjects);

  const handleRemoveAll = () => {
    setData([]);
  };

  const handleSingleRemove = (id) => {
    // console.log(id);
    const filteredData = data.filter(item=>item.id !== id);
    setData(filteredData)
  };

  return (
    <div className="text-center bg-cyan-100 my-8 py-4">
      {data &&
        data?.map((item, index) => (
          <div key={index} className="">
            <h1>{item.name}</h1>
            <button
              onClick={() => handleSingleRemove(item.id)}
              className="btn btn-xs btn-success my-2"
            >
              remove
            </button>
          </div>
        ))}
      <button onClick={handleRemoveAll} className="btn btn-primary my-2">
        Remove All
      </button>
    </div>
  );
};




export default UseStatesArr;
