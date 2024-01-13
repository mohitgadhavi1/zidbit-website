"use client"
// import Layout from '@/components/Layout'
import ImageUploader from '@/components/ImageUploader'
import EditImage from '@/ui/editor/EditImage'
import { useImageContext } from '@/context/imageContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function Page() {
  const router = useRouter();
  const [image, setImage] = useImageContext();


useEffect(()=>{
  if(!image.original){
    router.push("/");
  }
},[image])

  return (
    <main className="font-mont  dark:bg-dark flex flex-col  bg-light w-full h-full min-h-[80vh] items-center"> 
      
<EditImage/>


   </main> 
)


  

}

export default Page