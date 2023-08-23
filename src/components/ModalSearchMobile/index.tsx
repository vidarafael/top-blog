'use client'

import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";

interface ModalSearchMobileProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function ModalSearchMobile({ setIsOpen }: ModalSearchMobileProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const modalSearchMobileContent = (
    <div className="w-full h-full bg-slate-100 fixed inset-0 z-[100]">
      <div className="flex bg-white w-full p-4">
        <button className="text-xl text-gray-400" onClick={() => setIsOpen((state) => !state)}><AiOutlineLeft /></button>
        <input type="text" className="ml-4 w-full outline-none" placeholder="Pesquisar"/>
        <button className="text-xl text-gray-400"><AiOutlineSearch /></button>
      </div>

      <div>
        <ul className="mt-4 mx-4">
          <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-gray-400 before:rounded-full before:mr-4">Todas</a></li>
          <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-blue-800 before:rounded-full before:mr-4">Lançamentos</a></li>
          <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-blue-400 before:rounded-full before:mr-4">Melhorias</a></li>
          <li className="p-1 hover:bg-slate-200 cursor-pointer"><a href="#" className="text-blue-800 text-base before:content-[''] before:inline-block before:h-[8px] before:w-[8px] before:bg-red-100 before:rounded-full before:mr-4">Mudanças</a></li>
        </ul>
      </div>
    </div>
  )

  return mounted ? createPortal(modalSearchMobileContent, document.body) : null;

}