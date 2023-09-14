import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = "https://openapi.programming-hero.com/api/videos/category/1000";
    try {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Use the fetched data here
          setData(data.data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      // Handle synchronous errors that might occur outside the promise chain
      console.error("Synchronous error:", error);
    }
  }, []);

  // console.log(data);
  
  return (
    <div className="my-24">
      {data &&
        data.map((item, idx) => (
          <h1 key={idx} className="text-4xl text-center my-6">
            {item.title}
          </h1>
        ))}
    </div>
  );
};

export default FetchData;