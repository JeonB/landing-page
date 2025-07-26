import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
export default function DataDownload() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>DataDownload</h1>
      <Table className="w-[900px] max-w-4xl">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john.doe@example.com</TableCell>
            <TableCell>123-456-7890</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>jane.doe@example.com</TableCell>
            <TableCell>123-456-7890</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
