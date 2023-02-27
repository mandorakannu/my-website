"use client";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import { Rings } from "react-loader-spinner";
import axios from "axios";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Contact() {
  const [loading, setLoading] = useState<any>("Send Message");
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
    setLoading(
      <Rings
        height="60"
        width="80"
        color="#fff"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    );
    const { email, subject, message } = client;
    try {
      if (!email || !subject || !message)
        return window.alert("Please fill all the fields");
      const res = await axios.post("/api/form", { email, subject, message });
      if (res.status === 200) {
        setClient({ email: "", subject: "", message: "" });
        setLoading("SEND MESSAGE");
        window.alert("Message sent successfully");
      } else {
        setLoading("SEND MESSAGE");
        window.alert("Something went wrong");
      }
    } catch (err: Error | any) {
      window.alert(err.message);
    }
  };
  return (
    <>
      <div className={`${outfit.className} bg-zinc-100`} id="Contact">
        <section className="py-20">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-normal text-center text-gray-600 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form method="POST" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm"
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
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300"
                  placeholder="Leave a comment..."
                  value={client.message}
                  onChange={onChangeInput}
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex-row-center py-3 px-10 w-52 h-14 overflow-hidden bg-blue-400 uppercase text-white rounded hover:shadow-2xl transition-all delay-100 hover:border-sky-500 border-2 text-center"
                onClick={onSubmitHandler}
              >
                {loading}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
