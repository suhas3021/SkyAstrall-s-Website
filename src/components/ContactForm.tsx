import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-primary-900/5 border border-slate-100 overflow-hidden p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Let's Discuss Your Project
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ready to transform your business? Fill out the form and our team
              will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email Us</h4>
                <p className="text-slate-600">info@skyastrall.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Call Us</h4>
                <p className="text-slate-600">+91 8309960127</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-slate-50 rounded-xl p-6 md:p-8">
          {submitStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 min-h-[400px]">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Message Sent!
              </h3>
              <p className="text-slate-600">
                Thank you for contacting us. We will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-6 text-primary-600 font-semibold hover:text-primary-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitStatus === "error" && (
                <div className="flex items-center text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  <AlertCircle size={16} className="mr-2" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
