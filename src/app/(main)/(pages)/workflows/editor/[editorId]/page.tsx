import React from 'react'
import EditorProvider from '@/providers/editor-provider'
import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorCanvas from './_components/editor-canvas'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-full'>
        <EditorProvider>
           <ConnectionsProvider>
             <EditorCanvas></EditorCanvas>
           </ConnectionsProvider>
        </EditorProvider>
    </div>
  )
}


export default page