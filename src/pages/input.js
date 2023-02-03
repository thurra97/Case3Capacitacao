import React, { useState } from 'react';
import axios from 'axios';

const InputCPF = () => {
  const [cpf, setCpf] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/cpf', { cpf });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escreva seu CPF"
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        style={{
          fontWeight: "bold",
          fontSize: "medium",
          width: "15%",
          textAlign: "right",
          marginLeft: "85rem"
        }}
        pattern="[0-9]*"
        title="Only numbers are allowed"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputCPF;
