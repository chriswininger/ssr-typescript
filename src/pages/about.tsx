import React from 'react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
      <>
        <Helmet>
          <title>Rect SSR With Typescript -- About</title>
        </Helmet>

        <main>
          <div>
            This page demonstrates the use of Rect Server Side Rendering (SSR) within the context of a react application
            written in typescript.

            The goal is to keep all title and metadata logic within the react application while delivering it dynamically
            from the initial server side render pass.
          </div>
        </main>
      </>
  );
}
