import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Client {
  name: string;
  email: string;
  projects: number;
}

interface Props {
  clients: Client[];
}

const ClientsList: React.FC<Props> = ({ clients }) => {
  if (clients == null) return <div>Loading...</div>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Projects</TableHead>
          <TableHead className='text-right'> </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client, index) => (
          <TableRow key={index}>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.projects}</TableCell>
            <TableCell className='text-right'>
              <Link to='/clients/add' clientid={client.id}>
                <FaEdit />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientsList;
