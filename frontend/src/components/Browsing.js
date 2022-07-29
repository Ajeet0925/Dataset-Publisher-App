import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Browsing = () => {
  const [userArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:5000";

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/data/getall");
    const data = await response.json();

    console.log(data);
    setDataArray(data);
    setLoading(false);
  };

  const displayData = () => {
    if (!loading) {
      return userArray.map(
        ({
          _id,
          title,
          description,
          size,
          type,
          details,
          thumbnail,
          upvotes,
        }) => (
          <Grid item md={3} sm={3} xs={12}>
            <Card>
              <CardMedia
                component="img"
                image={url + "/" + thumbnail}
                height={180}
              />
              <CardContent>
                <Typography variant="h5">
                  {title},{description},{size},{type},{details},{upvotes}
                </Typography>

                <Link className="btn btn-primary" to={"/view/" + _id}>
                  View More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        )
      );
    }
  };

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
    </div>
  );
};

export default Browsing;
