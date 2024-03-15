import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './products';
import Order from './order';
import Calendar from './Calendar'; 
import './App.css';

function App() {
  // product list
  const [productList, setProductList] = useState([
    { id: 1, name: "Product 1", category: "Category 1", price: 10.99, stockQuantity: 100 },
    { id: 2, name: "Product 2", category: "Category 2", price: 20.99, stockQuantity: 50 },
    { id: 3, name: "Product 3", category: "Category 1", price: 15.99, stockQuantity: 75 }
  ]);

  // order list
  const [orderList, setOrderList] = useState([
    { id: 1, customerName: "Customer 1", orderDate: "2024-03-08", status: "Pending", expectedDeliveryDate: "2024-03-15" },
    { id: 2, customerName: "Customer 2", orderDate: "2024-03-07", status: "Shipped", expectedDeliveryDate: "2024-03-12" },
    { id: 3, customerName: "Customer 3", orderDate: "2024-03-06", status: "Pending", expectedDeliveryDate: "2024-03-10" }
  ]);

  return (
    <div className="App">
      {/* using react router to navigate to different sections */}
      <Router>
        <Routes>
          <Route path="/Dashboard"  element={<Dashboard productList={productList} orderList={orderList} />} />
          <Route path="/"  element={<Dashboard productList={productList} orderList={orderList} />} />
          <Route path="/products" element={<Products productList={productList} setProductList={setProductList} />} />
          <Route path="/orders" element={<Order orderList={orderList} setOrderList={setOrderList} />} />
          <Route path="/calendar" element={<Calendar orderList={orderList} />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;