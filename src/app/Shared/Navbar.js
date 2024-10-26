"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { signOut } from "next-auth/react";

const Navbar = () => {

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScroll, setIsScroll]);



    const nav = (
        <>
            <li
                onClick={() => setIsMenuOpen(false)}
                className={
                    pathname === "/" ? "text-[#C19F5F]" : "text-black lg:text-white"
                }
            >
                <Link href="/" className="hover:text-[#C19F5F]">
                    Home
                </Link>
            </li>

            <li
                onClick={() => setIsMenuOpen(false)}
                className={
                    pathname === "/watchlist"
                        ? "text-[#C19F5F]"
                        : "text-black lg:text-white"
                }
            >
                <Link href="/watchlist" className="hover:text-[#C19F5F]">
                    Watch List
                </Link>
            </li>
            <li
                onClick={() => setIsMenuOpen(false)}
                className={
                    pathname === "/login" ? "text-[#C19F5F]" : "text-black lg:text-white"
                }
            >
                <Link
                    href="/login"
                    className="cursor-pointer"
                // target="_blank"
                >
                    <AiOutlineUser size="25px" />
                </Link>
            </li>

            {/* <li
                onClick={() => setIsMenuOpen(false)}
                className={
                    "text-black lg:text-red-500"
                }
            >
                <button
                    onClick={handleLogout}
                    className="cursor-pointer"
                // target="_blank"
                >
                    <AiOutlineUser size="25px" />
                </button>
            </li> */}
        </>
    );

    return (
        <div
            className={`${isScroll ? "backdrop-blur-sm bg-black bg-opacity-75" : "bg-transparent"
                } z-50 fixed w-full top-0  `}
        >
            <div className="container relative font-inter">
                <div className="flex md:gap-10 h-28 items-center justify-between">
                    {/* For Large Devices */}
                    <div className="">
                        <Link href="/">
                            <Image
                                // className="-ml-96"
                                src={'https://res.cloudinary.com/ddlmcq5ue/image/upload/v1729935490/download__1_-removebg-preview_av7g8w.png'}
                                alt="Logo"
                                className="cursor-pointer"
                                width={210}
                                height={110}
                            />
                        </Link>
                        {/* <Link href="/"> 
              <Image
                // className="-ml-96"
                src="https://ik.imagekit.io/maynuddin/tiggzy-it-restaurant/WhatsApp%20Image%202023-08-03%20at%2022.06.46.webp"
                alt="Logo"
                className="cursor-pointer"
                fill
              />
              </Link> */}
                    </div>

                    <ul className="hidden lg:flex text-base md:space-x-4 xl:space-x-9 font-bold">
                        {nav}
                    </ul>

                    {/* For Mobile Devices */}
                    <div className="block lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <HiMenu className="text-2xl md:text-4xl text-white" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-5 right-5 w-fit z-50 ">
                                <div className="py-5 px-8 m-3 md:m-5 shadow-md rounded-md bg-white relative">
                                    <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <MdClose className="text-2xl md:text-3xl text-black hover:text-[#c30000] absolute top-1 right-1" />
                                    </button>
                                    <ul className="font-bold flex flex-col text-gray space-y-3">
                                        {nav}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
