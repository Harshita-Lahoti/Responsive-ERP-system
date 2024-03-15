import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Order = ({ orderList, setOrderList }) => {
  // State to track the selected order for viewing details
  const [hoveredOrder, setHoveredOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(null);

  // Function to delete an order
  const deleteOrder = (id) => {
    setOrderList(orderList.filter(order => order.id !== id));
  };

  // Function to update order status
  const updateOrderStatus = (id, newStatus) => {
    setOrderList(orderList.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  // Function to handle click on Show Details button
  const toggleDetails = (order) => {
    setShowDetails(showDetails === order.id ? null : order.id); 
  };

  return (
    <div className="order">
      <nav className="sidebar">
        <Link to="/dashboard" className='button-link'>Back to Dashboard</Link>
      </nav>
      <h2 className='heading'>Orders</h2>
      <div className="order-list">
        {/* Display order list */}
        {orderList.map((order) => (
          <div className="order-item" key={order.id} onMouseEnter={() => setHoveredOrder(order)} onMouseLeave={() => setHoveredOrder(null)}>
            <p>Order ID: {order.id}</p>
            <p>Status: {order.status}</p>
            {/* Add buttons for status update and deletion */}
            <div className="order-buttons">
              <button onClick={() => updateOrderStatus(order.id, "Shipped")}>Mark as Shipped</button>
              <button onClick={() => deleteOrder(order.id)}>Delete</button>
              <button onClick={() => toggleDetails(order)}>
                {showDetails === order.id ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            {/* Display order details when the corresponding Show Details button is clicked */}
            {showDetails === order.id && (
              <div className='my-element'>
                 <div className="order-details">
                  <h3>Order Details</h3>
                  <p>Customer Name: {order.customerName}</p>
                  <p>Order Date: {order.orderDate}</p>
                  <p>Expected Delivery Date: {order.expectedDeliveryDate}</p>
              </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;