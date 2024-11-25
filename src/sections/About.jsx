import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import AnimatedTitle from "../components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });
    return (
        <div id="about" className="w-screen min-h-screen">
            <div className="relative flex flex-col items-center gap-5 mb-8 mt-36">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Zentry
                </p>

                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext">
                    <p>
                        The Game of Games begins—your life, now an epic MMORPG
                    </p>
                    <p className="text-[#2C2F35]">
                        Zentry unites every player from countless games and
                        platforms, both digital and physical, into a unified
                        Play Economy
                    </p>
                </div>
            </div>

            <div className="w-screen h-dvh" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute top-0 left-0 object-cover size-full"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
