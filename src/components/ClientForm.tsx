import { useState } from "react";
import { Client } from "../types";
import { Input, Button } from "@/components/ui";
import { FaPlus } from "react-icons/fa";

type Props = {
  onSubmit: (client: Client) => void;
  onCancel: () => void;
  client?: Client;
};

const ClientForm = ({ onSubmit, onCancel, client }: Props) => {
  const [name, setName] = useState(client?.name || "");
  const [email, setEmail] = useState(client?.email || "");
  const [phone, setPhone] = useState(client?.phone || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ id: client?.id, name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <Input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className='mb-4'>
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className='mb-4'>
        <Input
          type='phone'
          placeholder='Phone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className='flex justify-end'>
        <Button type='button' onClick={onCancel} className='mr-2'>
          Cancel
        </Button>
        <Button type='submit' className='bg-green-500 hover:bg-green-600'>
          <FaPlus className='w-5 h-5 mr-2' />
          {client ? "Save" : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default ClientForm;
