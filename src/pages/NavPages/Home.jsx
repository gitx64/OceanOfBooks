import React from "react";
import Card from "../../components/Card";

function Home() {
    return (
        <div className="flex justify-center px-4 py-12">
            <div className="w-full max-w-7xl">
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold underline mb-6 font-stretch-condensed text-center">
                        Most Trending Books
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {[...Array(8)].map((_, idx) => (
                            <Card key={`trending-${idx}`} />
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold underline mb-6 font-stretch-condensed text-center">
                        Based On Your Current Search
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {[...Array(6)].map((_, idx) => (
                            <Card key={`search-${idx}`} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
