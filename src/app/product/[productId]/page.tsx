"use client";

import React from 'react'
import { useParams } from 'next/navigation'

const Product = () => {
  const { productId } = useParams()

  return (
    <div>
      This is Product Id: {productId}
    </div>
  )
}

export default Product