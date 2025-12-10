import React from 'react';

const Error = ({ error }) => {
  if (!error) return null; // No mostrar nada si no hay error

  return (
    <div className="alert alert-danger text-center my-3" role="alert">
      {error}
    </div>
  );
};

export default Error;
