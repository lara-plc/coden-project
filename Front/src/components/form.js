import axios from "axios"
import React, { useState } from "react"



const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('Service Questions')
  const [description, setDescription] = useState('')


  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    )
  }

  
  

  const handleSubmit = async () => {
    setSubmitted(true)
    await axios.post('https://coden-message.onrender.com/form',
    {name: name,
    email: email,
    phone: phone,
    subject: subject,
    description: description}
    )
  }


  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your phone"
          name="phone"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3 pt-0">
        <select
          type="select"
          placeholder="Subject"
          name="subject"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          onChange={e => setSubject(e.target.value)}
        >
            <option
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            >Service Questions</option>    
            <option
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            >Complaints</option>
            <option
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            >Compliments</option>
            <option
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            >Others</option>
        </select>
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send message
        </button>
      </div>
    </form>
  )
}

export default ContactForm