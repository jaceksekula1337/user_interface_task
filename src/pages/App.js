import React from "react";
import Dashboard from "../components/Dashboard";
import Table from "../components/Table";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import Api from "../Api/Api";

import { useState, useEffect, filterText } from "react";

function App() {
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("popular");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const api = new Api();
    api.getTags().then((data) => setTags(data));
  }, []);

  const filteredTags = tags.filter(
    (tag) => tag?.name.toLowerCase().indexOf(filterText?.toLowerCase()) !== -1
  );
  const sortedTags = filteredTags.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.count - b.count;
    }
  });
  const paginatedTags = sortedTags.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <Dashboard />
      <Table tags={paginatedTags} />
      <Filters />
      <Sort />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalPages={Math.ceil(filteredTags.length / pageSize)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
