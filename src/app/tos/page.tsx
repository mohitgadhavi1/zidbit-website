import React from 'react'
import  strings from "@/loc/en-us"

function page() {
  return (
    <div className='bg-light dark:bg-dark dark:text-light w-full h-full'>
        {strings.tosTitle}
        <p>
      {strings.tosDescription}
        </p>
    </div>
  )
}

export default page