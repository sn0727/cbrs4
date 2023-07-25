import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
            backgroundImage: `url(/assets/img/banner/hero-bg-01.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Laboratory And Biobank Services</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-12">
              <div className="tp-breadcrumb__link d-flex align-items-center">
                <span>
                  CBRS : <Link href="/service"> Laboratory And Biobank Services</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
