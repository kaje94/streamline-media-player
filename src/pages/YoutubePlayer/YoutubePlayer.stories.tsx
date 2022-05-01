/* eslint-disable react/function-component-definition */
import React from "react";
import { Helmet } from "react-helmet";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import YoutubePlayer from "./YoutubePlayer";

export default {
  title: "Pages/YoutubePlayer",
  component: YoutubePlayer,
} as ComponentMeta<typeof YoutubePlayer>;

const Template: ComponentStory<typeof YoutubePlayer> = () => (
  <div className="App">
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Helmet>
    <YoutubePlayer />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
