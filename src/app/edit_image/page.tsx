"use client"
// import Layout from '@/components/Layout'
import ImageUploader from '@/components/ImageUploader'
import EditImage from '@/components/editor/EditImage'
import { useImageContext } from '@/context/imageContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function Page() {
  const router = useRouter();
  const [image, setImage] = useImageContext();


useEffect(()=>{
  if(!image){
    router.push("/");
  }
},[image])

  return (
    <main className="font-mont dark:bg-dark flex flex-col  bg-light w-full h-screen items-center"> 
      
 {/* <Layout className="pt-16  sm:pt-8"> */}
<EditImage/>
 {/* </Layout> */}

   </main> 
)


  

}

export default Page