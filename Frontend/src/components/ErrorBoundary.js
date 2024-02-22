import React, { useState, useEffect } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);

    // Clean-up function to remove the event listener
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return props.children;
}

export default ErrorBoundary;