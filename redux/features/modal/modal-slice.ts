import { createSlice } from "@reduxjs/toolkit"

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
  },
  reducers: {
    showModal: (state) => {
      state.showModal = !state.showModal
    },
    hideModal: (state) => {
      state.showModal = false
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions
export default modalSlice.reducer
