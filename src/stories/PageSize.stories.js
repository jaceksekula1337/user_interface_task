
import React from "react";
import PageSize from "../components/PageSize";

export default {
  title: "Components/PageSize",
  component: PageSize,
};

const Template = (args) => {
  const [pageSize, setPageSize] = React.useState(args.pageSize);

  const handleSetPageSize = (newPageSize) => {
    setPageSize(newPageSize);
  };

  return (
    <div className="w-36 bg-black">
      <PageSize {...args} pageSize={pageSize} setPageSize={handleSetPageSize} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
};

export const CustomPageSize = Template.bind({});
CustomPageSize.args = {
  pageSize: 7,
};
