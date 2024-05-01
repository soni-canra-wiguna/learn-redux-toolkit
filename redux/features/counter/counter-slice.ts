import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ValueProps {
  value: number
}

const initialState: ValueProps = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incerment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incermentByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

export const { incerment, decrement, incermentByAmount, decrementByAmount } =
  counterSlice.actions
export default counterSlice.reducer
