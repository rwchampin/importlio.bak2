"use client";
import { SVG } from "@svgdotjs/svg.js"
import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

const Cursor = ({ size }) => {
    const cursorRef = useRef(null);

    useEffect(() => {
        var rect = new Circle().size(100, 100).addTo(draw)
        const cursor = cursorRef.current;
        const onMouseMove = (event) => {
            gsap.to(cursor, {
                duration: 0.2,
                x: event.clientX,
                y: event.clientY,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        window.addEventListener('mousemove', onMouseMove, false);

        return () => {
            window.removeEventListener('mousemove', onMouseMove, false);
        };
    }, []);

    return (
        <svg ref={cursorRef} viewBox={`0 0 ${size} ${size}`}>
            <circle cx="50" cy={size/2} r={size/2} />
        </svg>
    )
}

export default Cursor;