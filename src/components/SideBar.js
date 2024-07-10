import 
{ EXPLORE_LOGO, HOME_LOGO, INSTAGRAM_LOGO, MESSAGE_LOGO, NOTIFICATION_LOGO, PROFILE_ICON, REELS_LOGO, SEARCH_LOGO } 
from '../untils/constant'

const SideBar = () => {
  
  return (
    <div className='p-2 m-2 w-52 border-r mt-[-4.5rem] '>
        <div className='text-3xl font-bold'>
          <img alt='logo' className='' src={INSTAGRAM_LOGO}/>
        </div>
        <div className='pt-6 text-xl cursor-pointer '>
          <div className='flex'>
            <img className='w-8  h-8' alt='homeIcon' src={HOME_LOGO}/>
            <h2 className='p-2 m-2 mt-[-0.5rem] mb-[1.5rem]'>Home</h2>
         </div>
         <div className='flex '>
            <img className='w-8 h-8 overflow-hidden' alt='searchIcon' src={SEARCH_LOGO}/>
            <h2 className='p-2 m-2 mt-[-0.5rem] mb-[1.5rem]'>Search</h2>
        </div>
        <div className='flex '>
          <img className='w-8 h-8 ' alt='exploreIcon' src={EXPLORE_LOGO}/>
            <h2 className='p-2  m-2 mt-[-0.5rem] mb-[1.5rem]'>Explore</h2>
        </div>
        <div className='flex '>
          <img className='w-8 h-8' alt='reelsIcon' src={REELS_LOGO}/>
        <h2 className='p-2  mt-[-0.5rem] mb-[1.5rem]'>Reels</h2>
        </div>
        <div className='flex '>
          <img className='w-8 h-8' alt='meesageIcon' src={MESSAGE_LOGO}/>
          <h2 className='p-2 m-2 mt-[-0.5rem] mb-[1.5rem]'>Messages</h2>
        </div>
        <div className='flex '>
          <img className='w-8 h-8' alt='likesIcon' src={NOTIFICATION_LOGO}/>
          <h2 className='p-2 m-2 mt-[-0.5rem] mb-[1.5rem]'>Notification</h2>
        </div>
        <div className='flex '>
          <h2 className='p-2 m-2 mt-[-0.5rem] mb-[1.5rem]' >+ Create</h2>
        </div>
        <div className='flex '>
          <img className='w-8 h-8' alt='Profile' src={PROFILE_ICON}/>
        <h2 className='p-2 m-2 mt-[-0.5rem] mb-[1.5rem]'>Profile</h2>
        </div>
        </div>
    </div>
  )
}

export default SideBar