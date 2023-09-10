import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import { Container, Col, Row } from 'reactstrap'
import '../styles/cart.css'
import { CartActions } from '../redux/Slice/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)


  return (
    <Helmet title = "Cart">
      <CommonSection title="Gamers-Cart"/>
      <section>
        <Container>
          <Row>
            <Col lg = "9">
              {
                cartItems.length === 0? ( <h2 className='fs-4 text-center'>No Items Found Yet</h2> ) :
                (  <table className='table bordered'>
                <thead>
                  <tr>
                    <th className=''>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {/* <tbody>
                  
                </tbody> */}
                <tbody>
                  {
                    cartItems.map((item, index) => (
                      <Tr item={item} key={index}/>
                
                    ))
                  }
                </tbody>
              </table>
             ) }
             
            </Col>

            <Col lg = "3">
              <h6 className='d-felx align-items-center justify-content-between pt-3 mb-5 '>Shopping Amount</h6>
              <span className='pt-5'>${totalAmount}</span>
              <div>
                <button className='buyBTN mt-5 w-100' >
                  <Link to = "/shop" >Back To Shop</Link>
                </button>
                <button className='buyBTN mt-5 w-100'>
                  <Link to = '/checkout'>
                  Submit Your Purchase
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
const Tr = ({item}) => {
  const dispatch = useDispatch()
  const deleteProduct = () =>
  {
    dispatch(CartActions.deleteItems(item.id))

    toast.error ("One Item Removed From Cart")
  }
  return (
  <tr >
  <th>
    <img className='w-25 h-25' src={item.imgUrl} alt="" />
  </th>
  <th className=''>
  {item.productName}
  </th>
  <th>
    ${item.price}
  </th>
  <th>
    {item.quantity}
  </th>
  <th>
    <motion.i whileTab={{ scale:1.2 }} onClick={deleteProduct} className='ri-delete-bin-line' ></motion.i>
  </th>
</tr>
)
}
export default Cart