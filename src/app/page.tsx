'use client'

import { Suspense, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Header } from "@/components/Header";
import { PostContainer } from "@/components/PostContainer";
import { ModalSearchMobile } from "@/components/ModalSearchMobile";

interface IPost {
  id: string;
  title: string;
  category: string;
  body: string;
  created_at: Date;
}

const ONE_DAY_IN_SECONDS = 60 * 60 * 24 // 24 hours

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalSearchMobileIsOpen, setModalSearchMobileIsOpen] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  async function getPosts() {
    try {
      const data = await fetch('http://localhost:3333/posts/enterprises/64e3e00de2ad49ad028f974b', { next: { revalidate: ONE_DAY_IN_SECONDS } })
      const { posts } = await data.json()

      setPosts(posts)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getPosts()
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalSearchMobileIsOpen ? 'hidden' : 'auto' 
  }, [modalSearchMobileIsOpen])


  const scrollMove = scrollPosition > 0

  return (
    <main className="w-full h-full">
      <Header scrollPosition={scrollPosition} setModalSearchMobileIsOpen={setModalSearchMobileIsOpen} />

      <div className={`${scrollMove ? 'mt-[200px]' : '-mt-24'} mb-8 flex mx-auto max-w-[1040px] w-full px-4`}>
        <div className="mx-auto">
          {posts.map((post) => (
            <Suspense key={post.id} fallback={<p>Carregando</p>}>
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
      </div>

    </main>
  )
}
