import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList.js";

test("UserList in intial render", () => {
  render(
    <UserList
      data={[
        {
          id: "2001007926858",
          name: "Weekday THURSDAY Jeans Slim Fit black",
          address: "103 Prenzlauer berg",
          zip: "102030",
        },
      ]}
    />
  );
});
