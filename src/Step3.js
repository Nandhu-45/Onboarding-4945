import React, { useState } from 'react';

const Step3 = ({ onNext, onBack }) => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleNext = () => {
    onNext({ bankName, accountNumber });
  };

  return (
    <div>
      <h2>Step 3: Create Salary Account</h2>
      <form>
        <label>
          Bank Name:
          <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} />
        </label>
        <br />
        <label>
          Account Number:
          <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={onBack}>Back</button>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step3;
