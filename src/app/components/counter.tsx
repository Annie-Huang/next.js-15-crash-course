'use client';

import { useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';

export const Counter = () => {
  // Both useAuth and useUser would work.
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  console.log('Counter component');
  const [count, setCount] = useState(0);

  // if (!isLoaded || !userId) {
  //   return null;
  // }

  if (!isLoaded || !isSignedIn) {
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
