import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const ProductTable = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Retrieve the authentication token from local storage
        const authToken = localStorage.getItem('authToken');
        console.log(authToken);

        // Make a GET request to fetch the cart data with the authentication token included in the request header
        const response = await axios.get('http://localhost:5000/api/cartr/getcart', {
          headers: {
            "auth-token": authToken // Include the authentication token in the request header
          }
        });

        const cartItems = response.data.items;

        const updatedProducts = cartItems.map(item => ({
          id: item.product._id,
          title: item.product.title,
          price: item.product.price,
          quantity: item.quantity,
          image: item.product.images[0]
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const calculateTotal = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice.toFixed(2);
  };


  const handleCheckout = async () => {
    try {
      const authToken = localStorage.getItem('authToken'); // Retrieve authToken from localStorage
  
      const options = {
        key: "rzp_test_X8pn5QCCyLJE7N",
        amount: calculateTotal() * 100, // amount in paisa
        currency: "INR",
        name: "Your Company Name",
        description: "Purchase Description",
        image: "https://your-company-logo.png",
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "Customer Contact Number",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#528FF0",
        },
        handler: async (response) => {
          // If payment is successful
          if (response.razorpay_payment_id) {
            // Move cart items to orders
            const cartItems = products.map(product => ({
              product: product.id,
              quantity: product.quantity,
              totalPrice: product.price * product.quantity
            }));
  
            const orderData = {
              items: cartItems,
              totalPrice: calculateTotal(),
              shippingAddress: "User's Shipping Address", // Replace with actual user's shipping address
              paymentMode: "Razorpay",
            };
  
            // Make a POST request to place the order with the authToken included in the request headers
            const response = await axios.post('http://localhost:5000/api/order/place-order', orderData, {
              headers: {
                "auth-token": authToken // Include the authentication token in the request header
              }
            });
  
            // Show success message
            alert('Payment successful! Your order has been placed.');
  
            // Clear the cart after successful payment
            setProducts([]);
          } else {
            // Payment failed
            alert('Payment failed. Please try again.');
          }
        }
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle payment error (e.g., display error message)
      alert('Payment failed. Please try again.');
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="bg-center bg-cover h-screen bg-no-repeat h-[89vh] bg-[url('https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="py-4"></div>
        <div className="container bg-white bg-opacity-90 mt-[-40] h-[70vh] py-4">
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

          <div className="mt-4 flex justify-end">
            <div className="text-lg font-semibold">Total: ${calculateTotal()}</div>
          </div>

          <button onClick={handleCheckout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
