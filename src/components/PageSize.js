import React from "react";
import { TextField, Stack } from "@mui/material";

function PageSizeSelector({
  pageSize,
  setPageSize,
  minPageSize = 5,
  maxPageSize = 12,
}) {
  const handlePageSizeChange = (e) => {
    const newPageSize = Number(e.target.value);
    const clampedPageSize = Math.min(
      Math.max(newPageSize, minPageSize),
      maxPageSize
    );

    setPageSize(clampedPageSize);
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      className="flex justify-center items-center"
    >
      <span className="text-center text-white">Liczba elementów:</span>
      <TextField
        type="number"
        value={pageSize}
        onChange={handlePageSizeChange}
        className="sm:w-36 w-16 bg-gray-200"
      />
    </Stack>
  );
}

export default PageSizeSelector;
