import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
import "@testing-library/jest-dom/extend-expect";

it("renders the Search Component", () => {
  const setSearch = jest.fn((value) => {});
  render(
    <Search
      data={[
        {
          id: "2001007926858",
          name: "Weekday THURSDAY Jeans Slim Fit black",
          address: "103 Prenzlauer berg",
          zip: "102030",
        },
      ]}
      setSearch={setSearch}
    />
  );
});

describe("Search Input value", () => {
  it("updates on typing in the Search input text field", () => {
    const setSearch = jest.fn((value) => {});

    const container = render(
      <Search
        data={[
          {
            id: "2001007926858",
            name: "Weekday THURSDAY Jeans Slim Fit black",
            address: "103 Prenzlauer berg",
            zip: "102030",
          },
        ]}
        setSearch={setSearch}
      />
    );

    const input = container.getByDisplayValue("");

    fireEvent.change(input, { target: { value: "Alex" } });
    expect(input.value).toBe("Alex");
  });
});
