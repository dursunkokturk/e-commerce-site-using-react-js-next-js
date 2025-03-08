/* Butona Tiklandiginda 
    Kullanicidan Data Isteyen Ekrani Duzenliyoruz */

'use client'

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

/* Butona Tiklandiginda Ekranda Gorunecek Olan Pencerede 
    Yazilacak Data larin Veri Tiplerini Belirtiyoruz */
interface ModalProps{
    title:string;
    description:string;
    isOpen:boolean;
    onClose:()=>void;
    children?:React.ReactNode;
}

/* Butona Tiklandiginda Ekranda Gorunecek Olan Pencerede 
    Yazilacak Data larin Iceriklerini Aliyoruz */
const Modal = ({ title, description, isOpen, onClose, children }: ModalProps) => {

    const onChange = (open:boolean)=>{
        if(!open){
            onClose();
        }
    }

    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return (

        /* Degiskenlerde Yer Alan Degerleri Component Icinde Yazdiriyoruz */
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    { children }
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Modal