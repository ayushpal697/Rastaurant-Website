import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from '../Images/banner.jpeg'
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headercontainer">
          <h1>Food website</h1>
          <p>Best food in india</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
