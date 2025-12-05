"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

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
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
          <p className="max-w-xl mt-4 text-muted-foreground">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={itemVariants}
        >
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
              rows={6}
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
    </motion.section>
  );
};

export default Contact;
