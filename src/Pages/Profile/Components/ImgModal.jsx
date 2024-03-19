import React, { useState } from 'react'
import { loadState } from '../../../config/storage'

export const ImgModal = ({isOpen, setIsOpen}) => {
  const token = loadState("user")
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>ImgModal</div>
  )
}
