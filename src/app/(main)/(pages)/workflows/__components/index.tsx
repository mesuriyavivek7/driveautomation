import React from 'react'
import Workflow from './workflow'

type Props = {
    
}

function Workflows({}: Props) {
  return (
    <div className='relative flex flex-col gap-4'>
       <section className='flex flex-col gap-4 p-6'>
         <Workflow description='Creating a test workflow' id='etrrtrtr5erre' name='Automation WorkFlow' publish={false}></Workflow>
       </section>
    </div>
  )
}

export default Workflows