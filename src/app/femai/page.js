'use client';

import { useState } from 'react';
import HealthForm from '@/components/HealthForm';
import Results from '@/components/Results';

export default function Home() {
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setPredictions(data.predictions);
        setError(null);
      } else {
        setError(data.error || 'An error occurred while generating the routine.');
        setPredictions(null);
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
      setPredictions(null);
    }
  };

  return (
    // <div className="container">
    //   <h1>Women&apos;s Health Routine Generator</h1>
    //   <HealthForm onSubmit={handleFormSubmit} />
    //   {predictions && <Results predictions={predictions} />}
    //   {error && <div className="error"><p>{error}</p></div>}
    // </div>
    <div className="max-w-4xl mx-auto p-5">
  <h1 className="text-center text-3xl text-gray-800 mb-8">
    Women&apos;s Health Routine Generator
  </h1>
  <HealthForm onSubmit={handleFormSubmit} />
  {predictions && <Results predictions={predictions} />}
  {error && (
    <div className="bg-red-100 p-4 rounded-lg mt-5 text-red-600 text-center">
      <p>{error}</p>
    </div>
  )}
</div>
  );
}