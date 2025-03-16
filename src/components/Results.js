const Results = ({ predictions }) => {
    return (
      <div className="results">
        <h2>Your Daily Routine</h2>
        <p><strong>Wake Up Time:</strong> {predictions['Wake_Up_Time']}</p>
        <p><strong>Breakfast:</strong> {predictions['Meal_Breakfast']}</p>
        <p><strong>Lunch:</strong> {predictions['Meal_Lunch']}</p>
        <p><strong>Dinner:</strong> {predictions['Meal_Dinner']}</p>
        <p><strong>Morning Snack:</strong> {predictions['Snack_Morning']}</p>
        <p><strong>Afternoon Snack:</strong> {predictions['Snack_Afternoon']}</p>
        <p><strong>Water Intake:</strong> {predictions['Water_Intake']} liters</p>
        <p><strong>Exercise:</strong> {predictions['Exercise_Type']}</p>
        <p><strong>Yoga:</strong> {predictions['Yoga_Types']}</p>
        <p><strong>Meditation:</strong> {predictions['Meditation_Types']}</p>
        <p><strong>Sleep Time:</strong> {predictions['Sleep_Time']}</p>
        <p><strong>Precautions:</strong> {predictions['Precautions']}</p>
      </div>
    );
  };
  
  export default Results;