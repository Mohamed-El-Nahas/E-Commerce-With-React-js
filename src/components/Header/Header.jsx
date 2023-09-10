import React, {useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const mynavlink =
[
    {
        path : 'home',
        display : 'Home'
    },
    {
        path : 'shop',
        display : 'Shop'
    },
    {
        path : 'cart',
        display : 'Cart'
    },
]

const Header = () => {

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const stickyHeaderFunc = () => 
  {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        headerRef.current.classList.add('stickyheader')
      } else {
        headerRef.current.classList.remove('stickyheader')
      }
    })
  }

  useEffect(() => {
      stickyHeaderFunc()

      return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active-menu')

  const totalQuantity = useSelector (state => state.cart.totalQuantity)
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="mynavwrapper">
            <div className="logo">
              <div>
                <h1>Gamers-House</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                    mynavlink.map((item, index) => (
                        <li className='mynavitem' key = {index}>
                            <NavLink to = {item.path} className = {(navClass) => navClass.isActive ? 
                            'mynavactive' : ''}>{item.display}</NavLink>
                        </li>
                    ) )
                }
              </ul>
            </div>
            <div className="mynavicons">
              <span className="myfavicon">
              </span>
              
              <span className="mycarticon">
                <Link to = "/cart">
                <i class="ri-shopping-bag-3-line"></i>
                </Link>
                <span className="badge">{totalQuantity}</span>
              </span>
    
              <span className="myusericon">
                <i class="ri-user-3-line"/>
              </span>
              <div className="mymobilemenu">
              <span onClick={menuToggle}>
                <i class="ri-menu-5-fill"></i>
              </span>
            </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header