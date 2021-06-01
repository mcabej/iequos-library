import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Book from "./Book";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  category: {
    marginTop: "50px",
    marginBottom: "20px",
  },
  categoryTitle: {
    display: "flex",
    paddingLeft: "20px",
  },
}));

const Category = ({ categories, books }) => {
  const classes = useStyles();

  return [
    <Container maxWidth="lg">
      <div className={classes.category}>
        <h2 className={classes.categoryTitle}>{categories}</h2>
        <Divider variant="middle" />
        <br />
      </div>
    </Container>,
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {books.map((book, i) => {
          if (categories == book.category) {
            return (
              <Grid container item xs={6} sm={4} justify="center">
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  category={book.category}
                  cover={book.imgUrl}
                  synopsis={book.synopsis}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </Container>,
  ];
};

export default Category;
