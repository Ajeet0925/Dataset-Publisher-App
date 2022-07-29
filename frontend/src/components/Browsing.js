import React, { useEffect, useState } from "react";
import {Card,CardContent,CardMedia,Container,Grid,Paper,TextField,Typography,} from "@mui/material";
import Swal from "sweetalert2";

const Browsing = () => {
  const [userArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/data/getall");
    const data = await response.json();

    console.log(data);
    setDataArray(data);
    setLoading(false);
  };

  const updateData = (data) => {
    console.log(data);
    setUpdateFormData(data);
    setShowUpdateForm(true);
  };

  const deleteData = async (id) => {
    console.log(id);

    const response = await fetch("http://localhost:5000/data/delete/" + id, {
      method: "DELETE",
    });

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User deleted successfully",
      });

      // to get data from backend again
      getDataFromBackend();
    }
  };


  const displayData = () => {
    if(!loading){
      return userArray.map(({title,description,size,type,details,thumbnail,upvotes}) => (
        <Grid item md={3} sm={3} xs={12}>
                <Card>
                  <CardMedia component="img" image={thumbnail} height={180} />
                  <CardContent>
                    <Typography variant="h5">
                      {title},{description},{size},{type},{details},{upvotes}
                    </Typography>
                  </CardContent>
                </Card>
                <button
               className="btn btn-primary"
              //  onClick={(e) => updateData({ _id, title, description, size })}
             >
               {" "}
               <i class="fas fa-pencil"></i>{" "}
             </button>

             {/* <button className="btn btn-danger" onClick={(e) => deleteData(_id)}></button> */}
             <button className="btn btn-danger">
               {" "}
               <i class="fas fa-trash"></i>{" "}
             </button>
              </Grid>
              
      ))
    }
  }

  useEffect(() => {
    getDataFromBackend();
  }, []);

  return (
    <div>
      <Paper sx={{ height: "100vh" }}>
        <header className="bg-light">
          <Container sx={{ padding: "5rem 0" }}>
            <TextField
              // className="w-100"
              sx={{ width: "100%" }}
              label="Explore"
              placeholder="Search Your Product..."
            />
          </Container>
        </header>
        <section>

          <Container maxWidth="xl" className="mt-5">
            <Grid container spacing={5}>
             {displayData()}
            </Grid>
          </Container>
        </section>
      </Paper>

      {showUpdateForm ? (
          <div className="col-md">
            {/* <UpdateData updateFormData = {updateFormData} setShowUpdateForm={setShowUpdateForm} getDataFromBackend={getDataFromBackend} /> */}
          </div>
        ) : (
          ""
        )}

    </div>
  );
};

export default Browsing;
