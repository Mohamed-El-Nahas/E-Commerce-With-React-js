import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg = "4" >
          <div className="logo">
              <div>
                <h1 className='text-light'>Gamers-House</h1>
              </div>
          </div>
          <p className="footerText mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ut nulla neque voluptates harum fuga sunt beatae vero quia saepe!
          </p>
          </Col>
          <Col lg = "3" >
            <div className="footerQuickLinks">
              <h4 className="quickLinksTitle">Our Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Console Games</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Consoles</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Controllers</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Games</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg = "2" >
          <div className="footerQuickLinks">
              <h4 className="quickLinksTitle">Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="">FaceBook</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="">Twitter</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Instagram</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Pinterest</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg = "3" >
          <div className="footerQuickLinks">
              <h4 className="quickLinksTitle">Contact</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <p>EGYPT - Menofeya</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <p>+010 000 000 0</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <p>GamersHouse@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <p>GamersHouse@outlook.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg = "12">
            <p className="footerCopyRights">All rights reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer