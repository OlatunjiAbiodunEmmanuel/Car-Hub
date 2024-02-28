'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'



export default function NavBar() {
  return (
   <header className='w-full absolute z-10'>
<nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4'>
    <Link href='/' className='flex justify-center items-center'>
        <Image src="/logo.svg" alt='logo'
        width={118}
        height={118}
        className='object-contain'
        />
    </Link>
<CustomButton 
title="Sign In"
btnType='button'
containerStyles='text-primary-bule rounded-full sm:bg-gray-100 lg:bg-white min-w-[130px]'
/>
</nav>
   </header>
  )
}
