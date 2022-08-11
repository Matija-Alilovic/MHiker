import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";
import SearchBox from "../components/Navigation/SearchBox";
import Category from "../components/reusable/Category";

import location from "../assets/img/trials/trial-2.jpg";

const Wrapper = styled.div``;

const Header = styled.div`
  padding-top: 10rem;
  margin-bottom: -6rem;
  color: var(--primary);
  text-align: center;

  h2 {
    font-size: 3.8rem;
  }

  span {
    display: block;
    font-size: 1.2rem;
    color: var(--text);
  }
`;

const Title = styled.h2`
  margin-top: 10rem;
  margin-bottom: 4rem;
  color: var(--primary);
  font-size: 2.8rem;
  font-weight: 600;
  text-align: left;
  padding: 1.5rem 3rem;
  background-color: #f3f3f3;
  box-shadow: rgba(100, 100, 111, 0.13) 0px 7px 29px 0px;

  span {
    padding: 0;
    margin: 0;
    display: block;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-silver);
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const ExplorePage = () => {
  return (
    <>
      <Navbar>
        <SearchBox />
      </Navbar>
      <Header>
        <span>Reviews will help you choose</span>
        <h2>Discover Trails</h2>
      </Header>
      <Title>
        Categories <br />
        <span>Select Correct Category</span>
      </Title>
      <Categories>
        <Category key={1} name={"America"} img={location} categoryValue={1} />
        <Category key={1} name={"India"} img={location} categoryValue={1} />
        <Category key={1} name={"Serbia"} img={location} categoryValue={1} />
        <Category key={1} name={"Indijska"} img={location} categoryValue={1} />
        <Category key={1} name={"Indijska"} img={location} categoryValue={1} />
      </Categories>

      <Title>
        Locations <br />
        <span>Select Correct Category</span>
      </Title>

      <Footer />
    </>
  );
};

export default ExplorePage;
