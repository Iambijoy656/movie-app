"use client";
import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const Loading = () => {
    return (
        <div className="w-full flex items-center justify-center h-screen z-50">
            <Lottie
                className="w-28 md:w-56 lg:w-96"
                animationData={loading}
                loop={true}
            />
        </div>
    );
};

export default Loading;
