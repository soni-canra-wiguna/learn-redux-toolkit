import Leftbar from "./_components/leftbar"
import NavbarUserProfile from "./_components/navbar"
import Sidebar from "./_components/sidebar"

const LayoutUserProfile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavbarUserProfile />
      <div className="grid grid-cols-12 w-full h-screen">
        <Sidebar />
        <div className="col-span-6 w-full h-full border-x border-gray-400/40">
          {children}
        </div>
        <Leftbar />
      </div>
    </div>
  )
}

export default LayoutUserProfile
