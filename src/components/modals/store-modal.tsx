import React from 'react'

/* Form Validation Islemleri Icin Kullaniyoruz */
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Modal from './modal';
import { useStoreModal } from '@/hooks/use-store-modal';

const formSchema = z.object({
    name:z.string().min(1),
})

const StoreModal = () => {

    const storeModal = useStoreModal()
    
    return (
        <Modal title='Mağaza Oluşturma' 
                description='Yeni Bir Mağaza Ekle' 
                isOpen={storeModal.isOpen} 
                onClose={storeModal.onClose}
        >
            Form
        </Modal>
    )
}

export default StoreModal