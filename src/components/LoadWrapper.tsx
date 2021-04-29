import React, { PropsWithChildren } from 'react';

export default function LoadWrapper({isLoading, children}: PropsWithChildren<{ isLoading: boolean}>) {
  if (isLoading) {
    return <div className="ssr-load-wrapper__loading">Loading...</div>
  }
  else {
    return <>{children}</>;
  }
}
