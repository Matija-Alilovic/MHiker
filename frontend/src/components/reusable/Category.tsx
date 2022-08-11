import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export interface ICategory {
  name: string;
  img: string;
  categoryValue: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 4rem;
  text-align: center;
  gap: 1rem;
  border-radius: 12px;

  background-color: var(--text-primary);
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  overflow: hidden;

  img {
    width: 15rem;
    height: 10rem;
    object-fit: contain;
  }

  span {
    font-weight: 400;
    font-size: 2rem;
  }

  :hover {
    background-color: var(--primary);
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.35) 0px 7px 29px 0px;
  }
`;

const Category: React.FC<ICategory> = ({ name, img, categoryValue }) => {
  const [selected, setSelected] = useState(false);

  const dispatch: any = useDispatch();

  useEffect(() => {
    //selected && dispatch(filterProducts(categoryValue));
    //!selected && dispatch(clearFilters(categoryValue));
  }, [selected]);

  return (
    <Wrapper
      onClick={() => {
        setSelected(!selected);
      }}
      style={{ backgroundColor: `${selected ? "#202e5c" : "#f3f3f3"}` }}
    >
      <img src={img} alt={name} />
      <span style={{ color: `${selected ? "#f3f3f3" : "#202e5c"}` }}>
        {name}
      </span>
    </Wrapper>
  );
};

export default Category;
