import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserProfileProps {
  username: string
  email: string
}
interface InitialStateProps {
  user_profile: UserProfileProps
}

const initialState: InitialStateProps = {
  user_profile: {
    username: "soni canra wiguna",
    email: "sonicandra0511@gmail.com",
  },
}

export const userProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<UserProfileProps>) => {
      state.user_profile = action.payload
    },
  },
})

export const { updateProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
