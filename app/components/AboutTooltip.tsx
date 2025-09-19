import { motion } from 'framer-motion';
import React from 'react'

interface AboutTooltipProps {
    aboutus: string[];
}


const AboutTooltip: React.FC<AboutTooltipProps> = ( { aboutus } ) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50"
    >
    <ul>
        {aboutus.map((about,index) => (
            <li
                key={index}
                className='px-4 py-2 hover:bg-pink-500 hover:text-white cursor-pointer transition-colors duration-200'
            >
                {about}
            </li>
        ))}
    </ul>
    </motion.div>
  )
}

export default AboutTooltip