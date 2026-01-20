import React from 'react';

function App() {
  const clients = [
    { id: 'alice', name: 'Alice', birthDate: '2001-01-01' },
    { id: 'bob', name: 'Bob', birthDate: '2002-02-02' },
  ];

  return (
    <div>
      <h1>Clients Manager</h1>
      <ul>
        <li>
          <button disabled>Add Client</button>
        </li>

        {clients.map((client) => (
          <React.Fragment key={client.id}>
            <li>
              ID: {client.id}
              Name: {client.name}
              Birth Date: {client.birthDate}
              <button disabled>Delete</button>
            </li>

            <li>
              <button disabled>Add Client</button>
            </li>
          </React.Fragment>
        ))}

      </ul>

      <button disabled>Save Clients</button>
    </div>
  );
}

export default App;
