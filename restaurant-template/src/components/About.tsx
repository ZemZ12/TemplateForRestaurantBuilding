'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import RestaurantImg from '@/assets/Res.jpg';
import Micheal from '@/assets/Micheal.jpg';

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mission?: string;
  values?: string[];
  chefName?: string;
  chefTitle?: string;
  chefQuote?: string;
  chefImage?: string;
  restaurantImage?: StaticImageData;
  micheal?: StaticImageData;
  yearEstablished?: string;
}

export function About({
  title = "Our Story",
  subtitle = "A Tradition of Excellence",
  description = "Founded with a passion for culinary excellence, our restaurant has been serving exceptional dishes for over two decades. We combine traditional recipes with modern innovation to create unforgettable dining experiences.",
  mission = "Our mission is to provide an extraordinary dining experience that combines exceptional food, impeccable service, and a warm, inviting atmosphere.",
  values = [
    "Fresh, locally-sourced ingredients",
    "Sustainable practices",
    "Traditional recipes with modern twists",
    "Warm, personalized service"
  ],
  chefName = "Michael Laurent",
  chefTitle = "Executive Chef",
  chefQuote = "Every dish tells a story, and every meal is a journey through flavors and traditions.",
  chefImage = "/chef.jpg",
  restaurantImage = RestaurantImg,
  micheal = Micheal,
  yearEstablished = "2003"
}: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed">
              {description}
            </p>
            <div className="h-px bg-gradient-to-r from-primary/50 to-transparent my-8" />
            <p className="text-lg leading-relaxed">
              {mission}
            </p>
          </motion.div>

          <motion.div 
            variants={rightItemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src={restaurantImage}
              alt="Restaurant interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
               
              <p className="text-center text-muted-foreground">{value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chef Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={itemVariants}
            className="relative h-[500px] rounded-2xl overflow-hidden order-2 md:order-1"
          >
             <Image
              src={micheal}
              alt="Restaurant interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div variants={rightItemVariants} className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">{chefName}</h3>
              <p className="text-xl text-primary">{chefTitle}</p>
              <div className="h-px bg-gradient-to-r from-primary/50 to-transparent my-6" />
              <blockquote className="text-lg italic text-muted-foreground">
                "{chefQuote}"
              </blockquote>
            </div>
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Established in {yearEstablished}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
