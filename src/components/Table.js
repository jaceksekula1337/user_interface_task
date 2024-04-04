import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Tables({ tags }) {
  return (
    <div className="overflow-x-auto rounded bg-gray-300 border border-gray-600 shadow-xl">
      <TableContainer>
        <Table className="table-fixed">
          <TableHead>
            <TableRow className="bg-gray-400">
              <TableCell className="text-left font-bold hover:bg-gray-200">
                Nazwa
              </TableCell>
              <TableCell className="text-left font-bold hover:bg-gray-200">
                Liczba pytań
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tags.map((tag) => (
              <TableRow key={tag.name}>
                <TableCell className="text-left hover:bg-gray-200">
                  {tag.name}
                </TableCell>
                <TableCell className="text-left hover:bg-gray-200">
                  {tag.count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tables;
