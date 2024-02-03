import React from 'react'
import  strings from "@/loc/en-us"
function page() {
  return (
    <div className='bg-light dark:bg-dark dark:text-light'>
    
        {strings.privacyPolicyTitle}
        Version: 2022-08-24
        <p>
        {strings.privacyPolicyDescriptionShort}
</p>
<p>
{strings.privacyPolicyDescription}
</p>
</div>
  )
}

export default page