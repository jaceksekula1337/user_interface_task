import React from "react";
import Table from "../components/Table";

export default {
  title: "Components/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    { id: 1, name: "Item 1", value: 10 },
    { id: 2, name: "Item 2", value: 20 },
    { id: 3, name: "Item 3", value: 30 },
  ],
};
