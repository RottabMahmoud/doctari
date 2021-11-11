import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

/**
 * Use Styles for styling components, to style our Search Input Field, and the text after selection from the
 * autoComplete suggestions.
 */
const useStyles = makeStyles(() => ({
  inputRoot: {
    color: "blue",
    fontFamily: "Roboto Mono",
    backgroundColor: "#f2f2f2",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "green",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "red",
    },
    "& .MuiAutocomplete-groupLabel": {
      border: "1px solid black",
    },
  },
  clearIndicator: {
    display: "none",
  },
  paper: { border: "1px solid black" },
}));

export default function Search({ data, setSearch }) {
  const classes = useStyles();
  const [value] = React.useState("");

  return (
    <Autocomplete
      options={data.map((x) => x.name)}
      onChange={(event, value) => setSearch(value)} // for handling the auto complete selection upon selection
      id="virtualize"
      classes={classes}
      style={{ width: "18em" }}
      listbox={{ backgroundColor: "black" }}
      disablePortal={true}
      renderInput={(params) => (
        <TextField
          onChange={(event) => setSearch(event.target.value)} // Upon typing it dynamically starts to update the rendered list
          value={value}
          label="Search"
          {...params}
          id="searchField"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
}
