import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Explore",
      cls: "footer-col-2",
      links: [
        // { name: "Search Services", link: "/storage" },
        // { name: "Search Biospecimens", link: "/bio-fluids" },
        { name: "Biospecimens", link: "#" },
        { name: "Services", link: "service" },
        { name: "Research papers", link: "/research" },
        { name: "Digital Pathology", link: "/digital-pathology" },
        { name: "TMA", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Enquiry",
      cls: "footer-col-3",
      links: [
        // { name: "Connect to collaborate", link: "/contact" },
        // { name: "Connect to enquire", link: "/contact" },
        { name: "Collaboration query", link: "collaboration-query" },
        { name: "Enquiry on inventory", link: "/contact" },
        { name: "Connect to experts", link: "/contact" },
        { name: "Customization of services", link: "/contact" },

      ],
    },
    {
      id: 3,
      title: "Learn",
      cls: "footer-col-3",
      links: [
        { name: "About Us", link: "/about" },
        { name: "Contact us", link: "/contact" },
        { name: "Email us", link: "mailto:sales@clinicalbiosamples.com" },

      ],
    },
  ],
  contact_info: [
    {
      support_info: [
        " C-25, C Block, Sector 8, Noida, Uttar Pradesh 201301 ",
        "+91 83838 64051",
        " sales@clinicalbiosamples.com",
      ],
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> CBRS</Link>.<i> All Rights Reserved Copyright</i>
    </>
  ),
};

console.log(footer_content.contact_info[0].support_info)

const { footer_info, copy_right_text, contact_info } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <a href="index">
                      <img src="/assets/img/logo/white-logo.png" alt="logo" />
                    </a>
                  </h4>
                  {
                      footer_content.contact_info[0].support_info.map((description, i) => (
                        <div key={'description' + i}>
                          <p className="mb-0">{description}</p>
                        </div>
                      ))
                    }
                  
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {
                footer_info.map(item => <div key={'footer-list'+item.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4 className="footer-widget__title mb-20">{item.title}</h4>
                    <div className="footer-widget__links">
                      <ul>

                        {
                          item.links.map((link, i) => <li key={'footer-link' + i}>
                            <Link href={`${link?.link ? link.link : "/"}`}>{link.name}</Link>
                          </li>)
                        }

                      </ul>
                    </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright-info info-direction">
                  <ul className="d-flex align-items-center">
                    <li>
                      <Link href="/terms-conditions">Terms and conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy policy</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
