import { useState } from 'react';

const HealthForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Age: '',
    BMI: '',
    Exercise_Level: '',
    Sleep_Hours: '',
    Stress_Level: '',
    Mental_Health_Priority: '',
    Smoking_Status: '0',
    Telehealth_Preference: '0',
    Vegetarian: '0',
    PCOD: '0',
    PCOS: '0',
    Heart_Disease: '0',
    Diabetes: '0',
    High_BP: '0',
    Low_BP: '0',
    Hypertension: '0',
    Migraine: '0',
    Thyroid: '0',
    Endometriosis: '0',
    Osteoporosis: '0',
    Anemia: '0',
    Depression: '0',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? '1' : '0') : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    // <form id="healthForm" onSubmit={handleSubmit}>
    //   <div className="form-section">
    //     <h2>Basic Information</h2>
    //     <div className="form-group">
    //       <label>Age:</label>
    //       <input
    //         type="number"
    //         name="Age"
    //         min="18"
    //         max="100"
    //         step="0.1"
    //         value={formData.Age}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>BMI:</label>
    //       <input
    //         type="number"
    //         name="BMI"
    //         min="10"
    //         max="50"
    //         step="0.1"
    //         value={formData.BMI}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>Exercise Level (0-10):</label>
    //       <input
    //         type="number"
    //         name="Exercise_Level"
    //         min="0"
    //         max="10"
    //         value={formData.Exercise_Level}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>Sleep Hours:</label>
    //       <input
    //         type="number"
    //         name="Sleep_Hours"
    //         min="0"
    //         max="24"
    //         step="0.1"
    //         value={formData.Sleep_Hours}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>Stress Level (0-10):</label>
    //       <input
    //         type="number"
    //         name="Stress_Level"
    //         min="0"
    //         max="10"
    //         value={formData.Stress_Level}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>Mental Health Priority (0-10):</label>
    //       <input
    //         type="number"
    //         name="Mental_Health_Priority"
    //         min="0"
    //         max="10"
    //         value={formData.Mental_Health_Priority}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //   </div>

    //   <div className="form-section">
    //     <h2>Lifestyle</h2>
    //     <div className="form-group">
    //       <label>Smoking Status:</label>
    //       <select name="Smoking_Status" value={formData.Smoking_Status} onChange={handleChange} required>
    //         <option value="0">No</option>
    //         <option value="1">Yes</option>
    //       </select>
    //     </div>
    //     <div className="form-group">
    //       <label>Telehealth Preference:</label>
    //       <select name="Telehealth_Preference" value={formData.Telehealth_Preference} onChange={handleChange} required>
    //         <option value="0">No</option>
    //         <option value="1">Yes</option>
    //       </select>
    //     </div>
    //     <div className="form-group">
    //       <label>Vegetarian:</label>
    //       <select name="Vegetarian" value={formData.Vegetarian} onChange={handleChange} required>
    //         <option value="0">No</option>
    //         <option value="1">Yes</option>
    //       </select>
    //     </div>
    //   </div>

    //   <div className="form-section">
    //     <h2>Health Conditions (Check if Yes)</h2>
    //     <div className="checkbox-group">
    //       {['PCOD', 'PCOS', 'Heart_Disease', 'Diabetes', 'High_BP', 'Low_BP', 'Hypertension', 'Migraine', 'Thyroid', 'Endometriosis', 'Osteoporosis', 'Anemia', 'Depression'].map((condition) => (
    //         <label key={condition}>
    //           <input
    //             type="checkbox"
    //             name={condition}
    //             value="1"
    //             checked={formData[condition] === '1'}
    //             onChange={handleChange}
    //           />{' '}
    //           {condition.replace('_', ' ')}
    //         </label>
    //       ))}
    //     </div>
    //   </div>

    //   <button type="submit">Generate Routine</button>
    // </form>
    <form id="healthForm" onSubmit={handleSubmit}>
  <div className="bg-white p-5 mb-5 rounded-lg shadow-sm">
    <h2 className="text-gray-700 mb-4">Basic Information</h2>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Age:</label>
      <input
        type="number"
        name="Age"
        min="18"
        max="100"
        step="0.1"
        value={formData.Age}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300 invalid:border-red-500 valid:border-green-500"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-bold">BMI:</label>
      <input
        type="number"
        name="BMI"
        min="10"
        max="50"
        step="0.1"
        value={formData.BMI}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300 invalid:border-red-500 valid:border-green-500"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Exercise Level (0-10):</label>
      <input
        type="number"
        name="Exercise_Level"
        min="0"
        max="10"
        value={formData.Exercise_Level}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300 invalid:border-red-500 valid:border-green-500"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Sleep Hours:</label>
      <input
        type="number"
        name="Sleep_Hours"
        min="0"
        max="24"
        step="0.1"
        value={formData.Sleep_Hours}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300 invalid:border-red-500 valid:border-green-500"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Stress Level (0-10):</label>
      <input
        type="number"
        name="Stress_Level"
        min="0"
        max="10"
        value={formData.Stress_Level}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300 invalid:border-red-500 valid:border-green-500"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Mental Health Priority (0-10):</label>
      <input
        type="number"
        name="Mental_Health_Priority"
        min="0"
        max="10"
        value={formData.Mental_Health_Priority}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300 invalid:border-red-500 valid:border-green-500"
      />
    </div>
  </div>

  <div className="bg-white p-5 mb-5 rounded-lg shadow-sm">
    <h2 className="text-gray-700 mb-4">Lifestyle</h2>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Smoking Status:</label>
      <select
        name="Smoking_Status"
        value={formData.Smoking_Status}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300"
      >
        <option value="0">No</option>
        <option value="1">Yes</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Telehealth Preference:</label>
      <select
        name="Telehealth_Preference"
        value={formData.Telehealth_Preference}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300"
      >
        <option value="0">No</option>
        <option value="1">Yes</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block mb-1 font-bold">Vegetarian:</label>
      <select
        name="Vegetarian"
        value={formData.Vegetarian}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded transition-colors duration-300"
      >
        <option value="0">No</option>
        <option value="1">Yes</option>
      </select>
    </div>
  </div>

  <div className="bg-white p-5 mb-5 rounded-lg shadow-sm">
    <h2 className="text-gray-700 mb-4">Health Conditions (Check if Yes)</h2>
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
      {[
        'PCOD',
        'PCOS',
        'Heart_Disease',
        'Diabetes',
        'High_BP',
        'Low_BP',
        'Hypertension',
        'Migraine',
        'Thyroid',
        'Endometriosis',
        'Osteoporosis',
        'Anemia',
        'Depression',
      ].map((condition) => (
        <label key={condition} className="flex items-center">
          <input
            type="checkbox"
            name={condition}
            value="1"
            checked={formData[condition] === '1'}
            onChange={handleChange}
            className="mr-2"
          />
          {condition.replace('_', ' ')}
        </label>
      ))}
    </div>
  </div>

  <button
    type="submit"
    className="bg-blue-500 text-white p-3 rounded cursor-pointer w-full text-base transition-colors duration-300 hover:bg-blue-600"
  >
    Generate Routine
  </button>
</form>
  );
};

export default HealthForm;