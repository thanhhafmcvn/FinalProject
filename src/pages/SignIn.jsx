import React from 'react'
import { SignInWithGitHub, SignInWithGoogle } from '../components/button/signin_buttons/export.js'

const SignIn = () => {
  return (
    <div className='w-screen h-screen bg-[#23272a] flex justify-center items-center flex-col'>
      <h1 className='text-white text-[50px]'>Sign in to access</h1>
      <SignInWithGoogle />
      <SignInWithGitHub />
    </div>
  )
}

export default SignIn