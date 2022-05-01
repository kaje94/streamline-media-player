import { render, screen, fireEvent } from "@testing-library/react";
import LikeButton from "./LikeButton";

// eslint-disable-next-line no-console
console.warn = jest.fn();
describe("Atom/LikeButton", () => {
  it("should be visible", async () => {
    render(<LikeButton />);
    expect(screen.getByTestId("like-unlike-button")).toBeInTheDocument();
  });
  it("fires onClick event handler", async () => {
    const onClick = jest.fn();
    render(<LikeButton onClick={onClick} />);
    fireEvent.click(screen.getByTestId("like-unlike-button"));
    expect(onClick).toHaveBeenCalled();
  });
});
