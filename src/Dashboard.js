import React from 'react';
import { Link } from 'react-router-dom';
import productIcon from './product.png';
import orderIcon from './order.png';
import Icon from './logo.jpg';

const Dashboard = ({ productList, orderList }) => {
  // Calculate total number of products
  const totalProducts = productList.length;

  // Calculate total number of orders
  const totalOrders = orderList.length;

  return (
    <div className="dashboard">
      <h2 className='heading'><img className='logoimg' src={Icon} alt="Icon" />Dashboard</h2>
      <div className="dashboard-info">
        <div className="info-box product-info">
          <div className="info-content">
            <img src={productIcon} alt="Product Icon" />
          </div>
          
          <div className="info-text">
            <p className="info-title">Total Number Of Products</p>
            <p className="info-count">{totalProducts}</p>
          </div>
        </div>
        <div className="info-box order-info">
          <div className="info-content">
            <img src={orderIcon} alt="Order Icon" />
          </div>
          <div className="info-text">
            <p className="info-title">Total Number Of Orders</p>
            <p className="info-count">{totalOrders}</p>
          </div>
        </div>
      </div>
      <div className="dashboard-links">
        <Link className="dashboard-link" to="/products">Manage Products</Link>
        <Link className="dashboard-link" to="/orders">Manage Orders</Link>
        <Link className="dashboard-link" to="/calendar">Calendar View</Link>
      </div>
    </div>
  );
}

export default Dashboard;