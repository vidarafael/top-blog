import Link from "next/link";

interface PostContainerProps {
  id: string;
  title: string;
  category: string;
  body: string;
  created_at: Date;
}

export function PostContainer({ 
  id,
  title,
  category,
  body,
  created_at
 }: PostContainerProps) {
  return (
    <div className={`border-gray-100 border-2 p-5 bg-white mt-8 w-full max-w-[800px] rounded`}>
      <header className="w-full">
        <div className="mb-4">
          <span className="bg-red-100 text-white text-xs p-1 rounded-full">{category}</span>
          {/* <time className="text-slate-400 text-sm ml-2">{new Intl.DateTimeFormat("pt-br", { year: 'numeric', month: 'long', day: 'numeric' }).format(created_at)}</time> */}
          <time className="text-slate-400 text-sm ml-2">{new Date(created_at).getDate()}</time>
        </div>
        <Link href={`/${id}`} className="text-2xl text-blue-700 font-semibold hover:underline">{title}</Link>
      </header>

      <main className="mt-4 flex flex-col gap-5 w-full" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  )
}