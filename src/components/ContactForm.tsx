'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create the email content
      const emailContent = `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Message: ${data.message}
      `;

      // Open the default email client
      window.location.href = `mailto:info@alisteel.com?subject=Contact Form Submission from ${data.name}&body=${encodeURIComponent(emailContent)}`;

      // Show success message
      setSubmitStatus('success');
      // Reset form
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+92 312-873-0933',
      action: 'https//wa.me/923128730933'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@alisteel.com',
      action: 'mailto:info@alisteel.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Main Branch: Shop No: 264/265,B Road, Liaquatabad, Karachi, Pakistan',
      action: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Contact Us</h2>
          <p className="subheading text-center">
            Get in touch for your next project
          </p>

          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-2"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-2"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Phone</label>
                  <input
                    type="tel"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                        message: 'Invalid phone number'
                      }
                    })}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-2"
                    placeholder="+92 300-000-0000"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-2"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="text-green-500 text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-500 text-sm">
                    Failed to send message. Please try again or contact us directly.
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-steel-600 hover:bg-steel-700 disabled:opacity-50 disabled:cursor-not-allowed md:py-4 md:text-lg md:px-10"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            <div className="space-y-8">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-black rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.content}</p>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
