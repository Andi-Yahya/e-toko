"use client";

import { transform } from "next/dist/build/swc";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
    "/banner-slides/1.jpeg",
    "/banner-slides/2.jpeg",
    "/banner-slides/3.jpeg",
    "/banner-slides/4.jpeg",
    "/banner-slides/5.jpeg",
];

const BannerSlider = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
    const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

    useEffect(() => {
        const slideInterval = setInterval(next, 3000);
        return () => clearInterval(slideInterval);
    });
    return (
        <div className=" relative group overflow-hidden rounded-lg">
            <div
                className="transition-transform ease-out duration-500 flex w-full h-full  "
                style={{ transform: `translateX(-${current * 100}%` }}
            >
                {images.map((image, id) => (
                    <Image width={1208} height={302} src={image} alt={image} key={id} />
                ))}
            </div>

            <div className="hidden group-hover:block">
                <div className="flex  absolute justify-between items-center inset-0 px-3 ">
                    <button onClick={prev}>
                        <FiChevronLeft
                            size={30}
                            className=" lg:size-12 bg-white rounded-full bg-opacity-50 hover:bg-opacity-85"
                        />
                    </button>
                    <button onClick={next}>
                        <FiChevronRight
                            size={30}
                            className=" lg:size-12 bg-white rounded-full bg-opacity-50 hover:bg-opacity-85"
                        />
                    </button>
                </div>
            </div>

            <div className="absolute flex flex-row gap-2 right-0 left-0 bottom-4 items-center justify-center">
                {images.map((img, i) => (
                    <div
                        className={`rounded-full  bg-white transition-all ease-in w-2 h-2 ${
                            i === current ? "p-2" : "bg-opacity-70"
                        }`}
                        key={i}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
