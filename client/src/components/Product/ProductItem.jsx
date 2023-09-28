import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const ProductItem = (props) => {
  
    const { _id, image, name, price,discount, discountedPrice} = props.item
  return (
    <div key={_id} className={`${props.col} col-6`}>
                          <Link to={`/details/${_id}`}>
                            <div className="item-box">
                              <div className="item-image">
                              {
                                discount && <span>Endirimli</span>
                              }
                                <img src={`https://api.flamingo.az/uploads/${image}`} alt="" />
                              </div>
                              <div className="item-content">
                                <h5>{name}</h5>
                                {
                                    discount ? <p><del>{price} AZN</del> {discountedPrice} AZN</p> : <p>{price} AZN</p>
                                }
                                <button><HiOutlineShoppingCart /> Səbətə at</button>
                              </div>
                            </div>
                          </Link>
    </div>
  )
}

export default ProductItem
