import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Hammer, Columns, Heater as Gate, Stars as Stairs } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Custom Steel Work',
    description: 'Bespoke steel fabrication tailored to your specific needs and design preferences.'
  },
  {
    icon: Columns,
    title: 'Marble Installation',
    description: 'Expert marble fitting and installation for floors, walls, and countertops.'
  },
  {
    icon: Gate,
    title: 'Steel Gates & Railings',
    description: 'Elegant and durable steel gates and railings for both residential and commercial properties.'
  },
  {
    icon: Stairs,
    title: 'Staircase Design',
    description: 'Modern staircase solutions combining steel and marble for a stunning aesthetic.'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading text-center">Our Services</h2>
          <p className="subheading text-center">
            Exceptional craftsmanship in steel and marble
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-colors"
              >
                <service.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}