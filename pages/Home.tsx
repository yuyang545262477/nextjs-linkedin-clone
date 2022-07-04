import React from "react";
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <header>
                <div>
                    <Image src={"https://picsum.photos/200/300"} layout={"fill"}/>
                </div>
            </header>
        </div>
    );
};

export default Home;
