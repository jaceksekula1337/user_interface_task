import React, { useState } from "react";

function Filters() {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
}

export default Filters;
