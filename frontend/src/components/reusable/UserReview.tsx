import React from 'react';

import styled from 'styled-components';

interface IUserReview {
  img: string;
  username: string;
  comment: string;
}

const Wrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const TextBox = styled.div`
  h3 {
    color: var(--primary);
    font-weight: 400;
  }
  width: 300px;
`;

const UserReview: React.FC<IUserReview> = ({ img, username, comment }) => {
  return (
    <Wrapper>
      <UserImg src={img} alt={comment} />
      <TextBox>
        <h3>{username}</h3>
        <p>{comment}</p>
      </TextBox>
    </Wrapper>
  );
};

export default UserReview;
