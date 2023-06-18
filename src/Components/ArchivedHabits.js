import React from 'react';

const ArchivedHabits = ({ habits }) => {
  return (
    <div>
      <h2>Archived Habits</h2>
      {habits.map((habit) => (
        <div key={habit.id}>
          <h3>{habit.name}</h3>
          <p>{habit.goal}</p>
        </div>
      ))}
    </div>
  );
};

export default ArchivedHabits;
