import React, { useState, useRef, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import { segments } from "./data/timeline";
import { Screen, Years, GradientBar, CircleWrap, Content, BottomRow, TimeLineContainer, InfoContainer, Header, TextContainer, ButtonContainer, HeaderText, CircleContainer, MobileDivider, TopicTitle, MobileNavRow, Dots, Dot } from "../src/styles/App.styles";
import { CircleNav } from "./components/CircleNav";
import { NavRow, Counter, NavButtons, NavButton } from "./styles/Controls.styles";
import { EventsSlider } from "./components/EventsSlider";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import ArrowLeft from "./assets/icons/ArrowLeft.svg";
import ArrowRight from "./assets/icons/ArrowRight.svg";

gsap.registerPlugin(TextPlugin);

export const App: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = segments[activeIndex];

    const total = segments.length;

    const goPrev = () => {
        setActiveIndex((i) => Math.max(0, i - 1));
    };

    const goNext = () => {
        setActiveIndex((i) => Math.min(total - 1, i + 1));
    };

    const formatIndex = (i: number) => String(i + 1).padStart(2, "0");
    const formatTotal = (t: number) => String(t).padStart(2, "0");

    const startRef = useRef<HTMLSpanElement | null>(null);
    const endRef = useRef<HTMLSpanElement | null>(null);

    const prevStartRef = useRef<number>(segments[0].startYear);
    const prevEndRef = useRef<number>(segments[0].endYear);

    useEffect(() => {
        gsap.fromTo(
            startRef.current,
            { textContent: prevStartRef.current },
            { textContent: active.startYear, duration: 0.6, snap: { textContent: 1 } }
        );

        gsap.fromTo(
            endRef.current,
            { textContent: prevEndRef.current},
            { textContent: active.endYear, duration: 0.6, snap: {textContent: 1}}
        )

        prevStartRef.current = active.startYear;
        prevEndRef.current = active.endYear;

    }, [activeIndex, active.startYear, active.endYear]);

    return (
      <>
        <GlobalStyle />
        <Screen>
            <TimeLineContainer>
                <InfoContainer>
                    <TextContainer>
                        <Header>
                            <GradientBar />
                            <HeaderText>
                                <p>Исторические <br /> даты</p>
                            </HeaderText>
                        </Header>
                    </TextContainer>
                    <ButtonContainer>
                        <NavRow>
                            <Counter>{formatIndex(activeIndex)}/{formatTotal(total)}</Counter>
                            <NavButtons>
                                <NavButton onClick={goPrev} disabled={activeIndex === 0}>
                                    <img src={ArrowLeft} />
                                </NavButton>
                                <NavButton onClick={goNext} disabled={activeIndex === total - 1}>
                                    <img src={ArrowRight}/>
                                </NavButton>
                             </NavButtons>
                        </NavRow>
                    </ButtonContainer>
                </InfoContainer>
                <CircleContainer>
                    <Years>
                        <span ref={startRef}>{active.startYear}</span>
                        <span ref={endRef}>{active.endYear}</span>
                    </Years>
                    <TopicTitle>{active.title}</TopicTitle>
                    <MobileDivider />
                    <CircleWrap>
                        <CircleNav segments={segments} activeIndex={activeIndex} onSelect={setActiveIndex}></CircleNav>
                    </CircleWrap>
                </CircleContainer>
            </TimeLineContainer>
            <Content>
                <BottomRow>
                    <EventsSlider segment={active} />
                    <MobileNavRow>
                        <NavButtons>
                            <NavButton onClick={goPrev} disabled={activeIndex === 0}>
                                <img src={ArrowLeft} />
                            </NavButton>
                            <NavButton onClick={goNext} disabled={activeIndex === total - 1}>
                                <img src={ArrowRight}/>
                            </NavButton>
                        </NavButtons>
                        <Dots>
                            {segments.map((_, i) => (
                                <Dot key={`dot-${i}`} $active={i === activeIndex} />
                            ))}
                        </Dots>
                    </MobileNavRow>
                </BottomRow>
            </Content>
        </Screen>
      </>
    );
  };
