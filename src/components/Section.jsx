import TitleSection from './TitleSection'
import { motion } from 'framer-motion'

function Section({ title, children }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-10"
    >
      <section className="p-2 my-2 bg-cyan-100 dark:bg-zinc-800 rounded-lg">
        <TitleSection>{title}</TitleSection>
      </section>
      <section>{children}</section>
    </motion.article>
  )
}

export default Section
