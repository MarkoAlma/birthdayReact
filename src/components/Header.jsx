import { motion } from "motion/react"

export const Header = () => {
  return (
    <div className="  " style={{minWidth:'100%'}}>
      <motion.h1
        
        style={{ fontWeight: 'bold'}}
        initial={{ opacity: 0, scale:0}}
        animate={{ opacity: 1, scale:1}}
        transition={{ duration: 1, ease: "easeIn" }} >
        Today birthdays
      </motion.h1>
    </div>

  )
}