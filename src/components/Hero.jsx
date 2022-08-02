import { FaGithubAlt } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import TypeAnimation from 'react-type-animation'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, y: -50, borderRadius: '0%' }}
            whileInView={{ opacity: 1, y: 0, borderRadius: '100%' }}
            transition={{ duration: 1 }}
            className="select-none w-40  md:w-52 shadow-lg"
            src="https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/253236850_4451912768231745_440015058919669888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQj_N_uBq37tjAAXsEduQpKCzKpn2qBYIoLMqmfaoFgtg4THqSIKKHl2ssaI1tI-3KXPeXYTZSMEmsnXRkMM5c&_nc_ohc=vW0EguQNSKEAX96mMIx&_nc_ht=scontent.fmex10-3.fna&oh=00_AT_6anCSXzyjZ5LP0IjNWAkGmiRGhShq-wLPO4prSwRgCg&oe=62EC2921"
            alt="Axell Profile Picture"
          />
          <motion.a
            initial={{ scale: 0, rotateZ: 180 }}
            whileInView={{
              scale: 1,
              rotateZ: 0,
              transition: { duration: 0.3 },
            }}
            whileHover={{
              scale: [1, 1.8, 1.3],
              transition: { duration: 0.3, type: 'tween' },
            }}
            href="https://github.com/ASDaxsorb"
            target="_blank"
            className="absolute text-white dark:text-zinc-900 text-3xl z-10 rounded-full p-2 border-cyan-500 dark:border-green-300 border-4 right-0 bottom-0 bg-cyan-500 dark:bg-green-300"
          >
            <FaGithubAlt />
          </motion.a>
        </div>
        <h1 className="flex flex-col items-center p-3 drop-shadow-md font-bold text-3xl md:text-5xl text-slate-700 dark:text-white">
          Axell Solis
          <span className="text-cyan-500 dark:text-green-300">
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Backend Developer',
                2000,
                'Frontend Developer',
              ]}
              wrapper="span"
              repeat="Infinity"
            />
          </span>
        </h1>
        <p className="text-slate-700 font-medium dark:text-zinc-300 mt-5 md:text-2xl">
          Hello, I'm Axell, I work in web development, I love technology, music,
          movies and programming. I usually program and develop things as a
          hobby. I currently have experience in various languages. I love
          creativity.
        </p>
      </div>
      <motion.ul
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="sm:grid grid-cols-3 items-center place-items-center mt-2 text-cyan-500 dark:text-cyan-400 text-2xl"
      >
        <li>
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/axell2552/"
            target="_blank"
          >
            <AiFillLinkedin className="mr-2" /> LikedIn
          </a>
        </li>
        <li className="mt-1">
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/axell2552/"
            target="_blank"
          >
            <AiFillGithub className="mr-2" /> GitHub
          </a>
        </li>
      </motion.ul>
    </motion.section>
  )
}

export default Hero
