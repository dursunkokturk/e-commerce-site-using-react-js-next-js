import React, { useState } from 'react'

/* Form Validation Islemleri Icin Kullaniyoruz */
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Modal from './modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
    name:z.string().min(1),
})

const StoreModal = () => {

    const storeModal = useStoreModal()
    
    const [loading,setLoading] = useState(false);
    
    /* Form Icinde Girilen Data lari Aliyoruz */
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
        }
    })
    
    const onSubmit = async(values: z.infer<typeof formSchema>)=>{
        try {

            /* Butona Ust Uste Tiklama Islemini Engelliyoruz */
            setLoading(true)

            /* Database Baglantisi Icin Api Request Atiyoruz */

        } catch (error) {

            /* Bir Hata Olursa Kullaniciyi Uyariyoruz */
            toast.error("Bir Hata Var")
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal title='Mağaza Oluşturma' 
                description='Yeni Bir Mağaza Ekle' 
                isOpen={storeModal.isOpen} 
                onClose={storeModal.onClose}
        >
            <div>
                <div className='space-y-6 py-2 pb-6'>
                    <div>
                        <Form { ...form }>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField control={form.control} 
                                            name="name" 
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Mağaza İsmi Giriniz
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input disabled={loading}
                                                                placeholder="E-Ticaret" {...field}
                                                        ></Input>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                >
                                </FormField>
                                <div className='pt-9 space-x-2 flex items-center justify-end w-full'>
                                    <Button disabled={loading} variant="secondary" onClick={storeModal.onClose}>İptal</Button>
                                    <Button disabled={loading} variant="default" type="submit">Devam Et</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default StoreModal