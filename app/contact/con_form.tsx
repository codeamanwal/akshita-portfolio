'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNo: '',
    emailId: '',
    interests: [] as string[],
    message: ''
  });

  const interestOptions = [
    'Brand Strategy',
    'Publication Design',
    'Design Consultation',
    'Visual Identity',
    'UI/UX',
    'Collaborations',
    'Packaging Design',
    'Rebranding'
  ];

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to recalculate scrollHeight
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // Set height to scrollHeight
    }
  }, [formData.message]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(item => item !== interest)
        : [...prev.interests, interest]
    }));
  };

  const APPSCRIPT_URL = "https://script.google.com/macros/s/AKfycbwg0jXEOL9d2FqrFinF05vFF7zjXtNtIbi-uq4ikBmZMCZK-K5YdaE7WDzaKz9mLizS/exec"; // Replace with your actual URL

  const validateForm = () => {
    const { fullName, phoneNo, emailId, interests, message } = formData;
    return (
      fullName.trim() !== '' &&
      phoneNo.trim() !== '' &&
      emailId.trim() !== '' &&
      interests.length > 0 &&
      message.trim() !== ''
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill all fields and select at least one interest.');
      return;
    }
    try {
      const response = await fetch(APPSCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          fullName: '',
          phoneNo: '',
          emailId: '',
          interests: [],
          message: ''
        });
      } else {
        alert('Submission failed. Please try again later.');
      }
    } catch {
      alert('An error occurred. Please try again later.');
    }
  };


  return (
    <div className="min-h-screen bg-[#40352F] flex flex-col lg:flex-row pt-8 lg:pt-24 pb-20 lg:pb-40 px-7 lg:px-0">
      {/* Left Side */}
      <div className="flex-1 flex flex-col lg:mt-20 lg:pl-18 mb-12 lg:mb-0">
        <div className="max-w-md">
          <h1 className="text-[#AAC7FF] text-[32px] lg:text-5xl leading-[38px] lg:leading-[57px] tracking-[-0.57px] mb-8">
            /drop an enquiry, <br />
            share a vision<span className="font-domine">, or <br />
            just say hello</span>
          </h1>
          
          {/* Envelope Illustration - Hidden on mobile */}
          <div className="relative mt-50 hidden lg:block">
            <Image
              src="/envelope.png"
              alt="Envelope"
              width={440}
              height={296}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 flex flex-col lg:mt-22 lg:pr-16">
        <form onSubmit={handleSubmit} className="max-w-[700px] w-full">
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-[#FEFCE4] text-sm lg:text-base mb-3 lg:mb-4">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder=""
              className="w-full text-lg lg:text-xl bg-transparent border-b border-[#FEFCE4] text-[#FEFCE4] placeholder-[#A0825A] pb-2 focus:outline-none focus:border-[#F5F1E8] transition-colors"
            />
          </div>

          {/* Phone and Email Row */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-18 mb-6 mt-12 lg:mt-18">
            <div>
              <label className="block text-[#FEFCE4] text-sm lg:text-base mb-3 lg:mb-4">Phone No.</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                className="w-full text-lg lg:text-xl bg-transparent border-b border-[#FEFCE4] text-[#FEFCE4] placeholder-[#A0825A] pb-2 focus:outline-none focus:border-[#F5F1E8] transition-colors"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <label className="block text-[#FEFCE4] text-sm lg:text-base mb-3 lg:mb-4">Email Id</label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                className="w-full text-lg lg:text-xl bg-transparent border-b border-[#FEFCE4] text-[#FEFCE4] placeholder-[#A0825A] pb-2 focus:outline-none focus:border-[#F5F1E8] transition-colors"
              />
            </div>
          </div>

          {/* Interests Section */}
          <div className="mb-6 mt-12 lg:mt-18">
            <label className="block text-[#FEFCE4] text-sm lg:text-base mb-4 lg:mb-6">What Are You Interested In</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {interestOptions.map((interest) => (
                <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleCheckboxChange(interest)}
                    className="w-5 h-5 lg:w-6 lg:h-6 appearance-none bg-transparent border border-[#FEFCE4] checked:appearance-auto accent-[#FEFCE4] checked:border-transparent"
                  />
                  <span className="text-[#FEFCE4] text-sm lg:text-base">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6 mt-12 lg:mt-18">
            <label className="block text-[#FEFCE4] text-sm lg:text-base mb-3 lg:mb-4">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={2}
              ref={textareaRef}
              className="w-full text-lg lg:text-xl bg-transparent border-b border-[#FEFCE4] text-[#FEFCE4] placeholder-[#A0825A] pb-2 resize-none focus:outline-none focus:border-[#F5F1E8] transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center space-x-2 mt-12 lg:mt-16 px-6 lg:px-8 py-3 border border-[#FEFCE4] text-[#FEFCE4] active:bg-[#FEFCE4] active:text-[#40352F] lg:hover:bg-[#FEFCE4] lg:hover:text-[#40352F] transition-colors duration-300 group"
          >
            <span className='text-lg lg:text-xl'>submit</span>
            <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </form>
        {/* Envelope Illustration - Mobile View */}
          <div className="relative mt-20 lg:mt-40 lg:hidden">
            <Image
              src="/envelope.png"
              alt="Envelope"
              width={351}
              height={236}
              className="object-contain"
            />
          </div>
      </div>
    </div>
  );
}
