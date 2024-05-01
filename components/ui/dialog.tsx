"use client"

import { cn } from "@/utils/utils"
import { RootState } from "@/redux/store"
import { X } from "lucide-react"
import ReactDOM from "react-dom"
import { useSelector, useDispatch } from "react-redux"
import { hideModal } from "@/redux/features/modal/modal-slice"

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Dialog = ({ children, className, ...props }: DialogProps) => {
  const modalRoot = document.getElementById("modal-root") as Element

  return ReactDOM.createPortal(
    <div
      className={cn(
        "fixed top-0 left-0 bg-white/20 w-screen h-screen z-40 overflow-hidden flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>,
    modalRoot
  )
}
Dialog.displayName = "Dialog"

const DialogContent = ({ children, className, ...props }: DialogProps) => {
  const modalStatus = useSelector((state: RootState) => state.modal.showModal)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(hideModal())
  }

  return (
    <>
      {modalStatus && (
        <Dialog>
          <div
            className={cn(
              "max-w-lg rounded-md bg-white relative w-full z-50",
              className
            )}
            {...props}
          >
            {children}
            <button
              className="absolute top-3 right-3 rounded-full size-8 bg-black/50 hover:bg-black/70 flex items-center justify-center"
              onClick={closeModal}
            >
              <X className="size-4 text-white stroke-2" />
            </button>
          </div>
        </Dialog>
      )}
    </>
  )
}
DialogContent.displayName = "DialogContent"

export { Dialog, DialogContent }
