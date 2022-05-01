import { render, screen, fireEvent } from "@testing-library/react";
import YoutubePlayer from "./YoutubePlayer";

// eslint-disable-next-line no-console
console.warn = jest.fn();
describe("Pages/YoutubePlayer", () => {
  it("Renders search bar and like buttons accordingly", async () => {
    render(<YoutubePlayer />);
    expect(screen.getByRole("button")).toBeDisabled();
    fireEvent.change(screen.getByPlaceholderText("Video ID"), {
      target: { value: "new value" },
    });
    expect(screen.getByRole("button")).toBeEnabled();
    expect(screen.queryByTestId("like-unlike-button")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByTestId("like-unlike-button")).toHaveLength(2);
  });
});
