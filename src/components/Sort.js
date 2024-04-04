import { Select, FormControl, MenuItem } from "@mui/material";

function Sort({ sortBy, setSortBy }) {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <FormControl variant="outlined">
        <span className="text-center text-white">Sortuj według:</span>
        <Select
          value={sortBy}
          onChange={handleSortChange}
          className="sm:w-36 w-16 mt-4 bg-gray-200"
        >
          <MenuItem value="name" className="bg-gray-200">
            Nazwa
          </MenuItem>
          <MenuItem value="popular" className="bg-gray-200">
            Popularność
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sort;
