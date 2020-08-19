import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/Card';
import Layout from '../../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <h1>My online shop</h1>
      <div>
        <h2>Home Page</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Layout>
  );
};

export default HomePage;
