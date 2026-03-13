import styled from "styled-components";

export const Screen = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 10.5rem;

    @media (max-width: 768px) {
        padding: 24px 20px 32px;
        height: auto;
        min-height: 100vh;
    }
`;


export const Content = styled.div`
    position: relative;
    height: 100%;
    z-index: 1;
`;

export const CircleWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Years = styled.div`
    position: relative;
    z-index: -1;
    font-size: 200px;
    font-weight: 700;
    line-height: 1;
    display: flex;
    gap: 64px;

    span:first-child {
        color: var(--blue);
    }
    span:last-child {
        color: var(--pink);
    }

    @media (max-width: 768px) {
        font-size: 64px;
        gap: 24px;
        justify-content: center;
    }
`;

export const TimeLineContainer = styled.div`
    position: relative;
    height: 70%;

    @media (max-width: 768px) {
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

export const InfoContainer = styled.div`
    position: relative;
    height: 100%;
    z-index: 1;

    @media (max-width: 768px) {
        height: auto;
    }
`;

export const Header = styled.div`
    display: flex;
    height: fit-content;
    gap: 4.8rem;

    @media (max-width: 768px) {
        gap: 12px;
    }

`
export const ButtonContainer = styled.div`
    height: 50%;
    padding-left: 4.8rem;
    display: flex;
    align-items: end;

    @media (max-width: 768px) {
        padding-left: 0;
        margin-top: 16px;
        height: auto;
        align-items: flex-start;
    }
`

export const TextContainer = styled.div`
    height: 50%;

    @media (max-width: 768px) {
        height: auto;
    }
`

export const GradientBar = styled.div`
    width: 4px;
    background: linear-gradient(180deg, var(--blue), var(--pink));
    border-radius: 2px;

    @media (max-width: 768px) {
        height: 48px;
    }
`;

export const HeaderText = styled.div`

    p {
        font-size: 3.5rem;
        margin: 0;
        font-weight: 700;
        color: var(--black-blue);
    }

    @media (max-width: 768px) {
        p { font-size: 24px; }
    }
`

export const CircleContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    @media (max-width: 768px) {
        position: static;
        transform: none;
        margin-top: 16px;
        width: 100%;
    }
`;

export const TopicTitle = styled.div`
    display: none;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 600;
    color: var(--black-blue);

    @media (max-width: 768px) {
        text-align: left;
        display: block;
    }
`;

export const MobileNavRow = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 20px;
    }
`;

export const Dots = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Dot = styled.div<{ $active?: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? "#42567A" : "#D4DBE5")};
`;

export const BottomRow = styled.div`
    margin-top: 3.5rem;

    @media (max-width: 768px) {
        margin-top: 16px;
    }
`;

export const MobileDivider = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        height: 1px;
        background: rgba(48, 62, 88, 0.2);
        margin: 16px 0;
    }
`;
