import { Search } from "@/components/Search/Search";
import { render, screen } from "@testing-library/react";

describe("correct render Search", () => {
  it("should render Search component", () => {
    render(
      <Search placeholder="Пейсхолдер!" raduiusSize="s" viewIcon={false} />,
    );

    expect(screen.getByPlaceholderText("Пейсхолдер!")).toMatchSnapshot();
  });
});
