import React, { useState } from 'react';

const Step4 = ({ onNext, onBack }) => {
  const [idCardNumber, setIdCardNumber] = useState('');
  const [department, setDepartment] = useState('');

  const handleNext = () => {
    onNext({ idCardNumber, department });
  };

  return (
    <div>
      <h2>Step 4: Create ID Card</h2>
      <form>
        <label>
          ID Card Number:
          <input type="text" value={idCardNumber} onChange={(e) => setIdCardNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Department:
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={onBack}>Back</button>
        <button type="button" onClick={handleNext}>Complete</button>
      </form>
    </div>
  );
};

export default Step4;
