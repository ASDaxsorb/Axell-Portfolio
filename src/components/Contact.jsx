import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { IoSend } from 'react-icons/io5'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { ThemeContext } from '../context/ThemeContext'

const initialForm = {
  user_phone: '',
  user_email: '',
  message: '',
}

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

function Contact() {
  const themeCtx = useContext(ThemeContext)
  const [form, setForm] = useState(initialForm)

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send(SERVICE_ID, TEMPLATE_ID, form).then(
      (resp) => {
        setForm(initialForm)
        Swal.fire({
          title: 'Success!',
          text: 'The email has been sent!',
          icon: 'success',
          color: themeCtx.theme == 'dark' ? '#fff' : 'default',
          background: themeCtx.theme == 'dark' ? '#27272a' : '#fff',
          confirmButtonColor: themeCtx.theme == 'dark' ? '#22c55e' : '#06b6d4',
        })
      },
      (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'The email has not been sent!',
          icon: 'error',
          color: themeCtx.theme == 'dark' ? '#fff' : 'default',
          background: themeCtx.theme == 'dark' ? '#27272a' : '#fff',
          confirmButtonColor: themeCtx.theme == 'dark' ? '#22c55e' : '#06b6d4',
        })
      }
    )
  }

  return (
    <>
      <form id="contact" onSubmit={handleSubmit}>
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-1 mb-3 mt-5"
        >
          <label
            htmlFor="email"
            className="text-2xl text-slate- dark:text-green-300"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="bg-cyan-200 border-0 dark:bg-zinc-800 dark:border-green-500 dark:border-2 p-2 rounded-lg dark:text-green-300 focus:outline-cyan-500 dark:focus:outline-green-200  outline-none transition-all"
            autoComplete="off"
            placeholder="email@example.com"
            required
            onChange={handleChange}
            value={form.user_email}
          />
        </motion.div>
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-1 mb-3 mt-5"
        >
          <label
            htmlFor="user_phone"
            className="text-2xl text-slate- dark:text-green-300"
          >
            Number:
          </label>
          <input
            type="tel"
            id="user_phone"
            name="user_phone"
            className="bg-cyan-200 border-0 dark:bg-zinc-800 dark:border-green-500 dark:border-2 p-2 rounded-lg dark:text-green-300 focus:outline-cyan-500 dark:focus:outline-green-200  outline-none transition-all"
            autoComplete="off"
            required
            onChange={handleChange}
            value={form.user_phone}
          />
        </motion.div>
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <label
            htmlFor="message"
            className="text-2xl text-slate- dark:text-green-300"
          >
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            className="bg-cyan-200 dark:bg-zinc-800 dark:border-2 dark:border-green-500 p-2 rounded-lg dark:text-green-300
            focus:outline-cyan-500 dark:focus:outline-green-200  outline-none transition-all"
            required
            onChange={handleChange}
            value={form.message}
          ></textarea>
        </motion.div>
        <button
          type="submit"
          className="flex items-center my-2 px-3 py-2 gap-1 bg-cyan-500 dark:bg-green-500 dark:text-zinc-900 text-white font-bold rounded-lg w-full justify-center md:w-auto hover:bg-cyan-600 dark:hover:bg-green-600 transition-all"
        >
          SEND
          <IoSend />
        </button>
      </form>
    </>
  )
}

export default Contact
