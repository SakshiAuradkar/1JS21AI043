import React, { useEffect } from 'react'

const Rating: React.FC<{id: string, rating: number}> = ({id, rating}) => {
    console.log(id);
    useEffect(()=>{
    }, []);

  return (
    <div id={id} className="rating">
      <input type="radio"  className={`mask mask-star ${id}`} />
      <input type="radio"  className={`mask mask-star ${id}`} />
      <input type="radio"  className={`mask mask-star ${id}`} defaultChecked/>
      <input type="radio"  className={`mask mask-star ${id}`} />
      <input type="radio"  className={`mask mask-star ${id}`} />
    </div>
  )
}

export default Rating
