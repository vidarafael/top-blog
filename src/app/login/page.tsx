import { AiOutlineLock } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Page() { 
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white sm:bg-gray-200">
      <form className="w-[440px] h-[440px] px-6 rounded bg-white" >
        <header className="text-center mt-12">
          <h1 className="flex items-center justify-center text-3xl font-bold"><span className="text-pink-500">TOP</span> Blog</h1>
        </header>

        <main className="mt-12 mx-auto w-11/12 flex flex-col gap-6">
          <div className="flex items-center bg-gray-100 h-10 w-full rounded border-2 focus-within:border-pink-500 focus-within:text-pink-500">
            <label className="p-2" htmlFor="email"><HiOutlineMail /></label>
            <input id="email" className="h-full w-full bg-gray-100 outline-none text-black" type="text" placeholder="Digite o seu email" />
          </div>

          <div className="flex items-center bg-gray-100 h-10 rounded border-2 focus-within:border-pink-500 focus-within:text-pink-500">
            <label className="p-2" htmlFor="password"><AiOutlineLock /></label>
            <input id="password" className="h-full w-full bg-gray-100 outline-none text-black" type="password" placeholder="Digite a sua senha" />
          </div>
        </main>

        <footer className="mt-default h-fit mx-auto w-11/12  flex flex-col gap-6">
          <button className="w-full h-10 bg-pink-500 rounded text-white font-bold hover:bg-pink-700 transition-all" type="submit">Entrar</button>
        </footer>
      </form>
    </div>
  )
}