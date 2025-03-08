'use client'

import AlertModal from "@/components/modals/alert-dialog";
import Modal from "@/components/modals/modal";
import { Button } from "@/components/ui/button";
import { useStoreModal } from "@/hooks/use-store-modal";
import ModalProvider from "@/providers/modal-provider";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

    const onOpen = useStoreModal((state)=>state.onOpen);
    const isOpen = useStoreModal((state)=>state.isOpen);

    useEffect(()=>{
        if(!isOpen){
            onOpen();
        }
    },[isOpen,onOpen])
    
    return null;
    
    // return (
    //     <div>
    //         E-Ticaret Sitesi Yapımı -- React JS ve Next JS Kullanarak

    //         {/* modal.tsx Dosyasinda Yapilan Butona Tiklandiginda 
    //             Ekranda Gorunecek Pencerenin Islemlerini Ekranda Gosteriyoruz */}
    //         {/* <Modal title={"Modal Title"} 
    //                 description={"Modal Description"} 
    //                 isOpen={true} 
    //                 onClose={function (): void { 
    //                                                 throw new Error("Function not implemented."); 
    //                                             }}>
    //             Dialog
    //         </Modal> */}

    //         {/* <AlertModal isOpen={true} onClose={()=> {}} 
    //                                     onConfirm={()=> {}} 
    //                                     loading={true}
    //         ></AlertModal> */}

    //         <>
    //         <ModalProvider/>
    //         </>
    //     </div>
    // );
}