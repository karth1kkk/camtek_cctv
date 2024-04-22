import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
       <h2 className={styles.heading2}>Discover the ideal CCTV solution <br className='sm:block hidden'/> in just a few simple steps.</h2> 
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       With our user-friendly interface, finding the perfect CCTV 
       system for your needs is a breeze. Say goodbye to complicated 
       setups and hello to effortless security.
       </p>

      <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )

export default CardDeal