"use client"

import { Header } from "@/components/Header"
import { ModalSearchMobile } from "@/components/ModalSearchMobile"
import { useState } from "react";

export function ContainerUseClientComponents() {
  const [modalSearchMobileIsOpen, setModalSearchMobileIsOpen] = useState(false);

  return (
    <>
      <Header setModalSearchMobileIsOpen={setModalSearchMobileIsOpen} className={{ header: 'w-screen fixed z-50 p-4 flex bg-blue-700 top-0', span: 'hidden' }} />
      
      {modalSearchMobileIsOpen && <ModalSearchMobile setIsOpen={setModalSearchMobileIsOpen} />}
    </>

  )
}