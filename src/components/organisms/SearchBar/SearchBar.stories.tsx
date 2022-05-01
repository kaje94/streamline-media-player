/* eslint-disable react/function-component-definition */
import React, { PropsWithChildren } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchBar, { Props as SearchBarProps } from "./SearchBar";

export default {
  title: "Organisms/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (
  args: PropsWithChildren<SearchBarProps>
) => {
  const { children, ...rest } = args;
  return (
    <div className="App">
      <SearchBar {...rest}>{children}</SearchBar>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
