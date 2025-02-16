"use client";

import { Button } from "antd";
import { useState } from "react";

export default function FooterTop() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address" });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }
    // Here you would typically send the email to your API
    setStatus({ type: "success", message: "Thank you for subscribing!" });
    setEmail("");
  };

  return (
    <div className="bg-[#E31E24] py-12">
      <div className="container mx-auto px-4">
        <div className="flex w-3/4 mx-auto flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side content */}
          <div className="text-white text-center md:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact us</h2> */}
            <p className="text-white/90">
              Subscribe to our newsletter to get the latest updates and news
            </p>
          </div>

          {/* Newsletter form */}
          <div className="w-full  md:w-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col align-middle justify-center items-top sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
              <div className="flex-1 ">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-colors"
                  aria-label="Email Address"
                />
                {status.message && (
                  <p
                    className={`mt-2 text-sm ${
                      status.type === "error" ? "text-yellow-400" : "text-white"
                    }`}>
                    {status.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="bg-black text-white px-8 py-3 md:py-6 rounded-md font-semibold hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#E31E24]">
                SIGN UP
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
