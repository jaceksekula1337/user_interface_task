import React from "react";

function Pagination({ currentPage, pageSize, totalPages, setCurrentPage }) {
  return (
    <div>
      <p>
        Strona {currentPage} z {totalPages}
      </p>
      <button
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        Wstecz
      </button>
      <button
        onClick={() =>
          currentPage < totalPages && setCurrentPage(currentPage + 1)
        }
      >
        Dalej
      </button>
    </div>
  );
}

export default Pagination;
