import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <Stack alignItems="center" className="mt-5" spacing={2}>
      <Typography variant="body1" className="text-white">
        Strona {currentPage} z {totalPages}
      </Typography>
      <div>
        <IconButton
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          sx={{ color: "white" }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          sx={{ color: "white" }}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </Stack>
  );
}

export default Pagination;
