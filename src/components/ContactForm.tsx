import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+92 (0347) 120-2545',
      action: 'https://wa.me/15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@alisteel.com',
      action: 'mailto:contact@alisteel.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Show Room: Shop No: R-541/16 Water Pump Glass Market F.B Area Karachi',
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
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Phone</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
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
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-steel-600 hover:bg-steel-700 md:py-4 md:text-lg md:px-10"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
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