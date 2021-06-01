import logo from "../logo.svg";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "aquamarine",
    padding: "20px",
    paddingBottom: "25px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
    width: "100%",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to={"/"} className={classes.logo}>
        <img alt="book" src={logo} width="50" height="50" />
        <h1> Library </h1>
      </Link>
    </header>
  );
};

export default Header;
