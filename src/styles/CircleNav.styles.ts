import styled from "styled-components";

export const Circle = styled.div`
    position: relative;
    width: 536px;
    height: 536px;
    border: 1px solid var(--grid);
    border-radius: 50%;
    margin: 40px auto;
    transform-origin: 50% 50%;
`;

export const ActivePoint = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid var(--grid);
    background:  #f3f8fb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: var(--black-blue);
    transform: translate(-50%, -50%);
`;

export const PointLabel = styled.div<{ $visible?: boolean }>`
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(3rem, -50%);
    white-space: nowrap;
    pointer-events: none;
    font-size: 14px;
    color: var(--black-blue);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: opacity 0.2s ease, transform 0.2s ease;
    font-weight: 700;
    font-size: 1.25rem;
`;

export const Point = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%) translate(var(--x), var(--y)) rotate(calc(-1 * var(--rot)));
    cursor: pointer;

    span {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #2a3b4d;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-50%, -50%);
    }

`;
