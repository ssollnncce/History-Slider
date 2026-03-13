import React, { useMemo, useState, useEffect, useRef } from "react";
import { Circle, Point, ActivePoint, PointLabel} from "../styles/CircleNav.styles";
import gsap from "gsap";

type Props = {
    segments: { id: string; title: string }[];
    activeIndex: number;
    onSelect: (index: number) => void;
};

export const CircleNav: React.FC<Props> = ({ segments, activeIndex, onSelect }) => {
    const count = segments.length;
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const circleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const angle = -(360 / count) * activeIndex;
        gsap.to(circleRef.current, { rotate: angle, duration: 0.6, ease: "power2.out"});
    }, [activeIndex, count]);

    const points = useMemo(() => {
        const step = (Math.PI * 2) / count;
        const radius = 268;
        return segments.map((_, i) => {
            const angle = step * i - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return { x, y };
        });
    }, [segments, count]);

  const angle = -(360 / count) * activeIndex;

  return (
    <Circle ref={circleRef} style={{ "--rot": `${angle}deg` } as React.CSSProperties}>
            {points.map((p, i) => {
                const isActive = i === activeIndex;
                const label = segments[i].title;

                const isHover = hoverIndex === i;

                return (
                    <Point
                        key={segments[i].id}
                        style={{ "--x": `${p.x}px`, "--y": `${p.y}px` } as React.CSSProperties}
                        onClick={() => onSelect(i)}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {isActive || isHover ? (
                            <ActivePoint>{i + 1}</ActivePoint>
                        ) : (
                            <span />
                        )}
                        <PointLabel $visible={isActive || isHover}>{label}</PointLabel>
                    </Point>
                );
            })}
        </Circle>
    )
}
