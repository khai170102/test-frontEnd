import LogoMobile from "./images/LogoMobile";
import Linkedin from "./images/Linkedin.png";
import Twitter from "./images/Twitter.png";
import Youtube from "./images/Youtube.png";

const footerLinks = {
  "WEB MAP": ["Home", "Games", "News", "Math", "Company", "Events", "Partners"],
  "ABOUT US": [
    "Licensing",
    "Certification",
    "Responsible Gaming",
    "Privacy Policy",
  ],
  EVENTS: ["PG ICE 2017", "PG ICE 2018", "About ICE"],
  "OUR PARTNERS": ["Relax Gaming", "Leander Games"],
};

const Footer = () => {
  return (
    <footer className="text-black py-8 mx-[10%] flex flex-col">
      <div className="flex justify-between mb-8">
        <div>
          <LogoMobile className="text-[#A59E9E]" />
          <div className="font-normal text-xs mt-3 opacity-50">
            <div>Valletta Buildings, South Street,</div>
            <div>Valletta - VLT 1103 Malta</div>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="#" aria-label="LinkedIn">
              <img src={Linkedin} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={Twitter} alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={Youtube} alt="YouTube" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="hidden justify-around gap-24 sm:flex">
          {Object.entries(footerLinks).map(([sectionTitle, links]) => (
            <div key={sectionTitle} className="flex flex-col">
              <h3 className="font-semibold text-sm mb-2">{sectionTitle}</h3>
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-black opacity-50 font-normal hover:underline mb-1"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
