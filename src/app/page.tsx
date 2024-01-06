"use client"
import Layout from '@/components/layout/Layout'
import ImageUploader from '@/components/ImageUploader'
import EditImage from '@/components/editor/EditImage'
import { useImageContext } from '@/context/imageContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const [image, setImage] = useImageContext();

  useEffect(()=>{
    if (image){
      router.push("/edit_image");
    }
  },[image])


     
        
 
 
   return (  <main className="font-mont dark:bg-dark flex flex-col  bg-light w-full min-h-screen items-center"> 
   <ImageUploader/>
   </main> 


  
 )
  
  
  
}
