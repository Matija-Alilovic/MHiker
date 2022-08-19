import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export interface ICategory {
  name: string;
  img: string;
  categoryValue: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  border: 2px solid var(--primary);
  width: 8rem;
  background-color: var(--text-primary);
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  overflow: hidden;

  span {
    font-weight: 600;
    font-size: 1.2rem;
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
      style={{ backgroundColor: `${selected ? '#202e5c' : '#f3f3f3'}` }}
    >
      <span style={{ color: `${selected ? '#f3f3f3' : '#202e5c'}` }}>
        {name}
      </span>
    </Wrapper>
  );
};

export default Category;
