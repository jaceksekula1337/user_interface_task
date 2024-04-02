import React from "react";

function Table({ tags }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Liczba pytań</th>
        </tr>
      </thead>
      <tbody>
        {tags.map((tag) => (
          <tr key={tag.name}>
            <td>{tag.name}</td>
            <td>{tag.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
