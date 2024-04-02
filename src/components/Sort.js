import { Select, FormControl, InputLabel } from "@mui/material";

function Sort({ sortBy, setSortBy }) {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="mb-4 p-10">
      <FormControl variant="outlined" className="w-full">
        <InputLabel htmlFor="sort-select">Sortuj według</InputLabel>
        <Select
          value={sortBy}
          onChange={handleSortChange}
          label="Sortuj według"
          id="sort-select"
        >
          <option value="name">Nazwa</option>
          <option value="popular">Popularność</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sort;
