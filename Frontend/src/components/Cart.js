import React, { useState } from 'react';
import Navbar from './Navbar';

const ProductTable = (props) => {
  const [products, setProducts] = useState([
    { 
      id: 1,
      title: "Product 1",
      price: 19.99,
      quantity: 2,
      image: "https://cdn.dummyjson.com/product-images/3/1.jpg"
    },
    { 
      id: 2,
      title: "Product 2",
      price: 24.99,
      quantity: 1,
      image: "https://cdn.dummyjson.com/product-images/2/3.jpg"
    }
  ]);

  // Calculate total price of all products
  const calculateTotal = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <>
    <Navbar/>
    <div className=" bg-center bg-cover h-screen bg-no-repeat h-[89vh] bg-[url('https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    <div className="py-4"></div>
    <div className="container   bg-white bg-opacity-90 mt-[-40] h-[70vh] py-4">
      <h2 className="text-xl font-semibold mb-4">{props.heading}</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={product.image} alt={product.title} className="h-12 w-12" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{product.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{product.price.toFixed(2)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{product.quantity}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Section */}
      <div className="mt-4 flex justify-end">
        <div className="text-lg font-semibold">Total: ${calculateTotal()}</div>
      </div>

      {/* Checkout Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Checkout
      </button>
    </div>
    </div>
    </>
  );
}

export default ProductTable;
