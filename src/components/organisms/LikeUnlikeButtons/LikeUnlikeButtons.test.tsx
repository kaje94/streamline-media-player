import { render, screen, fireEvent } from "@testing-library/react";
import LikeUnlikeButtons from "./LikeUnlikeButtons";

// eslint-disable-next-line no-console
console.warn = jest.fn();
describe("Organisms/LikeUnlikeButtons", () => {
  it("renders like and dislike button component", async () => {
    const { rerender } = render(<LikeUnlikeButtons videoId="abc" />);
    expect(screen.getAllByTestId("like-unlike-button")).toHaveLength(2);
    fireEvent.click(screen.getAllByTestId("like-unlike-button")[0]);
    rerender(<LikeUnlikeButtons videoId="abcd" />);
    expect(screen.getAllByTestId("like-unlike-button")).toHaveLength(2);
  });
});
