import * as React from "react";
import AppBar from "@mui/material/AppBar";

export default function Header() {
  return (
    <AppBar style={{ height: "2em" }} position="static" color="inherit">
      <a
        style={{ margin: "1px" }}
        href="https://crealytics.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ width: "11em", height: "2em" }}
          src="https://crealytics.com/wp-content/uploads/2020/03/logo_crealytics-1.png"
          alt="logo"
        />
      </a>
    </AppBar>
  );
}
