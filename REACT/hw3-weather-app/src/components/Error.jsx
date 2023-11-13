import React from "react";

const Error = ({ msg }) => {
  return (
    <div className="error-container">
      <h2>Oops! Something went wrong.</h2>
      <p>We're sorry, but there was an error while fetching the data.</p>
      <p>Please try again later or contact support if the issue persists.</p>
      <p>{msg}</p>
      <img
        src="/src/assets/error.png" // Replace with your own error image URL
        alt="Error Illustration"
        className="error-image"
      />
    </div>
  );
};

export default Error;
