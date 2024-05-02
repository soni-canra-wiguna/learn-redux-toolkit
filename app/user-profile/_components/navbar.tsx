"use client"

import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

const NavbarUserProfile = () => {
  return (
    <div className="w-full h-20 bg-gray-700 border-b border-white/30 flex items-center justify-center">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div>logo</div>
        <Profile />
      </div>
    </div>
  )
}

export default NavbarUserProfile

const Profile = () => {
  const profile = useSelector((state: RootState) => state.profile.user_profile)
  return (
    <div className="flex items-center gap-6 text-sm">
      <p className="text-yellow-500">{profile.username}</p>
      <p className="text-green-500">{profile.email}</p>
    </div>
  )
}
