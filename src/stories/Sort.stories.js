import React, { useState } from "react";
import Sort from "../components/Sort";

export default {
  title: "Components/Sort",
  component: Sort,
};

const Template = (args) => {
  const [sortBy, setSortBy] = useState(args.sortBy);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return <Sort {...args} sortBy={sortBy} setSortBy={handleSortChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  sortBy: "name",
};
