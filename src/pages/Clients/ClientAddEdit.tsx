import React, { useState } from "react";
import ClientForm from "../../components/ClientForm";
import { useNavigate } from "react-router-dom";

const ClientAddEdit: React.FC = (clientid: number) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = async (_customer: any) => {
    const user = {
      name: _customer.name,
      email: _customer.email,
    };
    const result = await window.myApi.ClientRepository.insertClient(user);

    console.log(result);

    navigate("/clients");
  };

  const handleCancel = () => {
    navigate("/clients");
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Add Client</h1>
      <div className='w-full max-w-md'>
        <ClientForm
          client={formData}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export { ClientAddEdit };
