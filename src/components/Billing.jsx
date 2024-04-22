import React from 'react'
import { apple, bill1, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill1} alt="billing" className='w-[100%] h-[100%]
        relative z-[5]'/>
        
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] 
      h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] 
      h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Easily manage your <br className='sm:block hidden'/>
        CCTV system.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With our advanced CCTV solutions, you can effortlessly monitor 
        your property from anywhere, ensuring peace of mind and security. 
        Whether you're at home or away, our systems provide real-time surveillance, 
        giving you full control and visibility over your surroundings. 
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px]
          h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google_play" className='w-[128px]
          h-[42px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
  )

export default Billing