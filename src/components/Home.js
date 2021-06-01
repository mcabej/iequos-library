import Category from "./Category";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.7),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    pointerEvents: "none",
    paddingLeft: "10px",
    paddingTop: "3px",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1.5, 0, 1.5, 0),
    paddingLeft: "10px",
  },
  searchBg: {
    width: "100%",
    backgroundColor: "aquamarine",
    paddingBottom: "20px",
  },
}));

const Home = ({ categories, books }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  return [
    <div className={classes.searchBg}>
      <Container maxWidth="lg">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            type="text"
            placeholder="Search by title..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{
              "aria-label": "search",
            }}
            onChange={(e) => {
              console.log(e);
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </Container>
    </div>,
    <Container maxWidth="lg">
      {categories.map(function (cat, i) {
        return (
          <Category
            key={i}
            categories={cat}
            books={books.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })}
          />
        );
      })}
    </Container>,
  ];
};

export default Home;
