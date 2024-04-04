import { TextField, IconButton, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
function Pagination({
  currentPage,
  pageSize,
  totalPages,
  setCurrentPage,
  setPageSize,
}) {
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); 
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <Stack direction="row" spacing={2}>
        <Typography>
          Strona {currentPage} z {totalPages}
        </Typography>
        <IconButton
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border border-gray-300 rounded-md"
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="p-2 border border-gray-300 rounded-md"
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <span>Liczba elementów na stronie:</span>
        <TextField
          type="number"
          value={pageSize}
          min="1"
          onChange={handlePageSizeChange}
          className="w-16 border border-gray-300 rounded-md"
        />
      </Stack>
    </div>
  );
}

export default Pagination;
