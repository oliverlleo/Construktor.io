import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const ProductGallery = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = {
    'Camisetas': products.filter(p => p.name.includes('tshirt') || p.name.includes('social_shirt')),
    'Hoodies': products.filter(p => p.name.includes('hoodie')),
    'Acessórios': products.filter(p => p.name.includes('mousepad') || p.name.includes('mug') || p.name.includes('water_bottle')),
    'Materiais': products.filter(p => p.name.includes('business_card') || p.name.includes('presentation') || p.name.includes('linkedin') || p.name.includes('social_media'))
  }

  return (
    <div className="space-y-12">
      {Object.entries(categories).map(([category, items]) => (
        items.length > 0 && (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 construktor-text-gradient">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((product, index) => (
                <motion.div
                  key={product.name}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 text-center">{product.alt}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      ))}

      {/* Modal para visualização ampliada */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedProduct.src}
                alt={selectedProduct.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductGallery

