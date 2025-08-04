import React from 'react'

function Card({item,width}) {
  return (
    <div className='mt-4 mx-4'>
        <div className="card bg-base-100 w-{width} shadow-xl transform transition-transform duration-300 hover:scale-105">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary text-white">{item.catagory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="curser-pointer px-3 py-1 border rounded-md hover:bg-green-700 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card