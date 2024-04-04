import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const Template = (args) => {
  const [page, setPage] = useState(args.page);
  const onPageChange = (newPage) => {
    setPage(newPage);
    args.onPageChangeAction(newPage);
  };
  useEffect(() => {
    setPage(args.page);
  }, [args.page]);
  return (
    <div className="bg-blue-100 rounded-xl py-5">
      <Pagination {...args} currentPage={page} setCurrentPage={onPageChange} />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...Pagination.defaultProps,
  numOfPages: 10,
  page: 1,
};
