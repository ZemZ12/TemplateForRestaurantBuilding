'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Badge } from './ui/badge';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isSignature?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  description?: string;
}

interface MenuSectionProps {
  title?: string;
  description?: string;
  categories?: MenuCategory[];
  items?: MenuItem[];
}

const defaultCategories: MenuCategory[] = [
  { id: 'starters', name: 'Starters', description: 'Begin your culinary journey' },
  { id: 'mains', name: 'Main Course', description: 'Signature dishes crafted with passion' },
  { id: 'desserts', name: 'Desserts', description: 'Sweet endings to a perfect meal' },
  { id: 'drinks', name: 'Beverages', description: 'Perfectly paired drinks' },
];

const defaultItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Truffle Infused Wild Mushroom Soup',
    description: 'Creamy blend of forest mushrooms with aromatic truffle oil',
    price: '$12',
    category: 'starters',
    isVegetarian: true,
  },
  {
    id: '2',
    name: 'Pan-Seared Scallops',
    description: 'Fresh scallops with citrus butter sauce and micro greens',
    price: '$18',
    category: 'starters',
    isSignature: true,
  },
  {
    id: 's3',
    name: 'Crispy Calamari',
    description: 'Tender calamari rings with spicy aioli and lemon',
    price: '$16',
    category: 'starters',
    isSpicy: true,
  },
  {
    id: 's4',
    name: 'Burrata & Heirloom Tomatoes',
    description: 'Fresh burrata with marinated tomatoes and basil',
    price: '$17',
    category: 'starters',
    isVegetarian: true,
  },
  {
    id: 's5',
    name: 'Duck Liver Pâté',
    description: 'Smooth pâté with brioche and fig jam',
    price: '$19',
    category: 'starters',
    isSignature: true,
  },
  {
    id: 's6',
    name: 'Vietnamese Spring Rolls',
    description: 'Fresh rice paper rolls with prawns and herbs',
    price: '$14',
    category: 'starters',
  },

  // Mains
  {
    id: '3',
    name: 'Grilled Wagyu Ribeye',
    description: '12oz premium wagyu beef with roasted garlic and herbs',
    price: '$65',
    category: 'mains',
    isSignature: true,
  },
  {
    id: '4',
    name: 'Saffron Seafood Risotto',
    description: 'Creamy arborio rice with fresh seafood and saffron',
    price: '$38',
    category: 'mains',
    isSpicy: true,
  },
  {
    id: 'm3',
    name: 'Chilean Sea Bass',
    description: 'Pan-seared sea bass with miso glaze and baby bok choy',
    price: '$45',
    category: 'mains',
    isSignature: true,
  },
  {
    id: 'm4',
    name: 'Wild Mushroom Ravioli',
    description: 'Handmade pasta filled with wild mushrooms and truffle cream',
    price: '$32',
    category: 'mains',
    isVegetarian: true,
  },
  {
    id: 'm5',
    name: 'Rack of Lamb',
    description: 'Herb-crusted lamb with mint pesto and roasted vegetables',
    price: '$48',
    category: 'mains',
  },
  {
    id: 'm6',
    name: 'Thai Red Curry Duck',
    description: 'Crispy duck breast in aromatic red curry with lychees',
    price: '$42',
    category: 'mains',
    isSpicy: true,
  },

  // Desserts
  {
    id: '5',
    name: 'Dark Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla bean ice cream',
    price: '$14',
    category: 'desserts',
    isSignature: true,
  },
  {
    id: '6',
    name: 'Artisanal Cheese Board',
    description: 'Selection of fine cheeses with honey and nuts',
    price: '$22',
    category: 'desserts',
    isVegetarian: true,
  },
  {
    id: 'd3',
    name: 'Crème Brûlée Trio',
    description: 'Classic vanilla, matcha, and lavender crème brûlée',
    price: '$16',
    category: 'desserts',
    isSignature: true,
  },
  {
    id: 'd4',
    name: 'Tiramisu',
    description: 'Traditional Italian tiramisu with mascarpone and coffee',
    price: '$13',
    category: 'desserts',
  },
  {
    id: 'd5',
    name: 'Mango Passion Fruit Pavlova',
    description: 'Crispy meringue with tropical fruits and cream',
    price: '$15',
    category: 'desserts',
  },
  {
    id: 'd6',
    name: 'Green Tea Opera Cake',
    description: 'Layered matcha cake with chocolate ganache',
    price: '$14',
    category: 'desserts',
  },

  // Drinks
  {
    id: '7',
    name: 'Signature House Martini',
    description: 'Premium vodka with a twist of citrus and olive',
    price: '$16',
    category: 'drinks',
    isSignature: true,
  },
  {
    id: '8',
    name: 'Aged Wine Selection',
    description: 'Curated selection of fine wines',
    price: '$12-45',
    category: 'drinks',
  },
  {
    id: 'dr3',
    name: 'Smoked Old Fashioned',
    description: 'Bourbon with maple and aromatic bitters, smoked tableside',
    price: '$18',
    category: 'drinks',
    isSignature: true,
  },
  {
    id: 'dr4',
    name: 'Japanese Whisky Flight',
    description: 'Tasting of three premium Japanese whiskies',
    price: '$35',
    category: 'drinks',
  },
  {
    id: 'dr5',
    name: 'Botanical Gin & Tonic',
    description: 'Craft gin with artisanal tonic and fresh herbs',
    price: '$14',
    category: 'drinks',
  },
  {
    id: 'dr6',
    name: 'Non-Alcoholic Cocktail Selection',
    description: 'Creative alcohol-free cocktails with fresh ingredients',
    price: '$10',
    category: 'drinks',
  },
];

export function MenuSection({
  title = 'Our Menu',
  description = 'Carefully crafted dishes using the finest ingredients',
  categories = defaultCategories,
  items = defaultItems,
}: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
                }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {items
              .filter((item) => item.category === selectedCategory)
              .map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="relative group"
                >
                  <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.name}
                          {item.isSignature && (
                            <Badge variant="default" className="ml-2">
                              Signature
                            </Badge>
                          )}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-lg font-semibold text-primary">
                        {item.price}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {item.isSpicy && (
                        <Badge variant="secondary">Spicy</Badge>
                      )}
                      {item.isVegetarian && (
                        <Badge variant="outline">Vegetarian</Badge>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
