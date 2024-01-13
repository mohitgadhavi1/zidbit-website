"use client"
import ImageUploader from '@/components/ImageUploader'
import { useImageContext } from '@/context/imageContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const [image, setImage] = useImageContext();

  useEffect(()=>{
    if (image.original){
      router.push("/edit_image");
    }
  },[image])


     
        
 
 
   return (  <main className="font-mont dark:bg-dark flex flex-col   bg-light w-full h-full  min-h-[80vh]  items-center justify-center"> 
   <ImageUploader/>
   </main> 


  
 )
  
  
  
}
