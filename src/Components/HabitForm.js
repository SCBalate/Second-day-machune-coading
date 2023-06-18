import React, { useState } from 'react';

const AddHabitForm = ({ onAddHabit }) => {
  const [habit, setHabit] = useState({
    name: '',
    goal: '',
    frequency: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabit((prevHabit) => ({
      ...prevHabit,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHabit(habit);
    setHabit({
      name: '',
      goal: '',
      frequency: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Habit</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={habit.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Goal:</label>
        <input type="text" name="goal" value={habit.goal} onChange={handleChange} required />
      </div>
      <div>
        <label>Frequency:</label>
        <input
          type="text"
          name="frequency"
          value={habit.frequency}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="text"
          name="startDate"
          value={habit.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input type="text" name="endDate" value={habit.endDate} onChange={handleChange} required />
      </div>
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabitForm;
