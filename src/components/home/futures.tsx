import React from "react";
import { futuresList } from "./home-data";

const Futures = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16 bg-accent">
          <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md font-medium">
            Unlock the Power of
          </p>
          <h1 className="text-4xl font-bold text-heading mt-4">
            Future Tech Features
          </h1>
        </div>

        {futuresList.map(({ cards, heading, icon, text }) => (
          <div
            key={heading}
            className="grid md:grid-cols-12 md:gap-px bg-border border-t border-r border-l"
          >
            <div className="md:col-span-5 padding bg-background flex flex-col justify-center pt-10 md:py-10">
              <div className="">{icon}</div>
              <h3 className="text-2xl font-semibold text-heading mt-6">{heading}</h3>
              <p className="mt-2 text-balance">{text} </p>
            </div>

            <div className="md:col-span-7 grid lg:grid-cols-2 gap-4 xl:gap-6 bg-background py-10 lg:py-14 padding">
              {cards.map(({ heading, text }) => (
                <div key={heading} className=" border px-4 py-5 rounded-md bg-accent">
                  <p className="text-base md:text-lg font-medium text-heading">{heading}</p>
                  <p className="mt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </section>
    </>
  );
};

export default Futures;
