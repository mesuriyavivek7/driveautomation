'use client'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import WorkFlowForm from '@/components/forms/workflow-form'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
  const {setOpen, setClose} = useModal()
  const handleClick = () =>{
     setOpen(
        <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate task."
        >
            <WorkFlowForm></WorkFlowForm>
        </CustomModal>
     )
  }

  return (
    <Button size={'icon'} onClick={handleClick}>
        <Plus></Plus>
    </Button>
  )
}

export default WorkflowButton