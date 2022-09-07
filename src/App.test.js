import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coming soon on page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Coming Soon/i);
  expect(linkElement).toBeInTheDocument();
});
