import React from 'react'

export const ProductCard = (props) => {
  return (
    <div>
    <div className='product'>
       <div>
         <h3>{props.product.title}</h3>
         <p>{props.product.desc}</p>
       </div>
       <div>
         {/* <img src={ props.movie.Poster !== 'N/A' ? props.movie.Poster : 'https://via.placeholder.com/400' } alt={props.movie.Title} /> */}
       </div>
       <div>
         {/* <span>{props.movie.Type}</span>
         <h3>{props.movie.Title}</h3> */}
       </div>
     </div>
</div>
  )
}
