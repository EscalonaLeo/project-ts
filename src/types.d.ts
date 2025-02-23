import { FILTERS_ALL } from "./consts"

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'> 
export type TodoTitle = Pick<Todo, 'title'> 
export type TodoCompleted = Pick<Todo, 'completed'> 

export type ListOfTodos = Todo[]

export type FilterValue =  typeof FILTERS_ALL[keyof typeof FILTERS_ALL]

