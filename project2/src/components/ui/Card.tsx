import React from 'react'
import Image from 'next/image'

import Rating from './Rating'

import {Product} from "@/utils/type"

const Card = ({id, category, productName, price, rating, discount, availability} : Product) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl indicator">
      <span className="indicator-item badge badge-secondary">{discount}% off</span> 
      <figure><Image src={`/${category ?? "default.png"}`} alt={`/${category ?? "Item"}`} width={200} height={150}/></figure>
      <div className="card-body">
          <h2 className="card-title">{productName} {availability == "out-of-stock" && <div className="badge badge-secondary">{availability}</div>}</h2>
          <p className='text-2xl font-bold'>Rs.{price}</p>
          <div className="card-actions justify-between">
            <Rating id={id as string} rating={rating}/>
            <div className="badge badge-outline">{category}</div> 
          </div>
      </div>
    </div>
  )
}

export default Card
