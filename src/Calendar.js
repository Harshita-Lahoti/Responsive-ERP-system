import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

const OrdersCalendar = ({ orderList }) => {
  // State to manage the currently selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to format date strings
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Handler for changing the selected date
  const onChange = (date) => {
    setSelectedDate(date);
  };

  // Filtering the order list based on the selected date
  const filteredOrders = orderList.filter(order => {
    const orderDate = new Date(order.expectedDeliveryDate);
    return orderDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className="calendar">
     <nav className="sidebar">
        <Link to="/dashboard" className='button-link'>Back to Dashboard</Link>
      </nav>
      <h2 className='heading'>Orders Calendar View</h2>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={selectedDate}
        />
      </div>
      <div className="calendar-content">
        {filteredOrders.length === 0 ? (
          <p className='no-order'>No orders available for the selected date.</p>
        ) : (
          filteredOrders.map(order => (
            <div key={order.id} className="product">
              <div className="product-details">
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Customer:</strong> {order.customerName}</p>
                <p><strong>Order Date:</strong> {formatDate(order.orderDate)}</p>
                <p><strong>Expected Delivery:</strong> {formatDate(order.expectedDeliveryDate)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersCalendar;