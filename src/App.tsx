import { useState } from "react"
import { Todos } from "./components/Todos";
import { type FilterValue, type TodoId, type Todo as TodoType } from "./types";
import { FILTERS_ALL } from "./consts";
import { Footer } from "./components/Footer";


const auxAll = [
  {
    id: '1',
    title: 'Tender cama',
    completed: true
  },
  {
    id: '2',
    title: 'section 2',
    completed: false
  },
  {
    id: '3',
    title: 'section 3',
    completed: false
  },
  {
    id: '4',
    title: 'section 4',
    completed: false
  }
]
const App = ():JSX.Element => {
  const [all,setTodos] = useState(auxAll)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(FILTERS_ALL.ALL)

  const inRemove = ({ id }: TodoId): void => {
    const newTodos = all.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const inCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = all.map(todo => {
      if(todo.id == id){
        return{
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter:  FilterValue):void => {
    console.log(filter)
    setFilterSelected(filter)
  }

  const test = () =>  {
    console.log('Prueba')
  }

  const activeCount = all.filter(call => !call.completed).length
  const completedCount = all.length - activeCount

  const filteredTodos = all.filter(call => {
    if (filterSelected == FILTERS_ALL.ACTIVE) return !call.completed
    if (filterSelected == FILTERS_ALL.COMPLETED) return call.completed
    return call
  })
  

  return (
    <div className="todoapp"> 
      <Todos 
        onToggleCompleteTodo={inCompleted}
        onRemoveTodo={inRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
