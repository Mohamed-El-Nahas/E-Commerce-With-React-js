import React from 'react'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../redux/Slice/CartSlice'
import { toast } from 'react-toastify'

const ProductCard = ({item}) => {

  const dispatch = useDispatch()
  const addToCart = () =>
  {
    dispatch(CartActions.addItem(
      {
        id : item.id,
        productName : item.productName,
        price : item.price,
        imgUrl : item.imgUrl
      }
    ))
    toast.success ('product added to cart')
  }

  return (
    <Col lg = '3' md = '4' className='mb-2'>
    <div className="productItem ">
        <div className="productImg">
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 productInfo'>
        <h3 className="productName"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span className=''>{item.category}</span>
        </div>
        <div className="productCard-bottom d-flex align-items-center justify-content-between p-3">
            <span className="price">${item.price}</span>
            <motion.span whileTap={{scale:1.2}} onClick = {addToCart}><i class="ri-shopping-cart-line"></i></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard