"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";
import food1 from "@/assets/Food1jpg.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: food1, alt: 'Delicious dish' },
   { src: food1, alt: 'Delicious dish' },
    { src: food1, alt: 'Delicious dish' },
     { src: food1, alt: 'Delicious dish' },
      { src: food1, alt: 'Delicious dish' },
       { src: food1, alt: 'Delicious dish' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="gallery" className="py-20 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-background/80 backdrop-blur-sm"></div>
      <div className="absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-transparent to-background/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            Our Gallery
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Take a visual journey through our culinary excellence and warm ambiance
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-64 overflow-hidden rounded-lg group shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1"
              onClick={() => {
                setSelectedImage(image);
                setIsOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background/50 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-foreground text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Click to Enlarge</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog 
        open={isOpen} 
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-[80vh]"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 z-10"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;