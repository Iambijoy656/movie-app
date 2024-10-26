"use client";
import Lottie from "lottie-react";
import Error from "../assets/error.json";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <Lottie
                className="max-w-full md:max-w-3xl"
                animationData={Error}
                loop={true}
            />
            <h2 className="text-4xl md:text-8xl font-bold text-[#c19f5f]  my-5">404</h2>
            <Link href="/">
                <button className=" text-xl text-white">Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;
