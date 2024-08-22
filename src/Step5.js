import React, { useEffect } from 'react';
import './Step5.css'; // Optional: For styling the Step6 component

const Step5 = ({ onClose }) => {
  useEffect(() => {
    // Automatically close the message after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    // Cleanup timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="step6-container">
      <h1>Your Onboarding has been completed successfully</h1>
      <p>Welcome to the team!</p>
    </div>
  );
};

export default Step5;
