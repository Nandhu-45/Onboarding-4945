import React, { useState } from 'react';

const Step2 = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    onNext({ name, email, phone });
  };

  return (
    <div>
      <h2>Step 2: Enter Personal Details</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={onBack}>Back</button>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step2;
