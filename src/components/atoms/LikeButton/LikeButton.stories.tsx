/* eslint-disable react/function-component-definition */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Helmet } from "react-helmet";
import LikeButton, { Props as LikeButtonProps } from "./LikeButton";

export default {
  title: "Atoms/LikeButton",
  component: LikeButton,
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args: LikeButtonProps) => (
  <div className="App">
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Helmet>
    <LikeButton {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  isVisible: true,
};

export const Unlike = Template.bind({});

Unlike.args = {
  isVisible: true,
  isLike: false,
};
