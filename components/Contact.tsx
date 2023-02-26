"use client";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import axios from "axios";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Contact() {
  const [client, setClient] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const onChangeInput = (e: React.ChangeEvent<HTMLElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setClient({ ...client, [name]: value });
  };
  const onSubmitHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { email, subject, message } = client;
    try {
      if (!email || !subject || !message)
        return window.alert("Please fill all the fields");
      const res = await axios.post("/api/form", { email, subject, message });
      if(res.status === 200) {
        setClient({ email: "", subject: "", message: "" });
        window.alert("Message sent successfully");
      }
      else {
        window.alert("Something went wrong");
      }
    } catch (err: Error | any) {
      window.alert(err.message);
    }
  };
  return (
    <>
      <div className={`background-image-glass ${outfit.className}`}>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form method="POST" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@example.com"
                  value={client.email}
                  onChange={onChangeInput}
                  name="email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  value={client.subject}
                  onChange={onChangeInput}
                  name="subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  value={client.message}
                  onChange={onChangeInput}
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-400 px-10 py-3 uppercase text-white rounded tracking-widest hover:shadow-2xl transition-all delay-100 hover:border-sky-500 border-2"
                onClick={onSubmitHandler}
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
