"use client";
import { motion } from 'framer-motion'; 
const child = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y:0 }
}
export const Icon = ({ children }) => {
    return (
        <motion.div
            variants={child}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

         className='icon'
         >
            {children}
        </motion.div>
    )
}