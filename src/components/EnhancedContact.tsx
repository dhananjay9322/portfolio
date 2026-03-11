import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const EnhancedContact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kkharatdhananjay@gmail.com",
      color: "from-orange-500 to-red-500",
      href: "mailto:kkharatdhananjay@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9322339303",
      color: "from-blue-500 to-cyan-500",
      href: "tel:9322339303",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Aurangabad, Maharashtra",
      color: "from-green-500 to-emerald-500",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  // EMAIL SEND FUNCTION
  const sendEmail = (e: any) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_zv5yq5n",
        "template_e9cnz5j",
        e.target,
        "uhc2RtjoB_poFYsAz"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);

          setFormState({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          setIsSubmitting(false);
          console.log("FAILED...", error);
          alert("Failed to send message.");
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            Get In{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/80 rounded-2xl border border-gray-700"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm font-mono">
                      {info.label}
                    </p>
                    <p className="text-white font-medium font-mono">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              Send a Message
            </h3>

            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-mono">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2 font-mono">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 font-mono ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;