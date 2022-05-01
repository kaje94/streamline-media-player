import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Organisms/SearchBar", () => {
  it("handled inputs as expected", async () => {
    const onClick = jest.fn();
    render(
      <SearchBar
        onSearchClick={onClick}
        searchButtonText="Search"
        searchPlaceholder="Video ID"
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
    fireEvent.change(screen.getByPlaceholderText("Video ID"), {
      target: { value: "new value" },
    });
    expect(screen.getByRole("button")).toBeEnabled();
    fireEvent.click(screen.getByText(/Search/));
    expect(onClick).toHaveBeenCalledWith("new value");
  });
});
