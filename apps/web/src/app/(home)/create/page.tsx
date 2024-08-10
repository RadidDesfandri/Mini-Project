import CardTicket from '@/components/create/cardTicketBerbayar'
import { AddFiile } from '@/components/create/addFIile'
import { Ticketing } from '@/components/create/ticketing'
import ModalTicketing from '@/components/modal/ModalTicketing'
import NavTop from '@/components/navTop'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-950'>
      <NavTop />
      <AddFiile />
      <Ticketing />
    </div>
  )
}
