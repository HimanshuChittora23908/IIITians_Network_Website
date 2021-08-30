import Image from "next/image";
import photo1 from "../../images/1x.png";
import coffee from "../../images/coffee.png";
import laptops from "../../images/laptops.png";
import laptop from "../../images/laptop.png";
import globe from "../../images/globe.png";

const WorkingTeam = () => {
  return (
    <>
        <div className="mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="mt-2 text-2xl font-medium md:text-4xl lg:text-5xl lg:font-semibold lg:mt-4">
            <Image src={photo1} alt="smart working team" />
            </div>
        </div>
        <div className="flex flex-row">
            <Image className="" src={coffee} alt="coffee" />
            <Image className="" src={laptops} alt="laptops" />
            <Image className="" src={laptop} alt="laptop" />
        </div>
        <div className="mx-4 my-4 md:mx-8 lg:mx-12 lg:text-4xl">
            <p className="lg:float-right font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <br />
            <p className="lg:float-right font-bold">
            Turpis adipiscing lorem pellentesque aliquam nec egestas.
            </p>
            <br />
            <p className="lg:float-right font-bold">
            Sapien nulla non mattis lacinia. Convallis egestas in ultrices
            </p>
            <br />
            <p className="lg:float-right font-bold">
            est maecenas potenti at viverra. Aliquam quam adipiscing 
            </p>
            <br />
            <p className="lg:float-right font-bold">
            erat sodales nunc fames posuere.
            </p>
        </div>
        <div className="mx-4 my-4 md:mx-8 lg:mx-12 lg:text-4xl py-16">
            <p className="lg:float-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <br />
            <p className="lg:float-right">
            Turpis adipiscing lorem pellentesque aliquam nec egestas.
            </p>
            <br />
            <p className="lg:float-right">
            Sapien nulla non mattis lacinia. Convallis egestas in ultrices
            </p>
            <br />
            <p className="lg:float-right">
            est maecenas potenti at viverra. Aliquam quam adipiscing 
            </p>
            <br />
            <p className="lg:float-right">
            erat sodales nunc fames posuere.
            </p>
        </div>
        <br />
        <div className="lg:grid lg:grid-cols-3 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="lg:col-span-1 lg:pr-4">
                <Image src={globe} alt="globe" />
            </div>
            <div className="lg:col-span-2 lg:pl-4">
                <p className="lg:text-3xl lg:font-bold text-center">
                We might be spread across northern, eastern, western and southern part of India, operating on these sides of the of the country, but we’re all on the same page. We’re serious about what we do, and the commitments we make to our clients. We also try to give our best in grabing as much as possible while learning and doing projects.
                </p>
            </div>
        </div>
    </>
  );
};

export default WorkingTeam;
