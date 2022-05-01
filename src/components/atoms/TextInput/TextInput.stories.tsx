/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (
  args: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <TextInput
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: "Placeholder text",
};

export const Disabled = Template.bind({});

Disabled.args = {
  placeholder: "Placeholder disabled",
  disabled: true,
};
