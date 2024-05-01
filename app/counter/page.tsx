"use client"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import {
  decrement,
  decrementByAmount,
  incerment,
  incermentByAmount,
} from "@/redux/features/counter/counter-slice"
import { RootState } from "@/redux/store"
import React from "react"
import { useSelector, useDispatch } from "react-redux"

const CounterPage = () => {
  const countValue = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const disableButton = countValue === 0

  return (
    <MaxWidthWrapper className="flex items-center justify-center gap-4">
      <div className="flex gap-2 items-center">
        <button
          disabled={disableButton}
          className="p-4 bg-white text-black"
          onClick={() => dispatch(decrement())}
        >
          decrement -1
        </button>
        <button
          disabled={disableButton}
          className="p-4 bg-white text-black"
          onClick={() => dispatch(decrementByAmount(3))}
        >
          decrement -3
        </button>
      </div>
      <div className="mx-4 font-bold text-xl text-white">{countValue}</div>
      <div className="flex gap-2 items-center">
        <button
          className="p-4 bg-white text-black"
          onClick={() => dispatch(incerment())}
        >
          incerment +1
        </button>
        <button
          className="p-4 bg-white text-black"
          onClick={() => dispatch(incermentByAmount(3))}
        >
          incerment +3
        </button>
      </div>
    </MaxWidthWrapper>
  )
}

export default CounterPage
