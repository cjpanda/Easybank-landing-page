import Logo from "../assets/logoFooter.svg";
import Facebook from "../assets/icon-facebook.svg";
import Youtube from "../assets/icon-youtube.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="padding-x py-20 bg-primary">
      <div className="max-width flex justify-between  flex-col xl:flex-row lg:flex-row md:flex-row ">
        <div className="flex flex-col gap-20 items-center text-center xl:text-left md:text-left lg:text-left xl:items-start lg:items-start md:items-start xl:flex-row md:flex-row lg:flex-row">
          <div className="">
            <img src={Logo} alt="Logo" width={180} height={100} />
            <div className="flex gap-5 mt-10">
              <img src={Facebook} alt="facebook" width={30} height={30} />
              <img src={Youtube} alt="youtube" width={30} height={30} />
              <img src={Twitter} alt="twitter" width={30} height={30} />
              <img src={Pinterest} alt="pinterest" width={30} height={30} />
              <img src={Instagram} alt="instagram" width={30} height={30} />
            </div>
          </div>
          <div className="text-light flex flex-col xl:flex-row lg:flex-row md:flex-row xl:gap-20 md:gap-20">
            <ul className="">
              <li>About Us</li>
              <li className="py-2">Contact</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li className="py-2">Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center  pt-5">
          <button className="gradient p-2 px-5 text-light rounded-3xl font-semibold hover:opacity-85">
            Request Invite
          </button>
          <p className="text-white mt-5 text-center">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
