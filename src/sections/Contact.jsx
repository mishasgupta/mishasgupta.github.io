import { forwardRef, useState } from 'react'
import emailjs from "@emailjs/browser"

const Contact = forwardRef((props, ref) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: "" })
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."))
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <div ref={ref} className="py-15 md:py-25 text-white flex justify-center items-center">
      <div className="border-emerald-600/30 border-2 shadow-xl rounded-xl w-75 md:w-100 py-12 px-10 bg-gray-700/50">
        <h3 className="text-center text-2xl md:text-3xl font-semibold">Contact Me</h3>
        <p className="text-center text-sm mt-6">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
        <form className="flex flex-col mt-4 space-y-2" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-2 border-white rounded-xl focus:outline-4 focus:outline-emerald-600 p-2"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-2 border-white rounded-xl focus:outline-4 focus:outline-emerald-600 p-2"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border-2 border-white rounded-xl focus:outline-4 focus:outline-emerald-600 p-2"
          />

          <div className="flex justify-center mt-8">
            <input 
              type="submit" 
              value="Send"
              className={`w-32 text-white py-2 px-4 rounded-xl transition duration-300 ease-in-out outline-2 outline-white
              ${isFormValid ? 'opacity-100 hover:bg-emerald-600 hover:text-white hover:cursor-pointer' : 'opacity-50 cursor-not-allowed'}`} 
              disabled={!isFormValid}
            />
          </div>
        </form>
      </div>
    </div>
  )
})

export default Contact