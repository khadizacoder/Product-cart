import './App.css'
import { Products } from './components/Products'

function App() {

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 59.99,
      description: 'High-quality sound and comfortable fit.',
      image: 'https://nlink.at/XYpN'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 99.99,
      description: 'Track your fitness and stay connected.',
      image: 'https://nlink.at/YaSS'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 39.99,
      description: 'Portable and powerful sound anywhere.',
      image: 'https://nlink.at/izLA'
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 29.99,
      description: 'Precision and speed for serious gamers.',
      image: 'https://nlink.at/7FyV'
    },
    {
      id: 5,
      name: 'LED Desk Lamp',
      price: 19.99,
      description: 'Adjustable lighting for any workspace.',
      image: 'https://nlink.at/dwRx'
    },
    {
      id: 6,
      name: 'USB-C Charger',
      price: 14.99,
      description: 'Fast charging for your devices.',
      image: 'https://nlink.at/39CW'
    },
    {
      id: 7,
      name: 'Laptop Stand',
      price: 24.99,
      description: 'Ergonomic design for better posture.',
      image: 'https://nlink.at/Nnja'
    },
    {
      id: 8,
      name: 'Noise Cancelling Earbuds',
      price: 49.99,
      description: 'Focus on your music, not the noise.',
      image: 'https://nlink.at/iJL6'
    },
    {
      id: 9,
      name: 'Portable SSD',
      price: 79.99,
      description: 'Fast and reliable storage on the go.',
      image: 'https://nlink.at/9QZt'
    },
    {
      id: 10,
      name: 'Action Camera',
      price: 129.99,
      description: 'Capture every adventure in HD.',
      image: 'https://nlink.at/1s7k'
    }
  ];


  return (
    <>
      <Products products={products} />
    </>
  )
}

export default App
