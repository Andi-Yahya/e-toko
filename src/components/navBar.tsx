"use client";

import { Image, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BiBell, BiCartAdd, BiEnvelope, BiSearch, BiSolidUser, BiStore } from "react-icons/bi";

const NavBar = () => {
    const refNav = useRef<HTMLDivElement | null>(null);
    const refNavShowed = useRef<HTMLDivElement | null>(null);
    const refNavOnScrolled = useRef<HTMLDivElement | null>(null);
    const hamburgerClicked = () => {
        refNav.current?.classList.toggle("burger-active");
        refNavShowed.current?.classList.toggle("hidden");
    };
    const onScrollWindow = () => {
        if (scrollY >= 55) {
            refNavOnScrolled.current?.classList.add("active");
        } else {
            refNavOnScrolled.current?.classList.remove("active");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScrollWindow);
    }, []);
    return (
        <nav ref={refNavOnScrolled} className="navbar z-[999]">
            <div className="  px-10 mt-5 h-full flex flex-row justify-between  rounded-md items-center gap-5">
                <Image
                    src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
                    className=" w-26 h-8 sm:w-33 sm:h-9 "
                    alt="Picture of the author"
                />
                <Text className="hidden lg:block">Kategori</Text>
                <div className="relative  lg:flex-grow  ">
                    <div
                        onClick={hamburgerClicked}
                        ref={refNav}
                        className=" flex flex-col gap-2 md:hidden md:flex-none"
                    >
                        <span className="burger origin-top-left transform duration-150"></span>
                        <span className="burger transform duration-150"></span>
                        <span className="burger origin-bottom-left transform duration-150"></span>
                    </div>
                    <div className="hidden md:block sm:content-center " ref={refNavShowed}>
                        <div className=" md:flex md:flex-row bg-white shadow-md md:shadow-none md:bg-transparent absolute md:static top-7 md:top-0 md:right-0 right-9 mx-auto p-2 rounded-md items-center gap-10">
                            <InputGroup className="gap-2 ring-2 rounded-md overflow-hidden ring-slate-200 px-2 box-border">
                                <InputLeftAddon>
                                    <BiSearch size={"1.5em"} />
                                </InputLeftAddon>
                                <Input
                                    className="hidden sm:block outline-none w-full p-[7px]"
                                    type="tel"
                                    placeholder="Seacrh..."
                                />
                            </InputGroup>
                            <div className="sm:order-3  md:flex-row md:flex  gap-2">
                                <button>
                                    <BiCartAdd size={"1.5em"} />
                                </button>
                                <button>
                                    <BiBell size={"1.5em"} />
                                </button>
                                <button>
                                    <BiEnvelope size={"1.5em"} />
                                </button>
                            </div>
                            <div className=" sm:gap-2  md:order-3 md:flex md:items-center  ">
                                <BiStore size={"1.5em"} className="self-center" />
                                <p className="font-bold hidden md:block">Toko</p>
                            </div>
                            <div className="hidden  order-last lg:flex-row lg:flex md:justify-center items-center">
                                <BiSolidUser size={"1.5em"} />
                                <Text className="font-bold">Andi</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
