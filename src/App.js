import React, { useState } from 'react';

function App() {
  const [clients, setClients] = useState([
    { id: 'alice', name: 'Alice', birthDate: '2001-01-01' },
    { id: 'bob', name: 'Bob', birthDate: '2002-02-02' },
    { id: 'jake', name: 'Jake', birthDate: '2003-02-23' },
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);

  const handleSave = () => {
    const saveData = clients.map((client) => {
      const date = new Date(client.birthDate);

      return {
        id: client.id,
        name: client.name,
        birthYear: date.getFullYear(),
        birthMonth: date.getMonth() + 1,
        birthDay: date.getDate(),
      };
    });

    console.log(JSON.stringify(saveData, null, 2));
  };

  const handleDeleteClick = (client) => {
    setClientToDelete(client);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    const updatedClients = clients.filter(
      (client) => client.id !== clientToDelete.id
    );
    setClients(updatedClients);
    setShowConfirmation(false);
    setClientToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setClientToDelete(null);
  };

  return (
    <>
      <div
        style={{
          pointerEvents: showConfirmation ? 'none' : 'auto',
          opacity: showConfirmation ? 0.5 : 1,
          userSelect: showConfirmation ? 'none' : 'auto',
        }}
      >
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
                <button onClick={() => handleDeleteClick(client)}>
                  Delete
                </button>
              </li>

              <li>
                <button disabled>Add Client</button>
              </li>
            </React.Fragment>
          ))}
        </ul>

        <button onClick={handleSave}>Save Clients</button>
      </div>
      {showConfirmation && (
        <div>
          <p>
            Удалить клиента {clientToDelete.name}?
          </p>
          <button onClick={handleConfirmDelete}>Удалить</button>
          <button onClick={handleCancelDelete}>Отмена</button>
        </div>
      )}
    </>
  );
}

export default App;
