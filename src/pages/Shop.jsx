import React from 'react'
import { useState } from 'react'
import CommonSection from '../components/Ui/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/Ui/ProductsList'

const Shop = () => {

  const [productsData, setProductsData] = useState(products)
  const handleFilter = e =>
  {
    const filterValue = e.target.value
    if (filterValue === 'Game1')
    {
      const FilteredProducts = products.filter(item => item.category === 'Game1')
      setProductsData(FilteredProducts)
    }

    if (filterValue === 'TopSales')
    {
      const FilteredProducts = products.filter(item => item.category === 'TopSales')
      setProductsData(FilteredProducts)
    }

    if (filterValue === 'Console')
    {
      const FilteredProducts = products.filter(item => item.category === 'Console')
      setProductsData(FilteredProducts)
    }

    if (filterValue === 'Controllers')
    {
      const FilteredProducts = products.filter(item => item.category === 'Controllers')
      setProductsData(FilteredProducts)
    }
  }
  
  const handleSearch = e => 
  {
    const searchTerm = e.target.value

    const searchedProducts = products.filter (item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

      setProductsData(searchedProducts)
  }

  return (
    <Helmet title = 'Shop'>
      <CommonSection title = 'Gamers-Lounge'/>

      <section>
        <Container>
          <Row>
            <Col lg = '3' md = '3'>
              <div className="filterWidget">
                <select onChange={handleFilter}>
                  <option>Filter By Catergory</option>
                  <option value="Game1">Trending-Games</option>
                  <option value="TopSales">Top-Sales</option>
                  <option value="Console">Console</option>
                  <option value="Controllers">Controlles</option>
                </select>
              </div>
            </Col>
            <Col lg = '3' md = '3'>
            <div className="filterWidget">
              
            </div>
            </Col>
            <Col lg = '6' md = '6'>
              <div className="SearchBox">
                <input type="text" placeholder='Find what you want' onChange={handleSearch}/>
                <span><i class="ri-search-eye-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0? 
            ( <h1 className='text-center text-light bg-danger fs-4 p-5'>NO PRODUCTS FOUND....</h1> ) : 
            ( <ProductList data={productsData} />)}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop