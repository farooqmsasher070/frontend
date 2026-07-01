import axios from 'axios';
import type { Product } from '../store/productStore';

const API_URL = 'https://api.example.com'; // Replace with your actual API

export const productService = {
  async getProducts(): Promise<Product[]> {
    try {
      // For now, return mock data
      // In production, replace with actual API call:
      // const response = await axios.get(`${API_URL}/products`);
      // return response.data;
      return [
        {
          id: '1',
          name: 'Fresh Chicken Breast',
          price: 250,
          image: 'https://via.placeholder.com/200',
          category: 'Chicken',
          rating: 4.5,
          description: 'High-quality fresh chicken breast',
        },
        {
          id: '2',
          name: 'Mutton Curry Cut',
          price: 450,
          image: 'https://via.placeholder.com/200',
          category: 'Mutton',
          rating: 4.2,
          description: 'Tender mutton cut for curry',
        },
        {
          id: '3',
          name: 'Fresh Salmon',
          price: 600,
          image: 'https://via.placeholder.com/200',
          category: 'Seafood',
          rating: 4.8,
          description: 'Premium fresh salmon fillet',
        },
      ];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  async searchProducts(query: string): Promise<Product[]> {
    const products = await this.getProducts();
    return products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    const products = await this.getProducts();
    if (category === 'All') return products;
    return products.filter((p) => p.category === category);
  },

  async getProductById(id: string): Promise<Product | null> {
    const products = await this.getProducts();
    return products.find((p) => p.id === id) || null;
  },
};
