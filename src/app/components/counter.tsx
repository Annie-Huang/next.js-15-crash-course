'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';

export const Counter = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  console.log('Counter component');
  const [count, setCount] = useState(0);

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ background: 'lightgrey' }}
    >
      Click {count} times
    </button>
  );
};
