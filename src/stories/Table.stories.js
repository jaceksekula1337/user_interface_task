import React from "react";
import Table from "../components/Table";

export default {
  title: "Components/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tags: [
    { name: "Item 1", count: 10 },
    { name: "Item 2", count: 20 },
    { name: "Item 3", count: 30 },
  ],
};
