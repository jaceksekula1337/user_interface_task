import Dashboard from "../components/Dashboard";
import Table from "../components/Table";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import PageSizeSelector from "../components/PageSize";
import Api from "../Api/Api";

import { useState, useEffect, filterText } from "react";

function App() {
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("popular");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const api = new Api();

    setIsLoading(true);

    api.getTagsWithState()
      .then((response) => {
        setIsLoading(false);
        setTags(response.tags);
        setError(response.error);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  const filteredTags = tags.filter(
    (tag) =>
      tag.name.toLowerCase().indexOf((filterText || "").toLowerCase()) !== -1
  );

  const sortedTags = filteredTags.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return b.count - a.count;
    }
  });

  const paginatedTags = sortedTags.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="bg-gray-700 min-h-screen">
      <Dashboard />
      <div className="w-1/2 mx-auto mt-5">
        <div className="flex justify-between px-5 mb-5">
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
          <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
        </div>
        {isLoading && (
          <div className="text-center text-green-200">
            <p>Loading data...</p>

          </div>
        )}
        {error && <p className="text-center text-red-500">Błąd: {error}</p>}
        {!error && !isLoading && <Table tags={paginatedTags} />}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredTags.length / pageSize)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
