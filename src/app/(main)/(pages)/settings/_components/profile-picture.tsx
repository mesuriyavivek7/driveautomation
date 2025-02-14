"use client"
import React from 'react'
import UploadCareButton from './uploadcare_button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  onDelete?:any,
  onUpload?:any,
  userImage:string | null
}

const ProfilePicture = ({userImage, onDelete, onUpload}: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () =>{
    const response = await onDelete()
    if(response) {
      router.refresh()
    }
  }
  return (
    <div className='flex flex-col'>
        <p className='text-lg text-white'>Profile Picture</p>
        <div className='flex h-[35vh] flex-col items-center justify-center'>
            {
              userImage ?
              <div className='flex h-full flex-col w-2/12'>
              <div className='relative h-full'>
                <Image src={userImage} alt='userimage' fill></Image>
              </div>
              <Button onClick={onRemoveProfileImage} className='bg-red-500 text-white/70 hover:bg-transparent hover:text-white'> <X></X> Remove Logo</Button>
              </div>
              :
               <UploadCareButton onUpload={onUpload}></UploadCareButton>
            }
        </div>
    </div>
  )
}

export default ProfilePicture