import { render, screen } from "@testing-library/react";
import FederalState from "../components/FederalState.js";

test("renders the GeoLocation Component", () => {
  render(<FederalState itemData="Bayarn" />);
});
