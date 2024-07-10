import{ useRef, useState } from 'react'
import { checkValidData } from '../untils/validate'
import { auth } from '../untils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { PROFILE } from '../untils/constant';

const Login = () => {
    const [isLogin,setIsLogin] = useState(true)
    const [errorMessage,setErrorMessage] = useState()
    

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleClickBtn = ()=>{
      const message = checkValidData(email.current.value,password.current.value)
      setErrorMessage(message) 

      if(message) return

      if(!isLogin){
        // then write the sign Up logic here  

        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: PROFILE
          }).then(() => {
            
          }).catch((error) => {
            setErrorMessage(message)
          });
          
          console.log(user)
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
      }else{

        // then write the sign in logic write here 
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)

      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+ errorMessage)
      });

      } 
      
    }

    const clickBtn= ()=>{
        setIsLogin(!isLogin)
    }

  return (
    <div>
        <form 
        onSubmit={(e)=>e.preventDefault()} 
        className='w-full md:w-3/12 p-[2rem] border mb-[2rem] border-black my-36 ml-[46rem]'>
            <h1 
            className= 'text-[2.875rem] w-28 text-black font-bold decoration-black p-2 m-2'>
              Instagram
            </h1>
            {!isLogin && <input
             className='border border-black p-2 m-2 px-4 mx-4 ml-0 mr-0 w-full'
             type='text' 
             placeholder='Full Name'/>}
            <input ref={email}
             className='border border-black p-2 m-2 px-4 mx-4 ml-0 mr-0 w-full'
             type='text' 
             placeholder='PhoneNumber,username or email address'/>
             
             {!isLogin && <input
             className='border border-black p-2 m-2 px-4 mx-4 ml-0 mr-0 w-full'
             type='text' 
             placeholder='userName'/>}
             <input ref={password}
             className='border border-black p-2 m-2 px-4 mx-4 ml-0 mr-0 w-full'
             type='password' 
             placeholder='password'/>

            <p className='text-red-500'>{errorMessage}</p>

            <button 
            onClick={handleClickBtn}
            className="border border-black p-2 m-2 px-4 ml-0 mr-0 mx-4 w-full cursor-pointer bg-blue-500 rounded-xl">
              {!isLogin ? "Sign Up" : "Log In"}
            </button>
            <h2 
            className='text-sm cursor-pointer'>
              Forgotten Your password?
            </h2>
       </form>
       <div className='text-black'>
            <p 
            className='md:w-3/12 p-[2rem] border border-black my-36 mt-[0rem] mb-[5rem] ml-[46rem] cursor-pointer w-full' 
            onClick={clickBtn}>
              {isLogin ? "Don't have an account? Sign up" :"Have an account? Log in"}
            </p>
       </div>
    </div>
  )
}

export default Login