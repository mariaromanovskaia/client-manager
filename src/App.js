import React from 'react';

function App() {
  const clients = [
    { id: 'alice', name: 'Alice', birthDate: '2001-01-01' },
    { id: 'bob', name: 'Bob', birthDate: '2002-02-02' }
  ];

  return (
    <div>
      <h1>Clients Manager</h1>
      <ul>
        {/* Кнопка добавления перед первым клиентом */}
        <li><button disabled>Add Client</button></li>
        
        {/* Первый клиент */}
        <li>
          ID: {clients[0].id} 
          Name: {clients[0].name} 
          Birth Date: {clients[0].birthDate}
          <button disabled>Delete</button>
        </li>
        
        {/* Кнопка добавления между клиентами */}
        <li><button disabled>Add Client</button></li>
        
        {/* Второй клиент */}
        <li>
          ID: {clients[1].id} 
          Name: {clients[1].name} 
          Birth Date: {clients[1].birthDate}
          <button disabled>Delete</button>
        </li>
        
        {/* Кнопка добавления после последнего клиента */}
        <li><button disabled>Add Client</button></li>
      </ul>
      
      {/* Кнопка сохранения списка */}
      <button disabled>Save Clients</button>
    </div>
  );
}

export default App;