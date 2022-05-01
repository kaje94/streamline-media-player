import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("Atom/TextInput", () => {
  it("fires includes passed value", async () => {
    const onChange = jest.fn();
    render(<TextInput value="test" onChange={onChange} />);
    expect(screen.getByTestId("input")).toHaveValue("test");
  });
  it("is disabled if disabled props is true", async () => {
    render(<TextInput disabled />);
    expect(screen.getByTestId("input")).toBeDisabled();
  });
});
