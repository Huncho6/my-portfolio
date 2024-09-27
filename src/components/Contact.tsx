"use client";
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useAppSelector } from '@/app/hooks'; 
import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const form = useRef<HTMLFormElement | null>(null);


  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);


    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', 
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '',
      )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Email sending failed:', error.text);
        alert('Failed to send message. Please try again later.');
      });
    }
  };

  return (
    <div className={`py-8 px-4 sm:py-16 sm:px-8 border-t-2 ${isDarkMode ? 'border-gray-700' : 'border-secondary'} ${isDarkMode ? 'bg-secondary text-white' : ''}`} id="contact">
      <h1 className={`text-2xl sm:text-4xl font-bold ${isDarkMode ? 'text-green-400' : 'text-secondary'} mb-8`}>Get In Touch.</h1>

      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Email Card */}
        <div className={`p-6 rounded-lg flex items-center space-x-4 sm:w-1/2 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'} animate-fade-in`}>
          <div className={`${isDarkMode ? 'bg-green-600' : 'bg-purple-600'} p-4 rounded-lg`}>
            <MdEmail size={24} />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-secondary'}`}>EMAIL</p>
            <p className="text-lg font-bold">teebliqs4@gmail.com</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className={`p-6 rounded-lg flex items-center space-x-4 sm:w-1/2 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-secondary text-white'} animate-fade-in`}>
          <div className={`${isDarkMode ? 'bg-green-600' : 'bg-purple-600'} p-4 rounded-lg`}>
            <FaPhone size={24} />
          </div>
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-secondary'}`}>PHONE</p>
            <p className="text-lg font-bold">+2348149602710</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-8">
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Name</label>
            <input 
              type="text" 
              name="user_name" 
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Enter your name" 
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Phone No</label>
            <input 
              type="number" 
              name="user_phone" 
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Enter your Phone Number" 
            />
          </div>

          <div>
            <label htmlFor="subject" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Subject</label>
            <input 
              type="text" 
              name="subject" 
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Subject" 
              required
            />
          </div>

          <div>
            <label htmlFor="message" className={`block mt-4 font-medium text-lg sm:text-xl ${isDarkMode ? 'text-green-400' : 'text-secondary'}`}>Message</label>
            <textarea
              name="message"
              className={`border-b-2 w-full h-12 sm:h-16 px-2 ${isDarkMode ? 'border-green-400 bg-secondary text-white' : 'border-secondary'}`} 
              placeholder="Write A Message"
              required
            />
          </div>
          
          {/* Submit Button */}
          <button type="submit" className={`mt-8 sm:mt-20 mb-10 w-full sm:w-52 h-12 sm:h-16 rounded-full ${isDarkMode ? 'bg-green-800 text-white' : 'bg-green-900'} animate-fade-in`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
