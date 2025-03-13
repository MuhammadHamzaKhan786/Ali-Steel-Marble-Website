import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Steel Railings & Windows',
    category: 'Railings & Windows',
    images: [
      '/railing4.jpg',
      '/railing2.jpg',
      '/railing3.jpg',
      '/railing.jpg',
      '/railing5.jpg',
      '/railing6.jpg',
      '/railing7.jpg',
      '/railing8.jpg',
      '/railing9.jpg',
      '/railing10.jpg',
      '/railing11.jpg',
      '/railing12.jpg',
      '/railing13.jpg',
      '/railing14.jpg',
      '/railing15.jpg',
      '/railing16.jpg',
      '/railing17.jpg',
      '/railing18.jpg',
      '/railing19.jpg',
      '/railing20.jpg',
    ]
  },
  {
    id: 2,
    title: 'Marble Balls',
    category: 'Marble',
    images: [
      '/marble.png',
      '/marble1.png',
      '/marble2.png',
      '/marble3.png',
      '/marble4.png',
      '/marble5.png',
      '/marble6.png',
      '/marble7.png',
      '/marble8.png',
      '/marble9.png',
      '/marble10.png',
      '/marble11.png',
      '/marble12.png'
    ]
  },
  {
    id: 3,
    title: 'Steel Arts Interiors',
    category: 'Arts Interiors',
    images: [
      '/art1.png',
      '/art2.png',
      '/art3.png',
      '/art4.png',
      '/art5.png',
      '/art6.png',
      '/art7.png',
      '/art8.png',
      '/art9.png',
      '/art10.png',
      '/art11.png',
      '/art12.png',
      '/art13.png',
      '/art14.png',
      '/art15.png',
      '/art16.png',
    ]
  }
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    images: string[];
  }>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Preload images for the current project
  useEffect(() => {
    if (selectedProject) {
      const preloadImage = (src: string) => {
        if (!loadedImages.has(src)) {
          const img = new Image();
          img.src = src;
          setLoadedImages(prev => new Set([...prev, src]));
        }
      };

      // Preload all images for the current project
      selectedProject.images.forEach(preloadImage);
    }
  }, [selectedProject, loadedImages]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const previousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section className="section-padding bg-gray-100" id="gallery">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="heading text-center text-black">Our Projects</h2>
        <p className="subheading text-center text-gray-600">
          Discover our finest work in steel and marble craftsmanship
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 transition-opacity opacity-0 hover:opacity-100">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-200">{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  {project.images.slice(1, 4).map((image, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 2}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={previousImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image */}
            <div className="max-w-4xl w-full">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                {selectedProject.title} - Image {currentImageIndex + 1} of {selectedProject.images.length}
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
