import styled from "styled-components";

export const NavRow = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Counter = styled.div`
    font-size: 0.8rem;
    color: var(--black-blue);
`;

export const NavButtons = styled.div`
    display: flex;
    gap: 12px;
`;

export const NavButton = styled.button`
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
    border: 1px solid #c7d3e0;
    background: transparent;
    color: #5c6f82;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;
