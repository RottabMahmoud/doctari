import * as React from "react";
import AppBar from "@mui/material/AppBar";

export default function Header() {
  return (
    <AppBar style={{ height: "5em" }} position="static" color="inherit">
      <a
        style={{ margin: "1px" }}
        href="https://doctari.de/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ width: "14em", height: "5em" }}
          src="https://media.stepstone.com/upload_de/logo/A/logodoctari-GmbH-178044DE-2011171259.gif"
          alt="logo"
        />
      </a>
    </AppBar>
  );
}
