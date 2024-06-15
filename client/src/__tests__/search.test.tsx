import { render, screen } from "@testing-library/react";
import { Search } from "../components/Search/Search";

describe("correct render Search", () => {
  it("should render Search component", () => {
    render(
      <Search placeholder="Пейсхолдер!" raduiusSize="s" viewIcon={false} />
    );

    expect(screen.getByPlaceholderText("Пейсхолдер!")).toMatchSnapshot();
  });
});
