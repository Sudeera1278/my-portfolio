"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <motion.section
      id="contact"
      className="w-full py-20 md:py-32 bg-muted/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build the future together! 🚀
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you have a groundbreaking project idea, need technical
              expertise, or just want to connect over tech - I'm always excited
              to explore new possibilities.
            </p>
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
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Send me a message 💌
            </h2>
            <p className="text-muted-foreground mb-8">
              I typically respond within 24 hours
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Sudeera Dilshan"
                            {...field}
                            className="bg-transparent border-white/20 focus:border-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="sudeeradilshan166@gmail.com"
                            {...field}
                            className="bg-transparent border-white/20 focus:border-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Let's work together!"
                          {...field}
                          className="bg-transparent border-white/20 focus:border-white/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Hello! I'd like to discuss a potential project with you..."
                          {...field}
                          className="bg-transparent border-white/20 focus:border-white/50 min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold text-base py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
