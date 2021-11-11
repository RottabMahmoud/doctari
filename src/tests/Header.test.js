import { render, screen } from "@testing-library/react";
import Header from "../components/Header.js";

it("renderes the Header Component", () => {
  render(<Header />);
});
