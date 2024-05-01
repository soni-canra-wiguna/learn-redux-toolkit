"use client"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import { Input } from "@/components/ui/input"
import { AppDispatch } from "@/redux/store"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { TodoType } from "@/types/todo-type"
import { addTodo, removeTodo } from "@/redux/features/todolist/todo-slice"
import { generateId } from "@/utils/generate-id"
import { X } from "lucide-react"

const TodoList = () => {
  const [id, setId] = useState(generateId())
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const dispatch: AppDispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id,
        title,
        description,
      })
    )

    setId(generateId())
    setTitle("")
    setDescription("")
  }

  return (
    <MaxWidthWrapper className="flex items-center flex-col my-20 max-w-3xl">
      <h1 className="mb-10">To-Do List</h1>
      <div className="flex flex-col gap-3 w-full mb-20">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="px-3 py-1 bg-white text-black active:scale-95 transition-all rounded-md disabled:opacity-75 disabled:cursor-not-allowed"
          onClick={handleAddTodo}
          type="submit"
          disabled={title == "" || description == ""}
        >
          Add Todo
        </button>
      </div>
      <div className="grid grid-row-1 gap-y-5 w-full">
        {todos.map((todo: TodoType) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default TodoList

const TodoItem = ({ todo }: { todo: TodoType }) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeTodo(todo.id))
  }

  return (
    <div className="p-4 rounded-md border flex flex-col items-start relative">
      <h3 className="text-2xl font-medium mb-4">{todo.title}</h3>
      <p className="text-left text-gray-400">id: {todo.id}</p>
      <p className="text-left text-gray-400 mb-6">{todo.description}</p>
      <button
        className="absolute top-3 right-3 rounded-full size-8 bg-white/50 hover:bg-white/70 flex items-center justify-center"
        onClick={handleRemove}
      >
        <X className="size-4 text-black stroke-2" />
      </button>
    </div>
  )
}
