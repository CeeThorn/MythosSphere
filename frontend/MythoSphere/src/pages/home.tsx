import React from "react";
import SearchBar from "../components/search";

const Home = () => {
    return (

        <main className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to MythoSphere</h1>
            <SearchBar />
        </main>
    )
};
export default Home;
