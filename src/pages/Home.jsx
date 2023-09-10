import React  from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../components/services/Services'
import ProductsList from '../components/Ui/ProductsList'
import products from '../assets/data/products'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [consoleProducts, setConsoleProducts] = useState([])
  const [controllersProducts, setControllersProducts] = useState([])


  useEffect(()=> 
  {
    const filterdTrendingProduct = products.filter((item) => item.category === 'Game1')
    setTrendingProducts(filterdTrendingProduct)

    const filterdBestSalesProduct = products.filter((item) => item.category === 'TopSales')
    setBestSalesProducts(filterdBestSalesProduct)

    const filterdConsoleProduct = products.filter((item) => item.category === 'Console')
    setConsoleProducts(filterdConsoleProduct)

    const filterdControllersProduct = products.filter((item) => item.category === 'Controllers')
    setControllersProducts(filterdControllersProduct)



  },[])

  return (
    <Helmet title = {'Home'}>
      <section className="heroSection">
        <Container>
          <Row>
            <Col lg = '6' md = '6'>
              <div className="heroContent">
                <p className="heroSub">Lorem ipsum dolor</p>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nemo unde illum amet quam dolorum voluptates commodi magnam corrupti omnis?</p>
                <motion.button whileTap={{scale : 1.3}} className='buyBtn'><Link to="/shop">Explore Now</Link></motion.button>
              </div>
            </Col>

            <Col lg = '6' md = '6'>
              <div className="heroImg">
                <img src = {heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>
      <section className="trendingProducts">
        <Container>
          <Row>
            <Col lg = "12" className='text-center' >
              <h2 className='sectionTitle pb-5'>Trending Games</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
       
      <section className="bestSales">
        <Container className=''>
          <Row className=''>
            <Col lg = "12" md = '12' className='text-center' >
              <h2 className='sectionTitle pb-5'>Hot Sales</h2>
            </Col>
            <ProductsList  data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      

      <section className="newArrivals">
        <Container>
          <Row>
            <Col lg = "12"  className='text-center' >
              <h2 className='sectionTitle pb-5'>Console Area</h2>
            </Col>
            <ProductsList data={consoleProducts}/>
            <ProductsList data={controllersProducts}/>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home