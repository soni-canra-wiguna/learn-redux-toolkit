"use client"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import { DialogContent } from "@/components/ui/dialog"
import { showModal } from "@/redux/features/modal/modal-slice"
import { useDispatch } from "react-redux"

const ModalPage = () => {
  const dispatch = useDispatch()
  return (
    <MaxWidthWrapper className="flex items-center justify-center">
      <button
        className="px-3 py-1.5 bg-white text-black rounded-md"
        onClick={() => dispatch(showModal())}
      >
        show modal
      </button>
      <DialogContent className="text-black h-[600px] shadow-lg flex items-center justify-center font-bold text-3xl">
        create modal/dialog w/ redux
      </DialogContent>
    </MaxWidthWrapper>
  )
}

export default ModalPage
