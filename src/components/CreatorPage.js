import React from 'react'
import 
{ CREATOR_LOGO, CREATOR_LOGO1, CREATOR_LOGO2, CREATOR_PIC, CREATOR_PIC1, CREATOR_PIC2, CREATOR_PIC3, STORY1 }
 from '../untils/constant'

const CreatorPage = () => {
  return (
    <div className=''>
    <div className=' md:w-3/6 p-[17rem]  border-black  ml-[20rem] mt-[-34rem] w-72  '> 
          <div className="pt-0 mt-[-14.5rem] ml-[-13rem]  flex ">
              <img className=' rounded-full w-12 h-12 ' alt='logo' 
              src={STORY1}/> 
            <h1 className='p-2 text-lg '>sunrisershyd</h1>
          </div>
          <div className='ml-[-10.5rem]'>
              <img className=' mt-[1.5rem] max-w-[31rem]  ms-auto' alt='sunRiser' 
              src={CREATOR_PIC}/>   
          </div>
      <div className=''>
        <img className=' rounded-full w-12 h-12 ml-[-13rem] mt[2rem] mb-[-3rem]' alt='logo' 
              src={CREATOR_LOGO}/> 
            <h1 className='p-2 text-lg ml-[-9.5rem]'>software_coding_page</h1>
      </div>
          <div className='ml-[-10.5rem]'>
              <img className=' mt-[1.5rem] max-w-[31rem]  ms-auto' alt='sunRiser' 
              src={CREATOR_PIC1}/>   
          </div>
          <div>
        <img className=' rounded-full w-12 h-12 ml-[-13rem] mt[2rem] mb-[-3rem]' alt='logo' 
              src={CREATOR_LOGO1}/> 
            <h1 className='p-2 text-lg ml-[-9.5rem] '>swamy_7_6</h1>
         </div>
          <div className='ml-[-10.5rem]'>
              <img className=' mt-[1.5rem] max-w-[31rem]  ms-auto' alt='sunRiser' 
              src={CREATOR_PIC2}/> 
                
          </div>
          
          <div>
        <img className=' rounded-full w-12 h-12 ml-[-13rem] mt[2rem] mb-[-3rem] ' alt='logo' 
              src={CREATOR_LOGO2}/> 
            <h1 className='p-2 text-lg ml-[-9.5rem]'>janasenaparty</h1>
        </div>
          <div className='ml-[-10.5rem]'>
              <img className=' mt-[1.5rem] max-w-[31rem]  ms-auto' alt='sunRiser' 
              src={CREATOR_PIC3}/>   
          </div>
    </div>
    </div>
  )
}

export default CreatorPage