import React from 'react';
import {Formik} from 'formik';
import { Button, TextField } from '@mui/material';
import Swal from 'sweetalert2';

const UpdateData = ({updateFormData, setShowUpdateForm, getDataFromBackend}) => {

  const dataSubmit = async (formdata) => {
    const response = await fetch('http://localhost:5000/data/update/' + formdata._id, {
      method: 'PUT',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })

      if(response.status === 200){
        console.log('success');
        Swal.fire({
            icon : 'success',
            title: 'Updated 👍',
            text: ' Details updated!!'
        });
        getDataFromBackend();
        setShowUpdateForm(false);
    }else{
        console.log(response.status);
        console.log('something went wrong');
    }
  }

  return (
    <div>
      <Formik 
      initialValues={updateFormData}
        onSubmit={dataSubmit}
        >
            { ( { values, handleChange, handleSubmit } ) => (
                <form onSubmit={handleSubmit}>
                    <TextField className='mt-4' fullWidth label="Title" id="title" onChange={handleChange} value={values.title} />    
                    <TextField className='mt-4' fullWidth label="Description" id="description" onChange={handleChange} value={values.description} />    
                    <TextField className='mt-4' fullWidth label="Size" id="size" onChange={handleChange} value={values.size} />    

                    <Button variant='contained' className='mt-5 mr-3' type='submit'>Submit</Button>
                    <Button onClick={e => setShowUpdateForm(false)} variant='contained' color='error' className='mt-5'>Cancel</Button>
                </form>
            ) }
        </Formik>
    </div>
  )
}

export default UpdateBrowsing;