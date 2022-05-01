/* eslint-disable react/function-component-definition */
import React, { PropsWithChildren } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: PropsWithChildren<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
) => {
  const { children, ...rest } = args;
  return (
    <div className="App">
      <Button {...rest}>{children}</Button>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  type: "button",
};

export const Submit = Template.bind({});

Submit.args = {
  children: "Submit",
  type: "submit",
  onClick: () => alert("Submit button clicked"),
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: "Disabled",
  type: "button",
  disabled: true,
};
