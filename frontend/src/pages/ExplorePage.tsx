import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navigation/Navbar';
import SearchBox from '../components/Navigation/SearchBox';

const ExplorePage = () => {
  return (
    <>
      <Navbar>
        <SearchBox />
      </Navbar>
      
      <Footer />
    </>
  );
};

export default ExplorePage;
