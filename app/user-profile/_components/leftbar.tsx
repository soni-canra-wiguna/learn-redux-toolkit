"use client"

import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

const Leftbar = () => {
  const profile = useSelector((state: RootState) => state.profile.user_profile)

  const name = <p className="text-yellow-500">{profile.username}</p>
  const email = <p className="text-green-500">{profile.email}</p>

  return (
    <div className="col-span-3 w-full h-full flex flex-col p-4">
      hello my name is {name}
      <br /> if you interest to hire me, you can email me {email}
    </div>
  )
}

export default Leftbar
