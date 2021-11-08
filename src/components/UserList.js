import React, { useState, useEffect } from "react";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Search from "./Search.js";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Popover from "@mui/material/Popover";
import GeoLocation from "./GeoLocation.js";
import Pagination from "@mui/material/Pagination";

// Styling our list of items
const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(1.2),
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    margin: "1em",
  },
  filter: {
    margin: "1em",
  },
}));
// Styling the Pop over postion
const PopoverStyle = {
  top: "50px",
};

const UserList = ({ data }) => {
  /**
   * Search Input field state.
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Our Product List state, and use Effect to set it to be equal to the data coming as our prop, once the ProductList
   * is Rendered
   */
  const [listOfItems, setListOfItems] = useState([]);
  useEffect(() => {
    setListOfItems(data);
  }, [data]);
  /**
   * The List Item OnClick Event to Trigger the Popover and pass the Additional zip of the selected Item.
   */
  const handleClick = (event, value) => {
    setAnchorEl(event.currentTarget);
    setZip(value);
  };

  /**
   * PopOver State and functions for expansion.
   */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Our Additional zip array of Strings
  const [zip, setZip] = useState();

  /**
   * PAGINATION Handling.
   */
  const [page, setPage] = React.useState(1);
  const classes = useStyles();

  // A Function to Calculate the Total Number of Pages
  const itemsPerPage = 10; // No of Items per Page
  const noOfPages = Math.ceil(
    listOfItems.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return val;
      return null;
    }).length / itemsPerPage
  );
  // Renders the selected page items upon selection of paging
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <div className={classes.filter}>
        {/* Our Input Search Field */}
        <Search data={listOfItems} setSearch={setSearchTerm} />
      </div>
      <List dense compoent="span">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
              return val;
            return null;
          })
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((projectItem) => {
            return (
              <ListItem
                key={projectItem.id}
                button
                onClick={(event) => {
                  handleClick(event, projectItem.zip);
                }}
              >
                <ListItemText
                  className={classes.item}
                  id={projectItem.id}
                  primary={projectItem.name}
                  secondary={`ID: ${projectItem.id}, Address: ${projectItem.address},
                    Postal Code: ${projectItem.zip}`}
                />
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    src="data:image/png;base64,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"
                    alt={`Avatar n°${projectItem + 1}`}
                  />
                </ListItemAvatar>
              </ListItem>
            );
          })}
      </List>
      {/* The Expansion Popover */}
      <Popover
        style={PopoverStyle}
        id={id}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        {/*List of zip Component */}
        <GeoLocation itemData={zip} />
      </Popover>
      <Divider />
      {/* Pagination Component */}
      <Box component="span">
        <Pagination
          page={page}
          classes={{ ul: classes.paginator }}
          count={noOfPages}
          onChange={handleChange}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          defaultPage={1}
        />
      </Box>
    </div>
  );
};

export default UserList;
