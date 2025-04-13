import Link from 'next/link'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({children}: {children:ReactNode}) => {
  const isAuthenticated = getCurrentUser();
  if(!isAuthenticated){
    redirect("/sign-in")
  }
  return (
   <div className='root-layout'>
         <Link href="/" className='flex items-center gap-2'>
         <Image src="/logo.svg" alt="logo" width={38} height={32} />
         <h2 className='"text-primary'>PrepWise</h2>
         </Link>{children}</div>
  )
}

export default RootLayout