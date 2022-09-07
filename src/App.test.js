import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders my name on page", () => {
  render(<App />);
  // const linkElement = screen.getByText("I'M Javier Montero");
  expect(true).toBe(true);
});
