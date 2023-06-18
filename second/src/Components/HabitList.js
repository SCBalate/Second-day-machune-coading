
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Button, Modal } from 'react-bootstrap';

const HabitList = ({ habits, onEditHabit, onDeleteHabit, onAddHabit, onArchieveHabit }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);

  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
  };

  const handleCloseModal = () => {
    setSelectedHabit(null);
  };

  const handleEditClick = (habit) => {
    onEditHabit(habit);
  };

  const handleDeleteClick = (habit) => {
    onDeleteHabit(habit);
  };

  const handleArchieveClick = (habit) => {
    onArchieveHabit(habit);
  };

  const handleAddHabit = () => {
   
    const newHabit = {
      id: Math.random().toString(),
      name: 'New Habit',
      goal: 'New Habit Goal',
      frequency: 'New Habit Frequency',
      startDate: 'New Habit Start Date',
      endDate: 'New Habit End Date',
    };
    onAddHabit(newHabit);
  };

  return (
    <div>
      <h2>Habit Listing Page</h2>
      <button onClick={handleAddHabit} className="btn btn-primary p-2 w-50 m-2">
        + Add Habit
      </button>
      {habits.map((habit) => (
        <div className="row" key={habit.id}>
          <div
            onClick={() => handleHabitClick(habit)}
            className="card p-3 col mx-5 w-50 bg-secondary  m-2"
          >
            <h3>{habit.name}</h3>
            <span>
              <button
                onClick={() => handleEditClick(habit)}
                className="btn btn-primary p-2 m-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleArchieveClick(habit)}
                className="btn btn-success p-2 m-2"
              >
                Archieve
              </button>
              <button
                onClick={() => handleDeleteClick(habit)}
                className="btn btn-danger p-2 m-2"
              >
                Delete
              </button>
            </span>
          </div>
        </div>
      ))}

      {selectedHabit && (
        <Modal show={!!selectedHabit} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">{selectedHabit?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Goal: {selectedHabit?.goal}</p>
            <p>Frequency: {selectedHabit?.frequency}</p>
            <p>Start Date: {selectedHabit?.startDate}</p>
            <p>End Date: {selectedHabit?.endDate}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default HabitList;
