"use client"

import { Input } from "@/components/ui/input"
import { updateProfile } from "@/redux/features/user-profile/user-profile-slice"
import { RootState } from "@/redux/store"
import { FormEvent, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const UpdateProfile = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  const profile = useSelector((state: RootState) => state.profile.user_profile)

  const isUsername = !username ? profile.username : username
  const isEmail = !email ? profile.email : email

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      updateProfile({
        username: isUsername,
        email: isEmail,
      })
    )

    setUsername("")
    setEmail("")
  }

  return (
    <div className="my-10 flex flex-col gap-5 w-full">
      <h2 className="text-2xl font-medium text-center">change profile</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4 mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label>username</label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 rounded-md bg-white text-black mt-4"
        >
          change profile
        </button>
      </form>
    </div>
  )
}

export default UpdateProfile
