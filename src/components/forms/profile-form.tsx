"use client"
import React, { useEffect, useState } from 'react'
import {  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
    onUpdate?:any,
    user:any
}

const ProfileForm = ({user,onUpdate}: Props) => {
    const [isLoading,setIsLoading] = useState(false)

    const form = useForm<z.infer <typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver:zodResolver(EditUserProfileSchema),
        defaultValues:{
            name: user.name,
            email: user.email,
        }
    })

    const handnleSubmit = async (values: z.infer<typeof EditUserProfileSchema>)=>{
        console.log(values)
        setIsLoading(true)
        await onUpdate(values.name)
        setIsLoading(false)
    }

    useEffect(()=>{
      form.reset({name: user.name , email:user.email})
    },[user])

  return (
    <Form {...form}>
        <form className='flex flex-col gap-6'
        onSubmit={form.handleSubmit(handnleSubmit)}
        >
            <FormField 
            disabled={isLoading}
            control={form.control}
            name='name'
            render={({field}) => (
                <FormItem>
                    <FormLabel className='text-lg'>User full name</FormLabel>
                    <FormControl>
                        <Input {...field} placeholder="Name"></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                </FormItem>
            )}
            ></FormField>

            <FormField 
            control={form.control}
            name='email'
            render={({field}) => (
                <FormItem>
                    <FormLabel className='text-lg'>Email address</FormLabel>
                    <FormControl>
                        <Input  {...field} placeholder="Email" type='email' disabled={true}></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                </FormItem>
            )}
            ></FormField>
            <Button type='submit' className='self-start  bg-white text-black hover:bg-[#2F006B] hover:text-white'>
                {
                    isLoading ? (
                        <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2>
                        Saving
                        </>
                        
                    ) : (
                        'Save User Settings'
                    )
                }
            </Button>
        </form>
    </Form>
  )
}

export default ProfileForm