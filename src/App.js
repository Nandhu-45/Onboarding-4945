import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bankName: '',
    accountNumber: '',
    idCardNumber: '',
    department: ''
  });

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    if (step < 4) {
      setStep(step + 1);
    } else {
      submitData({ ...formData, ...data });
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const submitData = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert('Your onboarding has been completed successfully');
        setStep(5);
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      // Store data in localStorage when the server is offline
      localStorage.setItem('EmployeeInfo', JSON.stringify([data]));
      alert('Server offline. Data saved locally.');
      setStep(5);
    }
  };

  const sendOfflineData = async () => {
    const offlineData = localStorage.getItem('EmployeeInfo');
    if (offlineData) {
      try {
        const parsedData = JSON.parse(offlineData);
        const response = await fetch('http://localhost:3001/submit-offline-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: parsedData })
        });
        if (response.ok) {
          localStorage.removeItem('EmployeeInfo');
          console.log('Offline data sent successfully');
        } else {
          console.error('Failed to send offline data');
        }
      } catch (error) {
        console.error('Error sending offline data:', error);
      }
    }
  };

  useEffect(() => {
    sendOfflineData();
  }, []);

  return (
    <div className="app">
      <h1>Onboarding Process</h1>
      {step === 1 && <Step1 onNext={handleNextStep} />}
      {step === 2 && <Step2 onNext={handleNextStep} onBack={handlePreviousStep} />}
      {step === 3 && <Step3 onNext={handleNextStep} onBack={handlePreviousStep} />}
      {step === 4 && <Step4 onNext={handleNextStep} onBack={handlePreviousStep} />}
      {step === 5 && <Step5 onClose={() => setStep(1)} />}
    </div>
  );
};

export default App;