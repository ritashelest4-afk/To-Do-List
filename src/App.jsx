import './App.css'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='App'>
      <div className='header'>
      <h1>Список планов на день!</h1>
      </div>
    <div className="container">
     <ToDoList/>
     </div>
    </div>
  )

  }
export default App
