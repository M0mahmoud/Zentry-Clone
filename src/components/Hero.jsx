import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const nextVdRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);

    const TOTALVIDEOS = 4;
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    useEffect(() => {
        if (loadedVideos === TOTALVIDEOS - 1) {
            setLoading(false);
        }
    }, [loadedVideos]);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };
    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex % TOTALVIDEOS) + 1);
    };

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });
                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => nextVdRef.current.play(),
                });
                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        },
    );

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    return (
        <section className="relative w-screen overflow-x-hidden h-dvh">
            {loading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="spinner">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            )}
            <div
                id="video-frame"
                className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75"
            >
                <div>
                    <div className="absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64">
                        <div>
                            <div
                                onClick={handleMiniVdClick}
                                className="transition-all duration-500 ease-in origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100"
                            >
                                <video
                                    ref={nextVdRef}
                                    src={getVideoSrc(
                                        (currentIndex % TOTALVIDEOS) + 1,
                                    )}
                                    loop
                                    muted
                                    id="current-video"
                                    className="object-cover object-center origin-center scale-150 size-64"
                                    onLoadedData={handleVideoLoad}
                                />
                            </div>
                        </div>
                    </div>

                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute z-20 invisible object-cover object-center absolute-center size-64"
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(
                            currentIndex === TOTALVIDEOS - 1 ? 1 : currentIndex,
                        )}
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 object-cover object-center size-full"
                        onLoadedData={handleVideoLoad}
                    />
                </div>

                <h1 className="absolute z-40 special-font hero-heading bottom-5 right-5 text-blue-75">
                    G<b>A</b>MING
                </h1>

                <div className="absolute top-0 left-0 z-40 size-full">
                    <div className="px-5 mt-24 sm:px-10">
                        <h1 className="text-blue-100 special-font hero-heading">
                            redefi<b>n</b>e
                        </h1>

                        <p className="mb-5 text-blue-100 max-w-64 font-robert-regular">
                            Enter the Metagame Layer <br /> Unleash the Play
                            Economy
                        </p>

                        <Button
                            id="watch-trailer"
                            title="Watch trailer"
                            leftIcon={<TiLocationArrow />}
                            containerClass="bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>

            <h1 className="absolute text-black special-font hero-heading bottom-5 right-5">
                G<b>A</b>MING
            </h1>
        </section>
    );
}