"use client"

import { RootState } from "@/redux/store"
import { SidebarIcon } from "lucide-react"
import React from "react"
import { useSelector } from "react-redux"

const Sidebar = () => {
  const profile = useSelector((state: RootState) => state.profile.user_profile)

  return (
    <div className="col-span-3 w-full h-full p-4 flex flex-col gap-2">
      <NavItem title="homepage" />
      <NavItem title="services" />
      <NavItem title="about" />
      <NavItem title="contact" />
      <NavItem title="settings" />
      <div className="flex flex-col gap-2 mt-5">
        <p className="text-yellow-500">{profile.username}</p>
        <p className="text-green-500">{profile.email}</p>
      </div>
    </div>
  )
}

export default Sidebar

const NavItem = ({ title }: { title?: string }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2.5 rounded-md text-white hover:bg-white/20 transition-all cursor-pointer">
      <SidebarIcon className="size-[18px] text-inherit" />
      <p className="text-inherit text-lg capitalize">{title}</p>
    </div>
  )
}
