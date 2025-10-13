'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import logoTemp from '@/assets/logoTemp.png';

interface HeroProps {
  /** Restaurant name or main title */
  title?: string;
  /** Subtitle or description */
  description?: string;
  /** Main CTA button text */
  ctaText?: string;
  /** Main CTA button link */
  ctaLink?: string;
  /** Secondary CTA button text */
  secondaryCtaText?: string;
  /** Secondary CTA button link */
  secondaryCtaLink?: string;
  /** Background image URL */
  backgroundImage?: string;
  /** Background video URL (MP4) */
  backgroundVideo?: string;
  /** Optional featured dish image */
  featuredImage?: string;
  /** Optional restaurant logo */
  logoImage?: string | StaticImageData;
  /** Optional opening hours */
  openingHours?: string;
  /** Optional location text */
  location?: string;
}

export function Hero({
  title = "Restaurant Name",
  description = "Experience culinary excellence in every bite. Join us for an unforgettable dining experience.",
  ctaText = "Reserve a Table",
  ctaLink = "/reservations",
  secondaryCtaText = "View Menu",
  secondaryCtaLink = "/menu",
  backgroundImage = "/restaurant-bg.jpg", // Default background image path
  backgroundVideo,
  featuredImage,
  logoImage = logoTemp,
  openingHours = "Mon-Sun: 11am-10pm",
  location = "123 Restaurant Street",
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
      
      {/* Background video or image */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Restaurant ambiance"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      )}

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 container mx-auto px-4 py-20 text-center text-white"
      >
        {/* Logo */}
        {logoImage && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.5,
              ease: "easeOut"
            }}
            className="mb-8"
          >
            <Image
              src={logoImage}
              alt="Restaurant logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </motion.div>
        )}

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 1,
              ease: "easeOut"
            }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 1.2,
              ease: "easeOut"
            }}
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {/* Featured image (if provided) */}
          {featuredImage && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <Image
                src={featuredImage}
                alt="Featured dish"
                width={400}
                height={300}
                className="mx-auto rounded-lg shadow-xl"
              />
            </motion.div>
          )}

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href={ctaLink}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              {ctaText}
            </motion.a>
            <motion.button
              onClick={() => {
                document.getElementById('menu')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-colors"
            >
              {secondaryCtaText}
            </motion.button>
          </div>

          {/* Info footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-300"
          >
            {openingHours && (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{openingHours}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{location}</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
