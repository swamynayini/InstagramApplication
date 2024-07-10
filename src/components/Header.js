import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../untils/firebase';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { addUser, removeUser } from '../untils/userSlice';
import { useDispatch } from 'react-redux';
import { PROFILE } from '../untils/constant';


const Header = () => {

  const navigate =  useNavigate()
  const dispatch = useDispatch()


  const logoutBtn = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browser")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    
      },[])
  return (
    <div className='absolute flex overflow-y-scroll'>
        {!Login&&<img className='w-[31rem] mr-[-5rem] pt-[-0.5rem] ml-[10.25rem] mt-[-3.5rem]' 
        alt='logo' 
        src='https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW'
        />}
        <div className='flex pl-[71.5rem] p-2 m-2 pt-[1.5rem]'>
          <img alt='userIcon' className='w-12 h-12   rounded-full' src={PROFILE}/>
          <h1 className='text-white mt-2 p-2'>swamy_7_6</h1>
          <button className='font-bold  text-white text-sm' onClick={logoutBtn}>(LogOut)</button>
        </div>
        
    </div>
  )
}

export default Header