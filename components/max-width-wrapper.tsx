import { cn } from "@/utils/utils"

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: Readonly<React.ReactNode>
  className?: string
}) => {
  return (
    <div className={cn("w-full min-h-screen max-w-7xl mx-auto", className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
