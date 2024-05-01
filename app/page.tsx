import MaxWidthWrapper from "@/components/max-width-wrapper"
import Link from "next/link"

export default function Home() {
  const projects = [
    {
      title: "counter",
      hrefUrl: "/counter",
    },
    {
      title: "todo list",
      hrefUrl: "/todo-list",
    },
    {
      title: "modal",
      hrefUrl: "/modal",
    },
  ]
  return (
    <MaxWidthWrapper className="flex items-center flex-col my-20">
      <h1 className="font-semibold text-5xl mb-20">
        learn redux toolkit with study case ⬇️⬇️
      </h1>
      <div className="grid grid-cols-3 gap-6 w-full">
        {projects?.map(({ title, hrefUrl }) => (
          <Link
            key={title}
            href={hrefUrl}
            className="p-4 transition-all rounded-2xl border w-full h-20 border-white hover:bg-white/10 text-white flex items-center justify-center"
          >
            {title}
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}
