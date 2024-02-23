import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddProductPage() {
    const categories = [
        "smartphones",
        "laptops"
    ];

    const [selectedCategory, setSelectedCategory] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the API when the component mounts
        axios.get('https://dummyjson.com/products')
            .then(response => {
                // Assuming response.data is an object with a 'products' property
                const productsData = response.data.products;
                if (Array.isArray(productsData)) {
                    const filteredProducts = productsData.filter(product => product.category === selectedCategory);
                    setProducts(filteredProducts);
                } else {
                    console.error('Invalid data structure: products is not an array');
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [selectedCategory]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        const selectedProduct = products.find(product => product.title === e.target.value);
        if (selectedProduct) {
            setDescription(selectedProduct.description);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission
        console.log('Selected Category:', selectedCategory);
        console.log('Title:', title);
        console.log('Price:', price);
        console.log('Description:', description);
        // You can add logic to send this data to your backend for further processing
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="categorySelect">Category:</label>
                <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select Category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select><br />
                <label htmlFor="titleSelect">Title:</label>
                <select id="titleSelect" value={title} onChange={handleTitleChange}>
                    <option value="">Select Title</option>
                    {products.map(product => (
                        <option key={product.title} value={product.title}>{product.title}</option>
                    ))}
                </select><br />
                <label htmlFor="priceInput">Price:</label>
                <input id="priceInput" type="number" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                <label htmlFor="descriptionInput">Description:</label>
                <textarea id="descriptionInput" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProductPage;
