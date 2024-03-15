import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Products = ({ productList, setProductList }) => {
  // State for new product inputs
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0
  });

  // State for editing product
  const [editProduct, setEditProduct] = useState(null);

  // Function to handle input change for editing product
  const handleEditProductChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  // State for showing the add product form
  const [showAddForm, setShowAddForm] = useState(false);

  // Function to handle input change for new product
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Function to add a new product
  const addProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stockQuantity) {
      alert("Please fill in all fields before adding a product.");
      return; 
    }
  
    // Add the new product to the list
    setProductList([...productList, { ...newProduct, id: Date.now() }]);
  
    // Clear input fields after adding product
    setNewProduct({ name: '', category: '', price: 0, stockQuantity: 0 });

    // Hide the "Add Product" form after adding a new product
    setShowAddForm(false);
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  // Function to set product for editing
  const editProductHandler = (product) => {
    setEditProduct(product);
  };

  // Function to update product
  const updateProduct = () => {
    setProductList(productList.map((product) => (product.id === editProduct.id ? editProduct : product)));
    setEditProduct(null); 
  };

  // Function to toggle showing the add product form
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="products">
      <nav className="sidebar">
        <Link to="/dashboard" className='button-link'>Back to Dashboard</Link>
      </nav>
      <h2 className='heading'>Products</h2>

      {/* Add Product button */}
      <div className="add-product-button-container">
        <button className="add-product-button" onClick={toggleAddForm}>Add Product</button>
      </div>

      {/* Show add product form if showAddForm is true */}
      {showAddForm && (
        <div className="add-product-container">
          <div className="add-product">
            <h3>Add New Product</h3>
            {/* Form for adding a new product */}
            <div>
              <label>Name:</label>
              <input type="text" required name="name" placeholder={newProduct.name || "Name"} onChange={handleNewProductChange} />
            </div>
            <div>
              <label>Category:</label>
              <input type="text" required name="category" placeholder={newProduct.category || "Category"} onChange={handleNewProductChange} />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" required name="price" placeholder={newProduct.price || "Price"} onChange={handleNewProductChange} />
            </div>
            <div>
              <label>Stock Quantity:</label>
              <input type="number" required name="stockQuantity" placeholder={newProduct.stockQuantity || "Stock Quantity"} onChange={handleNewProductChange} />
            </div>
            <button onClick={addProduct}>Add Product</button>
          </div>
        </div>
      )}

      {/* Display existing product list */}
      <div className="product-list">
        {productList.map((product) => (
          <div className="product" key={product.id}>
            {editProduct && editProduct.id === product.id ? (
              <div className="edit-product-form">
                {/* Edit form for the selected product */}
                <div>
                  <label>Name:</label>
                  <input type="text" name="name" required value={editProduct.name} onChange={handleEditProductChange} />
                </div>
                <div>
                  <label>Category:</label>
                  <input type="text" name="category" required value={editProduct.category} onChange={handleEditProductChange} />
                </div>
                <div>
                  <label>Price:</label>
                  <input type="number" name="price" required value={editProduct.price} onChange={handleEditProductChange} />
                </div>
                <div>
                  <label>Stock Quantity:</label>
                  <input type="number" name="stockQuantity" required value={editProduct.stockQuantity} onChange={handleEditProductChange} />
                </div>
                <button onClick={updateProduct}>Update</button>
              </div>
            ) : (
              <div>
                <p>Name: {product.name}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Stock Quantity: {product.stockQuantity}</p>
                <div>
                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                  <button onClick={() => editProductHandler(product)}>Edit</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;