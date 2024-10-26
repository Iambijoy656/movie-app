// /app/login/page.js
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
            callbackUrl: "/watchlist",
        });

        if (result?.error) {
            setError("Login failed. Please check your credentials.");
            console.error(result.error);
        } else if (result?.url) {

            window.location.href = result.url;
        }
    };

    return (

        <div className="py-28 my-10 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-white text-2xl">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-5">
                <input
                    type="text"
                    name="username"
                    className="p-2"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="p-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="bg-white p-2 mx-3" type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
