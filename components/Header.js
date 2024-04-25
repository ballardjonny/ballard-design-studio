import { motion } from "framer-motion";

export default function Header({ title }) {
  return <motion.h1
             initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
           className="title">{title}</motion.h1>
}