import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Tables({ tags }) {
  return (
    <TableContainer className="shadow overflow-x-auto rounded">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="text-left font-bold">Nazwa</TableCell>
            <TableCell className="text-left font-bold">Liczba pytań</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag) => (
            <TableRow key={tag.name}>
              <TableCell className="text-left">{tag.name}</TableCell>
              <TableCell className="text-left">{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables;
