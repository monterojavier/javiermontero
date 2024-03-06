import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders App component", () => {
  render(<App />);
  expect(true).toBe(true);
});
