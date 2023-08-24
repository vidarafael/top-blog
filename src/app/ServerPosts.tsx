import { Suspense } from "react"
import { AiOutlineSearch } from "react-icons/ai";
import { PostContainer } from "@/components/PostContainer"
import { Skeleton } from "@/components/Skeleton";

const ONE_DAY_IN_SECONDS = 60 * 60 * 24 // 86400 seconds => 24 hours

export async function ServerPosts() {
  
    const data = await fetch(`https://${process.env.NEXT_URL_BACK}/posts/enterprises/64e3e00de2ad49ad028f974b`, { next: { revalidate: ONE_DAY_IN_SECONDS } })
    const { posts } = await data.json() as { posts: any[] }

    return (
      <>
        <div className="mx-auto">
          {posts.map((post) => (
            <Suspense key={post.id} fallback={<Skeleton />}>
              <PostContainer 
                id={post.id}
                category={post.category}
                title={post.title}
                body={post.body}
                created_at={post.created_at}
              />
            </Suspense>
          ))}
        </div>
        <Suspense fallback={<Skeleton />}>
          <div className="mt-[200px] ml-4 hidden lg:block">
            <div className="relative max-w-[240px]">
              <input type="text" placeholder="Pesquisar" className="h-full w-full pl-2 py-2 pr-8 rounded"/>
              <AiOutlineSearch className="absolute top-0 right-2 text-2xl text-gray-400 translate-y-[25%]"/>
            </div>

            <ul className="mt-4">
              <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-gray-400 before:rounded-full before:mr-4">Todas</a></li>
              <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-blue-800 before:rounded-full before:mr-4">Lançamentos</a></li>
              <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-blue-400 before:rounded-full before:mr-4">Melhorias</a></li>
              <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-red-100 before:rounded-full before:mr-4">Mudanças</a></li>
            </ul>
          </div>
        </Suspense>
      </>
    )
}