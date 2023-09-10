import React from 'react'
import './services.css'
import Fet1 from '../../assets/images/fet1.png'
import Fet2 from '../../assets/images/fet2.jpg'
import Fet3 from '../../assets/images/fet3.jpg'
import Fet4 from '../../assets/images/fet4.jpg'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section id="feature" class="motion.section-p1">
        
        <motion.div whileHover={{scale:1.2}} id="fe-box">
            <img src={Fet1} alt="" />
            <h6>Trusted</h6>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} id="fe-box">
            <img src={Fet2} alt="" />
            <h6>Free Shipping</h6>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} id="fe-box">
            <img  src={Fet3} alt="" />
            <h6>24/7 Support</h6>
        </motion.div>
        <motion.div whileHover={{scale:1.2}} id="fe-box">
            <img  src={Fet4} alt="" />
            <h6>Cash Back</h6>
        </motion.div>
    </section>
  )
}

export default Services