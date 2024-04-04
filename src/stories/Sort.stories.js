import React from "react";
import Sort from "../components/Sort";

export default {
  title: "Components/Sort",
  component: Sort,
};

const Template = (args) => <Sort {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sortBy: "name", // Initial sort value
  setSortBy: (value) => console.log("Sort by:", value), // Replace with actual function to update sort state
};

