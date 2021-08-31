import Image from "next/image";
import photo1 from "../../images/1x.png";
import coffee from "../../images/coffee.png";
import laptops from "../../images/laptops.png";
import laptop from "../../images/laptop.png";
import globe from "../../images/globe.png";

const WhatWeDo = () => {
  return (
    <>
        <div className="bg-gray-700 lg:grid lg:grid-cols-2">
            <div className="col-span-1 text-center text-white p-8 text-3xl font-bold">
                <h1 className="text-6xl">What We Do</h1>
                <br />
                <p>Expect creativity</p>
                <p>Obsess over details</p>
                <p>Value relationships</p>
                <p>High-five</p>
                <p>Make things, break things</p>
                <p>Meme</p>
                <p>Exceed expectations</p>
                <p>World-class digital</p>
                <p>Party</p>
            </div>
            <div className="col-span-1 text-center text-white p-8 text-3xl font-bold">
                <h1 className="text-6xl"><strike>What we don't do</strike></h1>
                <br />
                <p>Work late / weekends</p>
                <p>Resist cake</p>
                <p>Sacrifice quality for profit</p>
                <p>Overpromise</p>
                <p>Lose at Mario Kart</p>
                <p>Work for free</p>
                <p>Egos</p>
                <p>Impossible deadlines</p>
                <p>Outsource</p>
            </div>
        </div>
    </>
  );
};

export default WhatWeDo;
