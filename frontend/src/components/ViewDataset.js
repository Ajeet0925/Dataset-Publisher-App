import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ViewDataset = () => {
  const { id } = useParams();

  console.log(id);

  const [userArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:5000";

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/data/getbyid/:dataid");
    const data = await response.json();

    console.log(data);
    setDataArray(data);
    setLoading(false);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  return (
    <div className="container">
      <div className="card" style={{height:'600px',backgroundColor:'lightblue'}}>
        <div className="card-body">
          {getDataFromBackend}
        </div>
      </div>
    </div>
  );
};

export default ViewDataset;
