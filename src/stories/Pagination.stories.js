import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    backgrounds: { default: "dark" },
  },
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(args.page);

  useEffect(() => {
    setCurrentPage(args.page);
  }, [args.page]);

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    args.onPageChangeAction(newPage);
  };

  return (
    <div className="bg-blue-100 text-white rounded-xl py-5">
      <Pagination
        currentPage={currentPage}
        totalPages={args.numOfPages}
        setCurrentPage={onPageChange}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  numOfPages: 10,
  page: 1,
  onPageChangeAction: (page) => console.log("Changed to page", page),
};
