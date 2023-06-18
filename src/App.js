import './App.css';
import HabitList from './Components/HabitList';
import { useState } from 'react';
import AddHabitForm from './Components/HabitForm';
import ArchivedHabits from './Components/ArchivedHabits';


function App() {

  const [habits, setHabits] = useState([
    {
      "id": 1,
      "name": "Exercise",
      "goal": "Stay fit and healthy",
      "frequency": "3 times per week",
      "startDate": "2023-06-01",
      "endDate": "2023-06-30"
    },
    {
      "id": 2,
      "name": "Read",
      "goal": "Expand knowledge",
      "frequency": "Every day",
      "startDate": "2023-06-01",
      "endDate": "2023-06-30"
    },
    {
      "id": 3,
      "name": "Meditate",
      "goal": "Relieve stress",
      "frequency": "Once per day",
      "startDate": "2023-06-01",
      "endDate": "2023-06-30"
    }
  ])
  const [archivedHabits, setArchivedHabits] = useState([]);


  const handleArchiveHabit = (habit) => {
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.map((h) => {
        if (h.id === habit.id) {
          return { ...h, archived: true };
        }
        return h;
      });
      const archived = updatedHabits.filter((h) => h.archived);
      setArchivedHabits(archived);
      return updatedHabits;
    });
  };


  const handleEditHabit = (updatedHabit) => {
    setHabits((prevHabits) => {
      return prevHabits.map((habit) => {
        if (habit.id === updatedHabit.id) {
          return {
            ...habit,
            name: updatedHabit.name,
            goal: updatedHabit.goal,
            frequency: updatedHabit.frequency,
            startDate: updatedHabit.startDate,
            endDate: updatedHabit.endDate,
          };
        }
        return habit;
      });
    });
  };

  const handleDeleteHabit = (habit) => {
    setHabits((prevHabits) => {
      return prevHabits.filter((h) => h.id !== habit.id);
    });
  };

  const handleAddHabit = (newHabit) => {
    debugger
    const habitWithId = {
      ...newHabit,
      id: Math.random().toString(), 
      name:`${newHabit?.name}`
    };
    setHabits((prevHabits) => [...prevHabits, habitWithId]);
  };

  return (
    <div className="App">
     <HabitList habits={habits} onEditHabit={handleEditHabit} onDeleteHabit={handleDeleteHabit} onArchieveHabit={handleArchiveHabit}/>
     <AddHabitForm onAddHabit={handleAddHabit}/>
       <ArchivedHabits onArchievehabits={archivedHabits} />
    </div>
  )
  //   return (
     
  //     <div className="App">
  //        <Router>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/">Habit List</Link>
  //           </li>
  //           <li>
  //             <Link to="/add">Add Habit</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //       <Routes>
  //         <Route path="/" element={<HabitList habits={habits} onEditHabit={handleEditHabit} onDeleteHabit={handleDeleteHabit} />} />
  //         <Route path="/add" element={<AddHabitForm onAddHabit={handleAddHabit} />} />
  //       </Routes>
  //       </Router>
  //     </div>
   
  // );
}

export default App;
