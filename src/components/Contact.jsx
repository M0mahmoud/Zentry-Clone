import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

export default function Contact() {
    return (
        <section id="contact" className="w-screen px-10 my-20 min-h-96">
            <div className="relative py-24 bg-black rounded-lg text-blue-50 sm:overflow-hidden">
                <div className="absolute top-0 hidden h-full overflow-hidden -left-20 w-72 sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>

                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-[10px] uppercase">
                        Join Zentry
                    </p>

                    <AnimatedTitle
                        title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
                        className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
                    />

                    <Button
                        title="contact us"
                        containerClass="mt-10 cursor-pointer"
                    />
                </div>
            </div>
        </section>
    );
}

function ImageClipBox({ src, clipClass }) {
    return (
        <div className={clipClass}>
            <img src={src} />
        </div>
    );
}