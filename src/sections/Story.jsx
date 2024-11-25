import gsap from "gsap";
import React, { useRef } from "react";

import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";
import RoundedCorners from "../components/RoundedCorners";

export default function Story() {
    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((yPos - centerY) / centerY) * -15;
        const rotateY = ((xPos - centerX) / centerX) * 15;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;
        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };

    return (
        <section
            id="story"
            className="w-screen bg-black min-h-dvh text-blue-50"
        >
            <div className="flex flex-col items-center py-10 pb-24 size-full">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    the multiversal ip world
                </p>

                <div className="relative size-full">
                    <AnimatedTitle
                        title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src="/img/entrance.webp"
                                    alt="entrance.webp"
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <RoundedCorners />
                    </div>
                </div>

                <div className="flex justify-center w-full -mt-80 md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex flex-col items-center h-full w-fit md:items-start">
                        <p className="max-w-sm mt-3 text-center font-circular-web text-violet-50 md:text-start">
                            Where realms converge, lies Zentry and the boundless
                            pillar. Discover its secrets and shape your fate
                            amidst infinite opportunities.
                        </p>

                        <Button
                            id="realm-btn"
                            title="discover prologue"
                            containerClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
