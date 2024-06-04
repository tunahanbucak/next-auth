'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <h1>welcome back</h1>
        </>
      ) : (
        <>
          <h1 className="text-3xl text-red-500 font-bold">
            You are not logged in
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => signIn('google')}
              className="border border-black rounded-lg p-4">
              sign in with google
            </button>
            <button
              onClick={() => signIn('github')}
              className="border border-black rounded-lg bg-green-500 p-4">
              sign in with github
            </button>
          </div>
        </>
      )}
    </>
  );
}
