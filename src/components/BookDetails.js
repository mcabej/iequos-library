import { withRouter, useParams } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200,
      padding: 0,
      marginBottom: "15px",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "20px",
    },
  },
  media: {
    maxWidth: 350,
    height: 540,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200,
      height: 340,
    },
  },
  details: {
    marginTop: "30px",
    display: "flex",
    justifyItems: "flex-start",
    textAlign: "start",
    marginBottom: "25px",
  },
}));

function BookDetails({ books }) {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <Container maxWidth="lg" className={classes.details}>
      {books.map((book, i) => {
        if (book.id == id) {
          const image = require(`../assets/images/${book.imgUrl}`).default;
          return (
            <Grid container>
              <Grid item md={4} xs={12}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title={book.title}
                  />
                </Card>
              </Grid>
              <Grid item md={8} xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h2" component="h2">
                      {book.title}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      {book.author}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" className={classes.details}>
                      {book.synopsis}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        }
      })}
    </Container>
  );
}

export default withRouter(BookDetails);
