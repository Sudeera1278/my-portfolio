"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
    detail: "tharushiparanagama1@gmail.com",
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
      className="w-full py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-2">
                Let's build the future together!
                <Rocket className="h-7 w-7 text-white" />
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you have a groundbreaking project idea, need technical
                expertise, or just want to connect over tech - I'm always
                excited to explore new possibilities.
              </p>
            </div>
            <div className="space-y-6">
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
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-white/5 border border-white/10 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 focus:ring-white/80"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border-white/10 focus:ring-white/80"
                />
              </div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-white/5 border-white/10 focus:ring-white/80"
              />
              <Button
                type="submit"
                className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
