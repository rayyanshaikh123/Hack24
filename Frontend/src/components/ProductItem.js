import React from 'react'
import 'ldrs/quantum';
const ProductItem =(props)=> {

    let {title,description,price, brand,images} = props;
    return (
      <div className="my-5 mx-5">
    
  <div class="card" style={{width: "18rem"}}>

  <img src={images?images:"https://cdn.dummyjson.com/product-images/2/3.jpg"} class="card-img-top" alt="..."/>
  <div class="card-body">
  <span className="position-absolute top-0 left-10 start-100 translate-middle badge rounded-pill bg-danger">
   {brand}
    <span className="visually-hidden">unread messages</span>
  </span>
  <div class="card-header">
   {title}...
  </div>
    <p class="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">${price}</small></p>
  </div>
</div>
      </div>
    )
  
}

export default ProductItem
