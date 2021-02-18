import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Food1',
        day: 'Feb 1th at 2:00am',
        reminder: false,
    },
    {
        id:2,
        text: 'Food2',
        day: 'Feb 2th at 2:00am',
        reminder: true,
    },
    {
        id:3,
        text: 'Food3',
        day: 'Feb 3th at 2:00am',
        reminder: false,
    },
])

//Add task
const addTask = (task) => {
 const id = Math.floor(Math.random() * 10000) +1
 console.log(id)

 const newTask = { id, ...task }
 setTasks([...tasks, newTask])
}

//Delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}
//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder}  : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
     { showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      ) : ('No Task To Show') }
    </div>
  );
}

export default App;
