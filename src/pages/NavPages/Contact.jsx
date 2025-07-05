import React from "react";
import { useState } from "react";

function Contact() {

  const [email,setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form submitted!');
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    alert('Message sent successfully! (Check console for details)');
  }
  return (
    <div>
      <section className="bg-gray-50 font-sans"> {/* Changed to light background */}
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 rounded-lg">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl rounded-lg"> {/* Adjusted text color for light theme */}
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"> {/* Adjusted text color */}
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 placeholder-gray-500" /* Changed bg and focus colors */
              placeholder="name@flowbite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900"> {/* Adjusted text color */}
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-500" /* Changed bg and focus colors */
              placeholder="Let us know how we can help you"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900"> {/* Adjusted text color */}
              Your message
            </label>

            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-500" /* Changed bg and focus colors */
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-emerald-950 rounded-lg bg-emerald-300 sm:w-fit hover:bg-emerald-800 hover:text-emerald-100  focus:ring-4 focus:outline-none focus:ring-emerald-300" /* Changed button colors */
          >
            Send message
          </button>
        </form>
      </div>
    </section>
    </div>
  );
}

export default Contact;
