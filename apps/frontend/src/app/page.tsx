import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const featuredCollections = [
    {
      id: 'new-arrivals',
      title: 'New Arrivals',
      description: 'Discover our latest collection',
      image: '/collections/new-arrivals.jpg',
      href: '/collections/new-arrivals',
    },
    {
      id: 'mens-essentials',
      title: 'Men\'s Essentials',
      description: 'Timeless pieces for the modern man',
      image: '/collections/mens-essentials.jpg',
      href: '/collections/men',
    },
    {
      id: 'womens-collection',
      title: 'Women\'s Collection',
      description: 'Elegant styles for every occasion',
      image: '/collections/womens-collection.jpg',
      href: '/collections/women',
    },
    {
      id: 'accessories',
      title: 'Accessories',
      description: 'Complete your look with our accessories',
      image: '/collections/accessories.jpg',
      href: '/collections/accessories',
    },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure transactions',
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Carefully selected materials',
    },
  ];

  const bestSellers = [
    {
      id: 1,
      title: 'Classic Oxford Shirt',
      price: 89,
      originalPrice: 120,
      image: '/products/oxford-shirt.jpg',
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      title: 'Tailored Chinos',
      price: 99,
      originalPrice: 139,
      image: '/products/chinos.jpg',
      rating: 4.7,
      reviews: 95,
    },
    {
      id: 3,
      title: 'Merino Wool Sweater',
      price: 149,
      originalPrice: 199,
      image: '/products/sweater.jpg',
      rating: 4.8,
      reviews: 67,
    },
    {
      id: 4,
      title: 'Leather Belt',
      price: 59,
      originalPrice: 79,
      image: '/products/belt.jpg',
      rating: 4.6,
      reviews: 203,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-in">
            Elevate Your Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-in">
            Discover premium clothing for modern professionals. Experience minimalist luxury with our carefully curated collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Featured Collections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections designed for the modern professional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((collection) => (
              <Link key={collection.id} href={collection.href}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift cursor-pointer">
                  <div className="aspect-square bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <h3 className="text-xl font-heading font-semibold mb-2">{collection.title}</h3>
                        <p className="text-sm">{collection.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Best Sellers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most loved pieces by customers like you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-accent text-primary px-2 py-1 text-sm font-semibold rounded z-10">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-transparent'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Stay in Style</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to receive exclusive offers, new product updates, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
