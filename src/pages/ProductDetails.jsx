import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import products from '../assets/data/products'
import '../styles/products-details.css'
import { motion } from 'framer-motion'
import ProductsList from '../components/Ui/ProductsList'
import { useDispatch } from 'react-redux'
import { CartActions } from '../redux/Slice/CartSlice'
import { toast } from 'react-toastify'


const ProductDetails = () => {

  const [tab, setTab] = useState('desc')

  const reviewUser = useRef("")

  const reviewMsg = useRef ("")

  const dispatch = useDispatch()

  const [rating, setRating] = useState(null)

  const {id} = useParams()

  const product = products.find(item => item.id === id)

  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product
  
  const relatedProducts = products.filter(item => item.category === category)



  const submitHanlder = (e) =>
  {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value


    const reviewObj = 
    {
      userName : reviewUserName,
      text : reviewUserMsg,
      rating
    }

    console.log(reviewObj) 
    toast.success("Thanks For Leaving a comment")
    

  }

const addToCart = () => 
{
  dispatch(CartActions.addItem({
    id,
    image : imgUrl,
    productName,
    price
  }))

  toast.success("Product Added Successfuly")
}


useEffect(() => {
  window.scrollTo(0,0)
}, [product])

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img className="pt-4" src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="productsDetails">
                <h2>{productName}</h2>
                <div className="productRating d-flex align-item-center gap-5 mb-3">
                  <div className="">
                    <motion.span>
                      <i className="ri-star-s-fill"></i>
                    </motion.span>
                    <motion.span>
                      <i className="ri-star-s-fill"></i>
                    </motion.span>
                    <motion.span>
                      <i className="ri-star-s-fill"></i>
                    </motion.span>
                    <motion.span>
                      <i className="ri-star-s-fill"></i>
                    </motion.span>

                    <p>
                      (<motion.span>{avgRating}</motion.span> ratings)
                    </p>
                  </div>
                </div>
                <div className='d-flex align-item-center g-5'>
                <motion.span className="productPrice">${price}</motion.span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buyBTN mt-5"
                  onClick={addToCart}
                >
                  ADD TO CART
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tabWrraper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "activeTab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "activeTab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tabContent mt-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className='productReview mt-5'>
                  <div className='reviewWrapper'>
                    <ul>
                      {
                        reviews?.map((item, index) => (
                          <li key={index} className="mb-4">
                            <h6>Jhon Doe</h6>
                          <motion.span>{item.rating} (average rating)</motion.span>
                          <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>
                    <div className="reviewForm">
                      <h4>Say Somthing.....</h4>
                      <form action="" onSubmit={submitHanlder}>
                        <div className="formGroup">
                          <input type="text" placeholder='Enter Name' ref={reviewUser} required/>
                        </div>
                        <div className="formGroup d-flex align-items-center gap-5">
                          <motion.span whileTap={{scale:1.2}}>1<i onClick={() => setRating(1)} className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}}>2<i onClick={() => setRating(2)} className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}}>3<i onClick={() => setRating(3)} className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}}>4<i onClick={() => setRating(4)} className="ri-star-s-fill"></i></motion.span>
                          <motion.span whileTap={{scale:1.2}}>5<i onClick={() => setRating(5)} className="ri-star-s-fill"></i></motion.span>
                        </div>
                        <div className="formGroup">
                          <textarea ref={reviewMsg} rows={4} type="text" placeholder='Leave You Comment...' required />
                        </div>
                        <button type='submit' className='buyBTN'>Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg = "12" className='mt-5'>
              <h2 className='relatedTitle'>Maybe You Like This</h2>
            </Col>
            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails