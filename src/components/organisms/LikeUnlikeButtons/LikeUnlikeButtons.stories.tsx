/* eslint-disable react/function-component-definition */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Helmet } from "react-helmet";
import LikeUnlikeButtons, {
  Props as LikeUnlikeButtonsProps,
} from "./LikeUnlikeButtons";

export default {
  title: "Organisms/LikeUnlikeButtons",
  component: LikeUnlikeButtons,
} as ComponentMeta<typeof LikeUnlikeButtons>;

const Template: ComponentStory<typeof LikeUnlikeButtons> = (
  args: LikeUnlikeButtonsProps
) => (
  <div className="App">
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Helmet>
    <LikeUnlikeButtons {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  videoId: "abc",
};
