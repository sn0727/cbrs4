import research_data from "@/data/research-data";
import Link from "next/link";
import React from "react";

const ResearchArea = () => {
  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="download-pdf col-12 col-md-4 col-lg-4" style={{display: 'none'}}>
              <div className="inner-pdf-ds">
                <div className="file-title">
                  <h3>File Download / Pdf Preview</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="file-download">
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <p className="my-3">Download file here !</p>
                  {/* <a href="assets/pdf/fake.pdf" className="download-link" download>Download Here !</a> */}
                  <Link href="assets/pdf/fake.pdf" download className="research-item__btn">
                    Download Here
                    </Link>
                </div>
              </div>
            </div>

            {research_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`research-item ${item.color} mb-50 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="research-item__thum fix mb-20">
                    <img src={item.img} alt="research-thumb" />
                  </div>
                  <div className="research-item__content">
                    <span>{item.category}</span>
                    <h4 className="research-item__title mb-20">
                      <Link href="/#">{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    <Link href="/#" className="research-item__btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-30">
                <nav>
                  <ul>
                    <li>
                      <Link href="/research">
                        <i className="fa-light fa-arrow-left-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/research">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="/research">3</Link>
                    </li>
                    <li>
                      <Link href="/research">...</Link>
                    </li>
                    <li>
                      <Link href="/research">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchArea;
