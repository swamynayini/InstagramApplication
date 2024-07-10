import React from 'react'
import 
{ STORY1, STORY10, STORY2, STORY3, STORY4, STORY5, STORY6, STORY7, STORY8, STORY9 } 
from '../untils/constant'

const Stories = () => {
  return (
    <div className='flex overflow-x-scroll w-[64rem] '>
        <div className='flex' >
            <div className='flex p-4  -space-x-0 ml-[14.5rem] -m-2 '>
          <img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem]  rounded-full' alt='sunriser' src={STORY1}/>
          </div>
          <div className='flex   '>
          <img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='Ipl' src={STORY2}/>
          </div>
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='user1' src={STORY3}/> </div>
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='user4' src= {STORY4}/> </div>        
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='user5' src={STORY5}/></div>
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='user3' src={STORY6}/></div>
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='user6' src={STORY7}/></div>
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='user7' src={STORY8}/></div>
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2 rounded-full' alt='user8' src={STORY9}/></div>
          <div><img className=' w-16 h-16 mr-[1.5rem] ml-[1.5rem] mt-2  rounded-full' alt='user9' src={STORY10}/>  </div>        
         
        </div> 
    </div>
  )
}

export default Stories