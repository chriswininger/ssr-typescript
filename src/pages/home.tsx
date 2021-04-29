import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rect SSR With Typescript -- Home</title>
      </Helmet>

      <main>
        <div>
          Welcome to SSR
        </div>
      </main>
    </>
  );
}
