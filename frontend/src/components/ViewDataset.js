import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ViewDataset = () => {
  const { id } = useParams()

  console.log(id);

  const url = "http://localhost:5000";
  const [Dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDataById = () => {
    setLoading(url + "/data/getbyid/" + id);
    fetch(url + "/data/getbyid/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDataset(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getDataById();
  }, []);

  const displayDataset = () => {
    console.log(loading);
    if(!loading && Dataset){
      return <div className="card">
      <div className="row">
        <div className="col">
          <img src={url+'/'+Dataset.thumbnail} alt="" />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">Title: {Dataset.title}</h5>
            <p className="card-text">Description: {Dataset.description}</p>
            <p className="card-text">Size: {Dataset.size}</p>
            <p className="card-text">Size: {Dataset.type}</p>
            <p className="card-text">Size: {Dataset.details}</p>
            <p className="card-text">Size: {new Date(Dataset.createdAt).toLocaleDateString()}</p>
            <p className="card-text">
              <small className="text-muted">Uploaded By: {}</small>
            </p>
          </div>
          </div>
          </div>
          </div>
    }
    }

  return <div>{displayDataset()}</div>
}

export default ViewDataset;