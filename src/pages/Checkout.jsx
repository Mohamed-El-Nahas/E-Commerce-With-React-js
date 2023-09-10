import React from 'react'
import '../styles/CheckOut.css'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <Helmet title = "Checkout">
      <CommonSection title = "Checkout"/>
      <section>
        <Container>
          <Row>
          <h1 className='w-100 fw-bold mb-5'>Congratulations Your Purchase Has Passed Successfully ...</h1>

            <Col lg = "5" className=''>
              <div className="CheckOutCart">
                <h6>Total Amount Of Items : <span>{totalQty} items</span></h6>
                <h6>Total Amount Of Price : <span>${totalAmount}</span></h6>
                
                <h4>Total Cost : <span>${totalAmount}</span></h4>
              </div>
              <Link to = "/home">
              <button className='buyBTN w-100 mt-5'>Back To Home</button>
              </Link>

            </Col>


          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout