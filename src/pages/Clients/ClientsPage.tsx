import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ClientsList from "../../components/ClientsList";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ClientsPage: React.FC = () => {
  const [result, setResult] = useState(null);
  const sql = "SELECT * FROM clients";

  useEffect(() => {
    async function getData() {
      const getData = await window.myApi.ClientRepository.listAll();
      console.log("client sql", getData);
      setResult(getData);
    }
    getData();
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold text-'>My Client list</h1>
        <Link to='/clients/add'>
          <Button>
            <AiOutlinePlusCircle className='text-3xl pr-2' />
            Add Client
          </Button>
        </Link>
      </div>
      <ClientsList clients={result} />
    </div>
  );
};

export { ClientsPage };
