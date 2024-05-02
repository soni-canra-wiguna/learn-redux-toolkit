"use client"

import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

const Welcome = () => {
  const username = useSelector(
    (state: RootState) => state.profile.user_profile.username
  )

  const name = <p className="ml-2 text-yellow-500 capitalize">{username}</p>
  return (
    <div className="p-4 text-xl rounded-md bg-green-500/20 border-2 border-dashed border-green-500/40 flex items-center">
      Welcome back {name} 👋
    </div>
  )
}

export default Welcome
