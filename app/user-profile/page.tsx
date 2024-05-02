import UpdateProfile from "./_components/update-profile"
import Welcome from "./_components/welcome"

const UserProfilePage = () => {
  return (
    <div className="p-4">
      <Welcome />
      <UpdateProfile />
    </div>
  )
}

export default UserProfilePage
