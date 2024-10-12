import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders a Header", () => {
    render(<Header />);

    const heading = screen.findByTestId("mainNav");

    expect(heading).toBeDefined();
  });
});
