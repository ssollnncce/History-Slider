import styled from "styled-components";

export const SliderWrap = styled.div`
  width: 100%;
  width: 100%
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;

  .swiper {
    flex: 1 1 auto;
    min-width: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 12px;
  }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const CardYear = styled.div`
    font-weight: 700;
    color: #2f66ff;
    font-size: 18px;
    font-weight: thin;
`;

export const CardText = styled.div`
    font-size: 1.25rem;
    min-width: 16rem;
    color: var(--black-blue);
    font-weight: thin;

    @media (max-width: 768px) {
        font-size: 14px;
        width: auto;
    }
`;

export const ArrowBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: var(--year-blue);
    border: none;
    background-color: white;
`;

export const ArrowContainer = styled.div`
    width: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
