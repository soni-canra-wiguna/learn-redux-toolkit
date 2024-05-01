import { TodoType } from "@/types/todo-type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialStateProps {
  todos: TodoType[]
}

const initialState: InitialStateProps = {
  todos: [
    {
      id: "dfdf",
      title: "task error 205",
      description:
        "error tingkat medium yang harus di fix minimal 4 hari setelah error muncul",
    },
    {
      id: "dfg54df543",
      title: "task error 40",
      description:
        "error tingkat medium yang harus di fix minimal 9 hari setelah error muncul",
    },
  ],
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoType>) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
