import React from 'react';
import './main.css';

import { Helmet } from 'react-helmet';

import Navbar from '../navbar';
import Footer from '../footer';

import SearchBar from './searchBar';
import NoticeBoard from './noticeBoard';
import OpeningHours from './openingHours';

function Main() {
  return (
    <>
      <Helmet>
            <title>LibraLink - 홈</title>
      </Helmet>
            <div className="main">
              <Navbar />
              <div className="search-section">
                <div className="overlay"></div>
                <div className="main-search-container">
                  <SearchBar />
                </div>
              </div>
              <div className="content-container">
                <NoticeBoard />
                <OpeningHours />
              </div>
              <Footer />
            </div>
    </>
  );
}

export default Main;