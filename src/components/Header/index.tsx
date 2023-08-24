
import Image from "next/image";
import favicon from '@/app/favicon.ico'
import { AiOutlineSearch } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  scrollPosition?: number;
  setModalSearchMobileIsOpen: Dispatch<SetStateAction<boolean>>;
  className?: {
    header: string | undefined;
    span: string | undefined;
  }
}

export function Header({ scrollPosition = 0, setModalSearchMobileIsOpen, className }: HeaderProps) {
  const scrollMove = scrollPosition > 0
  
  return (
    <header className={className?.header ? className.header : `w-screen ${scrollMove ? 'animate-minimize fixed z-50' : 'h-[220px] animate-expand block'} p-4 flex bg-blue-700 top-0`}>
      <Image 
        src={favicon} 
        alt="logo icon"
        className="w-[30px] h-[30px]"
      />

      <div className="w-full flex justify-between">
        <div className="text-white max-w-[1000px] w-full mx-auto pl-4">
          <h3 className="font-semibold text-xl">Novidade Asaas</h3>
          <span className={className?.span ? className.span : `${scrollMove ? 'hidden' : ''}`}>Soluções financeiras</span>
        </div>

        <div className="flex pr-2">
          {/* Show button only media device */}
          <button className="h-[40px] text-2xl text-white lg:hidden" onClick={() => setModalSearchMobileIsOpen(true)}>
            <AiOutlineSearch />
          </button>
        </div>
      </div>

    </header>
  )
}