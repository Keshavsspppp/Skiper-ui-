'use client'
import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import { Banana, Cloud, LandPlot, Twitter } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-white' >hello everyone</h1>
      <WrapButton href='https://www.google.com/'>Hello</WrapButton>
      <ShareButton links={[{icon:Twitter},{icon:Banana},{icon:LandPlot},{icon:Cloud}]}>Share</ShareButton>
    </div>
  )
}

export default page