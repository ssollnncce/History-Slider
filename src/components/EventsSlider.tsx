import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Segment } from "../data/timeline";
import { SliderWrap, Card, CardYear, CardText, ArrowBtn, ArrowContainer } from "../styles/EventsSlider.styles";
import gsap from "gsap";

type Props = {
    segment: Segment;
};

export const EventsSlider: React.FC<Props> = ({ segment }) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            ".event-card",
            {opacity: 0, y: 10},
            {opacity: 1, y: 0, duration: 0.4, stagger: 0.05}
        );
    }, [segment.id]);
    
    return (
        <SliderWrap>
            <ArrowContainer>
                <ArrowBtn ref={prevRef} style={{ visibility: atStart ? "hidden" : "visible" }}>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </ArrowBtn>
            </ArrowContainer>
            <Swiper
                key={segment.id}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={4}
                breakpoints={{ 0: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 4, spaceBetween: 40 } }}
                onSwiper={(s) => {
                    setAtStart(s.isBeginning);
                    setAtEnd(s.isEnd);
                }}
                onReachBeginning={() => setAtStart(true)}
                onReachEnd={() => setAtEnd(true)}
                onFromEdge={(s) => {
                    setAtStart(s.isBeginning);
                    setAtEnd(s.isEnd);
                }}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                >
                {segment.events.map((ev) => (
                    <SwiperSlide key={`${segment.id}-${ev.year}`}>
                        <Card className="event-card">
                            <CardYear>{ev.year}</CardYear>
                            <CardText>{ev.text}</CardText>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ArrowContainer>
                <ArrowBtn ref={nextRef} style={{ visibility: atEnd ? "hidden" : "visible" }}>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </ArrowBtn>
            </ArrowContainer>
        </SliderWrap>
    );
};
