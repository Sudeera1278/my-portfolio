"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-white" />,
    title: "Email",
    detail: "sudeeradilshan166@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-white" />,
    title: "Phone",
    detail: "+94 74 357 2773",
  },
  {
    icon: <MapPin className="h-5 w-5 text-white" />,
    title: "Location",
    detail: "Malabe, Sri Lanka",
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="w-full py-20 md:py-32 bg-muted/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or just want to say hello? Feel free to
                reach out.
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
