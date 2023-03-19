import React, { useState, useEffect } from "react";
import axios from "axios";

const CoursesHeader = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/courses");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoursesHeader;