import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 170,
    maxWidth: 300,
    [theme.breakpoints.down("sm")]: {
      minWidth: 30,
    },
  },
  bookCover: {
    maxWidth: "100%",
    maxHeight: "400px",
  },
  bookTitle: {
    textOverflow: "ellipsis",
  },
}));

const Book = ({ id, title, author, cover }) => {
  const classes = useStyles();
  const image = require(`../assets/images/${cover}`).default;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={"/bookdetails/" + id}>
          <CardContent>
            <img src={image} alt="book cover" className={classes.bookCover} />
            <Typography variant="h6">{title}</Typography>
            <Typography color="textSecondary">{author}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
