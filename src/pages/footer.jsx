import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import NewsLetter from './newsLetter';
const Footer = () => {
  const space = { margin: '0 10px 0 0 ', color: 'blue' };
  return (
    <div className="flex flex-wrp md:flex-nowrap justify-around items-center w-11/12 mx-auto mt-20 h-[358px] shadow-md bg-secondary-grey2">
      <div className="flex w-11/12 mx-auto justify-center flex-1 ml-4 mt-10 ">
        <div className="mr-2  ">
          <p className="border-e-2 border-black pr-10 font-semibold ">
            Subscribe <br />
            to get updated <br /> news
          </p>
          <p className=" relative ">
            <span className="absolute top-0 left-0 w-full h-full animate-spi mt-4 text-xs">
              welcome.to.Work
            </span>
          </p>
        </div>
        <div className="ml-6 mr-4">
          <h2 className="text-4xl font-bold Lato">
            Sign up for <br /> Newsletter
          </h2>
          <div className="flex mt-2">
            <input
              className="p-2 w-full  rounded-lg border"
              type="email"
              placeholder="email@domain.com"
            ></input>

            <button className="bg-primary-blue rounded-md p-1 w-2/4 text-xs text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="visa w-50 sm:flex sm:flex-1 justify-center mx-4  mt-10 hidden ">
        <div className="bg-black h-60 w-8 shadow-lg">
          <img className="w-8 top-48 relative " src="chip.svg" alt="" />
        </div>
        <div className="bg-white w-[150px] h-60 shadow-lg rounded-r-sm flex 0">
          <img className="w-8 ml-14 mr-5  relative" src="visa.svg" alt="" />
          <img
            className="relative w-8 mt-36 "
            src="mstCard.svg
            "
            alt="hhhhh"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
