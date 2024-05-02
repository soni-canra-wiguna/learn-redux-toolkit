import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "./features/todolist/todo-slice"
import CounterReducer from "./features/counter/counter-slice"
import ModalReducer from "./features/modal/modal-slice"
import UserProfileReducer from "./features/user-profile/user-profile-slice"

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
    counter: CounterReducer,
    modal: ModalReducer,
    profile: UserProfileReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
