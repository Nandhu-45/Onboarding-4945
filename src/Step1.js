// import React, { useState } from 'react';

// const Step1 = ({ onNext }) => {
//   const [documents, setDocuments] = useState(null);

//   const handleNext = () => {
//     onNext({ documents });
//   };

//   return (
//     <div>
//       <h2>Step 1: Upload Documents (Academic)</h2>
//       <input type="file" multiple onChange={(e) => setDocuments(e.target.files)} />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Step1;



import React, { useState } from 'react';

const Step1 = ({ onNext }) => {
  const [idCardNumber, setIdCardNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [documentLink, setDocumentLink] = useState(''); // New state for document link

  const handleNext = () => {
    onNext({ idCardNumber, department, documentLink }); // Pass the document link
  };

  return (
    <div>
      <h2>Step 1: Enter GoogleDrive Link</h2>
      <form>
        {/* <label>
          ID Card Number:
          <input type="text" value={idCardNumber} onChange={(e) => setIdCardNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Department:
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </label>
        <br /> */}
        <label>
          Document Drive Link:
          <input type="text" value={documentLink} onChange={(e) => setDocumentLink(e.target.value)} /> {/* New input */}
        </label>
        <br />
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step1;
