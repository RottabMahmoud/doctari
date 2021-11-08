import * as React from "react";

export default function Images({ itemData }) {
  /** The Array of Image to be rendered in display once item is expanded, filled with objects,
   * including the img src, as the value of key img.
   */
  const imagesArray = [];

  return (
    <div sx={{ width: "100%", height: "100%" }} cols={imagesArray.length}>
      {imagesArray.map((item) => (
        <div key={item.zip}></div>
      ))}
    </div>
  );
}
