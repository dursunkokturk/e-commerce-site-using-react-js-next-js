'use client'

import Modal from "@/components/modals/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            E-Ticaret Sitesi Yapımı -- React JS ve Next JS Kullanarak
            <Modal title={"Modal Title"} 
                    description={"Modal Description"} 
                    isOpen={true} 
                    onClose={function (): void { 
                                                    throw new Error("Function not implemented."); 
                                                }}>
                Dialog
            </Modal>
        </div>
    );
}