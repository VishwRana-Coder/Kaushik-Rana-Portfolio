"use client";

import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdMan } from "react-icons/io";
import { Input, Textarea, FormControl } from "@chakra-ui/react";
import { Button } from "antd";
import { db, collection, addDoc } from "./Firebase"; // Adjust the path as needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact: React.FC = () => {
  // State for form fields
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // State for touched fields
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  // Handle input changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubject(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  // Handle focus and blur events
  const handleFocus = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "Emails"), {
        name,
        email,
        subject,
        message,
        timestamp: new Date(),
      });
      toast.success("Message sent successfully")
      // Clear form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error sending message. Please try again.");
    }
  };

  const isDisabled = !name || !email || !subject || !message;

  return (
    <>
      <div className="mt-10 container md:flex-row flex-col">
        {/* Contact Info */}
        <article className="w-full ">
          {/* Phone */}
          <div className="flex items-center gap-6 mt-4">
            {/* Icon */}
            <div className="py-5 px-5 text-2xl text-light-accent dark:text-dark-accent bg-[#e7e7e7] flex justify-center items-center rounded-md dark:bg-[#272727]">
              <IoIosCall />
            </div>
            +1 (778) 717-7675
          </div>
          {/* Email */}
          <div className="flex items-center gap-6 mt-4">
            {/* Icon */}
            <div className="py-5 px-5 text-2xl text-light-accent dark:text-dark-accent bg-[#e7e7e7] flex justify-center items-center rounded-md dark:bg-[#272727]">
              <MdEmail />
            </div>
            Kaushikrana874@gmail.com
          </div>
          {/* Pronouns */}
          <div className="flex items-center gap-6 mt-4">
            {/* Icon */}
            <div className="py-5 px-5 text-2xl text-light-accent dark:text-dark-accent bg-[#e7e7e7] flex justify-center items-center rounded-md dark:bg-[#272727]">
              <IoMdMan />
            </div>
            He / His
          </div>
        </article>
        <section className="w-full mt-10 md:mt-0">
          <FormControl isRequired isInvalid={touched.name && !name}>
            <Input
              name="name"
              value={name}
              onChange={handleNameChange}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              placeholder="Name"
              errorBorderColor="red.300"
              className={`w-[300px] md:w-full h-[40px] px-3 rounded-md placeholder:text-[#666666] border ${
                touched.name && !name ? "border-red-500" : "border-[#666666]"
              } mt-2 dark:bg-[#272727] dark:placeholder:text-[#888888]`}
              type="text"
            />
          </FormControl>
          <FormControl isRequired isInvalid={touched.email && !email} mt={3}>
            <Input
              name="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              placeholder="Email"
              errorBorderColor="red.300"
              className={`w-[300px] md:w-full h-[40px] px-3 rounded-md placeholder:text-[#666666] border ${
                touched.email && !email ? "border-red-500" : "border-[#666666]"
              } mt-2 dark:bg-[#272727] dark:placeholder:text-[#888888]`}
              type="email"
            />
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.subject && !subject}
            mt={3}
          >
            <Input
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
              onFocus={() => handleFocus("subject")}
              onBlur={() => handleBlur("subject")}
              placeholder="Subject"
              errorBorderColor="red.300"
              className={`w-[300px]md:w-full h-[40px] px-3 rounded-md placeholder:text-[#666666] border ${
                touched.subject && !subject
                  ? "border-red-500"
                  : "border-[#666666]"
              } mt-2 dark:bg-[#272727] dark:placeholder:text-[#888888]`}
              type="text"
            />
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.message && !message}
            mt={3}
          >
            <Textarea
              name="message"
              value={message}
              onChange={handleMessageChange}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
              rows={30}
              placeholder="Type the Message"
              errorBorderColor="red.300"
              className={`mt-3 h-[200px] resize-none border ${
                touched.message && !message
                  ? "border-red-500"
                  : "border-[#666666]"
              } placeholder:text-[#666666] rounded-md px-3 py-3 dark:bg-[#272727] dark:placeholder:text-[#888888]`}
            />
          </FormControl>
          <Button
            type="primary"
            className={`mt-2 w-full ${
              isDisabled
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700 text-white"
            } ${
              isDisabled
                ? "dark:bg-transparent dark:hover: dark:text-gray-300 dark:cursor-not-allowed"
                : ""
            }`}
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Send Message
          </Button>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
