import React from 'react'
import { useParams } from 'react-router-dom'

const ViewDataset = () => {

    const {id}  = useParams();

    console.log(id);

    

  return (
    <div>ViewDataset</div>
  )
}

export default ViewDataset