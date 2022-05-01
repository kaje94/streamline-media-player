import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Atom/Button", () => {
  it("contains children text", async () => {
    render(<Button>test</Button>);
    expect(screen.getByRole("button")).toBeEnabled();
    expect(screen.getByRole("button")).toHaveTextContent(/test/);
  });

  it("fires onClick event handler", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>test</Button>);
    fireEvent.click(screen.getByText(/test/));
    expect(onClick).toHaveBeenCalled();
  });

  it("is disabled if disabled props is true", async () => {
    render(<Button disabled>test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is a works as a submit button", async () => {
    render(<Button type="submit">test</Button>);
    expect(screen.getByRole("button")).toHaveProperty("type", "submit");
  });
});
