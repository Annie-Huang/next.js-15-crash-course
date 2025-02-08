import { resolve } from 'path';
import React from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UsersServer = async () => {
  // Test loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Test error.tsx
  // const response = await fetch('https://jsonplaceholder.typicode.com/users123');

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return (
    <ul className='space-y-4 p-4'>
      {users.map((user: User) => (
        <li
          key={user.id}
          className='p-4 bg-white shadow-md rounded-lg text-gray-700'
        >
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UsersServer;
