'use client'

import { Header } from "@/components/Header";
import { ModalSearchMobile } from "@/components/ModalSearchMobile";
import { useEffect, useState } from "react";


interface MainContentProps {
  children: React.ReactNode
}

export function MainContentLayout({ children }: MainContentProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalSearchMobileIsOpen, setModalSearchMobileIsOpen] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
        {children}
      </div>

      {modalSearchMobileIsOpen && <ModalSearchMobile setIsOpen={setModalSearchMobileIsOpen}/>}
    </main>
  )
}