import React from 'react'
import WorkflowButton from './__components/workflow-button'
import Workflows from './__components'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-col relative'>
        <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between'>
            Workflows
            <WorkflowButton></WorkflowButton>
        </h1>
        <Workflows></Workflows>
        <Workflows></Workflows>
        <Workflows></Workflows>
        <Workflows></Workflows>
    </div>
  )
}

export default Page