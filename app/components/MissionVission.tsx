import { motion } from 'framer-motion'
import React from 'react'

const MissionVission = () => {
  return (
    <section  id='mission-and-vision' className='bg-[#333] z-[1] mt-40 w-full h-40vh' style={{
    backgroundImage: "url('/missionbg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',
  }}>
        <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-28 mt-80'>
    {/* mission and vission cards */}
    {/* mission */}
      <motion.div
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        className='relative bg-[#4A4A4A] rounded-lg pt-16 p-6 text-center shadow-lg'
      >
        <img src="/missionimage.png" alt="mission"  
          className='absolute top-20 left-0 -translate-y-full rotate-[-40deg] w-[220px] h-auto object-contain z-[-1]'
        />
        <h3 className='text-xl font-bold mb-2 mt-4 text-pink-500'>Our Mission</h3>
        <p className='text-2xl leading-relaxed'>
          To exceed client expectations by delivering innovative printing solutions, exceptional services continuous improvement in everything we do.
        </p>
      </motion.div>
      {/* vission */}
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-[#4A4A4A] rounded-lg pt-16 p-6 text-center shadow-lg"
        >
          {/* Floating Image */}
          <img
            src="/visionimages.png"
            alt="Vision"
            className="absolute top-20 right-0 -translate-y-full rotate-[40deg] w-[220px] h-auto object-contain z-[-1]"
          />
          {/* Content */}
          <h3 className="text-xl font-bold mb-2 mt-4">Our Vision</h3>
          <p className="text-2xl leading-relaxed">
To become the go-to creative printing partner for businesses nationwide, recognized for reliability, creativity, and quality that inspires clients to recommend us again and again.          </p>
        </motion.div>
        </div>
    </section>

  )
}

export default MissionVission