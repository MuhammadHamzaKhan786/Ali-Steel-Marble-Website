'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, PenTool as Tool } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Tool, value: '1000+', label: 'Projects Completed' }
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="heading">About Ali Steel</h2>
            <div className="flex items-center space-x-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/owner.png"
                  alt="Owner Picture"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover aspect-square border-4 border-steel-600 shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-steel-600/20 to-transparent" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Ali Zia</h3>
                <p className="text-steel-400">Founder & CEO</p>
              </div>
            </div>
            <p className="text-gray-400">
              Welcome to Ali Steel, your trusted partner for high-quality marble and steel railing fitting works. With years of expertise in the industry, we specialize in designing and installing durable, stylish, and precision-engineered steel railings and marble structures that enhance the beauty and safety of your spaces. Our skilled team ensures that every project is completed with attention to detail, using premium materials and modern techniques to guarantee long-lasting quality.
            </p>
            <p className="text-gray-400">
            At Ali Steel, customer satisfaction is our priority. We offer custom designs, tailored solutions, and seamless installations to match the unique needs of our clients. Whether you need elegant marble work, strong steel railings, or decorative architectural fittings, we are committed to delivering excellence. With a focus on craftsmanship, durability, and innovative designs, we strive to transform spaces with strength, style, and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-steel-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}